import styled from 'styled-components';

export const Page = styled.div`
  font-family: "Geneva";
  background: #D8C3A5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  min-height: 100vh;
`

export const Header = styled.div`
  margin-left: 22vh;
  margin-top: 2vh;
  font-size: 8vh;
`

export const WineHeader = styled.div`
background: #E85A4F;
text-align: center;
margin-top: 6vh;
padding: 4vh;
font-size: 6vh;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 200px;
  padding: 6vh;
  font-size: 3vh;
`

export const Footer = styled.div`
  background: #E98074;
  display: flex;
  flex-direction: column;
  padding: 6vh;
  margin-top: 10vh;
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
  font-size: 18px;
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