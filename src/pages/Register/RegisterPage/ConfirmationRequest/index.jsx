function ConfirmationRequest({ phoneNumb, onCancel }) {
    return (
        <aside
            tabIndex={0}
            role="dialog"
            className="flex items-center justify-center  fixed top-0 left-0 right-0 bottom-0 z-[999] bg-black/50"
        >
            <div className="bg-white">
                <div className="p-[30px] flex flex-col gap-3 items-center">
                    <div className="text-[16px] flex flex-wrap leading-6 text-left">
                        Chúng tôi sẽ gửi mã xác minh qua Zalo đến {phoneNumb}
                    </div>
                    <div className="flex gap-2 mt-[30px]">
                        <button
                            className="border border-[rgba(0,0,0,0.09)] shadow-[0_1px_1px_rgba(0,0,0,0.03)] text-[#555] text-[16px] leading-6 px-[16px] py-[8px]"
                            onClick={onCancel}
                        >
                            Hủy bỏ
                        </button>
                        <button className="border border-[rgba(0,0,0,0.09)] shadow-[0_1px_1px_rgba(0,0,0,0.03)] text-[#555] text-[16px] leading-6 px-[16px] py-[8px]">
                            Các phương pháp khác
                        </button>
                        <button className="bg-[#ee4d2d] text-white text-[16px] leading-6 px-[16px] py-[8px]">
                            Gửi đến Zalo
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default ConfirmationRequest;
