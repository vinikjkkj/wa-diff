__d(
  "PEAppContext",
  [
    "AdsManagerAppConfig",
    "AdsPELegacyLoggerState",
    "AdsPERouterHelper",
    "BizSiteIdentifier.brands",
    "BusinessAssetGrouping.brands",
    "CurrentBusinessUser",
    "CurrentUser",
    "FBLogger",
    "URI",
    "adsPENavStateSelector",
    "getErrorSafe",
    "requireWeak",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        getSelectedAccountID: function () {
          return null;
        },
        getSelectedBusinessID: function () {
          return null;
        },
      },
      u = {
        getCached: function (t) {
          return { getValue: function () {} };
        },
      },
      c;
    (r("requireWeak")("AdsAccountStore", function (e) {
      s = e;
    }),
      r("requireWeak")("AdsDraftSelectionStore", function (e) {
        u = e;
      }),
      r("requireWeak")("AdsPECreationUIProvider", function (e) {
        c = e.toFluxStore();
      }));
    var d = o("BizSiteIdentifier.brands").isBizSite();
    function m() {
      var t = {};
      r("AdsPERouterHelper").getRouter()
        ? (t = babelHelpers.extends(
            {},
            r("AdsPERouterHelper").getRouter().getParams(),
          ))
        : (t = babelHelpers.extends(
            {},
            new (e || (e = r("URI")))(window.location.href).getQueryData(),
          ));
      var n = t.selected_campaign_ids;
      return (
        n && n.toArray && (t.selected_campaign_ids = n.toArray()),
        (n = t.selected_adset_ids),
        n && n.toArray && (t.selected_adset_ids = n.toArray()),
        (n = t.selected_ad_ids),
        n && n.toArray && (t.selected_ad_ids = n.toArray()),
        t
      );
    }
    function p() {
      try {
        var e = s.getSelectedBusinessID();
        e === o("BusinessAssetGrouping.brands").NULL_BIZ_ID && (e = null);
        var t = s.getSelectedAccountID(),
          n = r("CurrentBusinessUser").isInstagramBusinessPerson
            ? "instagram_user"
            : r("CurrentBusinessUser").isFacebookWorkAccount
              ? "work_user"
              : "fb_user",
          a = c == null ? !1 : c.getState().get("isCreationOpen"),
          i = a
            ? { tool: "CREATION", section: null }
            : r("adsPENavStateSelector")(),
          l = m(),
          p = typeof l.business_id == "string" ? l.business_id : null,
          f = typeof l.adgroup_id == "string" ? l.adgroup_id : null;
        return babelHelpers.extends(
          {},
          r("AdsPERouterHelper").getEventLogInfo(),
          {
            actual_event_time: Date.now(),
            ad_account_id: t,
            adgroup_id: f,
            at_section: i.section,
            at_tool: i.tool,
            backing_user_type: n,
            business_id: e,
            business_id_explicit: p,
            current_flows: o("AdsPELegacyLoggerState")
              .getActiveFlows()
              .join(","),
            draft_id: u.getCached(t).getValue(),
            in_business_manager: d,
            memory_js_limit: _("jsHeapSizeLimit"),
            memory_js_used: _("usedJSHeapSize"),
            memory_js_allocated: _("totalJSHeapSize"),
            session_id: o("AdsManagerAppConfig").sessionID,
            was_employee: r("CurrentUser").isEmployee(),
            query_data: l,
          },
        );
      } catch (e) {
        return (
          r("FBLogger")("ads")
            .catching(r("getErrorSafe")(e))
            .mustfix("Error loading PEAppContext"),
          {}
        );
      }
    }
    function _(e) {
      if (window && window.performance) {
        var t = window.performance.memory;
        if (t != null) return t[e];
      }
      return null;
    }
    l.getEventDataForLogging = p;
  },
  98,
);
