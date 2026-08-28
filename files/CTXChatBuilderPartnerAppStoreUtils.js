__d(
  "CTXChatBuilderPartnerAppStoreUtils",
  ["AdsPageStore", "isStringNullOrEmpty"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = r("isStringNullOrEmpty")(e)
          ? null
          : r("AdsPageStore").getLoadObject(e).getValue();
      return (t =
        n == null ? void 0 : n.partner_app_and_welcome_message_flows_data) !=
        null
        ? t
        : [];
    }
    l.getPartnerAppWelcomeMessageData = e;
  },
  98,
);
