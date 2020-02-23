import styled from 'styled-components'


export const Btn = styled.button`
    cursor: pointer;
    color: black;
    border-color: dodgerblue;
    background: white;
    text-align: center;
    padding: .5rem;
    border-radius: 3px;
    margin: .5rem;
    &:hover {
        color: white;
        background: dodgerblue;
      }
`

export const Inpt = styled.input`
    width: 40%;
    padding: 1rem 1.5rem;
    margin: .8rem 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: .4rem;
    box-sizing: border-box;
`

export const ReportUl = styled.ul`
    list-style-type: none;
    margin: .5rem;
    padding: 0;
    background-color: lightgray;
    border: 1px solid darkgray;
    border-radius: 3px;
`