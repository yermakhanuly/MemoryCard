import { useState } from 'react';
import '../Style/main.css'

const imgSrc = [
        { name: "Sprig Plantar", src: "https://heldersrvio.github.io/memory-card-game/static/media/sprig.57a1fbf3.png" },
        { name: "Hop Pop Plantar", src: "https://heldersrvio.github.io/memory-card-game/static/media/hoppop.5badcd86.png" },
        { name: "Mayor Toadstool", src: "https://heldersrvio.github.io/memory-card-game/static/media/toadstool.2b499bfe.jpg" },
        { name: "Leopold Loggle", src: "https://heldersrvio.github.io/memory-card-game/static/media/loggle.c5790b4e.png" },
        { name: "Sylvia Sundew", src: "https://heldersrvio.github.io/memory-card-game/static/media/sylvia.fc5ee06d.png" },
        { name: "Captain Grime", src: "https://heldersrvio.github.io/memory-card-game/static/media/grime.6e597003.png" },
        { name: "Sasha", src: "https://heldersrvio.github.io/memory-card-game/static/media/sasha.5e94ec83.jpg" },
        { name: "Anne Boonchuy", src: "https://heldersrvio.github.io/memory-card-game/static/media/anne.d9d14c90.jpg" },
        { name:"Maddie Flour", src: "https://heldersrvio.github.io/memory-card-game/static/media/maddie.794635a6.jpg"},
        { name: "Wally", src: "https://heldersrvio.github.io/memory-card-game/static/media/wally.8036609c.png" },
        { name: "Polly Plantar", src: "https://heldersrvio.github.io/memory-card-game/static/media/polly.7702daf7.png" },
        { name: "Sadie Croaker", src: "https://heldersrvio.github.io/memory-card-game/static/media/croaker.824ac0d7.png" }
];

function shuffle(array){
    const arr = [...array];

    for(let i = arr.length - 1; i >= 0; i --){
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

function Body({onCardClick}) {
    
    const [cards, setCards] = useState(shuffle(imgSrc));

    function handleClick(name){
        onCardClick(name);
        setCards(shuffle(cards));
    }

    return (
        <div className='body'>
            {cards.map((card, i) => (
                <div className='card' key={i} onClick={() => handleClick(card.name)}>
                    <img src={card.src} alt={card.name}/>
                    <span>{card.name}</span>
                </div>
            ))}
        </div>
    );
}

export default Body;