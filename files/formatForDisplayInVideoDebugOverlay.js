__d(
  "formatForDisplayInVideoDebugOverlay",
  ["fbt", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      return e === ""
        ? u.jsx("i", { children: s._(/*BTDS*/ "\u003Cempty string>") })
        : e == null
          ? u.jsx("i", { children: s._(/*BTDS*/ "N\/A") })
          : String(e);
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
