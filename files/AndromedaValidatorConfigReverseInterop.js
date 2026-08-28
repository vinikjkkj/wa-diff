__d(
  "AndromedaValidatorConfigReverseInterop",
  [
    "AdsCampaignGroupTimeSuggestionMatcher",
    "AdsLoginAs",
    "AndromedaValidatorConfig",
    "AndromedaValidatorTreeMatcherOptions",
    "CurrentUser",
    "getErrorSafe",
    "mergeAnnotations",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        __global: babelHelpers.extends(
          {},
          o("AndromedaValidatorTreeMatcherOptions").baseGlobalOptions,
          {
            matchers: {
              spend_cap: function (t, n) {
                return o(
                  "AndromedaValidatorTreeMatcherOptions",
                ).compareNumberWithString(t, n);
              },
              time_suggestion: r("AdsCampaignGroupTimeSuggestionMatcher"),
              line_number: function (t, n) {
                return String(t) === String(n);
              },
              demolink_hash: function (t, n) {
                return (t == null && n == null) || (t !== null && n !== null);
              },
              campaign_group_active_time: function (t, n) {
                return o(
                  "AndromedaValidatorTreeMatcherOptions",
                ).compareNumberWithString(t, n);
              },
              picture: {
                data: {
                  is_silhouette: function (t, n) {
                    return !0;
                  },
                  height: function (t, n) {
                    return !0;
                  },
                  width: function (t, n) {
                    return !0;
                  },
                  url: function (t, n) {
                    return (
                      t.split("?")[0].replace("z-p3-", "") ===
                      n.split("?")[0].replace("z-p3-", "")
                    );
                  },
                },
              },
              cover: {
                source: function (t, n) {
                  return t.replace("z-p3-", "") === n.replace("z-p3-", "");
                },
              },
              profile_picture_url: function (t, n) {
                return t.split("?")[0] === n.split("?")[0];
              },
              profile_picture: function (t, n) {
                return t.split("?")[0] === n.split("?")[0];
              },
              name_with_location_descriptor: function (t, n) {
                return !0;
              },
              userpermissions: o("AndromedaValidatorTreeMatcherOptions")
                .userPermissionsMatcher,
              automated_chat_default_template_id: function (t, n) {
                return !0;
              },
              hours: function (t, n) {
                return !0;
              },
              location: {
                located_in: function (t, n) {
                  return !0;
                },
              },
              businessprojects: {
                paging: function (t, n) {
                  return !0;
                },
              },
              connected_instagram_account: function (t, n) {
                return o("AdsLoginAs").isUsingLoginAs() ||
                  r("CurrentUser").isTestUser()
                  ? !0
                  : (t == null ? void 0 : t.user_igid) ===
                      (n == null ? void 0 : n.user_igid) &&
                      (t == null ? void 0 : t.profile_picture) ===
                        (n == null ? void 0 : n.profile_picture);
              },
            },
          },
        ),
      },
      s = (function (t) {
        function n() {
          for (var n, o = arguments.length, a = new Array(o), i = 0; i < o; i++)
            a[i] = arguments[i];
          return (
            (n = t.call.apply(t, [this].concat(a)) || this),
            (n.validationType = "reverse_interop"),
            (n.qplEvent = r("qpl")._(41499532, "984")),
            (n.logDataOnMismatch = !0),
            (n.logActionsOnMismatch = !1),
            (n.treeMatcherOptions = e),
            babelHelpers.assertThisInitialized(n) ||
              babelHelpers.assertThisInitialized(n)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.compareState = function (t, n, o, a, i, l, s) {
            i === void 0 && (i = null);
            var e = {},
              u,
              c;
            try {
              if (s != null) {
                var d = {},
                  m = {};
                (Object.keys(a).map(function (e, t) {
                  d[e] = a[e][s];
                }),
                  Object.keys(o).map(function (e, t) {
                    m[e] = o[e][s];
                  }),
                  (u = JSON.stringify(d)),
                  (c = JSON.stringify(m)));
              }
            } catch (t) {
              var p = r("getErrorSafe")(t),
                _ = p;
              e.string = { error: _.toString(), error_stack: _.stack };
            }
            var f = r("mergeAnnotations")(
              e,
              r("mergeAnnotations")(
                {
                  string: {
                    ids: JSON.stringify(n),
                    testUpdatedTimes: u,
                    controlUpdatedTimes: c,
                  },
                },
                i,
              ),
            );
            this.logWithoutTypeGuards(t, o, a, {
              extraAnnotations: f,
              fieldsToMatch: l,
            });
          }),
          n
        );
      })(r("AndromedaValidatorConfig")),
      u = new s();
    l.default = u;
  },
  98,
);
