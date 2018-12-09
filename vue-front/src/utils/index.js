const randomElement = (arr = []) => {
  return arr[Math.floor(Math.random() * arr.length)]
};

const kebab =  (str) => {
  return (str || '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
};

const toggleFullScreen = () => {
  let doc = window.document;
  let docEl = doc.documentElement;

  let requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  let cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  }
  else {
    cancelFullScreen.call(doc);
  }
};

const randomUsersPictures = (nb) => {
  var list = []
  let genderList = ['men', 'women']

  for (let i = 0; i < nb; i++) {
    let gender = genderList[Math.round(Math.random())]
    let number = Math.floor(Math.random()*70)

    list.append(`https://randomuser.me/api/portraits/${gender}/${number}.jpg`)
  }
  return list
};


const idGen = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};

export default {
  randomElement,
  toggleFullScreen,
  kebab,
  randomUsersPictures,
  idGen
};
