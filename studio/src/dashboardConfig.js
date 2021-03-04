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
                  buildHookId: '60405b9e8da47d5309750fa2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-lessondemo-studio',
                  apiId: '4503fdd8-0eaf-45c5-b5a7-d73d5c10214b'
                },
                {
                  buildHookId: '60405b9e3df0f95f6542dc59',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-lessondemo',
                  apiId: 'fb64205b-dce0-4652-8b61-46f17132ea8a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pkeyser10/sanity-gatsby-lessondemo',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-lessondemo.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
