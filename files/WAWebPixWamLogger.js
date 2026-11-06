__d(
  "WAWebPixWamLogger",
  [
    "WALogger",
    "WAWebGetMessageChatTypeFromWid",
    "WAWebPaymentsUserActionWamEvent",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebWamEnumMessageChatType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "BR";
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.actionTarget,
            n = e.chat,
            r = e.extraAttributes,
            a = r === void 0 ? {} : r,
            i = e.paymentActionType,
            l = e.paymentsErrorCode,
            u = e.pixData,
            c = e.previousScreenName,
            d = e.referral,
            m = e.screen,
            _ = yield o(
              "WAWebSyncdMdSyncFieldstatMeta",
            ).MdSyncFieldStatsMeta.getMdSessionId();
          ((a.payment_method = "pix"),
            n &&
              (a.chat_type = Object.keys(
                o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE,
              )[
                o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(
                  n.id,
                )
              ].toLowerCase()),
            u && (a.key_type = String(u.key_type)));
          var f = {
            actionTarget: t,
            paymentActionType: i,
            paymentsCountryCode: s,
            paymentsErrorCode: l,
            previousScreenName: c,
            queryParams: JSON.stringify(a),
            referral: d,
            screen: m,
            paymentsEventId: _,
          };
          p(f);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.actionTarget,
            n = e.paymentActionType,
            r = e.previousScreenName,
            a = e.queryParams,
            i = e.referral,
            l = e.screen;
          p({
            actionTarget: t,
            paymentActionType: n,
            paymentsCountryCode: s,
            paymentsEventId: yield o(
              "WAWebSyncdMdSyncFieldstatMeta",
            ).MdSyncFieldStatsMeta.getMdSessionId(),
            previousScreenName: r,
            queryParams: a != null ? JSON.stringify(a) : void 0,
            referral: i,
            screen: l,
          });
        })),
        m.apply(this, arguments)
      );
    }
    function p(t) {
      var n = new (o(
        "WAWebPaymentsUserActionWamEvent",
      ).PaymentsUserActionWamEvent)(t);
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "ConsumerPaymentsHome Log",
          ])),
      ),
        n.commit());
    }
    ((l.logPixSenderEvent = u), (l.logPixSessionEvent = d));
  },
  98,
);
