export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '60d02d198fd0a70a92ae3cee',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-f4mcbgtk',
                  apiId: '13822071-bae9-4de5-a15c-0ccad477ca8c'
                },
                {
                  buildHookId: '60d02d198fd0a70e66ae3d51',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ag2kbfiq',
                  apiId: '5c84d867-1df7-447a-836d-d2aa7f4a1d9f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aviabstraction/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ag2kbfiq.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
