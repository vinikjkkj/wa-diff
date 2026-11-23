__d(
  "StrictMode",
  ["ShowAllReactWarnings", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.children;
      return s.jsx(r("ShowAllReactWarnings"), {
        children: s.jsx(s.StrictMode, { children: t }),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
