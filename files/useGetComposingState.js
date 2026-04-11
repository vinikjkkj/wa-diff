__d(
  "useGetComposingState",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useRef;
    function m() {
      var e = o("react-compiler-runtime").c(5),
        t = d(!1),
        n;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = function (n) {
            t.current = !0;
          }),
          (e[0] = n))
        : (n = e[0]);
      var r = n,
        a;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = function (n) {
            t.current = !1;
          }),
          (e[1] = a))
        : (a = e[1]);
      var i = a,
        l,
        s;
      (e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = function () {
            return (
              window.addEventListener("compositionstart", r),
              window.addEventListener("compositionend", i),
              function () {
                (window.removeEventListener("compositionstart", r),
                  window.removeEventListener("compositionend", i));
              }
            );
          }),
          (s = [i, r]),
          (e[2] = l),
          (e[3] = s))
        : ((l = e[2]), (s = e[3])),
        c(l, s));
      var u;
      return (
        e[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = function (n) {
              return n.isComposing || t.current;
            }),
            (e[4] = u))
          : (u = e[4]),
        u
      );
    }
    l.default = m;
  },
  98,
);
