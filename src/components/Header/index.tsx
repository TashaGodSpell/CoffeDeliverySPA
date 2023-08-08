import { NavLink } from 'react-router-dom'
import {
  CartButton,
  CounterCircle,
  HeaderActionsContainer,
  HeaderContainer,
  LocationButton,
} from './styles'
import CoffeLogo from '../../assets/coffe-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/" title="home">
          <img src={CoffeLogo} alt="page logo" width={85}></img>
        </NavLink>

        <HeaderActionsContainer>
          <LocationButton>
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </LocationButton>
          <NavLink to="/checkout" title="checkout">
            <CartButton>
              <ShoppingCart size={22} />
              <CounterCircle>3</CounterCircle>
            </CartButton>
          </NavLink>
        </HeaderActionsContainer>
      </nav>
    </HeaderContainer>
  )
}
