function Button({ onClick, className, direction }) {
    const images = [
        'https://cf.shopee.vn/file/sg-11134258-7rce0-m6hz8ecm0ug194_xxhdpi',
        'https://cf.shopee.vn/file/vn-11134258-7ra0g-m6htq5k9ui487c_xxhdpi',
        'https://cf.shopee.vn/file/sg-11134258-7rce0-m6i10ejy3mhe96_xxhdpi',
        'https://cf.shopee.vn/file/vn-11134258-7ra0g-m6hxrctee7nc82_xxhdpi',
        'https://cf.shopee.vn/file/sg-11134258-7rcbv-m6hxz8ftcivu53_xxhdpi',
        'https://cf.shopee.vn/file/sg-11134258-7rccx-m6m1pb08mkfv33_xxhdpi',
        'https://cf.shopee.vn/file/sg-11134258-7rcbz-m6hyc2tgr2hg3f_xxhdpi',
        'https://cf.shopee.vn/file/sg-11134258-7rcdd-m6i30nnhqw7m08_xxhdpi',
        'https://cf.shopee.vn/file/sg-11134258-7rcce-m6m1vqr1jaijf8_xxhdpi',
        'https://cf.shopee.vn/file/sg-11134258-7rcd5-m6hyihg1ant857_xxhdpi',
    ];

    return (
        <button
            className="transform left-0 top-1/2 -translate-y-32 bg-black bg-opacity-50 text-white px-3 py-2 transition-opacity"
            onClick={onClick}
        >
            {direction === 'left' ? '<' : '>'}
        </button>
    );
}

export default Button;
