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
                  buildHookId: '603c95d08ed4f61da5cfdf46',
                  title: 'Sanity Studio',
                  name: 'sporttv-studio',
                  apiId: '06ae0807-37df-4604-b0a5-f678e24edcf0'
                },
                {
                  buildHookId: '603c95d0bf1ef76d50ca8903',
                  title: 'Blog Website',
                  name: 'sporttv-web',
                  apiId: '6b248377-a12d-4acc-93ce-0ce3f46f13f9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wwwshayronen/sportTV',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sporttv-web.netlify.app', category: 'apps' }
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
