__d(
  "WAWebGlanceInsight.react",
  [
    "fbt",
    "WAWebBaseShimmerComponents.react",
    "WAWebDeltaArrow.react",
    "WAWebDeltaText.react",
    "WAWebFlex.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebNewsletterMetricUtils",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        container: {
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopColor: "xnj1f2r",
          borderInlineEndColor: "x2uibgs",
          borderBottomColor: "xkveyfu",
          borderInlineStartColor: "x12llq9",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "xhl9efl",
          borderEndStartRadius: "xj65ea0",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        delta: {
          height: "x1fgtraw",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        button: { cursor: "x1ypdohk", $$css: !0 },
        paddingAll16: {
          paddingTop: "x1p57kb1",
          paddingInlineEnd: "xvtqlqk",
          paddingBottom: "xvpt6g3",
          paddingInlineStart: "xdx6fka",
          $$css: !0,
        },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(24),
        n = e.insight,
        a = e.label,
        i = e.loading,
        l = e.onClick,
        d = e.showDelta,
        m = e.testid,
        p = e.xstyle,
        _ = i === void 0 ? !1 : i,
        f = d === void 0 ? !0 : d,
        g;
      t[0] !== n
        ? ((g = n != null ? n : {}), (t[0] = n), (t[1] = g))
        : (g = t[1]);
      var h = g,
        y = h.delta,
        C = h.value,
        b = l == null || C == null,
        v;
      t[2] !== y || t[3] !== b || t[4] !== _ || t[5] !== f || t[6] !== C
        ? ((v = _
            ? u.jsx(o("WAWebFlex.react").FlexItem, {
                paddingTop: 4,
                paddingBottom: 4,
                children: u.jsx(
                  o("WAWebBaseShimmerComponents.react").RectangleShimmer,
                  { height: 20, width: 36 },
                ),
              })
            : u.jsxs(u.Fragment, {
                children: [
                  u.jsx(o("WAWebText.react").WAWebTextLarge, {
                    testid: void 0,
                    color: b ? "secondaryLighter" : "primary",
                    children:
                      C != null
                        ? r("WAWebL10N").d(C)
                        : s._(/*BTDS*/ "\u2014 \u2014"),
                  }),
                  f &&
                    y != null &&
                    y !== o("WAWebNewsletterMetricUtils").DELTA_INFINITE &&
                    !o("WAWebNewsletterMetricUtils").isDeltaValueZero(y) &&
                    u.jsxs(o("WAWebFlex.react").FlexRow, {
                      align: "center",
                      paddingStart: 4,
                      xstyle: c.delta,
                      testid: void 0,
                      children: [
                        u.jsx(r("WAWebDeltaArrow.react"), {
                          delta: y,
                          size: 32,
                        }),
                        u.jsx(r("WAWebDeltaText.react"), {
                          delta: y,
                          size: "large",
                        }),
                      ],
                    }),
                ],
              })),
          (t[2] = y),
          (t[3] = b),
          (t[4] = _),
          (t[5] = f),
          (t[6] = C),
          (t[7] = v))
        : (v = t[7]);
      var S = v,
        R = l && c.button,
        L;
      t[8] !== R || t[9] !== p
        ? ((L = [c.container, c.paddingAll16, R, p]),
          (t[8] = R),
          (t[9] = p),
          (t[10] = L))
        : (L = t[10]);
      var E;
      t[11] !== S
        ? ((E = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            children: S,
          })),
          (t[11] = S),
          (t[12] = E))
        : (E = t[12]);
      var k = b ? "secondaryLighter" : "primary",
        I;
      t[13] !== a || t[14] !== k
        ? ((I = u.jsx(o("WAWebText.react").WAWebTextSmall, {
            color: k,
            textWrap: "nowrap",
            children: a,
          })),
          (t[13] = a),
          (t[14] = k),
          (t[15] = I))
        : (I = t[15]);
      var T;
      t[16] !== E || t[17] !== I
        ? ((T = u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [E, I] })),
          (t[16] = E),
          (t[17] = I),
          (t[18] = T))
        : (T = t[18]);
      var D;
      return (
        t[19] !== l || t[20] !== T || t[21] !== L || t[22] !== m
          ? ((D = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              "data-testid": void 0,
              xstyle: L,
              onClick: l,
              children: T,
            })),
            (t[19] = l),
            (t[20] = T),
            (t[21] = L),
            (t[22] = m),
            (t[23] = D))
          : (D = t[23]),
        D
      );
    }
    l.default = d;
  },
  226,
);
