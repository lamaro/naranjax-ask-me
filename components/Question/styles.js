import styled from 'styled-components';

export const Container = styled.div`
border-radius:60px;
color:  #320a46;
background: ${props => props.toDelete ? "red" : props => props.highlight ? "#F0B40A" : "#eee"};
max-width:1200px;
display:flex;justify-content:space-between; align-items:center;
padding:20px 30px;
margin-bottom: 10px;
:last-child {border:0;}

.actions_content{display:flex;justify-content:center; align-items:center;}


@media (max-width: 860px) {
    margin: 10px 20px;
    display:flex; flex-direction:column; justify-content:space-between; align-items:center;
}

`;