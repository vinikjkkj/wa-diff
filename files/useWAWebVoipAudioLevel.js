__d(
  "useWAWebVoipAudioLevel",
  [
    "WAWebCallCollection",
    "WAWebVoipEventConstants",
    "react",
    "react-compiler-runtime",
    "useWAWebThrottledCallback",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef,
      d = s.useState;
    function m(e, t) {
      var n = o("react-compiler-runtime").c(6),
        a = d(0),
        i = a[0],
        l = a[1],
        s = c(null),
        m;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = { leading: !0, trailing: !1 }), (n[0] = m))
        : (m = n[0]);
      var p = r("useWAWebThrottledCallback")(l, 100, m),
        _,
        f;
      return (
        n[1] !== t || n[2] !== p || n[3] !== e
          ? ((_ = function () {
              var n = r("WAWebCallCollection").activeCall;
              if (n != null) {
                var a = function (r) {
                    if (e === "participant") {
                      if (t == null) return;
                      var n = r == null ? void 0 : r.participantJid;
                      if (n == null || !n.equals(t)) return;
                    }
                    s.current != null && self.clearTimeout(s.current);
                    var o = 0.5 + Math.random() * 0.5;
                    (p(o),
                      (s.current = self.setTimeout(function () {
                        (l(0), (s.current = null));
                      }, 500)));
                  },
                  i =
                    e === "self"
                      ? o("WAWebVoipEventConstants").getChangeEvent(
                          o("WAWebVoipEventConstants").VoipCallModelEvents
                            .SELF_AUDIO_LEVEL,
                        )
                      : e === "peer"
                        ? o("WAWebVoipEventConstants").getChangeEvent(
                            o("WAWebVoipEventConstants").VoipCallModelEvents
                              .PEER_AUDIO_LEVEL,
                          )
                        : e === "participant"
                          ? "participantAudioLevelChange"
                          : (function () {
                              throw Error(
                                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                  e,
                              );
                            })();
                return (
                  n.on(i, a),
                  function () {
                    (n.off(i, a),
                      s.current != null &&
                        (self.clearTimeout(s.current), (s.current = null)));
                  }
                );
              }
            }),
            (f = [e, t, p]),
            (n[1] = t),
            (n[2] = p),
            (n[3] = e),
            (n[4] = _),
            (n[5] = f))
          : ((_ = n[4]), (f = n[5])),
        u(_, f),
        i
      );
    }
    l.default = m;
  },
  98,
);
