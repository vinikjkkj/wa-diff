__d(
  "BusinessUnifiedNavigationUtils",
  ["BusinessUnifiedNavigationContext", "BusinessUnifiedNavigationDataKey"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function () {
        var e;
        return new (r("BusinessUnifiedNavigationDataKey"))({
          adAccountID: (e = r("BusinessUnifiedNavigationContext")).adAccountID,
          businessID: e.businessID,
          localScopeID: e.localScopeID,
          localScopeType: e.localScopeType,
          globalScopeID: e.globalScopeID,
        });
      },
      s = function () {
        return r("BusinessUnifiedNavigationContext").businessID;
      },
      u = function () {
        return r("BusinessUnifiedNavigationContext").globalScopeID;
      },
      c = function () {
        return r("BusinessUnifiedNavigationContext").globalScopeType;
      },
      d = function () {
        return r("BusinessUnifiedNavigationContext").globalScopeName;
      },
      m = function (t) {
        var e = !1;
        switch (t) {
          case "ANALYTICS":
          case "BRAND_SAFETY_HUB":
          case "BUSINESS_SUITE_HOME":
          case "BIZWEB_INBOX":
          case "BIZWEB_POSTS":
          case "COLLABORATION_CENTER":
          case "COMMERCE_MANAGER":
          case "INSIGHTS":
          case "NOTIFICATIONS":
          case "OFFLINE_EVENTS":
          case "PAGES":
          case "PARTNER_CENTER":
          case "PIXELS":
          case "PLANNER_TOOL":
          case "PUB_X":
          case "RATINGS_AND_REVIEWS":
          case "STORE_LOCATIONS":
          case "TRAFFIC_ANALYSIS":
          case "WHATSAPP_MESSAGING":
          case "BRAND_RIGHTS_PROTECTION":
          case "ORGANIZATION_MANAGER":
          case "BUSINESS_MANAGER":
          case "BUSINESS_OVERVIEW":
          case "BUSINESS_SETTINGS":
          case "GENERAL":
          case "PAGES_PAGE":
            e = !0;
            break;
        }
        return e;
      };
    ((l.getNavigationKey = e),
      (l.getBusinessID = s),
      (l.getGlobalScopeID = u),
      (l.getGlobalScopeType = c),
      (l.getGlobalScopeName = d),
      (l.shouldRenderBizHelpTray = m));
  },
  98,
);
