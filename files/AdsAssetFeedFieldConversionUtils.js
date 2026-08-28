__d(
  "AdsAssetFeedFieldConversionUtils",
  [
    "AdsAPIAdgroupCallToActionRecord",
    "AdsAssetFeedFieldUtils",
    "AdsUnifiedCreativeAPIFields",
    "FBLogger",
    "getErrorSafe",
    "immutable",
    "isAdsCanvasLink",
    "justknobx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L = r("immutable").Map({
        captionIDs:
          ((e = {}),
          (e.video_id = "videoID"),
          (e.thumbnail_url = "videoThumbnailURL"),
          (e.thumbnail_id = "videoThumbnailID"),
          (e.thumbnail_hash = "videoThumbnailHash"),
          (e.thumbnail_source = "videoThumbnailSource"),
          e),
        callToAction: ((s = {}), (s.website_url = "linkURL"), s),
        callToActionValue:
          ((u = {}),
          (u.display_url = "displayURL"),
          (u.website_url = "linkURL"),
          u),
        displayURL:
          ((c = {}),
          (c.deeplink_url = "callToActionValue"),
          (c.website_url = "linkURL"),
          c),
        imageCrops:
          ((d = {}),
          (d.url = "imageURL"),
          (d.hash = "imageHash"),
          (d.interactive_components_spec = "interactiveComponentsSpec"),
          d),
        imageHash:
          ((m = {}),
          (m.url = "imageURL"),
          (m.image_crops = "imageCrops"),
          (m.interactive_components_spec = "interactiveComponentsSpec"),
          m),
        imageURL:
          ((p = {}),
          (p.hash = "imageHash"),
          (p.image_crops = "imageCrops"),
          (p.interactive_components_spec = "interactiveComponentsSpec"),
          p),
        linkURL:
          ((_ = {}),
          (_.deeplink_url = "callToActionValue"),
          (_.display_url = "displayURL"),
          _),
        videoID:
          ((f = {}),
          (f.caption_ids = "captionIDs"),
          (f.thumbnail_url = "videoThumbnailURL"),
          (f.thumbnail_id = "videoThumbnailID"),
          (f.thumbnail_hash = "videoThumbnailHash"),
          (f.thumbnail_source = "videoThumbnailSource"),
          (f.interactive_components_spec = "interactiveComponentsSpec"),
          f),
        videoThumbnailURL:
          ((g = {}),
          (g.caption_ids = "captionIDs"),
          (g.video_id = "videoID"),
          (g.thumbnail_hash = "videoThumbnailHash"),
          (g.thumbnail_id = "videoThumbnailID"),
          (g.thumbnail_source = "videoThumbnailSource"),
          (g.interactive_components_spec = "interactiveComponentsSpec"),
          g),
        videoThumbnailID:
          ((h = {}),
          (h.caption_ids = "captionIDs"),
          (h.video_id = "videoID"),
          (h.thumbnail_hash = "videoThumbnailHash"),
          (h.thumbnail_url = "videoThumbnailURL"),
          (h.thumbnail_source = "videoThumbnailSource"),
          (h.interactive_components_spec = "interactiveComponentsSpec"),
          h),
        videoThumbnailSource:
          ((y = {}),
          (y.thumbnail_hash = "videoThumbnailHash"),
          (y.thumbnail_url = "videoThumbnailURL"),
          (y.thumbnail_id = "videoThumbnailID"),
          (y.caption_ids = "captionIDs"),
          (y.video_id = "videoID"),
          (y.interactive_components_spec = "interactiveComponentsSpec"),
          y),
        videoThumbnailHash:
          ((C = {}),
          (C.caption_ids = "captionIDs"),
          (C.video_id = "videoID"),
          (C.thumbnail_url = "videoThumbnailURL"),
          (C.thumbnail_id = "videoThumbnailID"),
          (C.thumbnail_source = "videoThumbnailSource"),
          (C.interactive_components_spec = "interactiveComponentsSpec"),
          C),
        interactiveComponentsSpec:
          ((b = {}),
          (b.caption_ids = "captionIDs"),
          (b.video_id = "videoID"),
          (b.thumbnail_hash = "videoThumbnailHash"),
          (b.thumbnail_url = "videoThumbnailURL"),
          (b.thumbnail_source = "videoThumbnailSource"),
          b),
      }),
      E =
        ((v = {}),
        (v[(R = r("AdsUnifiedCreativeAPIFields")).captionIDs.name] =
          "caption_ids"),
        (v[R.phoneDataID.name] = "id"),
        (v[R.imageCrops.name] = "image_crops"),
        (v[R.imageURL.name] = "url"),
        (v[R.imageHash.name] = "hash"),
        (v[R.linkDescription.name] = "text"),
        (v[R.message.name] = "text"),
        (v[R.videoID.name] = "video_id"),
        (v[R.videoThumbnailURL.name] = "thumbnail_url"),
        (v[R.videoThumbnailID.name] = "thumbnail_id"),
        (v[R.videoThumbnailSource.name] = "thumbnail_source"),
        (v[R.videoThumbnailHash.name] = "thumbnail_hash"),
        (v[R.interactiveComponentsSpec.name] = "interactive_components_spec"),
        v),
      k =
        ((S = {}),
        (S[R.displayURL.name] = {
          assetName: "link_urls",
          fieldConstant: "display_url",
        }),
        (S[R.headline.name] = { assetName: "titles", fieldConstant: "text" }),
        (S[R.linkURL.name] = {
          assetName: "link_urls",
          fieldConstant: "website_url",
        }),
        S);
    function I(e) {
      if (typeof e != "string")
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "callToActionType should be a string",
        );
      return r("immutable").List.of(e);
    }
    function T(e, t) {
      if (typeof e == "string") return r("immutable").List.of();
      if (e instanceof r("immutable").Record) {
        var n = r("immutable").Map().set("type", e.get("type")),
          o = e.get("value");
        if (o) {
          if (t && t.website_url) {
            var a = t.website_url,
              i = o.get("lead_gen_form_id");
            i != null &&
              typeof a == "string" &&
              r("isAdsCanvasLink")(a) &&
              (o = o.delete("lead_gen_form_id"));
          }
          n = n.set("value", o);
        }
        return r("immutable").List.of(n);
      }
      return r("immutable").List.of();
    }
    function D(e) {
      var t = r("immutable").Map().set("id", e);
      return r("immutable").List.of(t);
    }
    function x(e, t) {
      var n = o("AdsAssetFeedFieldUtils").getLinkURLValue(
        "deeplink_url",
        r("nullthrows")(t)[e],
      );
      if (n === null) return r("immutable").List.of();
      var a = r("immutable").Map().set("deeplink_url", n);
      return (
        t != null &&
          Object.keys(t).forEach(function (e) {
            a = a.set(e, r("nullthrows")(t)[e]);
          }),
        r("immutable").List.of(a)
      );
    }
    function $(e, t) {
      var n = r("immutable").Map().set("caption_ids", e);
      return (
        t != null &&
          Object.keys(t).forEach(function (e) {
            n = n.set(e, r("nullthrows")(t)[e]);
          }),
        r("immutable").List.of(n)
      );
    }
    function P(e, t) {
      var n = r("immutable").Map().set("display_url", e);
      return (
        t != null &&
          Object.keys(t).forEach(function (e) {
            var a = o("AdsAssetFeedFieldUtils").getLinkURLValue(
              e,
              r("nullthrows")(t)[e],
            );
            a != null && (n = n.set(e, a));
          }),
        r("immutable").List.of(n)
      );
    }
    function N(e) {
      return r("immutable").List([r("immutable").Map().set("text", e)]);
    }
    function M(e, t) {
      var n = r("immutable").Map().set("image_crops", r("immutable").fromJS(e));
      return (
        t != null &&
          Object.keys(t).forEach(function (e) {
            n = n.set(e, r("nullthrows")(t)[e]);
          }),
        r("immutable").List.of(n)
      );
    }
    function w(e, t) {
      var n = r("immutable").Map().set("hash", e);
      return (
        t != null &&
          Object.keys(t).forEach(function (e) {
            n = n.set(e, r("immutable").fromJS(r("nullthrows")(t)[e]));
          }),
        r("immutable").List.of(n)
      );
    }
    function A(e, t) {
      var n = r("immutable").Map().set("url", e);
      return (
        t != null &&
          Object.keys(t).forEach(function (e) {
            n = n.set(e, r("immutable").fromJS(r("nullthrows")(t)[e]));
          }),
        r("immutable").List.of(n)
      );
    }
    function F(e, t) {
      var n = r("immutable").Map().set("website_url", e);
      return (
        t != null &&
          Object.keys(t).forEach(function (e) {
            var a = o("AdsAssetFeedFieldUtils").getLinkURLValue(
              e,
              r("nullthrows")(t)[e],
            );
            a != null && (n = n.set(e, a));
          }),
        r("immutable").List.of(n)
      );
    }
    function O(e) {
      return e === "" && r("justknobx")._("697")
        ? r("immutable").List()
        : r("immutable").List([r("immutable").Map().set("text", e)]);
    }
    function B(e) {
      return r("immutable").List([r("immutable").Map().set("text", e)]);
    }
    function W(e, t) {
      var n = r("immutable").Map().set("video_id", e);
      return (
        t != null &&
          Object.keys(t).forEach(function (e) {
            n = n.set(e, r("nullthrows")(t)[e]);
          }),
        r("immutable").List.of(n)
      );
    }
    function q(e, t) {
      var n = r("immutable").Map().set("thumbnail_url", e);
      return (
        t != null &&
          Object.keys(t).forEach(function (e) {
            n = n.set(e, r("nullthrows")(t)[e]);
          }),
        r("immutable").List.of(n)
      );
    }
    function U(e, t) {
      var n = r("immutable").Map().set("thumbnail_id", e);
      return (
        t != null &&
          Object.keys(t).forEach(function (e) {
            n = n.set(e, r("nullthrows")(t)[e]);
          }),
        r("immutable").List.of(n)
      );
    }
    function V(e, t) {
      var n = r("immutable").Map().set("thumbnail_source", e);
      return (
        t != null &&
          Object.keys(t).forEach(function (e) {
            n = n.set(e, r("nullthrows")(t)[e]);
          }),
        r("immutable").List.of(n)
      );
    }
    function H(e, t) {
      var n = r("immutable").Map().set("thumbnail_hash", e);
      return (
        t != null &&
          Object.keys(t).forEach(function (e) {
            n = n.set(e, r("nullthrows")(t)[e]);
          }),
        r("immutable").List.of(n)
      );
    }
    function G(e, t) {
      var n = r("immutable").Map().set("interactive_components_spec", e);
      return (
        t != null &&
          Object.keys(t).forEach(function (e) {
            n = n.set(e, r("nullthrows")(t)[e]);
          }),
        r("immutable").List.of(n)
      );
    }
    function z(e, t, n, r) {
      var o = r && r.has(e) ? r.get(e) : 0,
        a = n.get(o);
      return !a || typeof a == "string" ? a : a.get(t);
    }
    function j(e, t, n) {
      if (
        e === r("AdsUnifiedCreativeAPIFields").pageID.name ||
        e === r("AdsUnifiedCreativeAPIFields").instagramActorID.name ||
        e === r("AdsUnifiedCreativeAPIFields").instagramUserID.name ||
        e ===
          r("AdsUnifiedCreativeAPIFields").brandedContentSponsorPageID.name ||
        e === r("AdsUnifiedCreativeAPIFields").pageWelcomeMessage.name ||
        e === r("AdsUnifiedCreativeAPIFields").threadsUserID.name
      ) {
        if (!(typeof t == "string" || typeof t == "number"))
          throw r("FBLogger")("am_feature_pac").mustfixThrow(
            "%s should be a string or a number",
            e,
          );
        return t;
      }
      if (t == null) return r("immutable").List();
      switch (e) {
        case r("AdsUnifiedCreativeAPIFields").callToActionType.name:
          return I(t);
        case r("AdsUnifiedCreativeAPIFields").callToAction.name:
          return T(t, n);
        case r("AdsUnifiedCreativeAPIFields").phoneDataID.name:
          return D(t);
        case r("AdsUnifiedCreativeAPIFields").callToActionValue.name:
          return x(e, n);
        case r("AdsUnifiedCreativeAPIFields").captionIDs.name:
          return $(t, n);
        case r("AdsUnifiedCreativeAPIFields").displayURL.name:
          return P(t, n);
        case r("AdsUnifiedCreativeAPIFields").headline.name:
          return N(t);
        case r("AdsUnifiedCreativeAPIFields").imageCrops.name:
          return M(t, n);
        case r("AdsUnifiedCreativeAPIFields").imageHash.name:
          return w(t, n);
        case r("AdsUnifiedCreativeAPIFields").imageURL.name:
          return A(t, n);
        case r("AdsUnifiedCreativeAPIFields").linkURL.name:
          return F(t, n);
        case r("AdsUnifiedCreativeAPIFields").linkDescription.name:
          return O(t);
        case r("AdsUnifiedCreativeAPIFields").message.name:
          return B(t);
        case r("AdsUnifiedCreativeAPIFields").videoID.name:
          return W(t, n);
        case r("AdsUnifiedCreativeAPIFields").videoThumbnailURL.name:
          return q(t, n);
        case r("AdsUnifiedCreativeAPIFields").videoThumbnailID.name:
          return U(t, n);
        case r("AdsUnifiedCreativeAPIFields").videoThumbnailSource.name:
          return V(t, n);
        case r("AdsUnifiedCreativeAPIFields").videoThumbnailHash.name:
          return H(t, n);
        case r("AdsUnifiedCreativeAPIFields").interactiveComponentsSpec.name:
          return G(t, n);
      }
      return r("immutable").List();
    }
    function K(e) {
      var t = e.get("value"),
        n = {};
      return (
        (n.type = e.get("type")),
        t != null && typeof t != "string" && (n.value = t.toJS()),
        new (r("AdsAPIAdgroupCallToActionRecord"))(n)
      );
    }
    function Q(e, t, n, o) {
      if (typeof t == "string" || typeof t == "number") return t;
      var a = null;
      try {
        a = t && t.first();
      } catch (n) {
        var i = r("getErrorSafe")(n);
        return (
          r("FBLogger")("AdsAssetFeedFieldConversionUtils").warn(
            "getting first value encounter error: %s, field: %s",
            i.message,
            e,
          ),
          t
        );
      }
      if (!a || typeof a == "string") return a;
      var l;
      if (e === r("AdsUnifiedCreativeAPIFields").callToAction.name) l = K(a);
      else if (E[e]) l = a.get(E[e]);
      else if (k[e]) {
        var s = k[e],
          u = s.assetName,
          c = s.fieldConstant;
        l = z(u, c, t, o);
      }
      if (l != null) return l;
    }
    function X(e) {
      return L.get(e);
    }
    ((l.convertFieldToAssetFeedFormat = j),
      (l.convertFieldToObjectStorySpecFormat = Q),
      (l.getDependentFields = X));
  },
  98,
);
