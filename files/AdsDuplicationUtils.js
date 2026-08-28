__d(
  "AdsDuplicationUtils",
  ["AdsDataAtom", "AdsObjectLevelToFragmentStore"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t = !1;
      for (var n of e) {
        var o = n.source_ad_object_id;
        if (o != null) {
          t = !0;
          var a = r("AdsObjectLevelToFragmentStore").get(n.ad_object_type);
          if (a == null || a.isNew(o)) return !1;
        }
      }
      return t;
    }
    function u(t, n) {
      var o = r("AdsObjectLevelToFragmentStore").get(n);
      if (!o || !o.isNew(t)) return !1;
      (e || (e = r("AdsDataAtom"))).isDispatching() &&
        (e || (e = r("AdsDataAtom"))).waitFor([o.getDispatchToken()]);
      var a = o.getChangedFields(t);
      return (
        a.has("source_ad_id") ||
        a.has("source_adset_id") ||
        a.has("source_campaign_id")
      );
    }
    ((l.areCopySourcesPublished = s), (l.isDuplicatedFragment = u));
  },
  98,
);
