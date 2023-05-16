import { useState } from "react";
import { SArticle } from "./styles";
import coin from "@/assets/imgs/retro/coin.png";
import { IShopItem } from "@/typeModels/ItemShop/iteminterfaces";
import { apiBuyItem } from "@/api/store";
import { userInfoState } from "@/recoil/myroom/atoms";
import { useRecoilState } from "recoil";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faSlash } from "@fortawesome/free-solid-svg-icons";
import ItemModalStyle from "./ItemModalStyle";
import { apiGetUserInfo } from "@/api/user";

interface IItemModalProps {
  shopItem: IShopItem;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setItem: React.Dispatch<React.SetStateAction<IShopItem | null>>;
}

const ItemItem = ({ shopItem, setIsModalOpen, setItem }: IItemModalProps) => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [mypoint, setMypoint] = useState(userInfo.points);
  const [possession, setPossession] = useState(shopItem.possession);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const handleOpen = () => setIsBuyModalOpen(true);
  const handleClose = () => setIsBuyModalOpen(false);

  const buyItem = () => {
    apiBuyItem(shopItem?.id)
      .then((r) => {
        setMypoint(r?.data.response);
        setPossession(1);
        handleClose();
        setUserInfo({ ...userInfo, points: r?.data.response });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setItem(shopItem);
  };
  return (
    <SArticle>
      <Modal
        open={isBuyModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="div" sx={ItemModalStyle}>
          {shopItem.point != undefined && shopItem?.point <= mypoint ? (
            <div className="buy__modal">
              <p className="buy__question">
                Will you buy {shopItem?.name?.split("_").join(" ")}?
              </p>
              <div className="buy__point">
                <img src={coin} className="buy__modal__coin"></img>
                {/* <p className="cur__point">{mypoint}</p> */}
                <div className="cur__point">
                  <FontAwesomeIcon
                    icon={faSlash}
                    className="slash"
                    rotation={270}
                    size="lg"
                  />
                  {mypoint}
                </div>
                <FontAwesomeIcon
                  icon={faArrowRightLong}
                  className="right__arrow"
                />
                <p className="after__point">
                  {shopItem?.point && mypoint - shopItem.point}
                </p>
              </div>
              <div className="buy__btns__wrapper">
                <button onClick={buyItem} className="buy__btn__yes">
                  Yes
                </button>
                <button onClick={handleClose} className="buy__btn__no">
                  No
                </button>
              </div>
            </div>
          ) : (
            <div className="buy__modal buy__question">
              {shopItem.point != undefined && (
                <div className="lack__msg">
                  You need{" "}
                  <p className="lack__coin">
                    {Math.abs(mypoint - shopItem?.point)}{" "}
                  </p>
                  coin more. 😥
                </div>
              )}
            </div>
          )}
        </Box>
      </Modal>

      <div className="item__img__wrapper">
        <img
          src={shopItem.path}
          className="item__img"
          onClick={handleOpenModal}
        ></img>
      </div>

      <div className="item__description__wrapper">
        <div className="item__name">{shopItem?.name?.split("_").join(" ")}</div>
        <div className="item__description">
          <div className="coin__wrapper">
            <img src={coin} className="coin"></img>
            {shopItem?.point}
          </div>
          {possession ? (
            <div className="purchased">Purchased</div>
          ) : (
            <button className="buy__btn" onClick={handleOpen}>
              Buy
            </button>
          )}
        </div>
      </div>
    </SArticle>
  );
};

export default ItemItem;
