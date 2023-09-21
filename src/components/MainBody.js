import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { DndContext, closestCenter, MouseSensor, TouchSensor, DragOverlay, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import { SortableCard } from "./SortableCard.js";
import { Card } from './Card';
import gallery from './Data.js';
import './MainBody.css';

function MainBody() {
    const  [images, setImages] = useState(gallery);
    const [activeId, setActiveId] = useState(null);
    const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
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
                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    onDragCancel={handleDragCancel}
                >
                    <SortableContext items={images} strategy={rectSortingStrategy}>
                        {images.map((image, index) => (
                            <SortableCard
                                src={image.img}
                                title={image.title}
                                id={image.id}
                                index={index}
                            />
                        ))}
                    </SortableContext>
                    <DragOverlay>
                        {activeId ? (
                            <Card src={activeId} index={images.indexOf(activeId)}/>
                        ) : null}
                    </DragOverlay>
                </DndContext>
            </div>
        </main>
    )

    function handleDragStart(event) {
        setActiveId(event.active.id);
    }

    function handleDragEnd(event) {
        const {active, over} = event;

        if (active.id !== over.id) {
            setImages((images) => {
                const oldIndex = images.indexOf(active.id);
                const newIndex = images.indexOf(over.id);

                return arrayMove(images, oldIndex, newIndex);
            });
        }

        setActiveId(null);
    }

    function handleDragCancel() {
        setActiveId(null);
    }
}

export default MainBody;