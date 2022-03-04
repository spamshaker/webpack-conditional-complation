if (process.env.USE_AXIOS) {
  import(/* webpackChunkName: "axois" */ 'axios').then(({default: axios}) => {
    if ('get' in axios) {
      console.log('axios in use');
    }
  });
}
