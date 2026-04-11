__d(
  "WAWebSuspendedGroupModal.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebModal.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(22),
        n = e.children,
        r = e.onDismissClicked,
        a = e.onSupportClicked,
        i = e.showSupportBtn,
        l = e.title,
        c;
      t[0] !== a
        ? ((c = function (t) {
            (t.stopPropagation(), t.preventDefault(), a == null || a());
          }),
          (t[0] = a),
          (t[1] = c))
        : (c = t[1]);
      var d = c,
        m;
      t[2] !== r
        ? ((m = function (t) {
            (t.stopPropagation(), t.preventDefault(), r == null || r());
          }),
          (t[2] = r),
          (t[3] = m))
        : (m = t[3]);
      var p = m,
        _;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s._(/*BTDS*/ "Support")), (t[4] = _))
        : (_ = t[4]);
      var f;
      t[5] !== d
        ? ((f = u.jsx(o("WAWebButton.react").Button, {
            testid: void 0,
            type: "secondary",
            onClick: d,
            children: _,
          })),
          (t[5] = d),
          (t[6] = f))
        : (f = t[6]);
      var g = f,
        h;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = s._(/*BTDS*/ "Dismiss")), (t[7] = h))
        : (h = t[7]);
      var y;
      t[8] !== p
        ? ((y = u.jsx(o("WAWebButton.react").Button, {
            testid: void 0,
            type: "primary",
            onClick: p,
            children: h,
          })),
          (t[8] = p),
          (t[9] = y))
        : (y = t[9]);
      var C = y,
        b;
      t[10] !== p
        ? ((b = { escape: p }), (t[10] = p), (t[11] = b))
        : (b = t[11]);
      var v = b,
        S = i && g,
        R;
      t[12] !== C || t[13] !== S
        ? ((R = u.jsxs(u.Fragment, { children: [S, C] })),
          (t[12] = C),
          (t[13] = S),
          (t[14] = R))
        : (R = t[14]);
      var L = R,
        E;
      t[15] !== L || t[16] !== n || t[17] !== l
        ? ((E = u.jsx(o("WAWebModal.react").Modal, {
            actions: L,
            children: n,
            title: l,
          })),
          (t[15] = L),
          (t[16] = n),
          (t[17] = l),
          (t[18] = E))
        : (E = t[18]);
      var k;
      return (
        t[19] !== v || t[20] !== E
          ? ((k = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              handlers: v,
              children: E,
            })),
            (t[19] = v),
            (t[20] = E),
            (t[21] = k))
          : (k = t[21]),
        k
      );
    }
    l.default = c;
  },
  226,
);
