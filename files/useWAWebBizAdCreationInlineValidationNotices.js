__d(
  "useWAWebBizAdCreationInlineValidationNotices",
  ["WAWebBizAdCreationValidateSpecContext", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useContext,
      c = s.useMemo;
    function d(e) {
      var t = o("react-compiler-runtime").c(4),
        n = u(r("WAWebBizAdCreationValidateSpecContext")),
        a;
      e: {
        if (n == null) {
          var i;
          (t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = []), (t[0] = i))
            : (i = t[0]),
            (a = i));
          break e;
        }
        var l;
        if (t[1] !== e || t[2] !== n.inlineNotices) {
          var s;
          ((l = (s = n.inlineNotices[e]) != null ? s : []),
            (t[1] = e),
            (t[2] = n.inlineNotices),
            (t[3] = l));
        } else l = t[3];
        a = l;
      }
      var c = a;
      return c;
    }
    l.default = d;
  },
  98,
);
