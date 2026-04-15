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
      return !o("WAWebABProps").getABPropConfigValue("privacy_tips_killswitch");
    }
    function u() {
      return (
        s() &&
        o("WAWebABProps").getABPropConfigValue("privacy_tips_groups_build")
      );
    }
    function c() {
      return (
        s() &&
        o("WAWebABProps").getABPropConfigValue("privacy_tips_profile_build")
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "updates_quick_promotion_banner_enabled",
      );
    }
    function m() {
      return o("WATimeUtils").castToUnixTime(
        o("WAWebABProps").getABPropConfigValue(
          "updates_privacy_notice_rollout_date",
        ),
      );
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_qp_emergency_force_fetch_nonce",
      );
    }
    function _() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("qp_campaign_client_enabled")
      );
    }
    function f() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_graphql_to_fetch_qp_enabled",
        )
      );
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_graphql_to_fetch_qp_frequency_mins",
      );
    }
    function h() {
      return o("WAWebMobilePlatforms").isSMB()
        ? g()
        : o("WAWebABProps").getABPropConfigValue(
            "consumer_web_qp_graphql_to_fetch_qp_frequency_mins",
          );
    }
    function y() {
      return (
        !o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "fetch_qp_via_graphql_web_enabled",
        )
      );
    }
    function C() {
      return o("WAWebMobilePlatforms").isSMB() ? f() : y();
    }
    function b(t) {
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
    function v() {
      return b(
        o("WAWebABProps").getABPropConfigValue(
          "smb_graphql_to_fetch_qp_surface_ids",
        ),
      );
    }
    function S() {
      return b(
        o("WAWebABProps").getABPropConfigValue(
          "consumer_graphql_web_to_fetch_qp_surface_ids",
        ),
      );
    }
    function R() {
      return o("WAWebMobilePlatforms").isSMB() ? v() : S();
    }
    ((l.groupsPrivacyTipsEnabled = u),
      (l.profilePrivacyTipsEnabled = c),
      (l.updatesTabQuickPromotionBannerEnabled = d),
      (l.getUpdatesTabPrivacyNoticeRolloutDate = m),
      (l.qpEmergencyForceFetchNonce = p),
      (l.qpCampaignsEnabledSMB = _),
      (l.qpGraphQLEnabledSMB = f),
      (l.qpGraphQLFetchIntervalMinutesSMB = g),
      (l.qpGraphQLFetchIntervalMinutes = h),
      (l.consumerQpGraphQLEnabled = y),
      (l.qpGraphQLEnabled = C),
      (l.qpSurfaceIdsUsingGraphQLSMB = v),
      (l.qpSurfaceIdsUsingGraphQLConsumer = S),
      (l.qpSurfaceIdsUsingGraphQL = R));
  },
  98,
);
