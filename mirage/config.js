export default function () {

  this.namespace = '/api';

  this.get('/distortions', function () {
    return {
      data: [{
        id: 1,
        type: 'distortion',
        attributes: {
          title: 'All-or-Nothing Thinking',
          description: 'This refers to your tendency to evaluate your personal qualities in extreme, black-or-white categories'
        }
      },
      {
        id: 2,
        type: 'distortion',
        attributes: {
          title: 'Overgeneralization',
          description: 'When one bad thing happens you think that it will always happen'
        }
      },
      {
        id: 3,
        type: 'distortion',
        attributes: {
          title: 'Mental Filter',
          description: 'You pick out a negative detail in any situation and dwell on it exclusively, thus perceiving the whole situation as negative'
        }
      },
      {
        id: 4,
        type: 'distortion',
        attributes: {
          title: 'Disqualifying the Positive',
          description: 'Transforming neutral or positive experiences into negative ones'
        }
      },
      {
        id: 5,
        type: 'distortion',
        attributes: {
          title: 'Mind Reading',
          description: 'You make the assumption that other people are looking down on you'
        }
      },
      {
        id: 6,
        type: 'distortion',
        attributes: {
          title: 'The Fortune Teller',
          description: 'When you image that something bad is about to happen, and you take this prediction as a fact even though it is unrealistic'
        }
      },
      {
        id: 7,
        type: 'distortion',
        attributes: {
          title: 'Magnification and Minimization',
          description: 'Magnification commonly occurs when you look at your own errors, fears, or imperfections and exaggerate their importance. Also known as Catastrophizing. Minimizing is when you minimize your good points, guaranteeing yourself to feel inferior.'
        }
      },
      {
        id: 8,
        type: 'distortion',
        attributes: {
          title: 'Emotional Reasoning',
          description: 'You take your emotions as evidence for the truth.'
        }
      },
      {
        id: 9,
        type: 'distortion',
        attributes: {
          title: 'Should Statements',
          description: 'When one bad thing happens you think that it will always happen'
        }
      },
      {
        id: 10,
        type: 'distortion',
        attributes: {
          title: 'Overgeneralization',
          description: 'When one bad thing happens you think that it will always happen'
        }
      },
      {
        id: 11,
        type: 'distortion',
        attributes: {
          title: 'Overgeneralization',
          description: 'When one bad thing happens you think that it will always happen'
        }
      },
    ]
    }

  })
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
