import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBarDiv = styled.div `

width: 100%;
display: flex;
justify-content: center;
align-items: none;
flex-direction: row;
position: fixed;
height: 44px;
background-color: #333;


`;

const ContainerDiv = styled.div`
width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;





`;

const ContainerLeft = styled.div `
span{ cursor: pointer;
margin-right: 25%;
font-weight: bold;
}


display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;


`;

const ContainerCenter = styled.div `
span  {cursor: pointer;
margin-right: 5%;
}

span:last-child {
  margin-right: 0;
}
span:hover {
  text-decoration: underline;
}


display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;


`;
const ContainerRight = styled.div `

span {
  cursor: pointer;
}


display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;



`;


const TopBar = () => {
  return (
    <TopBarDiv>
      <ContainerDiv>
        <ContainerLeft>
          <span>TOPICS</span><span>SEARCH</span>
        </ContainerLeft>
        <ContainerCenter>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </ContainerCenter>
        <ContainerRight>
          <span>LOG IN</span>
        </ContainerRight>
      </ContainerDiv>
    </TopBarDiv>
  )
}

export default TopBar;