__d(
  "WAWebMessageCheckbox.react",
  ["cx", "WAWebCheckBox.react", "WAWebClassnames", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n = e.ariaLabel,
        r = e.checked,
        a = e.msgTheme,
        i = e.onClick,
        l = e.ref,
        s = e.theme,
        c = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((t = {}),
          (t._ak2p = r),
          (t._ak2q = a === "gallery"),
          (t._ak2o = !0),
          t),
        );
      return u.jsx("div", {
        ref: l,
        className: c,
        onClick: i,
        children: u.jsx(o("WAWebCheckBox.react").CheckBox, {
          onChange: i,
          checked: r,
          theme: s,
          ariaLabel: n,
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
