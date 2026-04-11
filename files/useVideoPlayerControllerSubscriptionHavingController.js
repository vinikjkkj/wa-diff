__d(
  "useVideoPlayerControllerSubscriptionHavingController",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef,
      d = s.useState;
    function m(e, t) {
      var n = o("react-compiler-runtime").c(9),
        r;
      n[0] !== e || n[1] !== t
        ? ((r = function () {
            return t(e, null);
          }),
          (n[0] = e),
          (n[1] = t),
          (n[2] = r))
        : (r = n[2]);
      var a = d(r),
        i = a[0],
        l = a[1],
        s = c(t),
        m,
        p;
      (n[3] !== t
        ? ((m = function () {
            s.current = t;
          }),
          (p = [t]),
          (n[3] = t),
          (n[4] = m),
          (n[5] = p))
        : ((m = n[4]), (p = n[5])),
        u(m, p));
      var _, f;
      return (
        n[6] !== e
          ? ((_ = function () {
              l(function (t) {
                return s.current(e, t);
              });
              var t = e.subscribe(function () {
                l(function (t) {
                  return s.current(e, t);
                });
              });
              return function () {
                t.remove();
              };
            }),
            (f = [e]),
            (n[6] = e),
            (n[7] = _),
            (n[8] = f))
          : ((_ = n[7]), (f = n[8])),
        u(_, f),
        i
      );
    }
    l.default = m;
  },
  98,
);
