import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import store from "./store"
import "./index.css"
import App from "./App"

import { BrowserRouter } from "react-router-dom"
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"

let persistor = persistStore(store)
const container = document.getElementById("root")
const root = createRoot(container)

root.render(
  // <Provider store={store}>
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // </Provider>
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
)