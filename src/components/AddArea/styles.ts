import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    align-items:center;
    border: 1px solid #555;
    border-radius: 10px;
    padding:10px;
    margin: 20px 0;
    
    .image {
        margin-right: 5px;
        background-color:transparent;
        color:gray;
        cursor: pointer;
        transition: .5s;
        scale: 1.4;

        
    }

    .image:hover{
        color: #FFF;
        
    }

    input {
        border:0px;
        background: transparent;
        outline: 0;
        color: white;
        font-size: 18px;
        flex: 1
    }
`;