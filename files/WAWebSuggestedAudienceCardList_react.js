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
      var a = t.entryPoint,
        i = t.onCardPress,
        l = _(!0),
        u = l[0],
        d = l[1],
        g = _(null),
        h = g[0],
        y = g[1];
      p(function () {
        var e = !1;
        return (
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t = yield (s || (s = n("Promise"))).all(
              o("WAWebSuggestedAudienceCards").SUGGESTED_AUDIENCE_CARDS.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = yield o(
                          "WAWebSuggestedAudienceCards",
                        ).resolveCardExpression(e),
                        n = yield o(
                          "WAWebBizBroadcastsRecipientUtils",
                        ).isPredicateEligibleForSuggestedCard(t);
                      return { eligible: n, id: e.id };
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            );
            e ||
              y(
                new Set(
                  t
                    .filter(function (e) {
                      return e.eligible;
                    })
                    .map(function (e) {
                      return e.id;
                    }),
                ),
              );
          })(),
          function () {
            e = !0;
          }
        );
      }, []);
      var C = m(function () {
        d(function (e) {
          return !e;
        });
      }, []);
      if (
        (p(
          function () {
            h != null &&
              o(
                "WAWebBusinessBroadcastUserJourneyLogger",
              ).BusinessBroadcastUserJourneyLogger.suggestedAudienceCardsViewed(
                h.size,
                a,
                o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME,
              );
          },
          [h, a],
        ),
        h == null || h.size === 0)
      )
        return null;
      var b = o("WAWebSuggestedAudienceCards").SUGGESTED_AUDIENCE_CARDS.filter(
          function (e) {
            return h.has(e.id);
          },
        ),
        v = b.length === 4 ? f.gridTwoColumns : f.gridThreeColumns;
      return c.jsxs("div", {
        "data-testid": void 0,
        children: [
          c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: f.header,
            children: [
              c.jsxs(o("WAWebFlex.react").FlexColumn, {
                grow: 1,
                children: [
                  c.jsx(r("WDSText.react"), {
                    type: "Body1Emphasized",
                    colorName: "contentDefault",
                    children: o(
                      "WAWebBizBroadcastsAudienceStrings",
                    ).getSuggestedAudiencesSectionTitle(),
                  }),
                  c.jsx(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "contentDeemphasized",
                    children: o(
                      "WAWebBizBroadcastsAudienceStrings",
                    ).getSuggestedAudiencesSectionSubtitle(),
                  }),
                ],
              }),
              c.jsx(r("WDSButton.react"), {
                Icon: r(
                  u ? "WDSIconIcExpandLess.react" : "WDSIconIcExpandMore.react",
                ),
                onPress: C,
                size: "small",
                variant: "tonal",
              }),
            ],
          }),
          u &&
            c.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(f.cardsContainer, v),
                {
                  children: b.map(function (e) {
                    return c.jsx(
                      r("WAWebSuggestedAudienceCard.react"),
                      { card: e, onPress: i },
                      e.id,
                    );
                  }),
                },
              ),
            ),
        ],
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  98,
);
