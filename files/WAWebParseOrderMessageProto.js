__d(
  "WAWebParseOrderMessageProto",
  ["WALongInt", "WAWebE2EProtoParserApi", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = n.orderMessage;
      if (r != null) {
        var a = r.catalogType,
          i = r.contextInfo,
          l = r.itemCount,
          s = r.message,
          u = r.orderId,
          c = r.orderTitle,
          d = r.sellerJid,
          m = r.status,
          p = r.surface,
          _ = r.thumbnail,
          f = r.token,
          g = r.totalAmount1000,
          h = r.totalCurrencyCode,
          y = babelHelpers.extends({}, t, {
            type: o("WAWebMsgType").MSG_TYPE.ORDER,
            kind: o("WAWebMsgType").MsgKind.Order,
            thumbnail: o("WAWebE2EProtoParserApi").decodeBytes(_),
            message: s || "",
            orderId: u,
            itemCount: l || 0,
            status: m,
            surface: p,
            sellerJid: d,
            orderTitle: c || "",
            token: f || "",
            totalAmount1000: o("WALongInt").numberOrThrowIfTooLarge(
              g != null ? g : 0,
            ),
            totalCurrencyCode: h,
            catalogType: a,
            body: "",
          });
        return { msgData: y, contextInfo: i };
      }
    }
    l.default = e;
  },
  98,
);
