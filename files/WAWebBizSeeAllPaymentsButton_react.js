__d(
  "WAWebBizSeeAllPaymentsButton.react",
  ["fbt", "WDSButton.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.onPress;
      return u.jsx(r("WDSButton.react"), {
        variant: "tonal",
        size: "small",
        type: "default",
        label: s._(/*BTDS*/ "See all"),
        onPress: t,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
