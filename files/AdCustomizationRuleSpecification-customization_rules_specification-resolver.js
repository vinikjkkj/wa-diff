__d(
  "AdCustomizationRuleSpecification-customization_rules_specification-resolver",
  [
    "AdCustomizationRuleSpecUtil",
    "AdCustomizationRuleSpecificationCustomizationRulesSpecificationResolver.graphql",
    "RelayHooks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r = o("RelayHooks").readFragment(
        e !== void 0
          ? e
          : (e = n(
              "AdCustomizationRuleSpecificationCustomizationRulesSpecificationResolver.graphql",
            )),
        t,
      );
      return o("AdCustomizationRuleSpecUtil").coerceGraphQLSpecToGraphAPI(r);
    }
    l.customization_rules_specification = s;
  },
  98,
);
