__d(
  "WAWebQuickPromotionGating",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebCTWAConstants",
    "WAWebMobilePlatforms",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "privacy_tips_profile_build",
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "updates_quick_promotion_banner_enabled",
      );
    }
    function c() {
      return o("WATimeUtils").castToUnixTime(
        o("WAWebABProps").getABPropConfigValue(
          "updates_privacy_notice_rollout_date",
        ),
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_qp_emergency_force_fetch_nonce",
      );
    }
    function m() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_graphql_to_fetch_qp_enabled",
        )
      );
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_graphql_to_fetch_qp_frequency_mins",
      );
    }
    function _() {
      return o("WAWebMobilePlatforms").isSMB()
        ? p()
        : o("WAWebABProps").getABPropConfigValue(
            "consumer_web_qp_graphql_to_fetch_qp_frequency_mins",
          );
    }
    function f() {
      return (
        !o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "fetch_qp_via_graphql_web_enabled",
        )
      );
    }
    function g() {
      return o("WAWebMobilePlatforms").isSMB() ? m() : f();
    }
    function h(t) {
      var n = new Map(
          Array.from(
            o("WAWebCTWAConstants").KNOWN_QP_SURFACES.values(),
            function (e) {
              return [e, e];
            },
          ),
        ),
        r = new Set(),
        a = [],
        i = 0;
      return (
        t.split(",").forEach(function (e) {
          var t = n.get(e);
          t != null ? r.add(t) : (i++, a.length < 3 && a.push(e));
        }),
        i > 0 &&
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "qpSurfaceIdsUsingGraphQL: ",
                " unknown surface IDs => ",
                "",
              ])),
            i,
            a,
          ),
        r
      );
    }
    function y() {
      return h(
        o("WAWebABProps").getABPropConfigValue(
          "smb_graphql_to_fetch_qp_surface_ids",
        ),
      );
    }
    function C() {
      return h(
        o("WAWebABProps").getABPropConfigValue(
          "consumer_graphql_web_to_fetch_qp_surface_ids",
        ),
      );
    }
    function b() {
      return o("WAWebMobilePlatforms").isSMB() ? y() : C();
    }
    ((l.profilePrivacyTipsEnabled = s),
      (l.updatesTabQuickPromotionBannerEnabled = u),
      (l.getUpdatesTabPrivacyNoticeRolloutDate = c),
      (l.qpEmergencyForceFetchNonce = d),
      (l.qpGraphQLEnabledSMB = m),
      (l.qpGraphQLFetchIntervalMinutesSMB = p),
      (l.qpGraphQLFetchIntervalMinutes = _),
      (l.consumerQpGraphQLEnabled = f),
      (l.qpGraphQLEnabled = g),
      (l.qpSurfaceIdsUsingGraphQLSMB = y),
      (l.qpSurfaceIdsUsingGraphQLConsumer = C),
      (l.qpSurfaceIdsUsingGraphQL = b));
  },
  98,
);
