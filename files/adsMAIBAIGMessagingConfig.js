__d(
  "adsMAIBAIGMessagingConfig",
  [
    "PolarisBoostObjectiveScreenStrings",
    "PolarisBoostObjectiveUtils",
    "adsMAIBABuildCTAMenuItems",
    "adsMAIBAMessagingChannels",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === o("adsMAIBAMessagingChannels").INSTAGRAM_DIRECT
        ? "INSTAGRAM_MESSAGE"
        : e === o("adsMAIBAMessagingChannels").WHATSAPP
          ? "WHATSAPP_MESSAGE"
          : null;
    }
    function s(e) {
      return d(e)
        ? o("PolarisBoostObjectiveUtils").getMessagingCTAs(
            e === o("adsMAIBAMessagingChannels").WHATSAPP
              ? o("PolarisBoostObjectiveUtils").WHATSAPP_MESSAGE
              : o("PolarisBoostObjectiveUtils").DIRECT_MESSAGE,
          )
        : [];
    }
    function u(e) {
      var t;
      return e === "INSTAGRAM_MESSAGE"
        ? o(
            "PolarisBoostObjectiveScreenStrings",
          ).OBJECTIVE_SCREEN_CTA_SEND_MESSAGE.toString()
        : e === "WHATSAPP_MESSAGE"
          ? o(
              "PolarisBoostObjectiveScreenStrings",
            ).OBJECTIVE_SCREEN_CTA_CHAT_ON_WHATSAPP.toString()
          : e === "CONTACT_US"
            ? o(
                "PolarisBoostObjectiveScreenStrings",
              ).OBJECTIVE_SCREEN_CTA_CONTACT_US.toString()
            : e === "LEARN_MORE"
              ? o(
                  "PolarisBoostObjectiveScreenStrings",
                ).OBJECTIVE_SCREEN_CTA_LEARN_MORE.toString()
              : e === "SEE_DETAILS"
                ? o(
                    "PolarisBoostObjectiveScreenStrings",
                  ).OBJECTIVE_SCREEN_CTA_SEE_DETAILS.toString()
                : e === "BOOK_NOW"
                  ? o(
                      "PolarisBoostObjectiveScreenStrings",
                    ).OBJECTIVE_SCREEN_CTA_BOOK_NOW.toString()
                  : e === "CHECK_AVAILABILITY"
                    ? o(
                        "PolarisBoostObjectiveScreenStrings",
                      ).OBJECTIVE_SCREEN_CTA_CHECK_AVAILABILITY.toString()
                    : e === "ORDER_NOW"
                      ? o(
                          "PolarisBoostObjectiveScreenStrings",
                        ).OBJECTIVE_SCREEN_CTA_ORDER_NOW.toString()
                      : String(
                          (t = o(
                            "adsMAIBABuildCTAMenuItems",
                          ).adsMAIBAFormatCTALabel(e)) != null
                            ? t
                            : e,
                        );
    }
    function c(e, t) {
      return (
        d(e) &&
        t != null &&
        s(e).some(function (e) {
          return e === t;
        })
      );
    }
    function d(e) {
      return (
        e === o("adsMAIBAMessagingChannels").INSTAGRAM_DIRECT ||
        e === o("adsMAIBAMessagingChannels").WHATSAPP
      );
    }
    function m(e) {
      var t = o("adsMAIBAMessagingChannels").decodeMessagingChannels(e);
      return t.length === 1 && d(t[0]) ? t[0] : null;
    }
    function p(e, t, n) {
      var r,
        a,
        i = ((r = t == null ? void 0 : t.trim()) != null ? r : "") !== "",
        l = ((a = n == null ? void 0 : n.trim()) != null ? a : "") !== "",
        s = m(e),
        u =
          (s === o("adsMAIBAMessagingChannels").INSTAGRAM_DIRECT && i) ||
          (s === o("adsMAIBAMessagingChannels").WHATSAPP && l);
      return {
        hasInstagram: i,
        hasWhatsApp: l,
        selectedDestination: u ? s : null,
      };
    }
    ((l.getDefaultIGMessagingCallToAction = e),
      (l.getIGMessagingCallToActions = s),
      (l.getIGMessagingCallToActionLabel = u),
      (l.isIGMessagingCallToAction = c),
      (l.isIGMessagingDestination = d),
      (l.getIGMessagingDestination = m),
      (l.getIGMessagingConnections = p));
  },
  98,
);
