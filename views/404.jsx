const React = require('react')
const Def = require('./layouts/default')

const ErrorView = () => {
    console.log(404)
    return (
        <Def>
            <img id="errorImage" src="/images/404.jpg" alt="404" />
            <a href='https://www.freepik.com/search?format=search&from_query=404+food&premium=0&query=404&selection=1'>www.freepik.com</a>
            <h3>Sorry, this page does not exist yet.</h3>
            <a href="/breads">Go Back To Breads</a>
        </Def>
    )
}

module.exports = ErrorView

