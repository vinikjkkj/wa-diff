__d(
  "WAWebGenerateOrderMessageProto",
  ["WAWebE2EProtoUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.json;
      return t.itemCount ||
        t.message ||
        t.orderId ||
        t.orderTitle ||
        t.sellerJid ||
        t.status ||
        t.surface ||
        t.thumbnail ||
        t.token ||
        t.totalAmount1000 ||
        t.totalCurrencyCode ||
        t.catalogType
        ? {
            orderMessage: {
              itemCount: t.itemCount,
              message: t.message,
              orderId: t.orderId,
              orderTitle: t.orderTitle,
              sellerJid: t.sellerJid,
              status: t.status,
              surface: t.surface,
              thumbnail: o("WAWebE2EProtoUtils").encodeBytes(t.thumbnail),
              token: t.token,
              totalAmount1000: t.totalAmount1000,
              totalCurrencyCode: t.totalCurrencyCode,
              catalogType: t.catalogType,
            },
          }
        : { conversation: t.body };
    }
    l.default = e;
  },
  98,
);
