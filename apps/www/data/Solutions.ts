import { products } from 'shared-data'
import { PRODUCT_NAMES, PRODUCT_SHORTNAMES } from 'shared-data/products'

const solutions = {
  [PRODUCT_SHORTNAMES.HOSTEDDESKTOP]: {
    name: PRODUCT_NAMES.HOSTEDDESKTOP,
    icon: products.hosteddesktop.icon[24],
    description:
      "A windows or linux server hosted on the cloud. Access your data any where any time with just an internet connection.",
    description_short: '',
    label: '',
    url: '/hosted',
  },
  [PRODUCT_SHORTNAMES.AUTHENTICATION]: {
    name: PRODUCT_NAMES.AUTHENTICATION,
    icon: products.authentication.icon[24],
    description: 'Add user sign ups and logins, securing your data with Row Level Security.',
    description_short: '',
    label: '',
    url: '/auth',
  },
  [PRODUCT_SHORTNAMES.STORAGE]: {
    name: PRODUCT_NAMES.STORAGE,
    icon: products.storage.icon[24],
    description: 'Store, organize, and serve large files. Any media, including videos and images.',
    description_short: '',
    label: '',
    url: '/storage',
  },
  [PRODUCT_SHORTNAMES.FUNCTIONS]: {
    name: PRODUCT_NAMES.FUNCTIONS,
    icon: products.functions.icon[24],
    description: 'Write custom code without deploying or scaling servers.',
    description_short: '',
    label: '',
    url: '/edge-functions',
  },
  [PRODUCT_SHORTNAMES.REALTIME]: {
    name: PRODUCT_NAMES.REALTIME,
    icon: products.realtime.icon[24],
    description:
      'Create multiplayer experiences by sharing, broadcasting, and listening to changes from other clients or the Database.',
    description_short: '',
    label: '',
    url: '/realtime',
  },
  [PRODUCT_SHORTNAMES.VECTOR]: {
    name: PRODUCT_NAMES.VECTOR,
    icon: products.vector.icon[24],
    description: 'Integrate your favorite ML-models to store, index and search vector embeddings.',
    description_short: '',
    label: '',
    url: '/vector',
  },
}

export default solutions
