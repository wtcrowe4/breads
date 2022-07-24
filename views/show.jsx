const React = require('react')
const Def = require('./layouts/default')

const Show = ({bread, index}) => {
  return (
    <Def title={bread.name}>
      <h2>Show Page</h2>
      <h3>{bread.name}</h3>
      <p>
        {bread.name} bread
          { bread.hasGluten
          ? <span> does </span>
          : <span> does not </span> }
        have gluten.
      </p>
      <img src={bread.image} alt={bread.name} />
      <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>
      <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
        <input type='submit' value='Delete' />
      </form>
      <a href='/breads'><button>Back to Breads</button></a>
    </Def>
  )
}

module.exports = Show
