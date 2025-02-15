import React from "react"

function Nav() {
    return (
        <div className="headerNavBar">
            <div className="headerNavBarLeft">
                <a className="headerTag" href="https://github.com/AtomicKafka">Atomic Kafka</a>
                <a className="headerTag" href="https://www.npmjs.com/package/atomic-kafka">NPM Package</a>
                <a className="headerTag" href="https://github.com/oslabs-beta/AtomicKafka">GitHub</a>
            </div>
            <div className="headerNavBarRight ">
                <a className="headerTag" href="#aboutLink">About</a>
                <a className="headerTag" href="#demos">Demos</a>
                <a className="headerTag" href="#featureLink">Features</a>
                <a className="headerTag" href="#teamContainer">Team</a>
            </div>
        </div>
    );
}

export default Nav;