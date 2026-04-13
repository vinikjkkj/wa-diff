__d(
  "useWAWebVoipWakeLock",
  [
    "WAWebABProps",
    "WAWebCallCollection",
    "WAWebVoipEventConstants",
    "WAWebVoipUiPopoutWindowContext",
    "WAWebVoipWaCallEnums",
    "react",
    "react-compiler-runtime",
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
        n = o("react-compiler-runtime").c(9),
        a = u(r("WAWebVoipUiPopoutWindowContext")),
        i = (e = a.windowEl) != null ? e : window,
        l = (t = a.documentEl) != null ? t : document,
        s;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.STATE,
          )),
          (n[0] = s))
        : (s = n[0]);
      var m = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          s,
          g,
        ),
        h = d(null),
        y = d(!1),
        C;
      n[1] !== m || n[2] !== l || n[3] !== i.navigator
        ? ((C = function () {
            if ("wakeLock" in i.navigator) {
              var e = function () {
                  var e = l.visibilityState === "visible",
                    t =
                      y.current === !0 ||
                      (h.current != null && h.current.released !== !0);
                  return (
                    (m === o("WAWebVoipWaCallEnums").CallState.CallActive ||
                      m ===
                        o("WAWebVoipWaCallEnums").CallState.ConnectedLonely) &&
                    e &&
                    !t
                  );
                },
                t = function () {
                  e() &&
                    ((y.current = !0),
                    i.navigator.wakeLock
                      .request("screen")
                      .then(function (e) {
                        ((h.current = e),
                          h.current.addEventListener("release", f));
                      })
                      .catch(_)
                      .finally(function () {
                        y.current = !1;
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
                l.addEventListener("visibilitychange", n),
                function () {
                  (l.removeEventListener("visibilitychange", n),
                    h.current != null &&
                      h.current.released !== !0 &&
                      (h.current.release().catch(p), (h.current = null)));
                }
              );
            }
          }),
          (n[1] = m),
          (n[2] = l),
          (n[3] = i.navigator),
          (n[4] = C))
        : (C = n[4]);
      var b;
      (n[5] !== m || n[6] !== l || n[7] !== i
        ? ((b = [m, i, l]), (n[5] = m), (n[6] = l), (n[7] = i), (n[8] = b))
        : (b = n[8]),
        c(C, b));
    }
    function p() {}
    function _() {}
    function f() {}
    function g() {
      var e;
      return (e = r("WAWebCallCollection").activeCall) == null
        ? void 0
        : e.getState();
    }
    l.default = m;
  },
  98,
);
