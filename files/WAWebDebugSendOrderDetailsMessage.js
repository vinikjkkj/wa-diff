__d(
  "WAWebDebugSendOrderDetailsMessage",
  [
    "WALogger",
    "WAWebBizOrderGetFriendlyRandomIdAction",
    "WAWebBizSendOrderAction",
    "WAWebOrderCollection",
    "WAWebOrderItemModel",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c() {
      r("vulture")("IXA8Gs2AIGU8WvPHmN8IU9ExpJA=");
      var t = window.chat;
      if (!t) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "sendOrderDetailsMessageAsMerchantMD: no active chat",
            ])),
        );
        return;
      }
      var n = o("WAWebOrderCollection").OrderCollection.addOrder();
      ((n.products = [
        new (r("WAWebOrderItemModel"))({
          id: r("WAWebBizOrderGetFriendlyRandomIdAction")(),
          price: 1e3,
          name: "Custom item",
          quantity: 1,
          isCustomItem: !0,
          isQuantitySet: !0,
        }),
      ]),
        (n.currency = "USD"),
        (n.subtotal = 1e3),
        n.triggerItemCollectionUpdate(),
        o("WAWebBizSendOrderAction")
          .sendOrderDetailsMessageAsMerchant({
            order: n,
            chat: t,
            orderNote: "",
            offset: 1e3,
            total: 1e3,
            discount: null,
            shipping: null,
            tax: null,
          })
          .then(function () {
            (r("vulture")("kF1QxNGqD7kzNTfjn3h5yHZV84g="),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "sendOrderDetailsMessageAsMerchantMD: done",
                  ])),
              ));
          })
          .catch(function (e) {
            (r("vulture")("9ctHrDig3mbl0N9g3uCRxq9lksg="),
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "sendOrderDetailsMessageAsMerchantMD: error ",
                    "",
                  ])),
                String(e),
              ));
          }));
    }
    ((c.doc = "Send order details in chat"), (l.default = c));
  },
  98,
);
