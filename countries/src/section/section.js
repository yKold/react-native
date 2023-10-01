// import React from 'react';
// import "./section.css"

// const Section = (props) => {
//     const {source, comment, details} = props
//     return (
//         <div className='principal'>
//             <div id='box' className='part1'>
//                 <img id='img' alt='fl' src={source}/>
//                 <p>{comment}</p>
//             </div>
//             <div className='part2'>
//                 <p id='text'>{details}</p>
//                 <img id='img2' src={source} style={{display: "none"} }/>
//             </div>
//         </div>
//     )
// }

// let img2 = document.getElementById('img2')
// let text = document.getElementById('text')
// let box = document.getElementById('box')
// box.addEventListener('mouseover', () => {
//     img2.style.display = ''
//     text.style.display = 'none'
// })
// box.addEventListener('mouseout', () => {
//     img2.style.display = 'none'
//     text.style.display = ''
// }) 

// export default Section

import React, { useState } from 'react';
import "./section.css"

const Section = (props) => {
    const { source, comment, details, source2 } = props;
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    return (
        <div className='principal' >
            <div className='part1' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <img className='img' alt='fl' src={source} />
                <p>{comment}</p>
            </div>
            <div className='part2'>
                <p id='text' style={{ display: isHovered ? 'none' : 'block' }}>{details}</p>
                <img id='img2' src={source2} style={{ display: isHovered ? 'block' : 'none' }} />
            </div>
        </div>
    )
}

export default Section;
