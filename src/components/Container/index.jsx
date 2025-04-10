import { Slider } from '../../containers/containerIndex';
import FlashSale from '../../containers/FlashSale';

function Container() {
    return (
        <div className="w-full pt-[30px] flex flex-col items-center gap-2">
            <Slider />
            <FlashSale />
        </div>
    );
}

export default Container;
