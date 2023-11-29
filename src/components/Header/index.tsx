import "./style.css"

interface IProps{
    text: string
}

const Header = (props:IProps)=>{
    return<>
    <header id="header">
        <span id="title-header">{props.text}</span>
        <img id="menu-header" src="public/menu.png" alt="menu" />
    </header>
    </>
}

export default Header