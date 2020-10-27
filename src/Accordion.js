import React, {useState} from 'react';
import './style.css';

const Accordion = (props) => {
    const [open, setOpen] = useState(false);

    function handleOpen() {
        if(open === false) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }

    return (<>
        <div className="accordion">
            <div className="accordionHeading">
                <div className="container">
                    <p>{props.title}</p>
                    <span onClick={handleOpen}>
                        {open === true ? 'X': "|||"}
                    </span>
                </div>
            </div>

            <div className={(open === true ? "show" : "") + " accordionContent"}>
                <div className="container">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Proin pretium lorem neque, eu tempus nisi porttitor sed. 
                        Sed facilisis tincidunt erat in ornare. Praesent ultricies 
                        felis quis lobortis scelerisque. Donec eget sollicitudin tellus. 
                        Phasellus tempus dignissim orci vel faucibus. Fusce sit amet eros 
                        quis turpis vulputate accumsan. Morbi vestibulum malesuada urna, eget 
                        convallis ligula laoreet nec.
                    </p>
                </div>
            </div>
        </div>
    </>);
}

export default Accordion;
