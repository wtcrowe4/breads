const React = require('react')
const Def = require('./layouts/default')

const New = () => {
    return (
      <Def>
        <h2>Add a new bread</h2>
        <form action="/breads" method="POST">
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                id="name"
                required
            />
            <label htmlFor="image">Image</label>
            {/* Add a Regex to make sure people add valid link to image */}
            <input
                type="text"
                name="image"
                id="image"
            />
            <label htmlFor="baker">Baker</label>
            <select name="baker" id="baker">
                <option value="Rachel">Rachel</option>
                <option value="Monica">Monica</option>
                <option value="Joey">Joey</option>
                <option value="Chandler">Chandler</option>
                <option value="Ross">Ross</option>
                <option value="Phoebe">Phoebe</option>
            </select>
            <label htmlFor="hasGluten">Has Gluten?</label>
            <input 
                type="checkbox"
                name="hasGluten"
                id="hasGluten"
                defaultChecked
            />
            <br />
            <input id="submitbtn" type="submit" />
        </form>
        <a href="/breads"><button>Go back to Breads</button></a>
    </Def>
    )
}

module.exports = New
