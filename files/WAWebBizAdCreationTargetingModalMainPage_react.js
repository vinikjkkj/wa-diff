__d(
  "WAWebBizAdCreationTargetingModalMainPage.react",
  [
    "fbt",
    "CometRelay",
    "WAWebBaseShimmerComponents.react",
    "WAWebBizAdCreationConfigContext",
    "WAWebBizAdCreationConsts",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdCreationTargetingModalAgeComponent.react",
    "WAWebBizAdCreationTargetingModalAudienceNameComponent.react",
    "WAWebBizAdCreationTargetingModalContext",
    "WAWebBizAdCreationTargetingModalDeleteAudienceButton.react",
    "WAWebBizAdCreationTargetingModalGenderComponent.react",
    "WAWebBizAdCreationTargetingModalInterestsUtils",
    "WAWebBizAdCreationTargetingModalLocationDisplayUtils",
    "WAWebBizAdCreationTargetingModalPage.react",
    "WAWebBizAdCreationTargetingModalSelectableRow.react",
    "WAWebBizAdCreationTargetingSpecContext",
    "WAWebBizAdCreationTargetingSpecHawkWidget.react",
    "WAWebBizAdLogger",
    "WAWebBizAdTargetingSpecLogData",
    "WAWebBizGatingUtils",
    "WAWebDivider.react",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebXIcon.react",
    "WDSButton.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebEstimatedDailyReach",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.Suspense,
      m = c.useContext,
      p = c.useEffect,
      _ = c.useRef,
      f = c.useState,
      g = {
        actionButtons: { columnGap: "x1amjocr", $$css: !0 },
        contentContainer: {
          justifyContent: "x1qughib",
          height: "x5yr21d",
          $$css: !0,
        },
        content: {
          rowGap: "x1j3ira4",
          overflowX: "x6ikm8r",
          overflowY: "x1odjw0f",
          $$css: !0,
        },
        name: { marginBottom: "xefnzgg", $$css: !0 },
        root: { rowGap: "x121sasi", $$css: !0 },
      };
    function h(e) {
      var t,
        n = o("react-compiler-runtime").c(14),
        a = e.audienceOption,
        i = e.optimizationGoalInput,
        l = m(r("WAWebBizAdCreationTargetingModalContext")),
        s = l.currency,
        c = l.dailyBudget,
        d = l.legacyAdAccountID,
        p = l.selectedPublisherPlatforms,
        _ = m(r("WAWebBizAdCreationTargetingSpecContext")),
        f = (t = m(r("WAWebBizAdCreationConfigContext"))) != null ? t : {},
        g = f.flow,
        h = f.flowID,
        y;
      n[0] !== _
        ? ((y = JSON.stringify(_)), (n[0] = _), (n[1] = y))
        : (y = n[1]);
      var C;
      n[2] !== a ||
      n[3] !== s ||
      n[4] !== c ||
      n[5] !== g ||
      n[6] !== h ||
      n[7] !== d ||
      n[8] !== i ||
      n[9] !== p ||
      n[10] !== y
        ? ((C = {
            legacyAdAccountID: d,
            targetingSpecAudience: y,
            optimizationGoalInput: i,
            audienceOptionAudience: a,
            selectedPublisherPlatforms: p,
            currency: s,
            postID: null,
            flowID: h,
            flow: g,
            dailyBudget: c,
          }),
          (n[2] = a),
          (n[3] = s),
          (n[4] = c),
          (n[5] = g),
          (n[6] = h),
          (n[7] = d),
          (n[8] = i),
          (n[9] = p),
          (n[10] = y),
          (n[11] = C))
        : (C = n[11]);
      var b = r("useWAWebEstimatedDailyReach")(C),
        v;
      return (
        n[12] !== b
          ? ((v = u.jsx(r("WDSText.react"), {
              colorName: "contentDeemphasized",
              type: "Body2",
              children: b,
            })),
            (n[12] = b),
            (n[13] = v))
          : (v = n[13]),
        v
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(88),
        n = e.adAccountID,
        a = e.audienceID,
        i = e.audienceOption,
        l = e.mode,
        c = e.onCancel,
        y = e.onNavigateToDeleteConfirmation,
        C = e.onNavigateToInterests,
        b = e.onNavigateToLocation,
        v = e.onSaveAudience,
        S = m(r("WAWebBizAdCreationTargetingSpecContext")),
        R = m(r("WAWebBizAdCreationConfigContext")),
        L = m(r("WAWebBizAdCreationTargetingModalContext")),
        E = L.audienceName,
        k = L.environment,
        I = L.setAudienceName,
        T = m(r("WAWebBizAdCreationLoggerContext")),
        D = _(!1),
        x,
        $;
      (t[0] !== n ||
      t[1] !== a ||
      t[2] !== E ||
      t[3] !== i ||
      t[4] !== T ||
      t[5] !== l ||
      t[6] !== S
        ? ((x = function () {
            if (T != null && !D.current) {
              D.current = !0;
              var e = r("WAWebBizAdTargetingSpecLogData")(S);
              r("WAWebBizAdLogger").log({
                event: "create_audience_impression",
                loggerContext: T,
                adAccountID: n,
                extra: babelHelpers.extends(
                  {
                    mode: l,
                    audience_id: a,
                    audience_name: E,
                    audience_option: i,
                  },
                  e,
                ),
              });
            }
          }),
          ($ = [n, a, E, i, T, l, S]),
          (t[0] = n),
          (t[1] = a),
          (t[2] = E),
          (t[3] = i),
          (t[4] = T),
          (t[5] = l),
          (t[6] = S),
          (t[7] = x),
          (t[8] = $))
        : ((x = t[7]), ($ = t[8])),
        p(x, $));
      var P = f(!1),
        N = P[0],
        M = P[1],
        w = i === "SAVED_AUDIENCE",
        A;
      t[9] !== E ? ((A = E.trim()), (t[9] = E), (t[10] = A)) : (A = t[10]);
      var F = A,
        O = w && F.length === 0,
        B;
      t[11] !== c
        ? ((B = function () {
            (o("WAWebModalManager").ModalManager.close(), c == null || c());
          }),
          (t[11] = c),
          (t[12] = B))
        : (B = t[12]);
      var W = B,
        q;
      t[13] !== n ||
      t[14] !== a ||
      t[15] !== E ||
      t[16] !== T ||
      t[17] !== v ||
      t[18] !== S
        ? ((q = function () {
            (T != null &&
              r("WAWebBizAdLogger").log({
                event: "save_audience_click",
                loggerContext: T,
                adAccountID: n,
                extra: { audience_id: a },
              }),
              M(!0),
              v({
                targetingSpec: S,
                audienceName: E,
                callback: function () {
                  (M(!1), o("WAWebModalManager").ModalManager.close());
                },
                onError: function () {
                  M(!1);
                },
              }));
          }),
          (t[13] = n),
          (t[14] = a),
          (t[15] = E),
          (t[16] = T),
          (t[17] = v),
          (t[18] = S),
          (t[19] = q))
        : (q = t[19]);
      var U = q,
        V;
      t[20] !== R
        ? ((V = R != null ? R : {}), (t[20] = R), (t[21] = V))
        : (V = t[21]);
      var H = V,
        G = H.pageID,
        z = H.product,
        j = z != null ? z : "BOOSTED_MESSAGE",
        K;
      t[22] !== G || t[23] !== j
        ? ((K = {
            objective: o("WAWebBizAdCreationConsts").WA_WEB_AD_OBJECTIVE,
            page_id: G,
            product: j,
          }),
          (t[22] = G),
          (t[23] = j),
          (t[24] = K))
        : (K = t[24]);
      var Q = K,
        X;
      t[25] !== W
        ? ((X = u.jsx(r("WDSButton.react"), {
            Icon: o("WAWebXIcon.react").XIcon,
            variant: "borderless",
            size: "medium",
            onPress: W,
          })),
          (t[25] = W),
          (t[26] = X))
        : (X = t[26]);
      var Y;
      t[27] !== l
        ? ((Y =
            l === "create"
              ? s._(/*BTDS*/ "Create new audience")
              : l === "edit"
                ? s._(/*BTDS*/ "Edit audience")
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        l,
                    );
                  })()),
          (t[27] = l),
          (t[28] = Y))
        : (Y = t[28]);
      var J;
      t[29] !== Y
        ? ((J = u.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDefault",
            children: Y,
          })),
          (t[29] = Y),
          (t[30] = J))
        : (J = t[30]);
      var Z;
      t[31] !== J || t[32] !== X
        ? ((Z = u.jsxs(u.Fragment, { children: [X, J] })),
          (t[31] = J),
          (t[32] = X),
          (t[33] = Z))
        : (Z = t[33]);
      var ee;
      t[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((ee =
            o(
              "WAWebBizGatingUtils",
            ).nativeAdsCreationTargetingModalHawkToolEnabled() &&
            u.jsx(r("WAWebBizAdCreationTargetingSpecHawkWidget.react"), {})),
          (t[34] = ee))
        : (ee = t[34]);
      var te;
      t[35] === Symbol.for("react.memo_cache_sentinel")
        ? ((te = u.jsx(r("WDSText.react"), {
            colorName: "contentDefault",
            type: "Body1Emphasized",
            children: s._(/*BTDS*/ "Estimated daily impressions"),
          })),
          (t[35] = te))
        : (te = t[35]);
      var ne;
      t[36] === Symbol.for("react.memo_cache_sentinel")
        ? ((ne = u.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
            height: 20,
            width: 100,
          })),
          (t[36] = ne))
        : (ne = t[36]);
      var re;
      t[37] !== i || t[38] !== Q
        ? ((re = u.jsx(h, { audienceOption: i, optimizationGoalInput: Q })),
          (t[37] = i),
          (t[38] = Q),
          (t[39] = re))
        : (re = t[39]);
      var oe;
      t[40] !== k || t[41] !== re
        ? ((oe = u.jsxs(o("WAWebFlex.react").FlexRow, {
            justify: "all",
            children: [
              te,
              u.jsx(d, {
                fallback: ne,
                children: u.jsx(o("CometRelay").RelayEnvironmentProvider, {
                  environment: k,
                  children: re,
                }),
              }),
            ],
          })),
          (t[40] = k),
          (t[41] = re),
          (t[42] = oe))
        : (oe = t[42]);
      var ae;
      t[43] !== E || t[44] !== w || t[45] !== I
        ? ((ae =
            w &&
            u.jsx(o("WAWebFlex.react").FlexColumn, {
              xstyle: g.name,
              align: "stretch",
              children: u.jsx(
                r(
                  "WAWebBizAdCreationTargetingModalAudienceNameComponent.react",
                ),
                { audienceName: E, onAudienceNameChange: I },
              ),
            })),
          (t[43] = E),
          (t[44] = w),
          (t[45] = I),
          (t[46] = ae))
        : (ae = t[46]);
      var ie;
      t[47] === Symbol.for("react.memo_cache_sentinel")
        ? ((ie = s._(/*BTDS*/ "Locations")), (t[47] = ie))
        : (ie = t[47]);
      var le;
      t[48] !== S.geo_locations
        ? ((le = o(
            "WAWebBizAdCreationTargetingModalLocationDisplayUtils",
          ).formatLocationDisplay(S.geo_locations)),
          (t[48] = S.geo_locations),
          (t[49] = le))
        : (le = t[49]);
      var se;
      t[50] === Symbol.for("react.memo_cache_sentinel")
        ? ((se = s._(/*BTDS*/ "Edit locations")), (t[50] = se))
        : (se = t[50]);
      var ue;
      t[51] !== b || t[52] !== le
        ? ((ue = u.jsx(
            r("WAWebBizAdCreationTargetingModalSelectableRow.react"),
            { title: ie, subtitle: le, onEditClick: b, ariaLabel: se },
          )),
          (t[51] = b),
          (t[52] = le),
          (t[53] = ue))
        : (ue = t[53]);
      var ce;
      t[54] === Symbol.for("react.memo_cache_sentinel")
        ? ((ce = s._(/*BTDS*/ "Interests")), (t[54] = ce))
        : (ce = t[54]);
      var de;
      t[55] !== S.flexible_spec
        ? ((de = o(
            "WAWebBizAdCreationTargetingModalInterestsUtils",
          ).formatInterestsDisplayWithPlaceholder(S.flexible_spec)),
          (t[55] = S.flexible_spec),
          (t[56] = de))
        : (de = t[56]);
      var me;
      t[57] === Symbol.for("react.memo_cache_sentinel")
        ? ((me = s._(/*BTDS*/ "Edit interests")), (t[57] = me))
        : (me = t[57]);
      var pe;
      t[58] !== C || t[59] !== de
        ? ((pe = u.jsx(
            r("WAWebBizAdCreationTargetingModalSelectableRow.react"),
            { title: ce, subtitle: de, onEditClick: C, ariaLabel: me },
          )),
          (t[58] = C),
          (t[59] = de),
          (t[60] = pe))
        : (pe = t[60]);
      var _e, fe;
      t[61] === Symbol.for("react.memo_cache_sentinel")
        ? ((_e = u.jsx(
            r("WAWebBizAdCreationTargetingModalAgeComponent.react"),
            {},
          )),
          (fe = u.jsx(
            r("WAWebBizAdCreationTargetingModalGenderComponent.react"),
            {},
          )),
          (t[61] = _e),
          (t[62] = fe))
        : ((_e = t[61]), (fe = t[62]));
      var ge;
      t[63] !== ue || t[64] !== pe
        ? ((ge = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: g.content,
            align: "stretch",
            children: [ue, pe, _e, fe],
          })),
          (t[63] = ue),
          (t[64] = pe),
          (t[65] = ge))
        : (ge = t[65]);
      var he;
      t[66] === Symbol.for("react.memo_cache_sentinel")
        ? ((he = u.jsx("div", {
            className: "x1iolzdw xoyeui7 x1mii8t8",
            children: u.jsx(r("WAWebDivider.react"), {
              direction: "horizontal",
            }),
          })),
          (t[66] = he))
        : (he = t[66]);
      var ye;
      t[67] !== n || t[68] !== a || t[69] !== i || t[70] !== y
        ? ((ye =
            a != null &&
            i === "SAVED_AUDIENCE" &&
            u.jsx(
              r("WAWebBizAdCreationTargetingModalDeleteAudienceButton.react"),
              {
                adAccountID: n,
                audienceID: a,
                onNavigateToDeleteConfirmation: y != null ? y : r("WAWebNoop"),
              },
            )),
          (t[67] = n),
          (t[68] = a),
          (t[69] = i),
          (t[70] = y),
          (t[71] = ye))
        : (ye = t[71]);
      var Ce;
      t[72] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ce = s._(/*BTDS*/ "Save")), (t[72] = Ce))
        : (Ce = t[72]);
      var be;
      t[73] !== U || t[74] !== O || t[75] !== N
        ? ((be = u.jsx(r("WDSButton.react"), {
            label: Ce,
            variant: "filled",
            size: "medium",
            onPress: U,
            loading: N,
            disabled: O,
          })),
          (t[73] = U),
          (t[74] = O),
          (t[75] = N),
          (t[76] = be))
        : (be = t[76]);
      var ve;
      t[77] !== ye || t[78] !== be
        ? ((ve = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "stretch",
            gap: 16,
            children: [
              he,
              u.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                justify: "end",
                xstyle: g.actionButtons,
                children: [ye, be],
              }),
            ],
          })),
          (t[77] = ye),
          (t[78] = be),
          (t[79] = ve))
        : (ve = t[79]);
      var Se;
      t[80] !== ge || t[81] !== ve
        ? ((Se = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: g.contentContainer,
            align: "stretch",
            children: [ge, ve],
          })),
          (t[80] = ge),
          (t[81] = ve),
          (t[82] = Se))
        : (Se = t[82]);
      var Re;
      return (
        t[83] !== Z || t[84] !== oe || t[85] !== ae || t[86] !== Se
          ? ((Re = u.jsxs(r("WAWebBizAdCreationTargetingModalPage.react"), {
              xstyle: g.root,
              headerContent: Z,
              children: [ee, oe, ae, Se],
            })),
            (t[83] = Z),
            (t[84] = oe),
            (t[85] = ae),
            (t[86] = Se),
            (t[87] = Re))
          : (Re = t[87]),
        Re
      );
    }
    l.default = y;
  },
  226,
);
