import Card from "../Card"
import Header from "../Header"
import "./style.css"
const cardsMock: {
    path: string;
    title: string;
}[] = [
        {
            path: "public/computador.png",
            title: "Laboratório informática 1"
        },
        {
            path: "public/computador.png",
            title: "Laboratório informática 2"


        },
        {
            path: "public/computador.png",
            title: "Laboratório informática 3"

        },
        {
            path: "public/usinagem.png",
            title: "Usinagem"
        },
        {
            path: "public/manutenção.png",
            title: "Manutenção Mecânica"
        },
        {
            path: "public/eletrica.png",
            title: "Elétrica"
        }


    ]

const BoxHome = () => {
    return <>
        <div id="box-home">
            <Header text={"Ambientes"} />

            <img id="lupa" src="public/lupa.png" alt="" />
            <input id="search" type="text" />
            <div id="cards-content">
                {
                    cardsMock.map((e) => {

                        return <Card path={e.path} title={e.title} />
                    })
                }
            </div>
        </div>
    </>
}

export default BoxHome