__d(
  "LWICometUnifiedCreationEligibilityChecker",
  ["fbt", "LWICometACOUtils", "mapObjectToArray"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["NO_BUTTON", "LIKE_PAGE", "VISIT_PROFILE", "JOIN_GROUP"];
    function u(t) {
      return t != null && !e.includes(t);
    }
    function c(e) {
      var t = e.ctaType,
        n = e.hasAssetFeedSpec,
        r = e.hasDegreesOfFreedomSpec,
        o = e.hasExistingPostTitle,
        a = e.objectStoryID,
        i = e.objectStorySpecExists;
      return a != null && o && !i && !n && !r && u(t);
    }
    function d(e) {
      var t = e.ctaType,
        n = e.enableDCO,
        r = e.hasAssetFeedSpec,
        o = e.hasCreativeAssetGroupsSpec,
        a = e.hasDegreesOfFreedomSpec,
        i = e.hasMultipleAdgroups,
        l = e.hasPageID,
        s = e.hasStoredExistingPostTitle,
        c = e.isCTMCreative,
        d = e.isExistingPostTitleSpecTransportEnabled,
        m = e.objectStoryID,
        p = e.objectStorySpecExists,
        _ = e.useAFS,
        f = l || s || r;
      if (m == null) return null;
      if (d) {
        if (!f || i || o || !u(t)) return null;
        var g = _ && a && !n && !c && !p;
        return n || r || a || c
          ? r || g
            ? "ASSET_FEED_SPEC"
            : null
          : p
            ? null
            : "TITLE_SPEC";
      }
      return null;
    }
    function m(e) {
      return (
        (e == null ? void 0 : e.optimization_type) ===
        "DOF_MESSAGING_DESTINATION"
      );
    }
    function p(e, t) {
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
    function _(e, t) {
      return t === "WHATSAPP_MESSAGE" || p("WHATSAPP_MESSAGE", e);
    }
    function f(e, t) {
      return t === "INSTAGRAM_MESSAGE" || p("INSTAGRAM_MESSAGE", e);
    }
    function g(e, t) {
      return t === "MESSAGE_PAGE" || p("MESSAGE_PAGE", e);
    }
    function h(e, t) {
      var n = _(t, e);
      if (!n) return null;
      var r = g(t, e),
        o = f(t, e);
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
    function y(e, t) {
      return (
        t === "MESSAGE_PAGE" && (e == null ? void 0 : e.call_to_actions) == null
      );
    }
    function C(e, t, n) {
      return t && n && e;
    }
    function b(e) {
      return (
        e === o("LWICometACOUtils").LWI_ACO_FLAG_V1 ||
        e === o("LWICometACOUtils").LWI_ACO_FLAG_V2
      );
    }
    function v(e, t) {
      return (
        t === "INSTAGRAM_MESSAGE" &&
        (e == null ? void 0 : e.call_to_actions) == null
      );
    }
    function S(e, t) {
      return (
        (e == null ? void 0 : e.call_to_actions) == null && t === "WHATSAPP"
      );
    }
    function R(e, t) {
      var n;
      return (
        y(e, t == null ? void 0 : t.type) ||
        v(e, t == null ? void 0 : t.type) ||
        S(e, t == null || (n = t.value) == null ? void 0 : n.app_destination)
      );
    }
    function L() {
      return !1;
    }
    ((l.isBPExistingPostHeadlineCTAEligible = u),
      (l.isBPExistingPostTitleSpecCreative = c),
      (l.getBPExistingPostHeadlineTransport = d),
      (l.isClickToMessageAd = m),
      (l.assetFeedSpecHasMessagingAppDestination = p),
      (l.isWhatsAppSelected = _),
      (l.isInstagramSelected = f),
      (l.isMessengerSelected = g),
      (l.getTokenDisclaimer = h),
      (l.isSingleDestMessenger = y),
      (l.shouldEnableAIIcebreakers = C),
      (l.isACOEnabled = b),
      (l.isSingleDestInstagram = v),
      (l.isSingleDestWhatsappDestination = S),
      (l.isSingleDestination = R),
      (l.enableUnifiedCreationWithInstagramAccountEdit = L));
  },
  226,
);
