// react function component called Ticker
// this component will be used to display the current price of a stock from binance api using a websocket
import React, { useState, useEffect, useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'changeInPrice':
      if (action.price > state.price) {
        return { ...state, price: action.price, color: 'green' }
      }
      if (action.price < state.price) {
        return { ...state, price: action.price, color: 'red' }
      }
      if (action.price === state.price) {
        return { ...state, price: action.price, color: 'black' }
      }
      break
    default:
      return state
  } 
}

const Ticker = ({ symbol }) => {
  const [price, setPrice] = useState(0)
  const [ws, setWs] = useState(null)

  const [state, dispatch] = useReducer(reducer, { price: 0 })

  useEffect(() => {
    const ws = new WebSocket('wss://stream.binance.com:9443/ws/' + symbol.toLowerCase() + '@ticker')
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data)
      const price = parseFloat(data.c).toFixed(2)
      console.log(price)
      setPrice(price)
    }
    setWs(ws)
    return () => {
      ws.close()
    }
  }, [symbol])

  return (
    <div>
      {symbol}: {price}
    </div>
  )
}

export default Ticker