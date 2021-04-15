import styled from "styled-components";

export const Header = styled.header`
  background-color: #f76c6c;
  color: #fff;
`

export const Footer = styled.footer`
  border-top: 2px solid #f76c6c;
`

export const Container = styled.div`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  padding: 24px;
`

export const CardRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 32%);
  justify-content: space-between;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 49%);
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 100%);
  }
`

export const Card = styled.article`
  padding: 20px;
  border: 1px solid #c9c9c9;
  border-radius: 7px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
  > img:first-child {
    border-radius: 7px 7px 0 0;
    margin-bottom: 20px;
    max-width: 100%;
    height: auto;
  }
  h3, h4 {
    color: #f76c6c;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: start;
    em {
      padding: 0.25em;
      background-color: #eddbff;
      border-radius: 4px;
    }
  }
  p, ul {
    color: #757575;
    line-height: 1.5;
  }
`

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  li {
    margin: 4px 0;
    display: flex;
    justify-content: space-around;
    border: #f76c6c 1px solid;
    border-radius: 4px;
    padding: 2px;
  }
`;

export const Badge = styled.span`
  /* Center the content */
  align-items: center;
  display: flex;
  justify-content: center;

  /* Colors */
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;

  /* Rounded border */
  border-radius: 9999px;
  height: 20px;
  width: 20px;
`
export const Input = styled.input`
  font-size: 16px;
  font-size: max(16px, 1em);
  font-family: inherit;
  padding: 0.25em 0.5em;
  background-color: #fff;
  border: 2px solid var(--input-border);
  border-radius: 4px;
  `

  export const Form = styled.form`
  
  `
  export const Label = styled.label`
  
  `
  export const Error = styled.div`
  color:red;
  
  `
export const Button = styled.button`
  /* Reset text link default */
  text-decoration: none;
  background-color: ${({ loading }) =>loading ? "#fff" : "#f76c6c"};
  color: #fff;
  padding: 0.5em 1em;
  border-radius: 4px;
  border-color:transparent;
  display: inline-block;
`