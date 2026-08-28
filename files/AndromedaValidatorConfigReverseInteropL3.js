__d(
  "AndromedaValidatorConfigReverseInteropL3",
  [
    "AdsCampaignGroupTimeSuggestionMatcher",
    "AndromedaValidatorConfigReverseInteropBase",
    "AndromedaValidatorTreeMatcherOptions",
    "DateTime",
    "Timezone",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 5,
      s = 300,
      u = 10,
      c = 100,
      d = {
        __global: babelHelpers.extends(
          {},
          o("AndromedaValidatorTreeMatcherOptions").baseGlobalOptions,
          {
            matchers: {
              budget_remaining: function (t, n) {
                var e = Number(t),
                  r = Number(n);
                return (
                  o("AndromedaValidatorTreeMatcherOptions").getPercentChange(
                    e,
                    r,
                  ) <= u || Math.abs(e - r) <= c
                );
              },
              lifetime_spent: function (n, r) {
                return (
                  o("AndromedaValidatorTreeMatcherOptions").getPercentChange(
                    Number(n),
                    Number(r),
                  ) < e
                );
              },
              time_suggestion: r("AdsCampaignGroupTimeSuggestionMatcher"),
              spend_cap: function (t, n) {
                return o(
                  "AndromedaValidatorTreeMatcherOptions",
                ).compareNumberWithString(t, n);
              },
              today_spent: function (n, r) {
                return (
                  o("AndromedaValidatorTreeMatcherOptions").getPercentChange(
                    Number(n),
                    Number(r),
                  ) < e
                );
              },
              yesterday_spent: function (n, r) {
                return (
                  o("AndromedaValidatorTreeMatcherOptions").getPercentChange(
                    Number(n),
                    Number(r),
                  ) < e
                );
              },
              boosted_component_product: function (t, n) {
                return t != null && n == null;
              },
              boosted_page_id: function (t, n) {
                return t != null && n == null;
              },
              campaign_group_active_time: function (n, r) {
                return (
                  o("AndromedaValidatorTreeMatcherOptions").getPercentChange(
                    Number(n),
                    Number(r),
                  ) <= e || Math.abs(Number(n) - Number(r)) <= s
                );
              },
              source_campaign_id: function (t, n) {
                return t == null && n === "0";
              },
              budget_strategy: function (t, n) {
                return t === "UNDEFINED" && n == null;
              },
              effective_status: function (t, n) {
                return (t == null && n == null) || (t !== null && n !== null);
              },
              updated_time: function (t, n) {
                if (t == null || n == null) return t == null && n == null;
                var e = r("DateTime").fromISOString(t, o("Timezone").UTC),
                  a = r("DateTime").fromISOString(n, o("Timezone").UTC);
                return e.instant > a.instant;
              },
              time_end: function (t, n) {
                if (t == null || n == null) return t == null && n == null;
                var e = r("DateTime").fromISOString(t, o("Timezone").UTC),
                  a = r("DateTime").fromISOString(n, o("Timezone").UTC);
                return Math.abs(e.instant - a.instant) < s;
              },
            },
          },
        ),
      },
      m = (function (e) {
        function t() {
          for (var t, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
            o[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(o)) || this),
            (t.validationType = "reverse_interop_expected_mismatch"),
            (t.qplEvent = r("qpl")._(41499532, "984")),
            (t.logDataOnMismatch = !0),
            (t.logActionsOnMismatch = !1),
            (t.treeMatcherOptions = d),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(r("AndromedaValidatorConfigReverseInteropBase")),
      p = new m();
    l.default = p;
  },
  98,
);
