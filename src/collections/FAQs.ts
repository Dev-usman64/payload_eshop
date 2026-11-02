import type { CollectionConfig } from 'payload'

export const FAQs: CollectionConfig = {
  slug: 'faqs',
  admin: {
    useAsTitle: 'question',
    group: 'Site Settings',
  },
  access: {
    read: () => true, // Frontend par FAQs show karne ke liye public
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
      label: 'Question',
      admin: {
        description: 'Customer ka aam sawal (e.g. What is your return policy?)',
      },
    },
    {
      name: 'answer',
      type: 'textarea',
      required: true,
      label: 'Answer',
      admin: {
        description: 'Sawal ka mukammal jawab.',
      },
    },
    {
      name: 'category',
      type: 'select',
      defaultValue: 'general',
      options: [
        { label: 'General', value: 'general' },
        { label: 'Shipping & Delivery', value: 'shipping' },
        { label: 'Payments & Refunds', value: 'payments' },
        { label: 'Returns & Exchanges', value: 'returns' },
      ],
      label: 'FAQ Category',
    },
    {
      name: 'order',
      type: 'number',
      label: 'Display Order',
      admin: {
        description: 'Website par kis tarteeb (1, 2, 3...) mein show karna hai.',
        position: 'sidebar',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      label: 'Active',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
