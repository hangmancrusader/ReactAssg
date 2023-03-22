import logo from './logo.svg';
import './App.css';
import { TestButton } from './Components/Buttons';
import { Button, Form, Container} from 'react-bootstrap';
import {FormExample} from './Components/Forms'
import {ImageComponent} from './Components/Cards';

function App() {
  return (
    <div className="App">
      <Container>
      React demo app

<Button> Test Button </Button>
<TestButton buttonname ={'login'}/>;
<TestButton buttonname ={'Sign-up'}/>;
<FormExample></FormExample>
      </Container>
     <ImageComponent></ImageComponent>
    </div>
  );
}

export default App;
