/** @jsxImportSource theme-ui */
import { Selector } from '@components/product'
import { Button } from '@components/ui'
import Image from 'next/image'
import Link from 'next/link'
import {
  Box,
  Flex,
  Heading,
  Text
} from 'theme-ui'

const ProductCardWrapper = ({ children }) => (
  <Flex
    sx={{
      alignItems: 'center',
      alignSelf: 'stretch',
      backgroundColor: '#f5f3f4',
      flexDirection: ['column', 'row'],
      justifyContent: 'center',
      height: ['auto', '596px'],
      overflow: 'hidden',
      position: 'relative',
    }}
  >
    {children}
  </Flex>
)

const ImageWrapper = ({ children, ...props }) => (
  <Box
    sx={{
      height: ['286px', '100%'],
      minWidth: ['100%', 'auto'],
      display: 'block',
      flexBasis: [null, '60%'],
      flexShrink: [null, 1],
      alignSelf: 'center',
      overflow: 'hidden',
      position: 'relative',
    }}
    {...props}
  >
    {children}
  </Box>
)

const Description = ({ children }) => (
  <Flex
    sx={{
      width: '252px',
      alignItems: 'stretch',
      flexDirection: 'column',
      justifyContent: 'center',
      mt: 2,
      mb: 5,
      'h2, button': {
        alignSelf: ['center', 'flex-start'],
      }
    }}
  >
    {children}
  </Flex>
)

const ProductCard = ({
  product,
  variant,
  imgProps,
  ...props
}) => {
  return (
    <ProductCardWrapper {...props}>
      {product?.images && (
        <ImageWrapper
          sx={{
            backgroundImage: `url(${product.images[1] && product.images[1].src})`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
          }}
        />
      )}
      <Description>
        <Heading
          as="h2"
          mt={0}
          mb={1}
          variant="styles.h2"
        >
          {product.productType}
        </Heading>
        <Text
          as="div"
          sx={{ textAlign: ['center', 'left'] }}
        >
          {product.description}
        </Text>
        <Selector
          colors={product.variants.map((variant) => variant.color)}
          variant="borders"
          mt={2}
          mb={1}
        />
        <Flex
          sx={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            mb: 3,
          }}
        >
          <Text as="div" variant="text.micro">{product.title && product.title.split(" ")[1]}</Text>
          <Text as="div">{product.variants[0].price} USD</Text>
        </Flex>
        <Link href={'/product/${product.slug}'} passHref>
          <Button>
            Shop {product.productType}
          </Button>
        </Link>
      </Description>
    </ProductCardWrapper>
  )
}

export default ProductCard