import React from "react"

import { Navigate } from "react-router-dom"

import { AppContext } from "../AppContext"
import { Receipt } from "../types"

import { VerifyView } from "./VerifyView"

export const HomeView: React.FC = () => {
  // const [hasError, setHasError] = useState(false)
  return (
    <AppContext.Consumer>
      {({ apiKey, clientInstance, setReceipts, receipts, contracts }) =>
        !apiKey ? (
          <Navigate
            to={{
              pathname: "/settings"
            }}
          />
        ) : (
          <VerifyView
            contracts={contracts}
            client={clientInstance}
            apiKey={apiKey}
            onVerifiedContract={(receipt: Receipt) => {
              const newReceipts = [...receipts, receipt]

              setReceipts(newReceipts)
            }}
          />
        )
      }
    </AppContext.Consumer>
  )
}
