__d(
  "AdsManagerAppContext",
  [
    "invariant",
    "AdsAccountStore",
    "AdsApplicationIDs",
    "AdsInsightsTimeRangeUtil",
    "AdsMgmtCurrentLevelSortInfoSelector",
    "AdsObjectLevelToFragmentStore",
    "AdsObjectTypeUtils",
    "AdsObjectTypes",
    "AdsPEAdgroupAvailableIDStore",
    "AdsPECampaignAvailableIDStore",
    "AdsPECampaignGroupAvailableIDStore",
    "AdsPESortLiveUtils",
    "AdsPEStatRangeUIStoreSelectors",
    "CurrentUser",
    "FluxContainerSubscriptions",
    "adsCreateSelector",
    "adsMgmtAdgroupSelectedIdsSelector",
    "adsMgmtCampaignGroupSelectedIdsSelector",
    "adsMgmtCampaignSelectedIdsSelector",
    "adsMgmtGetActivityLogDateInterval",
    "adsMgmtViewportInfoSelector",
    "adsPECurrentDraftIDSelector",
    "adsPEGetViewportVisibleIDs",
    "adsPETimeRangeSelector",
    "draftAdgroupIdsDynamicSelector",
    "draftCampaignGroupIdsDynamicSelector",
    "draftCampaignIdsDynamicSelector",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        APP_ID: null,
        USER_ID: null,
        AD_ACCOUNT_ID: null,
        BUSINESS_ID: null,
        DRAFT_ID: null,
        DATE_PRESET: null,
        DATE_INTERVAL_START: null,
        DATE_INTERVAL_START_SEC: null,
        DATE_INTERVAL_END: null,
        DATE_INTERVAL_END_SEC: null,
        SELECTED_CAMPAIGN_GROUP_IDS: null,
        PUBLISHED_SELECTED_CAMPAIGN_GROUP_IDS: null,
        VISIBLE_CAMPAIGN_GROUP_IDS: null,
        CAMPAIGN_GROUP_IDS: null,
        DRAFT_CAMPAIGN_GROUP_IDS: null,
        SELECTED_CAMPAIGN_IDS: null,
        PUBLISHED_SELECTED_CAMPAIGN_IDS: null,
        VISIBLE_CAMPAIGN_IDS: null,
        CAMPAIGN_IDS: null,
        DRAFT_CAMPAIGN_IDS: null,
        SELECTED_ADGROUP_IDS: null,
        PUBLISHED_SELECTED_ADGROUP_IDS: null,
        VISIBLE_ADGROUP_IDS: null,
        ADGROUP_IDS: null,
        DRAFT_ADGROUP_IDS: null,
        SORT: null,
      },
      u = Object.keys(e),
      c = new Map(),
      d = new Map(),
      m = new Map(),
      p = new Map(),
      _ = new Map(),
      f = new Map(),
      g = new Map(),
      h = null;
    function y(e, t) {
      var n,
        r = c.get(e);
      if (r != null) {
        var o = d.get(r);
        (o == null || o.delete(e),
          (o == null ? void 0 : o.size) === 0 && d.delete(r));
      }
      if (t == null) {
        c.delete(e);
        return;
      }
      c.set(e, t);
      var a = (n = d.get(t)) != null ? n : new Set();
      (a.add(e), d.set(t, a));
    }
    function C(e, t) {
      if (t == null || t.length === 0) {
        (m.set(e, void 0), p.set(e, void 0));
        return;
      }
      (m.set(e, t), p.set(e, new Set(t)));
    }
    function b(e, t, n, o) {
      var a = function () {
          var r = t(),
            a = o(e);
          a !== r && n(e, r);
        },
        i = new (r("FluxContainerSubscriptions"))("APAppContext-" + e);
      if ((i.setStores(t.getStores()), i.addListener(a), g.has(e))) {
        var l;
        ((l = g.get(e)) == null || l.reset(), g.delete(e));
      }
      (g.set(e, i), a());
    }
    function v(e, t) {
      var n = t.get(e);
      if (h != null && n != null) {
        var r = n(h);
        if (r != null) return r;
      }
      return null;
    }
    function S(e, t) {
      (!c.has(e) || s(0, 57179), y(e, t));
    }
    function R(e, t) {
      (!m.has(e) || s(0, 57179), C(e, t));
    }
    function L(e, t, n) {
      (b(e, t, y, I), n != null && _.set(e, n));
    }
    function E(e, t, n) {
      (b(e, t, C, T), n != null && f.set(e, n));
    }
    function k(e) {
      h = e;
    }
    function I(e) {
      var t = v(e, _);
      return t != null ? t : c.get(e);
    }
    function T(e) {
      var t = v(e, f);
      return t != null ? t : m.get(e);
    }
    function D(e) {
      var t = v(e, f);
      return t != null ? new Set(t) : p.get(e);
    }
    function x(e) {
      return d.get(e);
    }
    function $() {
      return Array.from(m.keys());
    }
    var P = {
        init: M,
        setTriggerContext: k,
        getValue: I,
        getListValue: T,
        getListValueSet: D,
        getKeys: x,
        getListKeys: $,
        APP_CONTEXT_KEYS: u,
        __getTimeFromTimeRange: w,
        __setters: {
          setStaticValue: S,
          setStaticListValue: R,
          setDynamicValue: L,
          setDynamicListValue: E,
        },
      },
      N = P;
    function M() {
      var e, t, n, a;
      function l(e, t) {
        var n = o("AdsObjectTypeUtils").toObjectLevel(e);
        if (n) {
          var a = r("AdsObjectLevelToFragmentStore").get(n);
          return t.filter(function (e) {
            return !a.isNew(e);
          });
        }
        return t;
      }
      function s(e) {
        return r("adsCreateSelector")(
          [r("adsMgmtViewportInfoSelector")],
          function (n) {
            if (n == null || n.visibleIDs == null) return [];
            var t = n.view,
              o = n.viewport,
              a = n.visibleIDs;
            return t.objectType !== e
              ? []
              : l(
                  e,
                  r("adsPEGetViewportVisibleIDs")(
                    t.breakdowns,
                    o.rowInterval,
                    a,
                  ),
                );
          },
          { name: i.id },
        );
      }
      function u(e, t) {
        return (
          t === void 0 && (t = !1),
          function (n) {
            if (n.objectType === e) return t ? l(e, n.objectIDs) : n.objectIDs;
          }
        );
      }
      (S("APP_ID", r("AdsApplicationIDs").ADS_POWER_EDITOR),
        S("USER_ID", r("CurrentUser").getID()),
        L("AD_ACCOUNT_ID", (e = r("AdsAccountStore")).getSelectedAccountID),
        L("BUSINESS_ID", e.getSelectedBusinessID),
        L(
          "DRAFT_ID",
          (t = r("adsCreateSelector"))(
            [o("adsPECurrentDraftIDSelector").adsPECurrentDraftIDSelector],
            function (t) {
              return t.getValue();
            },
            { name: i.id },
          ),
        ),
        L(
          "DATE_PRESET",
          t(
            [o("AdsPEStatRangeUIStoreSelectors").getRangeTypeSelector],
            function (t) {
              return t();
            },
            { name: i.id },
          ),
          function (e) {
            var t = e.timeRange;
            return t == null ? void 0 : t.getValidDatePresetOrNull();
          },
        ),
        L(
          "DATE_INTERVAL_START",
          t(
            [(n = r("adsPETimeRangeSelector"))],
            function (t) {
              return w(t, "since");
            },
            { name: i.id },
          ),
          function (e) {
            var t = e.timeRange;
            return w(t, "since");
          },
        ),
        L(
          "DATE_INTERVAL_END",
          t(
            [n],
            function (t) {
              return w(t, "until");
            },
            { name: i.id },
          ),
          function (e) {
            var t = e.timeRange;
            return w(t, "until");
          },
        ),
        L(
          "DATE_INTERVAL_START_SEC",
          t(
            [e.getTimezoneID, n],
            function (t, n) {
              var e = r("adsMgmtGetActivityLogDateInterval")(t, n);
              return e.start.toInstant(t);
            },
            { name: i.id },
          ),
        ),
        L(
          "DATE_INTERVAL_END_SEC",
          t(
            [e.getTimezoneID, n],
            function (t, n) {
              var e = r("adsMgmtGetActivityLogDateInterval")(t, n);
              return e.end.toInstant(t);
            },
            { name: i.id },
          ),
        ),
        L(
          "SORT",
          t(
            [
              o("AdsMgmtCurrentLevelSortInfoSelector")
                .adsMgmtCurrentLevelSortInfoSelector,
            ],
            function (t) {
              return t != null
                ? o("AdsPESortLiveUtils").getSortParams(t)[0]
                : null;
            },
            { name: i.id },
          ),
          function (e) {
            return e.sort;
          },
        ),
        E(
          "SELECTED_CAMPAIGN_GROUP_IDS",
          o("adsMgmtCampaignGroupSelectedIdsSelector")
            .adsMgmtCampaignGroupSelectedIdsSelector,
          u((a = r("AdsObjectTypes")).CAMPAIGN_GROUP),
        ),
        E(
          "PUBLISHED_SELECTED_CAMPAIGN_GROUP_IDS",
          t(
            [
              o("adsMgmtCampaignGroupSelectedIdsSelector")
                .adsMgmtCampaignGroupSelectedIdsSelector,
            ],
            function (t) {
              return l(r("AdsObjectTypes").CAMPAIGN_GROUP, t);
            },
            { name: i.id },
          ),
          u(a.CAMPAIGN_GROUP, !0),
        ),
        E("VISIBLE_CAMPAIGN_GROUP_IDS", s(a.CAMPAIGN_GROUP)),
        E(
          "CAMPAIGN_GROUP_IDS",
          t(
            [r("AdsPECampaignGroupAvailableIDStore").getAvailableIDs],
            function (t) {
              return l(r("AdsObjectTypes").CAMPAIGN_GROUP, t);
            },
            { name: i.id },
          ),
        ),
        E(
          "DRAFT_CAMPAIGN_GROUP_IDS",
          t(
            [
              o("draftCampaignGroupIdsDynamicSelector")
                .draftCampaignGroupIdsDynamicSelector,
            ],
            c,
            { name: i.id },
          ),
        ),
        E(
          "SELECTED_CAMPAIGN_IDS",
          o("adsMgmtCampaignSelectedIdsSelector")
            .adsMgmtCampaignSelectedIdsSelector,
          u(a.CAMPAIGN),
        ),
        E(
          "PUBLISHED_SELECTED_CAMPAIGN_IDS",
          t(
            [
              o("adsMgmtCampaignSelectedIdsSelector")
                .adsMgmtCampaignSelectedIdsSelector,
            ],
            function (t) {
              return l(r("AdsObjectTypes").CAMPAIGN, t);
            },
            { name: i.id },
          ),
          u(a.CAMPAIGN, !0),
        ),
        E("VISIBLE_CAMPAIGN_IDS", s(a.CAMPAIGN)),
        E(
          "CAMPAIGN_IDS",
          t(
            [r("AdsPECampaignAvailableIDStore").getAvailableIDs],
            function (t) {
              return l(r("AdsObjectTypes").CAMPAIGN, t);
            },
            { name: i.id },
          ),
        ),
        E(
          "DRAFT_CAMPAIGN_IDS",
          t(
            [
              o("draftCampaignIdsDynamicSelector")
                .draftCampaignIdsDynamicSelector,
            ],
            c,
            { name: i.id },
          ),
        ),
        E(
          "SELECTED_ADGROUP_IDS",
          o("adsMgmtAdgroupSelectedIdsSelector")
            .adsMgmtAdgroupSelectedIdsSelector,
          u(a.ADGROUP),
        ),
        E(
          "PUBLISHED_SELECTED_ADGROUP_IDS",
          t(
            [
              o("adsMgmtAdgroupSelectedIdsSelector")
                .adsMgmtAdgroupSelectedIdsSelector,
            ],
            function (t) {
              return l(r("AdsObjectTypes").ADGROUP, t);
            },
            { name: i.id },
          ),
          u(a.ADGROUP, !0),
        ),
        E("VISIBLE_ADGROUP_IDS", s(a.ADGROUP)),
        E(
          "ADGROUP_IDS",
          t(
            [r("AdsPEAdgroupAvailableIDStore").getAvailableIDs],
            function (t) {
              return l(r("AdsObjectTypes").ADGROUP, t);
            },
            { name: i.id },
          ),
        ),
        E(
          "DRAFT_ADGROUP_IDS",
          t(
            [
              o("draftAdgroupIdsDynamicSelector")
                .draftAdgroupIdsDynamicSelector,
            ],
            c,
            { name: i.id },
          ),
        ));
      function c(e) {
        var t = I("AD_ACCOUNT_ID");
        return t != null ? e(t.toString()).toArray() : [];
      }
    }
    function w(e, t) {
      if ((e == null ? void 0 : e.interval) == null) return null;
      var n = o("AdsInsightsTimeRangeUtil").intervalToAPIParams(e.interval);
      return n == null ? void 0 : n[t];
    }
    l.default = N;
  },
  98,
);
