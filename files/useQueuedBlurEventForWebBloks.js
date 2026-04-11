__d(
  "useQueuedBlurEventForWebBloks",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d(e, t) {
      var n = o("react-compiler-runtime").c(5),
        r = c(!1),
        a,
        i;
      (n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = function () {
            var e = function () {
                r.current = !0;
              },
              t = function () {
                r.current = !1;
              };
            return (
              window.addEventListener("mousedown", e),
              window.addEventListener("mouseup", t),
              function () {
                (window.removeEventListener("mousedown", e),
                  window.removeEventListener("mouseup", t));
              }
            );
          }),
          (i = []),
          (n[0] = a),
          (n[1] = i))
        : ((a = n[0]), (i = n[1])),
        u(a, i));
      var l;
      n[2] !== t || n[3] !== e
        ? ((l = function () {
            if (r.current === !1) t();
            else {
              var n = function () {
                window.setTimeout(function () {
                  (e.current !== document.activeElement && t(),
                    window.removeEventListener("mouseup", n));
                }, 0);
              };
              window.addEventListener("mouseup", n);
            }
          }),
          (n[2] = t),
          (n[3] = e),
          (n[4] = l))
        : (l = n[4]);
      var s = l;
      return s;
    }
    l.default = d;
  },
  98,
);
