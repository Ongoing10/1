import { useRef, useState, useEffect } from 'react';
import { FlashSaleHotIcon, FlashSaleSelledBarImage, FlashSaleHeaderImage } from '../../assets/index';
import axios from 'axios';

function FlashSale() {
    const mainListRef = useRef();

    const [mainListInfo, setMainListInfo] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://61bc99f0d8542f001782486b.mockapi.io/api/1`); // Lấy dữ liệu từ API
                // Giả sử API trả về dữ liệu và bạn muốn chỉ lấy phần `flashSaleMainListInfo`
                const data = response.data[0];

                if (data && data.flashSaleMainListInfo) {
                    setMainListInfo(data.flashSaleMainListInfo); // Lưu phần `flashSaleMainListInfo` vào state
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const renderMainList = (datas) =>
        datas.map((data, index) => {
            const { href, bubbleImage, frameImage, price, selledStatus, selledPartWidthPercent, saleOffPercent } = data;

            return (
                <a key={index} href={href} className="flash-sale__main__link">
                    <img src={bubbleImage} className="flash-sale__main__bubble-img" alt="" />
                    <img src={frameImage} className="flash-sale__main__frame-img" alt="" />
                    <span className="flash-sale__main__price">{price}</span>

                    <div className="flash-sale__main__percent-bar">
                        <div className="flash-sale__main__percent-bar__text">
                            <span className="flash-sale__main__percent-bar__selled-status">{selledStatus}</span>
                        </div>
                        <div className="flash-sale__main__percent-bar__total-part"></div>
                        <div
                            className="flash-sale__main__percent-bar__selled-part"
                            style={{
                                width: `${selledPartWidthPercent}%`,
                                background: `url(${FlashSaleSelledBarImage}) no-repeat center / cover`,
                            }}
                        ></div>
                        {selledPartWidthPercent >= 70 && (
                            <div
                                className="flash-sale__main__percent-bar--hot"
                                style={{
                                    background: `url(${FlashSaleHotIcon}) no-repeat center / contain`,
                                }}
                            ></div>
                        )}
                    </div>

                    <div className="flash-sale__main__sale-off-label">
                        <span className="flash-sale__main__sale-off-label__percent">{saleOffPercent}</span>
                        <span className="flash-sale__main__sale-off-label__text">GIẢM</span>
                    </div>
                </a>
            );
        });

    //console.log(mainListInfo);

    return (
        <div className="flash-sale">
            <div className="flash-sale__heading">
                <img src={FlashSaleHeaderImage} className="flash-sale__heading__img" alt="" />
                <a
                    href="https://shopee.vn/flash_sale?promotionId=2020501378"
                    className="flash-sale__heading__btn flash-sale__heading__view-all-btn"
                >
                    Xem tất cả
                    <i className="fas fa-chevron-right"></i>
                </a>
            </div>

            <div className="flash-sale__main">
                <div className="flash-sale__main__part">
                    <div ref={mainListRef} className="flash-sale__main__list">
                        {mainListInfo && renderMainList(mainListInfo)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlashSale;
