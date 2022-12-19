import React from 'react'
import { Card, ResourceList } from "@shopify/polaris"
import ProductItem from './ProductItem'

function ProductList({ products }) {
  //https://polaris.shopify.com/components/resource-list
  //The resource list component provides the UI elements for list sorting, filtering, and pagination, but doesn’t provide the logic for these operations
  return (
    <Card>
      <ResourceList
        showHeader
        resourceName={{ singular: "Product", plural: "Products" }}
        items={products}
        renderItem={product => <ProductItem product={product} /> }
      />
    </Card>
  )
}

export default ProductList