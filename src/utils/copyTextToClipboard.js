const copyTextToClipboard = () => {

  var r = document.createRange();
  r.selectNode(document.getElementById('copiedText'));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  
  const successMessage = () => {
    const copySuccess = document.getElementById("copy-success");
    copySuccess.classList.add("copy-success--show");

    const removeClass = () => {
    const copySuccess = document.getElementById("copy-success");
    copySuccess.classList.remove("copy-success--show");
  }
  setTimeout(removeClass,1500);
}
  
  successMessage();

  }

  export default copyTextToClipboard;