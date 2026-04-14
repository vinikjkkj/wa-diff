__d(
  "WAWebGroupInfoSeparator.react",
  ["WAWebDrawerSectionAnimation.stylex", "WAWebUISpacing", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = { separator: { background: "xsm26vf", $$css: !0 } };
    function d(t) {
      var n = t.animation,
        a = n === void 0 ? !0 : n,
        i = t.padding,
        l = i === void 0 ? !0 : i;
      return u.jsx(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props([
            a && o("WAWebDrawerSectionAnimation.stylex").animateStyle.animate,
            c.separator,
            l && o("WAWebUISpacing").uiPadding.horiz20,
            o("WAWebUISpacing").uiPadding.vert10,
          ]),
          { children: u.jsx("div", { className: "xh8yej3 xjm9jq1 x2ed6v8" }) },
        ),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
