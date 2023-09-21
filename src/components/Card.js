import React, {forwardRef} from 'react';

export const Card = forwardRef({src, title, id, index, ...props}, ref) => {
    return (
        <div className='card'>
            <img src={src} alt={title} />
        </div>
    )
}