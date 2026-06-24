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
      var n = o("react-compiler-runtime").c(68),
        a = t.ariaLabel,
        i = t.disabled,
        l = t.largeSkip,
        s = t.max,
        c = t.min,
        d = t.onChange,
        p = t.onCommit,
        _ = t.smallSkip,
        g = t.theme,
        h = t.value,
        y = t.valueText,
        C = m(null),
        b = C[0],
        v = C[1],
        S;
      n[0] !== d
        ? ((S = function (t) {
            (v(t), d == null || d(t));
          }),
          (n[0] = d),
          (n[1] = S))
        : (S = n[1]);
      var R = S,
        L;
      n[2] !== p
        ? ((L = function (t) {
            (v(null), p == null || p(t));
          }),
          (n[2] = p),
          (n[3] = L))
        : (L = n[3]);
      var E = L,
        k = b != null ? b : h,
        I = 100 * r("clamp")((k - c) / (s - c), 0, 1),
        T = I + "%",
        D;
      n[4] !== T ? ((D = { width: T }), (n[4] = T), (n[5] = D)) : (D = n[5]);
      var x = D,
        $ = "translateX(" + I + "%)",
        P;
      n[6] !== $
        ? ((P = { transform: $ }), (n[6] = $), (n[7] = P))
        : (P = n[7]);
      var N = P,
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
        Q,
        X,
        Y;
      if (
        n[8] !== a ||
        n[9] !== i ||
        n[10] !== R ||
        n[11] !== E ||
        n[12] !== l ||
        n[13] !== s ||
        n[14] !== x ||
        n[15] !== _ ||
        n[16] !== g ||
        n[17] !== N ||
        n[18] !== h ||
        n[19] !== y
      ) {
        var J = f(g),
          Z = J.progressStyle,
          ee = J.thumbStyle,
          te = J.trackStyle;
        ((M = r("WAWebPttComposerRangeInput.react")),
          (B = a),
          (W = h),
          (q = y),
          (U = 0),
          (V = s),
          (H = _),
          (G = l),
          (z = R),
          (j = E),
          (K = i),
          n[38] === Symbol.for("react.memo_cache_sentinel")
            ? ((A = (e || (e = r("stylex"))).props(
                o("WAWebMessageSmoothRangeInput.stylex").styles.container,
              )),
              (n[38] = A))
            : (A = n[38]),
          (F = u.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                o("WAWebMessageSmoothRangeInput.stylex").styles.track,
                te,
              ),
            ),
          )),
          (O = u.jsx(
            "span",
            babelHelpers.extends(
              {},
              e.props(
                o("WAWebMessageSmoothRangeInput.stylex").styles.progress,
                Z,
                i === !0 &&
                  o("WAWebMessageSmoothRangeInput.stylex").styles
                    .progressDisabled,
              ),
              { style: x },
            ),
          )),
          n[39] === Symbol.for("react.memo_cache_sentinel")
            ? ((w = {
                className: "x78zum5 xh8yej3 xdj266r xmpx0yj xat24cr x1eiic4d",
              }),
              (X = { className: "x1n2onr6 x1tcabb7 xh8yej3" }),
              (n[39] = w),
              (n[40] = X))
            : ((w = n[39]), (X = n[40])),
          (Y = N),
          (Q = e.props(
            o("WAWebMessageSmoothRangeInput.stylex").styles.thumb,
            ee,
            i === !0 &&
              o("WAWebMessageSmoothRangeInput.stylex").styles.thumbDisabled,
          )),
          (n[8] = a),
          (n[9] = i),
          (n[10] = R),
          (n[11] = E),
          (n[12] = l),
          (n[13] = s),
          (n[14] = x),
          (n[15] = _),
          (n[16] = g),
          (n[17] = N),
          (n[18] = h),
          (n[19] = y),
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
          (n[35] = Q),
          (n[36] = X),
          (n[37] = Y));
      } else
        ((M = n[20]),
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
          (Q = n[35]),
          (X = n[36]),
          (Y = n[37]));
      var ne;
      n[41] !== Q
        ? ((ne = u.jsx("div", babelHelpers.extends({}, Q))),
          (n[41] = Q),
          (n[42] = ne))
        : (ne = n[42]);
      var re;
      n[43] !== ne || n[44] !== X || n[45] !== Y
        ? ((re = u.jsx(
            "div",
            babelHelpers.extends({}, X, { style: Y, children: ne }),
          )),
          (n[43] = ne),
          (n[44] = X),
          (n[45] = Y),
          (n[46] = re))
        : (re = n[46]);
      var oe;
      n[47] !== w || n[48] !== re
        ? ((oe = u.jsx("div", babelHelpers.extends({}, w, { children: re }))),
          (n[47] = w),
          (n[48] = re),
          (n[49] = oe))
        : (oe = n[49]);
      var ae;
      n[50] !== A || n[51] !== F || n[52] !== O || n[53] !== oe
        ? ((ae = u.jsxs(
            "div",
            babelHelpers.extends({}, A, { children: [F, O, oe] }),
          )),
          (n[50] = A),
          (n[51] = F),
          (n[52] = O),
          (n[53] = oe),
          (n[54] = ae))
        : (ae = n[54]);
      var ie;
      return (
        n[55] !== M ||
        n[56] !== B ||
        n[57] !== W ||
        n[58] !== q ||
        n[59] !== U ||
        n[60] !== V ||
        n[61] !== H ||
        n[62] !== G ||
        n[63] !== z ||
        n[64] !== j ||
        n[65] !== K ||
        n[66] !== ae
          ? ((ie = u.jsx(M, {
              ariaLabel: B,
              value: W,
              valueText: q,
              min: U,
              max: V,
              smallSkip: H,
              largeSkip: G,
              onChange: z,
              onCommit: j,
              disabled: K,
              children: ae,
            })),
            (n[55] = M),
            (n[56] = B),
            (n[57] = W),
            (n[58] = q),
            (n[59] = U),
            (n[60] = V),
            (n[61] = H),
            (n[62] = G),
            (n[63] = z),
            (n[64] = j),
            (n[65] = K),
            (n[66] = ae),
            (n[67] = ie))
          : (ie = n[67]),
        ie
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
