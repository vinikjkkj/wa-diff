__d(
  "WAWebBizCreateProductInquiry",
  [
    "WATimeUtils",
    "WAWebAck",
    "WAWebMediaOpaqueData",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebProductSelectors",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.catalogWid,
        n = e.chatId,
        a = e.mediaData,
        i = e.product,
        l = e.sessionId,
        s = {
          ack: o("WAWebAck").ACK.CLOCK,
          id: new (r("WAWebMsgKey"))({
            id: "product_inquiry_" + r("WAWebMsgKey").newId_DEPRECATED(),
            remote: n,
            fromMe: !0,
          }),
          from: n,
          to: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
          t: o("WATimeUtils").unixTime(),
          type: o("WAWebMsgType").MSG_TYPE.PRODUCT,
          kind: o("WAWebMsgType").MsgKind.Product,
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          title: i.name,
          description: i.description,
          businessOwnerJid: t.toString({ legacy: !0 }),
          productId: i.id.toString(),
          url: i.url,
          productImageCount: i.getProductImageCollectionCount(),
          body:
            a.preview instanceof r("WAWebMediaOpaqueData")
              ? a.preview.getBase64()
              : null,
          currencyCode: i.currency,
          priceAmount1000: i.priceAmount1000,
          salePriceAmount1000: o("WAWebProductSelectors").isSalePriceActive(i)
            ? i.salePriceAmount1000
            : null,
          sessionId: l,
          retailerId: i.retailerId,
        },
        u = new (o("WAWebMsgModel").Msg)(s);
      return (u.mediaData.set(a), u);
    }
    l.createProductInquiry = e;
  },
  98,
);
