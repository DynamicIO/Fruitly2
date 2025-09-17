import MangoImg from '../components/Mango juice.jpg'
import GuavaImg from '../components/Guava juice.jpg'
import OrangeImg from '../components/Orange Juice.jpg'
import StrawberryImg from '../components/Strawberry juice.jpg'
export type MenuItem = {
  id: string
  name: string
  priceEgp: number
  imageUrl: string
  description: string
}

export const menu: MenuItem[] = [
  {
    id: 'mango',
    name: 'Mango',
    priceEgp: 80,
    imageUrl: MangoImg,
    description: 'Rich, velvety mango juice that tastes like summer in a glass.',
  },
  {
    id: 'guava',
    name: 'Guava',
    priceEgp: 65,
    imageUrl: GuavaImg,
    description: 'Fragrant and tropical, naturally sweet with a refreshing finish.',
  },
  {
    id: 'orange',
    name: 'Orange',
    priceEgp: 60,
    imageUrl: OrangeImg,
    description: 'Classic freshly-squeezed oranges for a bright vitamin C boost.',
  },
  {
    id: 'strawberry',
    name: 'Strawberry',
    priceEgp: 70,
    imageUrl: StrawberryImg,
    description: 'Sweet and tangy strawberries blended into a vibrant pink sip.',
  },
]

