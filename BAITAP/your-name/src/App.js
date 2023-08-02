import Welcome from './components/Welcome';
import FuncComponent from './components/FuncComponent';
import ClassComponent from './components/ClassComponent';
import AlertComponent from './components/AlertComponent';
import CalculatorComponent from './components/CalculatorComponent';
import Props from './components/Props';
import UpDown from './components/UpDown';
import Background from './components/BackgroundComponent';
import Increase from './components/IncreaseComponent';
import App3 from './components/App3';
import ClassApp3 from './components/ClassApp3';
import LogInComponent from './components/LogInComponent';
import Expand from './components/Expand';
function App() {
    return (
        <div className="App">
            {/* <Welcome name="Admin" />
            <FuncComponent firstNumber={1} secondNumber={2} />
            <ClassComponent firstNumber={5} secondNumber={7}/>
            <AlertComponent text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại."/>
            <CalculatorComponent />
            <Props name="phi" title="title" style={{color: "red"}}/>
            <UpDown/>
            <Background/>
            <Increase/> */}
            {/* <App3/> */}
            <ClassApp3/>
            <LogInComponent/>
            <Expand/>
        </div>
    );
}


export default App;