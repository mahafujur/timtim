export default function() {
  this.namespace = '/api';

  this.get('/galaxy', function() {
    return {
      data: [{
        type: 'galaxy',
      id: 'milkyway-galaxy',
      attributes:{
      title: 'Milkyway',
      owner: 'Mr x',
      city: 'Mazina cloud',
      category: 'b-type',
      stars: '15b',
      image: 'https://en.wikipedia.org/wiki/Galaxy#/media/File:NGC_4414_(NASA-med).jpg',
      description: 'The Milky Way is the galaxy that contains our Solar System.'
    }}, {
      type: 'galaxy',
      id: 'andromeda-galaxy',
      attributes:{
      title: 'Andromeda Galaxy',
      owner: 'Mr y',
      city: 'Andormeds',
      category: 'galxy',
      stars: '11b',
      image: 'https://en.wikipedia.org/wiki/Andromeda_Galaxy#/media/File:Andromeda_Galaxy_(with_h-alpha).jpg',
      description: 'The Andromeda Galaxy (/ænˈdrɒmɪdə/), also known as Messier 31.'
    }}, {
      type: 'galaxy',
      id: 'spiral-galaxy',
      attributes:{
      title: 'Spiral Galaxy',
      owner: 'Mr z',
      city: 'Mazina',
      category: 'xloud',
      stars: '31b',
      image: 'https://en.wikipedia.org/wiki/Galaxy#/media/File:Probing_the_distant_past_SDSS_J1152%2B3313.tif',
      description: 'This is a beautiful galaxy in the mazina space.' }
      }]
    };
  });
}

// These comments are here to help you get started. Feel free to delete them.

  /*
-    Config (with defaults).
-
-    Note: these only affect routes defined *after* them!
-  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
 // this.timing = 400;      // delay for each request, automatically set to 0 during testing

 /*
-    Shorthand cheatsheet:
-
-    this.get('/posts');
-    this.post('/posts');
-    this.get('/posts/:id');
-    this.put('/posts/:id'); // or this.patch
-    this.del('/posts/:id');
-
-    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
-  */
