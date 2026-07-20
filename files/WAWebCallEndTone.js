__d(
  "WAWebCallEndTone",
  ["WALogger", "WAWebMuteCollection", "bx", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 0.5,
      u = new window.Audio(r("bx").getURL(r("bx")("13603")));
    u.volume = s;
    function c() {
      var t;
      o("WAWebMuteCollection").MuteCollection.getGlobalSounds() &&
        ((u.currentTime = 0),
        (t = u.play()) == null ||
          t.catch(function (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: end-call tone play failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("call-end-tone-play-failed");
          }));
    }
    l.playCallEndTone = c;
  },
  98,
);
