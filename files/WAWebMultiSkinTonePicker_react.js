__d(
  "WAWebMultiSkinTonePicker.react",
  [
    "WAWebEmojiPickerOption.react",
    "WAWebStopEvent",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.Children,
      d = u.useState;
    function m(e) {
      var t = o("react-compiler-runtime").c(43),
        n = e.action,
        a = e.base,
        i = e.children,
        l = e.preVariant,
        u = e.unicode,
        m = c.toArray(i),
        p;
      if (t[0] !== i) {
        var _ = c.count(i);
        ((p = Math.sqrt(_)), (t[0] = i), (t[1] = p));
      } else p = t[1];
      var f = p,
        g;
      t[2] !== f
        ? ((g = function (t, n) {
            return n % f === Math.floor(n / f);
          }),
          (t[2] = f),
          (t[3] = g))
        : (g = t[3]);
      var h = m.filter(g),
        y = m.indexOf(l),
        C = d(y === -1 ? null : Math.floor(y / f)),
        b = C[0],
        v = C[1],
        S = d(y === -1 ? null : y % f),
        R = S[0],
        L = S[1],
        E = d(b != null && R != null ? b * f + R : null),
        k = E[0],
        I = E[1],
        T;
      t[4] !== R || t[5] !== f
        ? ((T = function (t, n) {
            return (
              o("WAWebStopEvent").stopEvent(t),
              v(n),
              R != null ? I(n * f + R) : I(n * f),
              !1
            );
          }),
          (t[4] = R),
          (t[5] = f),
          (t[6] = T))
        : (T = t[6]);
      var D = T,
        x;
      t[7] !== b || t[8] !== f
        ? ((x = function (t, n) {
            return (
              o("WAWebStopEvent").stopEvent(t),
              L(n),
              b != null ? I(b * f + n) : I(n),
              !1
            );
          }),
          (t[7] = b),
          (t[8] = f),
          (t[9] = x))
        : (x = t[9]);
      var $ = x,
        P;
      t[10] !== n || t[11] !== b || t[12] !== l || t[13] !== R
        ? ((P = function (t, r, o) {
            return b == null && R == null
              ? !1
              : o === r || o === l
                ? (n(t, r, o), !0)
                : b == null || R == null
                  ? !1
                  : n(t, r, o);
          }),
          (t[10] = n),
          (t[11] = b),
          (t[12] = l),
          (t[13] = R),
          (t[14] = P))
        : (P = t[14]);
      var N = P,
        M = function () {
          return k == null
            ? s.jsx(r("WAWebEmojiPickerOption.react"), {
                base: a,
                action: function (t) {
                  return N(t, u, l);
                },
                emoji: l,
                testid: void 0,
              })
            : b != null && R != null
              ? s.jsx(r("WAWebEmojiPickerOption.react"), {
                  base: a,
                  action: function (t) {
                    return N(t, u, m[k]);
                  },
                  emoji: m[k],
                  testid: void 0,
                })
              : s.jsx(r("WAWebEmojiPickerOption.react"), {
                  base: a,
                  leftEmojiVariation: b != null && R == null,
                  rightEmojiVariation: b == null && R != null,
                  emoji: m[k],
                  testid: void 0,
                });
        },
        w,
        A;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = {
            className:
              "x1oysuqx x78zum5 xdt5ytf xl56j7k xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl",
          }),
          (A = {
            className:
              "x78zum5 x1a02dak x1qughib x1ncir08 xkgu5aw xdj266r x16q7b9a xat24cr x1sbwfh8",
          }),
          (t[15] = w),
          (t[16] = A))
        : ((w = t[15]), (A = t[16]));
      var F;
      t[17] !== a || t[18] !== D || t[19] !== b
        ? ((F = function (t, n) {
            return s.jsx(
              r("WAWebEmojiPickerOption.react"),
              {
                testid: void 0,
                base: a,
                leftEmojiVariation: !0,
                action: function (t) {
                  return D(t, n);
                },
                emoji: t,
                selected: n === b,
              },
              t + n,
            );
          }),
          (t[17] = a),
          (t[18] = D),
          (t[19] = b),
          (t[20] = F))
        : (F = t[20]);
      var O;
      t[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = {
            className:
              "x78zum5 x1a02dak x1qughib x1ncir08 xkgu5aw xdj266r x16q7b9a xat24cr x1sbwfh8",
          }),
          (t[21] = O))
        : (O = t[21]);
      var B;
      t[22] !== a || t[23] !== $ || t[24] !== R
        ? ((B = function (t, n) {
            return s.jsx(
              r("WAWebEmojiPickerOption.react"),
              {
                testid: void 0,
                base: a,
                rightEmojiVariation: !0,
                selected: n === R,
                action: function (t) {
                  return $(t, n);
                },
                emoji: t,
              },
              t + n,
            );
          }),
          (t[22] = a),
          (t[23] = $),
          (t[24] = R),
          (t[25] = B))
        : (B = t[25]);
      var W, q;
      t[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = {
            className:
              "x78zum5 x1q0g3np xaw8158 x109j2v6 x1ktv7sr x13fuv20 x1uebkx7",
          }),
          (q = { className: "x1691je0 x2b8uid x1j8ymqv" }),
          (t[26] = W),
          (t[27] = q))
        : ((W = t[26]), (q = t[27]));
      var U;
      t[28] !== n || t[29] !== a || t[30] !== u
        ? ((U = function (t) {
            return n(t, u, a);
          }),
          (t[28] = n),
          (t[29] = a),
          (t[30] = u),
          (t[31] = U))
        : (U = t[31]);
      var V;
      t[32] !== a || t[33] !== U
        ? ((V = s.jsx(
            "span",
            babelHelpers.extends({}, q, {
              children: s.jsx(r("WAWebEmojiPickerOption.react"), {
                base: a,
                action: U,
                emoji: a,
                showBaseEmoji: !0,
                testid: void 0,
              }),
            }),
          )),
          (t[32] = a),
          (t[33] = U),
          (t[34] = V))
        : (V = t[34]);
      var H;
      t[35] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = { className: "x1691je0 x2b8uid x4tra6z" }), (t[35] = H))
        : (H = t[35]);
      var G = M(),
        z;
      t[36] !== H || t[37] !== G
        ? ((z = s.jsx("span", babelHelpers.extends({}, H, { children: G }))),
          (t[36] = H),
          (t[37] = G),
          (t[38] = z))
        : (z = t[38]);
      var j;
      return (
        t[39] !== W || t[40] !== V || t[41] !== z
          ? ((j = s.jsxs(
              "div",
              babelHelpers.extends({}, W, { children: [V, z] }),
            )),
            (t[39] = W),
            (t[40] = V),
            (t[41] = z),
            (t[42] = j))
          : (j = t[42]),
        s.jsxs(
          "div",
          babelHelpers.extends({}, w, {
            children: [
              s.jsx("div", babelHelpers.extends({}, A, { children: h.map(F) })),
              s.jsx("div", babelHelpers.extends({}, O, { children: h.map(B) })),
              j,
            ],
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
