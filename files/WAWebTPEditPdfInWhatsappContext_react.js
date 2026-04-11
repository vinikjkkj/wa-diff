__d(
  "WAWebTPEditPdfInWhatsappContext.react",
  ["WAWebMediaEditorEnumsColors", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useCallback,
      m = u.useContext,
      p = u.useMemo,
      _ = u.useState,
      f = o("WAWebMediaEditorEnumsColors").getColorValue(
        o("WAWebMediaEditorEnumsColors").ColorType.BLUE,
      ),
      g = 7,
      h = {
        isEditing: !1,
        setIsEditing: function () {},
        selectedColor: f,
        setSelectedColor: function () {},
        selectedThickness: g,
        setSelectedThickness: function () {},
      },
      y = c(h);
    function C(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.children,
        r = _(!1),
        a = r[0],
        i = r[1],
        l = _(f),
        u = l[0],
        c = l[1],
        d = _(g),
        m = d[0],
        p = d[1],
        h;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = function (t) {
            i(t);
          }),
          (t[0] = h))
        : (h = t[0]);
      var C = h,
        b;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = function (t) {
            c(t);
          }),
          (t[1] = b))
        : (b = t[1]);
      var v = b,
        S;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = function (t) {
            p(t);
          }),
          (t[2] = S))
        : (S = t[2]);
      var R = S,
        L;
      t[3] !== a || t[4] !== u || t[5] !== m
        ? ((L = {
            isEditing: a,
            setIsEditing: C,
            selectedColor: u,
            setSelectedColor: v,
            selectedThickness: m,
            setSelectedThickness: R,
          }),
          (t[3] = a),
          (t[4] = u),
          (t[5] = m),
          (t[6] = L))
        : (L = t[6]);
      var E = L,
        k;
      return (
        t[7] !== n || t[8] !== E
          ? ((k = s.jsx(y, { value: E, children: n })),
            (t[7] = n),
            (t[8] = E),
            (t[9] = k))
          : (k = t[9]),
        k
      );
    }
    function b() {
      return m(y);
    }
    ((l.WAWebTPEditPdfInWhatsappProvider = C),
      (l.useWAWebTPEditPdfInWhatsappContext = b));
  },
  98,
);
