import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

function App() {
    const [leftOperand, setLeftOperand] = useState(1.0);
    const [rightOperand, setRightOperand] = useState(1.0);
    const [operator, setOperator] = useState("+");
    const [lastResult, setLastResult] = useState(0.0);
    const [result, setResult] = useState(leftOperand + rightOperand);

    useEffect(() => {
        setLastResult(result);
        switch (operator) {
            case "+":
                setResult(leftOperand + rightOperand);
                break;
            case "-":
                setResult(leftOperand - rightOperand);
                break;
            case "*":
                setResult(leftOperand * rightOperand);
                break;
            case "/":
                setResult(leftOperand / rightOperand);
                break;
            default:
                setResult(leftOperand + rightOperand);
                break;
        }
    }, [leftOperand, rightOperand, operator]);

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
        setRightOperand(0);
    };

    const handleClearAll = () => {
        setLeftOperand(0);
        setRightOperand(0);
        setOperator("+");
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
                <header className={"mx-auto mt-24 mb-32 text-4xl text-center text-white"}>
                    <h2 className={"mb-3"}>Calculatrice en ligne</h2>
                    <p>Une application en ligne développée par Mathis le Dev</p>
                </header>
                <div className={"mx-auto w-[40vw] flex flex-col gap-32"}>
                    <div className={"px-8 flex flex-row justify-between  text-5xl py-4 rounded-full bg-gray-800 "}>
                        <span className={"text-gray-500 text-2xl mt-2"}>{lastResult}</span>
                        <span className={"text-white text-4xl"}>{lastResult}{result}</span>
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

                    <div className={"flex flex-row justify-center gap-8"}>
                        <button onClick={handleClearEntry} className={"px-4 py-2 bg-red-500 text-white rounded-lg"}>CE</button>
                        <button onClick={handleClearAll} className={"px-4 py-2 bg-red-500 text-white rounded-lg"}>CA</button>

                    </div>
                </div>

            </div>

            <footer className={"bg-gray-800 text-center py-10 text-4xl text-white"}>
                Le footer
            </footer>
        </div>
    );
}

export default App;
