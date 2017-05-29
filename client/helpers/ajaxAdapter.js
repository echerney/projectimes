export const ajaxAdapter = {

//relied on https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch documentation

  getArticles: ()=>{
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");

    const myInit = {
      headers: myHeaders,
      mode: 'no-cors'
    };

    return fetch(`http://np-ec2-nytimes-com.s3.amazonaws.com/dev/test/nyregion.js`, myInit)
      .then(r=>r)
      .then(console.log)
  }

}
