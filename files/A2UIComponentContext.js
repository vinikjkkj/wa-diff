__d(
  "A2UIComponentContext",
  ["err", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useContext,
      c = s.createContext(null);
    function d() {
      var e = u(c);
      if (e == null)
        throw r("err")(
          "useA2UIComponents must be used within an A2UIComponentContext.Provider",
        );
      return e;
    }
    ((l.A2UIComponentContext = c), (l.useA2UIComponents = d));
  },
  98,
);
