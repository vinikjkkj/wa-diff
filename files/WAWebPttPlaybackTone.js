__d(
  "WAWebPttPlaybackTone",
  ["WAWebMuteCollection", "bx", "promiseDone"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = r("bx")).getURL(e("9563")),
      u = e.getURL(e("9564")),
      c = new window.Audio(u),
      d = new window.Audio(s);
    function m() {
      _(c);
    }
    function p() {
      _(d);
    }
    function _(e) {
      o("WAWebMuteCollection").MuteCollection.getGlobalSounds() &&
        r("promiseDone")(e.play());
    }
    ((l.playMidPttTone = m), (l.playEndPttTone = p));
  },
  98,
);
