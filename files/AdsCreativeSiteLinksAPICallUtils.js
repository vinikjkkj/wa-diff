__d(
  "AdsCreativeSiteLinksAPICallUtils",
  [
    "AdsAPICampaignRecordUtils",
    "AdsCreativeSiteLinksSpec.flow",
    "AdsGraphAPI",
    "AdsInterfacesLogger",
    "AdsMetadataConnectedSourcesSetSiteLinksSpecAction",
    "AdsMetadataConnectedSourcesUtils",
    "AdsMetadataSiteExtensionDecisionTypes",
    "AdsMetadataSiteExtensionUtils",
    "AdsMetadataSiteLinkWebsiteHighlightsDedupeLoader",
    "AdsMgmtPreloadingUtils",
    "AdsSiteLinksExplicitOptOutUtils",
    "AdsUEditorHostIDs",
    "AsyncDataPreloader",
    "FBLogger",
    "JSResource",
    "SEFunnelLogger",
    "SiteLinksRelevancyURLUtils",
    "ads-lib-urllib",
    "getErrorSafe",
    "gkx",
    "immutable",
    "isValidURL",
    "justknobx",
    "performanceNow",
    "shouldServeSERelevanceSessionSiteLinks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("JSResource")("loadAdsCreativePrefilledSiteLinks").__setRef(
        "AdsCreativeSiteLinksAPICallUtils",
      ),
      u = new (r("AsyncDataPreloader"))({
        id: "AdsCreativeManagementSiteLinksPreloader",
      }),
      c = { defaultOnType: null, defaultOnURL: null };
    function d(t) {
      return Math.round((e || (e = r("performanceNow")))() - t);
    }
    function m(t, n, a) {
      a === void 0 && (a = {});
      var l = (e || (e = r("performanceNow")))(),
        s = o(
          "AdsMetadataSiteLinkWebsiteHighlightsDedupeLoader",
        ).fetchWebsiteHighlightsImagePaths(t.account_id, t.url, t.adgroup_id);
      return o("AdsGraphAPI")
        .get(i.id)
        .adaccount(t.account_id)
        .get({
          fields: [
            S(
              t.url,
              void 0,
              t.promoted_object,
              t.targeting_countries,
              t.page_id,
              t.adgroup_id,
              t.ad_image_hash,
            ),
          ],
          limit: 20,
        })
        .then(function (e) {
          return o(
            "AdsMetadataSiteLinkWebsiteHighlightsDedupeLoader",
          ).removeFetchedWebsiteHighlightsDuplicates(
            R(
              e.site_links_live_crawl,
              t.caller,
              t.adgroup_id,
              t.account_id,
              t.url,
              !1,
              n,
              d(l),
            ),
            s,
          );
        })
        .catch(function (e) {
          var i = r("getErrorSafe")(e);
          if (
            (o("SEFunnelLogger").logL1SiteLinksAPIFail(
              {
                ad_account_id: t.account_id,
                adgroup_id: t.adgroup_id,
                raw_object_creation_source: n,
              },
              {
                caller: t.caller,
                duration_ms: d(l),
                error_message: i == null ? void 0 : i.message,
                source_url: t.url,
              },
            ),
            E(i, t.caller),
            a.rejectOnError === !0)
          )
            throw i;
          return R(null, t.caller, t.adgroup_id, t.account_id, t.url);
        });
    }
    function p(e, t, n, o, a) {
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
    function _(e) {
      var t;
      return (t = r("ads-lib-urllib").cleanupUrl(e != null ? e : "")) != null
        ? t
        : "";
    }
    function f(e) {
      var t, n, r, o;
      if (e == null) return null;
      var a = (t = e.creative) == null ? void 0 : t.creative_sourcing_spec,
        i = a == null ? void 0 : a.site_links_data_consented,
        l =
          (n = e.creative) == null ||
          (n = n.degrees_of_freedom_spec) == null ||
          (n = n.creative_features_spec) == null
            ? void 0
            : n.site_extensions;
      return {
        dataConsentSource:
          i == null || (r = i.action_metadata) == null ? void 0 : r.type,
        dataConsentStatus: i == null ? void 0 : i.enroll_status,
        formatConsentSource:
          l == null || (o = l.action_metadata) == null ? void 0 : o.type,
        formatConsentStatus: l == null ? void 0 : l.enroll_status,
        siteLinksSpec: a == null ? void 0 : a.site_links_spec,
        sourceUrl: _(a == null ? void 0 : a.source_url),
      };
    }
    async function g(e, t) {
      try {
        var n = await s.load(),
          o = n.getAdgroupByID,
          a = await o(e, t);
        return f(a);
      } catch (e) {
        return (
          r("FBLogger")("ads_extensions")
            .catching(r("getErrorSafe")(e))
            .warn("Failed to read Site links state before applying a response"),
          null
        );
      }
    }
    function h(e, t, n) {
      var a, i, l, s;
      if (
        o("AdsSiteLinksExplicitOptOutUtils").hasExplicitSiteLinksOptOut(t) ||
        o("AdsSiteLinksExplicitOptOutUtils").hasExplicitSiteLinksOptOut(n)
      )
        return !1;
      if (t == null || n == null) return !0;
      var u = n.sourceUrl === t.sourceUrl || n.sourceUrl === _(e),
        c =
          (((a = (i = t.siteLinksSpec) == null ? void 0 : i.size) != null
            ? a
            : 0) === 0 &&
            ((l = (s = n.siteLinksSpec) == null ? void 0 : s.size) != null
              ? l
              : 0) === 0) ||
          r("immutable").is(t.siteLinksSpec, n.siteLinksSpec);
      return u && c;
    }
    function y(t, n, a, l, u, c, m, p, _, y, C, L) {
      var k = r("shouldServeSERelevanceSessionSiteLinks")(),
        I = l != null,
        T = I ? f(_) : null,
        D = o("AdsAPICampaignRecordUtils").getOptimizationGoal(t);
      if (k)
        return T != null &&
          !o("SiteLinksRelevancyURLUtils").isSiteLinksRelevancySourceURLCurrent(
            T.sourceUrl,
            n,
          )
          ? Promise.resolve(r("immutable").List())
          : s
              .load()
              .then(async function (e) {
                var t = e.applySESiteLinks,
                  o = e.loadSESiteLinksForApply,
                  i = async function () {
                    return l != null && h(n, T, await g(l, L));
                  },
                  s = await o(
                    {
                      account_id: a,
                      adgroup_id: l,
                      caller: c,
                      page_id: p,
                      promoted_object: u,
                      source_url: n,
                      targeting_countries: m,
                    },
                    L,
                    i,
                  );
                return (
                  l != null &&
                    s.siteLinks.length > 0 &&
                    (await i()) &&
                    (await t(l, s, D, L)),
                  r("immutable").List(s.siteLinks)
                );
              })
              .catch(function (e) {
                return (
                  r("FBLogger")("ads_extensions")
                    .catching(r("getErrorSafe")(e))
                    .warn(
                      "Failed to apply Site Extensions relevance session links",
                    ),
                  r("immutable").List()
                );
              });
      var x = (e || (e = r("performanceNow")))(),
        $ = o(
          "AdsMetadataSiteLinkWebsiteHighlightsDedupeLoader",
        ).fetchWebsiteHighlightsImagePaths(a, n, l);
      return o("AdsGraphAPI")
        .get(i.id)
        .adaccount(a)
        .get({ fields: [S(n, null, u, m, p, l, y)], limit: 20 })
        .then(function (e) {
          return o(
            "AdsMetadataSiteLinkWebsiteHighlightsDedupeLoader",
          ).removeFetchedWebsiteHighlightsDuplicates(
            R(e.site_links_live_crawl, c, l, a, n, !1, C, d(x)),
            $,
          );
        })
        .then(function (e) {
          if (l != null) {
            var t = o(
              "AdsMetadataConnectedSourcesUtils",
            ).getSiteLinksDefaultOnType(e);
            if (t != null) {
              var s = function () {
                r("AdsMetadataConnectedSourcesSetSiteLinksSpecAction").dispatch(
                  {
                    adgroupIDs: [l],
                    siteLinksSpec: e != null ? e : r("immutable").List(),
                    defaultOnType: t,
                    defaultOnURL: n,
                    optimizationGoal: D,
                  },
                  {
                    line: "442",
                    module: "AdsCreativeSiteLinksAPICallUtils.js",
                    moduleID: i.id,
                  },
                );
              };
              if (!I) s();
              else
                return g(l, L).then(function (t) {
                  return (
                    !r("shouldServeSERelevanceSessionSiteLinks")(!0) &&
                      h(n, T, t) &&
                      s(),
                    e
                  );
                });
            } else b(e, a, l, n, C);
          }
          return e;
        })
        .catch(function (e) {
          var t = r("getErrorSafe")(e);
          return (
            o("SEFunnelLogger").logL1SiteLinksAPIFail(
              {
                ad_account_id: a,
                adgroup_id: l,
                raw_object_creation_source: C,
              },
              {
                caller: c,
                duration_ms: d(x),
                error_message: t == null ? void 0 : t.message,
                source_url: n,
              },
            ),
            E(t, c),
            v(a, l, n, C),
            R(null, c, l, a, n)
          );
        });
    }
    function C(e, t, n, r, a, i, l) {
      var s;
      a != null &&
        o("SEFunnelLogger").logL1SiteLinkDefaultDecision(
          {
            ad_account_id: r,
            adgroup_id: a,
            object_level: "ad_level",
            raw_object_creation_source: l,
          },
          o("AdsMetadataSiteExtensionDecisionTypes").blockSEDecision(
            e,
            o(
              "AdsMetadataSiteExtensionDecisionTypes",
            ).createSEDecisionInputResolution("not_required", "not_required"),
            { blockingReasonsExhaustive: !1 },
          ),
          babelHelpers.extends(
            {},
            o("SEFunnelLogger").getSEGKBlocklistFields(),
            {
              decision_source: t,
              is_defaulting_eligible:
                (n == null || (s = n.first()) == null
                  ? void 0
                  : s.is_defaulting_eligible) === !0,
              recommendation_type: null,
              se_default_enabled: !1,
              source_url: i,
            },
          ),
        );
    }
    function b(e, t, n, r, o) {
      C(
        e.size > 0 ? "NOT_DEFAULTING_ELIGIBLE" : "NO_SITE_LINKS",
        "loader_no_default",
        e,
        t,
        n,
        r,
        o,
      );
    }
    function v(e, t, n, r) {
      C("API_FAILED", "loader_api_failure", null, e, t, n, r);
    }
    function S(e, t, n, r, o, a, i) {
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
    function R(e, t, n, a, i, l, s, u) {
      (a === void 0 && (a = null),
        i === void 0 && (i = null),
        l === void 0 && (l = !1),
        s === void 0 && (s = null),
        u === void 0 && (u = null));
      var c =
        e == null
          ? r("immutable").List()
          : r("immutable").List(
              e.map(function (e) {
                return babelHelpers.extends({}, e, {
                  site_link_result_source: o("AdsCreativeSiteLinksSpec.flow")
                    .AdsCreativeSiteLinkResultSource.LEGACY_API,
                });
              }),
            );
      if (e != null) {
        var d,
          m = c.first();
        o("SEFunnelLogger").logL1SiteLinksAPISuccess(
          { ad_account_id: a, adgroup_id: n, raw_object_creation_source: s },
          {
            caller: t,
            duration_ms: u,
            is_defaulting_eligible:
              (m == null ? void 0 : m.is_defaulting_eligible) === !0,
            recommendation_type:
              (d = m == null ? void 0 : m.site_link_recommendation_type) != null
                ? d
                : null,
            site_links_count: c.size,
            source_url: i,
            is_gql_fetch: l,
          },
        );
      }
      return (L(c.size > 0 ? c : null, t, n), c);
    }
    function L(e, t, n) {
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
    function E(e, t, n) {
      var o;
      (n === void 0 && (n = !1),
        r("AdsInterfacesLogger").log({
          data:
            ((o = {}),
            (o.message = JSON.stringify({
              errorMessage: e.message,
              errorCode: e.number,
              errorType: e.stack,
              is_gql_fetch: n,
            })),
            (o.caller = t),
            o),
          eventName: "ads_connected_sources_results_loaded",
        }));
    }
    function k(e, t, n, o) {
      var a;
      (n === void 0 && (n = "CONNECTED_SOURCE"),
        r("AdsInterfacesLogger").log({
          data:
            ((a = {}),
            (a.message = JSON.stringify({ siteLinks: o })),
            (a.optimization_goal = null),
            (a.action_type = t),
            (a.adgroup_id = e),
            (a.caller = n),
            (a.subsequent_data = null),
            a),
          eventName: "ads_connected_sources_add_site_links_by_default",
        }));
    }
    function I(e, t, n, r) {
      var a;
      o("SEFunnelLogger").logL1SiteLinkDefaultDecision(
        { adgroup_id: e, object_level: "ad_level" },
        o("AdsMetadataSiteExtensionDecisionTypes").allowSEDecision(
          o(
            "AdsMetadataSiteExtensionDecisionTypes",
          ).createSEDecisionInputResolution("not_required", "not_required"),
          { blockingReasonsExhaustive: !1 },
        ),
        babelHelpers.extends({}, o("SEFunnelLogger").getSEGKBlocklistFields(), {
          decision_source: "creation_default",
          is_defaulting_eligible:
            (n == null || (a = n.first()) == null
              ? void 0
              : a.is_defaulting_eligible) === !0,
          recommendation_type: t,
          se_default_enabled: !0,
          source_url: r,
        }),
      );
    }
    async function T(t, n) {
      var a = (e || (e = r("performanceNow")))(),
        l = o(
          "AdsMetadataSiteLinkWebsiteHighlightsDedupeLoader",
        ).fetchWebsiteHighlightsImagePaths(
          t.account_id,
          t.source_url,
          t.adgroup_id,
        );
      async function s() {
        var e = await o("AdsGraphAPI")
            .get(i.id)
            .adaccount(t.account_id)
            .get({
              fields: [
                N(
                  t.page_id,
                  t.promoted_object,
                  t.source_url,
                  t.targeting_countries,
                  t.adgroup_id,
                ),
              ],
              limit: 20,
            }),
          r = e == null ? void 0 : e.domain_and_site_links,
          s = r == null ? void 0 : r.site_links_spec,
          u = r == null ? void 0 : r.source_url,
          c = u == null || u === "" ? t.source_url : u,
          m = await o(
            "AdsMetadataSiteLinkWebsiteHighlightsDedupeLoader",
          ).removeFetchedWebsiteHighlightsDuplicates(
            R(
              s,
              t.caller,
              t.adgroup_id,
              t.account_id,
              u != null ? u : t.source_url,
              !1,
              n,
              d(a),
            ),
            c === t.source_url
              ? l
              : o(
                  "AdsMetadataSiteLinkWebsiteHighlightsDedupeLoader",
                ).fetchWebsiteHighlightsImagePaths(
                  t.account_id,
                  c,
                  t.adgroup_id,
                ),
          );
        return { source_url: u, site_links_spec: m };
      }
      try {
        return await s();
      } catch (e) {
        var u = r("getErrorSafe")(e);
        return (
          o("SEFunnelLogger").logL1SiteLinksAPIFail(
            {
              ad_account_id: t.account_id,
              adgroup_id: t.adgroup_id,
              raw_object_creation_source: n,
            },
            {
              caller: t.caller,
              duration_ms: d(a),
              error_message: u == null ? void 0 : u.message,
              source_url: t.source_url,
            },
          ),
          E(u, t.caller),
          { source_url: null, site_links_spec: null }
        );
      }
    }
    function D(e) {
      return o("AdsMetadataSiteExtensionUtils").shouldV2DefaultOn(e)
        ? "SITE_LINK_RECOMMENDATION_V2"
        : null;
    }
    var x = new Map(),
      $ = 0;
    function P(t, n, a, l, s, u, c, m, p) {
      if (r("shouldServeSERelevanceSessionSiteLinks")())
        return Promise.resolve({
          site_links_spec: r("immutable").List(),
          source_url: n,
        });
      var _ = ++$;
      l != null && x.set(l, _);
      var y = (e || (e = r("performanceNow")))(),
        C = o(
          "AdsMetadataSiteLinkWebsiteHighlightsDedupeLoader",
        ).fetchWebsiteHighlightsImagePaths(a, n, l),
        S = l != null && !r("justknobx")._("7719"),
        L = f(p == null ? void 0 : p.adgroupAtLoadStart),
        k =
          S &&
          o("AdsSiteLinksExplicitOptOutUtils").hasExplicitSiteLinksOptOut(L);
      return o("AdsGraphAPI")
        .get(i.id)
        .adaccount(a)
        .get({ fields: [N(c, s, n, null, l)], limit: 20 })
        .then(async function (e) {
          var s = e == null ? void 0 : e.domain_and_site_links,
            c = s == null ? void 0 : s.site_links_spec,
            f = s == null ? void 0 : s.source_url,
            v = f == null || f === "" ? n : f,
            E = await o(
              "AdsMetadataSiteLinkWebsiteHighlightsDedupeLoader",
            ).removeFetchedWebsiteHighlightsDuplicates(
              R(c, u, l, a, f != null ? f : n, !1, m, d(y)),
              v === n
                ? C
                : o(
                    "AdsMetadataSiteLinkWebsiteHighlightsDedupeLoader",
                  ).fetchWebsiteHighlightsImagePaths(a, v, l),
            ),
            I = { source_url: f, site_links_spec: E };
          if (
            l != null &&
            (p == null || p.shouldApply == null ? void 0 : p.shouldApply()) !==
              !1
          ) {
            var T =
                (p == null ? void 0 : p.isV2DefaultOnOnly) === !0
                  ? D(E)
                  : o(
                      "AdsMetadataConnectedSourcesUtils",
                    ).getSiteLinksDefaultOnType(E),
              $ = o("AdsAPICampaignRecordUtils").getOptimizationGoal(t);
            if (T != null) {
              var P = function () {
                r("AdsMetadataConnectedSourcesSetSiteLinksSpecAction").dispatch(
                  {
                    adgroupIDs: [l],
                    siteLinksSpec: E != null ? E : r("immutable").List(),
                    defaultOnType: T,
                    defaultOnURL: f,
                    sourceURL: f,
                    optimizationGoal: $,
                  },
                  {
                    line: "912",
                    module: "AdsCreativeSiteLinksAPICallUtils.js",
                    moduleID: i.id,
                  },
                );
              };
              if (!S) P();
              else if (!k)
                return g(l, r("AdsUEditorHostIDs").EDITING).then(function (e) {
                  return (
                    x.get(l) === _ &&
                      (e != null || L == null) &&
                      h(n != null ? n : "", L, e) &&
                      (p == null || p.shouldApply == null
                        ? void 0
                        : p.shouldApply()) !== !1 &&
                      P(),
                    I
                  );
                });
            } else b(E, a, l, f != null ? f : n, m);
          }
          return I;
        })
        .catch(function (e) {
          var t = r("getErrorSafe")(e);
          return (
            o("SEFunnelLogger").logL1SiteLinksAPIFail(
              {
                ad_account_id: a,
                adgroup_id: l,
                raw_object_creation_source: m,
              },
              {
                caller: u,
                duration_ms: d(y),
                error_message: t == null ? void 0 : t.message,
                source_url: n,
              },
            ),
            E(t, u),
            v(a, l, n, m),
            { source_url: null, site_links_spec: null }
          );
        });
    }
    function N(e, t, n, r, o) {
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
    function M(e, t) {
      var n = r("gkx")("1290") ? 139 : 55,
        a = [
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
        .preloadedBy(u, o("AdsMgmtPreloadingUtils").defaultConfig)
        .get({ fields: a.join(","), limit: n })
        .then(function (e) {
          return (w(r("immutable").List(e.data), null, t), e.data);
        })
        .catch(function (e) {
          return (
            w(r("immutable").List(), r("getErrorSafe")(e), t),
            r("immutable").List()
          );
        });
    }
    function w(e, t, n) {
      var o;
      r("AdsInterfacesLogger").log({
        data:
          ((o = {}),
          (o.adgroup_id = n),
          (o.error_name = t == null ? void 0 : t.message),
          (o.error_code = t == null ? void 0 : t.number),
          (o.error_data = t == null ? void 0 : t.stack),
          (o.message = JSON.stringify(e)),
          o),
        eventName: "ads_connected_sources_management_site_links_response",
      });
    }
    ((l.defaultSiteLinkNoticeData = c),
      (l.getSiteLinksRequestDurationMS = d),
      (l.loadSiteLinks = m),
      (l.shouldFixInvalidSourceUrl = p),
      (l.loadSiteLinksWithMutation = y),
      (l.createSiteLinkItemsFromResponse = R),
      (l.logSiteLikeItemsResult = L),
      (l.logSiteLikeErrorResponse = E),
      (l.logSiteLinkSpecDefaultOn = k),
      (l.logCreationDefaultOnDecision = I),
      (l.loadDomainAndSiteLinks = T),
      (l.loadDomainAndSiteLinksWithMutation = P),
      (l.getDomainAndSiteLinkRequestField = N),
      (l.loadManagementSiteLinks = M));
  },
  98,
);
