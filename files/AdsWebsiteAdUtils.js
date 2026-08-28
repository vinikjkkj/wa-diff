__d(
  "AdsWebsiteAdUtils",
  [
    "AdsAPIObjectives",
    "AdsChildAttachmentsUtils",
    "AdsCollectionsAdUtils",
    "AdsLinkPostFormat",
    "AdsPromotedObjectAppUtils",
    "AdsPromotedObjectTypes",
    "ApiAdObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return m(e, t) || u(e, t);
    }
    function s(e, t) {
      return _(e, t) || c(e, t);
    }
    function u(e, t) {
      return (
        e === r("AdsAPIObjectives").CONVERSIONS &&
        (t == null ||
          t === r("AdsPromotedObjectTypes").PIXEL ||
          t === r("AdsPromotedObjectTypes").WEBSITE_AND_PHONE_CALL ||
          t === r("AdsPromotedObjectTypes").WEBSITE_AND_INSTANT_FORM)
      );
    }
    function c(e, t) {
      return (
        e === r("AdsAPIObjectives").CONVERSIONS &&
        t === r("AdsPromotedObjectTypes").MOBILE_APP
      );
    }
    function d(e, t) {
      return (
        e === r("AdsAPIObjectives").CONVERSIONS &&
        t === r("AdsPromotedObjectTypes").OFFLINE_EVENT_SET
      );
    }
    function m(e, t) {
      return (
        e === r("AdsAPIObjectives").LINK_CLICKS &&
        !o("AdsPromotedObjectAppUtils").isAppType(t) &&
        t !== r("AdsPromotedObjectTypes").PRODUCT_SET &&
        t !== r("AdsPromotedObjectTypes").MESSENGER &&
        t !== r("AdsPromotedObjectTypes").WHATSAPP &&
        t !== r("AdsPromotedObjectTypes").INSTAGRAM &&
        t !== r("AdsPromotedObjectTypes").PHONE_CALL
      );
    }
    function p(e, t) {
      return (
        t === r("AdsPromotedObjectTypes").MESSENGER &&
        (e === r("AdsAPIObjectives").LINK_CLICKS ||
          e === r("AdsAPIObjectives").CONVERSIONS)
      );
    }
    function _(e, t) {
      return (
        e === r("AdsAPIObjectives").LINK_CLICKS &&
        t === r("AdsPromotedObjectTypes").MOBILE_APP
      );
    }
    function f(e, t) {
      return (
        e === r("AdsAPIObjectives").CONVERSIONS &&
        t === r("AdsPromotedObjectTypes").WEBSITE_AND_IN_STORE
      );
    }
    function g(e, t) {
      return (
        e === r("AdsAPIObjectives").CONVERSIONS &&
        t === r("AdsPromotedObjectTypes").WEBSITE_APP_AND_IN_STORE
      );
    }
    function h(e, t) {
      return (
        e === r("AdsAPIObjectives").CONVERSIONS &&
        t === r("AdsPromotedObjectTypes").IN_STORE
      );
    }
    function y(t, n) {
      var o,
        a = t == null || (o = t.creative) == null ? void 0 : o.object_type;
      return e(n) && a === r("ApiAdObjectTypes").VIDEO;
    }
    function C(e) {
      var t,
        n,
        r =
          e == null ||
          (t = e.creative) == null ||
          (t = t.object_story_spec) == null ||
          (t = t.link_data) == null
            ? void 0
            : t.child_attachments;
      if (r) return r.length;
      var a =
        e == null ||
        (n = e.creative) == null ||
        (n = n.object_story_spec) == null ||
        (n = n.template_data) == null
          ? void 0
          : n.child_attachments;
      return a &&
        o(
          "AdsChildAttachmentsUtils",
        ).isStaticAndDynamicCarouselChildAttachments(a)
        ? a.length
        : 0;
    }
    function b(e) {
      var t,
        n,
        r =
          e == null ||
          (t = e.creative) == null ||
          (t = t.object_story_spec) == null ||
          (t = t.link_data) == null
            ? void 0
            : t.multi_share_end_card;
      if (r != null) return r;
      var o =
        e == null ||
        (n = e.creative) == null ||
        (n = n.object_story_spec) == null ||
        (n = n.template_data) == null
          ? void 0
          : n.multi_share_end_card;
      return o != null ? o : !1;
    }
    function v(e) {
      var t,
        n =
          (t = e.creative) == null ||
          (t = t.object_story_spec) == null ||
          (t = t.link_data) == null
            ? void 0
            : t.child_attachments;
      if (!n) return 0;
      var r = 0;
      return (
        n.forEach(function (e) {
          e.video_id && r++;
        }),
        r
      );
    }
    function S(e) {
      var t;
      return o("AdsCollectionsAdUtils").isCollectionsAd(e.creative)
        ? r("AdsLinkPostFormat").COLLECTIONS
        : o("AdsChildAttachmentsUtils").isStaticCarouselAd(e)
          ? r("AdsLinkPostFormat").MULTIPLE
          : (t = e.creative) != null &&
              (t = t.object_story_spec) != null &&
              t.link_data
            ? r("AdsLinkPostFormat").SINGLE
            : null;
    }
    ((l.isWebsiteObjective = e),
      (l.isAppObjective = s),
      (l.isWebsiteConversionsObjective = u),
      (l.isWebsiteConversionsAppObjective = c),
      (l.isWebsiteConversionsOfflineObjective = d),
      (l.isWebsiteClickObjective = m),
      (l.isWebsiteMessengerObjective = p),
      (l.isWebsiteClickAppObjective = _),
      (l.isWebsiteAndInStoreObjective = f),
      (l.isWebsiteAppAndInStoreObjective = g),
      (l.isInStoreObjective = h),
      (l.isWebsiteVideoAdgroup = y),
      (l.getMultiProductCount = C),
      (l.getMultiProductEndCard = b),
      (l.getMultiVideoProductCount = v),
      (l.getLinkPostFormat = S));
  },
  98,
);
