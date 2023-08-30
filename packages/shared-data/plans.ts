export interface PricingInformation {
  id: string
  name: string
  nameBadge?: string
  costUnit?: string
  costUnitOrg?: string
  href: string
  priceLabel?: string
  priceMonthly: number | string
  warning?: string
  description: string
  preface: string
  features: string[]
  featuresOrg?: string[]
  footer?: string
  cta: string
}

export const plans: PricingInformation[] = [
  {
    id: 'tier_basic',
    name: 'Basic',
    nameBadge: '',
    costUnit: '/ user / month',
    costUnitOrg: '/ month',
    href: '/pricing',
    priceLabel: 'One time £150 setup fees',
    priceMonthly: 25.99,
    warning: 'Minimum of 5 users per company',
    description: 'For smaller businesses.',
    preface: 'Get started with:',
    features: [
      'Dedicated resources (CPU und RAM)',
      'Network card with 2.5Gpbs speed',
      'Up to 320GB of SSD space',
      '6 Dedicated CPU cores',
      '16GB DDR4 RAM',
      '6 Days a week support',
      // '',
      // 'Up to 500K Edge Function invocations',
      // 'Up to 200 concurrent Realtime connections',
      // 'Up to 2 million Realtime messages',
      '48 Hours resolution time',
      'Up to 72 Hours setup time',
      // 'Community support',
    ],
    footer: 'Minimum of 6 month contract.',
    cta: 'Get Started',
  },
  {
    id: 'tier_pro',
    name: 'Pro',
    nameBadge: '',
    costUnit: '/ user / month',
    costUnitOrg: '/ month',
    href: 'https://supabase.com/dashboard/new/new-project',
    priceLabel: 'One time £150 setup fees',
    warning: 'Minimum of 5 users per company',
    priceMonthly: 29.99,
    description: 'For larger enterprises and organisations.',
    featuresOrg: [
      // '$10 Compute Credits',
      // 'No project pausing',
      // 'Daily backups stored for 7 days',
      // '8GB database space included',
      // '100GB file storage included',
      // '50GB bandwidth included',
      // '5GB file uploads included',
      // '100,000 monthly active users included',
      // '2M Edge Function invocations included',
      // '500 concurrent Realtime connections included',
      // '5 million Realtime messages included',
      // '7-day log retention',
      // 'Email support',
    ],
    features: [
      // 'No project pausing',
      // 'Daily backups stored for 7 days',
      // '8GB database space included',
      // '100GB file storage included',
      // '50GB bandwidth included',
      // '5GB file uploads included',
      // '100,000 monthly active users included',
      // '2M Edge Function invocations included',
      // '500 concurrent Realtime connections included',
      // '5 million Realtime messages included',
      // '7-day log retention',
      // 'Email support',
      'Dedicated resources (CPU und RAM)',
      'Network card with 2.5Gpbs speed',
      'Up to 1000GB/1TB of SSD space',
      '10 Dedicated CPU cores',
      '32GB DDR4 RAM',
      '6 Days a week support',
      '24 Hours resolution time',
      'Up to 48 Hours setup time',
    ],
    footer: 'Minimum of 3 month or 12 month contract.',
    preface: 'Better, Faster more powerful',
    cta: 'Get Started',
  },
  // {
  //   id: 'tier_enterprise',
  //   name: 'Enterprise',
  //   nameBadge: 'New',
  //   costUnit: '/ month',
  //   costUnitOrg: '/ month',
  //   href: 'https://forms.supabase.com/team',
  //   priceLabel: 'From',
  //   warning: 'Usage-based plan',
  //   priceMonthly: 599,
  //   description: 'Collaborate with different permissions and access patterns.',
  //   features: [
  //     'Additional Organization member roles',
  //     'Daily backups stored for 14 days',
  //     'Standardised Security Questionnaire',
  //     'SOC2',
  //     'HIPAA',
  //     'SSO for Supabase Dashboard',
  //     'Priority email support & SLAs',
  //     '28-day log retention',
  //   ],
  //   footer: 'Additional fees apply for usage beyond included usage.',
  //   preface: 'Everything in the Pro plan, plus:',
  //   cta: 'Contact Us',
  // },
  {
    id: 'tier_enterprise',
    name: 'Enterprise',
    href: 'https://forms.supabase.com/enterprise',
    description: 'For large-scale enterprises managing serious workloads.',
    features: [
      `Designated Support manager & SLAs`,
      `Enterprise OAuth providers`,
      `SSO/SAML`,
      `On-premise support`,
      `24×7×365 premium enterprise support`,
      `Private Slack channel`,
    ],
    priceLabel: '',
    priceMonthly: 'Contact us',
    preface: '',
    footer: '',
    cta: 'Contact Us',
  },
]
