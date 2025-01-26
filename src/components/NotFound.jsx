import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router';


const NotFound = () => {
    
    const navigate = useNavigate(); 
    const BackToHome = () => {
      navigate('/'); 
    };
    return(
    
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button onClick={BackToHome} type="primary">Back Home</Button>}
  />
)};
export default NotFound;