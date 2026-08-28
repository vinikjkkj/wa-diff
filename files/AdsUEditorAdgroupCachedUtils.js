__d(
  "AdsUEditorAdgroupCachedUtils",
  [
    "AdsAssetFeedUtils",
    "AdsUEditorAdgroupCachedChildMediaFomatDataRecord",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (r("isFalsey")(n)) return null;
      var o = e.get(t);
      return o ? o.getIn(["callToActionValue", n]) : null;
    }
    function s(e, t) {
      var n = e.get(t);
      return n ? n.additionalImageIndex : null;
    }
    function u(e, t, n) {
      var r = e.getIn([t, "creatives"]) || {};
      return r[n];
    }
    function c(e, t) {
      return e.getIn([t, "existingPostPageID"]);
    }
    function d(e, t) {
      return e.getIn([t, "metadata"]);
    }
    function m(e, t, n) {
      return (
        e.getIn([t, "childMediaFormatData", n]) ||
        r("AdsUEditorAdgroupCachedChildMediaFomatDataRecord").getEmptyRecord()
      );
    }
    function p(e, t, n) {
      var r = e.get(t.id);
      return r == null ||
        o("AdsAssetFeedUtils").isTextOnlyDofAssetFeedSpec(
          r.imageAssetFeedSpec,
        ) ||
        o("AdsAssetFeedUtils").isTextOnlyDofAssetFeedSpec(r.videoAssetFeedSpec)
        ? !1
        : n === "IMAGE"
          ? r.imageAssetFeedSpec != null
          : n === "VIDEO"
            ? r.videoAssetFeedSpec != null
            : !1;
    }
    function _(e, t) {
      return e.getIn([t, "nonAutomaticFlowDoFSpec"]);
    }
    function f(e, t) {
      return e.getIn([t, "cfpDOFSpec"]);
    }
    function g(e, t, n) {
      return e.getIn([
        t,
        n ? "newBrandedContentIdentities" : "oldBrandedContentIdentities",
      ]);
    }
    ((l.getCachedCallToActionLink = e),
      (l.getCachedAdditionalImageIndex = s),
      (l.getCreative = u),
      (l.getPageID = c),
      (l.getMetadata = d),
      (l.getChildMediaFormatData = m),
      (l.hasCachedAssetFeed = p),
      (l.getNonAutomaticFlowDoFSpec = _),
      (l.getCFPDoFSpec = f),
      (l.getBrandedContentIdentities = g));
  },
  98,
);
