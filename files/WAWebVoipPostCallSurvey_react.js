__d(
  "WAWebVoipPostCallSurvey.react",
  [
    "fbt",
    "WAWebAppRatingStarButton.react",
    "WAWebFlex.react",
    "WAWebNoop",
    "WDSButton.react",
    "WDSColorStyles.stylex",
    "WDSText.react",
    "WDSThemes",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = {
        surveyContainer: { width: "xh8yej3", height: "x5yr21d", $$css: !0 },
        textContainer: {
          maxWidth: "x1j9u4d2",
          textAlign: "x2b8uid",
          marginTop: "x98l61r",
          marginInlineEnd: "xviac27",
          marginBottom: "x1ua1l7f",
          marginInlineStart: "xlese2p",
          $$css: !0,
        },
        textContainerCompact: {
          maxWidth: "x1j9u4d2",
          textAlign: "x2b8uid",
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "x1nzty39",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      },
      m = [1, 2, 3, 4, 5];
    function p(e) {
      var t = o("react-compiler-runtime").c(38),
        n = e.isCompact,
        a = e.onDismiss,
        i = e.onInteract,
        l = e.onSubmit,
        p = n === void 0 ? !1 : n,
        _ = i === void 0 ? r("WAWebNoop") : i,
        f = l === void 0 ? r("WAWebNoop") : l,
        g = c(0),
        h = g[0],
        y = g[1],
        C = c(0),
        b = C[0],
        v = C[1],
        S;
      t[0] !== a || t[1] !== f || t[2] !== h
        ? ((S = function () {
            (h > 0 && f(h), a());
          }),
          (t[0] = a),
          (t[1] = f),
          (t[2] = h),
          (t[3] = S))
        : (S = t[3]);
      var R = S,
        L;
      t[4] !== a
        ? ((L = function () {
            a();
          }),
          (t[4] = a),
          (t[5] = L))
        : (L = t[5]);
      var E = L,
        k;
      t[6] !== _
        ? ((k = function (t) {
            (y(t), _());
          }),
          (t[6] = _),
          (t[7] = k))
        : (k = t[7]);
      var I = k,
        T;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = function (t) {
            v(t);
          }),
          (t[8] = T))
        : (T = t[8]);
      var D = T,
        x;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = function () {
            v(0);
          }),
          (t[9] = x))
        : (x = t[9]);
      var $ = x,
        P;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = [
            d.surveyContainer,
            o("WDSColorStyles.stylex").WDSBackgroundColorStyles
              .backgroundWashPlain,
          ]),
          (t[10] = P))
        : (P = t[10]);
      var N = p ? 8 : 16,
        M = p ? d.textContainerCompact : d.textContainer,
        w;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = u.jsx(r("WDSText.react"), {
            type: "Body1Emphasized",
            colorName: "contentDeemphasized",
            children: s._(/*BTDS*/ "How was the quality of your call?"),
          })),
          (t[11] = w))
        : (w = t[11]);
      var A;
      t[12] !== p
        ? ((A =
            !p &&
            u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              children: s._(
                /*BTDS*/ "Your answer is anonymous. WhatsApp uses it to help improve your call experience.",
              ),
            })),
          (t[12] = p),
          (t[13] = A))
        : (A = t[13]);
      var F;
      t[14] !== M || t[15] !== A
        ? ((F = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            gap: 4,
            xstyle: M,
            children: [w, A],
          })),
          (t[14] = M),
          (t[15] = A),
          (t[16] = F))
        : (F = t[16]);
      var O;
      t[17] !== I || t[18] !== b || t[19] !== h
        ? ((O = m.map(function (e) {
            return u.jsx(
              r("WAWebAppRatingStarButton.react"),
              {
                ariaLabel: s._(/*BTDS*/ "Rate {starValue} stars", [
                  s._param("starValue", e),
                ]),
                currentRating: h,
                hoveredRating: b,
                onClick: I,
                onHover: D,
                onHoverEnd: $,
                value: e,
              },
              e,
            );
          })),
          (t[17] = I),
          (t[18] = b),
          (t[19] = h),
          (t[20] = O))
        : (O = t[20]);
      var B;
      t[21] !== O
        ? ((B = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            gap: 8,
            children: O,
          })),
          (t[21] = O),
          (t[22] = B))
        : (B = t[22]);
      var W;
      t[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = s._(/*BTDS*/ "Not now")), (t[23] = W))
        : (W = t[23]);
      var q;
      t[24] !== E
        ? ((q = u.jsx(r("WDSButton.react"), {
            label: W,
            size: "medium",
            variant: "outline",
            xstyle: o("WDSThemes").WDSLightTheme,
            onPress: E,
          })),
          (t[24] = E),
          (t[25] = q))
        : (q = t[25]);
      var U;
      t[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = s._(/*BTDS*/ "Submit")), (t[26] = U))
        : (U = t[26]);
      var V = h === 0,
        H;
      t[27] !== R || t[28] !== V
        ? ((H = u.jsx(r("WDSButton.react"), {
            label: U,
            size: "medium",
            variant: "filled",
            disabled: V,
            onPress: R,
          })),
          (t[27] = R),
          (t[28] = V),
          (t[29] = H))
        : (H = t[29]);
      var G;
      t[30] !== q || t[31] !== H
        ? ((G = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            gap: 8,
            children: [q, H],
          })),
          (t[30] = q),
          (t[31] = H),
          (t[32] = G))
        : (G = t[32]);
      var z;
      return (
        t[33] !== N || t[34] !== F || t[35] !== B || t[36] !== G
          ? ((z = u.jsx(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              justify: "center",
              xstyle: P,
              children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
                align: "center",
                gap: N,
                children: [F, B, G],
              }),
            })),
            (t[33] = N),
            (t[34] = F),
            (t[35] = B),
            (t[36] = G),
            (t[37] = z))
          : (z = t[37]),
        z
      );
    }
    l.default = p;
  },
  226,
);
