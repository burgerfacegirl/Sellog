import styled from "styled-components";

export const SSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;

  height: 100%;
  background: linear-gradient(-80deg, #db929d 50%, #fbf4e4 50%);

  .character__wrapper {
    width: 35vw;
    height: 60%;
    transform: translateY(-3rem);
  }

  .page-state__wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    background-color: var(--color-yellow);

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "Chicle";
    font-size: 2vw;

    /* margin: 5% auto; */
    border: 6px solid #fff;

    border-color: #fff #000000 #000000 #fff;
    animation: spin 800ms infinite linear;

    @keyframes spin {
      from {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      to {
        transform: translate(-50%, -50%) rotate(359deg);
      }
    }
  }

  .page-state {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-family: "Chicle";
    font-size: 2vw;
  }

  .my-character-name {
    @font-face {
      font-family: "GmarketSansMedium";
      src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
        format("woff");
      font-weight: normal;
      font-style: normal;
    }

    font-family: "GmarketSansMedium";

    font-size: 1.5vw;
    margin: auto;
    text-align: center;
    margin-top: 2rem;
  }
`;