__d(
  "AdsCreativeSiteLinksAPICallUtils",
  [
    "AdsAPICampaignRecordUtils",
    "AdsGraphAPI",
    "AdsInterfacesLogger",
    "AdsMetadataConnectedSourcesUtils",
    "SEFunnelLogger",
    "asyncToGeneratorRuntime",
    "cr:37829",
    "getErrorSafe",
    "immutable",
    "isValidURL",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { defaultOnType: null, defaultOnURL: null };
    function s(e) {
      return o("AdsGraphAPI")
        .get(i.id)
        .adaccount(e.account_id)
        .get({
          fields: [
            d(
              e.url,
              e.recommendation_type,
              e.promoted_object,
              e.targeting_countries,
              e.page_id,
              e.adgroup_id,
              e.ad_image_hash,
            ),
          ],
          limit: 20,
        })
        .then(function (t) {
          return m(
            t.site_links_live_crawl,
            e.caller,
            e.adgroup_id,
            e.account_id,
            e.url,
          );
        })
        .catch(function (t) {
          var n = r("getErrorSafe")(t);
          return (
            o("SEFunnelLogger").logL1SiteLinksAPIFail(
              { ad_account_id: e.account_id, adgroup_id: e.adgroup_id },
              {
                caller: e.caller,
                error_message: n == null ? void 0 : n.message,
                source_url: e.url,
              },
            ),
            _(n, e.caller),
            m(null, e.caller, e.adgroup_id, e.account_id, e.url)
          );
        });
    }
    function u(e, t, n, o, a) {
      var i,
        l = t != null && !r("isValidURL")(t),
        s =
          (i = e.creative) == null || (i = i.creative_sourcing_spec) == null
            ? void 0
            : i.site_links_spec,
        u = s == null || (s == null ? void 0 : s.size) === 0;
      if (l || u) {
        var c;
        r("AdsInterfacesLogger").logOnce({
          data:
            ((c = {}),
            (c.message = JSON.stringify({ sourceUrl: t, newSourceUrl: o })),
            (c.adgroup_id = n),
            (c.caller = a),
            (c.source = l ? "fix" : "update"),
            c),
          eventName: "ads_connected_sources_fix_source_url",
        });
      }
      return (l || u) && t !== o && o != null && o !== "";
    }
    function c(e, t, a, l, s, u, c, p, f, g) {
      return o("AdsGraphAPI")
        .get(i.id)
        .adaccount(l)
        .get({ fields: [d(t, a, u, p, f, s, g)], limit: 20 })
        .then(function (a) {
          var u = a.site_links_live_crawl,
            d = m(u, c, s, l, t);
          if (s != null) {
            var p = o(
                "AdsMetadataConnectedSourcesUtils",
              ).getSiteLinksDefaultOnType(d),
              _ = o("AdsAPICampaignRecordUtils").getOptimizationGoal(e);
            p != null &&
              n("cr:37829").dispatch(
                {
                  adgroupIDs: [s],
                  siteLinksSpec: d != null ? d : r("immutable").List(),
                  defaultOnType: p,
                  defaultOnURL: t,
                  optimizationGoal: _,
                },
                {
                  line: "217",
                  module: "AdsCreativeSiteLinksAPICallUtils.js",
                  moduleID: i.id,
                },
              );
          }
          return d;
        })
        .catch(function (e) {
          var n = r("getErrorSafe")(e);
          return (
            o("SEFunnelLogger").logL1SiteLinksAPIFail(
              { ad_account_id: l, adgroup_id: s },
              {
                caller: c,
                error_message: n == null ? void 0 : n.message,
                source_url: t,
              },
            ),
            _(n, c),
            m(null, c, s, l, t)
          );
        });
    }
    function d(e, t, n, r, o, a, i) {
      return (
        i === void 0 && (i = null),
        "site_links_live_crawl" +
          (e != null && e !== "" ? ".source_url(" + e + ")" : "") +
          (t != null ? ".site_link_recommendation_type(" + t + ")" : "") +
          (n != null
            ? ".promoted_object_spec(" + JSON.stringify(n) + ")"
            : "") +
          (r != null && r.length > 0
            ? ".targeting_countries(" + r.join(",") + ")"
            : "") +
          (o != null ? ".page_id(" + o + ")" : "") +
          (a != null ? ".adgroup_id(" + a + ")" : "") +
          (i != null ? ".ad_image_hash(" + i + ")" : "")
      );
    }
    function m(e, t, n, a, i) {
      (a === void 0 && (a = null), i === void 0 && (i = null));
      var l = e == null ? r("immutable").List() : r("immutable").List(e);
      if (e != null) {
        var s,
          u = l.first();
        o("SEFunnelLogger").logL1SiteLinksAPISuccess(
          { ad_account_id: a, adgroup_id: n },
          {
            caller: t,
            is_defaulting_eligible:
              (u == null ? void 0 : u.is_defaulting_eligible) === !0,
            recommendation_type:
              (s = u == null ? void 0 : u.site_link_recommendation_type) != null
                ? s
                : null,
            site_links_count: l.size,
            source_url: i,
          },
        );
      }
      return (p(l.size > 0 ? l : null, t, n), l);
    }
    function p(e, t, n) {
      var o, a, i;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((i = {}),
          (i.message = JSON.stringify({
            siteLinks: Array.from(
              (o = e == null ? void 0 : e.values()) != null ? o : [],
            ),
            count: (a = e == null ? void 0 : e.size) != null ? a : 0,
          })),
          (i.caller = t),
          (i.adgroup_id = n),
          i),
        eventName: "ads_connected_sources_results_loaded",
      });
    }
    function _(e, t) {
      var n;
      r("AdsInterfacesLogger").log({
        data:
          ((n = {}),
          (n.message = JSON.stringify({
            errorMessage: e.message,
            errorCode: e.number,
            errorType: e.stack,
          })),
          (n.caller = t),
          n),
        eventName: "ads_connected_sources_results_loaded",
      });
    }
    function f(e, t, n, o, a, i) {
      var l;
      (n === void 0 && (n = "CONNECTED_SOURCE"),
        a === void 0 && (a = null),
        i === void 0 && (i = null),
        r("AdsInterfacesLogger").log({
          data:
            ((l = {}),
            (l.message = JSON.stringify({ siteLinks: o })),
            (l.optimization_goal = a),
            (l.action_type = t),
            (l.adgroup_id = e),
            (l.caller = n),
            (l.subsequent_data = i),
            l),
          eventName: "ads_connected_sources_add_site_links_by_default",
        }));
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          function t() {
            return a.apply(this, arguments);
          }
          function a() {
            return (
              (a = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var t = yield o("AdsGraphAPI")
                    .get(i.id)
                    .adaccount(e.account_id)
                    .get({
                      fields: [
                        C(
                          e.page_id,
                          e.promoted_object,
                          e.source_url,
                          e.targeting_countries,
                          e.adgroup_id,
                        ),
                      ],
                      limit: 20,
                    }),
                  n = t == null ? void 0 : t.domain_and_site_links,
                  r = n == null ? void 0 : n.site_links_spec,
                  a = n == null ? void 0 : n.source_url,
                  l = m(
                    r,
                    e.caller,
                    e.adgroup_id,
                    e.account_id,
                    a != null ? a : e.source_url,
                  );
                return { source_url: a, site_links_spec: l };
              })),
              a.apply(this, arguments)
            );
          }
          try {
            return yield t();
          } catch (t) {
            var l = r("getErrorSafe")(t);
            return (
              o("SEFunnelLogger").logL1SiteLinksAPIFail(
                { ad_account_id: e.account_id, adgroup_id: e.adgroup_id },
                {
                  caller: e.caller,
                  error_message: l == null ? void 0 : l.message,
                  source_url: e.source_url,
                },
              ),
              _(l, e.caller),
              { source_url: null, site_links_spec: null }
            );
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, a, l, s, u, c, d) {
      return o("AdsGraphAPI")
        .get(i.id)
        .adaccount(a)
        .get({ fields: [C(d, s, t, c, l)], limit: 20 })
        .then(function (s) {
          var c = s == null ? void 0 : s.domain_and_site_links,
            d = c == null ? void 0 : c.site_links_spec,
            p = c == null ? void 0 : c.source_url,
            _ = m(d, u, l, a, p != null ? p : t);
          if (l != null) {
            var f = o(
                "AdsMetadataConnectedSourcesUtils",
              ).getSiteLinksDefaultOnType(_),
              g = o("AdsAPICampaignRecordUtils").getOptimizationGoal(e);
            f != null &&
              n("cr:37829").dispatch(
                {
                  adgroupIDs: [l],
                  siteLinksSpec: _ != null ? _ : r("immutable").List(),
                  defaultOnType: f,
                  defaultOnURL: p,
                  sourceURL: p,
                  optimizationGoal: g,
                },
                {
                  line: "446",
                  module: "AdsCreativeSiteLinksAPICallUtils.js",
                  moduleID: i.id,
                },
              );
          }
          return { source_url: p, site_links_spec: _ };
        })
        .catch(function (e) {
          var n = r("getErrorSafe")(e);
          return (
            o("SEFunnelLogger").logL1SiteLinksAPIFail(
              { ad_account_id: a, adgroup_id: l },
              {
                caller: u,
                error_message: n == null ? void 0 : n.message,
                source_url: t,
              },
            ),
            _(n, u),
            { source_url: null, site_links_spec: null }
          );
        });
    }
    function C(e, t, n, r, o) {
      var a =
        "domain_and_site_links" +
        (e != null ? ".page_id(" + e + ")" : "") +
        (t != null ? ".promoted_object_spec(" + JSON.stringify(t) + ")" : "") +
        (n != null ? ".source_url(" + n + ")" : "") +
        (r != null && r.length > 0
          ? ".targeting_countries(" + r.join(",") + ")"
          : "") +
        (o != null ? ".adgroup_id(" + o + ")" : "");
      return a;
    }
    function b(e) {
      var t = [
        "link_id",
        "link_title",
        "link_url",
        "link_image_url",
        "link_image_hash",
        "link_domain",
        "link_type",
        "link_hash",
      ];
      return o("AdsGraphAPI")
        .get(i.id)
        .adaccount(e.account_id)
        .edge("management_site_links")
        .get({ fields: t.join(","), limit: 55 })
        .then(function (e) {
          return (v(r("immutable").List(e.data), null), e.data);
        })
        .catch(function (e) {
          return (v(r("immutable").List(), e), r("immutable").List());
        });
    }
    function v(e, t) {
      var n;
      r("AdsInterfacesLogger").log({
        data:
          ((n = {}),
          (n.error_name = t == null ? void 0 : t.message),
          (n.error_code = t == null ? void 0 : t.number),
          (n.error_data = t == null ? void 0 : t.stack),
          (n.message = JSON.stringify(e)),
          n),
        eventName: "ads_connected_sources_management_site_links_response",
      });
    }
    ((l.defaultSiteLinkNoticeData = e),
      (l.loadSiteLinks = s),
      (l.shouldFixInvalidSourceUrl = u),
      (l.loadSiteLinksWithMutation = c),
      (l.logSiteLikeItemsResult = p),
      (l.logSiteLinkSpecDefaultOn = f),
      (l.loadDomainAndSiteLinks = g),
      (l.loadDomainAndSiteLinksWithMutation = y),
      (l.getDomainAndSiteLinkRequestField = C),
      (l.loadManagementSiteLinks = b));
  },
  98,
);
