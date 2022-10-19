import { Card } from "react-bootstrap"

export default function CardHero(props){
    return (
        <Card>
            <Card.Title className="text-center mt-20"><h1>{props.title}</h1></Card.Title>
            <Card.Img src={props.src} />
        </Card>
    )
}