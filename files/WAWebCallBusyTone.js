__d(
  "WAWebCallBusyTone",
  ["WALogger", "WAWebMuteCollection", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = [480, 620],
      c = 0.5,
      d = 0.5,
      m = 4,
      p = 0.15,
      _ = null,
      f = [],
      g = null;
    function h() {
      for (var e of f)
        try {
          e.stop();
        } catch (e) {}
      ((f = []), g != null && (g.disconnect(), (g = null)));
    }
    function y() {
      if ((h(), !!o("WAWebMuteCollection").MuteCollection.getGlobalSounds())) {
        if (_ == null) {
          if (globalThis.AudioContext == null) return;
          try {
            _ = new AudioContext();
          } catch (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: busy tone AudioContext creation failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("call-busy-tone-context-failed");
            return;
          }
        }
        var t = _;
        t.resume().catch(function (e) {
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: busy tone AudioContext resume failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("call-busy-tone-resume-failed");
        });
        var n = t.createGain();
        ((n.gain.value = 0), n.connect(t.destination), (g = n));
        for (var a = t.currentTime, i = c + d, l = 0; l < m; l++) {
          var y = a + l * i;
          (n.gain.setValueAtTime(p, y), n.gain.setValueAtTime(0, y + c));
        }
        var C = a + m * i;
        f = u.map(function (e) {
          var r = t.createOscillator();
          return (
            (r.frequency.value = e),
            r.connect(n),
            r.start(a),
            r.stop(C),
            r
          );
        });
      }
    }
    ((l.stopBusyTone = h), (l.playBusyTone = y));
  },
  98,
);
