__d(
  "getReactElementDisplayName",
  ["getReactComponentDisplayName", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      if (e == null) return "#empty";
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
        return "#text";
      var t = e.type;
      return t == null
        ? "ReactComponent"
        : typeof t == "string"
          ? t
          : r("getReactComponentDisplayName")(t);
    }
    l.default = u;
  },
  98,
);
