__d(
  "useWAWebVoipAudioLevel",
  [
    "WAWebCallCollection",
    "WAWebVoipEventConstants",
    "react",
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
      var n = d(0),
        a = n[0],
        i = n[1],
        l = c(null),
        s = r("useWAWebThrottledCallback")(i, 100, {
          leading: !0,
          trailing: !1,
        });
      return (
        u(
          function () {
            var n = r("WAWebCallCollection").activeCall;
            if (n != null) {
              var a = function (r) {
                  if (e === "participant") {
                    if (t == null) return;
                    var n = r == null ? void 0 : r.participantJid;
                    if (n == null || !n.equals(t)) return;
                  }
                  l.current != null && self.clearTimeout(l.current);
                  var o = 0.5 + Math.random() * 0.5;
                  (s(o),
                    (l.current = self.setTimeout(function () {
                      (i(0), (l.current = null));
                    }, 500)));
                },
                u =
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
                n.on(u, a),
                function () {
                  (n.off(u, a),
                    l.current != null &&
                      (self.clearTimeout(l.current), (l.current = null)));
                }
              );
            }
          },
          [e, t, s],
        ),
        a
      );
    }
    l.default = m;
  },
  98,
);
