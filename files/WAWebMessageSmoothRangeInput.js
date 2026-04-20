__d(
  "WAWebMessageSmoothRangeInput",
  [
    "$InternalEnum",
    "WAWebMessageSmoothRangeInput.stylex",
    "WAWebPttComposerRangeInput.react",
    "clamp",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useState,
      p = n("$InternalEnum").Mirrored([
        "AUDIO_OUTGOING_UNPLAYED",
        "AUDIO_OUTGOING_PLAYED",
        "AUDIO_INCOMING_UNPLAYED",
        "AUDIO_INCOMING_PLAYED",
      ]);
    function _(t) {
      var n = o("react-compiler-runtime").c(65),
        a = t.disabled,
        i = t.largeSkip,
        l = t.max,
        s = t.min,
        c = t.onChange,
        d = t.onCommit,
        p = t.smallSkip,
        _ = t.theme,
        g = t.value,
        h = t.valueText,
        y = m(null),
        C = y[0],
        b = y[1],
        v;
      n[0] !== c
        ? ((v = function (t) {
            (b(t), c == null || c(t));
          }),
          (n[0] = c),
          (n[1] = v))
        : (v = n[1]);
      var S = v,
        R;
      n[2] !== d
        ? ((R = function (t) {
            (b(null), d == null || d(t));
          }),
          (n[2] = d),
          (n[3] = R))
        : (R = n[3]);
      var L = R,
        E = C != null ? C : g,
        k = 100 * r("clamp")((E - s) / (l - s), 0, 1),
        I = k + "%",
        T;
      n[4] !== I ? ((T = { width: I }), (n[4] = I), (n[5] = T)) : (T = n[5]);
      var D = T,
        x = "translateX(" + k + "%)",
        $;
      n[6] !== x
        ? (($ = { transform: x }), (n[6] = x), (n[7] = $))
        : ($ = n[7]);
      var P = $,
        N,
        M,
        w,
        A,
        F,
        O,
        B,
        W,
        q,
        U,
        V,
        H,
        G,
        z,
        j,
        K,
        Q;
      if (
        n[8] !== a ||
        n[9] !== S ||
        n[10] !== L ||
        n[11] !== i ||
        n[12] !== l ||
        n[13] !== D ||
        n[14] !== p ||
        n[15] !== _ ||
        n[16] !== P ||
        n[17] !== g ||
        n[18] !== h
      ) {
        var X = f(_),
          Y = X.progressStyle,
          J = X.thumbStyle,
          Z = X.trackStyle;
        ((N = r("WAWebPttComposerRangeInput.react")),
          (F = g),
          (O = h),
          (B = 0),
          (W = l),
          (q = p),
          (U = i),
          (V = S),
          (H = L),
          (G = a),
          n[36] === Symbol.for("react.memo_cache_sentinel")
            ? ((M = (e || (e = r("stylex"))).props(
                o("WAWebMessageSmoothRangeInput.stylex").styles.container,
              )),
              (n[36] = M))
            : (M = n[36]),
          (w = u.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                o("WAWebMessageSmoothRangeInput.stylex").styles.track,
                Z,
              ),
            ),
          )),
          (A = u.jsx(
            "span",
            babelHelpers.extends(
              {},
              e.props(
                o("WAWebMessageSmoothRangeInput.stylex").styles.progress,
                Y,
                a === !0 &&
                  o("WAWebMessageSmoothRangeInput.stylex").styles
                    .progressDisabled,
              ),
              { style: D },
            ),
          )),
          n[37] === Symbol.for("react.memo_cache_sentinel")
            ? ((Q = {
                className: "x78zum5 xh8yej3 xdj266r xmpx0yj xat24cr x1eiic4d",
              }),
              (j = { className: "x1n2onr6 x1tcabb7 xh8yej3" }),
              (n[37] = j),
              (n[38] = Q))
            : ((j = n[37]), (Q = n[38])),
          (K = P),
          (z = e.props(
            o("WAWebMessageSmoothRangeInput.stylex").styles.thumb,
            J,
            a === !0 &&
              o("WAWebMessageSmoothRangeInput.stylex").styles.thumbDisabled,
          )),
          (n[8] = a),
          (n[9] = S),
          (n[10] = L),
          (n[11] = i),
          (n[12] = l),
          (n[13] = D),
          (n[14] = p),
          (n[15] = _),
          (n[16] = P),
          (n[17] = g),
          (n[18] = h),
          (n[19] = N),
          (n[20] = M),
          (n[21] = w),
          (n[22] = A),
          (n[23] = F),
          (n[24] = O),
          (n[25] = B),
          (n[26] = W),
          (n[27] = q),
          (n[28] = U),
          (n[29] = V),
          (n[30] = H),
          (n[31] = G),
          (n[32] = z),
          (n[33] = j),
          (n[34] = K),
          (n[35] = Q));
      } else
        ((N = n[19]),
          (M = n[20]),
          (w = n[21]),
          (A = n[22]),
          (F = n[23]),
          (O = n[24]),
          (B = n[25]),
          (W = n[26]),
          (q = n[27]),
          (U = n[28]),
          (V = n[29]),
          (H = n[30]),
          (G = n[31]),
          (z = n[32]),
          (j = n[33]),
          (K = n[34]),
          (Q = n[35]));
      var ee;
      n[39] !== z
        ? ((ee = u.jsx("div", babelHelpers.extends({}, z))),
          (n[39] = z),
          (n[40] = ee))
        : (ee = n[40]);
      var te;
      n[41] !== ee || n[42] !== j || n[43] !== K
        ? ((te = u.jsx(
            "div",
            babelHelpers.extends({}, j, { style: K, children: ee }),
          )),
          (n[41] = ee),
          (n[42] = j),
          (n[43] = K),
          (n[44] = te))
        : (te = n[44]);
      var ne;
      n[45] !== te || n[46] !== Q
        ? ((ne = u.jsx("div", babelHelpers.extends({}, Q, { children: te }))),
          (n[45] = te),
          (n[46] = Q),
          (n[47] = ne))
        : (ne = n[47]);
      var re;
      n[48] !== M || n[49] !== w || n[50] !== A || n[51] !== ne
        ? ((re = u.jsxs(
            "div",
            babelHelpers.extends({}, M, { children: [w, A, ne] }),
          )),
          (n[48] = M),
          (n[49] = w),
          (n[50] = A),
          (n[51] = ne),
          (n[52] = re))
        : (re = n[52]);
      var oe;
      return (
        n[53] !== N ||
        n[54] !== F ||
        n[55] !== O ||
        n[56] !== B ||
        n[57] !== W ||
        n[58] !== q ||
        n[59] !== U ||
        n[60] !== V ||
        n[61] !== H ||
        n[62] !== G ||
        n[63] !== re
          ? ((oe = u.jsx(N, {
              value: F,
              valueText: O,
              min: B,
              max: W,
              smallSkip: q,
              largeSkip: U,
              onChange: V,
              onCommit: H,
              disabled: G,
              children: re,
            })),
            (n[53] = N),
            (n[54] = F),
            (n[55] = O),
            (n[56] = B),
            (n[57] = W),
            (n[58] = q),
            (n[59] = U),
            (n[60] = V),
            (n[61] = H),
            (n[62] = G),
            (n[63] = re),
            (n[64] = oe))
          : (oe = n[64]),
        oe
      );
    }
    function f(e) {
      switch (e) {
        case p.AUDIO_OUTGOING_UNPLAYED:
          return {
            trackStyle: o("WAWebMessageSmoothRangeInput.stylex").styles
              .trackOutgoing,
            thumbStyle: o("WAWebMessageSmoothRangeInput.stylex").styles
              .thumbOutgoingUnplayed,
            progressStyle: o("WAWebMessageSmoothRangeInput.stylex").styles
              .progressOutgoingUnplayed,
          };
        case p.AUDIO_OUTGOING_PLAYED:
          return {
            trackStyle: o("WAWebMessageSmoothRangeInput.stylex").styles
              .trackOutgoing,
            thumbStyle: o("WAWebMessageSmoothRangeInput.stylex").styles
              .thumbOutgoingPlayed,
            progressStyle: o("WAWebMessageSmoothRangeInput.stylex").styles
              .progressOutgoingPlayed,
          };
        case p.AUDIO_INCOMING_UNPLAYED:
          return {
            trackStyle: o("WAWebMessageSmoothRangeInput.stylex").styles
              .trackIncoming,
            thumbStyle: o("WAWebMessageSmoothRangeInput.stylex").styles
              .thumbIncomingUnplayed,
            progressStyle: o("WAWebMessageSmoothRangeInput.stylex").styles
              .progressIncomingUnplayed,
          };
        case p.AUDIO_INCOMING_PLAYED:
          return {
            trackStyle: o("WAWebMessageSmoothRangeInput.stylex").styles
              .trackIncoming,
            thumbStyle: o("WAWebMessageSmoothRangeInput.stylex").styles
              .thumbIncomingPlayed,
            progressStyle: o("WAWebMessageSmoothRangeInput.stylex").styles
              .progressIncomingPlayed,
          };
      }
    }
    ((l.SmoothRangeInputTheme = p), (l.SmoothRangeInput = _));
  },
  98,
);
