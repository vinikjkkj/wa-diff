__d(
  "AdsIntelligentComponentsTargeting",
  ["AdsICContextualTargetingPredicatePlugins"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return t.hasIn(e) ? t.getIn(e) : null;
    }
    function s(e, t) {
      if (e == null) return !0;
      var n = e.contextual_targeting_spec,
        r = e.targeting_spec_condition_type,
        o = e.targeting_spec == null ? 0 : e.version,
        a = o < 2 ? null : e.targeting_spec;
      switch (o) {
        case 2:
          return a == null ? !0 : u(t, a);
        case 0:
        case 1:
        default:
          return u(
            t,
            Object.freeze({ condition_type: r, rules: n, rule_groups: [] }),
          );
      }
    }
    function u(e, t) {
      switch (t.condition_type) {
        case "any_of":
          return (
            t.rules.some(function (t) {
              return c(t, e);
            }) ||
            t.rule_groups.some(function (t) {
              return u(e, t);
            })
          );
        case "all_of":
        default:
          return (
            t.rules.every(function (t) {
              return c(t, e);
            }) &&
            t.rule_groups.every(function (t) {
              return u(e, t);
            })
          );
      }
    }
    function c(t, n) {
      var o = e(t.context_field, n);
      return r("AdsICContextualTargetingPredicatePlugins")
        .get(t.predicate)
        .matches(o, t.value);
    }
    l.isMessageMatchingContext = s;
  },
  98,
);
