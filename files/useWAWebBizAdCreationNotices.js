__d(
  "useWAWebBizAdCreationNotices",
  ["WAWebBizAdCreationValidateSpecContext", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useContext;
    function u(e) {
      var t = o("react-compiler-runtime").c(4),
        n = s(r("WAWebBizAdCreationValidateSpecContext"));
      if (n == null) {
        var a;
        return (
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = []), (t[0] = a))
            : (a = t[0]),
          a
        );
      }
      var i;
      if (t[1] !== n.notices || t[2] !== e) {
        var l;
        ((i = (l = n.notices[e]) != null ? l : []),
          (t[1] = n.notices),
          (t[2] = e),
          (t[3] = i));
      } else i = t[3];
      return i;
    }
    l.default = u;
  },
  98,
);
