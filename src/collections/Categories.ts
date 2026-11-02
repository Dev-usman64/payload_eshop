import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'title',
    group: 'E-Commerce',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Category Name',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL Slug',
    },
    {
      name: 'parent',
      type: 'relationship',
      relationTo: 'categories',
      label: 'Parent Category (For Sub-Categories)',
      admin: {
        description:
          'Agar yeh aik sub-category hai, toh iska parent select karein ( warna khali chhor dein ).',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Category Description',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Category Thumbnail / Banner',
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
  ],
}
