__d(
  "performanceSummaryShopsAdsWebsiteOnlyTrafficNoticeSelector",
  [
    "AdsAccountStore",
    "AdsAdgroupCombinedIDNameStore",
    "AdsCampaignCombinedIDNameStore",
    "AdsEditingCampaignEditorContext",
    "AdsFluxHooks",
    "AdsPEAdgroupSelectors",
    "AdsPECampaignSelectors",
    "AdsSAIPAllowAllSpecUtils",
    "LoadObject",
    "RelayHooks",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsCreateStoreThunkSelector",
    "adsUEditorAdObjectsForSelectedCampaignsSelector",
    "adsUEditorAdObjectsLoadObjectForSelectedAdgroupsSelector",
    "adsUEditorInjectEditingAdgroupContext",
    "adsUEditorInjectEditingCampaignGroupContext",
    "adsUEditorSelectedCampaignGroupLoadObjectsSelector",
    "performanceSummaryShopsAdsWebsiteOnlyTrafficNoticeSelector_usePerformanceSummaryShopsAdsWebsiteOnlyTrafficNoticeRelaySelectorFragment.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("adsCreateSelector")(
        [
          r("adsUEditorInjectEditingAdgroupContext")(
            r("adsUEditorAdObjectsLoadObjectForSelectedAdgroupsSelector"),
          ),
        ],
        function (t) {
          return t.isDone() && t.hasValue() ? t.getValueEnforcing() : [];
        },
        { name: i.id + ".getAllSelectedAdgroupAdObjects" },
      ),
      u = r("adsCreateSelector")(
        [
          r("adsUEditorInjectEditingCampaignGroupContext")(
            r("adsUEditorSelectedCampaignGroupLoadObjectsSelector"),
          ),
        ],
        function (t) {
          return t.isDone() && t.hasValue() ? t.getValueEnforcing() : [];
        },
        { name: i.id + ".getSelectedCampaignGroups" },
      ),
      c = r("adsCreateStoreSelector")(
        r("adsUEditorAdObjectsForSelectedCampaignsSelector").getStores(
          r("AdsEditingCampaignEditorContext"),
        ),
        function () {
          return r("adsUEditorAdObjectsForSelectedCampaignsSelector")(
            r("AdsEditingCampaignEditorContext"),
          );
        },
        { name: i.id + ".getAllSelectedCampaignAdObjects" },
      ),
      d = r("adsCreateStoreThunkSelector")(
        r("AdsCampaignCombinedIDNameStore"),
        function (e, t) {
          return r("AdsCampaignCombinedIDNameStore").getForCampaignGroups(e, t);
        },
      ),
      m = r("adsCreateStoreThunkSelector")(
        r("AdsAdgroupCombinedIDNameStore"),
        function (e, t) {
          return r("AdsAdgroupCombinedIDNameStore").getForCampaigns(e, t);
        },
      ),
      p = function (t, n, a, l) {
        var e = new Map(
            n.map(function (e) {
              return [e.id, e];
            }),
          ),
          s = n.map(function (e) {
            return e.id;
          }),
          u = Array.from(l(t, s).values()),
          c = u.map(function (t) {
            return t.match({
              loading: function () {
                return r("LoadObject").loading({ creatorModuleID: i.id });
              },
              error: function () {
                return r("LoadObject").withValue(!1, { creatorModuleID: i.id });
              },
              loaded: function (n) {
                var t = n.map(function (e) {
                    return e.id;
                  }),
                  l = o("AdsPEAdgroupSelectors").getAllRecordsSelector_LEGACY()(
                    t,
                  ),
                  s = l.map(function (t) {
                    return t.match({
                      loading: function () {
                        return r("LoadObject").loading({
                          creatorModuleID: i.id,
                        });
                      },
                      error: function () {
                        return r("LoadObject").withValue(!1, {
                          creatorModuleID: i.id,
                        });
                      },
                      loaded: function (n) {
                        var t = o(
                          "AdsSAIPAllowAllSpecUtils",
                        ).isAdgroupSAIPCompatible(
                          n,
                          e.get(n == null ? void 0 : n.adset_id),
                          a,
                        );
                        return r("LoadObject").withValue(t, {
                          creatorModuleID: i.id,
                        });
                      },
                    });
                  });
                return _(Array.from(s.values()));
              },
            });
          });
        return _(c);
      },
      _ = function (t) {
        for (var e = 0; e < t.length; e++) {
          var n = t[e],
            o = n.isDone() && n.hasValue();
          if (o && n.getValue())
            return r("LoadObject").withValue(!0, { creatorModuleID: i.id });
          if (n.isLoading())
            return r("LoadObject").loading({ creatorModuleID: i.id });
        }
        return r("LoadObject").withValue(!1, { creatorModuleID: i.id });
      },
      f = r("adsCreateSelector")(
        [
          r("adsCreateStoreSelector")(
            [],
            function (t) {
              return t;
            },
            { name: i.id },
          ),
          r("AdsAccountStore").getSelectedAccountID,
          s,
          u,
          d,
          o("AdsPECampaignSelectors").getAllRecordsSelector,
          c,
          m,
          o("AdsPEAdgroupSelectors").getAllRecordsSelector_LEGACY,
        ],
        function (t, n, r, o, a, i, l, s, u) {
          return g(t, n, r, o, a, l, s);
        },
        {
          name:
            i.id +
            ".performanceSummaryShopsAdsWebsiteOnlyTrafficNoticeSelector",
        },
      );
    function g(e, t, n, a, l, s, u) {
      if (t == null)
        return r("LoadObject").withValue(!1, { creatorModuleID: i.id });
      switch (e) {
        case "ad":
          return r("LoadObject").withValue(!1, { creatorModuleID: i.id });
        case "ad_set": {
          if (s.length === 0)
            return r("LoadObject").withValue(!1, { creatorModuleID: i.id });
          var c = s[0].campaignGroup,
            d = s.map(function (e) {
              var t = e.campaign;
              return t;
            });
          return p(t, d, c, u);
        }
        case "campaign": {
          var m = a.map(function (e) {
            var n = l(t, [e.id]).get(e.id);
            return n == null
              ? r("LoadObject").withValue(!1, { creatorModuleID: i.id })
              : n.match({
                  loading: function () {
                    return r("LoadObject").loading({ creatorModuleID: i.id });
                  },
                  error: function () {
                    return r("LoadObject").withValue(!1, {
                      creatorModuleID: i.id,
                    });
                  },
                  loaded: function (a) {
                    var n = a.map(function (e) {
                        return e.id;
                      }),
                      l = o("AdsPECampaignSelectors").getAllRecordsSelector()(
                        n,
                      ),
                      s = [],
                      c = l.map(function (e) {
                        return e.match({
                          loading: function () {
                            return r("LoadObject").loading({
                              creatorModuleID: i.id,
                            });
                          },
                          error: function () {
                            return r("LoadObject").withValue(!1, {
                              creatorModuleID: i.id,
                            });
                          },
                          loaded: function () {
                            return r("LoadObject").withValue(!1, {
                              creatorModuleID: i.id,
                            });
                          },
                        });
                      }),
                      d = _(Array.from(c.values()));
                    return d.isLoading()
                      ? r("LoadObject").loading({ creatorModuleID: i.id })
                      : d.getValue() === !0
                        ? r("LoadObject").withValue(!0, {
                            creatorModuleID: i.id,
                          })
                        : p(t, s, e, u);
                  },
                });
          });
          return _(m);
        }
        default:
          return r("LoadObject").withValue(!1, { creatorModuleID: i.id });
      }
    }
    function h(t, a) {
      var i = o("RelayHooks").useFragment(
          e !== void 0
            ? e
            : (e = n(
                "performanceSummaryShopsAdsWebsiteOnlyTrafficNoticeSelector_usePerformanceSummaryShopsAdsWebsiteOnlyTrafficNoticeRelaySelectorFragment.graphql",
              )),
          a,
        ),
        l = o("AdsFluxHooks").useAdsSelector(
          r("AdsAccountStore").getSelectedAccountID,
        ),
        p = o("AdsFluxHooks").useAdsSelector(s, t),
        _ = o("AdsFluxHooks").useAdsSelector(u, t),
        f = o("AdsFluxHooks").useAdsSelector(d, t),
        h = o("AdsFluxHooks").useAdsSelector(c, t),
        y = o("AdsFluxHooks").useAdsSelector(m);
      return g(t, l, p, _, f, h, y);
    }
    ((l.performanceSummaryShopsAdsWebsiteOnlyTrafficNoticeSelector = f),
      (l.usePerformanceSummaryShopsAdsWebsiteOnlyTrafficNoticeRelaySelector =
        h));
  },
  98,
);
