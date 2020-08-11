import styled from 'styled-components';

export const WineHeader = styled.div`
background: #E85A4F;
text-align: center;
margin-top: 6vh;
padding: 4vh;
font-size: 6vh;
`

export const Footer = styled.div`
  background: #E98074;
  padding: 6vh;
  margin-top: 5vh;
  text-align: center;
`

export const List = styled.div`
  text-align: center;
  font-weight: 600;
  list-style-type: none;
  font-size: 4vh;
  background: #E85A4F;
  padding: 8vh;
`

export const WineInfo = styled.div`
text-align: center;
font-weight: 500;
font-size: 3vh;
background: #E85A4F;
padding: 5vh;
`

export const Form = styled.div`
  padding: 5vh;
`

export const TextField = styled.input`
  font-size: 14px;
  padding: 10px;
  margin: 10px;
  background: #E98074;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: #17252A;
  }
`

export const Button = styled.button`
  background: #E85A4F;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #E85A4F;
  border-radius: 3px;
`

export const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) => open ? theme.primaryHover : theme.primaryHover};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryBackGround};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryBackGround};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;