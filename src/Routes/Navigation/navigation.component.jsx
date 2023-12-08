import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as Crwnsvg } from '../../assets/crown.svg';
import './navigation.styles.scss';
import CartIcon from '../../components/Cart/cart.component';
import CartDropDown from '../../components/Cart-dropdown/cart-dropdown.component';
import { IsCartonContext } from '../../contexts/cart-dropdown.contex';
const Navigation = () => {
    const { isCartOpen } = useContext(IsCartonContext);
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
                {isCartOpen && <CartDropDown />}
            </div>
            <Outlet />
        </Fragment>
    )
}


export default Navigation;

