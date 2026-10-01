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
      return o("WATimeUtils").castToUnixTime(
        o("WAWebABProps").getABPropConfigValue(
          "updates_privacy_notice_rollout_date",
        ),
      );
    }
    function c() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_graphql_to_fetch_qp_enabled",
        )
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_graphql_to_fetch_qp_frequency_mins",
      );
    }
    function m() {
      return o("WAWebMobilePlatforms").isSMB()
        ? d()
        : o("WAWebABProps").getABPropConfigValue(
            "consumer_web_qp_graphql_to_fetch_qp_frequency_mins",
          );
    }
    function p() {
      return (
        !o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "fetch_qp_via_graphql_web_enabled",
        )
      );
    }
    function _() {
      return o("WAWebMobilePlatforms").isSMB() ? c() : p();
    }
    function f(t) {
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
    function g() {
      return f(
        o("WAWebABProps").getABPropConfigValue(
          "smb_graphql_to_fetch_qp_surface_ids",
        ),
      );
    }
    function h() {
      return f(
        o("WAWebABProps").getABPropConfigValue(
          "consumer_graphql_web_to_fetch_qp_surface_ids",
        ),
      );
    }
    function y() {
      return o("WAWebMobilePlatforms").isSMB() ? g() : h();
    }
    ((l.profilePrivacyTipsEnabled = s),
      (l.getUpdatesTabPrivacyNoticeRolloutDate = u),
      (l.qpGraphQLEnabledSMB = c),
      (l.qpGraphQLFetchIntervalMinutesSMB = d),
      (l.qpGraphQLFetchIntervalMinutes = m),
      (l.consumerQpGraphQLEnabled = p),
      (l.qpGraphQLEnabled = _),
      (l.qpSurfaceIdsUsingGraphQLSMB = g),
      (l.qpSurfaceIdsUsingGraphQLConsumer = h),
      (l.qpSurfaceIdsUsingGraphQL = y));
  },
  98,
);
