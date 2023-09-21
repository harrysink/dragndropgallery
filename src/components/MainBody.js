import React from 'react';
import { useState } from "react";
import { useDrag, useDrop } from 'react-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import gallery from './Data.js';
import './MainBody.css';

function Card({src, title, id, index}) {
    const ref = React.useRef(null);

    const [, drop] = useDrop({
        accept: 'image',
        hover: (item, monitor) => {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            moveImage(dragIndex, hoverIndex);

            item.index = hoverIndex;
        }
    })
    const [{ isDragging }, drag] = useDrag({
        type: 'image',
        item: () => {
            return { id, index };
        },
        collect: (monitor) => {
            return {
                isDragging: monitor.isDragging()
            };
        }
    });

    const opacity = isDragging ? 0 : 1;
    drag(drop(ref));

    return (
        <div ref={ref} style={{opacity}} className='card'>
            <img src={src} alt={title} />
        </div>
    );
};

function MainBody() {
    const  [images, setImages] = useState(gallery);
    const moveImage = React.useCallback((dragIndex, hoverIndex) => {
        setImages((prevCards) => {
            const clonedCards = [...prevCards];
            const removedItem = clonedCards.splice(dragIndex, 1)[0];
            clonedCards.splice(hoverIndex, 0, removedItem);
            return clonedCards;
        })
    }, []);

    const arrowRight = <FontAwesomeIcon icon={faChevronRight}
        style={
            {
                fontSize: 12,
            }
        }
    />

    return (
        <main>
            <h6>My gallery {arrowRight}</h6>
            <div className='gallery-grid'>
                {React.Children.toArray(
                    images.map((image, index) => (
                        <Card
                            src={image.img}
                            title={image.title}
                            id={image.id}
                            index={index}
                            moveImage={moveImage}
                        />
                    ))
                )}
            </div>
        </main>
    )
}

export default MainBody;