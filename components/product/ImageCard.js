/** @jsxImportSource theme-ui */
import { Selector } from '@components/product'
import { Button } from '@components/ui'
import PropTypes from 'prop-types'
import { useState } from 'react'
import {
  Flex,
  Heading,
  Text
} from 'theme-ui'

const propTypes = {
  color: PropTypes.string,
  image: PropTypes.string.isRequired,
  layout: PropTypes.oneOf([
    'top left',
    'top right',
    'bottom left',
    'bottom right',
  ]),
  product: PropTypes.object.isRequired,
}

const defaultProps = {
  color: '',
  layout: 'top left',
}

const ImageCardWrapper = ({
  children,
  image,
  layout,
  ...props
}) => (
  <Flex
    sx={{
      alignItems: layout.includes('left') ? 'flex-start' : 'flex-end',
      backgroundImage: `url(${image})`,
      backgroundPosition: 'top -10px left 50%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      flexDirection: 'column',
      justifyContent: layout.includes('top') ? 'flex-start' : 'flex-end',
      p: [4, 4, 5],
      'h2, button': {
        alignSelf: layout.includes('left') ? 'flex-start' : 'flex-end',
      },      
    }}
    {...props}
  >
    {children}
  </Flex>
)

const ProductDetailsWrapper = ({ children, variant, ...props }) => (
  <Flex
    sx={{
      width: '256px',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
    variant={variant}
    {...props}
  >
    {children}
  </Flex>
)

const ProductTitle = ({ content, ...props }) => (
  <Heading
    as="h2"
    my={0}
    variant="styles.h2"
    {...props}
  >
    {content}
  </Heading>
)

const ProductDesc = ({ content, ...props }) => (
  <Text as="div" my={1} {...props}>
    {content}
  </Text>
)

const ProductButton = ({ content, href, ...props }) => (
  <Button
    href={href}
    my={2}
    {...props}
  >
    {content}
  </Button>
)

const ProductDetails = ({ color = '', price = '', ...props }) => (
  <Flex
    sx={{
      alignItems: 'center',
      flexDirection: ['column', 'row'],
      gap: [1, 0],
      justifyContent: 'space-between',
      my: [2, 0],
      '& > div': {
        minHeight: ['14px', 0],
      }
    }}
    {...props}
  >
    <Text as="div" variant="layout.product.card.details">
      {color}
    </Text>
    <Text as="div" variant="layout.product.card.price">
      {price}
    </Text>
  </Flex>
)

const ImageCard = ({
  color,
  image,
  layout,
  product,
  ...props
}) => {
  const initialColor = product.colors.find(color =>
    color.handle === product.handle
  )

  const [selectedColor, setColor] = useState(initialColor)

  return (
    <ImageCardWrapper
      color={color}
      image={image}
      layout={layout}
      {...props}
    >
      <ProductDetailsWrapper>
        <ProductTitle
          content={product.style || ''}
        />
        <ProductDesc
          content={product.shortDescription || ''}
          sx={{
            textAlign: layout.includes('left') ? 'left' : 'right',
          }}
        />
        <ProductButton
          content={"Shop " + (product.style || '')}
          href={`/product/${selectedColor.handle}`}
        />
        <Selector
          colors={product.colors}
          my={1}
          onChange={setColor}
          selected={selectedColor}
          sx={{
            alignSelf: layout.includes('left') ? 'flex-start' : 'flex-end',
          }}
        />
        <ProductDetails
          color={selectedColor.color || ''}
          price={product.variants[0].price}
        />
      </ProductDetailsWrapper>
    </ImageCardWrapper>
  )
}

ImageCard.propTypes = propTypes
ImageCard.defaultProps = defaultProps

export default ImageCard