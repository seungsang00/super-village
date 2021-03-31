import React from "react";
import "./ToDoListApp.css";
import ToDoList from "./ToDoList"

class ToDoListApp extends React.Component{
  constructor(props){
    super(props)
    this.id = 3;
    this.state = {
      newMemo : "",
      memoList : [
        {
          id: 0,
          contents: "리액트 복습",
          isChecked : false,
        },
        {
          id: 1,
          contents: "서버 복습",
          isChecked : false,
        },
        {
          id: 2,
          contents : "알고리즘 문제풀이",
          isChecked : false,
        }
      ],
      value: '',
    }
    this.onChangeForm = this.onChangeForm.bind(this)
    this.onClickCheck = this.onClickCheck.bind(this)
    this.onClickDelete = this.onClickDelete.bind(this)
  }

  onChangeForm(e){
    this.setState({
      value : e.target.value
    })
  }

  onCreateList(input){
    const newMemo = {
      id : this.id++,
      contents : input,
      isChecked : false,
    }
    this.setState(state => ({
      memoList : [
        ...state.memoList,
        {
          ...newMemo
        }
      ]
    }))
    this.setState({
      value : ''
    })
  }

  onClickCheck(id){
    const { memoList } = this.state;
    const idx = memoList.findIndex(el => el.id === id)
    const selectedMemo = memoList[idx];
    const copiedList = [...memoList];
    copiedList[idx] = {
      ...selectedMemo,
      isChecked : !selectedMemo.isChecked
    }
    this.setState({
      memoList : copiedList
    })
  }

  onClickDelete(id){
    const { memoList } = this.state;
    this.setState({
      memoList : memoList.filter(memoList => memoList.id !== id)
    })
  }

  render(){

    return (
      <div className ="App">
        <div className ="todoListApp">
          <div className="appTitle">
            TO DO LIST
          </div>
          <div id="inputForm">
            <input 
              type = 'text'
              placeholder = 'PLEASE ENTER YOUR CONTENT'
              value = {this.state.value}
              onChange={this.onChangeForm}
            />
            <button onClick={()=> this.onCreateList(this.state)}></button>
          </div>
          <div>
            <ToDoList 
              list={this.state.memoList} 
              onClickCheck={this.onClickCheck}
              onClickDelete={this.onClickDelete}
            />
          </div>
        </div>  
      </div>
    ) 
  }
}



export default ToDoListApp;
