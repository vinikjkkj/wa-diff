__d(
  "AdsAPIAdgroupRecordUtils",
  [
    "AdsAPIAdgroupRecord",
    "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupSpecUtils",
    "AdsAdgroupTypeUtils",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedUtils",
    "AdsCanvasAdUtils",
    "AdsCanvasCollectionsThumbnail",
    "AdsChildAttachmentsUtils",
    "AdsEditorPostEditMode",
    "AdsLinkPostFormat",
    "AdsMessageMarketingSetupSource",
    "AdsPagePostUtils",
    "AdsUEditorAdgroupAudiosAdsMutators",
    "AdsUEditorAdgroupStaticAdsWithAssetFeedSpecUtils",
    "AdsUEditorAdgroupUrlMutators",
    "AdsUEditorPartnerAppWelcomeMessageFlowUtils",
    "AdsWhatsAppUtils",
    "ApiAdObjectTypes",
    "adsAssetFeedGetCallToActionValue",
    "adsConvertAdObjectRecordToPlainJS",
    "immutable",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.id;
    }
    function s(e) {
      return { campaignGroupID: e.campaign_id, campaignID: e.adset_id };
    }
    function u(e, t) {
      var n = r("AdsAdgroupSemanticFields").phoneDataID.get(t, e);
      return o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(e) ||
        ue(e)
        ? o("AdsAssetFeedFieldUtils").getAssetAtIndex(
            n,
            "id",
            o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(
              e,
              "phone_data_ids",
            ),
          ) || null
        : o("AdsAssetFeedFieldUtils").getNonAssetFeedValue(n) || null;
    }
    function c(e, t) {
      var n = "";
      if (Ee(e)) {
        var a = r(
          "AdsAdgroupRecordAccessors",
        ).creative.call_to_action.value.link_caption.get(e);
        if (a != null) return a;
      }
      return o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(e)
        ? o("AdsUEditorAdgroupUrlMutators").getDefaultDisplayUrl(e)
        : n;
    }
    function d(e, t) {
      var n = r("AdsAdgroupSemanticFields").callToActionValue.get(t, e);
      return n && n.app_destination;
    }
    function m(e, t) {
      return r("AdsAdgroupSemanticFields").additionalImageIndex.get(t, e);
    }
    function p(e, t) {
      var n = r("AdsAdgroupSemanticFields").imageHash.get(t, e);
      n = o("AdsAssetFeedFieldUtils").firstAsset_TALK_WITH_ACE_BEFORE_USE(
        n,
        "hash",
      );
      var a = r("AdsAdgroupSemanticFields").imageURL.get(t, e);
      a = o("AdsAssetFeedFieldUtils").firstAsset_TALK_WITH_ACE_BEFORE_USE(
        a,
        "url",
      );
      var i = r("AdsAdgroupSemanticFields").imageCrops.get(t, e),
        l = o(
          "AdsAssetFeedFieldUtils",
        ).firstImageCropsAsset_TALK_WITH_ACE_BEFORE_USE(i, "image_crops");
      return {
        imageCrops: l || void 0,
        imageHash: r("isTruthy")(n) ? n : void 0,
        imageURL: r("isTruthy")(a) ? a : void 0,
      };
    }
    function _(e) {
      return o("AdsAdgroupTypeUtils").isVideoAd(e)
        ? "VIDEO"
        : o("AdsChildAttachmentsUtils").isCarouselAd(e)
          ? "CAROUSEL"
          : "IMAGE";
    }
    function f(e) {
      var t;
      return e == null || (t = e.creative) == null ? void 0 : t.object_type;
    }
    function g(e) {
      var t = o("AdsAdgroupTypeUtils").isVideoAd(e);
      return t ? r("ApiAdObjectTypes").VIDEO : f(e);
    }
    function h(e, t) {
      return y(e, function () {
        return r("AdsAdgroupSemanticFields").pageID.get(t, e);
      });
    }
    function y(e, t) {
      return ue(e) ? C(e) : t();
    }
    function C(e) {
      if (!ue(e)) return null;
      if (o("AdsAssetFeedUtils").isMCAAdgroupFromRecord(e)) return R(e);
      var t = L(e);
      if (r("isTruthy")(t)) return t;
      if (Q(e)) return k(e);
      var n = A(e),
        a = k(e);
      return r("isTruthy")(a)
        ? a
        : o("AdsPagePostUtils").getPageIdFromPagePostId_BROKEN(n);
    }
    function b(e, t) {
      return ue(e) ? S(e) : r("AdsAdgroupSemanticFields").pageID.get(t, e);
    }
    function v(e, t) {
      var n = b(e, t),
        o = r(
          "AdsAdgroupRecordAccessors",
        ).creative.facebook_branded_content.sponsor_page_id.get(e),
        a = r(
          "AdsAdgroupRecordAccessors",
        ).creative.branded_content_boosting_type.get(e);
      return (
        n === o &&
          (a === "SPONSOR_BOOST" || a === "SPONSOR_INLINE") &&
          (n = null),
        n
      );
    }
    function S(e) {
      if (!ue(e)) return null;
      if (Q(e)) return k(e);
      var t = A(e),
        n = k(e);
      return r("isTruthy")(n)
        ? n
        : o("AdsPagePostUtils").getPageIdFromPagePostId_BROKEN(t);
    }
    function R(e) {
      var t;
      return o("AdsAssetFeedUtils").isMCAAdgroupFromRecord(e)
        ? (t = e.creative) == null || (t = t.facebook_branded_content) == null
          ? void 0
          : t.sponsor_page_id
        : null;
    }
    function L(e) {
      var t;
      if (
        ue(e) &&
        ((t = e.creative) == null
          ? void 0
          : t.branded_content_boosting_type) === "SPONSOR_BOOST"
      ) {
        var n;
        return (n = e.creative) == null ||
          (n = n.facebook_branded_content) == null
          ? void 0
          : n.sponsor_page_id;
      }
      return null;
    }
    function E(e) {
      var t;
      return (t = e.creative) == null ? void 0 : t.enable_direct_install;
    }
    function k(e) {
      var t;
      return (t = e.creative) == null ? void 0 : t.object_id;
    }
    function I(e) {
      var t;
      return (t = e.creative) == null ? void 0 : t.instagram_story_id;
    }
    function T(e) {
      var t;
      return (t = e.creative) == null ? void 0 : t.source_instagram_media_id;
    }
    function D(e) {
      var t;
      return (t = e.creative) == null ? void 0 : t.source_facebook_post_id;
    }
    function x(e) {
      var t;
      return (t = e.creative) == null || (t = t.call_to_action) == null
        ? void 0
        : t.type;
    }
    function $(e) {
      var t, n, r;
      return (t =
        (n = e.creative) == null || (n = n.call_to_action) == null
          ? void 0
          : n.type) != null
        ? t
        : (r = e.creative) == null
          ? void 0
          : r.call_to_action_type;
    }
    function P(e) {
      var t;
      return (t = e.creative) == null ||
        (t = t.call_to_action) == null ||
        (t = t.value) == null
        ? void 0
        : t.link;
    }
    function N(e) {
      var t;
      return (t = e.creative) == null || (t = t.asset_feed_spec) == null
        ? void 0
        : t.call_to_actions;
    }
    function M(e) {
      var t = N(e);
      return t == null
        ? null
        : Array.isArray(t)
          ? t.length > 0
            ? t[0].type
            : null
          : t.getIn([0, "type"]);
    }
    function w(e) {
      var t = N(e),
        n = null;
      if (t != null)
        if (Array.isArray(t)) {
          var r;
          n =
            t.length > 0 ? ((r = t[0].value) == null ? void 0 : r.link) : null;
        } else n = t.getIn([0, "value", "link"]);
      if (n == null) {
        var o;
        n =
          (o = e.creative) == null ||
          (o = o.call_to_action) == null ||
          (o = o.value) == null
            ? void 0
            : o.link;
      }
      return n;
    }
    function A(e) {
      var t;
      return (t = e.creative) == null ? void 0 : t.object_story_id;
    }
    function F(e) {
      return e.source_ad_id;
    }
    function O(e) {
      var t;
      return (t = e.creative) == null ? void 0 : t.media_type;
    }
    function B(e) {
      return F(e) != null;
    }
    function W(e, t) {
      var n = r("AdsAdgroupSemanticFields").collectionThumbnails.get(t, e);
      return n
        ? n.map(function (e) {
            return new (r("AdsCanvasCollectionsThumbnail"))(e.toJSON());
          })
        : null;
    }
    function q(e, t) {
      return r("AdsAdgroupSemanticFields").retailerItemIDs.get(t, e);
    }
    function U(e, t) {
      return o("AdsAssetFeedFieldUtils").firstCTAAsset_TALK_WITH_ACE_BEFORE_USE(
        r("AdsAdgroupSemanticFields").callToActionType.get(t, e),
      );
    }
    function V(e, t) {
      if (o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e))
        return r("adsAssetFeedGetCallToActionValue")(e, 0, "link");
      var n = r("AdsAdgroupSemanticFields").callToActionValue.get(t, e);
      return n && n.link;
    }
    function H(e, t) {
      var n = U(e, t);
      return !!n;
    }
    function G(e, t) {
      var n = U(e, t);
      return n === "WHATSAPP_MESSAGE";
    }
    function z(e) {
      var t = n("AdsAdgroupSpecUtils").getAppDestination(e);
      return t === "MESSENGER";
    }
    function j(e) {
      var t = o("AdsAdgroupSpecUtils").getAppDestination(e);
      return t === "INSTAGRAM_DIRECT";
    }
    function K(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.message_extensions;
      if (n != null) {
        if (Array.isArray(n))
          return n.some(function (e) {
            return e.type === "instagram_message";
          });
        if (o("immutable").List.isList(n))
          return n.some(function (e) {
            return e.get("type") === "instagram_message";
          });
      }
      return !1;
    }
    function Q(e) {
      var t,
        n,
        r,
        o = (t = e.creative) == null ? void 0 : t.instagram_story_id,
        a = (n = e.creative) == null ? void 0 : n.source_instagram_media_id,
        i = (r = e.creative) == null ? void 0 : r.object_id;
      return !!(o != null ? o : a) && !!i;
    }
    function X(e) {
      return o(
        "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
      ).hasSpecificOrigin(e, "flexible_format");
    }
    function Y(e) {
      return o("AdsAdgroupCreativeAssetGroupsSpecOriginMutators").hasAnyOrigins(
        e,
        ["flexible_format", "creative_asset_groups"],
      );
    }
    function J(e) {
      return o("AdsAdgroupCreativeAssetGroupsSpecOriginMutators").hasAnyOrigins(
        e,
        [
          "creative_asset_groups",
          "pca_unification_alpha_experiment_full_format",
        ],
      );
    }
    function Z(e, t) {
      var n = q(e, t),
        o = W(e, t);
      return (
        (r("AdsAdgroupSemanticFields").retailerItemIDs.isSupported(t, e) &&
          (n == null ? void 0 : n.isEmpty()) === !1) ||
        (r("AdsAdgroupSemanticFields").collectionThumbnails.isSupported(t, e) &&
          (o == null ? void 0 : o.isEmpty()) === !1)
      );
    }
    function ee(e) {
      var t, n;
      return te(
        (t = e.semantic_fields) == null ? void 0 : t.retailer_item_ids,
        (n = e.semantic_fields) == null ? void 0 : n.collection_thumbnails,
      );
    }
    function te(e, t) {
      return (
        (e == null ? void 0 : e.isEmpty()) === !1 ||
        (t == null ? void 0 : t.isEmpty()) === !1
      );
    }
    function ne(e, t) {
      return e instanceof r("AdsAPIAdgroupRecord") ? Z(e, t) : ee(e);
    }
    function re(e, t) {
      return X(e) || J(e)
        ? r("AdsLinkPostFormat").FLEXIBLE
        : ne(e, t)
          ? r("AdsLinkPostFormat").COLLECTIONS
          : o("AdsChildAttachmentsUtils").isCarouselAd(e)
            ? r("AdsLinkPostFormat").MULTIPLE
            : r("AdsLinkPostFormat").SINGLE;
    }
    function oe(e, t) {
      return e !== null
        ? o("AdsMessageMarketingSetupSource").AdsMessageMarketingSetupSource
            .EXISTING_AD
        : t !== null
          ? o("AdsMessageMarketingSetupSource").AdsMessageMarketingSetupSource
              .CATALOG
          : o("AdsMessageMarketingSetupSource").AdsMessageMarketingSetupSource
              .MANUAL;
    }
    function ae(e) {
      return n("AdsAdgroupSpecUtils").isTemplateCreative(e);
    }
    function ie(e) {
      var t;
      return (
        ue(e) &&
        ((t = e.creative) == null ? void 0 : t.object_type) ===
          r("ApiAdObjectTypes").SHARE
      );
    }
    function le(e) {
      var t;
      return (
        ke(e) &&
        ((t = e.creative) == null ? void 0 : t.object_type) ===
          r("ApiAdObjectTypes").SHARE
      );
    }
    function se(e) {
      var t, n, o;
      return (
        ue(e) &&
        ((t = e.creative) == null ? void 0 : t.media_type) ===
          "EXISTING_POST" &&
        (((n = e.creative) == null ? void 0 : n.object_type) ===
          r("ApiAdObjectTypes").SHARE ||
          ((o = e.creative) == null ? void 0 : o.object_type) ===
            r("ApiAdObjectTypes").STATUS)
      );
    }
    function ue(e) {
      var t = e == null ? void 0 : e.creative;
      if (
        e instanceof r("AdsAPIAdgroupRecord") &&
        r("AdsAdgroupRecordAccessors").creative.source_threads_media_id.get(
          e,
        ) != null
      )
        return !0;
      if (o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e))
        return (
          (t == null ? void 0 : t.object_story_spec) == null &&
          ((t == null ? void 0 : t.object_story_id) != null ||
            (t == null ? void 0 : t.source_instagram_media_id) != null ||
            (t == null ? void 0 : t.source_facebook_post_id) != null)
        );
      if (
        o("AdsAssetFeedUtils").isDofMessagingDestinationAdgroupFromSpec(e) ||
        o("AdsAssetFeedUtils").isUnifiedProfileVisitsDestinationAdgroupFromSpec(
          e,
        )
      ) {
        var n =
            (t == null ? void 0 : t.object_story_spec) == null &&
            ((t == null ? void 0 : t.object_id) != null ||
              (t == null ? void 0 : t.object_story_id) != null ||
              (t == null ? void 0 : t.source_instagram_media_id) != null ||
              (t == null ? void 0 : t.source_facebook_post_id) != null),
          a = (t == null ? void 0 : t.source_instagram_media_id) != null,
          i =
            (t == null ? void 0 : t.branded_content_boosting_type) ===
            "SPONSOR_BOOST";
        return n || a || i;
      }
      var l = f(e);
      switch (l) {
        case r("ApiAdObjectTypes").DOMAIN:
        case r("ApiAdObjectTypes").PAGE:
          return !1;
      }
      if (
        (t == null ? void 0 : t.call_to_action_type) === "INSTAGRAM_MESSAGE"
      ) {
        var s;
        if (
          (t == null || (s = t.object_story_spec) == null
            ? void 0
            : s.instagram_actor_id) != null
        )
          return !1;
        if (o("AdsChildAttachmentsUtils").isCarouselAd(e)) {
          var u;
          return (
            (t == null ||
            (u = t.object_story_spec) == null ||
            (u = u.link_data) == null
              ? void 0
              : u.multi_share_end_card) == null
          );
        } else return !0;
      }
      if (o("AdsAssetFeedUtils").isMCAAdgroupFromRecord(e)) return !0;
      var c = r("adsConvertAdObjectRecordToPlainJS")(e);
      return !(
        (t != null && t.object_story_spec) ||
        (t != null &&
          t.asset_feed_spec &&
          !o("AdsAssetFeedUtils").isAdgroupUsingOnlyPrivateMessageFromRecord(
            c,
          ) &&
          !o(
            "AdsAssetFeedUtils",
          ).isAdgroupUsingOnlySupportedOnsiteDestinationsSpecs(c) &&
          !o("AdsAssetFeedUtils").isTextOnlyDofAdgroupFromSpec(c) &&
          !o(
            "AdsUEditorAdgroupStaticAdsWithAssetFeedSpecUtils",
          ).isAdgroupUsingAssetFeedForStaticAdsFromRecord(c) &&
          !o(
            "AdsUEditorAdgroupAudiosAdsMutators",
          ).isAdgroupUsingOnlyAudiosAssetFeedFromRecord(c) &&
          !o(
            "AdsUEditorPartnerAppWelcomeMessageFlowUtils",
          ).isAdgroupUsingPartnerAppFlowsInAssetFeedFromRecord(c))
      );
    }
    function ce(e) {
      var t,
        n,
        o,
        a,
        i,
        l,
        s,
        u,
        c =
          (e == null || (t = e.creative) == null
            ? void 0
            : t.object_story_id) != null &&
          (e == null || (n = e.creative) == null ? void 0 : n.media_type) ===
            "EXISTING_POST" &&
          ((e == null || (o = e.creative) == null ? void 0 : o.object_type) ===
            r("ApiAdObjectTypes").PHOTO ||
            (e == null || (a = e.creative) == null ? void 0 : a.object_type) ===
              r("ApiAdObjectTypes").VIDEO),
        d =
          (e == null || (i = e.creative) == null
            ? void 0
            : i.source_instagram_media_id) != null &&
          (e == null || (l = e.creative) == null ? void 0 : l.media_type) ===
            "EXISTING_INSTAGRAM_POST" &&
          ((e == null || (s = e.creative) == null ? void 0 : s.object_type) ===
            r("ApiAdObjectTypes").PHOTO ||
            (e == null || (u = e.creative) == null ? void 0 : u.object_type) ===
              r("ApiAdObjectTypes").VIDEO);
      return c || d;
    }
    function de(e) {
      var t;
      return (t = e.creative) == null ? void 0 : t.mockup_id;
    }
    function me(e) {
      return de(e) != null;
    }
    function pe(e, t) {
      return be(e)
        ? r("AdsEditorPostEditMode").USE_SCHEDULED_LIVE_VIDEO
        : ve(e)
          ? r("AdsEditorPostEditMode").USE_INSTAGRAM_LIVE_VIDEO
          : ue(e)
            ? r("AdsEditorPostEditMode").EXISTING
            : me(e)
              ? r("AdsEditorPostEditMode").USE_MOCKUP
              : r("AdsEditorPostEditMode").INLINE;
    }
    function _e(e, t) {
      var n = r("AdsAdgroupSemanticFields").callToActionValue.get(t, e);
      return n ? n.get("lead_gen_form_id") : null;
    }
    function fe(e, t) {
      var n = r("AdsAdgroupSemanticFields").linkURL.get(t, e);
      if (n == null) return null;
      var a = o("AdsAssetFeedUtils").isAdgroupUsingNonDofAssetFeedSpec(e)
        ? o("AdsAssetFeedFieldUtils").getAssetAtIndex(n, "website_url", 0)
        : n;
      return o("AdsCanvasAdUtils").getCanvasID(typeof a == "string" ? a : null);
    }
    function ge(e, t) {
      var n = r("AdsAdgroupSemanticFields").callToActionValue.get(t, e);
      return n ? n.get("app_link") : null;
    }
    function he(e, t) {
      return r("AdsAdgroupSemanticFields").offerID.get(t, e);
    }
    function ye(e) {
      var t;
      return (t = e.creative) == null ||
        (t = t.object_story_spec) == null ||
        (t = t.link_data) == null
        ? void 0
        : t.link;
    }
    function Ce(e) {
      var t;
      return (
        ((t = e.creative) == null || (t = t.degrees_of_freedom_spec) == null
          ? void 0
          : t.ad_handle_type) === "DYNAMIC"
      );
    }
    function be(e) {
      var t;
      return (
        ((t = e.creative) == null ? void 0 : t.media_type) ===
        "SCHEDULED_LIVE_VIDEO"
      );
    }
    function ve(e) {
      var t;
      return (
        ((t = e.creative) == null ? void 0 : t.media_type) ===
        "INSTAGRAM_LIVE_VIDEO"
      );
    }
    function Se(e) {
      var t;
      return (t = e.creative) == null || (t = t.object_story_spec) == null
        ? void 0
        : t.threads_user_id;
    }
    function Re(e, t) {
      var n = b(e, t),
        o = r(
          "AdsAdgroupRecordAccessors",
        ).creative.facebook_branded_content.sponsor_page_id.get(e);
      return { primaryPageID: n, secondaryPageID: o };
    }
    function Le(e, t) {
      var n = b(e, t),
        o = r(
          "AdsAdgroupRecordAccessors",
        ).creative.facebook_branded_content.sponsor_page_id.get(e),
        a = r(
          "AdsAdgroupRecordAccessors",
        ).creative.branded_content_boosting_type.get(e),
        i = null;
      return (
        a === "SPONSOR_BOOST" || a === "SPONSOR_INLINE"
          ? (i = n)
          : (a === "CREATOR_BOOST" || a === "CREATOR_INLINE") && (i = o),
        { primaryPageID: n, secondaryPageID: o, promodePartnerPageID: i }
      );
    }
    function Ee(e) {
      var t;
      return (
        ue(e) &&
        ((t = e.creative) == null ||
        (t = t.omnichannel_link_spec) == null ||
        (t = t.app) == null
          ? void 0
          : t.application_id) != null
      );
    }
    function ke(e) {
      return ue(e) && Q(e);
    }
    function Ie(e) {
      var t;
      return (
        ue(e) && ((t = e.creative) == null ? void 0 : t.object_story_id) != null
      );
    }
    function Te(e) {
      var t,
        n,
        r = (t = e.creative) == null ? void 0 : t.source_instagram_media_id,
        a = (n = e.creative) == null ? void 0 : n.object_id;
      return o("AdsWhatsAppUtils").getPagePostIdforInstagramPost(a, r);
    }
    ((l.getID = e),
      (l.getParentIDs = s),
      (l.getPhoneDataID = u),
      (l.getDisplayURL = c),
      (l.getAppDestinationType = d),
      (l.getAdditionalImageIndex = m),
      (l.getImageData = p),
      (l.getSingleMediaType = _),
      (l.getObjectType = f),
      (l.getAssetFeedSpecDestinationObjectType = g),
      (l.getPageID = h),
      (l.getPageID_Inner = y),
      (l.getExistingPostAdPageID = C),
      (l.getPrimaryPageIDInSpec = b),
      (l.getBrandedContentPrimaryPageID = v),
      (l.getSponsorBoostSponsorPageID = L),
      (l.getDirectInstall = E),
      (l.getObjectID = k),
      (l.getInstagramStoryID = I),
      (l.getInstagramSourceMediaID = T),
      (l.getFacebookSourceMediaID = D),
      (l.getInstagramCallToActionType = x),
      (l.getFacebookCallToActionType = $),
      (l.getInstagramCallToActionLink = P),
      (l.getAssetFeedSpecCallToActionType = M),
      (l.getAssetFeedSpecCallToActionLink = w),
      (l.getPagePostID = A),
      (l.getSourceID = F),
      (l.getMediaType = O),
      (l.isDuplicatedAdgroup = B),
      (l.getCollectionThumbnails = W),
      (l.getRetailerItemIds = q),
      (l.getCallToActionType = U),
      (l.getCallToActionLink = V),
      (l.hasWebsiteLink = H),
      (l.isWebsiteURLHidden = G),
      (l.isMessengerDestinationAd = z),
      (l.isInstagramDirectAppDestinationAd = j),
      (l.isWebToIGDAd = K),
      (l.isInstagramMedia = Q),
      (l.isFlexibleFormatAd = X),
      (l.isFlexibleFormatAdOrCreativeAssetGroup = Y),
      (l.isCreativeAssetGroupingsAd = J),
      (l.isCollectionsAdFromRelay = te),
      (l.isCollectionsAd = ne),
      (l.getLinkPostFormat = re),
      (l.getMessageSetupSource = oe),
      (l.isTemplateCreative = ae),
      (l.isExistingPostMultiPhotoAd = ie),
      (l.isExistingInstagramCarouselPostAd = le),
      (l.isExistingPostMultiPhotoAdsOrPublishedStatus = se),
      (l.isExistingPostAd = ue),
      (l.isExistingPostAdSingleImageOrVideo = ce),
      (l.isUseMockupAd = me),
      (l.getPostEditMode = pe),
      (l.getLeadGenFormID = _e),
      (l.getCanvasID = fe),
      (l.getAppLink = ge),
      (l.getOfferID = he),
      (l.getPromotedUrl = ye),
      (l.isDynamicHandleAd = Ce),
      (l.isScheduledLiveVideoAd = be),
      (l.getThreadsUserID = Se),
      (l.getBrandedContentPageIDs = Re),
      (l.getPromodeBrandedContentPageIDs = Le),
      (l.isWebAndAppExistingPostAd = Ee),
      (l.isExistingPostWithInstagramMedia = ke),
      (l.isExistingPostWithFacebookPost = Ie),
      (l.getInstagramPagePostID = Te));
  },
  98,
);
