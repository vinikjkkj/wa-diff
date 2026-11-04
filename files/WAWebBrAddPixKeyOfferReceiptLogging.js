__d(
  "WAWebBrAddPixKeyOfferReceiptLogging",
  [
    "WAWebBrAddPixKeyMessageGating",
    "WAWebBrAddPixKeyMessageOffer",
    "WAWebBrAddPixKeyOfferLogger",
    "WAWebBrAddPixKeyPartnerDirectory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.msg,
        n = e.senders,
        r = s(t, n),
        a = r.catalogId,
        i = r.reason;
      i == null
        ? o("WAWebBrAddPixKeyOfferLogger").logAddPixKeyMessageOffered(
            "receipt",
            a,
          )
        : o("WAWebBrAddPixKeyOfferLogger").logAddPixKeyMessageDiscarded(
            i,
            "receipt",
            a,
          );
    }
    function s(e, t) {
      var n = o(
        "WAWebBrAddPixKeyPartnerDirectory",
      ).addPixKeyPartnerCatalogIdForSender(t);
      return o("WAWebBrAddPixKeyMessageGating").isAddPixKeyMessageEnabled()
        ? t.some(function (e) {
            return (e == null ? void 0 : e.isUser()) === !0;
          })
          ? o("WAWebBrAddPixKeyPartnerDirectory").isAddPixKeyPartnerSender(t)
            ? e == null ||
              o("WAWebBrAddPixKeyMessageOffer").getAddPixKeyMessageOfferFor({
                interactivePayload: e.interactivePayload,
                interactiveType: e.interactiveType,
                type: e.type,
              }) == null
              ? { catalogId: n, reason: "payload_unusable" }
              : { catalogId: n, reason: null }
            : { catalogId: null, reason: "sender_unclaimed" }
          : { catalogId: null, reason: "no_sender_jid" }
        : { catalogId: n, reason: "killswitch_off" };
    }
    l.logAddPixKeyOfferReceived = e;
  },
  98,
);
