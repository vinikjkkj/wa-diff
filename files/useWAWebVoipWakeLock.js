__d(
  "useWAWebVoipWakeLock",
  [
    "WAWebABProps",
    "WAWebCallCollection",
    "WAWebVoipEventConstants",
    "WAWebVoipUiPopoutWindowContext",
    "WAWebVoipWaCallEnums",
    "react",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useContext,
      c = s.useEffect,
      d = s.useRef;
    function m() {
      var e,
        t,
        n = u(r("WAWebVoipUiPopoutWindowContext")),
        a = (e = n.windowEl) != null ? e : window,
        i = (t = n.documentEl) != null ? t : document,
        l = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.STATE,
          ),
          function () {
            var e;
            return (e = r("WAWebCallCollection").activeCall) == null
              ? void 0
              : e.getState();
          },
        ),
        s = d(null),
        m = d(!1);
      c(
        function () {
          if ("wakeLock" in a.navigator) {
            var e = function () {
                var e = i.visibilityState === "visible",
                  t =
                    m.current === !0 ||
                    (s.current != null && s.current.released !== !0);
                return (
                  (l === o("WAWebVoipWaCallEnums").CallState.CallActive ||
                    l ===
                      o("WAWebVoipWaCallEnums").CallState.ConnectedLonely) &&
                  e &&
                  !t
                );
              },
              t = function () {
                e() &&
                  ((m.current = !0),
                  a.navigator.wakeLock
                    .request("screen")
                    .then(function (e) {
                      ((s.current = e),
                        s.current.addEventListener("release", function () {}));
                    })
                    .catch(function () {})
                    .finally(function () {
                      m.current = !1;
                    }));
              };
            t();
            var n = function () {
              o("WAWebABProps").getABPropConfigValue(
                "enable_web_voip_anr_optimizations",
              )
                ? window.setTimeout(t, 0)
                : t();
            };
            return (
              i.addEventListener("visibilitychange", n),
              function () {
                (i.removeEventListener("visibilitychange", n),
                  s.current != null &&
                    s.current.released !== !0 &&
                    (s.current.release().catch(function () {}),
                    (s.current = null)));
              }
            );
          }
        },
        [l, a, i],
      );
    }
    l.default = m;
  },
  98,
);
