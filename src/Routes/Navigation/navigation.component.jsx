import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import { ReactComponent as Crwnsvg } from '../../assets/crown.svg';
import './navigation.styles.scss';
import CartIcon from '../../components/Cart/cart.component';
import CartDropDown from '../../components/Cart-dropdown/cart-dropdown.component';
const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo' to={'/'}>
                    <Crwnsvg />
                </Link>
                <div className='nav-link-container'>
                    <Link className='nav-link' to={'/shop'}>
                        SHOP
                    </Link>
                    <Link className='nav-link' to={'/auth'}>
                        SIGN IN
                    </Link>
                    <CartIcon />
                </div>
                <CartDropDown />
            </div>
            <Outlet />
        </Fragment>
    )
}


export default Navigation;

