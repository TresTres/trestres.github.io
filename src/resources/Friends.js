//Friends.js


const rawFriends = {
  'Heman': {
    name: 'Heman Gandhi',
    img:  './Heman.jpg',
    url: 'https://hemangandhi.github.io'
  },

  'Qasim': {
    name: 'Qasim Abbas',
    img: './Qasim.jpg',
    url: 'https://github.com/QasimAbbas'
  },

  'Jamie': {
    name: 'Jamie Liao',
    img: './Jamie.jpg',
    url: 'http://jamieliao.com/'
  },

  'SaraAnn': {
    name: 'SaraAnn Stanway',
    img: './SaraAnn.jpg',
    url: 'http://www.sarastanway.com/'
  },

  'Naeem': {
    name: 'Naeem Hossain',
    img: './Naeem.jpg',
    url: 'http://naeemh.github.io/'
  },

  'Sakib': {
    name: 'Sakib Jalal',
    img: './Sakib.jpg',
    url: 'http://sakib.github.io/'
  },

  'Tanya': {
    name: 'Tanya Balaraju',
    img: './Tanya.jpg',
    url: 'http://tanya.github.io/'
  },

  'Sam': {
    name: 'Sam Azouzi',
    img: './Sam.jpg',
    url: 'http://www.sam-a.me/'
  },

  'Brandon': {
    name: 'Brandon Yu',
    img: './Brandon.jpg',
    url: 'http://brandondgr8.github.io/'
  }
  
};

const friends = {};
Object.keys(rawFriends).sort()
  .forEach(key => friends[key] = rawFriends[key]);
  
  
export default friends;
