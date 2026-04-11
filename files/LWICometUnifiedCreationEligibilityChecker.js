__d(
  "LWICometUnifiedCreationEligibilityChecker",
  ["fbt", "LWICometACOUtils", "mapObjectToArray"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return (
        (e == null ? void 0 : e.optimization_type) ===
        "DOF_MESSAGING_DESTINATION"
      );
    }
    function u(e, t) {
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
    function c(e, t) {
      return t === "WHATSAPP_MESSAGE" || u("WHATSAPP_MESSAGE", e);
    }
    function d(e, t) {
      return t === "INSTAGRAM_MESSAGE" || u("INSTAGRAM_MESSAGE", e);
    }
    function m(e, t) {
      return t === "MESSAGE_PAGE" || u("MESSAGE_PAGE", e);
    }
    function p(e, t) {
      var n = c(t, e);
      if (!n) return null;
      var r = m(t, e),
        o = d(t, e);
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
    function _(e, t) {
      return (
        t === "MESSAGE_PAGE" && (e == null ? void 0 : e.call_to_actions) == null
      );
    }
    function f(e, t, n) {
      return t && n && e;
    }
    function g(e) {
      return (
        e === o("LWICometACOUtils").LWI_ACO_FLAG_V1 ||
        e === o("LWICometACOUtils").LWI_ACO_FLAG_V2
      );
    }
    function h(e, t) {
      return (
        t === "INSTAGRAM_MESSAGE" &&
        (e == null ? void 0 : e.call_to_actions) == null
      );
    }
    function y(e, t) {
      return (
        (e == null ? void 0 : e.call_to_actions) == null && t === "WHATSAPP"
      );
    }
    function C(e, t) {
      var n;
      return (
        _(e, t == null ? void 0 : t.type) ||
        h(e, t == null ? void 0 : t.type) ||
        y(e, t == null || (n = t.value) == null ? void 0 : n.app_destination)
      );
    }
    function b() {
      return !1;
    }
    ((l.isClickToMessageAd = e),
      (l.assetFeedSpecHasMessagingAppDestination = u),
      (l.isWhatsAppSelected = c),
      (l.isInstagramSelected = d),
      (l.isMessengerSelected = m),
      (l.getTokenDisclaimer = p),
      (l.isSingleDestMessenger = _),
      (l.shouldEnableAIIcebreakers = f),
      (l.isACOEnabled = g),
      (l.isSingleDestInstagram = h),
      (l.isSingleDestWhatsappDestination = y),
      (l.isSingleDestination = C),
      (l.enableUnifiedCreationWithInstagramAccountEdit = b));
  },
  226,
);
