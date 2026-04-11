__d(
  "BaseNestedPressableHack_DO_NOT_USE.react",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useState;
    function m(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.children,
        r = d(!1),
        a = r[0],
        i = r[1],
        l,
        u;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = function () {
            return i(!0);
          }),
          (u = []),
          (t[0] = l),
          (t[1] = u))
        : ((l = t[0]), (u = t[1])),
        c(l, u));
      var m;
      t[2] !== a
        ? ((m = a ? null : { height: 0, width: 0 }), (t[2] = a), (t[3] = m))
        : (m = t[3]);
      var p = m,
        _;
      return (
        t[4] !== n || t[5] !== p
          ? ((_ = s.jsx(
              "object",
              babelHelpers.extends({}, p, {
                type: "nested/pressable",
                children: n,
              }),
            )),
            (t[4] = n),
            (t[5] = p),
            (t[6] = _))
          : (_ = t[6]),
        _
      );
    }
    l.default = m;
  },
  98,
);
