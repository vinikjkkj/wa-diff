__d(
  "WAWebProductCatalogMessage",
  [
    "fbt",
    "WALogger",
    "WAWebAttachMediaCollection",
    "WAWebAttachMediaConstants",
    "WAWebAttachMediaGetters",
    "WAWebMsgType",
    "WAWebProductCatalogLogQplEvents",
    "WAWebProductSelectors",
    "WAWebWamEnumMediaPickerOriginType",
    "WDSToastImperativeHost",
    "err",
    "isStringNullOrEmpty",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e;
    async function u(e, t, n) {
      var a = r("nullthrows")(
        new (r("WAWebAttachMediaCollection"))({ chatParticipantCount: t }),
      );
      if (
        (o("WAWebProductCatalogLogQplEvents").qplPointProductMessageSend(
          "image_upload_start",
        ),
        await a.processAttachmentsForChat(
          [{ file: e }],
          o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE
            .CHAT_PHOTO_LIBRARY,
          n,
        ),
        o("WAWebProductCatalogLogQplEvents").qplPointProductMessageSend(
          "image_upload_end",
        ),
        !!a.canSend())
      ) {
        var i = a.getPreviewableMedias();
        if (i.length === 1) {
          var l = i[0];
          return (
            r("isStringNullOrEmpty")(l.caption) && (l.caption = void 0),
            l
          );
        }
      }
    }
    function c(e) {
      return babelHelpers.extends(
        {
          businessOwnerJid: e.catalogWid.toString({ legacy: !0 }),
          productId: e.id.toString(),
          url: e.url,
          productImageCount: e.getProductImageCollectionCount(),
          title: e.name,
          description: e.description,
        },
        e.priceAmount1000 === 0
          ? { priceAmount1000: null, currencyCode: null }
          : { currencyCode: e.currency, priceAmount1000: e.priceAmount1000 },
        {
          salePriceAmount1000: o("WAWebProductSelectors").isSalePriceActive(e)
            ? e.salePriceAmount1000
            : null,
        },
      );
    }
    async function d(t, n, a) {
      var i = n.getHeadImageFile();
      if (!i)
        throw (
          o("WDSToastImperativeHost").showWDSToast({
            message: s._(/*BTDS*/ ""),
          }),
          r("err")(
            "Tried to send product message. Media file is not available.",
          )
        );
      var l = t.getParticipantCount(),
        d = await u(i, l, t);
      if (!d)
        throw (
          o("WDSToastImperativeHost").showWDSToast({
            message: s._(/*BTDS*/ ""),
          }),
          r("err")(
            "Tried to send product message. Media data is not available.",
          )
        );
      var m = {
        quotedMsg: a,
        caption: d.caption,
        addEvenWhilePreparing:
          o("WAWebAttachMediaGetters").getPreviewable(d) &&
          d.state ===
            o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.PROCESSING,
        useBasePropsType: !0,
      };
      return d
        .sendToChat({
          chat: t,
          options: babelHelpers.extends({}, m, {
            type: o("WAWebMsgType").MSG_TYPE.PRODUCT,
            productMsgOptions: c(n),
          }),
        })
        .catch(function () {
          throw (
            o("WDSToastImperativeHost").showWDSToast({
              message: s._(/*BTDS*/ ""),
            }),
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to send Catalog product",
                  ])),
              )
              .tags("messaging")
              .sendLogs("catalog-product-send-failed", { sampling: 0.01 }),
            r("err")("Failed to send product")
          );
        });
    }
    ((l.createProductMsgSnapshot = c), (l.sendProductMessage = d));
  },
  226,
);
