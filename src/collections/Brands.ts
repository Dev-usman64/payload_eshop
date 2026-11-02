 import type { CollectionConfig } from 'payload'

export const Brands: CollectionConfig = {
  slug: 'brands',
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
      label: 'Brand Name',
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
      relationTo: 'brands',
      label: 'Parent Brand (For Sub-Brands)',
      admin: {
        description: 'Agar yeh aik sub-brand hai, toh iska parent brand select karein ( warna khali chhor dein ).',
      },
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Brand Logo',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Brand Description',
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