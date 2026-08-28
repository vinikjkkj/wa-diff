__d(
  "AdsPEAvailableIDStoreUtil",
  [
    "AdsError",
    "AdsErrorUtils",
    "AdsInsightsSortDirection",
    "AdsPESortLiveUtils",
    "DateTime",
    "FBLogger",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i) {
      var l = r("immutable").OrderedSet();
      if (o("AdsPESortLiveUtils").isSortByError(t)) {
        var s = i(e);
        ((l = n.intersect(s.keySeq()).toOrderedSet()),
          (l = l.sort(function (e, n) {
            var a,
              i,
              l,
              u = o("AdsErrorUtils").getLevelForErrors(
                (a = s.get(e)) != null ? a : [],
              ),
              c = o("AdsErrorUtils").getLevelForErrors(
                (i = s.get(n)) != null ? i : [],
              );
            return ((l = t.sort[0]) == null ? void 0 : l.order) ===
              r("AdsInsightsSortDirection").DESC
              ? -r("AdsError").compareLevels(u, c)
              : r("AdsError").compareLevels(u, c);
          })));
      } else if (o("AdsPESortLiveUtils").isSortByChanged(t)) {
        var u = a.getFragmentsInDraftFor(e);
        l = n.intersect(u.keySeq()).toOrderedSet();
      }
      return l;
    }
    function s(t, n, a, i, l) {
      if (
        t == null ||
        !(
          o("AdsPESortLiveUtils").isSortByError(n) ||
          o("AdsPESortLiveUtils").isSortByChanged(n)
        )
      )
        return a;
      var s = a,
        u = e(t, n, a, i, l);
      if (((s = s.subtract(u)), o("AdsPESortLiveUtils").isSortByError(n))) {
        var c;
        ((c = n.sort[0]) == null ? void 0 : c.order) ===
        r("AdsInsightsSortDirection").DESC
          ? (s = u.union(s))
          : (s = s.union(u));
      } else if (o("AdsPESortLiveUtils").isSortByChanged(n)) {
        var d,
          m = [],
          p = [];
        u.forEach(function (e) {
          return i.isNew(e) ? m.push(e) : p.push(e);
        });
        var _ = r("immutable").OrderedSet(m),
          f = r("immutable").OrderedSet(p);
        ((d = n.sort[0]) == null ? void 0 : d.order) ===
        r("AdsInsightsSortDirection").DESC
          ? (s = _.union(f).union(s))
          : (s = s.union(f).union(_));
      }
      return s;
    }
    var u = new Set();
    function c(e, t) {
      if (e == null || e === "") return !0;
      try {
        return !r("DateTime").fromISOString(e, t.getTimezoneID()).isBefore(t);
      } catch (t) {
        return (
          u.has(e) ||
            (u.add(e),
            r("FBLogger")("ads_draft_age_split").warn(
              "isRecentEdit: unparseable draft last-edit timestamp; treating as recent",
            )),
          !0
        );
      }
    }
    function d(e, t, n) {
      var o = new Map(),
        a = new Map(),
        i = new Map();
      for (var l of t)
        (o.set(l.objectID, l.level),
          a.set(l.objectID, l.parentID),
          i.set(l.objectID, l.timeUpdated));
      var s = function (t) {
          for (var e = t, n = 0; e != null && n < 8; n++) {
            var r;
            if (o.get(e) === "campaignGroup") return e;
            e = (r = a.get(e)) != null ? r : null;
          }
          return null;
        },
        u = new Set();
      for (var d of t)
        if (c(d.timeUpdated, n)) {
          var m = s(d.objectID);
          m != null && u.add(m);
        }
      var p = [],
        _ = [];
      return (
        e.forEach(function (e) {
          var t = s(e),
            r = t != null ? u.has(t) : c(i.get(e), n);
          r ? p.push(e) : _.push(e);
        }),
        {
          oldDrafts: r("immutable").OrderedSet(_),
          recentDrafts: r("immutable").OrderedSet(p),
        }
      );
    }
    ((l.sortDraftFragments = s),
      (l.isRecentEdit = c),
      (l.partitionDraftsByCampaignFamilyRecency = d));
  },
  98,
);
