__d(
  "useWAWebBizAdCreationInlineValidationNotices",
  ["WAWebBizAdCreationValidateSpecContext", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useContext,
      c = s.useMemo;
    function d(e) {
      var t = u(r("WAWebBizAdCreationValidateSpecContext")),
        n = c(
          function () {
            var n;
            return t == null ? [] : (n = t.inlineNotices[e]) != null ? n : [];
          },
          [t, e],
        );
      return n;
    }
    l.default = d;
  },
  98,
);
