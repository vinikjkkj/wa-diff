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
      var t,
        n,
        a = e.genders,
        i = e.geoLocations,
        l = e.isAdvantagePlusAudienceEnabled,
        c = e.isTargetingInterests,
        g = e.specAgeRange,
        h = e.specMaxAge,
        y = e.specMinAge,
        C = m(r("WAWebBizAdCreationTargetingSpecDispatcherContext")),
        b = m(r("LWICometTargetingModalStateContext")),
        v = b.isPAOBasicAdvertiser,
        S = b.targetingConstraints,
        R = S.ageConfig,
        L = R.isMaxAgeFixed,
        E = R.isMinAgeFixed,
        k = R.maxAgeRange,
        I = R.maxTargetingAge,
        T = R.minAgeRange,
        D = R.minTargetingAge,
        x = o("AdsYouthAdsAgeLimitEligibility").getYouthAgeCutoff(i),
        $ = o("LWICometTargetingAgeRangeUtils").getSpecMinTargetingAge(g, y),
        P = $ == null,
        N = $ != null && $ >= x,
        M =
          v &&
          (P || N) &&
          o("LWICometPAOBasicYouthUtils").isAdAccountInPAOBasicYouthEnforcement(
            !1,
          ),
        w =
          o("LWICometBasicAdsYouthAdsUtils").isTargetingGender(a) ||
          c ||
          o("LWICometBasicAdsYouthAdsUtils").isTargetingUnderCity(i) ||
          l,
        A = w || M,
        F = A ? Math.max(D, x) : D,
        O = _(F),
        B = O[0],
        W = O[1],
        q = _(F),
        U = q[0],
        V = q[1],
        H = l
          ? (t = g == null ? void 0 : g[0]) != null
            ? t
            : F
          : o("LWICometTargetingAgeRangeUtils").getSpecMinOrDefaultAge(g, y, F),
        G = _(Math.max(H, B)),
        z = G[0],
        j = G[1],
        K = l
          ? (n = g == null ? void 0 : g[1]) != null
            ? n
            : o("LWICometTargetingAgeRangeUtils").MAX_AGE
          : o("LWICometTargetingAgeRangeUtils").getSpecMaxOrDefaultAge(
              g,
              h,
              o("LWICometTargetingAgeRangeUtils").MAX_AGE,
            ),
        Q = _(K),
        X = Q[0],
        Y = Q[1],
        J = _(g),
        Z = J[0],
        ee = J[1];
      (U !== F && (V(F), F !== B && W(F), z < F && j(F)),
        Z !== g &&
          (ee(g), g != null && (g[0] !== z && j(g[0]), g[1] !== X && Y(g[1]))));
      var te = d(
          function (e) {
            e !== y &&
              C({
                ageMin: e,
                type: "wa_web_biz_ad_creation_targeting_modal_reducer.update_age_min",
              });
          },
          [C, y],
        ),
        ne = d(
          function (e) {
            e !== h &&
              C({
                ageMax: e,
                type: "wa_web_biz_ad_creation_targeting_modal_reducer.update_age_max",
              });
          },
          [C, h],
        ),
        re = d(
          function (e) {
            ((e == null && g != null) ||
              (e != null && g == null) ||
              (e == null ? void 0 : e[0]) !== (g == null ? void 0 : g[0]) ||
              (e == null ? void 0 : e[1]) !== (g == null ? void 0 : g[1])) &&
              C({
                ageRange: e,
                type: "wa_web_biz_ad_creation_targeting_modal_reducer.update_age_range",
              });
          },
          [C, g],
        );
      p(
        function () {
          var e = y == null || (y != null && y < F);
          (e && te(F), g != null && g[0] < F && re([F, g[1]]));
        },
        [F, g, y, re, te],
      );
      var oe = d(
          function (e) {
            var t = e[0],
              n = e[1];
            E ||
              (T != null && !T.has(t)) ||
              L ||
              (k != null && !k.has(n)) ||
              (j(t), Y(n));
          },
          [E, L, T, k],
        ),
        ae = function (t) {
          var e = t[0],
            n = t[1];
          E ||
            (T != null && !T.has(e)) ||
            L ||
            (k != null && !k.has(n)) ||
            (j(e),
            Y(n),
            l
              ? (te(Math.min(e, f)), ne(I), re([e, n]))
              : (te(e), ne(n), re([e, n])));
        };
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        gap: 8,
        children: [
          u.jsx(r("WDSText.react"), {
            type: "Body1Emphasized",
            colorName: "contentDefault",
            children: s._(/*BTDS*/ "Age"),
          }),
          u.jsx(r("WDSSlider.react"), {
            values: [z, X],
            min: B,
            max: I,
            step: 1,
            onChange: oe,
            onChangeSettled: ae,
            startEndLabels: "currentValues",
            "aria-label": s._(/*BTDS*/ "Age range selector"),
            disabled: E && L,
          }),
        ],
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
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
