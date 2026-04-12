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
      var t = e.insight,
        n = e.label,
        a = e.loading,
        i = a === void 0 ? !1 : a,
        l = e.onClick,
        d = e.showDelta,
        m = d === void 0 ? !0 : d,
        p = e.testid,
        _ = e.xstyle,
        f = t != null ? t : {},
        g = f.delta,
        h = f.value,
        y = l == null || h == null,
        C = i
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
                  color: y ? "secondaryLighter" : "primary",
                  children:
                    h != null
                      ? r("WAWebL10N").d(h)
                      : s._(/*BTDS*/ "\u2014 \u2014"),
                }),
                m &&
                  g != null &&
                  g !== o("WAWebNewsletterMetricUtils").DELTA_INFINITE &&
                  !o("WAWebNewsletterMetricUtils").isDeltaValueZero(g) &&
                  u.jsxs(o("WAWebFlex.react").FlexRow, {
                    align: "center",
                    paddingStart: 4,
                    xstyle: c.delta,
                    testid: void 0,
                    children: [
                      u.jsx(r("WAWebDeltaArrow.react"), { delta: g, size: 32 }),
                      u.jsx(r("WAWebDeltaText.react"), {
                        delta: g,
                        size: "large",
                      }),
                    ],
                  }),
              ],
            });
      return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        "data-testid": void 0,
        xstyle: [c.container, c.paddingAll16, l && c.button, _],
        onClick: l,
        children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
          children: [
            u.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              children: C,
            }),
            u.jsx(o("WAWebText.react").WAWebTextSmall, {
              color: y ? "secondaryLighter" : "primary",
              textWrap: "nowrap",
              children: n,
            }),
          ],
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
