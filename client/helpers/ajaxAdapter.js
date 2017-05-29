import fetchJsonp              from 'fetch-jsonp';

export const ajaxAdapter = {

//relied on https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch documentation and https://www.npmjs.com/package/fetch-jsonp

  getArticles: ()=>{
    // const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "text/javascript");

    // const myInit = {
    //   headers: myHeaders,
    //   mode: 'no-cors'
    // };

    // return fetchJsonp('http://np-ec2-nytimes-com.s3.amazonaws.com/dev/test/nyregion.js', myInit)
    //   .then( (r)=>{ return r.json() } )
    //   .then((json)=>{
    //     console.log('parsed json', json)
    //   }).catch((err)=>{
    //     console.log('parsing failed', err)
    //   })

    window["NYTD"]={
      render_section_front: (data)=>console.log(data)
    }

    const script = document.createElement('script');
    script.src = 'http://np-ec2-nytimes-com.s3.amazonaws.com/dev/test/nyregion.js?callback=foo'

    document.getElementsByTagName('head')[0].appendChild(script);
  }

}
