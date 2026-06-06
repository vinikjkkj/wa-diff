__d(
  "PixWamLogger",
  [
    "PaymentConstants",
    "WAWebGetMessageChatTypeFromWid",
    "WAWebPaymentsUserActionWamEvent",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebWamEnumMessageChatType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t, n, r, a, i, l, s) {
      s === void 0 && (s = {});
      var u = await o(
        "WAWebSyncdMdSyncFieldstatMeta",
      ).MdSyncFieldStatsMeta.getMdSessionId();
      ((s.payment_method = "pix"),
        i &&
          (s.chat_type = Object.keys(
            o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE,
          )[
            o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(i.id)
          ].toLowerCase()),
        l && (s.key_type = String(l.key_type)));
      var c = {
          actionTarget: e,
          paymentActionType: t,
          paymentsCountryCode: o("PaymentConstants").BR_COUNTRY_CODE,
          previousScreenName: n,
          queryParams: JSON.stringify(s),
          referral: r,
          screen: a,
          paymentsEventId: u,
        },
        d = new (o(
          "WAWebPaymentsUserActionWamEvent",
        ).PaymentsUserActionWamEvent)(c);
      d.commit();
    }
    l.logPixSenderEvent = e;
  },
  98,
);
