__d(
  "WAWebBizGenericErrorCard.react",
  ["fbt", "WAWebNoop", "WDSBanner.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.boundaryName,
        n = t === void 0 ? "" : t,
        o = e.error,
        a = o === void 0 ? null : o,
        i = e.handleClick,
        l = i === void 0 ? r("WAWebNoop") : i;
      return u.jsx(r("WDSBanner.react"), {
        title: s._(/*BTDS*/ "Something went wrong"),
        body: s._(/*BTDS*/ "Try reloading the page."),
        type: "warning",
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
