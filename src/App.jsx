import React, { useReducer } from 'react';
import { createDigitAction, clear, changeOperation, applyNumber } from "./store/actions.jsx"
import { APPLY_NUMBER, } from "./store/actions.jsx"
import TotalDisplay from './components/TotalDisplay.jsx';
import CalcButton from './components/CalcButton.jsx';
import reducer, { initialState } from './store/reducer.jsx';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  function handleChFunc(e) {
    const value = e.target.value;  // ← tam istediğin nokta!
    dispatch(createDigitAction(value));
  }
  function handleClear() {
    dispatch(clear());
  }
  function handleOpChan(events) {
    let operation = events.target.value;
    dispatch(changeOperation(operation));
  }



  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>

            </div>

            <div className="row">
              <CalcButton value={1} onClick={handleChFunc} />
              <CalcButton value={2} onClick={handleChFunc} />
              <CalcButton value={3} onClick={handleChFunc} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleChFunc} />
              <CalcButton value={5} onClick={handleChFunc} />
              <CalcButton value={6} onClick={handleChFunc} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleChFunc} />
              <CalcButton value={8} onClick={handleChFunc} />
              <CalcButton value={9} onClick={handleChFunc} />
            </div>
            <div className="row">
              <CalcButton value={'+'} onClick={handleOpChan} />
              <CalcButton value={0} onClick={handleChFunc} />
              <CalcButton value={'-'} onClick={handleOpChan} />
            </div>
            <div className="row">
              <CalcButton value={'*'} onClick={handleOpChan} />
              <CalcButton value={'/'} onClick={handleOpChan} />
              <CalcButton value={'CE'} onClick={handleClear} />
            </div>

            <div className="row eq_button">
              <CalcButton value={'='} onClick={() => {
                console.log(state);
                dispatch(applyNumber())
              }} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
