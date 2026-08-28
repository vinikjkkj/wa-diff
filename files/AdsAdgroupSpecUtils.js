__d(
  "AdsAdgroupSpecUtils",
  [
    "AdsAPICallToActionPaths",
    "AdsAPIObjectives",
    "AdsAppUrlUtils",
    "AdsAppUtils",
    "AdsAssetFeedUtils",
    "AdsBrandAwarenessUtils",
    "AdsCallToActionTypes",
    "AdsCreativeSpecTypes",
    "AdsLocalAwarenessUtils",
    "AdsLocalUtils",
    "AdsObjectStorySpecUtils",
    "AdsObjectTypeUtils",
    "AdsPlatformTypes",
    "AdsPromotedObjectTypes",
    "AdsWebsiteAdUtils",
    "ApiAdObjectTypes",
    "getByPath",
    "isEmpty",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t,
        n =
          e == null || (t = e.creative) == null ? void 0 : t.object_story_spec,
        a = o("AdsObjectTypeUtils").getCreativeSpecType(e);
      return a === r("AdsCreativeSpecTypes").STANDARD || !n
        ? null
        : o("AdsObjectStorySpecUtils").getCallToAction(e, a);
    }
    function u(e) {
      var t = o("AdsObjectTypeUtils").getCreativeSpecType(e);
      if (t === r("AdsCreativeSpecTypes").STANDARD) {
        var n;
        return e == null || (n = e.creative) == null
          ? void 0
          : n.call_to_action_type;
      }
      return r("getByPath")(s(e), r("AdsAPICallToActionPaths").TYPE);
    }
    function c(e) {
      return r("getByPath")(
        s(e),
        r("AdsAPICallToActionPaths").VALUE.APP_DESTINATION,
      );
    }
    function d(e) {
      return r("getByPath")(
        s(e),
        r("AdsAPICallToActionPaths").VALUE.WHATSAPP_NUMBER,
      );
    }
    function m(e) {
      return r("getByPath")(s(e), r("AdsAPICallToActionPaths").VALUE.APP_LINK);
    }
    function p(e) {
      return r("getByPath")(s(e), r("AdsAPICallToActionPaths").VALUE.LINK);
    }
    function _(e) {
      var t = u(e);
      if (!t) return "";
      var n = r("AdsCallToActionTypes").TYPES[t];
      return n ? n.text : "";
    }
    function f(e) {
      var t,
        n =
          e == null || (t = e.creative) == null ? void 0 : t.object_story_spec,
        r = o("AdsObjectTypeUtils").getCreativeSpecType(e);
      return n ? o("AdsObjectStorySpecUtils").getDisplayURL(e, r) : null;
    }
    function g(e) {
      var t,
        n =
          e == null || (t = e.creative) == null ? void 0 : t.object_story_spec,
        a = o("AdsObjectTypeUtils").getCreativeSpecType(e);
      if (a === r("AdsCreativeSpecTypes").STANDARD) {
        var i;
        return e == null || (i = e.creative) == null ? void 0 : i.title;
      }
      return n ? o("AdsObjectStorySpecUtils").getHeadline(e, a) : null;
    }
    function h(e) {
      var t,
        n =
          e == null || (t = e.creative) == null ? void 0 : t.object_story_spec,
        a = o("AdsObjectTypeUtils").getCreativeSpecType(e);
      if (a === r("AdsCreativeSpecTypes").STANDARD) {
        var i;
        return e == null || (i = e.creative) == null ? void 0 : i.body;
      }
      return n ? o("AdsObjectStorySpecUtils").getPrimaryText(e, a) : null;
    }
    function y(e) {
      var t;
      return e == null || (t = e.creative) == null
        ? void 0
        : t.instagram_story_id;
    }
    function C(e) {
      var t;
      return e == null || (t = e.creative) == null
        ? void 0
        : t.source_instagram_media_id;
    }
    function b(e) {
      var t;
      return e == null || (t = e.creative) == null
        ? void 0
        : t.source_facebook_post_id;
    }
    function v(e) {
      var t;
      return e == null || (t = e.creative) == null
        ? void 0
        : t.instagram_actor_id;
    }
    function S(e, t) {
      var n;
      switch (t) {
        case r("AdsPlatformTypes").INSTAGRAM:
          return (n = e.creative) == null ||
            (n = n.platform_customizations) == null
            ? void 0
            : n.instagram;
        default:
          return null;
      }
    }
    function R(e, t) {
      var n;
      return (n = S(e, t)) == null ? void 0 : n.image_url;
    }
    function L(e) {
      var t,
        n,
        a = e == null ? void 0 : e.creative_link_url;
      if (a) return a;
      var i = e == null || (t = e.creative) == null ? void 0 : t.object_type,
        l =
          e == null || (n = e.creative) == null ? void 0 : n.object_story_spec,
        s = o("AdsObjectTypeUtils").getCreativeSpecType(e);
      if (i === r("ApiAdObjectTypes").DOMAIN) {
        var u;
        return e == null || (u = e.creative) == null ? void 0 : u.object_url;
      }
      if (s === r("AdsCreativeSpecTypes").STANDARD) {
        var c;
        return e == null || (c = e.creative) == null ? void 0 : c.link_url;
      }
      return l ? o("AdsObjectStorySpecUtils").getLink(e, s) : null;
    }
    function E(e) {
      var t,
        n =
          e == null || (t = e.creative) == null ? void 0 : t.object_story_spec,
        r = o("AdsObjectTypeUtils").getCreativeSpecType(e);
      return n ? o("AdsObjectStorySpecUtils").getLinkDescription(e, r) : null;
    }
    function k(e) {
      var t,
        n =
          e == null || (t = e.creative) == null ? void 0 : t.object_story_spec;
      if (!n) return null;
      var r = o("AdsObjectTypeUtils").getCreativeSpecType(e);
      return o("AdsObjectStorySpecUtils").getEventID(e, r);
    }
    function I(e) {
      var t;
      return e == null || (t = e.creative) == null ? void 0 : t.object_id;
    }
    function T(e) {
      if (N(e)) {
        var t = I(e),
          n = y(e),
          r = C(e),
          o = n != null ? n : r;
        return t == null || o == null ? null : t + "_" + o;
      } else {
        var a,
          i = b(e);
        return i != null
          ? i
          : e == null || (a = e.creative) == null
            ? void 0
            : a.object_story_id;
      }
    }
    function D(e) {
      var t;
      return e == null || (t = e.creative) == null ? void 0 : t.product_set_id;
    }
    function x(e) {
      var t;
      return e == null ||
        (t = e.creative) == null ||
        (t = t.object_story_spec) == null
        ? void 0
        : t.video_data;
    }
    function $(e) {
      return o("AdsObjectTypeUtils").isTemplateCreative(e);
    }
    function P(e, t, n) {
      return (
        r("AdsAppUtils").isAppObjective(e, t) ||
        r("AdsAppUrlUtils").isCanvasLink(n)
      );
    }
    function N(e) {
      var t = y(e),
        n = C(e),
        r = I(e);
      return !!(t || n) && !!r;
    }
    function M(e, t, n, a, i) {
      if (
        !o("AdsLocalUtils").isLocalObjective(t) &&
        !o("AdsBrandAwarenessUtils").isBrandObjective(t) &&
        t !== r("AdsAPIObjectives").LINK_CLICKS &&
        t !== r("AdsAPIObjectives").WILDCARD_INTERNAL_ONLY &&
        (t !== r("AdsAPIObjectives").LEAD_GENERATION ||
          a !== r("AdsPromotedObjectTypes").PHONE_CALL) &&
        t !== r("AdsAPIObjectives").VIDEO_VIEWS &&
        t !== r("AdsAPIObjectives").POST_ENGAGEMENT &&
        t !== r("AdsAPIObjectives").CONVERSIONS
      )
        return !1;
      var l = o("AdsLocalAwarenessUtils").isDynamicLocalAwareness(t, n);
      if (l) return !1;
      var s = i != null ? i : u(e);
      return s === "CALL_NOW" || s === "DIAL_CODE" || s === "GET_DIRECTIONS";
    }
    function w(e, t) {
      var o = n("AdsWebsiteAdUtils");
      return (
        e === r("AdsAPIObjectives").BRAND_AWARENESS ||
        e === r("AdsAPIObjectives").REACH ||
        e === r("AdsAPIObjectives").EVENT_RESPONSES ||
        e === r("AdsAPIObjectives").LEAD_GENERATION ||
        e === r("AdsAPIObjectives").LINK_CLICKS ||
        o.isWebsiteConversionsObjective(e, t)
      );
    }
    function A(e, t, n) {
      var r,
        a =
          n &&
          !!(
            (r = n.creative) != null &&
            (r = r.object_story_spec) != null &&
            r.template_data
          );
      return !!o("AdsLocalAwarenessUtils").isDynamicLocalAwareness(e, t) || !!a;
    }
    function F(t) {
      var n = O(t);
      return (e || (e = r("isEmpty")))(n) ? null : n[0];
    }
    function O(e) {
      var t;
      if (
        o("AdsAssetFeedUtils").isAdgroupUsingNonDofAssetFeedSpec(e) &&
        !o("AdsAssetFeedUtils").isDofMessagingDestinationAdgroupFromSpec(e)
      ) {
        var n,
          r =
            e == null ||
            (n = e.creative) == null ||
            (n = n.asset_feed_spec) == null
              ? void 0
              : n.videos;
        return r
          ? r.toJS
            ? r.isEmpty()
              ? []
              : Array.from(
                  r.map(function (e) {
                    return e.get("video_id");
                  }),
                )
            : r.length === 0
              ? []
              : r.map(function (e) {
                  return e.video_id;
                })
          : [];
      }
      var a =
        e == null ||
        (t = e.creative) == null ||
        (t = t.object_story_spec) == null ||
        (t = t.video_data) == null
          ? void 0
          : t.video_id;
      return a ? [a] : [];
    }
    function B(e, t) {
      return (
        e === r("AdsAPIObjectives").VIDEO_VIEWS ||
        t === r("ApiAdObjectTypes").VIDEO
      );
    }
    function W(e) {
      var t, n, a, i;
      return !r("isStringNullOrEmpty")(
        (t = e.creative) == null ||
          (t = t.object_story_spec) == null ||
          (t = t.link_data) == null
          ? void 0
          : t.image_hash,
      ) ||
        !r("isStringNullOrEmpty")(
          (n = e.creative) == null ||
            (n = n.object_story_spec) == null ||
            (n = n.link_data) == null
            ? void 0
            : n.picture,
        ) ||
        !r("isStringNullOrEmpty")(
          (a = e.creative) == null ||
            (a = a.object_story_spec) == null ||
            (a = a.photo_data) == null
            ? void 0
            : a.image_hash,
        ) ||
        !r("isStringNullOrEmpty")(
          (i = e.creative) == null ||
            (i = i.object_story_spec) == null ||
            (i = i.template_data) == null
            ? void 0
            : i.image_hash,
        ) ||
        q(e)
        ? !0
        : o("AdsAssetFeedUtils").doesAdgroupHaveImages(e);
    }
    function q(e) {
      var t,
        n,
        o,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p,
        _,
        f,
        g =
          (e == null || (t = e.creative) == null
            ? void 0
            : t.object_story_id) != null &&
          (e == null || (n = e.creative) == null ? void 0 : n.media_type) ===
            "EXISTING_POST" &&
          (e == null || (o = e.creative) == null ? void 0 : o.object_type) ===
            r("ApiAdObjectTypes").PHOTO,
        h =
          (e == null || (a = e.creative) == null
            ? void 0
            : a.object_story_id) != null &&
          (e == null || (i = e.creative) == null
            ? void 0
            : i.object_story_spec) == null &&
          (e == null || (l = e.creative) == null ? void 0 : l.object_type) ===
            r("ApiAdObjectTypes").SHARE,
        y =
          (e == null || (s = e.creative) == null ? void 0 : s.object_id) !=
            null &&
          (e == null || (u = e.creative) == null
            ? void 0
            : u.source_instagram_media_id) != null &&
          (e == null || (c = e.creative) == null ? void 0 : c.media_type) ===
            "EXISTING_INSTAGRAM_POST" &&
          (e == null || (d = e.creative) == null ? void 0 : d.object_type) ===
            r("ApiAdObjectTypes").PHOTO,
        C =
          (e == null || (m = e.creative) == null ? void 0 : m.object_id) !=
            null &&
          (e == null || (p = e.creative) == null
            ? void 0
            : p.source_instagram_media_id) != null &&
          (e == null || (_ = e.creative) == null
            ? void 0
            : _.object_story_spec) == null &&
          (e == null || (f = e.creative) == null ? void 0 : f.object_type) ===
            r("ApiAdObjectTypes").PHOTO;
      return g || h || y || C;
    }
    function U(e) {
      var t;
      return (
        !r("isStringNullOrEmpty")(
          (t = e.creative) == null ||
            (t = t.object_story_spec) == null ||
            (t = t.video_data) == null
            ? void 0
            : t.video_id,
        ) || o("AdsAssetFeedUtils").doesAdgroupHaveVideos(e)
      );
    }
    ((l.getCallToAction = s),
      (l.getCallToActionType = u),
      (l.getAppDestination = c),
      (l.getWhatsAppNumber = d),
      (l.getInstagramAppLink = m),
      (l.getCallToActionValue = p),
      (l.getCallToActionText = _),
      (l.getDisplayURL = f),
      (l.getHeadline = g),
      (l.getPrimaryText = h),
      (l.getInstagramStoryID = y),
      (l.getSourceInstagramMediaID = C),
      (l.getSourceFacebookPostID = b),
      (l.getInstagramActorID = v),
      (l.getPlatformCustomizations = S),
      (l.getPlatformVideoThumbnailURL = R),
      (l.getLink = L),
      (l.getLinkDescription = E),
      (l.getEventID = k),
      (l.getObjectID = I),
      (l.getPagePostID = T),
      (l.getProductSetID = D),
      (l.getVideoData = x),
      (l.isTemplateCreative = $),
      (l.isAppLinkDataEligible = P),
      (l.isInstagramMedia = N),
      (l.isCTALinkCustomizable = M),
      (l.isLinkDataEligible = w),
      (l.isTemplateDataEligible = A),
      (l.getVideoID = F),
      (l.getVideoIDs = O),
      (l.isVideoObjectType = B),
      (l.getDoesAdgroupHaveImages = W),
      (l.getDoesAdgroupHaveVideos = U));
  },
  98,
);
