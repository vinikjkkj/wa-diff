__d(
  "WAFlowsRootCSSClassNamesUtils",
  [],
  function (t, n, r, o, a, i) {
    var e = function (t, n) {
      var e = t.theme,
        r = n.baseClass,
        o = n.baseClassShopping,
        a = n.darkClass,
        i = n.darkClassShopping,
        l = n.lightClass,
        s = n.lightClassShopping,
        u = n.newDarkColorsClass,
        c = n.newDarkIconsClass,
        d = n.newLightColorsClass,
        m = n.newLightIconsClass,
        p = n.responseFlowClass;
      return [r, o].concat(e === "dark" ? [a, i, u, c] : [l, s, d, m], [p]);
    };
    i.getPlatformClasses = e;
  },
  66,
);
