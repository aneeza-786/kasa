import React from "react";
import "../styles/About.css";


const Collapse = ({index, title, content}) => {
    const [isCollapsed , setIsCollapsed] = React.useState(title);
        return(
        <article className="category">
            <div className="header-collapse" onClick={() => setIsCollapsed(!isCollapsed)}>
                <p className='title-collapse'>{title}</p>
                <div className='icon'><i className={'fa-solid fa-chevron-' + (isCollapsed ? 'down' : 'up')}></i></div>   
            </div>
            <div className={`content-collapse ${isCollapsed ? 'collapsed' : 'expanded'}`}> 
                {Array.isArray(content)?
                content.map((value, index) => <p className="value" key={index}>{value}</p>) : content}
            </div>
        </article>);
        };

export default Collapse;
