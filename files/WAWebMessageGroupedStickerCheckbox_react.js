__d(
  "WAWebMessageGroupedStickerCheckbox.react",
  ["WAWebCheckBox.react", "WAWebStopEvent", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.ariaLabel,
        n = e.checked,
        r = e.onClick,
        a = e.ref;
      return s.jsx("div", {
        ref: a,
        className: "x10l6tqk x1rozsjd xh8yej3 x5yr21d x1ypdohk",
        onClick: r,
        children: s.jsx("div", {
          className: "x10l6tqk xxk6nc9 x1ro0b6g",
          onClick: o("WAWebStopEvent").stopPropagation,
          children: s.jsx(
            o("WAWebCheckBox.react").CheckBox,
            babelHelpers.extends(
              { onChange: r, checked: n },
              t != null ? { ariaLabel: t } : {},
            ),
          ),
        }),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
