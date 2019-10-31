module.exports = {
  // Project metadata
  name: `30 seconds of code`,
  description: `Short code snippets for all your development needs`,
  author: '30-seconds',
  shortName: `30s`,
  repositoryUrl: `https://github.com/30-seconds/30-seconds-of-code`,
  siteUrl: `https://30secondsofcode.org`,
  // Path information
  assetPath: `assets`,
  pagePath: `src/docs/pages`,
  contentPath: `${__dirname}/content`,
  templatesPath: `./src/templates`,
  templates: [
    {
      name: `SnippetPage`,
      path: `snippetPage/index.jsx`,
    },
    {
      name: `TagPage`,
      path: `tagPage/index.jsx`,
    },
  ],
};
