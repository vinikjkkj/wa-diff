__d(
  "WAWebMessageSmoothRangeInput",
  [
    "cx",
    "$InternalEnum",
    "WAWebClassnames",
    "WAWebPttComposerRangeInput.react",
    "clamp",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useState,
      p = n("$InternalEnum").Mirrored([
        "AUDIO_OUTGOING_UNPLAYED",
        "AUDIO_OUTGOING_PLAYED",
        "AUDIO_INCOMING_UNPLAYED",
        "AUDIO_INCOMING_PLAYED",
      ]);
    function _(e) {
      var t = o("react-compiler-runtime").c(33),
        n = e.disabled,
        a = e.largeSkip,
        i = e.max,
        l = e.min,
        s = e.onChange,
        c = e.onCommit,
        d = e.smallSkip,
        p = e.theme,
        _ = e.value,
        g = e.valueText,
        h = m(null),
        y = h[0],
        C = h[1],
        b;
      t[0] !== s
        ? ((b = function (t) {
            (C(t), s == null || s(t));
          }),
          (t[0] = s),
          (t[1] = b))
        : (b = t[1]);
      var v = b,
        S;
      t[2] !== c
        ? ((S = function (t) {
            (C(null), c == null || c(t));
          }),
          (t[2] = c),
          (t[3] = S))
        : (S = t[3]);
      var R = S,
        L = y != null ? y : _,
        E = 100 * r("clamp")((L - l) / (i - l), 0, 1),
        k = E + "%",
        I;
      t[4] !== k ? ((I = { width: k }), (t[4] = k), (t[5] = I)) : (I = t[5]);
      var T = I,
        D = "translateX(" + E + "%)",
        x;
      t[6] !== D
        ? ((x = { transform: D }), (t[6] = D), (t[7] = x))
        : (x = t[7]);
      var $ = x,
        P;
      if (t[8] !== n || t[9] !== p) {
        var N;
        ((P = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          "_ahw8",
          f(p),
          ((N = {}), (N._ahwh = n), N),
        )),
          (t[8] = n),
          (t[9] = p),
          (t[10] = P));
      } else P = t[10];
      var M = P,
        w;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = u.jsx("div", { className: "_ahw9" })), (t[11] = w))
        : (w = t[11]);
      var A;
      t[12] !== T
        ? ((A = u.jsx("span", { className: "_ahwi", style: T })),
          (t[12] = T),
          (t[13] = A))
        : (A = t[13]);
      var F, O;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = {
            className: "x78zum5 xh8yej3 xdj266r xmpx0yj xat24cr x1eiic4d",
          }),
          (F = { className: "x1n2onr6 x1tcabb7 xh8yej3" }),
          (t[14] = F),
          (t[15] = O))
        : ((F = t[14]), (O = t[15]));
      var B;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = u.jsx("div", { className: "_ahwg" })), (t[16] = B))
        : (B = t[16]);
      var W;
      t[17] !== $
        ? ((W = u.jsx(
            "div",
            babelHelpers.extends({}, O, {
              children: u.jsx(
                "div",
                babelHelpers.extends({}, F, { style: $, children: B }),
              ),
            }),
          )),
          (t[17] = $),
          (t[18] = W))
        : (W = t[18]);
      var q;
      t[19] !== M || t[20] !== W || t[21] !== A
        ? ((q = u.jsxs("div", { className: M, children: [w, A, W] })),
          (t[19] = M),
          (t[20] = W),
          (t[21] = A),
          (t[22] = q))
        : (q = t[22]);
      var U;
      return (
        t[23] !== n ||
        t[24] !== v ||
        t[25] !== R ||
        t[26] !== a ||
        t[27] !== i ||
        t[28] !== d ||
        t[29] !== q ||
        t[30] !== _ ||
        t[31] !== g
          ? ((U = u.jsx(r("WAWebPttComposerRangeInput.react"), {
              value: _,
              valueText: g,
              min: 0,
              max: i,
              smallSkip: d,
              largeSkip: a,
              onChange: v,
              onCommit: R,
              disabled: n,
              children: q,
            })),
            (t[23] = n),
            (t[24] = v),
            (t[25] = R),
            (t[26] = a),
            (t[27] = i),
            (t[28] = d),
            (t[29] = q),
            (t[30] = _),
            (t[31] = g),
            (t[32] = U))
          : (U = t[32]),
        U
      );
    }
    function f(e) {
      switch (e) {
        case p.AUDIO_OUTGOING_UNPLAYED:
          return "_ahwc";
        case p.AUDIO_OUTGOING_PLAYED:
          return "_ahwd";
        case p.AUDIO_INCOMING_UNPLAYED:
          return "_ahwa";
        case p.AUDIO_INCOMING_PLAYED:
          return "_ahwb";
      }
    }
    ((l.SmoothRangeInputTheme = p), (l.SmoothRangeInput = _));
  },
  98,
);
