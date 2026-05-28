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
        o("WAWebABProps").getABPropConfigValue("qp_campaign_client_enabled")
      );
    }
    function p() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_graphql_to_fetch_qp_enabled",
        )
      );
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_graphql_to_fetch_qp_frequency_mins",
      );
    }
    function f() {
      return o("WAWebMobilePlatforms").isSMB()
        ? _()
        : o("WAWebABProps").getABPropConfigValue(
            "consumer_web_qp_graphql_to_fetch_qp_frequency_mins",
          );
    }
    function g() {
      return (
        !o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "fetch_qp_via_graphql_web_enabled",
        )
      );
    }
    function h() {
      return o("WAWebMobilePlatforms").isSMB() ? p() : g();
    }
    function y(t) {
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
    function C() {
      return y(
        o("WAWebABProps").getABPropConfigValue(
          "smb_graphql_to_fetch_qp_surface_ids",
        ),
      );
    }
    function b() {
      return y(
        o("WAWebABProps").getABPropConfigValue(
          "consumer_graphql_web_to_fetch_qp_surface_ids",
        ),
      );
    }
    function v() {
      return o("WAWebMobilePlatforms").isSMB() ? C() : b();
    }
    ((l.profilePrivacyTipsEnabled = s),
      (l.updatesTabQuickPromotionBannerEnabled = u),
      (l.getUpdatesTabPrivacyNoticeRolloutDate = c),
      (l.qpEmergencyForceFetchNonce = d),
      (l.qpCampaignsEnabledSMB = m),
      (l.qpGraphQLEnabledSMB = p),
      (l.qpGraphQLFetchIntervalMinutesSMB = _),
      (l.qpGraphQLFetchIntervalMinutes = f),
      (l.consumerQpGraphQLEnabled = g),
      (l.qpGraphQLEnabled = h),
      (l.qpSurfaceIdsUsingGraphQLSMB = C),
      (l.qpSurfaceIdsUsingGraphQLConsumer = b),
      (l.qpSurfaceIdsUsingGraphQL = v));
  },
  98,
);
