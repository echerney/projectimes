export const ajaxAdapter = {

//relied on https://stackoverflow.com/questions/6132796/how-to-make-a-jsonp-request-from-javascript-without-jquery

  getArticles: ()=>{

    const script = document.createElement('script');
    script.src = 'http://np-ec2-nytimes-com.s3.amazonaws.com/dev/test/nyregion.js'

    document.getElementsByTagName('head')[0].appendChild(script);
  }

}
