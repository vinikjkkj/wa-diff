__d(
  "AndromedaValidatorConfigReverseInteropL1",
  [
    "AndromedaValidatorConfigReverseInteropBase",
    "AndromedaValidatorTreeMatcherOptions",
    "DateTime",
    "Timezone",
    "URI",
    "areEqual",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 300,
      c = {
        __global: babelHelpers.extends(
          {},
          o("AndromedaValidatorTreeMatcherOptions").baseGlobalOptions,
          {
            matchers: {
              ad_active_time: function (t, n) {
                return t == null || n == null
                  ? t == null && n == null
                  : Math.abs(Number(t) - Number(n)) < u ||
                      Number(t) === 0 ||
                      Number(n) === 0;
              },
              authorization_category: function (t, n) {
                return t === n || (n == null && t === "NONE");
              },
              ad_review_feedback: function (n, o) {
                return (
                  (o == null && n !== null) || (e || (e = r("areEqual")))(n, o)
                );
              },
              creative: {
                asset_feed_spec: {
                  asset_customization_rules: {
                    customization_spec: {
                      geo_locations: o("AndromedaValidatorTreeMatcherOptions")
                        .geoLocationMatcher,
                    },
                    targeting: {
                      geo_locations: o("AndromedaValidatorTreeMatcherOptions")
                        .geoLocationMatcher,
                    },
                  },
                },
                link_url: function (t, n) {
                  return (
                    t === n ||
                    (n != null &&
                      t != null &&
                      (t === encodeURI(n) || decodeURI(t) === decodeURI(n)))
                  );
                },
              },
              demolink_hash: function (t, n) {
                return (t == null && n == null) || (t !== null && n !== null);
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
              creative_link_url: function (t, n) {
                return (
                  t === n ||
                  (n != null &&
                    t != null &&
                    (t === encodeURI(n) || decodeURI(t) === decodeURI(n)))
                );
              },
              thumbnail_url: function (t, n) {
                return (t == null && n == null) || (t !== null && n !== null);
              },
              image_url: function (t, n) {
                if (t === n) return !0;
                if (t != null && n != null) {
                  var e = new (s || (s = r("URI")))(t),
                    o = new s(n);
                  return e.getPath() === o.getPath();
                }
                return !1;
              },
            },
          },
        ),
      },
      d = (function (e) {
        function t() {
          for (var t, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
            o[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(o)) || this),
            (t.validationType = "reverse_interop_expected_mismatch"),
            (t.qplEvent = r("qpl")._(41499532, "984")),
            (t.logDataOnMismatch = !0),
            (t.logActionsOnMismatch = !1),
            (t.treeMatcherOptions = c),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(r("AndromedaValidatorConfigReverseInteropBase")),
      m = new d();
    l.default = m;
  },
  98,
);
