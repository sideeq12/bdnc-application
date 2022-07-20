import styled from 'styled-components'


export const Form = styled.form`
  color : white;
  background-color: #0072BB;
  font-family: 'Courier New', Courier, monospace;
  max-width: 550px;
  padding : 20px 40px;
  margin : 20px auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const FormData = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Lato;
    font-size: 16px;
    label {
        font-style: italic;
        font-weight: 400;
    }
    input, textarea{
        margin-top: 5px;
        border : 1px solid #fff;
        background-color:  #0072BB;
        text-align: left;
        padding-left: 20px;
        font-family: Lato;
        color : white;
        font-weight: 500;
        font-size: 15px;
    }
    input{
        height: 40px;
    }
    textarea{
        padding-top: 10px;
        height: 159px;
    }

`
export const ListData = styled.div`
    display: flex;
    justify-content: space-between;
    div:first-child{
        width : 40%;
    }
    `