__d(
  "AdsDynamicAdCustomizationLanguageMutators",
  ["invariant", "AdsDynamicAdCustomizationCustomizationSpecUtils"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n) {
      var r = o(
          "AdsDynamicAdCustomizationCustomizationSpecUtils",
        ).getCustomizationSpecPathFromAdgroup(e),
        a = o(
          "AdsDynamicAdCustomizationCustomizationSpecUtils",
        ).getCustomizationSpecFromAdgroup(e),
        i = a.findIndex(function (e) {
          return (
            o(
              "AdsDynamicAdCustomizationCustomizationSpecUtils",
            ).getLanguageFromRule(e) === t
          );
        });
      return i < 0
        ? e
        : (!a
            .map(
              o("AdsDynamicAdCustomizationCustomizationSpecUtils")
                .getLanguageFromRule,
            )
            .contains(n) || s(0, 1030),
          e.setIn(r.concat([String(i), "customization_spec", "language"]), n));
    }
    function u(e, t) {
      var n = o(
          "AdsDynamicAdCustomizationCustomizationSpecUtils",
        ).getCustomizationSpecPathFromAdgroup(e),
        r = o(
          "AdsDynamicAdCustomizationCustomizationSpecUtils",
        ).getCustomizationSpecFromAdgroup(e),
        a = r.findIndex(function (e) {
          return (
            o(
              "AdsDynamicAdCustomizationCustomizationSpecUtils",
            ).getLanguageFromRule(e) === t
          );
        });
      return a < 0 ? e : e.setIn(n, r.remove(a));
    }
    function c(e) {
      var t = o(
        "AdsDynamicAdCustomizationCustomizationSpecUtils",
      ).getCustomizationSpecPathFromAdgroup(e);
      return e.removeIn(t);
    }
    ((l.changeLanguageInCustomizationSpec = e),
      (l.removeLanguageFromCustomizationSpec = u),
      (l.removeCustomizationRuleSpec = c));
  },
  98,
);
