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
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.actionTarget,
            r = t.chat,
            a = t.extraAttributes,
            i = a === void 0 ? {} : a,
            l = t.paymentActionType,
            s = t.pixData,
            u = t.previousScreenName,
            c = t.referral,
            d = t.screen,
            m = yield o(
              "WAWebSyncdMdSyncFieldstatMeta",
            ).MdSyncFieldStatsMeta.getMdSessionId();
          ((i.payment_method = "pix"),
            r &&
              (i.chat_type = Object.keys(
                o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE,
              )[
                o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(
                  r.id,
                )
              ].toLowerCase()),
            s && (i.key_type = String(s.key_type)));
          var p = {
              actionTarget: n,
              paymentActionType: l,
              paymentsCountryCode: e,
              previousScreenName: u,
              queryParams: JSON.stringify(i),
              referral: c,
              screen: d,
              paymentsEventId: m,
            },
            _ = new (o(
              "WAWebPaymentsUserActionWamEvent",
            ).PaymentsUserActionWamEvent)(p);
          _.commit();
        })),
        u.apply(this, arguments)
      );
    }
    l.logPixSenderEvent = s;
  },
  98,
);
