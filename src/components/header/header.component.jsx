import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
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

const Header = ({ currentUser, hidden }) => (
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

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Header);
