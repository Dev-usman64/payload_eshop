import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    group: 'Admin & Security',
  },
  access: {
    // Sirf admin hi naye users bana ya delete sakta hai (aap apne mutabiq adjust kar sakte hain)
    read: () => true,
    create: ({ req: { user } }) => user?.role === 'admin',
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Full Name',
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'customer',
      options: [
        { label: 'Admin (Full Access)', value: 'admin' },
        { label: 'Product Manager (Manage Products & Categories)', value: 'product-manager' },
        { label: 'Order Manager (Manage Orders & Customers)', value: 'order-manager' },
        { label: 'Customer', value: 'customer' },
      ],
      admin: {
        position: 'sidebar',
        description: 'User ka role select karein taaki usko mukarrara access mil sake.',
      },
    },
  ],
}
