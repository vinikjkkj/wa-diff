__d(
  "WAWebSuggestedAudienceCardList.react",
  [
    "Promise",
    "WAWebBizBroadcastsAudienceStrings",
    "WAWebBizBroadcastsRecipientUtils",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebFlex.react",
    "WAWebSuggestedAudienceCard.react",
    "WAWebSuggestedAudienceCards",
    "WAWebWamEnumSurfaceType",
    "WDSButton.react",
    "WDSIconIcExpandLess.react",
    "WDSIconIcExpandMore.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useState,
      f = {
        cardsContainer: {
          display: "xrvj5dj",
          rowGap: "x1qvou4u",
          columnGap: "x1s70e7g",
          paddingBottom: "xvpt6g3",
          paddingTop: "xexx8yu",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          $$css: !0,
        },
        gridThreeColumns: { gridTemplate: "x13xr5q5", $$css: !0 },
        gridTwoColumns: { gridTemplate: "xnaizws", $$css: !0 },
        header: {
          rowGap: "x1qvou4u",
          columnGap: "x1s70e7g",
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      };
    function g(t) {
      var a = o("react-compiler-runtime").c(17),
        i = t.entryPoint,
        l = t.onCardPress,
        u = _(!0),
        d = u[0],
        m = u[1],
        g = _(null),
        v = g[0],
        S = g[1],
        R,
        L;
      (a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = function () {
            var e = !1;
            return (
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var t = yield (s || (s = n("Promise"))).all(
                  o("WAWebSuggestedAudienceCards").SUGGESTED_AUDIENCE_CARDS.map(
                    b,
                  ),
                );
                e || S(new Set(t.filter(C).map(y)));
              })(),
              function () {
                e = !0;
              }
            );
          }),
          (L = []),
          (a[0] = R),
          (a[1] = L))
        : ((R = a[0]), (L = a[1])),
        p(R, L));
      var E;
      a[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = function () {
            m(h);
          }),
          (a[2] = E))
        : (E = a[2]);
      var k = E,
        I,
        T;
      if (
        (a[3] !== v || a[4] !== i
          ? ((I = function () {
              v != null &&
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.suggestedAudienceCardsViewed(
                  v.size,
                  i,
                  o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME,
                );
            }),
            (T = [v, i]),
            (a[3] = v),
            (a[4] = i),
            (a[5] = I),
            (a[6] = T))
          : ((I = a[5]), (T = a[6])),
        p(I, T),
        v == null || v.size === 0)
      )
        return null;
      var D;
      if (a[7] !== v || a[8] !== d || a[9] !== l) {
        var x;
        a[11] !== v
          ? ((x = function (t) {
              return v.has(t.id);
            }),
            (a[11] = v),
            (a[12] = x))
          : (x = a[12]);
        var $ = o(
            "WAWebSuggestedAudienceCards",
          ).SUGGESTED_AUDIENCE_CARDS.filter(x),
          P = $.length === 4 ? f.gridTwoColumns : f.gridThreeColumns,
          N;
        a[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = c.jsx(r("WDSText.react"), {
              type: "Body1Emphasized",
              colorName: "contentDefault",
              children: o(
                "WAWebBizBroadcastsAudienceStrings",
              ).getSuggestedAudiencesSectionTitle(),
            })),
            (a[13] = N))
          : (N = a[13]);
        var M;
        a[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = c.jsxs(o("WAWebFlex.react").FlexColumn, {
              grow: 1,
              children: [
                N,
                c.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  children: o(
                    "WAWebBizBroadcastsAudienceStrings",
                  ).getSuggestedAudiencesSectionSubtitle(),
                }),
              ],
            })),
            (a[14] = M))
          : (M = a[14]);
        var w = r(
            d ? "WDSIconIcExpandLess.react" : "WDSIconIcExpandMore.react",
          ),
          A;
        (a[15] !== w
          ? ((A = c.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: f.header,
              children: [
                M,
                c.jsx(r("WDSButton.react"), {
                  Icon: w,
                  onPress: k,
                  size: "small",
                  variant: "tonal",
                }),
              ],
            })),
            (a[15] = w),
            (a[16] = A))
          : (A = a[16]),
          (D = c.jsxs("div", {
            "data-testid": void 0,
            children: [
              A,
              d &&
                c.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(f.cardsContainer, P),
                    {
                      children: $.map(function (e) {
                        return c.jsx(
                          r("WAWebSuggestedAudienceCard.react"),
                          { card: e, onPress: l },
                          e.id,
                        );
                      }),
                    },
                  ),
                ),
            ],
          })),
          (a[7] = v),
          (a[8] = d),
          (a[9] = l),
          (a[10] = D));
      } else D = a[10];
      return D;
    }
    function h(e) {
      return !e;
    }
    function y(e) {
      return e.id;
    }
    function C(e) {
      return e.eligible;
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSuggestedAudienceCards").resolveCardExpression(
              e,
            ),
            n = yield o(
              "WAWebBizBroadcastsRecipientUtils",
            ).isPredicateEligibleForSuggestedCard(t);
          return { eligible: n, id: e.id };
        })),
        v.apply(this, arguments)
      );
    }
    l.default = g;
  },
  98,
);
