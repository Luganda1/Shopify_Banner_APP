import React from 'react'
import { Thumbnail, ResourceList, Stack, TextStyle } from "@shopify/polaris"
import {
  HideMinor
} from '@shopify/polaris-icons';
 
function ProductItem({ product }) {
  //https://polaris.shopify.com/components/resource-list 
  const image = product.images[0] ? product.images[0].originalSrc : HideMinor
  const media = <Thumbnail source={image} />;
  const price = product.variants[0].price
  return (
    <>
      <ResourceList.Item
        media={media}
        id={product.id}
        accessibilityLabel={`View details for ${product.title}`}
      >

        {/* Use to lay out a horizontal row of components or to achieve no-fuss vertical centering 
        https://polaris.shopify.com/components/stack */}
        <Stack>
        <Stack.Item fill >
          <h4>
            <TextStyle variation='strong'>
              {product.title}
            </TextStyle>
          </h4>
        </Stack.Item>
        <Stack.Item>
          <p>${price}</p>
        </Stack.Item>
        </Stack>
      </ResourceList.Item>
    </>
  )
}

export default ProductItem