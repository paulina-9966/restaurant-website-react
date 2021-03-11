import React from 'react';
import { Image, Jumbotron } from 'react-bootstrap'
import catering from './images/catering.jpg'


export default function Catering() {
    return (
        <Jumbotron fluid className="jumbotron-catering">
            <Image src={catering} alt="catering" className="catering-img"/>
            <div className="catering-desc">
                <h2>the best diet catering in your town!</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            veniam, quis
            </p>
            </div>
        </Jumbotron>
    )
}

