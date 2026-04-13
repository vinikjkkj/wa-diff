__d(
  "WAWebOrderDetailRadioButton.react",
  [
    "WAWebCheckBoxRound.react",
    "WAWebClickable.react",
    "WAWebFlex.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        paddingEnd24: { paddingInlineEnd: "xyo0t3i", $$css: !0 },
        paddingStart12: { paddingInlineStart: "x1iw51ew", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.checked,
        a = e.isCanceled,
        i = e.label,
        l = e.onClick,
        c = e.testid,
        d = c != null ? c : "",
        m;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = [u.paddingStart12, u.paddingEnd24]), (t[0] = m))
        : (m = t[0]);
      var p;
      t[1] !== l
        ? ((p = function () {
            return void l();
          }),
          (t[1] = l),
          (t[2] = p))
        : (p = t[2]);
      var _;
      t[3] !== n || t[4] !== p
        ? ((_ = s.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: m,
            children: s.jsx(r("WAWebCheckBoxRound.react"), {
              checked: n,
              radio: !0,
              hover: !1,
              systemUncheckedColor: !0,
              onClick: p,
            }),
          })),
          (t[3] = n),
          (t[4] = p),
          (t[5] = _))
        : (_ = t[5]);
      var f;
      t[6] !== a
        ? ((f = a ? "x30a034" : null), (t[6] = a), (t[7] = f))
        : (f = t[7]);
      var g;
      t[8] !== i || t[9] !== f
        ? ((g = s.jsx("div", { className: f, children: i })),
          (t[8] = i),
          (t[9] = f),
          (t[10] = g))
        : (g = t[10]);
      var h;
      t[11] !== _ || t[12] !== g
        ? ((h = s.jsxs(o("WAWebFlex.react").FlexRow, { children: [_, g] })),
          (t[11] = _),
          (t[12] = g),
          (t[13] = h))
        : (h = t[13]);
      var y;
      return (
        t[14] !== l || t[15] !== d || t[16] !== h
          ? ((y = s.jsx(o("WAWebClickable.react").Clickable, {
              onClick: l,
              dataTestId: d,
              children: h,
            })),
            (t[14] = l),
            (t[15] = d),
            (t[16] = h),
            (t[17] = y))
          : (y = t[17]),
        y
      );
    }
    l.default = c;
  },
  98,
);
