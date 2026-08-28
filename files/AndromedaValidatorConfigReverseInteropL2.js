__d(
  "AndromedaValidatorConfigReverseInteropL2",
  [
    "AdsCampaignGroupTimeSuggestionMatcher",
    "AndromedaValidatorConfigReverseInteropBase",
    "AndromedaValidatorTreeMatcherOptions",
    "DateTime",
    "Timezone",
    "areEqual",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 10,
      u = 5,
      c = 100,
      d = 300,
      m = {
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
                  ) <= s || Math.abs(e - r) <= c
                );
              },
              lifetime_spent: function (t, n) {
                return (
                  o("AndromedaValidatorTreeMatcherOptions").getPercentChange(
                    Number(t),
                    Number(n),
                  ) < u
                );
              },
              time_suggestion: r("AdsCampaignGroupTimeSuggestionMatcher"),
              line_number: function (t, n) {
                return String(t) === String(n);
              },
              campaign_active_time: function (t, n) {
                var e = Number(t),
                  r = Number(n);
                return (
                  o("AndromedaValidatorTreeMatcherOptions").getPercentChange(
                    e,
                    r,
                  ) <= u || Math.abs(e - r) <= d
                );
              },
              targeting: {
                genders: function (n, o) {
                  var t = n != null ? n : [],
                    a = o != null ? o : [];
                  return a.includes(0)
                    ? (e || (e = r("areEqual")))(t.concat(0).sort(), a.sort())
                    : (e || (e = r("areEqual")))(t, a);
                },
                geo_locations: o("AndromedaValidatorTreeMatcherOptions")
                  .geoLocationMatcher,
                excluded_geo_locations: o(
                  "AndromedaValidatorTreeMatcherOptions",
                ).geoLocationMatcher,
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
                return Math.abs(e.instant - a.instant) < d;
              },
            },
          },
        ),
      },
      p = (function (e) {
        function t() {
          for (var t, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
            o[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(o)) || this),
            (t.validationType = "reverse_interop_expected_mismatch"),
            (t.qplEvent = r("qpl")._(41499532, "984")),
            (t.logDataOnMismatch = !0),
            (t.logActionsOnMismatch = !1),
            (t.treeMatcherOptions = m),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(r("AndromedaValidatorConfigReverseInteropBase")),
      _ = new p();
    l.default = _;
  },
  98,
);
