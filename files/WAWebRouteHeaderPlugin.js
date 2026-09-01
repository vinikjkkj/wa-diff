__d(
  "WAWebRouteHeaderPlugin",
  ["WAWebRoutePluginSlot", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useState,
      m = c(null);
    function p(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        r = d(_),
        a = r[0],
        i;
      return (
        t[0] !== n || t[1] !== a
          ? ((i = s.jsx(m, { value: a, children: n })),
            (t[0] = n),
            (t[1] = a),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    function _() {
      return o("WAWebRoutePluginSlot").WAWebRoutePluginSlot();
    }
    l.WAWebRouteHeaderPluginProvider = p;
  },
  98,
);
