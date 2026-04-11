__d(
  "WAWebMessageGroupedStickerCheckbox.react",
  ["WAWebCheckBox.react", "WAWebStopEvent", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.ariaLabel,
        r = e.checked,
        a = e.onClick,
        i = e.ref,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = { className: "x10l6tqk x1rozsjd xh8yej3 x5yr21d x1ypdohk" }),
          (t[0] = l))
        : (l = t[0]);
      var u;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = { className: "x10l6tqk xxk6nc9 x1ro0b6g" }), (t[1] = u))
        : (u = t[1]);
      var c;
      t[2] !== n
        ? ((c = n != null ? { ariaLabel: n } : {}), (t[2] = n), (t[3] = c))
        : (c = t[3]);
      var d;
      t[4] !== r || t[5] !== a || t[6] !== c
        ? ((d = s.jsx(
            "div",
            babelHelpers.extends({}, u, {
              onClick: o("WAWebStopEvent").stopPropagation,
              children: s.jsx(
                o("WAWebCheckBox.react").CheckBox,
                babelHelpers.extends({ onChange: a, checked: r }, c),
              ),
            }),
          )),
          (t[4] = r),
          (t[5] = a),
          (t[6] = c),
          (t[7] = d))
        : (d = t[7]);
      var m;
      return (
        t[8] !== a || t[9] !== i || t[10] !== d
          ? ((m = s.jsx(
              "div",
              babelHelpers.extends({ ref: i }, l, { onClick: a, children: d }),
            )),
            (t[8] = a),
            (t[9] = i),
            (t[10] = d),
            (t[11] = m))
          : (m = t[11]),
        m
      );
    }
    l.default = u;
  },
  98,
);
