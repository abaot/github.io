const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
    name: '一生所爱',
        artist: '至尊宝',
        url: '/images/yssa.mp3',
        cover: '/images/avatar.gif',
      }
    ]
});