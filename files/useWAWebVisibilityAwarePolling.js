__d(
  "useWAWebVisibilityAwarePolling",
  ["WAWebABProps", "react", "useWAWebStableCallback"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d(e) {
      var t = e.callback,
        n = e.enabled,
        a = e.interval,
        i = c(null),
        l = c(null),
        s = c(null),
        d = r("useWAWebStableCallback")(t);
      u(
        function () {
          if (n) {
            var e = document.visibilityState === "visible",
              t = function () {
                var n = i.current == null && l.current == null,
                  r = e ? i.current != null : l.current != null;
                (n || r) &&
                  (e
                    ? (i.current = window.requestAnimationFrame(function () {
                        window.setTimeout(function () {
                          var e = d();
                          e && t();
                        }, a);
                      }))
                    : (l.current = window.setTimeout(function () {
                        var e = d();
                        e && t();
                      }, a)));
              };
            return (
              (s.current = function () {
                (i.current &&
                  (window.cancelAnimationFrame(i.current), (i.current = null)),
                  l.current &&
                    (window.clearTimeout(l.current), (l.current = null)),
                  (e = document.visibilityState === "visible"),
                  o("WAWebABProps").getABPropConfigValue(
                    "enable_web_voip_anr_optimizations",
                  )
                    ? window.setTimeout(t, 0)
                    : t());
              }),
              document.addEventListener("visibilitychange", s.current),
              t(),
              function () {
                (i.current != null &&
                  (window.cancelAnimationFrame(i.current), (i.current = null)),
                  l.current != null &&
                    (window.clearTimeout(l.current), (l.current = null)),
                  s.current &&
                    (document.removeEventListener(
                      "visibilitychange",
                      s.current,
                    ),
                    (s.current = null)));
              }
            );
          }
        },
        [a, n, d],
      );
    }
    l.default = d;
  },
  98,
);
