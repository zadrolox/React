import './style.css'

function Form(){
    return (
        <form id="contato">
                <label> Email: </label> <br/>
                <input type="text" name="email" placeholder="Digite seu email" /><br/>

                <label> Telefone: </label> <br/>
                <input type="text" name="telefone" placeholder="(51) 9____-____" /> <br/>

                <label> Mensagem: </label> <br/>
                <textarea name="mensagem" cols="30" rows="5" placeholder="Digite sua mensagem" />= <br/>

                <input type="button" value="Enviar" />
        </form>
    )
}

export default Form