__d(
  "WAWebVoipMicStreamBackstop",
  ["WALogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = new Set(),
      m = 2e3,
      p = null;
    function _(e) {
      d.add(e);
    }
    function f(e) {
      d.delete(e);
    }
    function g() {
      p != null && (window.clearTimeout(p), (p = null));
      var t = Array.from(d);
      t.length !== 0 &&
        (p = window.setTimeout(function () {
          p = null;
          var n = 0,
            r = 0,
            a = 0;
          for (var i of t) {
            var l = h(i);
            ((n += l.recoveredTrackCount),
              (r += l.failedTrackCount),
              (a += l.recoveredStreamCount));
          }
          (n > 0 &&
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:micReconciliation] callEndBackstop: stopped ",
                    " leaked mic track(s) in ",
                    " stream(s)",
                  ])),
                n,
                a,
              )
              .sendLogs("voip-mic-callend-backstop"),
            r > 0 &&
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:micReconciliation] callEndBackstop: ",
                      " track(s) still live after stop",
                    ])),
                  r,
                )
                .sendLogs("voip-mic-callend-backstop-stuck"));
        }, m));
    }
    function h(e) {
      var t = 0,
        n = 0,
        a = 0;
      try {
        var i = e.getTracks().filter(function (e) {
          return e.readyState === "live";
        });
        for (var l of i) {
          try {
            l.stop();
          } catch (e) {
            o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:micReconciliation] track.stop failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-mic-callend-backstop-error");
          }
          l.readyState !== "live" ? t++ : n++;
        }
        a = t > 0 ? 1 : 0;
      } catch (e) {
        o("WALogger")
          .WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:micReconciliation] failed to read tracked microphone stream",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("voip-mic-callend-backstop-error");
      } finally {
        d.delete(e);
      }
      return {
        recoveredTrackCount: t,
        failedTrackCount: n,
        recoveredStreamCount: a,
      };
    }
    ((l.trackMicStream = _),
      (l.untrackMicStream = f),
      (l.scheduleCallEndMicRelease = g));
  },
  98,
);
