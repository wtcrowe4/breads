const React = require('react')
const Def = require('./layouts/default')

const Show = ({bread, index}) => {
  //console.log(bread.name)
    return (
      <Def>
        <h2>Show Page</h2>
        <h3>{bread.name}</h3>
        <p>
            {bread.name} bread {
                bread.hasGluten
                ? <span> does </span>
                : <span> does not </span>
            }
            have gluten.
        </p>
        <img src={bread.image} alt={bread.name} />
        <form action={`/breads/${index}?_method=DELETE`} method="POST">
          <input type='submit' value='Delete' />
        </form>
      </Def>
    )
}

module.exports = Show
