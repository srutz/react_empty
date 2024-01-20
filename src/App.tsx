import { Greeter } from "./Greeter"

export function App() {
    function onButton() {
        console.log("Button clicked!");
    }

    return (
        <div className="appdiv">
            <Greeter name="World" title="Tooltip Text"/>
            <button onClick={onButton}>Click me</button>
        </div>
    );
}
