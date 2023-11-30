import "./style.css"
interface IProps {
    path: string;
    title: string;

}
const Card = ({ path, title }: IProps) => {
    return < >
        <div id="container-card">
            <img id="img-card" src={path} alt="" />
            <span id="title-card">{title}</span>

        </div>
    </>
}
export default Card