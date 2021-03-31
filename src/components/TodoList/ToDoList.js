import ToDoListEntry from './ToDoListEntry'

const ToDoList = ({list, onClickCheck, onClickDelete}) => {
    return(
      <div>
        {list.map(el=>
          <ToDoListEntry 
            memo={el} 
            onClickCheck={onClickCheck} 
            onClickDelete={onClickDelete} 
            id={el.id}
          />
        )}
      </div>
    )
}

export default ToDoList;