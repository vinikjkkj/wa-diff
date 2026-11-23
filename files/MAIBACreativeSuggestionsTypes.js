__d(
  "MAIBACreativeSuggestionsTypes",
  ["MAIBACreativeSelectionUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "cs-idea",
      s = "cs-creative";
    function u(e, t) {
      return o("MAIBACreativeSelectionUtils").getSelectedImageURLs(
        e.flatMap(function (e) {
          return e.creatives;
        }),
        t,
      );
    }
    function c(e, t) {
      return o("MAIBACreativeSelectionUtils").getSelectedAdgroupID(
        e.flatMap(function (e) {
          return e.creatives;
        }),
        t,
      );
    }
    function d(e) {
      var t = [],
        n = new Set();
      for (var r of e.ideas)
        for (var o of r.creatives) {
          var a,
            i = (a = o.rootCreativeID) != null ? a : o.creativeID;
          n.has(i) ||
            (n.add(i),
            t.push({ creative: o, ideaID: r.ideaID, ideaTitle: r.title }));
        }
      return t;
    }
    function m(e, t) {
      var n,
        r = [];
      for (var o of e.ideas)
        for (var a of o.creatives)
          r.push({ creative: a, ideaID: o.ideaID, ideaTitle: o.title });
      var i = r.find(function (e) {
        return e.creative.creativeID === t;
      });
      if (i == null) return [];
      var l =
          (n = i.creative.rootCreativeID) != null ? n : i.creative.creativeID,
        s = new Set(),
        u = r.filter(function (e) {
          var t,
            n =
              (t = e.creative.rootCreativeID) != null
                ? t
                : e.creative.creativeID;
          return n !== l || s.has(e.creative.creativeID)
            ? !1
            : (s.add(e.creative.creativeID), !0);
        });
      return u.reverse();
    }
    ((l.CS_IDEA_TAG = e),
      (l.CS_CREATIVE_TAG = s),
      (l.selectedImageURLs = u),
      (l.selectedAdgroupID = c),
      (l.getTileItems = d),
      (l.getCreativeVersions = m));
  },
  98,
);
