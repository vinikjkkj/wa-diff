__d(
  "AdsMetadataSiteExtensionUtils",
  ["AdsMetadataWebsiteSourceItemTypes", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e == null ? void 0 : e.filter(s);
    }
    function s(e) {
      return e.site_link_id != null;
    }
    function u(e, t, n, r) {
      return (
        r === void 0 && (r = !1),
        e && t && (r || n)
          ? o("AdsMetadataWebsiteSourceItemTypes").SalesChannel.RETAILER_LINKS
          : o("AdsMetadataWebsiteSourceItemTypes").SalesChannel.DISCOVERY_LINKS
      );
    }
    function c(e) {
      var t = e == null ? void 0 : e.siteLinks,
        n = e == null ? void 0 : e.managedSiteLinksLocalState;
      if (n == null) return t;
      if (t == null) return n;
      var r = t.filter(function (e) {
        return !s(e);
      });
      return r.concat(n);
    }
    function d(e) {
      var t, n;
      return (
        ((t = (n = m(e).siteLinks) == null ? void 0 : n.size) != null ? t : 0) >
        0
      );
    }
    function m(e) {
      var t,
        n,
        r,
        o = new Set(
          (t = e == null ? void 0 : e.visibleManagedLinkIds) != null ? t : [],
        );
      e == null ||
        (n = e.managedSiteLinksLocalState) == null ||
        n.forEach(function (e) {
          e.site_link_id != null && o.add(e.site_link_id);
        });
      var a = c(e),
        i = ((r = a == null ? void 0 : a.size) != null ? r : 0) > 0;
      return {
        siteLinks: a,
        managedSiteLinksLocalState: null,
        visibleManagedLinkIds: Array.from(o),
        siteExtension: {
          enrollStatus: i ? "OPT_IN" : "OPT_OUT",
          enrollActionType: "MANUAL",
        },
        siteLinksDataConsented: {
          enrollStatus: i ? "OPT_IN" : "OPT_OUT",
          enrollActionType: "MANUAL",
        },
      };
    }
    function p(e, t, n) {
      return e !== "OPT_OUT" && (t > 0 || n === "OPT_IN");
    }
    function _(e) {
      var t = e == null ? void 0 : e.values().next().value;
      return (
        (t == null ? void 0 : t.is_defaulting_eligible) === !0 &&
        (t == null ? void 0 : t.site_link_url_recommender_type) != null
      );
    }
    function f(e) {
      var t = e == null ? void 0 : e.values().next().value;
      return (
        (t == null ? void 0 : t.is_defaulting_eligible) === !0 &&
        r("gkx")("6334")
      );
    }
    function g(e) {
      return _(e) || f(e);
    }
    ((l.filterManualSiteLinks = e),
      (l.isSiteLinkManual = s),
      (l.getDefaultSalesChannel = u),
      (l.hasManagedLinksToApply = d),
      (l.getManagedLinksApplyState = m),
      (l.isSEDataConsented = p),
      (l.shouldV2DefaultOn = _),
      (l.shouldMLDefaultOn = f),
      (l.shouldDefaultOn = g));
  },
  98,
);
