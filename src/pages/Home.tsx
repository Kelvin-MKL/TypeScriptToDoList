import {useState, useRef} from "react"

export function Home() {
    const [toDo, setToDo] = useState<string>("test")
    const [toDoList, setToDoList] = useState<string[]>(["test1", "test2", "test3"])

    const onClickAdd: React.MouseEventHandler<HTMLButtonElement> = () => void  {

    }

    return <>
    <div className="toDo">
        Things to be done
        <div> <input className="homeInput" type="text" placeholder="Write something" />
        <button className="addBtn" onClick={onClickAdd}> + </button>
        </div>
       


    </div>
    <div >
        Completed

    </div>
    <div className="toDo">            
        {toDoList.map((item, index) => 
                <label key={index}> {item} </label>) }
    </div>
    <div className="completed">222</div>
    </>
}

