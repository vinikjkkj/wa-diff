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
    "asyncToGeneratorRuntime",
    "err",
    "isStringNullOrEmpty",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e;
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = r("nullthrows")(
            new (r("WAWebAttachMediaCollection"))({ chatParticipantCount: t }),
          );
          if (
            (o("WAWebProductCatalogLogQplEvents").qplPointProductMessageSend(
              "image_upload_start",
            ),
            yield a.processAttachmentsForChat(
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
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
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
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i = n.getHeadImageFile();
          if (!i)
            throw (
              o("WDSToastImperativeHost").showWDSToast({
                message: s._(
                  /*BTDS*/ "Cannot send product before media is ready",
                ),
              }),
              r("err")(
                "Tried to send product message. Media file is not available.",
              )
            );
          var l = t.getParticipantCount(),
            c = yield u(i, l, t);
          if (!c)
            throw (
              o("WDSToastImperativeHost").showWDSToast({
                message: s._(
                  /*BTDS*/ "Cannot send product before media is ready",
                ),
              }),
              r("err")(
                "Tried to send product message. Media data is not available.",
              )
            );
          var m = {
            quotedMsg: a,
            caption: c.caption,
            addEvenWhilePreparing:
              o("WAWebAttachMediaGetters").getPreviewable(c) &&
              c.state ===
                o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.PROCESSING,
            useBasePropsType: !0,
          };
          return c
            .sendToChat({
              chat: t,
              options: babelHelpers.extends({}, m, {
                type: o("WAWebMsgType").MSG_TYPE.PRODUCT,
                productMsgOptions: d(n),
              }),
            })
            .catch(function () {
              throw (
                o("WDSToastImperativeHost").showWDSToast({
                  message: s._(/*BTDS*/ "Couldn't send product"),
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
        })),
        p.apply(this, arguments)
      );
    }
    ((l.createProductMsgSnapshot = d), (l.sendProductMessage = m));
  },
  226,
);
