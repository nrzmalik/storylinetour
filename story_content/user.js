window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  function loadScript(src, async = true, defer = true) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = async;
    script.defer = defer;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}
 
function loadStylesheet(href) {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = resolve;
    link.onerror = reject;
    document.head.appendChild(link);
  });
}
 
async function insertDependencies() {
  try {
    await loadScript('intro.js');
    await loadStylesheet('introjs.css');
    await loadScript('nrzIntro.js');
  } catch (error) {
    console.error('Failed to insert dependencies:', error);
  }
}
 
insertDependencies();
}

window.Script2 = function()
{
  startBasicTour('urdu');
}

window.Script3 = function()
{
  startBasicTour('english');
}

window.Script4 = function()
{
  startBasicTour('arabic');
}

window.Script5 = function()
{
  startBasicTour('french');
}

window.Script6 = function()
{
  startBasicTour('spanish');
}

window.Script7 = function()
{
  startCustomTour({
  language: 'spanish',
  steps: ['slide', 'menu', 'next'],
});

}

};
