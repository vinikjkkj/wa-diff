__d(
  "WAWebVoipFullscreenJourney",
  [
    "WAWebCallCollection",
    "WAWebCallUserJourneyInCallAction",
    "WAWebCallUserJourneyLogger",
    "WAWebNoop",
    "WAWebVoipCallWindowMode",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useEffect,
      u = "(display-mode: fullscreen)";
    function c(e, t) {
      var n = e.matchMedia == null ? void 0 : e.matchMedia(u);
      if (typeof (n == null ? void 0 : n.addEventListener) != "function")
        return r("WAWebNoop");
      var a = n.matches,
        i = !1,
        l = function (n) {
          var e = a;
          ((a = n.matches),
            !(
              a === e ||
              r("WAWebCallCollection").activeCall == null ||
              o("WAWebVoipCallWindowMode").getCallWindowMode() !== t
            ) &&
              (a
                ? (o("WAWebCallUserJourneyInCallAction").logInCallAction(
                    o("WAWebCallUserJourneyLogger").M2_CALL_ACTION_TYPE
                      .MAXIMIZE_CALL,
                  ),
                  (i = !0))
                : i &&
                  (o("WAWebCallUserJourneyInCallAction").logInCallAction(
                    o("WAWebCallUserJourneyLogger").M2_CALL_ACTION_TYPE
                      .MINIMIZE_CALL,
                  ),
                  (i = !1))));
        };
      return (
        n.addEventListener("change", l),
        function () {
          return n.removeEventListener("change", l);
        }
      );
    }
    function d(e, t) {
      var n = o("react-compiler-runtime").c(4),
        r,
        a;
      (n[0] !== e || n[1] !== t
        ? ((r = function () {
            if (e != null) return c(e, t);
          }),
          (a = [e, t]),
          (n[0] = e),
          (n[1] = t),
          (n[2] = r),
          (n[3] = a))
        : ((r = n[2]), (a = n[3])),
        s(r, a));
    }
    ((l.watchCallWindowFullscreen = c), (l.useWAWebVoipFullscreenJourney = d));
  },
  98,
);
