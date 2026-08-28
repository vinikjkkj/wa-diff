__d(
  "GeoBaseInteractiveListContext",
  ["emptyFunction", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.createContext({
        registerItem: r("emptyFunction"),
        deregisterItem: r("emptyFunction"),
        FocusItem: function (t) {
          var e = t.children;
          return e;
        },
        direction: "vertical",
      });
    l.default = u;
  },
  98,
);
