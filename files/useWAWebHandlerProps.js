__d(
  "useWAWebHandlerProps",
  ["WAWebKeyboardIsKeyActivation", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("react-compiler-runtime").c(9),
        n;
      if (
        t[0] !== e.disabled ||
        t[1] !== e.onBlur ||
        t[2] !== e.onClick ||
        t[3] !== e.onFocus ||
        t[4] !== e.onMouseEnter ||
        t[5] !== e.onMouseLeave ||
        t[6] !== e.role ||
        t[7] !== e.tabIndex
      ) {
        if (
          ((n = { onMouseLeave: e.onMouseLeave, onMouseEnter: e.onMouseEnter }),
          typeof e.role == "string")
        ) {
          var r, a;
          ((n.role = e.role),
            e.disabled !== !0 &&
              ((n.onClick = e.onClick),
              (n.onBlur = e.onBlur),
              (n.onFocus = e.onFocus),
              n.onClick != null && (n.onKeyPress = s)),
            (n.tabIndex = (r = e.tabIndex) != null ? r : 0),
            (n.disabled = (a = e.disabled) != null ? a : void 0),
            (n["aria-disabled"] = n.disabled));
        }
        ((t[0] = e.disabled),
          (t[1] = e.onBlur),
          (t[2] = e.onClick),
          (t[3] = e.onFocus),
          (t[4] = e.onMouseEnter),
          (t[5] = e.onMouseLeave),
          (t[6] = e.role),
          (t[7] = e.tabIndex),
          (t[8] = n));
      } else n = t[8];
      return n;
    }
    function s(e) {
      r("WAWebKeyboardIsKeyActivation")(e) &&
        (e.stopPropagation(), e.preventDefault(), e.currentTarget.click());
    }
    l.useHandlerProps = e;
  },
  98,
);
