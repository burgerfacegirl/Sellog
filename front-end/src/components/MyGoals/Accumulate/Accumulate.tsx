import { useState, useEffect } from "react";
import { SSection } from "./styles";
import { TiChevronRightOutline, TiChevronLeftOutline } from "react-icons/ti";
import { apiGetAccumulatedRecordList } from "@/api/record";
import { IAccumulatedRecordList } from "@/typeModels/mygoals/myRecordInterfaces";

const dummyAccumulateList = [
  {
    goal: "algo",
    number: 13,
  },
  {
    goal: "blog",
    number: 15,
  },
  {
    goal: "github",
    number: 20,
  },
  {
    goal: "feed",
    number: 25,
  },
  {
    goal: "cs",
    number: 13,
  },
];

const Accumulate = () => {
  const [accumulatedList, setAccumulatedList] =
    useState<IAccumulatedRecordList | null>(null);

  useEffect(() => {
    apiGetAccumulatedRecordList()
      .then((r) => {
        setAccumulatedList(r?.data.response);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = 5;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <SSection>
      <div className="accumulate__container">
        <div className="steps__wrapper">
          <button
            className="nav right"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            <TiChevronLeftOutline size={40} />
          </button>
          <div>
            <p
              style={{
                fontFamily: "ZCOOL KuaiLe",
                fontSize: "1.5rem",
                margin: "0 2rem",
              }}
            >
              {dummyAccumulateList[activeStep].goal}
            </p>
          </div>
          <button
            className="nav left"
            onClick={handleNext}
            disabled={activeStep === 4}
          >
            <TiChevronRightOutline size={40} />
          </button>
        </div>

        <div className="number">
          {accumulatedList &&
            Number(accumulatedList[dummyAccumulateList[activeStep].goal]?.day) +
              1}
          일째 유지 중입니다
        </div>

        {/* map 돌리는 코드로 바꾸기 */}
        <div
          className={
            dummyAccumulateList[activeStep].goal === "cs"
              ? "acc__day__wrapper hidden"
              : dummyAccumulateList[activeStep].goal === "feed"
              ? "acc__day__wrapper hidden"
              : "acc__day__wrapper"
          }
        >
          {accumulatedList && (
            <div
              className={
                accumulatedList[dummyAccumulateList[activeStep]?.goal]
                  ?.start === null
                  ? "null__container"
                  : "goal__container"
              }
            >
              {accumulatedList[dummyAccumulateList[activeStep]?.goal]?.start ===
              null ? (
                <div className="recommend">
                  추천 설정이 아니면 누적 보상을 얻지 못합니다.
                </div>
              ) : (
                <>
                  <div className="start__div">
                    {
                      accumulatedList[dummyAccumulateList[activeStep]?.goal]
                        ?.start?.[0]
                    }
                    일
                  </div>
                  <div className="start__div">
                    {
                      accumulatedList[dummyAccumulateList[activeStep]?.goal]
                        ?.mid?.[0]
                    }
                    일
                  </div>
                  <div className="start__div">
                    {
                      accumulatedList[dummyAccumulateList[activeStep]?.goal]
                        ?.last?.[0]
                    }
                    일
                  </div>
                </>
              )}
            </div>
          )}
        </div>
        <div
          className={
            dummyAccumulateList[activeStep].goal === "cs"
              ? "acc__reward__wrapper hidden"
              : dummyAccumulateList[activeStep].goal === "feed"
              ? "acc__reward__wrapper hidden"
              : "acc__reward__wrapper"
          }
        >
          {accumulatedList && (
            <div
              className={
                accumulatedList[dummyAccumulateList[activeStep]?.goal]
                  ?.start === null
                  ? "reward__container reward__hidden"
                  : "reward__container"
              }
            >
              {
                <>
                  <div className="reward__div reward1">
                    <div className="inner_idv">
                      {
                        accumulatedList[dummyAccumulateList[activeStep]?.goal]
                          ?.start?.[1]
                      }
                    </div>
                  </div>
                  <div className="reward__div reward2">
                    <div className="inner_idv">
                      {
                        accumulatedList[dummyAccumulateList[activeStep]?.goal]
                          ?.mid?.[1]
                      }
                    </div>
                  </div>
                  <div className="reward3__div">
                    <div className="reward3">
                      {
                        accumulatedList[dummyAccumulateList[activeStep]?.goal]
                          ?.last?.[1]
                      }
                    </div>
                  </div>
                </>
              }
            </div>
          )}
        </div>
      </div>
    </SSection>
  );
};

export default Accumulate;
