import Stars from "./components/Stars/Stars.tsx";

function App() {
    return (
        <div>
            <Stars count={3}></Stars>
            <Stars count={55}></Stars>
            <Stars count={0}></Stars>
            <Stars count={2}></Stars>
        </div>
    );
}

export default App
