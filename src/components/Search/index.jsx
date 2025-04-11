import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '../Popper';
import { SearchIcon, ShopIconSearchBar } from '../../assets/Icons';
import { useDebounce } from '../../hooks';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showSearchResult, setShowSearchResult] = useState(false);

    const currentUser = true;

    const debounced = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounced.trim()) {
            return;
        }

        axios
            .get(`https://67e5fcab18194932a587d1d3.mockapi.io/products`, {
                params: {
                    nameProduct: debounced,
                },
            })

            .then((res) => {
                console.log(res.data[0].nameProduct);

                setSearchResult(res.data[0].nameProduct || []);
            });
    }, [debounced]);

    return (
        <div>
            <Tippy
                interactive
                appendTo={() => document.body}
                visible={showSearchResult}
                placement="bottom"
                render={(attrs) => (
                    <div className="w-[840px] bg-white" tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            {searchValue.trim() === '' ? (
                                <div className="flex gap-3 p-5">
                                    <ul>
                                        <li>Sp1</li>
                                        <li>Sp1</li>
                                        <li>Sp1</li>
                                    </ul>
                                </div>
                            ) : (
                                <div className="flex gap-3 p-5">
                                    <ShopIconSearchBar />
                                    <p>Tìm Shop</p>
                                    <span>"{searchValue}"</span>
                                </div>
                            )}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={() => {
                    setShowSearchResult(false);
                }}
            >
                <div>
                    <div className="relative w-[840px] h-[40px] bg-white text-black flex items-center mt-[12px] mb-[5px] ">
                        <div className="w-full flex p-2">
                            <input
                                value={searchValue}
                                className="outline-0 px-2.5 flex-1"
                                placeholder="Tìm kiếm sản phẩm ..."
                                onChange={(e) => {
                                    setSearchValue(e.target.value);
                                }}
                                onFocus={() => {
                                    setShowSearchResult(true);
                                }}
                            />
                            <button className={cx('search-button')}>
                                <SearchIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </Tippy>
            {currentUser ? (
                <div>
                    <ul className="flex items-center justify-start gap-4">
                        <li>Sản phẩm 1</li>
                        <li>Sản phẩm 1</li>
                        <li>Sản phẩm 1</li>
                        <li>Sản phẩm 1</li>
                        <li>Sản phẩm 1</li>
                        <li>Sản phẩm 1</li>
                        <li>Sản phẩm 1</li>
                    </ul>
                </div>
            ) : null}
        </div>
    );
}

export default Search;
