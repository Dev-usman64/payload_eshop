import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
    group: 'E-Commerce',
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => user?.role === 'admin' || user?.role === 'product-manager',
    update: ({req: { user }}) => user?. role === 'admin' || user?.role === 'product-manager',
    delete: ({req: {user}}) => user?. role === 'admin'
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Product Title',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL Slug',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'regularPrice',
          type: 'number',
          required: true,
          label: 'Regular Price ($)',
        },
        {
          name: 'salePrice',
          type: 'number',
          label: 'Discount / Sale Price ($)',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'stock',
          type: 'number',
          defaultValue: 0,
          label: 'Total Stock',
        },
        {
          name: 'sku',
          type: 'text',
          label: 'SKU Code',
        },
      ],
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      label: 'Short Description',
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Detailed Description',
    },
    {
      name: 'images',
      type: 'upload',
      relationTo: 'media',
      hasMany: true, // <-- Yeh multiple images (gallery) ke liye hai!
      required: true,
      label: 'Product Gallery Images',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      label: 'Category',
    },
    {
      name: 'variants',
      type: 'array',
      label: 'Product Variants (Sizes & Colors)',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'size',
              type: 'text',
              label: 'Size (e.g. S, M, L)',
            },
            {
              name: 'color',
              type: 'text',
              label: 'Color Name',
            },
            {
              name: 'additionalPrice',
              type: 'number',
              label: 'Price Adjustment (+/-)',
            },
            {
              name: 'variantStock',
              type: 'number',
              label: 'Variant Stock',
            },
          ],
        },
      ],
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      defaultValue: false,
      label: 'Feature on Homepage',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO Settings',
      admin: {
        description: 'Manage search engine visibility and social sharing for this product.',
      },
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Meta Title',
          admin: {
            description: 'Recommended: 50-60 characters. Leave blank to use product title.',
          },
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          admin: {
            description: 'Recommended: 150-160 characters for search snippet.',
          },
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Open Graph Image (Social Share)',
        },
      ],
    },
  ],
}
