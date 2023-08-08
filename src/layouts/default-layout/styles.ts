import { styled } from 'styled-components'

export const DefaultLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0 10rem;

  @media only screen and (max-width: 600px) {
    margin: 0 2rem;
  }
`
