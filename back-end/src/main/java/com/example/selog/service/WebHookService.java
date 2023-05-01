package com.example.selog.service;

import com.example.selog.entity.Member;
import com.example.selog.entity.Record;
import com.example.selog.repository.MemberRepository;
import com.example.selog.repository.RecordRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.bytebuddy.asm.Advice;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
@Service
public class WebHookService {

    private final RecordRepository recordRepository;
    private final MemberRepository memberRepository;
    public void createRecord(HashMap<String, Object> request) {

        HashMap<String,Object> sender = (HashMap<String, Object>) request.get("sender");
        HashMap<String,Object> repository = (HashMap<String, Object>) request.get("repository");

        String repoName = (String)repository.get("name");
        String who = (String)sender.get("login");

        log.info("유저네임 {}",who);
        Optional<Member> result = memberRepository.findByEmail(who);

        //사용자가 아닌 다른 유저가 push 했으므로 무시
        if(!result.isPresent()) return;

        Member member = result.get();

        //시작 날짜를 포함하므로 1더함
        long diff = calculateDiff(member.getStart_date(),LocalDateTime.now()) + 1;

        log.info("두 날짜의 차이 : {}",diff);

        String target = member.getGithubTarget();
        int day = (target.charAt(0) - '0');
        int cnt = (target.charAt(2) - '0');

        log.info("목표날짜일수 {} 목표 회수 {}",day,cnt);

        long offset = diff % day == 0 ? diff / day - 2 : diff / day -1;
        boolean progress = false; //오늘 날짜가 시작 기간을 포함하는 구간이면
        List<Record> rList = null;

        //시작으로부터 day일 이내였을 경우
        if(offset < 0) {
            rList = recordRepository.getUserRecordByUserIdAfterStartDate(member.getUserId(),
                    member.getStart_date(),
                    LocalDateTime.now(),
                    "github");
            progress = true;

        }
        //현재 날짜 구간을 포함하는 앞부분
        else {
            rList = recordRepository.getUserRecordByUserIdAfterStartDate(member.getUserId(),
                    member.getStart_date().plusDays(offset * day),
                    member.getStart_date().plusDays((offset+1) * day-1),
                    "github");
        }

        //현재 구간날짜가 아니면서
        if(!progress) {
            //목표 달성실패했다면 시작시간을 현재시간으로 재설정
            if(rList.size() < cnt) {
                log.info("목표 시간 초기화");
                member.updateStartDate(LocalDateTime.now());
            }
            //현재 구간에서 목표를 달성한 경우라면 포인트 주기
            List<Record> recordList = recordRepository.getUserRecordByUserIdAfterStartDate(member.getUserId(),
                    member.getStart_date().plusDays((offset+1) * day),
                    LocalDateTime.now(),
                    "github");

            if(recordList.size() +1 == cnt) {
                updatePoint(member);
            }
        }

        else {
            //꾸준히 해왔다면 point증가
            if(rList.size() + 1 == cnt) {
                log.info("{} 포인트 증가",member.getNickname());
                updatePoint(member);
            }
        }

        Record record = Record.builder()
                .category("github")
                .content(repoName)
                .member(member)
                .build();

        recordRepository.save(record);
    }

    public long calculateDiff(LocalDateTime date1, LocalDateTime date2) {

        LocalDate start = date1.toLocalDate();
        LocalDate end = date2.toLocalDate();

        return ChronoUnit.DAYS.between(start,end);
    }

    public void updatePoint(Member member) {
        member.updatePoint(10);
        memberRepository.save(member);
    }
}