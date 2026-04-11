__d(
  "WAWebBizAdCreationTargetingModal.react",
  [
    "$InternalEnum",
    "WAWebBizAdCreationTargetingModalContext",
    "WAWebBizAdCreationTargetingModalContextProvider.react",
    "WAWebBizAdCreationTargetingModalDeleteAudienceConfirmationModal.react",
    "WAWebBizAdCreationTargetingModalEditLocalLocationComponent.react",
    "WAWebBizAdCreationTargetingModalEditRegionalLocationComponent.react",
    "WAWebBizAdCreationTargetingModalInterestsComponent.react",
    "WAWebBizAdCreationTargetingModalLocationComponent.react",
    "WAWebBizAdCreationTargetingModalLocationDisplayUtils",
    "WAWebBizAdCreationTargetingModalLocationSpecBuilders",
    "WAWebBizAdCreationTargetingModalLocationSpecParsers",
    "WAWebBizAdCreationTargetingModalMainPage.react",
    "WAWebBizAdCreationTargetingSpecContext",
    "WAWebBizAdCreationTargetingSpecDispatcherContext",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useContext,
      m = u.useMemo;
    function p(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.adAccountID,
        a = e.onBack,
        i = e.onNext,
        l = d(r("WAWebBizAdCreationTargetingSpecDispatcherContext")),
        u = d(r("WAWebBizAdCreationTargetingModalContext")),
        c = u.environment,
        m = d(r("WAWebBizAdCreationTargetingSpecContext")),
        p;
      e: {
        if (
          !o(
            "WAWebBizAdCreationTargetingModalLocationDisplayUtils",
          ).isLocalFlowSelection(m.geo_locations)
        ) {
          p = null;
          break e;
        }
        var _;
        t[0] !== m.geo_locations
          ? ((_ = o(
              "WAWebBizAdCreationTargetingModalLocationSpecParsers",
            ).convertGeoLocationsToSearchResults(m.geo_locations)),
            (t[0] = m.geo_locations),
            (t[1] = _))
          : (_ = t[1]);
        var f = _;
        p = f[0];
      }
      var g = p,
        h;
      t[2] !== l || t[3] !== i
        ? ((h = function (t, n) {
            var e = babelHelpers.extends({}, t, { radiusInMeters: n }),
              r = o(
                "WAWebBizAdCreationTargetingModalLocationSpecBuilders",
              ).convertLocationsToGeoLocations([e]);
            (l != null &&
              l({
                type: "wa_web_biz_ad_creation_targeting_modal_reducer.update_locations",
                geoLocations: r,
              }),
              i());
          }),
          (t[2] = l),
          (t[3] = i),
          (t[4] = h))
        : (h = t[4]);
      var y = h,
        C;
      return (
        t[5] !== n || t[6] !== c || t[7] !== y || t[8] !== g || t[9] !== a
          ? ((C = s.jsx(
              r(
                "WAWebBizAdCreationTargetingModalEditLocalLocationComponent.react",
              ),
              {
                adAccountID: n,
                environment: c,
                initialLocation: g,
                onBack: a,
                onNext: y,
              },
            )),
            (t[5] = n),
            (t[6] = c),
            (t[7] = y),
            (t[8] = g),
            (t[9] = a),
            (t[10] = C))
          : (C = t[10]),
        C
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.adAccountID,
        a = e.onBack,
        i = e.onNext,
        l = d(r("WAWebBizAdCreationTargetingSpecDispatcherContext")),
        u = d(r("WAWebBizAdCreationTargetingModalContext")),
        c = u.environment,
        m;
      t[0] !== l || t[1] !== i
        ? ((m = function (t) {
            var e = o(
              "WAWebBizAdCreationTargetingModalLocationSpecBuilders",
            ).convertLocationsToGeoLocations(t);
            (l != null &&
              l({
                type: "wa_web_biz_ad_creation_targeting_modal_reducer.update_locations",
                geoLocations: e,
              }),
              i());
          }),
          (t[0] = l),
          (t[1] = i),
          (t[2] = m))
        : (m = t[2]);
      var p = m,
        _;
      return (
        t[3] !== n || t[4] !== c || t[5] !== p || t[6] !== a
          ? ((_ = s.jsx(
              r(
                "WAWebBizAdCreationTargetingModalEditRegionalLocationComponent.react",
              ),
              { adAccountID: n, environment: c, onBack: a, onNext: p },
            )),
            (t[3] = n),
            (t[4] = c),
            (t[5] = p),
            (t[6] = a),
            (t[7] = _))
          : (_ = t[7]),
        _
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.adAccountID,
        a = e.environment,
        i = e.onBack,
        l = e.onNext,
        u = d(r("WAWebBizAdCreationTargetingSpecDispatcherContext")),
        c = d(r("WAWebBizAdCreationTargetingSpecContext")),
        m;
      t[0] !== u || t[1] !== l
        ? ((m = function (t) {
            (u != null &&
              u({
                type: "wa_web_biz_ad_creation_targeting_modal_reducer.update_interests",
                flexibleSpec: t,
              }),
              l());
          }),
          (t[0] = u),
          (t[1] = l),
          (t[2] = m))
        : (m = t[2]);
      var p = m,
        _;
      return (
        t[3] !== n ||
        t[4] !== a ||
        t[5] !== p ||
        t[6] !== i ||
        t[7] !== c.flexible_spec
          ? ((_ = s.jsx(
              r("WAWebBizAdCreationTargetingModalInterestsComponent.react"),
              {
                adAccountID: n,
                environment: a,
                initialFlexibleSpec: c.flexible_spec,
                onBack: i,
                onNext: p,
              },
            )),
            (t[3] = n),
            (t[4] = a),
            (t[5] = p),
            (t[6] = i),
            (t[7] = c.flexible_spec),
            (t[8] = _))
          : (_ = t[8]),
        _
      );
    }
    var g = n("$InternalEnum").Mirrored([
      "MainPage",
      "LocationPage",
      "EditRegionalLocationPage",
      "EditLocalLocationPage",
      "InterestsPage",
      "DeleteConfirmationPage",
    ]);
    function h(e) {
      var t = o("react-compiler-runtime").c(63),
        n = e.adAccountID,
        a = e.audienceID,
        i = e.audienceOption,
        l = e.currency,
        u = e.dailyBudget,
        c = e.environment,
        d = e.initialAudienceName,
        m = e.legacyAdAccountID,
        h = e.mode,
        y = e.onSaveAudience,
        C = e.selectedPublisherPlatforms,
        b = e.targetingSpec,
        v;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = {
            onEnd: o("WAWebModalManager").closeModalManager,
            transitions: o("useWAWebFlow").FlowTransitions.None,
          }),
          (t[0] = v))
        : (v = t[0]);
      var S = o("useWAWebFlow").useFlow(g.MainPage, v),
        R = S[0],
        L = S[1];
      if (L.step == null) return null;
      var E;
      e: switch (L.step) {
        case g.MainPage: {
          var k, I, T;
          t[1] !== L
            ? ((k = function () {
                L.push(g.DeleteConfirmationPage);
              }),
              (I = function () {
                L.push(g.InterestsPage);
              }),
              (T = function () {
                L.push(g.LocationPage);
              }),
              (t[1] = L),
              (t[2] = k),
              (t[3] = I),
              (t[4] = T))
            : ((k = t[2]), (I = t[3]), (T = t[4]));
          var D;
          (t[5] !== n ||
          t[6] !== a ||
          t[7] !== i ||
          t[8] !== h ||
          t[9] !== y ||
          t[10] !== k ||
          t[11] !== I ||
          t[12] !== T
            ? ((D = s.jsx(r("WAWebBizAdCreationTargetingModalMainPage.react"), {
                adAccountID: n,
                audienceID: a,
                audienceOption: i,
                mode: h,
                onCancel: o("WAWebModalManager").closeModalManager,
                onNavigateToDeleteConfirmation: k,
                onNavigateToInterests: I,
                onNavigateToLocation: T,
                onSaveAudience: y,
              })),
              (t[5] = n),
              (t[6] = a),
              (t[7] = i),
              (t[8] = h),
              (t[9] = y),
              (t[10] = k),
              (t[11] = I),
              (t[12] = T),
              (t[13] = D))
            : (D = t[13]),
            (E = D));
          break e;
        }
        case g.LocationPage: {
          var x, $, P;
          t[14] !== L
            ? ((x = function () {
                return L.pop();
              }),
              ($ = function () {
                L.push(g.EditLocalLocationPage);
              }),
              (P = function () {
                L.push(g.EditRegionalLocationPage);
              }),
              (t[14] = L),
              (t[15] = x),
              (t[16] = $),
              (t[17] = P))
            : ((x = t[15]), ($ = t[16]), (P = t[17]));
          var N;
          (t[18] !== n || t[19] !== x || t[20] !== $ || t[21] !== P
            ? ((N = s.jsx(
                r("WAWebBizAdCreationTargetingModalLocationComponent.react"),
                {
                  adAccountID: n,
                  onBack: x,
                  onEditLocalLocation: $,
                  onEditRegionalLocation: P,
                },
              )),
              (t[18] = n),
              (t[19] = x),
              (t[20] = $),
              (t[21] = P),
              (t[22] = N))
            : (N = t[22]),
            (E = N));
          break e;
        }
        case g.EditRegionalLocationPage: {
          var M, w;
          t[23] !== L
            ? ((M = function () {
                return L.pop();
              }),
              (w = function () {
                return L.pop(void 0, 2);
              }),
              (t[23] = L),
              (t[24] = M),
              (t[25] = w))
            : ((M = t[24]), (w = t[25]));
          var A;
          (t[26] !== n || t[27] !== M || t[28] !== w
            ? ((A = s.jsx(_, { adAccountID: n, onBack: M, onNext: w })),
              (t[26] = n),
              (t[27] = M),
              (t[28] = w),
              (t[29] = A))
            : (A = t[29]),
            (E = A));
          break e;
        }
        case g.EditLocalLocationPage: {
          var F, O;
          t[30] !== L
            ? ((F = function () {
                return L.pop();
              }),
              (O = function () {
                return L.pop(void 0, 2);
              }),
              (t[30] = L),
              (t[31] = F),
              (t[32] = O))
            : ((F = t[31]), (O = t[32]));
          var B;
          (t[33] !== n || t[34] !== F || t[35] !== O
            ? ((B = s.jsx(p, { adAccountID: n, onBack: F, onNext: O })),
              (t[33] = n),
              (t[34] = F),
              (t[35] = O),
              (t[36] = B))
            : (B = t[36]),
            (E = B));
          break e;
        }
        case g.InterestsPage: {
          var W, q;
          t[37] !== L
            ? ((W = function () {
                return L.pop();
              }),
              (q = function () {
                return L.pop();
              }),
              (t[37] = L),
              (t[38] = W),
              (t[39] = q))
            : ((W = t[38]), (q = t[39]));
          var U;
          (t[40] !== n || t[41] !== c || t[42] !== W || t[43] !== q
            ? ((U = s.jsx(f, {
                adAccountID: n,
                environment: c,
                onBack: W,
                onNext: q,
              })),
              (t[40] = n),
              (t[41] = c),
              (t[42] = W),
              (t[43] = q),
              (t[44] = U))
            : (U = t[44]),
            (E = U));
          break e;
        }
        case g.DeleteConfirmationPage: {
          var V = a != null ? a : "",
            H;
          t[45] !== L
            ? ((H = function () {
                return L.pop();
              }),
              (t[45] = L),
              (t[46] = H))
            : (H = t[46]);
          var G;
          (t[47] !== V || t[48] !== H
            ? ((G = s.jsx(
                r(
                  "WAWebBizAdCreationTargetingModalDeleteAudienceConfirmationModal.react",
                ),
                {
                  audienceID: V,
                  onCancel: H,
                  onComplete: o("WAWebModalManager").closeModalManager,
                },
              )),
              (t[47] = V),
              (t[48] = H),
              (t[49] = G))
            : (G = t[49]),
            (E = G));
        }
      }
      var z;
      t[50] !== R || t[51] !== L || t[52] !== E
        ? ((z = s.jsx(R, { flow: L, children: E })),
          (t[50] = R),
          (t[51] = L),
          (t[52] = E),
          (t[53] = z))
        : (z = t[53]);
      var j;
      return (
        t[54] !== l ||
        t[55] !== u ||
        t[56] !== c ||
        t[57] !== d ||
        t[58] !== m ||
        t[59] !== C ||
        t[60] !== z ||
        t[61] !== b
          ? ((j = s.jsx(
              r("WAWebBizAdCreationTargetingModalContextProvider.react"),
              {
                currency: l,
                dailyBudget: u,
                environment: c,
                initialAudienceName: d,
                initialTargetingSpec: b,
                legacyAdAccountID: m,
                selectedPublisherPlatforms: C,
                children: z,
              },
            )),
            (t[54] = l),
            (t[55] = u),
            (t[56] = c),
            (t[57] = d),
            (t[58] = m),
            (t[59] = C),
            (t[60] = z),
            (t[61] = b),
            (t[62] = j))
          : (j = t[62]),
        j
      );
    }
    l.default = h;
  },
  98,
);
