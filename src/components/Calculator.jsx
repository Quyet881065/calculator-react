import { useState } from "react";
import { Display } from "./Display";
import { Button } from "./Button";

function Calculator() {
    const [input, setInput] = useState("");
    const [lastCalculation, setLastCalculation] = useState("");
    const [isResult, setIsResult] = useState(false);

    const handleClick = (val) => {
        if (val === "=") {
            try {
                const result = eval(input).toString();
                setInput(result);
                setLastCalculation(`${input} = ${result}`);
                setIsResult(true);
            } catch {
                setInput("Error")
                setIsResult(true)
            }
        } else if (val === "AC") {
            setInput("")
            setIsResult(false);
            setLastCalculation("");
        } else if (val === "BACKSPACE") {
            if(isResult){   
                setInput("");
                setIsResult(false)
            }
            setInput((prev) => prev.slice(0, -1)); // .slice(0, -1) luôn cắt chuỗi từ đầu đến kí tự kế cuối, giúp loại bỏ ký tự cuối cùng.
        }
        else
            setInput((prev) => prev + val)
    }
    console.log(input)

    const buttons = [
        "7", "8", "9", "/",
        "4", "5", "6", "*",
        "1", "2", "3", "-",
        "0", ".", "=", "+"
    ];

    return (
        <div className="bg-gray-500 p-6 rounded-xl shadow-xl">
            <h2 className="text-2xl font-bold text-center mb-4">React Calculator</h2>
            {lastCalculation && (
                <div className="text-right text-xl text-gray-200 italic mb-2">
                    {lastCalculation}
                </div>
            )}
            <Display value={input} />
            <div className="grid grid-cols-4 gap-3">
                {buttons.map((button) => (
                    <Button key={button} value={button} onClick={handleClick}
                        className={button === "=" ? "bg-green-500 text-white" : "bg-gray-200"} />
                ))}
                {isResult ?
                    (
                        <Button value="AC" onClick={handleClick} className="col-span-4 bg-red-500 text-white" />
                    ) : (
                        <Button value="BACKSPACE" onClick={handleClick} className="col-span-4 bg-yellow-400 text-white" />
                    )
                }
            </div>
        </div>
    )
}

export default Calculator;