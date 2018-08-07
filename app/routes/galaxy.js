import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      id: 'milkyway-galaxy',
      title: 'Milkyway',
      owner: 'Mr x',
      city: 'Mazina cloud',
      category: 'b-type',
      stars: '15b',
      image: 'https://en.wikipedia.org/wiki/Galaxy#/media/File:NGC_4414_(NASA-med).jpg',
      description: 'The Milky Way is the galaxy that contains our Solar System.'
    }, {
      id: 'andromeda-galaxy',
      title: 'Andromeda Galaxy',
      owner: 'Mr y',
      city: 'Andormeds',
      category: 'galxy',
      stars: '11b',
      image: 'https://en.wikipedia.org/wiki/Andromeda_Galaxy#/media/File:Andromeda_Galaxy_(with_h-alpha).jpg',
      description: 'The Andromeda Galaxy (/ænˈdrɒmɪdə/), also known as Messier 31.'
    }, {
      id: 'spiral-galaxy',
      title: 'Spiral Galaxy',
      owner: 'Mr z',
      city: 'Mazina',
      category: 'xloud',
      stars: '31b',
      image: 'https://en.wikipedia.org/wiki/Galaxy#/media/File:Probing_the_distant_past_SDSS_J1152%2B3313.tif',
      description: 'This is a beautiful galaxy in the mazina space.'
    }];
  }
});