__d(
  "WAWebAttachMenuPopupItemDrawing.react",
  [
    "WAWebAttachMenuPopupItem.react",
    "WAWebAttachMenuStrings",
    "WDSIconIcDraw.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { icon: { color: "xcf4l3d", $$css: !0 } };
    function c(e) {
      var t = e.onDrawingClick,
        n = function () {
          t();
        },
        a = function () {
          return (n(), !0);
        };
      return s.jsx(r("WAWebAttachMenuPopupItem.react"), {
        testid: void 0,
        action: a,
        onPress: n,
        Icon: r("WDSIconIcDraw.react"),
        iconXstyle: u.icon,
        text: o("WAWebAttachMenuStrings").DrawingText(),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
