import type { CollectionConfig } from 'payload'

export const Comments: CollectionConfig = {
  slug: 'comments',
  //   admin: {
  //     useAsTitle: 'author',
  //     group: 'E-Commerce', // Yeh E-Commerce dropdown mein hi show hoga
  //   },
  access: {
    read: () => true,
    create: () => true, // Frontend se customers comment/review submit kar sakein
  },
  fields: [
    {
      name: 'author',
      type: 'text',
      required: true,
      label: 'Author Name',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Author Email',
    },
    {
      name: 'comment',
      type: 'textarea',
      required: true,
      label: 'Comment / Review',
    },
    {
      name: 'rating',
      type: 'number',
      min: 1,
      max: 5,
      defaultValue: 5,
      label: 'Rating (1 to 5 Stars)',
    },
    {
      name: 'product',
      type: 'relationship',
      relationTo: 'products',
      required: true,
      label: 'Related Product',
    },
    {
      name: 'isApproved',
      type: 'checkbox',
      defaultValue: false,
      label: 'Approved (Show on Frontend)',
      admin: {
        description: 'Check this box to allow this comment to appear on the site.',
      },
    },
  ],
}
