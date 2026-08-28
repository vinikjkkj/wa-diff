__d(
  "AdsImageIDUtils",
  [
    "invariant",
    "AdsAPIAdAssetFeedImagesFields",
    "AdsAPIAdAssetFeedVideosFields",
    "AdsAdgroupImageUtils",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupSpecUtils",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedUtils",
    "AdsAssetSelectorsUtils",
    "AdsGraphAPI",
    "AdsImageIDClasses",
    "FBLogger",
    "ShutterstockImageUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "immutable",
    "isFalsey",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = r("immutable").List();
    function u(t, n) {
      var a,
        i,
        l =
          (a = n.creative) == null || (a = a.asset_feed_spec) == null
            ? void 0
            : a.images,
        s =
          (i = n.creative) == null || (i = i.asset_feed_spec) == null
            ? void 0
            : i.videos,
        u = r("AdsAPIAdAssetFeedVideosFields").THUMBNAIL_HASH,
        c = r("AdsAPIAdAssetFeedVideosFields").THUMBNAIL_URL,
        d = r("AdsAPIAdAssetFeedImagesFields").HASH,
        m = r("AdsAPIAdAssetFeedImagesFields").URL,
        p =
          s != null
            ? s.map(function (e) {
                return o("AdsAssetSelectorsUtils").getImageID(
                  t,
                  o("AdsAssetFeedFieldUtils").getAssetFieldStringValue(e, u),
                  o("AdsAssetFeedFieldUtils").getAssetFieldStringValue(e, c),
                );
              })
            : e,
        _ =
          l != null
            ? l.map(function (e) {
                return o("AdsAssetSelectorsUtils").getImageID(
                  t,
                  o("AdsAssetFeedFieldUtils").getAssetFieldStringValue(e, d),
                  o("AdsAssetFeedFieldUtils").getAssetFieldStringValue(e, m),
                );
              })
            : e;
      return _.concat(p).toArray();
    }
    function c(e, t) {
      var n = o("AdsAdgroupImageUtils").getImageHash(e),
        r = o("AdsAdgroupImageUtils").getImageURL(e);
      return v(t, n, r);
    }
    function d(e, t) {
      var n,
        r,
        o = [],
        a =
          (n =
            (r = e.creative) == null ||
            (r = r.media_sourcing_spec) == null ||
            (r = r.images) == null
              ? void 0
              : r.toJS()) != null
            ? n
            : [];
      return (
        a.length > 0 &&
          a.forEach(function (e) {
            if ((e == null ? void 0 : e.source) === "multi_media") {
              var n = v(
                t,
                e == null ? void 0 : e.hash,
                e == null ? void 0 : e.url,
              );
              n && o.push(n);
            }
          }),
        o
      );
    }
    function m(e, t) {
      var n,
        r,
        o = [],
        a =
          (n =
            (r = e.creative_asset_groups_spec) == null || (r = r.groups) == null
              ? void 0
              : r.toJS()) != null
            ? n
            : [];
      return (
        a.length > 0 &&
          a.forEach(function (e) {
            var n = e.images;
            n != null &&
              n.length > 0 &&
              n.forEach(function (e) {
                var n = v(t, e.hash, e.url);
                n && o.push(n);
              });
          }),
        o
      );
    }
    function p(e, t, n) {
      var r = o("AdsAdgroupImageUtils").getImageHashWithPlugin(e, n),
        a = o("AdsAdgroupImageUtils").getImageURLWithPlugin(e, n);
      return v(t, r, a);
    }
    function _(e, t, n) {
      var r = o("AdsAdgroupSpecUtils").getPlatformCustomizations(e, n),
        a = r == null ? void 0 : r.image_hash,
        i = r == null ? void 0 : r.image_url;
      return v(t, a, i);
    }
    function f(e, t) {
      var n;
      if (o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e)) return u(t, e);
      var a =
        (n = e.creative) == null ||
        (n = n.object_story_spec) == null ||
        (n = n.link_data) == null
          ? void 0
          : n.child_attachments;
      if (r("isFalsey")(a)) {
        var i;
        a =
          (i = e.creative) == null ||
          (i = i.object_story_spec) == null ||
          (i = i.template_data) == null
            ? void 0
            : i.child_attachments;
      }
      var l;
      if (a == null) l = [];
      else if (Array.isArray(a)) l = a;
      else {
        var s = a.toJS();
        l = Array.isArray(s) ? s : Object.values(s);
      }
      return l.map(function (e) {
        return v(t, e.image_hash, e.picture);
      });
    }
    function g(e, t, n) {
      var a,
        i = o("AdsAssetFeedFieldUtils").firstAsset_TALK_WITH_ACE_BEFORE_USE(
          r("AdsAdgroupSemanticFields").videoThumbnailURL.get(n, e),
          "thumbnail_url",
        ),
        l =
          (a = e.creative) == null ||
          (a = a.object_story_spec) == null ||
          (a = a.video_data) == null
            ? void 0
            : a.image_hash;
      return v(t, l, i);
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield o("AdsGraphAPI")
                .get(i.id)
                .object("video", e)
                .edge("thumbnails")
                .batched()
                .get(),
              n = t.data;
            if (n.length === 0) return null;
            var a = n.find(function (e) {
                return e.is_preferred;
              }),
              l = a == null ? n[0].uri : a.uri;
            return v(null, null, l);
          } catch (t) {
            var s = r("getErrorSafe")(t);
            return (
              r("FBLogger")("ads_image_utils")
                .catching(s)
                .warn("Could not download thumbnail of video " + e),
              null
            );
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      var t,
        n,
        r =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.videos;
      return r != null && r.size != 0
        ? r.first().toJS().video_id
        : (n = e.creative) == null ||
            (n = n.object_story_spec) == null ||
            (n = n.video_data) == null
          ? void 0
          : n.video_id;
    }
    function b(e) {
      var t = e.accountID,
        n = e.hash,
        a = e.stockImageID,
        i = e.url,
        l = r("isTruthy")(a) ? o("ShutterstockImageUtils").idToURL(a) : i;
      return v(t, n, l);
    }
    function v(e, t, n) {
      return r("isTruthy")(e) && r("isTruthy")(t)
        ? o("AdsImageIDClasses").AdsImageID.fromAcountAndHash(e, t)
        : r("isFalsey")(n)
          ? null
          : o("ShutterstockImageUtils").isStockImageURL(n)
            ? o("AdsImageIDClasses").AdsImageID.fromShutterstockURL(n)
            : o("AdsImageIDClasses").AdsImageID.fromExternalURL(n);
    }
    function S(e, t) {
      if (typeof t.hash == "string")
        return o("AdsImageIDClasses").AdsImageID.fromAcountAndHash(e, t.hash);
      if (typeof t.stockImageID == "string") {
        var n = o("ShutterstockImageUtils").idToURL(t.stockImageID);
        return o("AdsImageIDClasses").AdsImageID.fromShutterstockURL(n);
      }
      return typeof t.url == "string"
        ? o("AdsImageIDClasses").AdsImageID.fromExternalURL(t.url)
        : s(
            !1,
            "ImageInfo must have one of accountID & hash, stockImageID, url.",
          );
    }
    function R(e, t) {
      return b({
        accountID: e,
        hash: t.getAdAccountHash(),
        stockImageID: t.getStockImageID(),
        url: t.getUrl(),
      });
    }
    function L(e, t) {
      var n = r("immutable").OrderedSet();
      return (
        t.forEach(function (t) {
          var r = S(e, t);
          n = n.add(r);
        }),
        n
      );
    }
    function E(e, t, n) {
      return r("isTruthy")(n)
        ? o("ShutterstockImageUtils").isStockImageURL(n)
          ? o("AdsImageIDClasses").AdsImageID.fromShutterstockURL(n)
          : o("AdsImageIDClasses").AdsImageID.fromExternalURL(n)
        : r("isTruthy")(e) && r("isTruthy")(t)
          ? o("AdsImageIDClasses").AdsImageID.fromAcountAndHash(e, t)
          : null;
    }
    function k(e) {
      return e instanceof o("AdsImageIDClasses").AdsAccountImageID ||
        e instanceof o("AdsImageIDClasses").AdsBusinessImageID ||
        e instanceof o("AdsImageIDClasses").AdsExternalImageWithHashID
        ? e.getHash()
        : null;
    }
    ((l.getSingleImageID = c),
      (l.getMultiMediaUploadedImageIDs = d),
      (l.getCagImageIDs = m),
      (l.getSingleImageIDWithPlugin = p),
      (l.getPlatformImageID = _),
      (l.getMPAImageIDs = f),
      (l.getVideoThumbnail = g),
      (l.getVideoThumbnailFromVideoID = h),
      (l.getFirstVideoID = C),
      (l.getImageID = b),
      (l._getImageID = v),
      (l.getImageIDFromValidImageInfo = S),
      (l.getImageIDFromLegacyImage = R),
      (l.getImageIDsFromImageInfoArray = L),
      (l.getImageIDPrimarilyFromURL = E),
      (l.getImageHashFromID = k));
  },
  98,
);
