const React = require('react')
const Def = require('./layouts/default')

const Index = ({breads, bakers, title}) => {
    return(
        <Def title={title}>
            <h2>Index Page</h2>
            <h3>Bakers</h3>
            <ul>
                { bakers.map(baker => { 
                        return(
                            <li key={baker._id}>
                                <a href={`/bakers/${baker._id}`}>{baker.name}</a>
                            </li>
                        ) 
                    })
                }
            </ul>
            <h3>Breads</h3>
            <ul>
                {
                    breads.map((bread) => {
                        return(
                            <li key={bread._id}>
                                <a href={`/breads/${bread._id}`}>
                                    {bread.name}
                                </a>
                                <span>- {bread.getBakedBy()}</span>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="newButton">
                <a href="/breads/new"><button>Add a New Bread</button></a>
            </div>
        </Def>
    )
}

module.exports = Index