import React from 'react'
import Header from './components/Header'

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <h1>Home Page</h1>
                <h2>Cities</h2>
                <h2>Posts</h2>
            </div>
        )
    }
}