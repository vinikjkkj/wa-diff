__d(
  "useWAWebIsRootMessage",
  ["react", "react-compiler-runtime", "useWAWebListener"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useState;
    function u(e, t) {
      var n = o("react-compiler-runtime").c(7),
        r;
      n[0] !== e || n[1] !== t
        ? ((r = function () {
            var n;
            return (n = t == null ? void 0 : t.hasThreadForMsgKey(e.id)) != null
              ? n
              : null;
          }),
          (n[0] = e),
          (n[1] = t),
          (n[2] = r))
        : (r = n[2]);
      var a = s(r),
        i = a[0],
        l = a[1],
        u;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = ["add", "reset"]), (n[3] = u))
        : (u = n[3]);
      var c;
      return (
        n[4] !== e || n[5] !== t
          ? ((c = function () {
              var n;
              l(
                (n = t == null ? void 0 : t.hasThreadForMsgKey(e.id)) != null
                  ? n
                  : null,
              );
            }),
            (n[4] = e),
            (n[5] = t),
            (n[6] = c))
          : (c = n[6]),
        o("useWAWebListener").useListener(t, u, c),
        i
      );
    }
    l.default = u;
  },
  98,
);
