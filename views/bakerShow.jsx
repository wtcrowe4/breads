const React = require('react')
const Def = require('./layouts/default')

function Show ({baker}) {
    return (
      <Def title={baker.name}>
        <h3>{baker.name}</h3>
        <p>{baker.name} has been baking with us since {baker.startDate.getFullYear()}</p>
        <p>About {baker.name}: {baker.bio}</p>
        <h3>Breads {baker.name} has baked</h3>
    
        <ul>
            {
                baker.breads.map(bread => {
                    return (
                        <li key={bread.id}>{bread.name}</li>
                    )
                })
            }
        </ul>
        <div className="buttons">
            <form action={`/bakers/${baker.id}?_method=DELETE`} method="POST">
                <input id="deletebtn" type="submit" value="Delete" />
            </form>
            <a href='/breads'><button>Back to Breads</button></a>
        </div>
      </Def>
    )
}

module.exports = Show

