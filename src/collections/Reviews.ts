import type { CollectionConfig } from 'payload'

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  admin: {
    useAsTitle: 'title',
    group: 'E-Commerce',
  },
  access: {
    read: () => true, // Frontend par reviews dikhane ke liye
  },
  fields: [
    {
      name: 'product',
      type: 'relationship',
      relationTo: 'products',
      required: true,
      label: 'Product',
      admin: {
        description: 'Yeh review kis product ke liye hai.',
      },
    },
    {
      name: 'customer',
      type: 'relationship',
      relationTo: 'customers',
      required: true,
      label: 'Customer',
      admin: {
        description: 'Kis customer ne review diya hai.',
      },
    },
    {
      name: 'rating',
      type: 'number',
      required: true,
      min: 1,
      max: 5,
      label: 'Rating (1 to 5 Stars)',
      admin: {
        description: '1 (Worst) se lekar 5 (Best) tak stars.',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Review Title (e.g. Amazing product!)',
    },
    {
      name: 'content',
      type: 'textarea',
      required: true,
      label: 'Review Details',
    },
    {
      name: 'isApproved',
      type: 'checkbox',
      defaultValue: false,
      label: 'Approved by Admin',
      admin: {
        position: 'sidebar',
        description: 'Jab tak yeh check nahi hoga, review website par show nahi hoga.',
      },
    },
  ],
}
