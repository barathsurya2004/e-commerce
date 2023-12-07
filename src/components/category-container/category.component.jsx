import './category.component.scss'


const CategoryContainer = (props) => {
    const { element } = props
    return (
        <div className={`category-container ${element.title}`} key={element.id}>
            <div className="background-image" style={{ backgroundImage: `url(${element.imageUrl})` }} />
            <div className="category-body-container">
                <h2>{element.title}</h2>
                <p>SHOP NOW</p>
            </div>
        </div>
    )
}


export default CategoryContainer