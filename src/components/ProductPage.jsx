import React from 'react'
import { Page } from "@shopify/polaris"
import ProductList from './ProductList'

function ProductPage({setisOpen, products}) {
  return (
    <Page title="Product Selector"
    primaryAction={{
      content: "Select Product",
      onAction: () => setisOpen(true)
    }}
      >
        <ProductList products={products} />
    </Page>
  )
}

export default ProductPage