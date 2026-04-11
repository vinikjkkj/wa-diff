__d(
  "useWAWebVisibilityAwarePolling",
  ["WAWebABProps", "react", "react-compiler-runtime", "useWAWebStableCallback"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.callback,
        a = e.enabled,
        i = e.interval,
        l = c(null),
        s = c(null),
        d = c(null),
        m = r("useWAWebStableCallback")(n),
        p,
        _;
      (t[0] !== a || t[1] !== i || t[2] !== m
        ? ((p = function () {
            if (a) {
              var e = document.visibilityState === "visible",
                t = function () {
                  var n = l.current == null && s.current == null,
                    r = e ? l.current != null : s.current != null;
                  (n || r) &&
                    (e
                      ? (l.current = window.requestAnimationFrame(function () {
                          window.setTimeout(function () {
                            var e = m();
                            e && t();
                          }, i);
                        }))
                      : (s.current = window.setTimeout(function () {
                          var e = m();
                          e && t();
                        }, i)));
                };
              return (
                (d.current = function () {
                  (l.current &&
                    (window.cancelAnimationFrame(l.current),
                    (l.current = null)),
                    s.current &&
                      (window.clearTimeout(s.current), (s.current = null)),
                    (e = document.visibilityState === "visible"),
                    o("WAWebABProps").getABPropConfigValue(
                      "enable_web_voip_anr_optimizations",
                    )
                      ? window.setTimeout(t, 0)
                      : t());
                }),
                document.addEventListener("visibilitychange", d.current),
                t(),
                function () {
                  (l.current != null &&
                    (window.cancelAnimationFrame(l.current),
                    (l.current = null)),
                    s.current != null &&
                      (window.clearTimeout(s.current), (s.current = null)),
                    d.current &&
                      (document.removeEventListener(
                        "visibilitychange",
                        d.current,
                      ),
                      (d.current = null)));
                }
              );
            }
          }),
          (_ = [i, a, m]),
          (t[0] = a),
          (t[1] = i),
          (t[2] = m),
          (t[3] = p),
          (t[4] = _))
        : ((p = t[3]), (_ = t[4])),
        u(p, _));
    }
    l.default = d;
  },
  98,
);
