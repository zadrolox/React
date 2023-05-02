import './style.css'

function Header(){
    return (
        <header className="header">
            <h1>Portfólio</h1>
            <div className="social">
                <a href="http://linkedin.com/" target="_blank">
                    <i className="fa-brands fa-linkedin" style={{color: "#005eff"}} />
                </a>

                <a href="http://github.com/" target="_blank">
                    <i className="fa-brands fa-github" style={{color: "#000000"}} />
                </a>
            </div>
        </header>
    )
}

export default Header