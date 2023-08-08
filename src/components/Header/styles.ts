import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 2rem 0;

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 0.75rem;
    flex: 1;
  }
`

export const BaseButton = styled.button`
  padding: 0.5rem;
  border-radius: 8px;
  position: relative;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  cursor: pointer;
`

export const CartButton = styled(BaseButton)`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`

export const LocationButton = styled(BaseButton)`
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  font-size: 0.875rem;
  line-height: 1rem;
  gap: 4px;
`

export const CounterCircle = styled.div`
  position: absolute;
  z-index: 2;
  border-radius: 999px;
  color: ${(props) => props.theme.white};
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1rem;
  background: ${(props) => props.theme['yellow-dark']};
  padding: 0.15rem 0.4rem;
  transform: translate(1.125rem, -0.875rem);
`

export const HeaderActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  align-items: center;
`
