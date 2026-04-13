__d(
  "WAWebBizAdCreationAudienceDetails.react",
  [
    "fbt",
    "CometPlaceholder.react",
    "WAWebBizAdCreationAudienceTargetingSentences.react",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdLogger",
    "WAWebBizShimmerRows.react",
    "WAWebFlex.react",
    "WDSButton.react",
    "WDSIconIcEdit.react",
    "react",
    "react-compiler-runtime",
    "useWAWebBizAdCreationOpenTargetingModal",
    "withWAWebBizAdCreationSpecContext",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useContext,
      p = 40,
      _ = {
        container: {
          backgroundColor: "xs1q97v",
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "xhl9efl",
          borderEndStartRadius: "xj65ea0",
          width: "x19sv2k2",
          boxSizing: "x9f619",
          marginInlineStart: "x11hdunq",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "x5s3kwk",
          paddingTop: "x1xrf6ya",
          paddingBottom: "xscbp6u",
          $$css: !0,
        },
        endAddon: { color: "xhslqc4", $$css: !0 },
      };
    function f(e) {
      var t = o("react-compiler-runtime").c(1),
        n;
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = u.jsx(r("WDSIconIcEdit.react"), {
              colorName: "contentActionEmphasized",
              height: 20,
              width: 20,
            })),
            (t[0] = n))
          : (n = t[0]),
        n
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(25),
        n = e.currentAudienceData,
        a = e.adAccountID,
        l = e.currency,
        c = e.dailyBudget,
        d = e.legacyAccountID,
        p = e.selectedPublisherPlatforms,
        g = m(r("WAWebBizAdCreationLoggerContext")),
        h;
      t[0] !== a ||
      t[1] !== l ||
      t[2] !== n ||
      t[3] !== c ||
      t[4] !== d ||
      t[5] !== p
        ? ((h = {
            adAccountID: a,
            audienceData: n,
            dailyBudget: c,
            currency: l,
            legacyAdAccountID: d,
            mode: "edit",
            selectedPublisherPlatforms: p,
            templateTargetSpecString: null,
            legacyAccountID: d,
          }),
          (t[0] = a),
          (t[1] = l),
          (t[2] = n),
          (t[3] = c),
          (t[4] = d),
          (t[5] = p),
          (t[6] = h))
        : (h = t[6]);
      var y = r("useWAWebBizAdCreationOpenTargetingModal")(h),
        C;
      t[7] !== a ||
      t[8] !== n.audienceID ||
      t[9] !== n.audienceOption ||
      t[10] !== g ||
      t[11] !== y
        ? ((C = function () {
            (g != null &&
              r("WAWebBizAdLogger").log({
                event: "edit_audience_click",
                loggerContext: g,
                adAccountID: a,
                extra: {
                  audience_id: n.audienceID,
                  audience_type: n.audienceOption,
                },
              }),
              y());
          }),
          (t[7] = a),
          (t[8] = n.audienceID),
          (t[9] = n.audienceOption),
          (t[10] = g),
          (t[11] = y),
          (t[12] = C))
        : (C = t[12]);
      var b = C,
        v;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = u.jsx(r("WAWebBizShimmerRows.react"), { count: 4 })),
          (t[13] = v))
        : (v = t[13]);
      var S;
      t[14] !== n.audienceOption || t[15] !== n.targetSpec || t[16] !== d
        ? ((S = u.jsx(o("WAWebFlex.react").FlexItem, {
            align: "stretch",
            children: u.jsx(r("CometPlaceholder.react"), {
              fallback: v,
              name: i.id,
              children: u.jsx(
                r("WAWebBizAdCreationAudienceTargetingSentences.react"),
                {
                  legacyAccountID: d,
                  locationOnly: !1,
                  option: n.audienceOption,
                  targetingSpec: n.targetSpec,
                },
              ),
            }),
          })),
          (t[14] = n.audienceOption),
          (t[15] = n.targetSpec),
          (t[16] = d),
          (t[17] = S))
        : (S = t[17]);
      var R, L;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = s._(/*BTDS*/ "Edit")),
          (L = s._(/*BTDS*/ "Edit")),
          (t[18] = R),
          (t[19] = L))
        : ((R = t[18]), (L = t[19]));
      var E;
      t[20] !== b
        ? ((E = u.jsx(r("WDSButton.react"), {
            Icon: f,
            "aria-label": R,
            label: L,
            onPress: b,
            size: "small",
            variant: "outline",
            xstyle: _.endAddon,
          })),
          (t[20] = b),
          (t[21] = E))
        : (E = t[21]);
      var k;
      return (
        t[22] !== S || t[23] !== E
          ? ((k = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              gap: 16,
              justify: "all",
              xstyle: _.container,
              children: [S, E],
            })),
            (t[22] = S),
            (t[23] = E),
            (t[24] = k))
          : (k = t[24]),
        k
      );
    }
    var h = r("withWAWebBizAdCreationSpecContext")(g, function (e) {
      return {
        adAccountID: e.adAccountData.id,
        dailyBudget: e.budgetData.budget,
        currency: e.adAccountData.currency,
        legacyAccountID: e.adAccountData.legacyAccountID,
        selectedPublisherPlatforms: e.placementData.selectedPublisherPlatforms,
      };
    });
    l.default = h;
  },
  226,
);
