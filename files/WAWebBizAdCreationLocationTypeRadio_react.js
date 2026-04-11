__d(
  "WAWebBizAdCreationLocationTypeRadio.react",
  [
    "WAWebPencilRefreshedIcon.react",
    "WAWebRadio.react",
    "WDSButton.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.checked,
        a = e.label,
        i = e.onChange,
        l = e.onEditPress,
        u = e.secondaryLabel,
        c = e.value,
        d;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = { className: "x6s0dn4 x78zum5 x1q0g3np x1n2onr6 xh8yej3" }),
          (t[0] = d))
        : (d = t[0]);
      var m;
      t[1] !== n || t[2] !== a || t[3] !== i || t[4] !== u || t[5] !== c
        ? ((m = s.jsx(o("WAWebRadio.react").RadioWithLabel, {
            name: "location-type",
            value: c,
            label: a,
            secondaryLabel: u,
            theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.LARGE,
            checked: n,
            onChange: i,
          })),
          (t[1] = n),
          (t[2] = a),
          (t[3] = i),
          (t[4] = u),
          (t[5] = c),
          (t[6] = m))
        : (m = t[6]);
      var p;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = { className: "xvc5jky" }), (t[7] = p))
        : (p = t[7]);
      var _;
      t[8] !== l
        ? ((_ = s.jsx(
            "div",
            babelHelpers.extends({}, p, {
              children: s.jsx(r("WDSButton.react"), {
                Icon: o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon,
                variant: "borderless",
                size: "medium",
                onPress: l,
              }),
            }),
          )),
          (t[8] = l),
          (t[9] = _))
        : (_ = t[9]);
      var f;
      return (
        t[10] !== m || t[11] !== _
          ? ((f = s.jsxs(
              "div",
              babelHelpers.extends({}, d, { children: [m, _] }),
            )),
            (t[10] = m),
            (t[11] = _),
            (t[12] = f))
          : (f = t[12]),
        f
      );
    }
    l.default = u;
  },
  98,
);
