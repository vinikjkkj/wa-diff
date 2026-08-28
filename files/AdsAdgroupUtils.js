__d(
  "AdsAdgroupUtils",
  [
    "invariant",
    "AdsAPIAdAssetFeedFields",
    "AdsAPIAdgroupRecordUtils",
    "AdsActiveStatuses",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
    "AdsAppUtils",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedUtils",
    "AdsInstagramApplicabilityUtils",
    "AdsLoadState_LEGACY",
    "AdsPagePostUtils",
    "AdsPageUtils",
    "AdsPromotedObjectTypeOmnichannelVariationUtils",
    "AdsUEditorAdgroupAudiosAdsMutators",
    "AdsUEditorAdgroupBadges",
    "AdsUEditorAdgroupShopAdsBundle",
    "ApiAdCreativeFields",
    "ApiAdObjectTypes",
    "ApiDynamicCreativeOptimizationTypes",
    "FBLogger",
    "adsConvertAdObjectRecordToPlainJS",
    "adsPlacementAPISpecReaderIsActivePublisherPlatform",
    "getByPath",
    "gkx",
    "immutable",
    "isEmptyIterable",
    "isTruthy",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["ACTIVE", "PAUSED"],
      u = ["ACTIVE", "PAUSED", "DELETED", "ARCHIVED"],
      c = ["ACTIVE", "DELETED", "ARCHIVED"],
      d = ["DELETED", "ARCHIVED"],
      m = [];
    function p(e) {
      return { campaignGroupID: e.campaign_id, campaignID: e.adset_id };
    }
    function _(e, t) {
      var n = null;
      if (
        (r("AdsAdgroupSemanticFields").headline.isSupported(t, e) &&
          (n = o("AdsAssetFeedFieldUtils").firstAsset_TALK_WITH_ACE_BEFORE_USE(
            r("AdsAdgroupSemanticFields").headline.get(t, e),
            "text",
          )),
        n == null)
      ) {
        var a, i, l;
        n =
          (e == null || (a = e.creative) == null ? void 0 : a.title) ||
          (e == null ||
          (i = e.creative) == null ||
          (i = i.object_story_spec) == null ||
          (i = i.link_data) == null
            ? void 0
            : i.name) ||
          (e == null ||
          (l = e.creative) == null ||
          (l = l.object_story_spec) == null ||
          (l = l.link_data) == null ||
          (l = l.call_to_action) == null ||
          (l = l.value) == null
            ? void 0
            : l.link_title);
      }
      return n;
    }
    function f(e) {
      var t,
        n,
        a =
          e == null ||
          (t = e.creative) == null ||
          (t = t.asset_feed_spec) == null
            ? void 0
            : t.ad_formats;
      if (a != null) {
        var i = a instanceof r("immutable").List ? a.get(0) : a[0];
        return (
          i == null &&
            r("FBLogger")("am_feature_pac").mustfix(
              "asset feed ad_formats property must have at least one format",
            ),
          o("AdsAssetFeedUtils").convertDCOAdFormatToMediaFormat(i)
        );
      }
      var l = e == null || (n = e.creative) == null ? void 0 : n.object_type;
      return g(l);
    }
    function g(e) {
      switch (e) {
        case r("ApiAdObjectTypes").VIDEO:
          return "VIDEO";
        case r("ApiAdObjectTypes").PAGE:
        case r("ApiAdObjectTypes").PHOTO:
        case r("ApiAdObjectTypes").SHARE:
          return "IMAGE";
        default:
          return (
            r("FBLogger")("ads")
              .blameToPreviousFile()
              .warn(
                "unexpected object type %s supplied to getMediaFormatForObjectType",
                e,
              ),
            "IMAGE"
          );
      }
    }
    function h(e, t, n) {
      return !(
        (n == null && o("AdsPageUtils").getPageID(e) == null) ||
        (r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
          t,
          "instagram",
        ) &&
          !r("AdsInstagramApplicabilityUtils").hasInstagramActor(e))
      );
    }
    function y(t, n) {
      if (t || !n) return e;
      var o;
      if (r("AdsActiveStatuses").has(n) && n !== "PENDING_REVIEW") o = u;
      else
        switch (n) {
          case "PAUSED":
            o = c;
            break;
          case "DELETED":
          case "ARCHIVED":
            o = m;
            break;
          default:
            o = d;
            break;
        }
      return (n && !o.includes(n) && (o = [n].concat(o)), o);
    }
    function C(e) {
      var t,
        n,
        r =
          e == null ||
          (t = e.creative) == null ||
          (t = t.object_story_spec) == null ||
          (t = t.video_data) == null
            ? void 0
            : t.video_id;
      if (r != null) return [r];
      var o = [],
        a =
          e == null ||
          (n = e.creative) == null ||
          (n = n.object_story_spec) == null ||
          (n = n.link_data) == null
            ? void 0
            : n.child_attachments;
      return (
        a &&
          a.forEach(function (e) {
            e.video_id != null && o.push(e.video_id);
          }),
        o
      );
    }
    function b(e) {
      var t,
        n,
        a,
        i,
        l,
        u,
        c,
        d,
        m,
        p,
        _,
        f = null,
        g = r("adsConvertAdObjectRecordToPlainJS")(e);
      if (
        ((t = e.creative) != null && t.image_url) ||
        ((n = e.creative) != null && n.image_hash) ||
        ((a = e.creative) != null &&
          (a = a.object_story_spec) != null &&
          (a = a.link_data) != null &&
          a.picture) ||
        ((i = e.creative) != null &&
          (i = i.object_story_spec) != null &&
          (i = i.link_data) != null &&
          i.image_hash) ||
        ((l = e.creative) != null &&
          (l = l.object_story_spec) != null &&
          (l = l.template_data) != null &&
          l.picture) ||
        ((u = e.creative) != null &&
          (u = u.object_story_spec) != null &&
          (u = u.template_data) != null &&
          u.image_hash) ||
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
            return (t = e.creative) == null ||
              (t = t.asset_feed_spec) == null ||
              (t = t.images) == null ||
              (t = t.get(0)) == null
              ? void 0
              : t.get("url");
          },
        ) ||
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
            return (t = e.creative) == null ||
              (t = t.asset_feed_spec) == null ||
              (t = t.images) == null ||
              (t = t.get(0)) == null
              ? void 0
              : t.get("hash");
          },
        ) ||
        o(
          "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
        ).isUnifiedCreativePhotoData(g)
      )
        f = "IMAGE";
      else if (
        ((c = e.creative) == null ||
        (c = c.object_story_spec) == null ||
        (c = c.video_data) == null
          ? void 0
          : c.video_id) != null
      )
        f = "VIDEO";
      else if (
        ((d = e.creative) != null &&
          (d = d.object_story_spec) != null &&
          (d = d.link_data) != null &&
          d.child_attachments) ||
        ((m = e.creative) != null &&
          (m = m.object_story_spec) != null &&
          (m = m.template_data) != null &&
          m.child_attachments)
      )
        f = "CAROUSEL";
      else if (o("AdsAssetFeedUtils").isFormatAutomationAdgroupFromRecord(e)) {
        var h,
          y = (h = e.creative) == null ? void 0 : h.asset_feed_spec;
        return (y == null ? void 0 : y.images) != null &&
          !r("isEmptyIterable")(y.images)
          ? "IMAGE"
          : (y == null ? void 0 : y.videos) != null &&
              !r("isEmptyIterable")(y.videos)
            ? "VIDEO"
            : null;
      } else if (
        (p = e.creative) != null &&
        p.asset_feed_spec &&
        Object.keys(e.creative.asset_feed_spec).length !== 0 &&
        ((_ = e.creative) == null || (_ = _.asset_feed_spec) == null
          ? void 0
          : _.optimization_type) !==
          r("ApiDynamicCreativeOptimizationTypes").DOF_MESSAGING_DESTINATION
      ) {
        var C,
          b = (C = e.creative) == null ? void 0 : C.asset_feed_spec,
          v = r("adsConvertAdObjectRecordToPlainJS")(e),
          S = o("AdsAssetFeedUtils").isTextOnlyDofAssetFeedSpec(b),
          R = o("AdsAssetFeedUtils").isDofWithImageAssetFeedSpec(b),
          L = o("AdsAssetFeedUtils").isAdgroupUsingOnlyOnsiteDestinations(v);
        if (
          !S &&
          !R &&
          !L &&
          !o(
            "AdsUEditorAdgroupShopAdsBundle",
          ).isAdgroupUsingOnlyShopAdsBundleAssetFeedFromRecord(v) &&
          !o(
            "AdsUEditorAdgroupAudiosAdsMutators",
          ).isAdgroupUsingOnlyAudiosAssetFeedFromRecord(v) &&
          !o("AdsUEditorAdgroupBadges").isAdgroupUsingOnlyBadgesAssetFeed(v)
        ) {
          if (o("AdsAssetFeedUtils").isAcoAutoflowAssetFeedSpec(b)) return null;
          var E = b == null ? void 0 : b.ad_formats,
            k = (E || [])[0];
          if (k == null) return f;
          k || s(0, 39);
          var I = r("nullthrows")(
            o("AdsAssetFeedUtils").getAssetFeedMediaFieldForDCOAdFormat(k),
          );
          f =
            ((b == null ? void 0 : b[I]) || []).length > 0
              ? o("AdsAssetFeedUtils").convertDCOAdFormatToMediaFormat(k)
              : null;
        } else if (R) {
          var T = b == null ? void 0 : b.images;
          T && Array.isArray(T) && T.length > 0 && (f = "IMAGE");
        }
      }
      return f;
    }
    function v(e) {
      var t = e.asset_feed_spec;
      if (t == null) return null;
      var n = t[r("AdsAPIAdAssetFeedFields").AD_FORMATS],
        a = (n || [])[0];
      if (!a) return null;
      var i = o("AdsAssetFeedUtils").getAssetFeedMediaFieldForDCOAdFormat(a);
      return i && t[i] && t[i].length > 0
        ? o("AdsAssetFeedUtils").convertDCOAdFormatToMediaFormat(a)
        : null;
    }
    function S(e) {
      var t,
        n,
        r,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m = [];
      if (
        ((((t = e.creative) != null && t.image_url) ||
          ((n = e.creative) != null && n.image_hash) ||
          ((r = e.creative) != null &&
            (r = r.object_story_spec) != null &&
            (r = r.link_data) != null &&
            r.picture) ||
          ((a = e.creative) != null &&
            (a = a.object_story_spec) != null &&
            (a = a.link_data) != null &&
            a.image_hash) ||
          ((i = e.creative) != null &&
            (i = i.object_story_spec) != null &&
            (i = i.template_data) != null &&
            i.picture) ||
          ((l = e.creative) != null &&
            (l = l.object_story_spec) != null &&
            (l = l.template_data) != null &&
            l.image_hash) ||
          o(
            "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
          ).getUnifiedCreativeOrLegacyValueFromSpec(
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
          ) ||
          o(
            "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
          ).getUnifiedCreativeOrLegacyValueFromSpec(
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
          )) &&
          m.push("IMAGE"),
        ((s = e.creative) == null ||
        (s = s.object_story_spec) == null ||
        (s = s.video_data) == null
          ? void 0
          : s.video_id) != null && m.push("VIDEO"),
        (((u = e.creative) != null &&
          (u = u.object_story_spec) != null &&
          (u = u.link_data) != null &&
          u.child_attachments) ||
          ((c = e.creative) != null &&
            (c = c.object_story_spec) != null &&
            (c = c.template_data) != null &&
            c.child_attachments)) &&
          m.push("CAROUSEL"),
        (d = e.creative) != null && d.asset_feed_spec)
      ) {
        var p = v(e.creative);
        p && m.push(p);
      }
      return m;
    }
    function R(e) {
      var t = r("getByPath")(e.creative, [
        r("ApiAdCreativeFields").OBJECT_STORY_SPEC,
      ]);
      if (r("gkx")("15628")) {
        var n, o, a;
        return (
          L(
            t == null || (n = t.link_data) == null ? void 0 : n.call_to_action,
          ) ||
          L(
            t == null || (o = t.video_data) == null ? void 0 : o.call_to_action,
          ) ||
          L(
            t == null || (a = t.template_data) == null
              ? void 0
              : a.call_to_action,
          )
        );
      } else {
        var i, l, s;
        return (
          (t == null ||
          (i = t.link_data) == null ||
          (i = i.call_to_action) == null ||
          (i = i.value) == null
            ? void 0
            : i.app_link) != null ||
          (t == null ||
          (l = t.video_data) == null ||
          (l = l.call_to_action) == null ||
          (l = l.value) == null
            ? void 0
            : l.app_link) != null ||
          (t == null ||
          (s = t.template_data) == null ||
          (s = s.call_to_action) == null ||
          (s = s.value) == null
            ? void 0
            : s.app_link) != null
        );
      }
    }
    function L(e) {
      var t, n, r;
      return (
        (e == null || (t = e.value) == null ? void 0 : t.ios_url) != null ||
        (e == null || (n = e.value) == null ? void 0 : n.app_link) != null ||
        (e == null || (r = e.value) == null ? void 0 : r.android_url) != null
      );
    }
    function E(e) {
      var t;
      return (
        ((t = e.creative) == null ||
        (t = t.template_url_spec) == null ||
        (t = t.config) == null
          ? void 0
          : t.app_id) != null
      );
    }
    function k(e) {
      var t;
      return (
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.app_product_page_id) != null
      );
    }
    function I(e, t) {
      var n, a;
      return (
        r("AdsAppUtils").isMobileAppInstall(
          (n = (a = e.campaignGroup) == null ? void 0 : a.objective) != null
            ? n
            : "",
          o(
            "AdsPromotedObjectTypeOmnichannelVariationUtils",
          ).getPromotedObjectType(t),
        ) && o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e.adgroup)
      );
    }
    function T(e, t) {
      var n, a;
      return (
        r("AdsAppUtils").isAppEngagementObjective(
          (n = (a = e.campaignGroup) == null ? void 0 : a.objective) != null
            ? n
            : "",
          o(
            "AdsPromotedObjectTypeOmnichannelVariationUtils",
          ).getPromotedObjectType(t),
        ) && o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e.adgroup)
      );
    }
    function D(e) {
      var t;
      return (
        ((t = e.creative) == null ||
        (t = t.template_url_spec) == null ||
        (t = t.web) == null
          ? void 0
          : t.url) != null
      );
    }
    function x(e) {
      return !!r("getByPath")(e, [r("ApiAdCreativeFields").OBJECT_STORY_SPEC]);
    }
    function $(e) {
      return e == null || e === r("AdsLoadState_LEGACY").LOADING ? null : e;
    }
    function P(e) {
      return !!e.instagram_story_id;
    }
    function N(e) {
      return !!e.source_instagram_media_id;
    }
    function M(e) {
      return !!e.source_facebook_post_id;
    }
    function w(e) {
      var t = e.object_story_id,
        n = $(o("AdsPagePostUtils").getPageIdFromPagePostId_BROKEN(t)),
        r = $(o("AdsPagePostUtils").getPostIdFromPagePostId_BROKEN(t));
      return !!n && !!r;
    }
    function A(e) {
      var t,
        n,
        o,
        a =
          e == null || (t = e.creative) == null ? void 0 : t.object_story_spec;
      return a
        ? r("isTruthy")(
            ((n = a.link_data) == null ? void 0 : n.link) ||
              ((o = a.template_data) == null ? void 0 : o.link),
          )
        : !1;
    }
    function F(e) {
      return A(e) && !b(e);
    }
    function O(e) {
      var t;
      return (
        (e == null || (t = e.creative) == null ? void 0 : t.object_type) ===
        r("ApiAdObjectTypes").STATUS
      );
    }
    function B(e) {
      var t, n, r, o;
      return (
        ((t = e.creative) == null ? void 0 : t.authorization_category) ===
          "POLITICAL" ||
        ((n = e.creative) == null
          ? void 0
          : n.effective_authorization_category) === "POLITICAL" ||
        ((r = e.creative) == null ? void 0 : r.authorization_category) ===
          "POLITICAL_WITH_DIGITALLY_CREATED_MEDIA" ||
        ((o = e.creative) == null
          ? void 0
          : o.effective_authorization_category) ===
          "POLITICAL_WITH_DIGITALLY_CREATED_MEDIA"
      );
    }
    function W(e) {
      var t, n;
      return (
        ((t = e.creative) == null ? void 0 : t.authorization_category) ===
          "POLITICAL_WITH_DIGITALLY_CREATED_MEDIA" ||
        ((n = e.creative) == null
          ? void 0
          : n.effective_authorization_category) ===
          "POLITICAL_WITH_DIGITALLY_CREATED_MEDIA"
      );
    }
    function q(e) {
      var t;
      return (
        ((t = e.creative) == null || (t = t.degrees_of_freedom_spec) == null
          ? void 0
          : t.multi_media_transformation_type) != null
      );
    }
    function U(e) {
      var t;
      return (
        ((t = e.creative) == null ||
        (t = t.degrees_of_freedom_spec) == null ||
        (t = t.creative_features_spec) == null
          ? void 0
          : t.carousel_to_video) != null
      );
    }
    function V(e) {
      var t;
      return (
        ((t = e.creative) == null ? void 0 : t.branded_content_boosting_type) !=
        null
      );
    }
    ((l.getParentIDs = p),
      (l.getAdgroupHeadline_TALK_WITH_ACE_BEFORE_USE = _),
      (l.getMediaFormat = f),
      (l.getMediaFormatForObjectType = g),
      (l.hasRequiredActor = h),
      (l.getAllowedStatusTransitions = y),
      (l.getVideoIDsFromAdgroup = C),
      (l.getMediaContentType = b),
      (l.getDCOContentType = v),
      (l.getMediaContentTypes = S),
      (l.hasAppLink = R),
      (l.hasAppID = E),
      (l.hasAppProductPageID = k),
      (l.isMAIAdWithExistingPosts = I),
      (l.isMAEAdWithExistingPosts = T),
      (l.hasTemplateWebUrl = D),
      (l.hasObjectStorySpec = x),
      (l.getLoadedID = $),
      (l.isInstagramStoryIDLoaded = P),
      (l.isSourceInstagramMediaIDLoaded = N),
      (l.isSourceFacebookPostIDLoaded = M),
      (l.isPageAndPostIDLoaded = w),
      (l.doesAdgroupHaveLink = A),
      (l.hasScrapedImage = F),
      (l.isExistingPostWithStatus = O),
      (l.isPoliticalAd = B),
      (l.isPoliticalAdWithDigitallyCreatedMedia = W),
      (l.isMMTAdgroup = q),
      (l.isCarouselToVideoAdgroup = U),
      (l.isPartnershipAd = V));
  },
  98,
);
