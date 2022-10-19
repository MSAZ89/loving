import { Card } from "react-bootstrap"

export default function CardHero(props){
    return (
        <Card>
            <Card.Title className="text-center mt-20"><h1>{props.title}</h1></Card.Title>
            <Card.Img src="https://isteam.wsimg.com/ip/c3fdad59-885b-4a54-a02e-8b0428b0e5cd/IMG_7606.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1920,m" />
        </Card>
    )
}