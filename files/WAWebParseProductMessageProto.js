__d(
  "WAWebParseProductMessageProto",
  ["WALongInt", "WAWebMsgType", "WAWebParseImageMessageProto"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        a = e.msgContext,
        i = n.productMessage;
      if (i != null) {
        var l = i.body,
          s = i.businessOwnerJid,
          u = i.contextInfo,
          c = i.footer,
          d = i.product;
        if (d != null) {
          var m = d.currencyCode,
            p = d.description,
            _ = d.priceAmount1000,
            f = d.productId,
            g = d.productImage,
            h = d.productImageCount,
            y = d.retailerId,
            C = d.salePriceAmount1000,
            b = d.title,
            v = d.url,
            S;
          if (g != null) {
            var R = r("WAWebParseImageMessageProto")({
              messageProtobuf: { imageMessage: g },
              baseMessage: t,
              msgContext: a,
            });
            if (R != null) {
              var L = R.msgData;
              S = {
                deprecatedMms3Url: L.deprecatedMms3Url,
                directPath: L.directPath,
                staticUrl: L.staticUrl,
                mimetype: L.mimetype,
                filehash: L.filehash,
                encFilehash: L.encFilehash,
                size: L.size,
                height: L.height,
                width: L.width,
                mediaKey: L.mediaKey,
                mediaKeyTimestamp: L.mediaKeyTimestamp,
                body: L.body,
                interactiveAnnotations: L.interactiveAnnotations,
                scanLengths: L.scanLengths,
                scansSidecar: L.scansSidecar,
                isViewOnce: L.isViewOnce,
                thumbnailDirectPath: L.thumbnailDirectPath,
                thumbnailSha256: L.thumbnailSha256,
                thumbnailEncSha256: L.thumbnailEncSha256,
              };
            }
          }
          var E = babelHelpers.extends(
            {},
            t,
            {
              type: o("WAWebMsgType").MSG_TYPE.PRODUCT,
              kind: o("WAWebMsgType").MsgKind.Product,
              businessOwnerJid: s,
              productId: f,
              currencyCode: m,
              priceAmount1000:
                o("WALongInt").numberOrThrowIfTooLarge(_ != null ? _ : 0) ||
                void 0,
              salePriceAmount1000:
                o("WALongInt").numberOrThrowIfTooLarge(C != null ? C : 0) ||
                void 0,
              retailerId: y,
              url: v,
              productImageCount: h,
              title: b,
              description: p,
              caption: l,
              footer: c,
            },
            S,
          );
          return { msgData: E, contextInfo: u };
        }
      }
    }
    l.default = e;
  },
  98,
);
