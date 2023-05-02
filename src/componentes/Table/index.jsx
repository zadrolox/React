import './style.css'

function Table(){
    return (
        <table>

                {/* <!-- primeira linha da table --> */}
                <thead>
                <tr>
                    <th>HTML</th>
                    <th>CSS</th>
                    <th>JavaScript</th>
                </tr>
                </thead>

                {/* <!-- segunda linha da table --> */}
                <tbody>
                <tr>
                    <td><i className="fa-brands fa-html5" style={{color: "orange"}} /></td>
                    <td><i className="fa-brands fa-css3" style={{color: "#005eff"}} /></td>
                    <td><i className="fa-brands fa-js" style={{color: "#fbff00"}} /></td>
                </tr>
                
                {/* <!-- terceita linha de table --> */}
                <tr>
                    <td>Construindo seu site</td>
                    <td>Estilizando o seu site</td>
                    <td>Criando fincionalidades incriveis</td>
                </tr>
                </tbody>
                
        </table>
    )
}

export default Table