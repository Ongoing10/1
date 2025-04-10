import { QRLoginIcon, ShowPasswordIcon } from '../../../assets/Icons';
import { useEffect, useState } from 'react';
import { useDebounce } from '../../../hooks';

function LoginPage() {
    const [userInput, setUserInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [isUserChanged, setIsUserChanged] = useState(false);
    const [isPasswordChanged, setIsPasswordChanged] = useState(false);

    const debouncedUser = useDebounce(userInput, 500);
    const debouncedPassword = useDebounce(passwordInput, 500);

    const isInputValid = userInput && passwordInput;
    const handleUserInputChange = (e) => {
        setUserInput(e.target.value);
        if (!isUserChanged) {
            setIsUserChanged(true);
        }
    };
    const handlePasswordInputChange = (e) => {
        setPasswordInput(e.target.value);
        if (!isPasswordChanged) {
            setIsPasswordChanged(true);
        }
    };

    //useEffect(() => {}, [debounced]);

    useEffect(() => {
        document.title = 'Đăng nhập tài khoản  - Mua sắm Online | Shopee Việt Nam';
    }, []);

    return (
        <div className="w-screen flex justify-center items-center" style={{ backgroundColor: 'rgb(238, 78, 46)' }}>
            <div className="bg-[url('./assets/backgroundImages/backgroundLoginImage.png')] w-[1040px] h-[600px] bg-contain bg-no-repeat bg-center flex flex-end">
                <div className="flex flex-1"></div>
                <div className="my-[62px]">
                    <div className="bg-white w-[400px] h-[476px] py-[1.375rem] px-[30px] rounded-[4px]">
                        <div className="min-h-[80px] py-[22px] flex justify-between items-center">
                            <div className="text-[18px]">Đăng nhập</div>
                            <div className="text-[14px] font-bold bg-[#fefaec] border-solid border-[#ffbf00] border-2 text-[#ffbf00] py-[11px] px-[14px] mr-[16px] relative rounded-[4px]">
                                <p>Đăng nhập với mã</p>
                                <p>QR</p>
                                <div className="absolute -right-[13px] bg-white m-0 p-0 top-8 text-[20px] h-6 w-6 border-[#ffbf00] border-t-2 border-r-2 transform rotate-45 translate-x-[-50%]"></div>
                            </div>
                            <a href="">
                                <QRLoginIcon />
                            </a>
                        </div>
                        <form>
                            <div></div>
                            <div className="border border-[rgba(0,0,0,.14)] rounded-[2px] shadow-[inset_0_2px_0_rgba(0,0,0,.02)] box-border h-[40px] overflow-hidden w-full flex items-center mb-[10px]">
                                <input
                                    className="border-0 filter-none flex-1 flex-shrink-0 h-[16px] w-full outline-none p-[0.75rem]"
                                    type="text"
                                    placeholder="Email/Số điện thoại/Tên đăng nhập"
                                    autocomplete="on"
                                    name="loginKey"
                                    maxlength="128"
                                    aria-invalid="false"
                                    value={userInput}
                                    onChange={handleUserInputChange}
                                />
                            </div>
                            {isUserChanged && userInput === '' ? (
                                <div className="text-[#ee4d2d;] pb-4 px-2">Vui lòng điền vào mục này.</div>
                            ) : (
                                <div className="min-h-[16px]" />
                            )}
                            <div className="border border-[rgba(0,0,0,.14)] rounded-[2px] shadow-[inset_0_2px_0_rgba(0,0,0,.02)] box-border h-[40px] overflow-hidden w-full flex items-center mb-[10px]">
                                <input
                                    className="border-0 filter-none flex-1 flex-shrink-0 h-[16px] w-full outline-none p-[0.75rem]"
                                    type="password"
                                    placeholder="Mật khẩu"
                                    autocomplete="current-password"
                                    name="password"
                                    maxlength="16"
                                    aria-invalid="false"
                                    value={passwordInput}
                                    onChange={handlePasswordInputChange}
                                />
                                <button className="fill-[#ee4d2d] h-[40px]">
                                    <ShowPasswordIcon />
                                </button>
                            </div>
                            {isPasswordChanged && passwordInput === '' ? (
                                <div className="text-[#ee4d2d;] pb-4 px-2">Vui lòng điền vào mục này.</div>
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
                                type="submit"
                            >
                                <p className="uppercase">Đăng nhập</p>
                            </button>
                        </form>
                        <div className="m-[10px] flex justify-between">
                            <a href="" className="text-[#05a] text-md">
                                <p>Quên mật khẩu</p>
                            </a>
                        </div>
                        <div>
                            <div className="flex items-center justify-center gap-6 mb-[12px]">
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
                        <div>
                            <div className="flex items-center justify-center gap-6 m-[10px] mt-20">
                                <div className="text-[#cccc]">Bạn mới biết đến Shopee?</div>
                                <a className="text-[#ee4d2d]" href="/register">
                                    Đăng kí
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
