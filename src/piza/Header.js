import React from 'react'
import styled from 'styled-components'
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Nav() {
  return (
    <Container>
        <Wrap>
            <Left>
                <img src="/image/navLeft.png" alt="" />
            </Left>
            <Center>
                <img src="/image/navCenter.png" alt="" />
            </Center>

            <Location>
                <LocationOnIcon style={{
                    marginTop: "0%",
                    height: "20px", alignItems:"center"}}/>
                <span>BLUE AREA</span>
            </Location>
            
            <Login>
                <span>LOGIN</span>
            </Login>
        </Wrap>
    </Container>
  )
}

export default Nav

const Container = styled.div``

const Wrap = styled.ul`
    display:flex;
    flex-direction:row;
    list-style-type:none;
`

const Left = styled.li`
    height:66px;
    margin:5px 0px 0px 24px;
    img{
        width:100%;
        height:100%;
        object-fit:contain;
    }
`

const Center = styled.li`
    height:80px;
    width:500px;
    margin: 0.3% auto 0% 14.7% ;

    img{
        width:100%;
        height:100%;
        object-fit:contain;
    }
`
const Location = styled.button`
    background: #f0f4c3 !important;
    margin: 25px 10px 0px 0px;
    padding : 0px 16px;
    color:#000000;
    width:140px;
    font-size:14px;
    height:40px;
    border:none;
    border-radius: 3px;
    box-shadow: 4px 2px 0px 1px rgba(0,0,0,0.12);
    
`
const Login = styled.button`
    background: #148742 !important;
    margin: 25px 20px 0px 0px;
    padding : 0px 16px;
    color:white;
    width:100px;
    height:40px;
    border:none;
    font-size:14px;
    outline:none;
    border-radius: 3px;
    `