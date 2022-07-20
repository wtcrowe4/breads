const React = require('react')
const Def = require('./layouts/default')

const Edit = ({bread, index}) => {
    return(
        <Def>
            <h2>Edit a Bread</h2>
            <form action={`/breads/${index}?_method=PUT`} method="POST">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    defaultValue={bread.name} 
                />
                <label htmlFor="image">Image</label>
                <input
                    type="text"
                    name="image"
                    id="image" 
                    defaultValue={bread.image}
                />
                <label htmlFor="hasGluten">Has Gluten?</label>
                <input
                    type="checkbox"
                    name="hasGluten"
                    id="hasGluten"
                    defaultChecked={bread.hasGluten} 
                />
                <br/>
                <input type="submit" />
            </form>
        </Def>
    )
}

module.exports = Edit