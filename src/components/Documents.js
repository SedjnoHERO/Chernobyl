import React from 'react';
import { lazy } from 'react';
import images from '../subComponents/Docs/images';
import '../subComponents/Docs/style.css';
import styled from 'styled-components';
const PowerButton = lazy(() => import('../subComponents/PowerButton'));

const Documents = () => {
    return (
        <main>
            <h2>Секреты Припяти: <br /> Чернобыльские документы</h2>
            <PowerButton />
            <div className="photo-grid">
                {images.map(({ source, title, description }, index) => (
                    <div className="container" key={index}>
                        <div >
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                        <img src={source} alt="error" />
                    </div>
                ))}
            </div>
        </main>
    )
};

export default Documents;