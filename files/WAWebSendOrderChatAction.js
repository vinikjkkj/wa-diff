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
            var c = yield d({
              catalogType: u,
              chat: t,
              itemCount: a,
              message: l,
              order: n,
              thumbnail: i,
            });
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
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.catalogType,
            n = e.chat,
            a = e.itemCount,
            i = e.message,
            l = e.order,
            s = e.thumbnail,
            u = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            c = l.price.total,
            d = {
              type: "order",
              ack: o("WAWebAck").ACK.CLOCK,
              from: u,
              id: new (r("WAWebMsgKey"))({
                from: u,
                to: n.id,
                id: yield r("WAWebMsgKey").newId(),
                participant: void 0,
                selfDir: "out",
              }),
              local: !0,
              isNewMsg: !0,
              t: o("WATimeUtils").unixTime(),
              to: n.id,
              orderId: l.id,
              token: l.token,
              orderTitle: n.name || n.formattedTitle,
              sellerJid: n.id.toString({ legacy: !0 }),
              status: o("WAWebProtobufsE2E.pb").Message$OrderMessage$OrderStatus
                .INQUIRY,
              messageVersion: o(
                "WAWebOrderGatingUtils",
              ).isBuyerOrderRevampEnabled()
                ? 2
                : 1,
              thumbnail: s,
              itemCount: a,
              message: i,
              totalAmount1000:
                c != null && c.length > 0 ? parseInt(c, 10) : void 0,
              totalCurrencyCode:
                l.price.currency != null && l.price.currency.length > 0
                  ? l.price.currency
                  : void 0,
              catalogType: t || void 0,
            };
          return d;
        })),
        m.apply(this, arguments)
      );
    }
    l.default = u;
  },
  98,
);
