const copyTitleToClipboard = () => {

  var r = document.createRange();
  r.selectNode(document.getElementById('copiedTitle'));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  
    const successTitle = () => {
    const copySuccess = document.getElementById("copyTitle-success");
    copySuccess.classList.add("copyTitle-success--show");

    const removeClass = () => {
    const copySuccess = document.getElementById("copyTitle-success");
    copySuccess.classList.remove("copyTitle-success--show");
  }
  setTimeout(removeClass,1500);
}
  
  successTitle();
  }



  export default copyTitleToClipboard;