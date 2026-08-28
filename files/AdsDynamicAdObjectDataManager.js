__d(
  "AdsDynamicAdObjectDataManager",
  [
    "AdsAdObjectFieldUtil",
    "AdsApplicationUtils",
    "AdsDynamicAdgroupDataManagerPreloader",
    "AdsDynamicCampaignDataManagerPreloader",
    "AdsDynamicCampaignGroupDataManagerPreloader",
    "AdsGraphAPI",
    "AdsMgmtPreloadingUtils",
    "AdsPEAdObjectTableDataManagerPreloader",
    "AdsPERouteName",
    "AdsPERouterHelper",
    "AndromedaValidatorConfigReverseInteropL1",
    "FBLogger",
    "Promise",
    "ReverseInteropUtil",
    "chunkArray",
    "cr:6214",
    "cr:7585",
    "filterNulls",
    "gkx",
    "performanceAbsoluteNow",
    "shouldValidateReverseInterop",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 100,
      c = new Set(["id", "name", "adset_id", "campaign_id"]);
    function d(e) {
      if (o("AdsApplicationUtils").isPowerEditor()) {
        var t = r("AdsPERouterHelper").getRouter();
        return t.hasActiveRoute(e);
      }
      return !1;
    }
    function m(e, t, n) {
      r("gkx")("3108") &&
        (e.size >= 20 || e.size === 5) &&
        (e.size * t.size > u || t.has("creative")) &&
        r("FBLogger")("ads_large_fanout", "dynamic_adgroup").warn(
          "%s call loaded more than %s fields: ids: %s, fields: %s",
          n,
          u,
          e.size,
          t.size,
        );
      var a = n != null ? n : i.id,
        l = Array.from(t).map(function (e) {
          return o("AdsAdObjectFieldUtil").AdgroupFields[e];
        }),
        s = { fields: Array.from(l), am_call_tags: { data_manager: a } },
        d = n === "AdsPEAdObjectTableDataManager",
        m = d
          ? r("AdsPEAdObjectTableDataManagerPreloader").preloader
          : r("AdsDynamicAdgroupDataManagerPreloader").preloader,
        _ = l.every(function (e) {
          return c.has(e);
        }),
        g = d ? (_ ? 20 : 5) : null;
      return g != null
        ? p(e, g, s, m, a, t)
        : f(e, "dynamic_adgroup", s, m, a, t);
    }
    function p(e, t, o, a, i, l) {
      var u = r("chunkArray")(Array.from(e), t),
        c = (s || (s = n("Promise"))).all(
          u.map(function (e) {
            return f(new Set(e), "dynamic_adgroup", o, a, i);
          }),
        );
      return (
        _(c, u, e, l),
        c.then(function (e) {
          return e.reduce(function (e, t) {
            return babelHelpers.extends({}, e, t);
          });
        })
      );
    }
    function _(t, a, l, u) {
      if (
        r("gkx")("21527") &&
        r("shouldValidateReverseInterop")("adgroup") &&
        n("cr:6214") != null
      ) {
        var c = (e || (e = r("performanceAbsoluteNow")))(),
          d = e(),
          m = t.then(function (t) {
            return {
              response: t.reduce(function (e, t) {
                return Object.assign(e, t);
              }, {}),
              duration: (e || (e = r("performanceAbsoluteNow")))() - d,
            };
          }),
          p = e(),
          _ = (s || (s = n("Promise")))
            .all(
              a.map(function (e) {
                return n("cr:6214").fetchAdgroupSpec(e);
              }),
            )
            .then(function (t) {
              return {
                response: t
                  .map(function (e) {
                    return e == null ? void 0 : e.response;
                  })
                  .reduce(function (e, t) {
                    return Object.assign(e, t);
                  }, {}),
                duration: (e || (e = r("performanceAbsoluteNow")))() - p,
              };
            });
        o("ReverseInteropUtil").logToReverseInterop(
          i.id,
          "ADGROUP",
          m,
          _,
          c,
          Array.from(l),
          "Double Read",
          u,
          "updated_time",
          r("AndromedaValidatorConfigReverseInteropL1"),
        );
      }
    }
    function f(e, t, a, i, l, s) {
      s === void 0 && (s = null);
      var u = Array.from(e),
        c = o("AdsGraphAPI")
          .get(l)
          .objects(t, u, !0)
          .preloadedBy(i, o("AdsMgmtPreloadingUtils").defaultConfig)
          .get(a);
      return (
        s != null &&
          n("cr:7585") != null &&
          n("cr:7585").shadowValidate(c, u, s),
        c.then(
          function (t) {
            var n = e.size,
              o = Object.keys(t).length;
            return (
              o !== n &&
                r("FBLogger")("ads").warn(
                  "Tried to load %s adgroup IDs, but received %s! This indicates a problem on the backend. IDs: %s",
                  n,
                  o,
                  u.join(","),
                ),
              t
            );
          },
          function (e) {
            throw e;
          },
        )
      );
    }
    function g(e, t, n) {
      var a = o("AdsAdObjectFieldUtil").CampaignGroupFields,
        l = r("filterNulls")(
          Array.from(t).map(function (e) {
            return a[e];
          }),
        ),
        s = n === "AdsPEAdObjectTableDataManager",
        u = Array.from(e),
        c = o("AdsGraphAPI")
          .get(n != null ? n : i.id)
          .objects("dynamic_campaign_group", u, !0)
          .preloadedBy(
            s
              ? r("AdsPEAdObjectTableDataManagerPreloader").preloader
              : r("AdsDynamicCampaignGroupDataManagerPreloader").preloader,
            s
              ? o("AdsMgmtPreloadingUtils").defaultConfig
              : babelHelpers.extends(
                  {},
                  o("AdsMgmtPreloadingUtils").defaultConfig,
                  {
                    isScenarioOngoing: function () {
                      return (
                        o(
                          "AdsMgmtPreloadingUtils",
                        ).defaultConfig.isScenarioOngoing() &&
                        d(r("AdsPERouteName").CAMPAIGNS)
                      );
                    },
                  },
                ),
          )
          .get({
            fields: Array.from(l),
            am_call_tags: { data_manager: n != null ? n : i.id },
          });
      return c.then(
        function (t) {
          var n = e.size,
            o = Object.keys(t).length;
          return (
            o !== n &&
              r("FBLogger")("ads").warn(
                "Tried to load %s campaign group IDs, but received %s! This indicates a problem on the backend. IDs: %s",
                n,
                o,
                u.join(","),
              ),
            t
          );
        },
        function (e) {
          throw e;
        },
      );
    }
    function h(e, t, n) {
      var a = o("AdsAdObjectFieldUtil").CampaignFields,
        l = Array.from(t).map(function (e) {
          return a[e];
        }),
        s = n === "AdsPEAdObjectTableDataManager",
        u = Array.from(e),
        c = o("AdsGraphAPI")
          .get(n != null ? n : i.id)
          .objects("dynamic_campaign", u, !0)
          .preloadedBy(
            s
              ? r("AdsPEAdObjectTableDataManagerPreloader").preloader
              : r("AdsDynamicCampaignDataManagerPreloader").preloader,
            s
              ? o("AdsMgmtPreloadingUtils").defaultConfig
              : babelHelpers.extends(
                  {},
                  o("AdsMgmtPreloadingUtils").defaultConfig,
                  {
                    isScenarioOngoing: function () {
                      return (
                        o(
                          "AdsMgmtPreloadingUtils",
                        ).defaultConfig.isScenarioOngoing() &&
                        d(r("AdsPERouteName").ADSETS)
                      );
                    },
                  },
                ),
          )
          .get({
            fields: Array.from(l),
            am_call_tags: { data_manager: n != null ? n : i.id },
          });
      return c.then(
        function (t) {
          var n = e.size,
            o = Object.keys(t).length;
          return (
            o !== n &&
              r("FBLogger")("ads").warn(
                "Tried to load %s campaign IDs, but received %s! This indicates a problem on the backend. IDs: %s",
                n,
                o,
                u.join(","),
              ),
            t
          );
        },
        function (e) {
          throw e;
        },
      );
    }
    ((l.loadAdgroups = m), (l.loadCampaignGroups = g), (l.loadCampaigns = h));
  },
  98,
);
