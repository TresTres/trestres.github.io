//Links.js


const rawLinks = {

  '0_Inbox': {
    type: 'inbox',
    url: 'mailto:ezra.ablaza.inbox@gmail.com',
    handle: 'ezra.ablaza.inbox@gmail.com'
  
  },

  'Github': {
    type: 'github',
    url: 'https://github.com/TresTres',
    handle: 'TresTres'
  },

  'Bitbucket': {
    type: 'bitbucket',
    url: 'https://bitbucket.org/ezrabl42/',
    handle: 'ezrabl42'
  },

  'LinkedIn': {
    type: 'linkedin',
    url: 'https://www.linkedin.com/in/ezra-ablaza/',
    handle: '/in/ezra-ablaza/'
  },
  
  'Facebook': {
    type: 'facebook',
    url: 'https://www.facebook.com/TresTresWall',
    handle: 'Ez Ablaza'
  },

  'Instagram': {
    type: 'instagram',
    url: 'https://www.instagram.com/les_mezrables/',
    handle: '@trestres_pics'
  },

  'ResearchGate': {
    type: 'researchgate',
    url: 'https://www.researchgate.net/profile/Ezra_Ablaza',
    handle: 'Ezra_Ablaza'
  },

  'Twitter': {
    type: 'twitter',
    url: 'https://twitter.com/trestres_tweets',
    handle: 'trestres_tweets (I don\'t tweet)'
  }
};

const links = {};
Object.keys(rawLinks).sort()
  .forEach(key => links[key] = rawLinks[key]);
  
  
export default links;
