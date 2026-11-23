__d(
  "WAWebRouteHeaderPlugin",
  ["WAWebRoutePluginSlot", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useState,
      m = c(null);
    function p(e) {
      var t = e.children,
        n = d(function () {
          return o("WAWebRoutePluginSlot").WAWebRoutePluginSlot();
        }),
        r = n[0];
      return s.jsx(m, { value: r, children: t });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.WAWebRouteHeaderPluginProvider = p));
  },
  98,
);
