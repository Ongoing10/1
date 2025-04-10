import { useEffect, useState } from 'react';
import { CheckIcon } from '../../../assets';
import ConfirmationRequest from './ConfirmationRequest';

function RegisterPage() {
    const [phoneNumberInput, setPhoneNumberInput] = useState('');
    const [isPhoneNumberChange, setIsPhoneNumberChange] = useState(false);
    const [showConfirmationRequest, setShowConfirmationRequest] = useState(false);

    const isInputValid = phoneNumberInput;
    const handlePhoneNumberInputChange = (e) => {
        setPhoneNumberInput(e.target.value);
        if (!isPhoneNumberChange) {
            setIsPhoneNumberChange(true);
        }
    };

    const handleNextButtonClick = (e) => {
        e.preventDefault();
        if (isInputValid) {
            setShowConfirmationRequest(true);
        }
    };

    useEffect(() => {
        document.title = 'Đăng ký ngay | Shopee Việt Nam';
    }, []);

    return (
        <div className="w-screen flex justify-center items-center" style={{ backgroundColor: 'rgb(238, 78, 46)' }}>
            <div className="bg-[url('./assets/backgroundImages/backgroundLoginImage.png')] w-[1040px] h-[600px] bg-contain bg-no-repeat bg-center flex flex-end">
                <div className="flex flex-1"></div>
                <div className="my-[62px]">
                    <div className="bg-white w-[400px] h-[476px] py-[1.375rem] px-[30px] rounded-[4px]">
                        <div className="min-h-[80px] py-[22px] flex justify-between items-center">
                            <div className="text-[18px]">Đăng ký</div>
                        </div>
                        <form>
                            <div className="relative border border-[rgba(0,0,0,.14)] rounded-[2px] shadow-[inset_0_2px_0_rgba(0,0,0,.02)] box-border h-[40px] overflow-hidden w-full flex items-center mb-[10px]">
                                <input
                                    className="border-0 filter-none flex-1 flex-shrink-0 h-[16px] w-full outline-none px-6"
                                    type="text"
                                    placeholder="Số điện thoại"
                                    autocomplete="on"
                                    name="loginKey"
                                    maxlength="128"
                                    aria-invalid="false"
                                    value={phoneNumberInput}
                                    onChange={handlePhoneNumberInputChange}
                                />
                                {isPhoneNumberChange && phoneNumberInput.length === 10 ? (
                                    <div className="absolute right-2">
                                        <CheckIcon />
                                    </div>
                                ) : null}
                            </div>
                            {isPhoneNumberChange && phoneNumberInput.length < 10 ? (
                                <div className="text-[#ee4d2d;] pb-4 px-2">Số điện thoại không hợp lệ</div>
                            ) : (
                                <div className="min-h-[16px]" />
                            )}
                            <button
                                className="w-full bg-[#ee4d2d] shadow-[0_1px_1px_rgba(0,0,0,.09)] text-white h-[40px] min-w-[8.75rem] bg-none border-0 rounded-[0.125rem] outline-none p-0.5 opacity-70"
                                style={{
                                    cursor: isInputValid ? 'pointer' : 'not-allowed',
                                    opacity: isInputValid ? 1 : 0.7,
                                }}
                                disabled={!isInputValid}
                                onClick={handleNextButtonClick}
                            >
                                <p className="uppercase">Tiếp theo</p>
                            </button>
                        </form>
                        {showConfirmationRequest ? (
                            <ConfirmationRequest
                                phoneNumb={phoneNumberInput}
                                onCancel={() => setShowConfirmationRequest(false)}
                            />
                        ) : null}
                        <div className="mt-[20px]">
                            <div className="flex items-center justify-center gap-6 mb-[20px] mt-[40px]">
                                <div class="bg-[#dbdbdb] flex-1 h-[1px] w-full" />
                                <span className="uppercase text-[#ccc] text-md px-4">Hoặc</span>
                                <div class="bg-[#dbdbdb] flex-1 h-[1px] w-full" />
                            </div>
                            <div className="flex items-center justify-center gap-6 mb-[10px]">
                                <button className="border w-full flex items-center justify-center gap-3 h-[40px]  border-[#dbdbdb] text-[#333]">
                                    <div className="h-[22px] w-[22px] bg-[url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/f5111454e9d5e318.png)] bg-[length:325%_287.5%] bg-[position:5.5555555556%_62.6666666667%]" />
                                    <div>Facebook</div>
                                </button>
                                <button className="flex border w-full items-center justify-center gap-3 h-[40px]  border-[#dbdbdb] text-[#333]">
                                    <div className="h-[22px] w-[22px] bg-[url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/f5111454e9d5e318.png)] bg-[length:722.2222222222%_638.8888888889%] bg-[position:83.9285714286%_5.1546391753%]" />
                                    <div>Google</div>
                                </button>
                            </div>
                        </div>
                        <div className="text-center pt-[20px]">
                            <div>
                                <p>Bằng việc đăng kí, bạn đã đồng ý với Shopee về</p>
                                <a href="https://help.shopee.vn/portal/article/77243" className="text-[#ee4d2d]">
                                    Điều khoản dịch vụ{' '}
                                </a>
                                &{' '}
                                <a href="https://help.shopee.vn/portal/article/77244" className="text-[#ee4d2d]">
                                    {' '}
                                    Chính sách bảo mật
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-center gap-6 m-[10px] mt-20">
                                <div className="text-[#cccc]">Bạn đã có tài khoản?</div>
                                <a className="text-[#ee4d2d]" href="/login">
                                    Đăng nhập
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
