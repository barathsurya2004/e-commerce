import './categories-list.component.scss';
import CategoryContainer from '../category-container/category.component.jsx';
const CategoriesList = (props) => {
    const { catagories } = props
    return (
        <div className="categories-container">
            {catagories.map((ele) => {
                return (
                    <CategoryContainer element={ele} />
                )

            })}
        </div>
    )
}

export default CategoriesList