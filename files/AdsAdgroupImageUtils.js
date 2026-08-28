__d(
  "AdsAdgroupImageUtils",
  [
    "AdsAPIAdgroupPaths",
    "AdsAPIObjectives",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedUtils",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsPromotedObjectTypes",
    "ApiAdObjectTypes",
    "immutable",
    "mixedToString",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.images;
      if (n != null && n.length > 0) {
        var r, o;
        return (r = (o = n[0]) == null ? void 0 : o.hash) != null ? r : null;
      }
      return null;
    }
    function s(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.images;
      if (n != null && n.length > 0) {
        var r, o;
        return (r = (o = n[0]) == null ? void 0 : o.url) != null ? r : null;
      }
      return null;
    }
    function u(e) {
      var t, n, a;
      return (
        ((t = e.creative) == null ? void 0 : t.image_url) ||
        ((n = e.creative) == null ||
        (n = n.object_story_spec) == null ||
        (n = n.link_data) == null
          ? void 0
          : n.picture) ||
        o(
          "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
        ).getUnifiedCreativeOrLegacyValue(
          e,
          function (e) {
            var t;
            return (t = e.creative) == null ||
              (t = t.object_story_spec) == null ||
              (t = t.photo_data) == null
              ? void 0
              : t.url;
          },
          function (e) {
            var t;
            return (t = e.creative) == null ||
              (t = t.asset_feed_spec) == null ||
              (t = t.images) == null ||
              (t = t[0]) == null
              ? void 0
              : t.url;
          },
          function (e) {
            var t;
            return r("mixedToString")(
              (t = e.creative) == null ||
                (t = t.asset_feed_spec) == null ||
                (t = t.images) == null ||
                (t = t.get(0)) == null
                ? void 0
                : t.get("url"),
            );
          },
        ) ||
        ((a = e.creative) == null ||
        (a = a.object_story_spec) == null ||
        (a = a.template_data) == null
          ? void 0
          : a.picture)
      );
    }
    function c(e) {
      var t, n, a, i;
      if ((t = e.creative) != null && t.image_hash)
        return r("AdsAPIAdgroupPaths").CREATIVE.IMAGE_HASH;
      if (
        (n = e.creative) != null &&
        (n = n.object_story_spec) != null &&
        (n = n.link_data) != null &&
        n.image_hash
      )
        return r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
          .IMAGE_HASH;
      if (
        o(
          "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
        ).getUnifiedCreativeOrLegacyValue(
          e,
          function (e) {
            var t;
            return (t = e.creative) == null ||
              (t = t.object_story_spec) == null ||
              (t = t.photo_data) == null
              ? void 0
              : t.image_hash;
          },
          function (e) {
            var t;
            return (t = e.creative) == null ||
              (t = t.asset_feed_spec) == null ||
              (t = t.images) == null ||
              (t = t[0]) == null
              ? void 0
              : t.hash;
          },
          function (e) {
            var t;
            return r("mixedToString")(
              (t = e.creative) == null ||
                (t = t.asset_feed_spec) == null ||
                (t = t.images) == null ||
                (t = t.get(0)) == null
                ? void 0
                : t.get("hash"),
            );
          },
        )
      )
        return o(
          "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
        ).getUnifiedCreativeOrLegacyPath(
          e,
          r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.PHOTO_DATA
            .IMAGE_HASH,
          [].concat(r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.IMAGES, [
            "0",
            "hash",
          ]),
        );
      if (
        (a = e.creative) != null &&
        (a = a.object_story_spec) != null &&
        a.video_data
      )
        return r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA
          .IMAGE_HASH;
      if (
        (i = e.creative) != null &&
        (i = i.object_story_spec) != null &&
        (i = i.template_data) != null &&
        i.image_hash
      )
        return r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA
          .IMAGE_HASH;
    }
    function d(e) {
      var t, n, a, i;
      return (
        ((t = e.creative) == null ? void 0 : t.image_hash) ||
        ((n = e.creative) == null ||
        (n = n.object_story_spec) == null ||
        (n = n.link_data) == null
          ? void 0
          : n.image_hash) ||
        o(
          "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
        ).getUnifiedCreativeOrLegacyValue(
          e,
          function (e) {
            var t;
            return (t = e.creative) == null ||
              (t = t.object_story_spec) == null ||
              (t = t.photo_data) == null
              ? void 0
              : t.image_hash;
          },
          function (e) {
            var t;
            return (t = e.creative) == null ||
              (t = t.asset_feed_spec) == null ||
              (t = t.images) == null ||
              (t = t[0]) == null
              ? void 0
              : t.hash;
          },
          function (e) {
            var t;
            return r("mixedToString")(
              (t = e.creative) == null ||
                (t = t.asset_feed_spec) == null ||
                (t = t.images) == null ||
                (t = t.get(0)) == null
                ? void 0
                : t.get("hash"),
            );
          },
        ) ||
        ((a = e.creative) == null ||
        (a = a.object_story_spec) == null ||
        (a = a.video_data) == null
          ? void 0
          : a.image_hash) ||
        ((i = e.creative) == null ||
        (i = i.object_story_spec) == null ||
        (i = i.template_data) == null
          ? void 0
          : i.image_hash)
      );
    }
    function m(e, t) {
      var n = r("AdsAdgroupSemanticFields").imageHash.get(t, e);
      if (o("AdsAssetFeedUtils").isDLOAdgroupFromRecord(e)) {
        var a = o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(e, "images");
        return o("AdsAssetFeedFieldUtils").getAssetAtIndex(n, "hash", a);
      }
      if (o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e)) {
        var i,
          l = o(
            "AdsPlacementAssetTargetingRuleUtils",
          ).getDefaultTargetRuleLabel(e, "image_label"),
          s = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
            (i = e.creative) == null || (i = i.asset_feed_spec) == null
              ? void 0
              : i.images,
            l,
            "hash",
          ).fieldValue;
        if (s != null) return s;
      }
      return o("AdsAssetFeedFieldUtils").firstAsset_TALK_WITH_ACE_BEFORE_USE(
        n,
        "hash",
      );
    }
    function p(e, t) {
      var n = r("AdsAdgroupSemanticFields").imageURL.get(t, e);
      if (o("AdsAssetFeedUtils").isDLOAdgroupFromRecord(e)) {
        var a = o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(e, "images");
        return o("AdsAssetFeedFieldUtils").getAssetAtIndex(n, "url", a);
      }
      return o("AdsAssetFeedFieldUtils").firstAsset_TALK_WITH_ACE_BEFORE_USE(
        n,
        "url",
      );
    }
    function _(e) {
      var t,
        n =
          (e == null ||
          (t = e.creative) == null ||
          (t = t.object_story_spec) == null ||
          (t = t.link_data) == null
            ? void 0
            : t.child_attachments) || [];
      return n.map(function (e) {
        return e == null ? void 0 : e.image_hash;
      });
    }
    function f(e, t) {
      var n = r("AdsAdgroupSemanticFields").imageCrops.get(t, e);
      if (n == null) return null;
      var o = r("immutable").fromJS(n),
        a = o.toJS();
      if (a != null && Object.keys(a).length > 0) {
        var i,
          l = (i = a[Object.keys(a)[0]]) == null ? void 0 : i.image_crops;
        if (l != null) {
          var s = Object.keys(l)[0];
          return l[s];
        }
      }
      return null;
    }
    function g(e) {
      return e !== r("AdsAPIObjectives").POST_ENGAGEMENT;
    }
    function h(e, t, n) {
      var o =
        [
          r("AdsAPIObjectives").MOBILE_APP_INSTALLS,
          r("AdsAPIObjectives").STORE_VISITS,
        ].includes(e) ||
        (e === r("AdsAPIObjectives").APP_INSTALLS &&
          n === r("AdsPromotedObjectTypes").MOBILE_APP);
      if (o) {
        var a;
        return !(t != null && (a = t.creative) != null && a.product_set_id);
      }
      if (
        e === r("AdsAPIObjectives").POST_ENGAGEMENT ||
        e === r("AdsAPIObjectives").BRAND_AWARENESS
      ) {
        var i;
        return (
          (t == null || (i = t.creative) == null ? void 0 : i.object_type) !==
          r("ApiAdObjectTypes").SHARE
        );
      }
      return e === r("AdsAPIObjectives").MESSAGES &&
        (n === r("AdsPromotedObjectTypes").MESSENGER ||
          n === r("AdsPromotedObjectTypes").WHATSAPP)
        ? !0
        : [
            r("AdsAPIObjectives").MOBILE_APP_ENGAGEMENT,
            r("AdsAPIObjectives").PAGE_LIKES,
            r("AdsAPIObjectives").STORE_VISITS,
          ].includes(e);
    }
    function y(e) {
      return [r("ApiAdObjectTypes").DOMAIN].includes(e);
    }
    function C(e, t) {
      var n,
        a =
          (n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.asset_customization_rules;
      if (o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e)) {
        var i =
            a == null
              ? void 0
              : a.find(function (e) {
                  return !o("AdsPlacementAssetTargetingRuleUtils")
                    .convertTargetingRuleToPlacementList(e)
                    .isEmpty();
                }),
          l = i == null ? void 0 : i.get("image_label");
        if (l != null && l instanceof r("immutable").Map) {
          var s;
          return o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
            (s = e.creative) == null || (s = s.asset_feed_spec) == null
              ? void 0
              : s.images,
            l.get("name"),
            t,
          ).fieldValue;
        }
        var u = t === "hash" ? "thumbnail_hash" : "thumbnail_url",
          c = i == null ? void 0 : i.get("video_label");
        if (c instanceof r("immutable").Map) {
          var d;
          return o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
            (d = e.creative) == null || (d = d.asset_feed_spec) == null
              ? void 0
              : d.videos,
            c.get("name"),
            u,
          ).fieldValue;
        }
      }
    }
    ((l.getImageHashFromArray = e),
      (l.getImageURLFromArray = s),
      (l.getImageURL = u),
      (l.getImageHashPath = c),
      (l.getImageHash = d),
      (l.getImageHashWithPlugin = m),
      (l.getImageURLWithPlugin = p),
      (l.getChildAttachmentsImageHashes = _),
      (l.getImageCrops = f),
      (l.hasSizeRestrictions = g),
      (l.objectiveRequiresImage = h),
      (l.objectTypeRequiresImage = y),
      (l.getThumbnailHashOrUrlForFirstDeliverableACR = C));
  },
  98,
);
