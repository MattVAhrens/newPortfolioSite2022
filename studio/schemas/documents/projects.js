export default {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
      // ... other fields ...
      {
        name: 'basicInfo',
        title: 'Basic Info',
        type: 'object',
        fields: [
          {name: 'name', type: 'string', title: 'Name'},
          {name: 'date', type: 'string', title: 'Date'},
          {name: 'company', type: 'string', title: 'Company'},
          {name: 'medium', type: 'string', title: 'Medium'},
          {name: 'briefDescription', type: 'string', title: 'Brief Description'},
          {name: 'heroImage', type: 'image', title: 'Hero Image'}
        ]
      },
      {
        name: 'projectInfo',
        title: 'Project Info',
        type: 'object',
        fields: [
          {name: 'problem', type: 'array', title: 'Problem', of: [{type: 'block'}]},
          {name: 'ideation', type: 'array', title: 'Ideation', of: [{type: 'block'}]},
          {name: 'solution', type: 'array', title: 'Solution', of: [{type: 'block'}]}
        ]
      },
      
      {
        name: 'team',
        title: 'Team',
        type: 'array',
        of: [{
          name: 'teamMate',
          to: [{type: 'teamMember'}],
          type: 'reference'
        }]
      },
      

      {
        name: 'gallery',
        title: 'Gallery',
        type: 'array',
        of: [{type: 'image'}]
      },

      

      {
        title: 'Slug',
        name: 'slug',
        description: 'The slug for your site. Clicking generate once a project name has been given should work.',
        type: 'slug',
        options: {
          source: 'basicInfo.name',
          maxLength: 200, // will be ignored if slugify is set
          slugify: input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
      }

    ]
  }