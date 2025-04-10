import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '../Popper';
import {
    ArrowDownIcon,
    CartIcon,
    LanguageIcon,
    NotificationIcon,
    ShopeeLogo,
    SupportIcon,
    UserIcon,
} from '../../assets/Icons';
import Search from '../Search';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
    const currentUser = false;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('top-bar')}>
                    <div className="flex justify-start items-center gap-3 ">
                        <a href="">
                            <p>Kênh người bán</p>
                        </a>
                        <span className={cx('line-gap')}></span>
                        {currentUser ? null : (
                            <>
                                <a href="">
                                    <p>Trở thành người bán hàng</p>
                                </a>
                                <span className={cx('line-gap')}></span>
                            </>
                        )}
                        <Tippy
                            render={(attrs) => (
                                <div className="bg-white text-black w-[184px]" tabIndex="-1" {...attrs}>
                                    <img
                                        width={'180px'}
                                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/e82a7ab18aeae26e.png"
                                        alt="QR Download Shopee"
                                    />
                                    <div className="grid grid-cols-2 items-center justify-between max-w-full px-7 pb-3 gap-4">
                                        <img
                                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/135555214a82d8e1.png"
                                            alt="App Store"
                                        />
                                        <img
                                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/1fddd5ee3e2ead84.png"
                                            alt="App Store"
                                        />
                                        <img
                                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/4abb5c0809818b22.png"
                                            alt="App Store"
                                        />
                                    </div>
                                </div>
                            )}
                        >
                            <a href="">
                                <p>Tải ứng dụng</p>
                            </a>
                        </Tippy>
                        <span className={cx('line-gap')}></span>
                        <p>Kết nối</p>
                        <div>
                            <img
                                width={'16px'}
                                src="https://toppng.com/uploads/preview/facebook-button-circle-fb-icon-white-11562927550tr4yt4nxsl.png"
                                alt="Logo Facebook"
                            />
                        </div>
                        <div>logo ig</div>
                    </div>
                    <div className="flex-1"></div>
                    <div className="flex items-center gap-3">
                        <Tippy
                            interactive
                            placement="bottom-end"
                            render={(attrs) => (
                                <div className="w-[400px]" tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        <div className="w-[400px]">
                                            <h3 className="p-3 text-gray-400">Thông báo mới nhận</h3>
                                            <div className="bg-[#fff2ee] hover:bg-[#f8f8f8] cursor-pointer">
                                                <div>
                                                    <div className="px-4 py-3 flex">
                                                        <div className="mr-4">
                                                            <img
                                                                width={'60px'}
                                                                src="https://down-vn.img.susercontent.com/file/vn-11134401-7ras8-m3khi0az4c2p81_tn"
                                                                alt="thongbao1"
                                                            />
                                                        </div>
                                                        <div>
                                                            <h3>TOP DAO KHẮC BÁN CHẠY</h3>
                                                            <p className="text-gray-500">
                                                                👉 Vô vàn sản phẩm cực trendy TẠI ĐÂY! 👈 Bạn sẽ không
                                                                nỡ bỏ lỡ đâu, phải không nào?
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-center p-4 hover:text-black-900">
                                                <a href="">
                                                    <p>Xem tất cả</p>
                                                </a>
                                            </div>
                                        </div>
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <a href="" className="flex items-center">
                                <NotificationIcon />
                                <span className="ml-2">Thông báo</span>
                            </a>
                        </Tippy>
                        <a href="" className="mx-4 flex items-center">
                            <SupportIcon />
                            <span className="ml-2">Hỗ trợ</span>
                        </a>
                        <Tippy
                            interactive
                            placement="bottom-end"
                            render={(attrs) => (
                                <div className="w-[200px]" tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        <div className="flex flex-col">
                                            <p className="p-[10px] hover:text-[#ee4d2d] cursor-pointer">Tiếng Việt</p>
                                            <p className="p-[10px] hover:text-[#ee4d2d] cursor-pointer">English</p>
                                        </div>
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <a href="" className="mx-4 flex items-center">
                                <LanguageIcon />
                                <span className="mx-2">Tiếng Việt</span>
                                <ArrowDownIcon />
                            </a>
                        </Tippy>
                        {currentUser ? (
                            <>
                                <Tippy
                                    interactive
                                    placement="bottom-end"
                                    render={(attrs) => (
                                        <div className="w-[200px]" tabIndex="-1" {...attrs}>
                                            <PopperWrapper>
                                                <div className="flex flex-col">
                                                    <a href="" className="p-[10px] hover:text-[#ee4d2d] cursor-pointer">
                                                        Tài Khoản Của Tôi
                                                    </a>
                                                    <a href="" className="p-[10px] hover:text-[#ee4d2d] cursor-pointer">
                                                        Đơn Mua
                                                    </a>
                                                    <a href="" className="p-[10px] hover:text-[#ee4d2d] cursor-pointer">
                                                        Đăng Xuất
                                                    </a>
                                                </div>
                                            </PopperWrapper>
                                        </div>
                                    )}
                                >
                                    <a className="flex items-center" href="">
                                        <div className="relative bg-gray-100 stroke-gray-300 rounded-full w-[22px] h-[22px] flex items-center justify-center">
                                            <UserIcon />
                                        </div>
                                        <p className="pl-2">Username</p>
                                    </a>
                                </Tippy>
                            </>
                        ) : (
                            <>
                                <a href="/register" className="mx-2">
                                    <p>Đăng kí</p>
                                </a>
                                <span className={cx('line-gap')}></span>
                                <a href="/login" className="ml-2">
                                    <p>Đăng nhập</p>
                                </a>
                            </>
                        )}
                    </div>
                </div>
                <div className={cx('container')}>
                    <div className="pr-10">
                        <Link to={'/'}>
                            <div className="w-[162px] fill-white">
                                <ShopeeLogo />
                            </div>
                        </Link>
                    </div>

                    <Search />

                    <Tippy
                        interactive
                        placement="bottom-end"
                        render={(attrs) => (
                            <div className="w-[400px] relative" tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <div>
                                        <div className="flex flex-col justify-center items-center py-[60px]">
                                            <div>
                                                <img
                                                    width={'100px'}
                                                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/12fe8880616de161.png"
                                                    alt="Chưa có sản phẩm"
                                                />
                                            </div>
                                            <p>Chưa có sản phẩm</p>
                                        </div>
                                    </div>
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className="flex flex-1 justify-center px-4">
                            <CartIcon />
                        </div>
                    </Tippy>
                </div>
            </div>
        </header>
    );
}

export default Header;
