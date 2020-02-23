import styled from 'styled-components'; 
import { Btn } from '../globalStyle';

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const Modal = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.7);
`
export const Form = styled.form`
    margin-top: 3.5rem;
`

export const RedBtn = styled(Btn)`
  color: darkred;
  border-color: darkred;
  &:hover {
    color: white;
    background: darkred;
  }
`

