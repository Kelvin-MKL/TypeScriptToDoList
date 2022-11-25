import {useState, useRef, useEffect} from "react"

export function Home() {
    const [toDo, setToDo] = useState<string>("test")
    const [toDoList, setToDoList] = useState<string[]>(["test1", "test2", "test3"])
    const inputRef = useRef<HTMLInputElement>(null)

    const onClickAdd: React.MouseEventHandler<HTMLButtonElement> = () => {
        setToDoList([toDo, ...toDoList]);
        inputRef.current!.value = "";
    }

    useEffect(() => {
        
        return console.log("123") 
    }, [])

    return <>
    <div className="toDo">
        Things to be done
        <div> <input className="homeInput" ref={inputRef} type="text" placeholder="Write something" onChange={ e => setToDo(e.target.value)}/>
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

