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
        n = e.ageMin,
        a = e.genders,
        i = e.geoLocations,
        l = d(r("WAWebBizAdCreationTargetingSpecDispatcherContext")),
        c = m(function () {
          return [
            { label: s._(/*BTDS*/ "All"), value: 0 },
            { label: s._(/*BTDS*/ "Men"), value: 1 },
            { label: s._(/*BTDS*/ "Women"), value: 2 },
          ];
        }, []),
        _ = d(r("LWICometTargetingModalStateContext")),
        f = _.targetingConstraints,
        g = (t = a == null ? void 0 : a[0]) != null ? t : 0,
        h = f.genderConfig,
        y = h.isGenderFixed,
        C = function (t) {
          return (
            (t !==
              o("LWICometRegulatedCategoryUtils")
                .REGULATED_CATEGORY_GENDER_OPTION &&
              y) ||
            n < o("AdsYouthAdsAgeLimitEligibility").getYouthAgeCutoff(i)
          );
        },
        b = function (t) {
          C(t) ||
            l({
              gender: t,
              type: "wa_web_biz_ad_creation_targeting_modal_reducer.update_genders",
            });
        };
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        gap: 8,
        children: [
          u.jsx(r("WDSText.react"), {
            type: "Body1Emphasized",
            colorName: "contentDefault",
            children: s._(/*BTDS*/ "Gender"),
          }),
          u.jsx(o("WAWebFlex.react").FlexRow, {
            gap: 8,
            xstyle: p.genderPillsContainer,
            children: c.map(function (e) {
              var t = e.label,
                n = e.value;
              return u.jsx(
                r("WDSChip.react"),
                {
                  label: t,
                  isSelected: g === n,
                  onPress: function () {
                    return b(n);
                  },
                  isDisabled: C(n),
                },
                n,
              );
            }),
          }),
        ],
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
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
