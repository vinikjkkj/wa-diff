__d(
  "WAWebBizGenericErrorCard.react",
  ["fbt", "WAWebNoop", "WDSBanner.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(1),
        n = e.boundaryName,
        a = e.error,
        i = e.handleClick;
      i === void 0 && r("WAWebNoop");
      var l;
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = u.jsx(r("WDSBanner.react"), {
              title: s._(/*BTDS*/ "Something went wrong"),
              body: s._(/*BTDS*/ "Try reloading the page."),
              type: "warning",
            })),
            (t[0] = l))
          : (l = t[0]),
        l
      );
    }
    l.default = c;
  },
  226,
);
