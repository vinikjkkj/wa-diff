__d(
  "AdsUEditorCTXFlexibleFormatUtils",
  [
    "AdsFormatEligibilityConstants",
    "AdsMessengerConstants",
    "AdsPromotedObjectTypes",
    "AdsUEditorInstagramUtils",
    "AdsWhatsAppUtils",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case r("AdsPromotedObjectTypes").WHATSAPP:
          return o("AdsWhatsAppUtils").getDefaultCTALink();
        case r("AdsPromotedObjectTypes").INSTAGRAM:
          return o("AdsUEditorInstagramUtils").DEFAULT_INSTAGRAM_LINK;
        case r("AdsPromotedObjectTypes").MESSENGER:
          return o("AdsMessengerConstants").EMPTY_MESSENGER_LINK;
        default:
          return "";
      }
    }
    function s(e) {
      return e === "MESSENGER" || e === "INSTAGRAM_DIRECT" || e === "WHATSAPP";
    }
    function u(e) {
      return e === "MESSENGER"
        ? o("AdsMessengerConstants").EMPTY_MESSENGER_LINK
        : e === "INSTAGRAM_DIRECT"
          ? o("AdsUEditorInstagramUtils").DEFAULT_INSTAGRAM_LINK
          : e === "WHATSAPP"
            ? o("AdsWhatsAppUtils").getDefaultCTALink()
            : "";
    }
    function c(e) {
      if (
        o(
          "AdsFormatEligibilityConstants",
        ).CONVERSION_LOCATIONS_WITH_FLEXIBLE_FORMAT_IN_TRAFFIC.includes(e)
      ) {
        var t;
        return (t = r("qex")._("2922")) != null ? t : !1;
      }
      if (e === r("AdsPromotedObjectTypes").WEBSITE) {
        var n;
        return (n = r("qex")._("2034")) != null ? n : !1;
      }
      return !1;
    }
    ((l.getDefaultLinkForPromotedObjectType = e),
      (l.isClickToMessageAppDestination = s),
      (l.getClicktoMessageDefaultLink = u),
      (l.isFlexibleFormatEnabledForPromotedObjectType = c));
  },
  98,
);
