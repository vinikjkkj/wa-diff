__d(
  "AdsArLinkUtils",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupSemanticFields",
    "AdsArConstants",
    "AdsArNewDataContainerID",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e == null
        ? !1
        : e.startsWith(o("AdsArConstants").AR_ADS_LINK_PREFIX);
    }
    function s(e) {
      if (e != null) {
        var t = e.split(o("AdsArConstants").AR_ADS_LINK_PREFIX),
          n = t.length === 2 && !Number.isNaN(parseInt(t[1], 10));
        return n ? t[1] : r("AdsArNewDataContainerID");
      }
      return r("AdsArNewDataContainerID");
    }
    function u(t, n) {
      var r = d(t, n);
      return e(r);
    }
    function c(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.link_urls;
      return n instanceof r("immutable").List && n.size === 1
        ? n.getIn([0, "website_url"])
        : n instanceof Array && n.length === 1
          ? n[0].website_url
          : null;
    }
    function d(e, t) {
      if (!r("AdsAdgroupSemanticFields").linkURL.isSupported(t, e)) return null;
      var n = r("AdsAdgroupSemanticFields").linkURL.get(t, e);
      return typeof n == "string" ? n : c(e);
    }
    function m(e, t) {
      return s(d(e, t));
    }
    function p(t) {
      var n,
        r,
        o,
        a =
          t == null ||
          (n = t.creative) == null ||
          (n = n.object_story_spec) == null ||
          (n = n.link_data) == null
            ? void 0
            : n.link,
        i =
          t == null ||
          (r = t.creative) == null ||
          (r = r.object_story_spec) == null ||
          (r = r.template_data) == null
            ? void 0
            : r.link,
        l =
          t == null ||
          (o = t.creative) == null ||
          (o = o.object_story_spec) == null ||
          (o = o.video_data) == null ||
          (o = o.call_to_action) == null ||
          (o = o.value) == null
            ? void 0
            : o.link,
        s = a != null ? a : i != null && i !== "" ? i : l;
      return e(typeof s == "string" ? s : c(t));
    }
    function _(e, t) {
      var n = e.campaignGroup.buying_type === "AUCTION",
        r = o(
          "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
        ).getAdgroupSpecPathPlugin(e),
        a = o("AdsAPIAdgroupRecordUtils").getPageID(e.adgroup, r);
      return t && n && a !== null;
    }
    ((l.isArAdsLink = e),
      (l.getDataContainerID = s),
      (l.isArAd = u),
      (l.getDataContainerIDFromAdgroup = m),
      (l.isArAdCreative = p),
      (l.getAdgroupArAdsIsEligible = _));
  },
  98,
);
