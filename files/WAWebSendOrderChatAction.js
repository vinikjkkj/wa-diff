__d(
  "WAWebSendOrderChatAction",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebBizGatingUtils",
    "WAWebMsgKey",
    "WAWebNoop",
    "WAWebProtobufsE2E.pb",
    "WAWebSendMsgChatAction",
    "WAWebSendMsgResultAction",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t, n, r, o, a) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i, l, u) {
            var c = yield d(t, n, a, i, l, u);
            if (o("WAWebUserPrefsMeUser").isMeAccount(t.id))
              return o("WAWebSendMsgChatAction")
                .addAndSendMsgToChat(t, c)[0]
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
              var m = yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(
                t,
                c,
              )[1];
              if (
                !m ||
                m.messageSendResult !==
                  o("WAWebSendMsgResultAction").SendMsgResult.OK
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
          },
        )),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n, r, o, a) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l) {
            var s = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              u = t.price.total,
              c = {
                type: "order",
                ack: o("WAWebAck").ACK.CLOCK,
                from: s,
                id: new (r("WAWebMsgKey"))({
                  from: s,
                  to: e.id,
                  id: yield r("WAWebMsgKey").newId(),
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
                status: o("WAWebProtobufsE2E.pb")
                  .Message$OrderMessage$OrderStatus.INQUIRY,
                messageVersion: o(
                  "WAWebBizGatingUtils",
                ).isBuyerOrderRevampEnabled()
                  ? 2
                  : 1,
                thumbnail: a,
                itemCount: n,
                message: i,
                totalAmount1000:
                  u != null && u.length > 0 ? parseInt(u, 10) : void 0,
                totalCurrencyCode:
                  t.price.currency != null && t.price.currency.length > 0
                    ? t.price.currency
                    : void 0,
                catalogType: l || void 0,
              };
            return c;
          },
        )),
        m.apply(this, arguments)
      );
    }
    l.default = u;
  },
  98,
);
