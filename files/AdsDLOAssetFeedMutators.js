__d(
  "AdsDLOAssetFeedMutators",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedFieldToRuleLabelMapping",
    "AdsAssetFeedUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      if (!o("AdsAssetFeedUtils").hasLanguageCustomizationFromRecord(e))
        return e;
      var n = (t = e.creative) == null ? void 0 : t.asset_feed_spec;
      if (!n) return e;
      var a = n.asset_customization_rules;
      if (a) {
        var i = a.map(function (e) {
          return e
            .delete("title_label")
            .delete("link_url_label")
            .delete("description_label");
        });
        n = n.set("asset_customization_rules", i);
      }
      return r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.set(n, e);
    }
    function s(e, t) {
      var n;
      if (!o("AdsAssetFeedUtils").isDLOAdgroupFromRecord(e)) return e;
      var a =
        (n = e.creative) == null || (n = n.asset_feed_spec) == null
          ? void 0
          : n.asset_customization_rules;
      if (a == null) return e;
      var i = r("AdsAssetFeedFieldToRuleLabelMapping").get(t);
      if (i == null) return e;
      var l = e;
      if (t === "images")
        l = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.images.delete(l);
      else if (t === "videos")
        l = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.videos.delete(l);
      else return l;
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.asset_customization_rules.set(
        a.map(function (e) {
          return e.delete(i);
        }),
        l,
      );
    }
    ((l.removeOptionalLinksFieldsFromRules = e),
      (l.removeMediaFromAdgroup = s));
  },
  98,
);
