import styled from 'styled-components'


export const Btn = styled.button`
    cursor: pointer;
    color: black;
    border-color: dodgerblue;
    background: white;
    text-align: center;
    padding: 5px;
    border-radius: 3px;
    &:hover {
        color: white;
        background: dodgerblue;
      }
`

export const Inpt = styled.input`
    width: 40%;
    padding: 10px 15px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`