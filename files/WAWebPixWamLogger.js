__d(
  "WAWebPixWamLogger",
  [
    "WAWebGetMessageChatTypeFromWid",
    "WAWebPaymentsUserActionWamEvent",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebWamEnumMessageChatType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "BR";
    function s(e, t, n, r, o, a, i, l) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a, i, l, s, u) {
            u === void 0 && (u = {});
            var c = yield o(
              "WAWebSyncdMdSyncFieldstatMeta",
            ).MdSyncFieldStatsMeta.getMdSessionId();
            ((u.payment_method = "pix"),
              l &&
                (u.chat_type = Object.keys(
                  o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE,
                )[
                  o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(
                    l.id,
                  )
                ].toLowerCase()),
              s && (u.key_type = String(s.key_type)));
            var d = {
                actionTarget: t,
                paymentActionType: n,
                paymentsCountryCode: e,
                previousScreenName: r,
                queryParams: JSON.stringify(u),
                referral: a,
                screen: i,
                paymentsEventId: c,
              },
              m = new (o(
                "WAWebPaymentsUserActionWamEvent",
              ).PaymentsUserActionWamEvent)(d);
            m.commit();
          },
        )),
        u.apply(this, arguments)
      );
    }
    l.logPixSenderEvent = s;
  },
  98,
);
