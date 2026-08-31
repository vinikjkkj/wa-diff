__d(
  "LWICometUnifiedCreationEligibilityChecker",
  ["fbt", "LWICometACOUtils", "mapObjectToArray"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["NO_BUTTON", "LIKE_PAGE", "VISIT_PROFILE", "JOIN_GROUP"];
    function u(t) {
      var n = t.ctaType,
        r = t.hasAssetFeedSpec,
        o = t.hasDegreesOfFreedomSpec,
        a = t.hasExistingPostTitle,
        i = t.objectStoryID,
        l = t.objectStorySpecExists;
      return i != null && a && !l && !r && !o && n != null && !e.includes(n);
    }
    function c(t) {
      var n = t.ctaType,
        r = t.enableDCO,
        o = t.hasAssetFeedSpec,
        a = t.hasCreativeAssetGroupsSpec,
        i = t.hasDegreesOfFreedomSpec,
        l = t.hasMultipleAdgroups,
        s = t.hasPageID,
        u = t.hasStoredExistingPostTitle,
        c = t.isCTMCreative,
        d = t.isExistingPostTitleSpecTransportEnabled,
        m = t.objectStoryID,
        p = t.objectStorySpecExists,
        _ = t.useAFS,
        f = s || u || o;
      if (m == null) return null;
      if (d) {
        if (!f || l || a || n == null || e.includes(n)) return null;
        var g = _ && i && !r && !c && !p;
        return r || o || i || c
          ? o || g
            ? "ASSET_FEED_SPEC"
            : null
          : p
            ? null
            : "TITLE_SPEC";
      }
      return null;
    }
    function d(e) {
      return (
        (e == null ? void 0 : e.optimization_type) ===
        "DOF_MESSAGING_DESTINATION"
      );
    }
    function m(e, t) {
      var n = t == null ? void 0 : t.call_to_actions;
      return n == null
        ? !1
        : (Array.isArray(n) ||
            (n = r("mapObjectToArray")(n, function (e) {
              return e;
            })),
          n.some(function (t) {
            return t.type === e;
          }));
    }
    function p(e, t) {
      return t === "WHATSAPP_MESSAGE" || m("WHATSAPP_MESSAGE", e);
    }
    function _(e, t) {
      return t === "INSTAGRAM_MESSAGE" || m("INSTAGRAM_MESSAGE", e);
    }
    function f(e, t) {
      return t === "MESSAGE_PAGE" || m("MESSAGE_PAGE", e);
    }
    function g(e, t) {
      var n = p(t, e);
      if (!n) return null;
      var r = f(t, e),
        o = _(t, e);
      return r && o
        ? s._(
            /*BTDS*/ "Greeting names only appear in Messenger and Instagram. People that open ads that click to WhatsApp will see a greeting without their name.",
          )
        : r
          ? s._(
              /*BTDS*/ "Greeting names only appear in Messenger. People that open ads that click to WhatsApp will see a greeting without their name.",
            )
          : o
            ? s._(
                /*BTDS*/ "Greeting names only appear in Instagram. People that open ads that click to WhatsApp will see a greeting without their name.",
              )
            : null;
    }
    function h(e, t) {
      return (
        t === "MESSAGE_PAGE" && (e == null ? void 0 : e.call_to_actions) == null
      );
    }
    function y(e, t, n) {
      return t && n && e;
    }
    function C(e) {
      return (
        e === o("LWICometACOUtils").LWI_ACO_FLAG_V1 ||
        e === o("LWICometACOUtils").LWI_ACO_FLAG_V2
      );
    }
    function b(e, t) {
      return (
        t === "INSTAGRAM_MESSAGE" &&
        (e == null ? void 0 : e.call_to_actions) == null
      );
    }
    function v(e, t) {
      return (
        (e == null ? void 0 : e.call_to_actions) == null && t === "WHATSAPP"
      );
    }
    function S(e, t) {
      var n;
      return (
        h(e, t == null ? void 0 : t.type) ||
        b(e, t == null ? void 0 : t.type) ||
        v(e, t == null || (n = t.value) == null ? void 0 : n.app_destination)
      );
    }
    function R() {
      return !1;
    }
    ((l.isBPExistingPostTitleSpecCreative = u),
      (l.getBPExistingPostHeadlineTransport = c),
      (l.isClickToMessageAd = d),
      (l.assetFeedSpecHasMessagingAppDestination = m),
      (l.isWhatsAppSelected = p),
      (l.isInstagramSelected = _),
      (l.isMessengerSelected = f),
      (l.getTokenDisclaimer = g),
      (l.isSingleDestMessenger = h),
      (l.shouldEnableAIIcebreakers = y),
      (l.isACOEnabled = C),
      (l.isSingleDestInstagram = b),
      (l.isSingleDestWhatsappDestination = v),
      (l.isSingleDestination = S),
      (l.enableUnifiedCreationWithInstagramAccountEdit = R));
  },
  226,
);
