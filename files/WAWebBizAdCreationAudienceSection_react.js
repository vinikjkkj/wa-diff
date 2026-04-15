__d(
  "WAWebBizAdCreationAudienceSection.react",
  [
    "fbt",
    "CometRelay",
    "WAWebBizAdCard.react",
    "WAWebBizAdCreationAudienceInfoModal.react",
    "WAWebBizAdCreationAudienceListRoot.react",
    "WAWebBizAdCreationAudienceSectionQuery.graphql",
    "WAWebBizAdCreationConsts",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdCreationSectionNotices.react",
    "WAWebBizAdLogger",
    "WAWebBizAdTargetingSpecLogData",
    "WAWebFlex.react",
    "WAWebFlexBox.react",
    "WAWebUnstyledButton.react",
    "WDSButton.react",
    "WDSIconIcAdd.react",
    "WDSText.react",
    "buildWABizAdCreationLWIAudienceMap",
    "getSavedAudiencesFromQuery",
    "react",
    "react-compiler-runtime",
    "useWAWebBizAdCreationOpenSeeAllModal",
    "useWAWebBizAdCreationOpenTargetingModal",
    "useWAWebBizAdCreationSpecDispatcherContext",
    "useWAWebInfoButtonUtil",
    "waWebBizAdCreationAudienceReducer",
    "withWAWebBizAdCreationSpecContext",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useContext,
      _ = d.useEffect,
      f = d.useMemo,
      g = d.useRef,
      h = 5,
      y = {
        createNewAudienceButton: {
          alignSelf: "xqcrz7y",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "x1nzty39",
          paddingLeft: null,
          paddingRight: null,
          ":hover_backgroundColor": "x1n67ipk",
          $$css: !0,
        },
      };
    function C(t) {
      var a,
        i,
        l,
        u = o("react-compiler-runtime").c(57),
        d = t.boostedComponentInput,
        m = t.adAccountID,
        f = t.audienceData,
        C = t.currency,
        v = t.dailyBudget,
        S = t.legacyAccountID,
        R = t.selectedPublisherPlatforms,
        L = o("CometRelay").useLazyLoadQuery(
          e !== void 0
            ? e
            : (e = n("WAWebBizAdCreationAudienceSectionQuery.graphql")),
          {
            adAccountID: S,
            budget: null,
            budget_type: null,
            duration_in_seconds: null,
            input: d,
            objective: o("WAWebBizAdCreationConsts").WA_WEB_AD_OBJECTIVE,
            savedAudienceCount: 100,
          },
          { fetchPolicy: "store-and-network" },
        ),
        E;
      u[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = [r("waWebBizAdCreationAudienceReducer")]), (u[0] = E))
        : (E = u[0]);
      var k = r("useWAWebBizAdCreationSpecDispatcherContext")(E),
        I = p(r("WAWebBizAdCreationLoggerContext")),
        T = g(!1),
        D;
      u[1] !== m ||
      u[2] !== f.audienceID ||
      u[3] !== f.audienceOption ||
      u[4] !== f.name ||
      u[5] !== f.targetSpec ||
      u[6] !== I
        ? ((D = function () {
            if (I != null && !T.current) {
              T.current = !0;
              var e = r("WAWebBizAdTargetingSpecLogData")(f.targetSpec);
              r("WAWebBizAdLogger").logCritical({
                event: "audience_section_impression",
                loggerContext: I,
                adAccountID: m,
                audienceID: f.audienceID,
                extra: babelHelpers.extends(
                  { audience_type: f.name, audience_option: f.audienceOption },
                  e,
                ),
              });
            }
          }),
          (u[1] = m),
          (u[2] = f.audienceID),
          (u[3] = f.audienceOption),
          (u[4] = f.name),
          (u[5] = f.targetSpec),
          (u[6] = I),
          (u[7] = D))
        : (D = u[7]);
      var x;
      (u[8] !== m || u[9] !== f || u[10] !== I
        ? ((x = [m, f, I]), (u[8] = m), (u[9] = f), (u[10] = I), (u[11] = x))
        : (x = u[11]),
        _(D, x));
      var $ =
          L == null ||
          (a = L.lwi) == null ||
          (a = a.boosted_component) == null ||
          (a = a.options.template_target_spec) == null
            ? void 0
            : a.target_spec_string_without_placements,
        P;
      u[12] !== m ||
      u[13] !== C ||
      u[14] !== v ||
      u[15] !== S ||
      u[16] !== R ||
      u[17] !== $
        ? ((P = {
            adAccountID: m,
            dailyBudget: v,
            currency: C,
            legacyAdAccountID: S,
            mode: "create",
            selectedPublisherPlatforms: R,
            templateTargetSpecString: $,
            legacyAccountID: S,
          }),
          (u[12] = m),
          (u[13] = C),
          (u[14] = v),
          (u[15] = S),
          (u[16] = R),
          (u[17] = $),
          (u[18] = P))
        : (P = u[18]);
      var N = r("useWAWebBizAdCreationOpenTargetingModal")(P),
        M;
      u[19] !== m ||
      u[20] !== f.audienceID ||
      u[21] !== f.audienceOption ||
      u[22] !== I ||
      u[23] !== N
        ? ((M = function () {
            (I != null &&
              r("WAWebBizAdLogger").log({
                event: "create_new_audience_click",
                loggerContext: I,
                adAccountID: m,
                extra: {
                  current_audience_id: f.audienceID,
                  current_audience_type: f.audienceOption,
                },
              }),
              N());
          }),
          (u[19] = m),
          (u[20] = f.audienceID),
          (u[21] = f.audienceOption),
          (u[22] = I),
          (u[23] = N),
          (u[24] = M))
        : (M = u[24]);
      var w = M,
        A =
          L == null || (i = L.lwi) == null || (i = i.boosted_component) == null
            ? void 0
            : i.options.audiences_v2,
        F;
      u[25] !== A
        ? ((F = r("buildWABizAdCreationLWIAudienceMap")(A)),
          (u[25] = A),
          (u[26] = F))
        : (F = u[26]);
      var O = F,
        B =
          L == null ||
          (l = L.adAccount) == null ||
          (l = l.savedAudiences) == null
            ? void 0
            : l.edges,
        W;
      u[27] !== B
        ? ((W = r("getSavedAudiencesFromQuery")(B)), (u[27] = B), (u[28] = W))
        : (W = u[28]);
      var q = W,
        U;
      u[29] !== k
        ? ((U = function (t) {
            k({ audienceData: t, type: "audience_reducer.select_audience" });
          }),
          (u[29] = k),
          (u[30] = U))
        : (U = u[30]);
      var V = r("useWAWebBizAdCreationOpenSeeAllModal")(m, f, I, O, U, q),
        H;
      u[31] !== m ||
      u[32] !== f.audienceID ||
      u[33] !== f.audienceOption ||
      u[34] !== I ||
      u[35] !== V
        ? ((H = function () {
            (I != null &&
              r("WAWebBizAdLogger").log({
                event: "see_all_audiences_click",
                loggerContext: I,
                adAccountID: m,
                extra: {
                  current_audience_id: f.audienceID,
                  current_audience_type: f.audienceOption,
                },
              }),
              V());
          }),
          (u[31] = m),
          (u[32] = f.audienceID),
          (u[33] = f.audienceOption),
          (u[34] = I),
          (u[35] = V),
          (u[36] = H))
        : (H = u[36]);
      var G = H,
        z,
        j;
      (u[37] !== k || u[38] !== O || u[39] !== q
        ? ((z = function () {
            k({
              lwiAudiences: O,
              savedAudiences: q,
              type: "audience_reducer.load_lwi_audiences",
            });
          }),
          (j = [k, O, q]),
          (u[37] = k),
          (u[38] = O),
          (u[39] = q),
          (u[40] = z),
          (u[41] = j))
        : ((z = u[40]), (j = u[41])),
        _(z, j));
      var K = r("useWAWebInfoButtonUtil")(
          r("WAWebBizAdCreationAudienceInfoModal.react"),
        ),
        Q;
      u[42] === Symbol.for("react.memo_cache_sentinel")
        ? ((Q = [
            "TARGETING",
            "SINGAPORE_UNIVERSAL",
            "TAIWAN_FINSERV",
            "SAVE_UNIVERSAL",
          ]),
          (u[42] = Q))
        : (Q = u[42]);
      var X = Q,
        Y;
      u[43] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y = s._(/*BTDS*/ "Audience")), (u[43] = Y))
        : (Y = u[43]);
      var J;
      u[44] !== G || u[45] !== q.length
        ? ((J =
            q.length > h
              ? c.jsx(r("WDSButton.react"), {
                  label: s._(/*BTDS*/ "See all"),
                  variant: "tonal",
                  size: "small",
                  type: "default",
                  onPress: G,
                })
              : null),
          (u[44] = G),
          (u[45] = q.length),
          (u[46] = J))
        : (J = u[46]);
      var Z, ee;
      u[47] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = X.map(b)),
          (ee = c.jsx(r("WAWebBizAdCreationAudienceListRoot.react"), {})),
          (u[47] = Z),
          (u[48] = ee))
        : ((Z = u[47]), (ee = u[48]));
      var te;
      u[49] === Symbol.for("react.memo_cache_sentinel")
        ? ((te = c.jsx(r("WDSIconIcAdd.react"), { width: 24, height: 24 })),
          (u[49] = te))
        : (te = u[49]);
      var ne;
      u[50] === Symbol.for("react.memo_cache_sentinel")
        ? ((ne = c.jsxs(o("WAWebFlexBox.react").FlexRow, {
            gap: 20,
            children: [
              te,
              c.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDefault",
                children: s._(/*BTDS*/ "Create new audience"),
              }),
            ],
          })),
          (u[50] = ne))
        : (ne = u[50]);
      var re;
      u[51] !== w
        ? ((re = c.jsxs(o("WAWebFlex.react").FlexColumn, {
            gap: 16,
            align: "stretch",
            children: [
              Z,
              ee,
              c.jsx(r("WAWebUnstyledButton.react"), {
                xstyle: y.createNewAudienceButton,
                onClick: w,
                children: ne,
              }),
            ],
          })),
          (u[51] = w),
          (u[52] = re))
        : (re = u[52]);
      var oe;
      return (
        u[53] !== K || u[54] !== J || u[55] !== re
          ? ((oe = c.jsx(r("WAWebBizAdCard.react"), {
              header: Y,
              titleAccessory: K,
              ctaButton: J,
              children: re,
            })),
            (u[53] = K),
            (u[54] = J),
            (u[55] = re),
            (u[56] = oe))
          : (oe = u[56]),
        oe
      );
    }
    function b(e) {
      return c.jsx(
        r("WAWebBizAdCreationSectionNotices.react"),
        { specElement: e },
        e,
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    var v = r("withWAWebBizAdCreationSpecContext")(C, function (e) {
      return {
        adAccountID: e.adAccountData.id,
        audienceData: e.audienceData,
        dailyBudget: e.budgetData.budget,
        currency: e.adAccountData.currency,
        legacyAccountID: e.adAccountData.legacyAccountID,
        selectedPublisherPlatforms: e.placementData.selectedPublisherPlatforms,
      };
    });
    l.default = v;
  },
  226,
);
