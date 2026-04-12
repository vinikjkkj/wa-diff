__d(
  "useWAWebHandlerProps",
  ["WAWebKeyboardIsKeyActivation"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = { onMouseLeave: e.onMouseLeave, onMouseEnter: e.onMouseEnter };
      if (typeof e.role == "string") {
        var n, o;
        ((t.role = e.role),
          e.disabled !== !0 &&
            ((t.onClick = e.onClick),
            (t.onBlur = e.onBlur),
            (t.onFocus = e.onFocus),
            t.onClick != null &&
              (t.onKeyPress = function (e) {
                r("WAWebKeyboardIsKeyActivation")(e) &&
                  (e.stopPropagation(),
                  e.preventDefault(),
                  e.currentTarget.click());
              })),
          (t.tabIndex = (n = e.tabIndex) != null ? n : 0),
          (t.disabled = (o = e.disabled) != null ? o : void 0),
          (t["aria-disabled"] = t.disabled));
      }
      return t;
    }
    l.useHandlerProps = e;
  },
  98,
);
