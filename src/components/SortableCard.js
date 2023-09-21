import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import {Card} from './UserAuthentication';

export const SortableCard = (props) => {
    const sortable = useSortable({id: props.url});
    const {
        attributes,
        listeners,
        isDragging,
        setNodeRef,
        transform,
        transition,
    } = sortable;

    return (
        <Card
            ref={setNodeRef}
            {...props}
            {...attributes}
            {...listeners}
        />
    )
}