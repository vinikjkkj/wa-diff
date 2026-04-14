__d(
  "WAWebAttachMenuPopupItem.react",
  ["WDSMenuItem.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.Icon,
        n = e.disabled,
        o = e.iconXstyle,
        a = e.onPress,
        i = e.testid,
        l = e.text;
      return s.jsx(r("WDSMenuItem.react"), {
        Icon: t,
        disabled: n,
        iconXstyle: o,
        onPress: a,
        title: l,
        testid: void 0,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
