import "./App.css";
import CardPerson from "./Components/CardPerson";
function App() {
    return (
        <div className="App">
            <CardPerson
                firstName={"Jane"}
                lastName={"Doe"}
                age={45}
                hairColor={"Black"}
            />
            <CardPerson
                firstName={"John"}
                lastName={"Smith"}
                age={88}
                hairColor={"Brown"}
            />
            <CardPerson
                firstName={"Millard"}
                lastName={"Fillmore"}
                age={50}
                hairColor={"Brown"}
            />
            <CardPerson
                firstName={"Maria"}
                lastName={"Smith"}
                age={62}
                hairColor={"Brown"}
            />
        </div>
    );
}

export default App;
