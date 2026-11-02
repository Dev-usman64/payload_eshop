import type { CollectionConfig } from 'payload'

export const Orders: CollectionConfig = {
  slug: 'orders',
  admin: {
    useAsTitle: 'customerName',
    group: 'E-Commerce',
  },
  access: {
    read: ({ req: { user } }) => {
      if (user?.role === 'admin' || user?.role === 'order-manager') return true
      return {
        customer: {
          equals: user?.id,
        },
      }
    },
    create: () => true, // Customer website se order place kar sakega
    update: ({ req: { user } }) => user?.role === 'admin' || user?.role === 'order-manager',
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'customerName',
      type: 'text',
      required: true,
      label: 'Customer Name',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email Address',
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      label: 'Phone Number',
    },
    {
      name: 'address',
      type: 'textarea',
      required: true,
      label: 'Shipping Address',
    },
    {
      name: 'product',
      type: 'relationship',
      relationTo: 'products',
      required: true,
      label: 'Ordered Product',
    },
    {
      name: 'quantity',
      type: 'number',
      defaultValue: 1,
      required: true,
      label: 'Quantity',
    },
    {
      name: 'totalPrice',
      type: 'text',
      required: true,
      label: 'Total Price',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'pending',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Processing', value: 'processing' },
        { label: 'Completed', value: 'completed' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
      label: 'Order Status',
    },
  ],
}
