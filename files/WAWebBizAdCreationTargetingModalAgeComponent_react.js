__d(
  "WAWebBizAdCreationTargetingModalAgeComponent.react",
  [
    "fbt",
    "AdsYouthAdsAgeLimitEligibility",
    "LWICometBasicAdsYouthAdsUtils",
    "LWICometPAOBasicYouthUtils",
    "LWICometTargetingAgeRangeUtils",
    "LWICometTargetingModalStateContext",
    "WAWebBizAdCreationTargetingSpecDispatcherContext",
    "WAWebFlex.react",
    "WDSSlider.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "withWAWebBizAdCreationTargetingSpecPart.react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useContext,
      p = c.useEffect,
      _ = c.useState,
      f = 25;
    function g(e) {
      var t = o("react-compiler-runtime").c(52),
        n = e.genders,
        a = e.geoLocations,
        i = e.isAdvantagePlusAudienceEnabled,
        l = e.isTargetingInterests,
        c = e.specAgeRange,
        d = e.specMaxAge,
        g = e.specMinAge,
        h = m(r("WAWebBizAdCreationTargetingSpecDispatcherContext")),
        y = m(r("LWICometTargetingModalStateContext")),
        C = y.isPAOBasicAdvertiser,
        b = y.targetingConstraints,
        v = b.ageConfig,
        S = v.isMaxAgeFixed,
        R = v.isMinAgeFixed,
        L = v.maxAgeRange,
        E = v.maxTargetingAge,
        k = v.minAgeRange,
        I = v.minTargetingAge,
        T = o("AdsYouthAdsAgeLimitEligibility").getYouthAgeCutoff(a),
        D = o("LWICometTargetingAgeRangeUtils").getSpecMinTargetingAge(c, g),
        x = D == null,
        $ = D != null && D >= T,
        P =
          C &&
          (x || $) &&
          o("LWICometPAOBasicYouthUtils").isAdAccountInPAOBasicYouthEnforcement(
            !1,
          ),
        N =
          o("LWICometBasicAdsYouthAdsUtils").isTargetingGender(n) ||
          l ||
          o("LWICometBasicAdsYouthAdsUtils").isTargetingUnderCity(a) ||
          i,
        M = N || P,
        w = M ? Math.max(I, T) : I,
        A = _(w),
        F = A[0],
        O = A[1],
        B = _(w),
        W = B[0],
        q = B[1],
        U;
      if (t[0] !== i || t[1] !== w || t[2] !== c || t[3] !== g) {
        var V;
        ((U = i
          ? (V = c == null ? void 0 : c[0]) != null
            ? V
            : w
          : o("LWICometTargetingAgeRangeUtils").getSpecMinOrDefaultAge(
              c,
              g,
              w,
            )),
          (t[0] = i),
          (t[1] = w),
          (t[2] = c),
          (t[3] = g),
          (t[4] = U));
      } else U = t[4];
      var H = U,
        G = _(Math.max(H, F)),
        z = G[0],
        j = G[1],
        K;
      if (t[5] !== i || t[6] !== c || t[7] !== d) {
        var Q;
        ((K = i
          ? (Q = c == null ? void 0 : c[1]) != null
            ? Q
            : o("LWICometTargetingAgeRangeUtils").MAX_AGE
          : o("LWICometTargetingAgeRangeUtils").getSpecMaxOrDefaultAge(
              c,
              d,
              o("LWICometTargetingAgeRangeUtils").MAX_AGE,
            )),
          (t[5] = i),
          (t[6] = c),
          (t[7] = d),
          (t[8] = K));
      } else K = t[8];
      var X = K,
        Y = _(X),
        J = Y[0],
        Z = Y[1],
        ee = _(c),
        te = ee[0],
        ne = ee[1];
      (W !== w && (q(w), w !== F && O(w), z < w && j(w)),
        te !== c &&
          (ne(c), c != null && (c[0] !== z && j(c[0]), c[1] !== J && Z(c[1]))));
      var re;
      t[9] !== h || t[10] !== g
        ? ((re = function (t) {
            t !== g &&
              h({
                ageMin: t,
                type: "wa_web_biz_ad_creation_targeting_modal_reducer.update_age_min",
              });
          }),
          (t[9] = h),
          (t[10] = g),
          (t[11] = re))
        : (re = t[11]);
      var oe = re,
        ae;
      t[12] !== h || t[13] !== d
        ? ((ae = function (t) {
            t !== d &&
              h({
                ageMax: t,
                type: "wa_web_biz_ad_creation_targeting_modal_reducer.update_age_max",
              });
          }),
          (t[12] = h),
          (t[13] = d),
          (t[14] = ae))
        : (ae = t[14]);
      var ie = ae,
        le;
      t[15] !== h || t[16] !== c
        ? ((le = function (t) {
            ((t == null && c != null) ||
              (t != null && c == null) ||
              (t == null ? void 0 : t[0]) !== (c == null ? void 0 : c[0]) ||
              (t == null ? void 0 : t[1]) !== (c == null ? void 0 : c[1])) &&
              h({
                ageRange: t,
                type: "wa_web_biz_ad_creation_targeting_modal_reducer.update_age_range",
              });
          }),
          (t[15] = h),
          (t[16] = c),
          (t[17] = le))
        : (le = t[17]);
      var se = le,
        ue,
        ce;
      (t[18] !== w || t[19] !== c || t[20] !== g || t[21] !== se || t[22] !== oe
        ? ((ue = function () {
            var e = g == null || (g != null && g < w);
            (e && oe(w), c != null && c[0] < w && se([w, c[1]]));
          }),
          (ce = [w, c, g, se, oe]),
          (t[18] = w),
          (t[19] = c),
          (t[20] = g),
          (t[21] = se),
          (t[22] = oe),
          (t[23] = ue),
          (t[24] = ce))
        : ((ue = t[23]), (ce = t[24])),
        p(ue, ce));
      var de;
      t[25] !== S || t[26] !== R || t[27] !== L || t[28] !== k
        ? ((de = function (t) {
            var e = t[0],
              n = t[1];
            R ||
              (k != null && !k.has(e)) ||
              S ||
              (L != null && !L.has(n)) ||
              (j(e), Z(n));
          }),
          (t[25] = S),
          (t[26] = R),
          (t[27] = L),
          (t[28] = k),
          (t[29] = de))
        : (de = t[29]);
      var me = de,
        pe;
      t[30] !== i ||
      t[31] !== S ||
      t[32] !== R ||
      t[33] !== L ||
      t[34] !== E ||
      t[35] !== k ||
      t[36] !== se ||
      t[37] !== ie ||
      t[38] !== oe
        ? ((pe = function (t) {
            var e = t[0],
              n = t[1];
            R ||
              (k != null && !k.has(e)) ||
              S ||
              (L != null && !L.has(n)) ||
              (j(e),
              Z(n),
              i
                ? (oe(Math.min(e, f)), ie(E), se([e, n]))
                : (oe(e), ie(n), se([e, n])));
          }),
          (t[30] = i),
          (t[31] = S),
          (t[32] = R),
          (t[33] = L),
          (t[34] = E),
          (t[35] = k),
          (t[36] = se),
          (t[37] = ie),
          (t[38] = oe),
          (t[39] = pe))
        : (pe = t[39]);
      var _e = pe,
        fe;
      t[40] === Symbol.for("react.memo_cache_sentinel")
        ? ((fe = u.jsx(r("WDSText.react"), {
            type: "Body1Emphasized",
            colorName: "contentDefault",
            children: s._(/*BTDS*/ "Age"),
          })),
          (t[40] = fe))
        : (fe = t[40]);
      var ge;
      t[41] !== J || t[42] !== z
        ? ((ge = [z, J]), (t[41] = J), (t[42] = z), (t[43] = ge))
        : (ge = t[43]);
      var he;
      t[44] === Symbol.for("react.memo_cache_sentinel")
        ? ((he = s._(/*BTDS*/ "Age range selector")), (t[44] = he))
        : (he = t[44]);
      var ye = R && S,
        Ce;
      return (
        t[45] !== _e ||
        t[46] !== me ||
        t[47] !== E ||
        t[48] !== F ||
        t[49] !== ge ||
        t[50] !== ye
          ? ((Ce = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              gap: 8,
              children: [
                fe,
                u.jsx(r("WDSSlider.react"), {
                  values: ge,
                  min: F,
                  max: E,
                  step: 1,
                  onChange: me,
                  onChangeSettled: _e,
                  startEndLabels: "currentValues",
                  "aria-label": he,
                  disabled: ye,
                }),
              ],
            })),
            (t[45] = _e),
            (t[46] = me),
            (t[47] = E),
            (t[48] = F),
            (t[49] = ge),
            (t[50] = ye),
            (t[51] = Ce))
          : (Ce = t[51]),
        Ce
      );
    }
    var h = r("withWAWebBizAdCreationTargetingSpecPart.react")(g, function (e) {
      var t, n, r;
      return {
        genders: e.genders,
        geoLocations: e.geo_locations,
        isAdvantagePlusAudienceEnabled:
          ((t = e.targeting_automation) == null
            ? void 0
            : t.advantage_audience) === 1,
        isTargetingInterests:
          ((n =
            (r = e.flexible_spec) == null ||
            (r = r[0]) == null ||
            (r = r.interests) == null
              ? void 0
              : r.length) != null
            ? n
            : 0) > 0,
        specAgeRange: e.age_range,
        specMaxAge: e.age_max,
        specMinAge: e.age_min,
      };
    });
    l.default = h;
  },
  226,
);
