export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Website',
                  name: 'subtwo-sanity',
                  apiId: '',
                },
              ],
            },
          },
        ],
        data: [
          {
            title: 'Gatsby Website',
            value: 'https://www.under2.agency',
            category: 'apps',
          },
          // {
          //   title: 'Gatsby GitHub Repo',
          //   value: 'https://github.com/',
          //   category: 'Code',
          // },
          // {
          //   title: 'Sanity Studio GitHub Repo',
          //   value: 'https://github.com/',
          //   category: 'Code',
          // },
        ],
      },
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: {
        title: 'Pages',
        order: '_createdAt desc',
        types: ['pagework'],
      },
      layout: { width: 'medium' },
    },
  ],
};
