__d(
  "useBaseIsDecorative",
  ["BaseIsDecorativeContext", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useContext;
    function u(e) {
      var t = s(r("BaseIsDecorativeContext")),
        n = e.alt,
        o = e.isDecorative,
        a = e.label;
      return n || a ? !1 : o === !0 || t === !0;
    }
    l.default = u;
  },
  98,
);
