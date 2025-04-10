import Header from '../../Header';
import Container from '../../Container';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './DefaultLayOut.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
