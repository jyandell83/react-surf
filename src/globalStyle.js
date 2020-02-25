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

export const Form = styled.form`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 3rem;
`

export const InptGrp = styled.div`
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column-reverse;
    position: relative;
`

export const Inpt = styled.input`
    padding: 1rem 1.5rem;
    margin: .8rem 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: .4rem;
    box-sizing: border-box;
    background-color: var(--color-grey-light-1);

    &:focus {
        outline: none;
        border-bottom: 1px solid var(--color-accent);
    }

    + label {
        font-size: 1.2rem;
        font-weight: 700;
        display: block;
        margin-left: 2rem;
        transition: all .3s;
        position: absolute;
        top: -.5rem;
        background-color: var(--color-grey-light-1);
        padding: 0 2px;
    }

    :placeholder-shown + label {
        opacity: 0;
        visibility: hidden;
        transform: translateY(3rem);
    }
`

export const ReportUl = styled.ul`
    list-style-type: none;
    margin: .5rem;
    padding: 0;
    background-color: lightgray;
    border: 1px solid darkgray;
    border-radius: 3px;
`