import type { CollectionConfig } from 'payload'

export const Coupons: CollectionConfig = {
  slug: 'coupons',
  admin: {
    useAsTitle: 'code',
    group: 'E-Commerce',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'code',
      type: 'text',
      required: true,
      unique: true,
      label: 'Coupon Code (e.g. SAVE20)',
    },
    {
      name: 'discountType',
      type: 'select',
      required: true,
      defaultValue: 'percentage',
      options: [
        { label: 'Percentage (%)', value: 'percentage' },
        { label: 'Fixed Amount ($)', value: 'fixed' },
      ],
      label: 'Discount Type',
    },
    {
      name: 'discountValue',
      type: 'number',
      required: true,
      label: 'Discount Value',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'minOrderAmount',
          type: 'number',
          label: 'Minimum Order Amount ($)',
        },
        {
          name: 'usageLimit',
          type: 'number',
          label: 'Total Usage Limit',
        },
      ],
    },
    // --- USAGE RESTRICTIONS TAB / SECTION ---
    {
      type: 'collapsible',
      label: 'Usage Restrictions',
      fields: [
        {
          name: 'allowedEmails',
          type: 'array',
          label: 'Allowed Email Addresses',
          admin: {
            description:
              'Agar yeh coupon sirf specific customers ke liye hai, toh unke emails yahan add karein (khali chhorne par sab ke liye valid hoga).',
          },
          fields: [
            {
              name: 'email',
              type: 'email',
              required: true,
            },
          ],
        },
        {
          name: 'restrictedProducts',
          type: 'relationship',
          relationTo: 'products',
          hasMany: true,
          label: 'Specific Products',
          admin: {
            description: 'Sirf inhi products par coupon apply hoga (agar select kiye jayein).',
          },
        },
        {
          name: 'restrictedCategories',
          type: 'relationship',
          relationTo: 'categories',
          hasMany: true,
          label: 'Specific Categories',
          admin: {
            description: 'Sirf inhi categories ke products par coupon apply hoga.',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'expiryDate',
          type: 'date',
          label: 'Expiry Date',
        },
        {
          name: 'isActive',
          type: 'checkbox',
          defaultValue: true,
          label: 'Active Status',
          admin: {
            position: 'sidebar',
          },
        },
      ],
    },
  ],
}
