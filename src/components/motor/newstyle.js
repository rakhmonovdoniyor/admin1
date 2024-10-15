import styled from "styled-components";

export const Container = styled.div`
    background-color: #e9eef5;
    padding: 35px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    /* border: 1px solid blue; */
    h1 {
        color: #000900d4;
        margin-top: 0;
    }
`;

export const AddInput = styled.input`
    color: #222;
    font-size: 16px;
    padding: 12px;
    border: 1px solid;
    border-radius: 5px;
    font-weight: 500;
    /* width: 100%; */
    outline: none;
    font-family: "Montserrat", sans-serif;
    background-color: #fffffa;
    
    &::placeholder{
        color: #aaa;
        font-size: 18px;
    }
`;
export const WrappEdit= styled.div`
display: flex;
/* flex-direction: column; */
/* gap: 10px; */
/* border: 1px solid red; */
align-items: center;
/* justify-content: center; */
padding-top: 2px;
input{
    padding: 1px;
    border-radius: 5px;
    border: none;
};
`

export const AddButton = styled.button`
    background-color: #7d5cb3;
    border: none;
    padding: 0px 20px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 15px;
`

export const AddingContainer = styled.div`
    background-color: #f2f2f2;
    height: 60px;
    display: flex;
    
    border-radius: 3px;
    overflow: hidden;
    color: #545454;
    font-weight: 500;
  

`

export const Button = styled.button`
    border: none;
    color: #fff;
    padding: 10px;
    cursor: pointer;
    background: #de422e;
    opacity: 0;
    transition: all 0.1s;
    font-family: "Montserrat";
    `
export const AddText = styled.div`
    /* padding: 20px; */
    font-size: 16px;
    color: #585858;
    display: flex;
    /* align-items: center; */
    /* gap: 20px; */
    flex-direction: column;
`

export const PupleButton = styled.button`
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    background: #7d03b7;
    color: white;
    border: none;   
    padding: 10px;
    font-size: 18px;
    cursor: pointer;
`

export const AlignCenter = styled.div`
display: flex;
align-items: center;
`
export const AlignCenterColumn = styled.div`
display: flex;
/* align-items: center; */
flex-direction: column;
justify-content: center;
`
export const Inputs = styled.div`
display: flex;
/* align-items: center; */
padding: 1px;
border: 6s;
`

export const Input = styled.input`
 
    width: 100%;
    padding: 6px;
    margin-bottom: 6px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    box-sizing: border-box;
    /* background-color: transparent; */

`


//
export const HomeContainer =styled.div`
display: flex;
flex-direction: column;
padding: 40px 50px;
`

export const StateContainer =styled.div`
display: flex;
justify-content: start;
align-items: center;
gap: 3px;
p{
    color: blue;
}
`


//newadd
 

// Define the wrapper for the file upload area
export const FileUploadWrapper = styled.div`
  width: 200px; /* Adjust as needed */
  height: 200px; /* Adjust as needed */
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Define the hidden file input
export const StyledFileUpload = styled.input`
  position: absolute;
  /* width: 100%; */
  /* height: 100%; */
  opacity: 0;
  cursor: pointer;
`;

// Define the custom label which serves as the clickable area for file upload
export const CustomLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${(props) => 
    props.file 
      ? `url(${props.file}) no-repeat center center` 
      : `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV7_Rd3yDTcIPmE0Pe4sLXNpD6ElsqvvVofQ&s) no-repeat center center`
  };
  background-size: cover;
  border: 1px solid #ddd;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
  color: #fff;
  font-size: 14px;
  text-align: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1); /* Adjust hover effect as needed */
  }
`;

// Define the file preview image
export const FilePreview = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 4px;
`;