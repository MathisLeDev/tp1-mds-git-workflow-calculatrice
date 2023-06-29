import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [leftOperand, setLeftOperand] = useState(1.0);
    const [rightOperand, setRightOperand] = useState(1.0);
    const [operator, setOperator] = useState("+");
    const [lastResult, setLastResult] = useState(0);
    const [result, setResult] = useState(leftOperand + rightOperand);
    const [history, setHistory] = useState([]);
    const [isHistoryMenuOpen, setIsHistoryMenuOpen] = useState(false);

    const handleCalculate = () => {
        const operation = `${leftOperand} ${operator} ${rightOperand}`;
        let operationResult = 0;
        switch (operator) {
            case "+":
                operationResult = leftOperand + rightOperand;
                setLastResult(result);
                setResult(operationResult);
                setHistory([...history, {operation, operationResult}]);
                break;
            case "-":
                operationResult = leftOperand - rightOperand;
                setLastResult(result);
                setResult(operationResult);
                setHistory([...history, {operation, result}]);
                break;
            case "*":
                operationResult = leftOperand * rightOperand;
                setLastResult(result);
                setResult(operationResult);
                setHistory([...history, {operation, result}]);
                break;
            case "/":
                operationResult = leftOperand / rightOperand;
                setLastResult(result);
                setResult(operationResult);
                setHistory([...history, {operation, operationResult}]);
                break;
            default:
                operationResult = leftOperand + rightOperand;
                setLastResult(result);
                setResult(operationResult);
                setHistory([...history, {operation, operationResult}]);
                break;
        }
    }
    const handleLeftOperandChange = (event) => {
        const value = parseFloat(event.target.value);
        setLeftOperand(value);
    };

    const handleRightOperandChange = (event) => {
        const value = parseFloat(event.target.value);
        setRightOperand(value);
    };

    const handleOperatorChange = (event) => {
        setOperator(event.target.value);
    };

    const handleClearEntry = () => {
        setResult(0);
    };

    const handleClearAll = () => {
        setRightOperand(0);
        setLastResult(0);
        setResult(0);
        setLeftOperand(0);
        setHistory([]);
    };

    return (
        <div className={"h-screen w-screen overflow-x-hidden"}>
            <div className={"flex flex-row justify-between bg-gray-800 p-8 text-white text-4xl"}>
                <h1>TP: Git workflow</h1>
                <nav className="flex flex-row gap-8">
                    <a href="#">Accueil</a>
                    <a href="#">À propos</a>
                </nav>
            </div>

            <div className={"flex flex-col bg-gradient-to-r h-screen from-indigo-500 via-purple-500 to-pink-500"}>
                <header className={"mx-auto mt-24 mb-12 text-4xl text-center text-white"}>
                    <h2 className={"mb-3"}>Calculatrice en ligne</h2>
                    <p>Une application en ligne développée par Mathis le Dev</p>
                </header>
                <div className={"flex flex-row justify-center gap-8 my-4"}>
                    <button onClick={handleClearEntry} className={"px-4 py-2 bg-red-500 text-white rounded-lg"}>C
                    </button>
                    <button onClick={handleClearAll} className={"px-4 py-2 bg-red-500 text-white rounded-lg"}>CA
                    </button>
                </div>
                <div className={"mx-auto w-[40vw] flex flex-col gap-32"}>
                    <div className={"px-8 flex flex-row justify-between  text-5xl py-4 rounded-full bg-gray-800 "}>
                        <span className={"text-gray-500 text-2xl mt-2"}>{lastResult}</span>
                        <span className={"text-white text-4xl"}>{result}</span>
                    </div>
                    <div className={"rounded-full bg-white text-black flex flex-row text-4xl"}>
                        <input
                            type="number"
                            value={leftOperand}
                            onChange={handleLeftOperandChange}
                            className="w-1/2 bg-transparent px-10 focus:outline-none"
                        />
                        <select
                            value={operator}
                            onChange={handleOperatorChange}
                            className={"p-3 bg-white"}
                        >
                            <option value="+" className={" bg-white"}>+</option>
                            <option value="-" className={" bg-white"}>-</option>
                            <option value="*" className={" bg-white"}>*</option>
                            <option value="/" className={" bg-white"}>/</option>
                        </select>
                        <input
                            type="number"
                            value={rightOperand}
                            onChange={handleRightOperandChange}
                            className={"px-10 w-1/2 bg-transparent text-end focus:outline-none"}
                        />
                    </div>
                    <button onClick={handleCalculate}
                            className={"rounded-xl px-6 py-3 bg-pink-500 mx-auto hover:bg-yellow-500 transition-all ease-in duration-200 text-white text-2xl hover:scale-110"}>Calculer
                    </button>

                </div>

            </div>

            <button onClick={()=>{setIsHistoryMenuOpen(!isHistoryMenuOpen)}} className={"absolute top-0 left-0 my-28 mx-2 border rounded-xl px-1 py-3 text-white text-xl"}>Historique</button>
            <div className={`absolute top-0 left-0 w-[40vh] h-full bg-gray-800 transition-all duration-150 origin-left ${!isHistoryMenuOpen ? "-translate-x-full" : "translate-x-0"}`}>
                <div className={"flex items-center flex-row justify-between text-white text-xl p-4 border-b border-gray-300"}>
                    <h3 className={""}>Historique des calculs :</h3>
                    <h3 className={"px-6 py-2 border rounded-xl"} onClick={()=>{setIsHistoryMenuOpen(!isHistoryMenuOpen)}}>X</h3>
                </div>
                {history.map((calculation, index) => (
                    <p key={index} className={"text-white p-2"}>
                        {calculation.operation} = {calculation.operationResult}
                    </p>
                ))}
            </div>

            <footer className={"bg-gray-800 text-center py-10 text-4xl text-white"}>
                Le footer
            </footer>
        </div>
    );
}

export default App;
