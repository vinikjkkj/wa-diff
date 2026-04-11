__d(
  "ComponentWithDataAttributes.react",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.children,
        r = e.dataAttributes,
        a;
      t[0] !== r
        ? ((a =
            r != null
              ? Object.keys(r).reduce(function (e, t) {
                  return (e != null && t != null && (e["data-" + t] = r[t]), e);
                }, {})
              : null),
          (t[0] = r),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      return (
        t[2] !== n || t[3] !== i
          ? ((l =
              i != null
                ? s.jsx("div", babelHelpers.extends({}, i, { children: n }))
                : n),
            (t[2] = n),
            (t[3] = i),
            (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    l.default = u;
  },
  98,
);
