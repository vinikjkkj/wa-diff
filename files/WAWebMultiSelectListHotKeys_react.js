__d(
  "WAWebMultiSelectListHotKeys.react",
  ["WAWebKeyboardHotKeys.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(28),
        r,
        a;
      n[0] !== t
        ? ((a = t.ref),
          (r = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = r),
          (n[2] = a))
        : ((r = n[1]), (a = n[2]));
      var i = r,
        l = i.active,
        s = i.onEnter,
        c = i.onIndexChange,
        m = i.onLeave,
        p = i.role,
        _ = i.xstyle,
        f;
      n[3] !== l || n[4] !== c
        ? ((f = function (t) {
            (t.preventDefault(),
              t.stopPropagation(),
              l.setNext(!0),
              c == null || c(l.index));
          }),
          (n[3] = l),
          (n[4] = c),
          (n[5] = f))
        : (f = n[5]);
      var g = f,
        h;
      n[6] !== l || n[7] !== c || n[8] !== m
        ? ((h = function (t) {
            (t.stopPropagation(), t.preventDefault());
            var e = l.prev();
            e > -1
              ? (l.setPrev(!0), c == null || c(l.index))
              : m && (m(t), l.unset());
          }),
          (n[6] = l),
          (n[7] = c),
          (n[8] = m),
          (n[9] = h))
        : (h = n[9]);
      var y = h,
        C;
      n[10] !== s
        ? ((C = function (t) {
            s == null || s(t);
          }),
          (n[10] = s),
          (n[11] = C))
        : (C = n[11]);
      var b = C,
        v = d,
        S;
      n[12] !== l
        ? ((S = function (t) {
            v(t) && l.setFirst(!0);
          }),
          (n[12] = l),
          (n[13] = S))
        : (S = n[13]);
      var R = S,
        L;
      n[14] !== l
        ? ((L = function (t) {
            v(t) && l.unset();
          }),
          (n[14] = l),
          (n[15] = L))
        : (L = n[15]);
      var E = L,
        k;
      n[16] !== b || n[17] !== g || n[18] !== y
        ? ((k = { down: g, up: y, enter: b, space: b }),
          (n[16] = b),
          (n[17] = g),
          (n[18] = y),
          (n[19] = k))
        : (k = n[19]);
      var I = k,
        T;
      return (
        n[20] !== E ||
        n[21] !== R ||
        n[22] !== I ||
        n[23] !== r.children ||
        n[24] !== a ||
        n[25] !== p ||
        n[26] !== _
          ? ((T = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              handlers: I,
              ref: a,
              onFocus: R,
              onBlur: E,
              tabIndex: 0,
              xstyle: _,
              role: p,
              children: r.children,
            })),
            (n[20] = E),
            (n[21] = R),
            (n[22] = I),
            (n[23] = r.children),
            (n[24] = a),
            (n[25] = p),
            (n[26] = _),
            (n[27] = T))
          : (T = n[27]),
        T
      );
    }
    function d(e) {
      var t = e.relatedTarget;
      return (
        t instanceof HTMLElement &&
        e.currentTarget instanceof HTMLElement &&
        !e.currentTarget.contains(t)
      );
    }
    l.default = c;
  },
  98,
);
