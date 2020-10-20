const copyTitleToClipboard = () => {

  var r = document.createRange();
  r.selectNode(document.getElementById('copiedTitle'));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  
  }



  export default copyTitleToClipboard;