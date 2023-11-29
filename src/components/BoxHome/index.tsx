import Card from "../Card"
import Header from "../Header"
import "./style.css"

const BoxHome = () => {
    return <>
    <div id="box-home">
        <Header text={"Ambientes"}/>
        <img id="lupa" src="public/lupa.png" alt="" />
        <input id="search" type="text" />
        <div id="cards-content">
            <Card/>
        </div>
    </div>
    </>
}

export default BoxHome