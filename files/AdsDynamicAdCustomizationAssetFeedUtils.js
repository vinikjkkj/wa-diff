__d(
  "AdsDynamicAdCustomizationAssetFeedUtils",
  [
    "AdsAssetFeedAssetUtils",
    "AdsAssetFeedUtils",
    "AdsDLOAdgroupFieldUtils",
    "AdsDLOLanguageUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t;
      return (
        o("AdsAssetFeedUtils").isDLOAdgroupFromRecord(e) &&
        ((t = e.creative) == null ? void 0 : t.product_set_id) != null
      );
    }
    function u(e) {
      return p(e, "website_url");
    }
    function c(e) {
      return p(e, "deeplink_url");
    }
    function d(e, t) {
      var n = _.get(t);
      return n != null ? n(e) : null;
    }
    function m(e) {
      var t = o("AdsAssetFeedAssetUtils").getCallToAction(e);
      return t.size > 0 ? t.first() : null;
    }
    function p(e, t) {
      var n = o("AdsDLOLanguageUtils").getPrimaryLanguageFromAdgroup(e);
      return o("AdsDLOAdgroupFieldUtils").getLinkUrlValue(e, n, t).fieldValue;
    }
    var _ = r("immutable").Map(
      ((e = {}), (e.titles = f), (e.bodies = g), (e.descriptions = h), e),
    );
    function f(e) {
      var t = o("AdsDLOLanguageUtils").getPrimaryLanguageFromAdgroup(e);
      return o("AdsDLOAdgroupFieldUtils").getHeadlineValue(e, t).fieldValue;
    }
    function g(e) {
      var t = o("AdsDLOLanguageUtils").getPrimaryLanguageFromAdgroup(e);
      return o("AdsDLOAdgroupFieldUtils").getMessageValue(e, t).fieldValue;
    }
    function h(e) {
      var t = o("AdsDLOLanguageUtils").getPrimaryLanguageFromAdgroup(e);
      return o("AdsDLOAdgroupFieldUtils").getLinkDescriptionValue(e, t)
        .fieldValue;
    }
    ((l.isAssetFeedBasedMMDA = s),
      (l.getDefaultWebsiteURL = u),
      (l.getDefaultDeeplinkURL = c),
      (l.getDefaultTextValue = d),
      (l.getCTAType = m));
  },
  98,
);
