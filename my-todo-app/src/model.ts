export interface Todo {
    id: number,
    todo: string,
    isDone: boolean
}

// type Actions = 
//     | {type: "add"; payload: string}
//     | {type: "remove"; payload: number}
//     | {type: "done"; payload: string}

// const TodoReducer = (state: Todo[], action: Actions) => {
//     switch (action.type) {
//         case "add":
//             return [
//                 ...state,
//                 {id: Date.now(), todo: action.payload, isDone: false},
//             ]

//         case "remove":
//             return state.filter((todo) => todo.id !== action.payload)

//         case "done":
//             return state.map((todo) => 
//                 todo.todo !== action.payload ? {...todo, isDone: !todo.isDone} : todo
//             );
    
//         default:
//             return state;
//     }

// };

// import { useReducer } from "react"


// const ReducerExample = () => {

//     const [state, dispatch] = useReducer(TodoReducer, [])

//     const handleAddTodo = (todo) => {
//         dispatch({ type: 'add', payload: todo });
//     };

//     const handleRemoveTodo = (id) => {
//         dispatch({ type: 'remove', payload: id });
//     };

//     const handleToggleTodo = (todo) => {
//         dispatch({ type: 'done', payload: todo });
//     };
//     return (
//         <div>ReducerExample</div>
//     )
// }

// export default ReducerExample