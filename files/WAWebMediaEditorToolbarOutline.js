__d(
  "WAWebMediaEditorToolbarOutline",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebMediaEditorToolbarButton.react",
    "WAWebOutlineSmoothIcon.react",
    "WAWebOutlineStraightIcon.react",
    "WDSMargins.stylex",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(25),
        n = e.canReset,
        a = e.onReset,
        i = e.onSmoothingToggle,
        l = e.smoothing,
        c,
        d,
        m;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = [
            o("WDSMargins.stylex").wdsMargins.marginVer0,
            o("WDSMargins.stylex").wdsMargins.marginHor8,
          ]),
          (d = u.jsx(o("WAWebOutlineSmoothIcon.react").OutlineSmoothIcon, {
            displayInline: !0,
          })),
          (m = s._(/*BTDS*/ "Smooth")),
          (t[0] = c),
          (t[1] = d),
          (t[2] = m))
        : ((c = t[0]), (d = t[1]), (m = t[2]));
      var p;
      t[3] !== i
        ? ((p = function () {
            return i(!0);
          }),
          (t[3] = i),
          (t[4] = p))
        : (p = t[4]);
      var _;
      t[5] !== l || t[6] !== p
        ? ((_ = u.jsx(r("WAWebMediaEditorToolbarButton.react"), {
            xstyle: c,
            icon: d,
            title: m,
            selected: l,
            onClick: p,
          })),
          (t[5] = l),
          (t[6] = p),
          (t[7] = _))
        : (_ = t[7]);
      var f, g, h;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = [
            o("WDSMargins.stylex").wdsMargins.marginVer0,
            o("WDSMargins.stylex").wdsMargins.marginHor8,
          ]),
          (g = u.jsx(o("WAWebOutlineStraightIcon.react").OutlineStraightIcon, {
            displayInline: !0,
          })),
          (h = s._(/*BTDS*/ "Straight")),
          (t[8] = f),
          (t[9] = g),
          (t[10] = h))
        : ((f = t[8]), (g = t[9]), (h = t[10]));
      var y = !l,
        C;
      t[11] !== i
        ? ((C = function () {
            return i(!1);
          }),
          (t[11] = i),
          (t[12] = C))
        : (C = t[12]);
      var b;
      t[13] !== C || t[14] !== y
        ? ((b = u.jsx(r("WAWebMediaEditorToolbarButton.react"), {
            xstyle: f,
            icon: g,
            title: h,
            selected: y,
            onClick: C,
          })),
          (t[13] = C),
          (t[14] = y),
          (t[15] = b))
        : (b = t[15]);
      var v;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = [
            o("WDSMargins.stylex").wdsMargins.marginVer0,
            o("WDSMargins.stylex").wdsMargins.marginHor8,
          ]),
          (t[16] = v))
        : (v = t[16]);
      var S = !n,
        R;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = s._(/*BTDS*/ "Reset")), (t[17] = R))
        : (R = t[17]);
      var L;
      t[18] !== a || t[19] !== S
        ? ((L = u.jsx(r("WAWebMediaEditorToolbarButton.react"), {
            xstyle: v,
            onClick: a,
            disabled: S,
            children: R,
          })),
          (t[18] = a),
          (t[19] = S),
          (t[20] = L))
        : (L = t[20]);
      var E;
      return (
        t[21] !== b || t[22] !== L || t[23] !== _
          ? ((E = u.jsxs(o("WAWebFlex.react").FlexRow, {
              children: [_, b, L],
            })),
            (t[21] = b),
            (t[22] = L),
            (t[23] = _),
            (t[24] = E))
          : (E = t[24]),
        E
      );
    }
    l.default = c;
  },
  226,
);
