const copyTextToClipboard = () => {

  var r = document.createRange();
  r.selectNode(document.getElementById('copiedText'));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  
  }

  export default copyTextToClipboard;