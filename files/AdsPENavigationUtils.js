__d(
  "AdsPENavigationUtils",
  ["AdFLEXRouteConfig", "AdsObjectTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e.tool === t.tool && e.section === t.section;
    }
    function s(e) {
      return e === "OPPORTUNITIES"
        ? "opportunities"
        : e === "ACCOUNT"
          ? "ad_account"
          : e === "CREATIVES"
            ? "unique_adcreative"
            : e === "L1"
              ? "ad"
              : e === "L2"
                ? "ad_set"
                : "campaign";
    }
    function u(e) {
      var t,
        n,
        o = c(e);
      return (t =
        r("AdFLEXRouteConfig") == null ||
        (n = r("AdFLEXRouteConfig").get()) == null ||
        n.getNavStateForSection == null
          ? void 0
          : n.getNavStateForSection(o)) != null
        ? t
        : { tool: "MANAGE_ADS", section: o };
    }
    function c(e) {
      return e === "ad_account"
        ? "ACCOUNT"
        : e === "unique_adcreative"
          ? "CREATIVES"
          : e === "ad"
            ? "L1"
            : e === "ad_set"
              ? "L2"
              : "L3";
    }
    function d(e) {
      return e === r("AdsObjectTypes").ACCOUNT
        ? "ACCOUNT"
        : e === r("AdsObjectTypes").CREATIVE
          ? "CREATIVES"
          : e === r("AdsObjectTypes").ADGROUP
            ? "L1"
            : e === r("AdsObjectTypes").CAMPAIGN
              ? "L2"
              : "L3";
    }
    function m(e) {
      var t,
        n,
        o = d(e);
      return (t =
        r("AdFLEXRouteConfig") == null ||
        (n = r("AdFLEXRouteConfig").get()) == null ||
        n.getNavStateForSection == null
          ? void 0
          : n.getNavStateForSection(o)) != null
        ? t
        : { tool: "MANAGE_ADS", section: o };
    }
    function p(e) {
      return e === "ACCOUNT"
        ? r("AdsObjectTypes").ACCOUNT
        : e === "OPPORTUNITIES"
          ? r("AdsObjectTypes").OPPORTUNITIES
          : e === "CREATIVES"
            ? r("AdsObjectTypes").CREATIVE
            : e === "L1"
              ? r("AdsObjectTypes").ADGROUP
              : e === "L2"
                ? r("AdsObjectTypes").CAMPAIGN
                : r("AdsObjectTypes").CAMPAIGN_GROUP;
    }
    var _ = new Map([
        ["L1", "adgroup"],
        ["L2", "campaign"],
        ["L3", "campaignGroup"],
        ["ACCOUNT", "topline"],
        ["CREATIVES", "uniqueAdCreative"],
      ]),
      f = {
        areNavStatesEqual: e,
        getAdObjectLevelFromNavSection_TO_BE_DEPRECATED: s,
        getNavSectionFromAdObjectLevel: c,
        getNavSectionFromAdObjectType: d,
        getNavStateFromAdObjectLevel: u,
        getNavStateFromObjectType: m,
        getObjectTypeFromNavSection: p,
        navSectionToLevelMap: _,
      };
    l.default = f;
  },
  98,
);
