__d(
  "adsPlacementAssetGetChildAttachmentFromLabelMap",
  [
    "AdsAPIAdAssetTargetRuleFields",
    "AdsAPIChildAttachmentPaths",
    "AdsPlacementAssetUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("immutable").Map();
    function s(e, t) {
      return e.getIn([t, "name"]);
    }
    var u = function (t) {
      return function (e) {
        return o("AdsPlacementAssetUtils").getFirstAdLabel(e) === t;
      };
    };
    function c(t, n, o) {
      var a,
        i,
        l,
        c,
        d = (a = n.creative) == null ? void 0 : a.asset_feed_spec,
        m = e,
        p = s(t, r("AdsAPIAdAssetTargetRuleFields").LINK_URL_LABEL),
        _ = d == null || (i = d.link_urls) == null ? void 0 : i.find(u(p));
      m = m.setIn(
        r("AdsAPIChildAttachmentPaths").LINK,
        _ == null ? void 0 : _.get("website_url"),
      );
      var f = s(t, r("AdsAPIAdAssetTargetRuleFields").TITLE_LABEL),
        g = d == null || (l = d.titles) == null ? void 0 : l.find(u(f));
      m = m.setIn(
        r("AdsAPIChildAttachmentPaths").NAME,
        g == null ? void 0 : g.get("text"),
      );
      var h = s(t, r("AdsAPIAdAssetTargetRuleFields").DESCRIPTION_LABEL),
        y = d == null || (c = d.descriptions) == null ? void 0 : c.find(u(h));
      m = m.setIn(
        r("AdsAPIChildAttachmentPaths").DESCRIPTION,
        y == null ? void 0 : y.get("text"),
      );
      var C = s(t, r("AdsAPIAdAssetTargetRuleFields").IMAGE_LABEL),
        b = s(t, r("AdsAPIAdAssetTargetRuleFields").VIDEO_LABEL);
      if (C != null) {
        var v,
          S = d == null || (v = d.images) == null ? void 0 : v.find(u(C)),
          R = S == null ? void 0 : S.get("hash"),
          L = S == null ? void 0 : S.get("url");
        (L != null
          ? (m = m.setIn(r("AdsAPIChildAttachmentPaths").PICTURE, L))
          : (m = m.setIn(r("AdsAPIChildAttachmentPaths").IMAGE_HASH, R)),
          (m = m.setIn(
            r("AdsAPIChildAttachmentPaths").IMAGE_CROPS,
            S == null ? void 0 : S.get("image_crops"),
          )));
      } else if (b != null) {
        var E,
          k = d == null || (E = d.videos) == null ? void 0 : E.find(u(b));
        m = m
          .setIn(
            r("AdsAPIChildAttachmentPaths").VIDEO_ID,
            k == null ? void 0 : k.get("video_id"),
          )
          .setIn(
            r("AdsAPIChildAttachmentPaths").PICTURE,
            k == null ? void 0 : k.get("thumbnail_url"),
          );
      }
      o != null &&
        (m = m.setIn(r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.path, o));
      var I = _ == null ? void 0 : _.get("deeplink_url");
      return (
        I != null &&
          (m = m.updateIn(
            r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.VALUE.APP_LINK,
            function () {
              return I;
            },
          )),
        m.filter(function (e) {
          return e != null;
        })
      );
    }
    l.default = c;
  },
  98,
);
