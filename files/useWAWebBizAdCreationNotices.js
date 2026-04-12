__d(
  "useWAWebBizAdCreationNotices",
  ["WAWebBizAdCreationValidateSpecContext", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useContext;
    function u(e) {
      var t,
        n = s(r("WAWebBizAdCreationValidateSpecContext"));
      return n == null ? [] : (t = n.notices[e]) != null ? t : [];
    }
    l.default = u;
  },
  98,
);
