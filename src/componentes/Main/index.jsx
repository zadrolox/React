import './style.css'
import Table from '../Table'
import Form from '../Form'

function Main(){
    return (
        <>
        <main className="content">
            <h2 id="inicio">Sobre mim</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quia, ullam consequatur facere vel eveniet asperiores aperiam nobis aspernatur, ea voluptatem distinctio nostrum inventore soluta, eligendi iusto perspiciatis voluptatibus dolore!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quaerat ratione quos corrupti rem quas officiis, atque laborum eos aperiam delectus cumque sunt? Deserunt ipsa iure adipisci nisi, laboriosam explicabo?
            </p>

            <h2 id="carreira">Minha Carreira</h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, iste? Dolorem aperiam neque perferendis rem. Aliquid consequuntur cupiditate modi, minus voluptatibus tempore eum aut ullam neque natus, voluptatum culpa asperiores.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, soluta veritatis, delectus consequuntur eius distinctio sunt voluptatum impedit atque, cumque aliquid totam similique laboriosam assumenda illo unde quibusdam voluptatibus maxime!
            </p>

            <h2>Como posso te ajudar?</h2>
            
            <Table />

            <Form/>
        </main>
        </>
    )
}

export default Main