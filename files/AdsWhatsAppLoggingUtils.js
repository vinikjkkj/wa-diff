__d(
  "AdsWhatsAppLoggingUtils",
  [
    "AdsInterfacesLogger",
    "AdsWhatsAppConstants",
    "ApiClient",
    "ClickToMessengerGrowthTypedLogger",
    "ClickToWhatsAppAdsUnifiedEventsTypedLogger",
    "QE2Logger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o, a, i, l) {
      var s = r("ApiClient").getClientID();
      new (r("ClickToWhatsAppAdsUnifiedEventsTypedLogger"))()
        .setAdAccountID(l)
        .setEvent(i)
        .setObjective(null)
        .setPageID(e)
        .setPostID(null)
        .setSourceAppID(s)
        .setVerificationCode(a)
        .setWhatsappCountryCode(t)
        .setWhatsappNumber(o)
        .setWhatsappNumberType(null)
        .setWhatsappPhoneNumber(n)
        .log();
    }
    var s = function () {
        o("QE2Logger").logExposureForUser(
          o("AdsWhatsAppConstants").CTWA_INTENT_TARGETING_UNIVERSE,
        );
      },
      u = function (t) {
        r("AdsInterfacesLogger").log(
          { eventName: t },
          r("AdsInterfacesLogger").LOG_TYPE_SECONDARY_APP,
        );
      };
    function c(e, t, n, o) {
      (n === void 0 && (n = "am_existing_post_default_messages_objective"),
        o === void 0 && (o = ""),
        new (r("ClickToMessengerGrowthTypedLogger"))()
          .setEvent(n)
          .setObjective(t)
          .setAccountID(e == null ? void 0 : e.account_id)
          .addToExtraData("objective_str", t)
          .addToExtraData("pass_qe", o)
          .log());
    }
    ((l.logClickToWhatsAppAdsUnifiedEvent = e),
      (l.logWhatsAppExposuresWhenCTAIsClickedOnLWI = s),
      (l.logWhatsAppLWIUIEvent = u),
      (l.logCTXDefaultingEvent = c));
  },
  98,
);
