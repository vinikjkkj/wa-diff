__d(
  "PixWamLogger",
  [
    "PaymentConstants",
    "WAWebGetMessageChatTypeFromWid",
    "WAWebPaymentsUserActionWamEvent",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebWamEnumMessageChatType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, o, a, i, l) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i, l, s) {
            s === void 0 && (s = {});
            var u = yield o(
              "WAWebSyncdMdSyncFieldstatMeta",
            ).MdSyncFieldStatsMeta.getMdSessionId();
            ((s.payment_method = "pix"),
              i &&
                (s.chat_type = Object.keys(
                  o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE,
                )[
                  o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(
                    i.id,
                  )
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
          },
        )),
        s.apply(this, arguments)
      );
    }
    l.logPixSenderEvent = e;
  },
  98,
);
