import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { selectCount, increment, decrement } from './reducer/reducer';

function App() {
    const dispatch = useDispatch();
    const count = useSelector(selectCount);

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>Like</button>
            <button onClick={() => dispatch(decrement())}>Unlike</button>
        </>
    );
}

export default App;
