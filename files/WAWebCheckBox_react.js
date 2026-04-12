__d(
  "WAWebCheckBox.react",
  [
    "$InternalEnum",
    "WAWebKeyboardHotKeys.react",
    "WDSBaseCheckbox.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = n("$InternalEnum").Mirrored([
        "PARTIAL",
        "OUTLINE",
        "POLLS_RECEIVER",
        "POLLS_SENDER",
        "AUTO_LOGOUT",
        "OUTLINE_WHITE",
      ]);
    function c(e) {
      var t = e.ariaLabel,
        n = e.checked,
        a = e.disabled,
        i = a === void 0 ? !1 : a,
        l = e.id,
        c = e.onArrowKeyLeftRight,
        d = e.onChange,
        m = e.tabIndex,
        p = e.testid,
        _ = e.theme,
        f = n && _ === u.PARTIAL,
        g = function (t) {
          ((o("WAWebKeyboardHotKeys.react").SpecialKeyMap.space === t.keyCode ||
            o("WAWebKeyboardHotKeys.react").SpecialKeyMap.enter ===
              t.keyCode) &&
            (t.preventDefault(), d()),
            (o("WAWebKeyboardHotKeys.react").SpecialKeyMap.right ===
              t.keyCode ||
              o("WAWebKeyboardHotKeys.react").SpecialKeyMap.left ===
                t.keyCode) &&
              (c == null || c(t.keyCode)));
        },
        h = _ === u.POLLS_RECEIVER || _ === u.POLLS_SENDER;
      return s.jsx(r("WDSBaseCheckbox.react"), {
        tabIndex: m != null ? m : void 0,
        value: f ? "indeterminate" : n,
        disabled: i,
        id: l,
        onChange: function (t) {
          t && d(t);
        },
        onKeyDown: g,
        testid: void 0,
        "aria-label": t,
        appearsOnMedia: _ === u.OUTLINE_WHITE,
        shape: h ? "circle" : "square",
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.CheckboxTheme = u),
      (l.CheckBox = c));
  },
  98,
);
