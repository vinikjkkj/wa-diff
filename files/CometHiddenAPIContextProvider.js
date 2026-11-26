__d(
  "CometHiddenAPIContextProvider",
  ["CometHiddenAPIContext", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useContext;
    function c(e) {
      var t = e.children,
        n = e.hiddenAPIOverride,
        o = u(r("CometHiddenAPIContext"));
      return s.jsx(r("CometHiddenAPIContext").Provider, {
        value: n != null ? n : o,
        children: t,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
