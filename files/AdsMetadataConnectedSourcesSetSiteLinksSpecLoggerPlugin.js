__d(
  "AdsMetadataConnectedSourcesSetSiteLinksSpecLoggerPlugin",
  [
    "AdsAdgroupDraftFragmentStore",
    "AdsConnectedSourcesCatalogEnrollStatusUtils",
    "AdsConnectedSourcesDataProvider",
    "AdsMetadataSiteLinksDefaultingDecisionUtils",
    "Laminar",
    "SEFunnelLogger",
    "adsUEditorAccountIDSelector",
    "justknobx",
    "userSettingsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          var e = o(
            "AdsMetadataSiteLinksDefaultingDecisionUtils",
          ).getProcessedSiteLinksSpecDefaultingAdgroupIDs(t);
          if (e.length !== 0) {
            var n = r("justknobx")._("850"),
              a = function () {
                return n
                  ? o(
                      "AdsConnectedSourcesCatalogEnrollStatusUtils",
                    ).isCatalogDefaultedOn(
                      r("AdsConnectedSourcesDataProvider")().pluginState,
                    )
                    ? "defaulted_on"
                    : "unavailable"
                  : "not_required";
              },
              i = t.adgroupIDs.length > 1;
            return o("Laminar").withFluxSelectors(
              {
                accountID: r("adsUEditorAccountIDSelector"),
                userSettings: r("userSettingsSelector"),
              },
              function (t, n, l) {
                var s,
                  u = l.accountID,
                  c = l.userSettings,
                  d = o(
                    "AdsMetadataSiteLinksDefaultingDecisionUtils",
                  ).getSiteLinksSpecDefaultingEvaluation(n, u, c, a);
                if (d.shouldLog) {
                  var m = n.seSessionLogFields,
                    p =
                      n.isUnseenCreativeSetupDefault === !0
                        ? {
                            decision_id: o(
                              "SEFunnelLogger",
                            ).getSiteLinksDefaultDecisionID(
                              (s = r("AdsConnectedSourcesDataProvider")()
                                .pluginState) == null
                                ? void 0
                                : s.siteLinksDefaultingDecision,
                            ),
                          }
                        : {};
                  e.forEach(function (e) {
                    var t,
                      a,
                      l,
                      s,
                      u,
                      c,
                      _ = babelHelpers.extends(
                        {
                          adgroup_id: e,
                          object_level: "ad_level",
                          raw_object_creation_source: r(
                            "AdsAdgroupDraftFragmentStore",
                          ).sourceSelector(e),
                        },
                        i ? { object_creation_source: "bulk_edit" } : {},
                      ),
                      f = babelHelpers.extends(
                        {},
                        d.logFields,
                        o("SEFunnelLogger").getSEGKBlocklistFields(),
                        {
                          ai_relevancy_session_id:
                            (t = m == null ? void 0 : m.sessionID) != null
                              ? t
                              : null,
                          ai_relevancy_session_input_version:
                            (a = m == null ? void 0 : m.inputVersion) != null
                              ? a
                              : null,
                          ai_relevancy_strategy_id:
                            (l = m == null ? void 0 : m.strategyID) != null
                              ? l
                              : null,
                          ai_relevancy_strategy_type:
                            (s = m == null ? void 0 : m.strategyType) != null
                              ? s
                              : null,
                        },
                        p,
                        {
                          decision_source:
                            n.isUnseenCreativeSetupDefault === !0
                              ? "unseen_creative_setup_close"
                              : "set_site_links_spec",
                          is_defaulting_eligible:
                            ((u = n.siteLinksSpec) == null ||
                            (u = u.first()) == null
                              ? void 0
                              : u.is_defaulting_eligible) === !0,
                          recommendation_type: n.defaultOnType,
                          source_url:
                            (c = n.defaultOnURL) != null ? c : n.sourceURL,
                        },
                      );
                    o("SEFunnelLogger").logL1SiteLinkDefaultDecision(
                      _,
                      d.decision,
                      f,
                    );
                  });
                }
              },
            )(void 0, t);
          }
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
