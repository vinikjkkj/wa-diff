__d(
  "WAWebMessageCheckbox.react",
  [
    "cx",
    "WAWebCheckBox.react",
    "WAWebClassnames",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.ariaLabel,
        r = e.checked,
        a = e.msgTheme,
        i = e.onClick,
        l = e.ref,
        s = e.theme,
        c = a === "gallery",
        d;
      if (t[0] !== r || t[1] !== c) {
        var m;
        ((d = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((m = {}), (m._ak2p = r), (m._ak2q = c), (m._ak2o = !0), m),
        )),
          (t[0] = r),
          (t[1] = c),
          (t[2] = d));
      } else d = t[2];
      var p = d,
        _;
      t[3] !== n || t[4] !== r || t[5] !== i || t[6] !== s
        ? ((_ = u.jsx(o("WAWebCheckBox.react").CheckBox, {
            onChange: i,
            checked: r,
            theme: s,
            ariaLabel: n,
          })),
          (t[3] = n),
          (t[4] = r),
          (t[5] = i),
          (t[6] = s),
          (t[7] = _))
        : (_ = t[7]);
      var f;
      return (
        t[8] !== p || t[9] !== i || t[10] !== l || t[11] !== _
          ? ((f = u.jsx("div", {
              ref: l,
              className: p,
              onClick: i,
              children: _,
            })),
            (t[8] = p),
            (t[9] = i),
            (t[10] = l),
            (t[11] = _),
            (t[12] = f))
          : (f = t[12]),
        f
      );
    }
    l.default = c;
  },
  98,
);
