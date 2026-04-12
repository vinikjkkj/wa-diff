__d(
  "WAWebCartDeleteIcon.react",
  ["fbt", "WAWebDeleteIcon.react", "WDSButton.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        deleteIcon: { color: "xhslqc4", ":hover_color": "x12ln5q2", $$css: !0 },
      };
    function d(e) {
      var t = e.onClick;
      return u.jsx(r("WDSButton.react"), {
        "aria-label": s._(/*BTDS*/ "Remove from cart"),
        Icon: o("WAWebDeleteIcon.react").DeleteIcon,
        onPress: t,
        variant: "borderless",
        xstyle: c.deleteIcon,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
