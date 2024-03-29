package com.example.selog.controller;

import com.example.selog.dto.member.*;
import com.example.selog.exception.CustomException;
import com.example.selog.exception.error.ErrorCode;
import com.example.selog.response.ErrorResponse;
import com.example.selog.response.SuccessResponse;
import com.example.selog.service.MemberService;
import com.example.selog.util.SecurityUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class MemberController {
    private final MemberService memberService;

    @GetMapping
    public ResponseEntity<?> findMemberInfoById() {
        try{
            MemberDto memberDto = memberService.findMemberInfoByUserId(SecurityUtil.getCurrentMemberId());
            return new ResponseEntity<>(new SuccessResponse(memberDto), HttpStatus.OK);
        } catch(CustomException e){
            return new ResponseEntity<>(new ErrorResponse(e.getErrorCode().getHttpStatus(),e.getMessage()), e.getErrorCode().getHttpStatus());
        } catch (Exception e){
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/access") // 토큰 재발급
    public ResponseEntity<?> reissue(@RequestBody TokenRequestDto tokenRequestDto) {
        try{
            TokenDto tokenDto = memberService.reissue(tokenRequestDto);
            return new ResponseEntity<>(new SuccessResponse(tokenDto), HttpStatus.OK);
        } catch(CustomException e){
            return new ResponseEntity<>(new ErrorResponse(e.getErrorCode().getHttpStatus(),e.getMessage()), e.getErrorCode().getHttpStatus());
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignUpDto signUpDto){
        try{
            MemberDto memberDto = memberService.signup(signUpDto);
            return new ResponseEntity<>(new SuccessResponse(memberDto), HttpStatus.OK);
        } catch(CustomException e){
            return new ResponseEntity<>(new ErrorResponse(e.getErrorCode().getHttpStatus(),e.getMessage()), e.getErrorCode().getHttpStatus());
        } catch (Exception e){
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/logout")
    public ResponseEntity<?> logout() {
        try {
            memberService.logout(SecurityUtil.getCurrentMemberId());
            return new ResponseEntity<>(new SuccessResponse("로그아웃 성공"), HttpStatus.OK);
        } catch(CustomException e){
            return new ResponseEntity<>(new ErrorResponse(e.getErrorCode().getHttpStatus(),e.getMessage()), e.getErrorCode().getHttpStatus());
        } catch (Exception e){
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping
    public ResponseEntity<?> deleteMember(){
        try{
            memberService.deleteMember(SecurityUtil.getCurrentMemberId());
            return new ResponseEntity<>(new SuccessResponse("멤버 삭제 되었습니다."),HttpStatus.OK);
        } catch(CustomException e){
            return new ResponseEntity<>(new ErrorResponse(e.getErrorCode().getHttpStatus(),e.getMessage()), e.getErrorCode().getHttpStatus());
        } catch (Exception e){
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/target")
    public ResponseEntity<?> updateTarget(@RequestBody TargetDto targetDto){
        try{
            memberService.updateTarget(targetDto, SecurityUtil.getCurrentMemberId());
            return new ResponseEntity<>(new SuccessResponse(targetDto),HttpStatus.OK);
        } catch(CustomException e){
            return new ResponseEntity<>(new ErrorResponse(e.getErrorCode().getHttpStatus(),e.getMessage()), e.getErrorCode().getHttpStatus());
        } catch (Exception e){
            log.info(e.getMessage());
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping
    public ResponseEntity<?> updateMember(@RequestPart("memberUpdateDto") MemberUpdateDto memberUpdateDto, @RequestPart(value = "img", required = false) final MultipartFile multipartFile){
        try{
            MemberDto memberDto = memberService.updateMember(memberUpdateDto, multipartFile, SecurityUtil.getCurrentMemberId());
            return new ResponseEntity<>(new SuccessResponse(memberDto),HttpStatus.OK);
        } catch(CustomException e){
            return new ResponseEntity<>(new ErrorResponse(e.getErrorCode().getHttpStatus(),e.getMessage()), e.getErrorCode().getHttpStatus());
        } catch (Exception e){
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
