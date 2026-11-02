import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'general-settings',
  label: 'General Settings',
  admin: {
    group: 'Site Settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'General & Branding',
          fields: [
            {
              name: 'siteName',
              type: 'text',
              required: true,
              label: 'Website Name (e.g. NexCart)',
            },
            {
              name: 'tagline',
              type: 'text',
              label: 'Site Tagline / Slogan',
            },
            {
              name: 'footerDescription',
              type: 'textarea',
              label: 'Footer Short Description',
              admin: {
                description: 'Footer mein logo ke neeche show hone wala chota intro text.',
              },
            },
            {
              name: 'copyrightText',
              type: 'text',
              defaultValue: '© 2026 NexCart. All rights reserved.',
              label: 'Copyright Text',
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'logo',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Main Site Logo',
                },
                {
                  name: 'favicon',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Favicon',
                },
              ],
            },
          ],
        },
        {
          label: 'Announcement Bar',
          fields: [
            {
              name: 'showAnnouncement',
              type: 'checkbox',
              defaultValue: true,
              label: 'Enable Announcement Bar',
            },
            {
              name: 'announcementText',
              type: 'text',
              label: 'Announcement Text',
              defaultValue: '🔥 Free Express Shipping on orders over $50! Shop Now.',
            },
            {
              name: 'announcementLink',
              type: 'text',
              label: 'Announcement Link (Optional)',
            },
          ],
        },
        {
          label: 'Contact & Info',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'supportEmail',
                  type: 'email',
                  label: 'Support Email',
                },
                {
                  name: 'phoneNumber',
                  type: 'text',
                  label: 'Phone / Helpline Number',
                },
              ],
            },
            {
              name: 'address',
              type: 'textarea',
              label: 'Physical Store / Office Address',
            },
          ],
        },
        {
          label: 'Social Links',
          fields: [
            {
              name: 'facebook',
              type: 'text',
              label: 'Facebook URL',
            },
            {
              name: 'instagram',
              type: 'text',
              label: 'Instagram URL',
            },
            {
              name: 'twitter',
              type: 'text',
              label: 'Twitter / X URL',
            },
            {
              name: 'youtube',
              type: 'text',
              label: 'YouTube Channel URL',
            },
          ],
        },
        {
          label: 'Store & Currency',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'currencySymbol',
                  type: 'text',
                  defaultValue: '$',
                  label: 'Currency Symbol (e.g. $, Rs)',
                },
                {
                  name: 'taxRate',
                  type: 'number',
                  label: 'Default Tax Rate (%)',
                },
              ],
            },
            {
              name: 'maintenanceMode',
              type: 'checkbox',
              defaultValue: false,
              label: 'Enable Maintenance Mode',
            },
          ],
        },
      ],
    },
  ],
}
