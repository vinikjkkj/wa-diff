__d(
  "WAWebPixWamLogger",
  [
    "WALogger",
    "WAWebGetMessageChatTypeFromWid",
    "WAWebPaymentsUserActionWamEvent",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebWamEnumMessageChatType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "BR";
    async function u(e) {
      var t = e.actionTarget,
        n = e.chat,
        r = e.extraAttributes,
        a = r === void 0 ? {} : r,
        i = e.paymentActionType,
        l = e.paymentsErrorCode,
        u = e.pixData,
        c = e.previousScreenName,
        m = e.referral,
        p = e.screen,
        _ = await o(
          "WAWebSyncdMdSyncFieldstatMeta",
        ).MdSyncFieldStatsMeta.getMdSessionId();
      ((a.payment_method = "pix"),
        n &&
          (a.chat_type = Object.keys(
            o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE,
          )[
            o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(n.id)
          ].toLowerCase()),
        u && (a.key_type = String(u.key_type)));
      var f = {
        actionTarget: t,
        paymentActionType: i,
        paymentsCountryCode: s,
        paymentsErrorCode: l,
        previousScreenName: c,
        queryParams: JSON.stringify(a),
        referral: m,
        screen: p,
        paymentsEventId: _,
      };
      d(f);
    }
    async function c(e) {
      var t = e.actionTarget,
        n = e.eventTsMs,
        r = e.paymentActionType,
        a = e.previousScreenName,
        i = e.queryParams,
        l = e.referral,
        u = e.screen;
      d({
        actionTarget: t,
        eventTsMs: n,
        paymentActionType: r,
        paymentsCountryCode: s,
        paymentsEventId: await o(
          "WAWebSyncdMdSyncFieldstatMeta",
        ).MdSyncFieldStatsMeta.getMdSessionId(),
        previousScreenName: a,
        queryParams: i != null ? JSON.stringify(i) : void 0,
        referral: l,
        screen: u,
      });
    }
    function d(t) {
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
    ((l.logPixSenderEvent = u), (l.logPixSessionEvent = c));
  },
  98,
);
