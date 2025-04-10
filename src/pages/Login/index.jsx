import { ShopeeLogo } from '../../assets/Icons';
import LoginPage from './LoginPage';

function Login() {
    return (
        <div>
            <div className="flex h-[84px] w-screen bg-white ">
                <div className="w-[1200px] mx-auto flex items-center gap-2">
                    <div className="flex items-center gap-6">
                        <a href="/">
                            <div className="h-[39px] w-[122px] fill-[#ee4d2d] mb-6">
                                <ShopeeLogo />
                            </div>
                        </a>
                        <h1>Đăng nhập</h1>
                    </div>
                    <div className="flex flex-1" />
                    <div>
                        <p className="text-[#ee4d2d]">Bạn cần giúp đỡ?</p>
                    </div>
                </div>
            </div>
            <LoginPage />
        </div>
    );
}

export default Login;
