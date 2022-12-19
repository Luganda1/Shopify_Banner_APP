import React from 'react'
import {EmptyState} from "@shopify/polaris"

function ProductEmptyState({setisOpen}) {
  return (
     // This is used when ther is no products, items, lists, tables to display
        // https://polaris.shopify.com/components/empty-state 
        <EmptyState
        heading="Manage the products you want to display"
        action={{
          content: "Select Products",
          onAction: () => setisOpen(true)
        }}
        image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
      >
        <p>Select the Products you want to use on your banner.</p>
    </EmptyState>
  )
}

export default ProductEmptyState