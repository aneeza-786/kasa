import useCollapse from 'react-collapsed';
import categories from"../data/aboutData.json"
import "../styles/About.css";


console.log (categories)

function Collapse(props) {
    const config = {duration:200}
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
return (
    <section className='categories'>
    {categories.map ((category) => {
        return(
        <article className="category" key={category.id}>
            <div className="header-collapse" {...getToggleProps()}>
                <p className='title-collapse'>{category.title}</p>
                <div className='icon'><i className={'fa-solid fa-chevron-' + (isExpanded ? 'up' : 'down')}></i></div>   
            </div>
            <p {...getCollapseProps()} className="content-collapse">
                {category.content}
            </p>
        </article>)
        })}
    </section>
    );
}

export default Collapse;