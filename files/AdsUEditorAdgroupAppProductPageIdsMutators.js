__d(
  "AdsUEditorAdgroupAppProductPageIdsMutators",
  ["AdsAdgroupRecordAccessors"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t, n, r, o, a, i;
      return Object.keys(
        (t = (n = e.creative) == null ? void 0 : n.asset_feed_spec) != null
          ? t
          : {},
      ).length === 0
        ? !1
        : Object.keys(
            (r = (o = e.creative) == null ? void 0 : o.asset_feed_spec) != null
              ? r
              : {},
          ).length === 1 &&
            ((a = e.creative) == null ? void 0 : a.asset_feed_spec) != null &&
            ((i = e.creative) == null || (i = i.asset_feed_spec) == null
              ? void 0
              : i.app_product_page_id) != null;
    }
    function s(e) {
      var t;
      return (t = e.creative) == null || (t = t.asset_feed_spec) == null
        ? void 0
        : t.app_product_page_id;
    }
    function u(e, t) {
      if (t == null) return e;
      var n = e;
      return (
        (n = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.app_product_page_id.set(t, n)),
        n
      );
    }
    ((l.isAdgroupUsingOnlyAppProductPageId = e),
      (l.getAppProductPageIdSpecField = s),
      (l.updateAppProductPageIdSpecField = u));
  },
  98,
);
