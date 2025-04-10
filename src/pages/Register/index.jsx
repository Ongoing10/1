import { ShopeeLogo } from '../../assets/Icons';
import RegisterPage from './RegisterPage';

function Register() {
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
                        <h1>Đăng ký</h1>
                    </div>
                    <div className="flex flex-1" />
                    <div>
                        <p className="text-[#ee4d2d]">Bạn cần giúp đỡ?</p>
                    </div>
                </div>
            </div>
            <RegisterPage />
        </div>
    );
}

export default Register;
