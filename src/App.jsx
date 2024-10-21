import style from "./App.module.css";
// import Calendary from "./Components/Calendario/Calendary";
// import { Header } from "./Components/Header/Header";
// import Participant from "./Components/Participantes/Participant";
// import Shares from "./Components/Participantes/Shares";
import PageHome from "./Components/PageHome/PageHome";


function App() {
    return (
        <div className={style.container}>
            <div className={style.main}>
                <PageHome />
                {/* <Header />
                <Calendary />
                <Participant />
                <Shares /> */}
            </div>
        </div>
    );
};

export default App;