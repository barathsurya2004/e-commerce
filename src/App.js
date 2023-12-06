import './catagories.styles.scss'



const App = () => {
  const catagories = [
    {
      id: 1,
      title: "Hat"
    },
    {
      id: 2,
      title: 'Jacket'
    },
    {
      id: 3,
      title: 'Sneakers'
    },
    {
      id: 4,
      title: 'Men'
    },
    {
      id: 5,
      title: 'Women'
    }
  ]

  return (
    <div className="categories-container">
      {catagories.map((ele) => {
        return (
          <div className={`category-container ${ele.title}`} key={ele.id}>
            {/* <img /> */}
            <div className="category-body-container">
              <h2>{ele.title}</h2>
              <p>SHOP NOW</p>
            </div>
          </div>
        )

      })}
    </div>

  )
}
export default App