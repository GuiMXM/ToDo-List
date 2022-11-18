import styled from "styled-components";


type ContainerProps = {
    done:boolean
}
export const Container = styled.div(({done}:ContainerProps)=>
    (
        
        `
            display:flex;
            background-color:#20212C;
            padding:10px;
            border-radius:10px;
            margin-bottom: 10px;
            align-items: center;

            
            input {
                width:20px;
                height: 20px;
                margin-right:10px;
                cursor:pointer;
                
            }

            input:hover ~ label {
                color:white;
            }

            input:checked ~ label {
                color:gray;
            }

            label {
                color: gray;
                text-decoration: ${done ? "line-through" : "initial"};
                transition: .2s;
            }

            label:hover {
                color:white;
            }

            .delete {
                color:red;
                scale:1.2;
                margin-left: 15px;
                margin-top: 5px;
                cursor:pointer;
                filter: grayscale(0.7);
                transition: .2s;
            }
            
            .delete:hover{
                filter: unset;
            }
        `
        )
    );
