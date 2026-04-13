__d(
  "WAWebCheckBox.react",
  [
    "$InternalEnum",
    "WAWebKeyboardHotKeys.react",
    "WDSBaseCheckbox.react",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(16),
        n = e.ariaLabel,
        a = e.checked,
        i = e.disabled,
        l = e.id,
        c = e.onArrowKeyLeftRight,
        d = e.onChange,
        m = e.tabIndex,
        p = e.testid,
        _ = e.theme,
        f = i === void 0 ? !1 : i,
        g = a && _ === u.PARTIAL,
        h;
      t[0] !== c || t[1] !== d
        ? ((h = function (t) {
            ((o("WAWebKeyboardHotKeys.react").SpecialKeyMap.space ===
              t.keyCode ||
              o("WAWebKeyboardHotKeys.react").SpecialKeyMap.enter ===
                t.keyCode) &&
              (t.preventDefault(), d()),
              (o("WAWebKeyboardHotKeys.react").SpecialKeyMap.right ===
                t.keyCode ||
                o("WAWebKeyboardHotKeys.react").SpecialKeyMap.left ===
                  t.keyCode) &&
                (c == null || c(t.keyCode)));
          }),
          (t[0] = c),
          (t[1] = d),
          (t[2] = h))
        : (h = t[2]);
      var y = h,
        C = _ === u.POLLS_RECEIVER || _ === u.POLLS_SENDER,
        b = m != null ? m : void 0,
        v = g ? "indeterminate" : a,
        S;
      t[3] !== d
        ? ((S = function (t) {
            t && d(t);
          }),
          (t[3] = d),
          (t[4] = S))
        : (S = t[4]);
      var R = _ === u.OUTLINE_WHITE,
        L = C ? "circle" : "square",
        E;
      return (
        t[5] !== n ||
        t[6] !== f ||
        t[7] !== y ||
        t[8] !== l ||
        t[9] !== b ||
        t[10] !== v ||
        t[11] !== S ||
        t[12] !== R ||
        t[13] !== L ||
        t[14] !== p
          ? ((E = s.jsx(r("WDSBaseCheckbox.react"), {
              tabIndex: b,
              value: v,
              disabled: f,
              id: l,
              onChange: S,
              onKeyDown: y,
              testid: void 0,
              "aria-label": n,
              appearsOnMedia: R,
              shape: L,
            })),
            (t[5] = n),
            (t[6] = f),
            (t[7] = y),
            (t[8] = l),
            (t[9] = b),
            (t[10] = v),
            (t[11] = S),
            (t[12] = R),
            (t[13] = L),
            (t[14] = p),
            (t[15] = E))
          : (E = t[15]),
        E
      );
    }
    ((l.CheckboxTheme = u), (l.CheckBox = c));
  },
  98,
);
