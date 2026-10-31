__d(
  "WAWebQuickPromotionGating",
  ["WALogger", "WAWebABProps", "WAWebCTWAConstants", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_graphql_to_fetch_qp_enabled",
        )
      );
    }
    function u() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue(
            "smb_graphql_to_fetch_qp_frequency_mins",
          )
        : o("WAWebABProps").getABPropConfigValue(
            "consumer_web_qp_graphql_to_fetch_qp_frequency_mins",
          );
    }
    function c() {
      return !o("WAWebMobilePlatforms").isSMB() || s();
    }
    function d(t) {
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
    function m() {
      return d(
        o("WAWebABProps").getABPropConfigValue(
          "smb_graphql_to_fetch_qp_surface_ids",
        ),
      );
    }
    function p() {
      return d(
        o("WAWebABProps").getABPropConfigValue(
          "consumer_graphql_web_to_fetch_qp_surface_ids",
        ),
      );
    }
    function _() {
      return o("WAWebMobilePlatforms").isSMB() ? m() : p();
    }
    ((l.qpGraphQLEnabledSMB = s),
      (l.qpGraphQLFetchIntervalMinutes = u),
      (l.qpGraphQLEnabled = c),
      (l.qpSurfaceIdsUsingGraphQLSMB = m),
      (l.qpSurfaceIdsUsingGraphQLConsumer = p),
      (l.qpSurfaceIdsUsingGraphQL = _));
  },
  98,
);
