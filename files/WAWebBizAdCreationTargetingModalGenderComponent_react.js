__d(
  "WAWebBizAdCreationTargetingModalGenderComponent.react",
  [
    "fbt",
    "AdsYouthAdsAgeLimitEligibility",
    "LWICometDefaultTargetingSpec",
    "LWICometRegulatedCategoryUtils",
    "LWICometTargetingModalConstraints",
    "LWICometTargetingModalStateContext",
    "WAWebBizAdCreationTargetingSpecDispatcherContext",
    "WAWebFlex.react",
    "WDSChip.react",
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
      d = c.useContext,
      m = c.useMemo,
      p = { genderPillsContainer: { marginTop: "x1380le5", $$css: !0 } };
    function _(e) {
      var t,
        n = o("react-compiler-runtime").c(13),
        a = e.ageMin,
        i = e.genders,
        l = e.geoLocations,
        c = d(r("WAWebBizAdCreationTargetingSpecDispatcherContext")),
        m;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = [
            { label: s._(/*BTDS*/ "All"), value: 0 },
            { label: s._(/*BTDS*/ "Men"), value: 1 },
            { label: s._(/*BTDS*/ "Women"), value: 2 },
          ]),
          (n[0] = m))
        : (m = n[0]);
      var _ = m,
        f = d(r("LWICometTargetingModalStateContext")),
        g = f.targetingConstraints,
        h = (t = i == null ? void 0 : i[0]) != null ? t : 0,
        y = g.genderConfig,
        C = y.isGenderFixed,
        b;
      n[1] !== a || n[2] !== l || n[3] !== C
        ? ((b = function (t) {
            return (
              (t !==
                o("LWICometRegulatedCategoryUtils")
                  .REGULATED_CATEGORY_GENDER_OPTION &&
                C) ||
              a < o("AdsYouthAdsAgeLimitEligibility").getYouthAgeCutoff(l)
            );
          }),
          (n[1] = a),
          (n[2] = l),
          (n[3] = C),
          (n[4] = b))
        : (b = n[4]);
      var v = b,
        S;
      n[5] !== c || n[6] !== v
        ? ((S = function (t) {
            v(t) ||
              c({
                gender: t,
                type: "wa_web_biz_ad_creation_targeting_modal_reducer.update_genders",
              });
          }),
          (n[5] = c),
          (n[6] = v),
          (n[7] = S))
        : (S = n[7]);
      var R = S,
        L;
      n[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = u.jsx(r("WDSText.react"), {
            type: "Body1Emphasized",
            colorName: "contentDefault",
            children: s._(/*BTDS*/ "Gender"),
          })),
          (n[8] = L))
        : (L = n[8]);
      var E;
      return (
        n[9] !== R || n[10] !== v || n[11] !== h
          ? ((E = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              gap: 8,
              children: [
                L,
                u.jsx(o("WAWebFlex.react").FlexRow, {
                  gap: 8,
                  xstyle: p.genderPillsContainer,
                  children: _.map(function (e) {
                    var t = e.label,
                      n = e.value;
                    return u.jsx(
                      r("WDSChip.react"),
                      {
                        label: t,
                        isSelected: h === n,
                        onPress: function () {
                          return R(n);
                        },
                        isDisabled: v(n),
                      },
                      n,
                    );
                  }),
                }),
              ],
            })),
            (n[9] = R),
            (n[10] = v),
            (n[11] = h),
            (n[12] = E))
          : (E = n[12]),
        E
      );
    }
    var f = r("withWAWebBizAdCreationTargetingSpecPart.react")(_, function (e) {
      var t, n;
      return {
        ageMin:
          (t = e.age_min) != null
            ? t
            : o("LWICometTargetingModalConstraints")
                .DEFAULT_TARGETING_CONSTRAINT.ageConfig.minTargetingAge,
        genders:
          (n = e == null ? void 0 : e.genders) != null
            ? n
            : o("LWICometDefaultTargetingSpec").DEFAULT_TARGETING_SPEC.genders,
        geoLocations: e.geo_locations,
      };
    });
    l.default = f;
  },
  226,
);
