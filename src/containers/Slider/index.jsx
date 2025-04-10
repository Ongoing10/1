import Button from '../Button';
import UnderSlider from '../UnderSlider';

function Slider() {
    return (
        <div className="bg-white h-[383px] w-[1200px] flex flex-col gap-2 items-center">
            <div className="w-[1200px] h-[235px] flex flex-rows gap-2 relative">
                <div className="group rounded-lg shadow-lg">
                    <div>
                        <img
                            className="rounded-sm h-[235px] min-w-[796px]"
                            alt="Banner"
                            src="https://cf.shopee.vn/file/sg-11134258-7rce0-m6hz8ecm0ug194_xxhdpi"
                        />
                    </div>
                    <div className="p-sm mr-1 slides hidden">
                        <img
                            className="rounded-sm h-[235px] min-w-[796px]"
                            alt="Banner"
                            src="https://cf.shopee.vn/file/vn-11134258-7ra0g-m6htq5k9ui487c_xxhdpi"
                        />
                    </div>
                    <div className="p-sm mr-1 slides hidden">
                        <img
                            className="rounded-sm h-[235px] min-w-[796px]"
                            alt="Banner"
                            src="https://cf.shopee.vn/file/sg-11134258-7rce0-m6i10ejy3mhe96_xxhdpi"
                        />
                    </div>
                    <div className="p-sm mr-1 slides hidden">
                        <img
                            className="rounded-sm h-[235px] min-w-[796px]"
                            alt="Banner"
                            src="https://cf.shopee.vn/file/vn-11134258-7ra0g-m6hxrctee7nc82_xxhdpi"
                        />
                    </div>
                    <div className="p-sm mr-1 slides hidden">
                        <img
                            className="rounded-sm h-[235px] min-w-[796px]"
                            alt="Banner"
                            src="https://cf.shopee.vn/file/sg-11134258-7rcbv-m6hxz8ftcivu53_xxhdpi"
                        />
                    </div>
                    <div className="p-sm mr-1 slides hidden">
                        <img
                            className="rounded-sm h-[235px] min-w-[796px]"
                            alt="Banner"
                            src="https://cf.shopee.vn/file/sg-11134258-7rccx-m6m1pb08mkfv33_xxhdpi"
                        />
                    </div>
                    <div className="p-sm mr-1 slides hidden">
                        <img
                            className="rounded-sm h-[235px] min-w-[796px]"
                            alt="Banner"
                            src="https://cf.shopee.vn/file/sg-11134258-7rcbz-m6hyc2tgr2hg3f_xxhdpi"
                        />
                    </div>
                    <div className="p-sm mr-1 slides hidden">
                        <img
                            className="rounded-sm h-[235px] min-w-[796px]"
                            alt="Banner"
                            src="https://cf.shopee.vn/file/sg-11134258-7rcdd-m6i30nnhqw7m08_xxhdpi"
                        />
                    </div>
                    <div className="p-sm mr-1 slides hidden">
                        <img
                            className="rounded-sm h-[235px] min-w-[796px]"
                            alt="Banner"
                            src="https://cf.shopee.vn/file/sg-11134258-7rcce-m6m1vqr1jaijf8_xxhdpi"
                        />
                    </div>
                    <div className="p-sm mr-1 slides hidden">
                        <img
                            className="rounded-sm h-[235px] min-w-[796px]"
                            alt="Banner"
                            src="https://cf.shopee.vn/file/sg-11134258-7rcd5-m6hyihg1ant857_xxhdpi"
                        />
                    </div>
                </div>
                {/*<Button direction={'left'} />*/}

                <div className="absolute">
                    <div className="bottom-0 mb-2 inset-x-0 flex justify-center gap-2 z-60">
                        <span
                            className="dot w-3 h-3 rounded-full bg-gray-200 cursor-pointer"
                            onClick="jumpToSlide(0)"
                        />
                        <span
                            className="dot w-3 h-3 rounded-full bg-gray-200 cursor-pointer"
                            onClick="jumpToSlide(1)"
                        />
                        <span
                            className="dot w-3 h-3 rounded-full bg-gray-200 cursor-pointer"
                            onClick="jumpToSlide(2)"
                        />
                        <span
                            className="dot w-3 h-3 rounded-full bg-gray-200 cursor-pointer"
                            onClick="jumpToSlide(3)"
                        />
                        <span
                            className="dot w-3 h-3 rounded-full bg-gray-200 cursor-pointer"
                            onClick="jumpToSlide(4)"
                        />
                        <span
                            className="dot w-3 h-3 rounded-full bg-gray-200 cursor-pointer"
                            onClick="jumpToSlide(5)"
                        />
                        <span
                            className="dot w-3 h-3 rounded-full bg-gray-200 cursor-pointer"
                            onClick="jumpToSlide(6)"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2.5">
                    <div>
                        <img
                            className="rounded-sm max-h-[115px]"
                            alt="Banner"
                            src="https://cf.shopee.vn/file/sg-11134258-7rblt-m63vaio26pxce3_xhdpi"
                        />
                    </div>
                    <div>
                        <img
                            className="rounded-sm max-h-[115px]"
                            alt="Banner"
                            src="https://cf.shopee.vn/file/sg-11134258-7rbkw-m64vibgvv1l69f_xhdpi"
                        />
                    </div>
                </div>
            </div>
            <UnderSlider />
        </div>
    );
}

export default Slider;
