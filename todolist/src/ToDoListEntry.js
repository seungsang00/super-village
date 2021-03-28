import './ToDoListEntry.css'

const ToDoListEntry = ({memo , onClickCheck, onClickDelete }) => {
    return (
        <ul className="listEntry" >
            <button id="checkBtn" onClick={()=>{onClickCheck(memo.id)}}></button>
            <div className = "contents" style={{textDecoration: memo.isChecked ? "line-through" : "none" }}>
                {memo.contents}
            </div>
            <button id="deleteBtn" onClick={()=>{onClickDelete(memo.id)}}></button>
        </ul>
    )
}

export default ToDoListEntry;