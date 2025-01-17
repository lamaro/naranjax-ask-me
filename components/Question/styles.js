import styled from 'styled-components';

export const Container = styled.div`
border-radius:20px;
color:  #320a46;
background: ${props => props.toDelete ? "red" : props => props.highlight ? "#F0B40A" : "#eee"};
max-width:1200px;
display:flex;justify-content:space-between; align-items:center;
padding:20px 30px;
margin-bottom: 10px;
:last-child {border:0;}

.actions_content{display:flex;justify-content:center; align-items:center;}
.question_content{min-width:500px;}
.question_content .name_bold {font-weight:700;}
.question_content .company_italic {font-style:italic;}


@media (max-width: 860px) {
    display:flex; flex-direction:column; justify-content:space-between; align-items:center;
    .question_content{min-width:100%;}
}

`;