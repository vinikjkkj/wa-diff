__d(
  "WAWebBizAdCreationTargetingModalLocationItem.react",
  [
    "WAWebBizAdCreationTargetingModalLocationDisplayUtils",
    "WAWebFlex.react",
    "WAWebNoop",
    "WDSBaseCheckbox.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        locationRow: {
          width: "xh8yej3",
          justifyContent: "x1qughib",
          $$css: !0,
        },
        locationText: { flex: "x98rzlu", minWidth: "xeuugli", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(27),
        n = e.isSelected,
        a = e.location,
        i = e.onToggle,
        l = e.showSubtitle,
        c;
      t[0] !== a || t[1] !== l
        ? ((c = l
            ? o(
                "WAWebBizAdCreationTargetingModalLocationDisplayUtils",
              ).buildLocationSubtitle(a)
            : ""),
          (t[0] = a),
          (t[1] = l),
          (t[2] = c))
        : (c = t[2]);
      var d = c,
        m = a.key,
        p;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = { className: "x6s0dn4 x1ypdohk x16ovd2e x12xbjc7 xh8yej3" }),
          (t[3] = p))
        : (p = t[3]);
      var _, f;
      t[4] !== n || t[5] !== a.key || t[6] !== i
        ? ((_ = function () {
            return i(a.key, !n);
          }),
          (f = function (t) {
            (t.key === "Enter" || t.key === " ") &&
              (t.preventDefault(), i(a.key, !n));
          }),
          (t[4] = n),
          (t[5] = a.key),
          (t[6] = i),
          (t[7] = _),
          (t[8] = f))
        : ((_ = t[7]), (f = t[8]));
      var g;
      t[9] !== a.name
        ? ((g = s.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDefault",
            children: a.name,
          })),
          (t[9] = a.name),
          (t[10] = g))
        : (g = t[10]);
      var h;
      t[11] !== d
        ? ((h =
            d.length > 0 &&
            s.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              children: d,
            })),
          (t[11] = d),
          (t[12] = h))
        : (h = t[12]);
      var y;
      t[13] !== g || t[14] !== h
        ? ((y = s.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: u.locationText,
            children: [g, h],
          })),
          (t[13] = g),
          (t[14] = h),
          (t[15] = y))
        : (y = t[15]);
      var C;
      t[16] !== n
        ? ((C = s.jsx(r("WDSBaseCheckbox.react"), {
            value: n,
            onChange: r("WAWebNoop"),
            shape: "circle",
          })),
          (t[16] = n),
          (t[17] = C))
        : (C = t[17]);
      var b;
      t[18] !== y || t[19] !== C
        ? ((b = s.jsxs(o("WAWebFlex.react").FlexRow, {
            gap: 12,
            align: "center",
            xstyle: u.locationRow,
            children: [y, C],
          })),
          (t[18] = y),
          (t[19] = C),
          (t[20] = b))
        : (b = t[20]);
      var v;
      return (
        t[21] !== n ||
        t[22] !== a.key ||
        t[23] !== b ||
        t[24] !== _ ||
        t[25] !== f
          ? ((v = s.jsx(
              "div",
              babelHelpers.extends({}, p, {
                onClick: _,
                onKeyDown: f,
                role: "button",
                tabIndex: 0,
                "aria-pressed": n,
                children: b,
              }),
              m,
            )),
            (t[21] = n),
            (t[22] = a.key),
            (t[23] = b),
            (t[24] = _),
            (t[25] = f),
            (t[26] = v))
          : (v = t[26]),
        v
      );
    }
    l.default = c;
  },
  98,
);
