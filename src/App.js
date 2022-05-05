import './App.css';
import Header from './components/Header';
import styled from 'styled-components';
import Main from './components/Main';

function App() {
  return (
    <div>
      <Container padding='0 20px'>
        <Header />
      </Container>
      <Main />
    </div>
  );
}

export default App;

export const Container = styled.div`
  padding: ${(props)=>props.padding};
  @media screen and (min-width: 836px){
    padding:10px 40px;
  }
`