__d(
  "AdsUEditorDatasetSplitLightweightUtils",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("15114");
    }
    function s(e) {
      var t, n;
      return (t = e == null ? void 0 : e.dataset_split_ids) != null
        ? t
        : e == null ||
            (n = e.omnichannel_object) == null ||
            (n = n.pixel) == null ||
            (n = n[0]) == null
          ? void 0
          : n.dataset_split_ids;
    }
    function u(e, t, n) {
      return n.find(function (n) {
        var r, o;
        return (
          ((r = n.dataset) == null ? void 0 : r.dataset_type) === e &&
          String((o = n.dataset) == null ? void 0 : o.dataset_id) === String(t)
        );
      });
    }
    function c(e, t) {
      var n, r;
      return (
        e.filter_key != null &&
        e.filter_key.toLowerCase() ===
          ((n = t.filter_key) == null ? void 0 : n.toLowerCase()) &&
        e.filter_value != null &&
        e.filter_value.toLowerCase() ===
          ((r = t.filter_value) == null ? void 0 : r.toLowerCase())
      );
    }
    function d(e) {
      var t, n;
      return (
        ((t = e.filter_key) != null ? t : "").toLowerCase() +
        ":" +
        ((n = e.filter_value) != null ? n : "").toLowerCase()
      );
    }
    function m(e, t) {
      var n = new Set();
      if (e == null || e.length === 0 || t == null) return n;
      for (var r of t) {
        var o;
        if (((o = r.dataset) == null ? void 0 : o.dataset_type) === "PIXEL")
          for (var a of (i = r.dataset_splits) != null ? i : []) {
            var i;
            a.id != null &&
              e.includes(a.id) &&
              a.filter_key != null &&
              a.filter_value != null &&
              n.add(d(a));
          }
      }
      return n;
    }
    function p(e, t, n) {
      var r = new Set();
      if (n == null) return r;
      for (var o of n) {
        var a, i;
        if (
          ((a = o.dataset) == null ? void 0 : a.dataset_type) === t &&
          String((i = o.dataset) == null ? void 0 : i.dataset_id) === String(e)
        )
          for (var l of (s = o.dataset_splits) != null ? s : []) {
            var s;
            l.filter_key != null && l.filter_value != null && r.add(d(l));
          }
      }
      return r;
    }
    function _(e, t) {
      var n = [];
      if (e.size === 0 || t == null) return n;
      for (var r of t) {
        var o;
        if (((o = r.dataset) == null ? void 0 : o.dataset_type) === "APP")
          for (var a of (i = r.dataset_splits) != null ? i : []) {
            var i,
              l = d(a);
            e.has(l) && a.id != null && n.push(a.id);
          }
      }
      return n;
    }
    function f(e, t) {
      var n = [];
      if (e.size === 0 || t == null) return n;
      for (var r of t) {
        var o;
        if (((o = r.dataset) == null ? void 0 : o.dataset_type) === "OFFLINE")
          for (var a of (i = r.dataset_splits) != null ? i : []) {
            var i,
              l = d(a);
            e.has(l) && a.id != null && n.push(a.id);
          }
      }
      return n;
    }
    function g(e, t, n) {
      var r,
        o,
        a,
        i,
        l = u("PIXEL", e, n),
        s = u("OFFLINE", t, n),
        d = (r = l == null ? void 0 : l.dataset_splits) != null ? r : [],
        m = (o = s == null ? void 0 : s.dataset_splits) != null ? o : [],
        p = null,
        _ = null,
        f = 0;
      for (var g of d)
        for (var h of m)
          if (c(g, h)) {
            if ((f++, f > 1)) return null;
            ((p = g), (_ = h));
          }
      var y = (a = p) == null ? void 0 : a.id,
        C = (i = _) == null ? void 0 : i.id;
      return y != null && C != null
        ? { pixelDatasetSplitId: y, offlineDatasetSplitId: C }
        : null;
    }
    function h(e, t) {
      var n = m(e, t),
        r = _(n, t),
        o = f(n, t);
      return {
        appDatasetSplitIDs: r.length > 0 ? r : void 0,
        offlineDatasetSplitIDs: o.length > 0 ? o : void 0,
      };
    }
    ((l.isDatasetSplitAccountEligible = e),
      (l.getPixelDatasetSplitIds = s),
      (l.findDatasetWithSplitsByTypeAndId = u),
      (l.getFilterPairKey = d),
      (l.extractFilterPairsFromPixelSplits = m),
      (l.extractFilterPairsByDatasetId = p),
      (l.getMatchingAppDatasetSplitIdsByFilterPairs = _),
      (l.getMatchingOfflineDatasetSplitIdsByFilterPairs = f),
      (l.getMatchingWebsiteAndInStoreDatasetSplitIds = g),
      (l.getMatchingAppAndOfflineSplitIDs = h));
  },
  98,
);
