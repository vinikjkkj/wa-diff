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
        h,
        y;
      n[0] !== t
        ? ((r = t.children),
          (h = t.forceSelection),
          (a = t.handlers),
          (i = t.initialActiveItem),
          (l = t.items),
          (s = t.listControllerRef),
          (c = t.onHotKeysFocus),
          (_ = t.onSelect),
          (y = t.rotate),
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
          (n[9] = h),
          (n[10] = y))
        : ((r = n[1]),
          (a = n[2]),
          (i = n[3]),
          (l = n[4]),
          (s = n[5]),
          (c = n[6]),
          (_ = n[7]),
          (f = n[8]),
          (h = n[9]),
          (y = n[10]));
      var C = h === void 0 ? !1 : h,
        b = y === void 0 ? !1 : y,
        v = p(null),
        S;
      n[11] !== s || n[12] !== c
        ? ((S = function (t) {
            var e;
            c == null ||
              c({ e: t, controller: (e = s) == null ? void 0 : e.current });
          }),
          (n[11] = s),
          (n[12] = c),
          (n[13] = S))
        : (S = n[13]);
      var R = S,
        L,
        E;
      (n[14] !== C || n[15] !== i || n[16] !== l
        ? ((L = function () {
            (i != null && l.setVal(i),
              C === !0 && l.index < 0 && l.setFirst(!1));
          }),
          (E = [l, C, i]),
          (n[14] = C),
          (n[15] = i),
          (n[16] = l),
          (n[17] = L),
          (n[18] = E))
        : ((L = n[17]), (E = n[18])),
        d(L, E));
      var k;
      n[19] !== a ? ((k = a || {}), (n[19] = a), (n[20] = k)) : (k = n[20]);
      var I = k,
        T = I.down,
        D = I.enter,
        x = I.space,
        $ = I.up,
        P;
      n[21] !== l || n[22] !== b
        ? ((P = function () {
            b && l.index === l.list.length - 1 ? l.setFirst(!1) : l.setNext(!1);
          }),
          (n[21] = l),
          (n[22] = b),
          (n[23] = P))
        : (P = n[23]);
      var N = P,
        M;
      n[24] !== C || n[25] !== l || n[26] !== b
        ? ((M = function () {
            if (l.index === 0) {
              if (b) {
                l.setLast(!1);
                return;
              } else if (C) return;
            }
            l.setPrev(!1);
          }),
          (n[24] = C),
          (n[25] = l),
          (n[26] = b),
          (n[27] = M))
        : (M = n[27]);
      var w = M,
        A;
      n[28] !== l
        ? ((A = function (t) {
            l.setIndex(t);
          }),
          (n[28] = l),
          (n[29] = A))
        : (A = n[29]);
      var F = A,
        O;
      n[30] !== l || n[31] !== _
        ? ((O = function () {
            var e = l.getVal();
            e != null &&
              _ != null &&
              (e == null ? void 0 : e.disabled) !== !0 &&
              _(e);
          }),
          (n[30] = l),
          (n[31] = _),
          (n[32] = O))
        : (O = n[32]);
      var B = O,
        W;
      n[33] !== T || n[34] !== N
        ? ((W = function (t) {
            (T == null ? void 0 : T(t)) !== !1 && N();
          }),
          (n[33] = T),
          (n[34] = N),
          (n[35] = W))
        : (W = n[35]);
      var q;
      n[36] !== w || n[37] !== $
        ? ((q = function (t) {
            ($ == null ? void 0 : $(t)) !== !1 && (w(), t.preventDefault());
          }),
          (n[36] = w),
          (n[37] = $),
          (n[38] = q))
        : (q = n[38]);
      var U;
      n[39] !== D || n[40] !== B
        ? ((U = function (t) {
            (D == null ? void 0 : D(t)) !== !1 && B();
          }),
          (n[39] = D),
          (n[40] = B),
          (n[41] = U))
        : (U = n[41]);
      var V;
      n[42] !== B || n[43] !== x
        ? ((V = function (t) {
            g(t.target) ||
              ((x == null ? void 0 : x(t)) !== !1 && (B(), t.preventDefault()));
          }),
          (n[42] = B),
          (n[43] = x),
          (n[44] = V))
        : (V = n[44]);
      var H;
      n[45] !== a || n[46] !== W || n[47] !== q || n[48] !== U || n[49] !== V
        ? ((H = babelHelpers.extends({}, a, {
            down: W,
            up: q,
            enter: U,
            space: V,
          })),
          (n[45] = a),
          (n[46] = W),
          (n[47] = q),
          (n[48] = U),
          (n[49] = V),
          (n[50] = H))
        : (H = n[50]);
      var G = H,
        z;
      (n[51] !== N || n[52] !== F || n[53] !== w || n[54] !== l || n[55] !== B
        ? ((z = function () {
            return {
              goDown: N,
              goUp: w,
              selectItem: B,
              getIndex: function () {
                return l.index;
              },
              goIndex: F,
            };
          }),
          (n[51] = N),
          (n[52] = F),
          (n[53] = w),
          (n[54] = l),
          (n[55] = B),
          (n[56] = z))
        : (z = n[56]),
        m(s, z));
      var j;
      return (
        n[57] !== r || n[58] !== R || n[59] !== f || n[60] !== G
          ? ((j = u.jsx(
              o("WAWebKeyboardHotKeys.react").HotKeys,
              babelHelpers.extends({ ref: v, handlers: G, onFocus: R }, f, {
                children: r,
              }),
            )),
            (n[57] = r),
            (n[58] = R),
            (n[59] = f),
            (n[60] = G),
            (n[61] = j))
          : (j = n[61]),
        j
      );
    }
    var f = new Set([
      "button",
      "checkbox",
      "color",
      "file",
      "hidden",
      "image",
      "radio",
      "range",
      "reset",
      "submit",
    ]);
    function g(e) {
      return e instanceof HTMLInputElement
        ? !f.has(e.type)
        : e instanceof HTMLTextAreaElement
          ? !0
          : e instanceof HTMLElement && e.isContentEditable;
    }
    l.default = _;
  },
  98,
);
