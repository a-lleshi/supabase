import { products } from 'shared-data'
import { PRODUCT_NAMES, PRODUCT_SHORTNAMES } from 'shared-data/products'

const solutions = {
  [PRODUCT_SHORTNAMES.HOSTEDDESKTOP]: {
    name: PRODUCT_NAMES.HOSTEDDESKTOP,
    icon: products.desktop.icon[24],
    description:
      "A windows or linux server hosted on the cloud. Access your data any where any time with just an internet connection.",
    description_short: '',
    label: '',
    url: '/desktop',
  },
  [PRODUCT_SHORTNAMES.UNICOM]: {
    name: PRODUCT_NAMES.UNICOM,
    icon: products.communications.icon[24],
    description: 'Combining business communications such as telephony, instant messaging, and video conferencing on one streamlined platform',
    description_short: '',
    label: '',
    url: '/soon',
  },
  [PRODUCT_SHORTNAMES.OFFICE365]: {
    name: PRODUCT_NAMES.OFFICE365,
    icon: products.office365.icon[24],
    description: 'Boost productivity with Microsoft Word, Excel, PowerPoint, Microsoft Teams, and more — all in one place',
    description_short: '',
    label: '',
    url: '/soon',
  },
  [PRODUCT_SHORTNAMES.FUNCTIONS]: {
    name: PRODUCT_NAMES.FUNCTIONS,
    icon: products.functions.icon[24],
    description: 'Write custom code without deploying or scaling servers.',
    description_short: '',
    label: '',
    url: '/soon',
  },
  // [PRODUCT_SHORTNAMES.REALTIME]: {
  //   name: PRODUCT_NAMES.REALTIME,
  //   icon: products.realtime.icon[24],
  //   description:
  //     'Create multiplayer experiences by sharing, broadcasting, and listening to changes from other clients or the Database.',
  //   description_short: '',
  //   label: '',
  //   url: '/realtime',
  // },
  // [PRODUCT_SHORTNAMES.VECTOR]: {
  //   name: PRODUCT_NAMES.VECTOR,
  //   icon: products.vector.icon[24],
  //   description: 'Integrate your favorite ML-models to store, index and search vector embeddings.',
  //   description_short: '',
  //   label: '',
  //   url: '/vector',
  // },
}

export default solutions
