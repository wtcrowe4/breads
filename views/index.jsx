const React = require('react')
const Def = require('./layouts/default')

const Index = ({breads, title}) => {
    return(
        <Def title={title}>
            <h2>Index Page</h2>
            {/* <p>I have {breads[0].name} bread.</p> */}
            <ul>
                {
                    breads.map((bread) => {
                        return(
                            <li key={bread.id}>
                                <a href={`/breads/${bread.id}`}>
                                    {bread.name}
                                </a>
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