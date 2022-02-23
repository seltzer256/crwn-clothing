import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionContainer,
} from "./header.styles";
import CurrentUserContext from "../../context/current-user/current-user.context";
import { CartContext } from "../../providers/cart/cart.provider";

const Header = () => {
    const currentUser = useContext(CurrentUserContext);
    //const cart = useContext(CartContext);
    const { hidden } = useContext(CartContext);

    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo-image" />
            </LogoContainer>
            <OptionsContainer>
                <OptionContainer as={Link} to="/shop">
                    SHOP
                </OptionContainer>
                <OptionContainer as={Link} to="/contact">
                    CONTACT
                </OptionContainer>
                {currentUser ? (
                    <OptionContainer
                        as="div"
                        onClick={() => {
                            auth.signOut();
                        }}
                    >
                        SIGN OUT
                    </OptionContainer>
                ) : (
                    <OptionContainer as={Link} to="/signin">
                        SIGN IN
                    </OptionContainer>
                )}
                <CartIcon />
            </OptionsContainer>
            {hidden ? null : <CartDropdown />}
        </HeaderContainer>
    );
};

export default Header;
