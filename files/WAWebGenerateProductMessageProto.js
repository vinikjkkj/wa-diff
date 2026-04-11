__d(
  "WAWebGenerateProductMessageProto",
  ["WAWebGenerateImageMessageProto"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.contextInfo,
        n = e.json,
        o = e.mediaMetadata,
        a;
      o != null &&
        (a = r("WAWebGenerateImageMessageProto")({
          json: n,
          mediaMetadata: o,
          contextInfo: t,
        }).imageMessage);
      var i = {
        product: {
          productImage: a,
          productId: n.productId,
          title: n.title,
          description: n.description,
          currencyCode: n.currencyCode,
          priceAmount1000: n.priceAmount1000 || void 0,
          salePriceAmount1000: n.salePriceAmount1000 || void 0,
          retailerId: n.retailerId,
          url: n.url,
          productImageCount: n.productImageCount,
        },
        businessOwnerJid: n.businessOwnerJid,
        contextInfo: t,
        body: n.caption,
        footer: n.footer,
      };
      return { productMessage: i };
    }
    l.default = e;
  },
  98,
);
