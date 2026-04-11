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
    function e(e, t, n, a, i) {
      var l = {
          ack: o("WAWebAck").ACK.CLOCK,
          id: new (r("WAWebMsgKey"))({
            id: "product_inquiry_" + r("WAWebMsgKey").newId_DEPRECATED(),
            remote: t,
            fromMe: !0,
          }),
          from: t,
          to: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
          t: o("WATimeUtils").unixTime(),
          type: o("WAWebMsgType").MSG_TYPE.PRODUCT,
          kind: o("WAWebMsgType").MsgKind.Product,
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          title: e.name,
          description: e.description,
          businessOwnerJid: n.toString({ legacy: !0 }),
          productId: e.id.toString(),
          url: e.url,
          productImageCount: e.getProductImageCollectionCount(),
          body:
            a.preview instanceof r("WAWebMediaOpaqueData")
              ? a.preview.getBase64()
              : null,
          currencyCode: e.currency,
          priceAmount1000: e.priceAmount1000,
          salePriceAmount1000: o("WAWebProductSelectors").isSalePriceActive(e)
            ? e.salePriceAmount1000
            : null,
          sessionId: i,
          retailerId: e.retailerId,
        },
        s = new (o("WAWebMsgModel").Msg)(l);
      return (s.mediaData.set(a), s);
    }
    l.createProductInquiry = e;
  },
  98,
);
