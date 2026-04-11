__d(
  "WAWebNavigatableList",
  ["WAWebKeyboardHotKeys.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e = [
        "children",
        "forceSelection",
        "handlers",
        "initialActiveItem",
        "items",
        "listControllerRef",
        "onHotKeysFocus",
        "onSelect",
        "rotate",
      ],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useImperativeHandle,
      p = c.useRef;
    function _(t) {
      var n = o("react-compiler-runtime").c(62),
        r,
        a,
        i,
        l,
        s,
        c,
        _,
        f,
        g,
        h;
      n[0] !== t
        ? ((r = t.children),
          (g = t.forceSelection),
          (a = t.handlers),
          (i = t.initialActiveItem),
          (l = t.items),
          (s = t.listControllerRef),
          (c = t.onHotKeysFocus),
          (_ = t.onSelect),
          (h = t.rotate),
          (f = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = r),
          (n[2] = a),
          (n[3] = i),
          (n[4] = l),
          (n[5] = s),
          (n[6] = c),
          (n[7] = _),
          (n[8] = f),
          (n[9] = g),
          (n[10] = h))
        : ((r = n[1]),
          (a = n[2]),
          (i = n[3]),
          (l = n[4]),
          (s = n[5]),
          (c = n[6]),
          (_ = n[7]),
          (f = n[8]),
          (g = n[9]),
          (h = n[10]));
      var y = g === void 0 ? !1 : g,
        C = h === void 0 ? !1 : h,
        b = p(null),
        v;
      n[11] !== s || n[12] !== c
        ? ((v = function (t) {
            var e;
            c == null ||
              c({ e: t, controller: (e = s) == null ? void 0 : e.current });
          }),
          (n[11] = s),
          (n[12] = c),
          (n[13] = v))
        : (v = n[13]);
      var S = v,
        R,
        L;
      (n[14] !== y || n[15] !== i || n[16] !== l
        ? ((R = function () {
            (i != null && l.setVal(i),
              y === !0 && l.index < 0 && l.setFirst(!1));
          }),
          (L = [l, y, i]),
          (n[14] = y),
          (n[15] = i),
          (n[16] = l),
          (n[17] = R),
          (n[18] = L))
        : ((R = n[17]), (L = n[18])),
        d(R, L));
      var E;
      n[19] !== a ? ((E = a || {}), (n[19] = a), (n[20] = E)) : (E = n[20]);
      var k = E,
        I = k.down,
        T = k.enter,
        D = k.space,
        x = k.up,
        $;
      n[21] !== l || n[22] !== C
        ? (($ = function () {
            C && l.index === l.list.length - 1 ? l.setFirst(!1) : l.setNext(!1);
          }),
          (n[21] = l),
          (n[22] = C),
          (n[23] = $))
        : ($ = n[23]);
      var P = $,
        N;
      n[24] !== y || n[25] !== l || n[26] !== C
        ? ((N = function () {
            if (l.index === 0) {
              if (C) {
                l.setLast(!1);
                return;
              } else if (y) return;
            }
            l.setPrev(!1);
          }),
          (n[24] = y),
          (n[25] = l),
          (n[26] = C),
          (n[27] = N))
        : (N = n[27]);
      var M = N,
        w;
      n[28] !== l
        ? ((w = function (t) {
            l.setIndex(t);
          }),
          (n[28] = l),
          (n[29] = w))
        : (w = n[29]);
      var A = w,
        F;
      n[30] !== l || n[31] !== _
        ? ((F = function () {
            var e = l.getVal();
            e != null &&
              _ != null &&
              (e == null ? void 0 : e.disabled) !== !0 &&
              _(e);
          }),
          (n[30] = l),
          (n[31] = _),
          (n[32] = F))
        : (F = n[32]);
      var O = F,
        B;
      n[33] !== I || n[34] !== P
        ? ((B = function (t) {
            (I == null ? void 0 : I(t)) !== !1 && P();
          }),
          (n[33] = I),
          (n[34] = P),
          (n[35] = B))
        : (B = n[35]);
      var W;
      n[36] !== M || n[37] !== x
        ? ((W = function (t) {
            (x == null ? void 0 : x(t)) !== !1 && (M(), t.preventDefault());
          }),
          (n[36] = M),
          (n[37] = x),
          (n[38] = W))
        : (W = n[38]);
      var q;
      n[39] !== T || n[40] !== O
        ? ((q = function (t) {
            (T == null ? void 0 : T(t)) !== !1 && O();
          }),
          (n[39] = T),
          (n[40] = O),
          (n[41] = q))
        : (q = n[41]);
      var U;
      n[42] !== O || n[43] !== D
        ? ((U = function (t) {
            (D == null ? void 0 : D(t)) !== !1 && (O(), t.preventDefault());
          }),
          (n[42] = O),
          (n[43] = D),
          (n[44] = U))
        : (U = n[44]);
      var V;
      n[45] !== a || n[46] !== B || n[47] !== W || n[48] !== q || n[49] !== U
        ? ((V = babelHelpers.extends({}, a, {
            down: B,
            up: W,
            enter: q,
            space: U,
          })),
          (n[45] = a),
          (n[46] = B),
          (n[47] = W),
          (n[48] = q),
          (n[49] = U),
          (n[50] = V))
        : (V = n[50]);
      var H = V,
        G;
      (n[51] !== P || n[52] !== A || n[53] !== M || n[54] !== l || n[55] !== O
        ? ((G = function () {
            return {
              goDown: P,
              goUp: M,
              selectItem: O,
              getIndex: function () {
                return l.index;
              },
              goIndex: A,
            };
          }),
          (n[51] = P),
          (n[52] = A),
          (n[53] = M),
          (n[54] = l),
          (n[55] = O),
          (n[56] = G))
        : (G = n[56]),
        m(s, G));
      var z;
      return (
        n[57] !== r || n[58] !== S || n[59] !== f || n[60] !== H
          ? ((z = u.jsx(
              o("WAWebKeyboardHotKeys.react").HotKeys,
              babelHelpers.extends({ ref: b, handlers: H, onFocus: S }, f, {
                children: r,
              }),
            )),
            (n[57] = r),
            (n[58] = S),
            (n[59] = f),
            (n[60] = H),
            (n[61] = z))
          : (z = n[61]),
        z
      );
    }
    l.default = _;
  },
  98,
);
