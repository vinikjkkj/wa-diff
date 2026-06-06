__d(
  "WAWebSendOrderChatAction",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebMsgKey",
    "WAWebNoop",
    "WAWebOrderGatingUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebSendMsgChatAction",
    "WAWebSendMsgResultAction",
    "WAWebUserPrefsMeUser",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t, n, a, i, l, u) {
      var d = await c(t, n, a, i, l, u);
      if (o("WAWebUserPrefsMeUser").isMeAccount(t.id))
        return o("WAWebSendMsgChatAction")
          .addAndSendMsgToChat(t, d)[0]
          .then(r("WAWebNoop"))
          .catch(function (t) {
            throw (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Order message send to chat failure: ",
                    "",
                  ])),
                t,
              ),
              t
            );
          });
      try {
        var m = await o("WAWebSendMsgChatAction").addAndSendMsgToChat(t, d)[1];
        if (
          !m ||
          m.messageSendResult !== o("WAWebSendMsgResultAction").SendMsgResult.OK
        )
          throw r("err")("Order message SendMsgResult failure status");
      } catch (e) {
        throw (
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Order message send to chat failure: ",
                "",
              ])),
            e,
          ),
          e
        );
      }
    }
    async function c(e, t, n, a, i, l) {
      var s = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        u = t.price.total,
        c = {
          type: "order",
          ack: o("WAWebAck").ACK.CLOCK,
          from: s,
          id: new (r("WAWebMsgKey"))({
            from: s,
            to: e.id,
            id: await r("WAWebMsgKey").newId(),
            participant: void 0,
            selfDir: "out",
          }),
          local: !0,
          isNewMsg: !0,
          t: o("WATimeUtils").unixTime(),
          to: e.id,
          orderId: t.id,
          token: t.token,
          orderTitle: e.name || e.formattedTitle,
          sellerJid: e.id.toString({ legacy: !0 }),
          status: o("WAWebProtobufsE2E.pb").Message$OrderMessage$OrderStatus
            .INQUIRY,
          messageVersion: o("WAWebOrderGatingUtils").isBuyerOrderRevampEnabled()
            ? 2
            : 1,
          thumbnail: a,
          itemCount: n,
          message: i,
          totalAmount1000: u != null && u.length > 0 ? parseInt(u, 10) : void 0,
          totalCurrencyCode:
            t.price.currency != null && t.price.currency.length > 0
              ? t.price.currency
              : void 0,
          catalogType: l || void 0,
        };
      return c;
    }
    l.default = u;
  },
  98,
);
