__d(
  "WAWebProductCatalogMessage",
  [
    "fbt",
    "WALogger",
    "WANullthrows",
    "WAWebAttachMediaCollection",
    "WAWebAttachMediaModel",
    "WAWebMsgType",
    "WAWebProductCatalogLogQplEvents",
    "WAWebProductSelectors",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumMediaPickerOriginType",
    "asyncToGeneratorRuntime",
    "err",
    "isStringNullOrEmpty",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = r("WANullthrows")(
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
        m.apply(this, arguments)
      );
    }
    function p(e) {
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
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i = n.getHeadImageFile();
          if (!i)
            throw (
              o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(
                    /*BTDS*/ "Cannot send product before media is ready",
                  ),
                }),
              ),
              r("err")(
                "Tried to send product message. Media file is not available.",
              )
            );
          var l = t.getParticipantCount(),
            u = yield d(i, l, t);
          if (!u)
            throw (
              o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(
                    /*BTDS*/ "Cannot send product before media is ready",
                  ),
                }),
              ),
              r("err")(
                "Tried to send product message. Media data is not available.",
              )
            );
          var m = {
            quotedMsg: a,
            caption: u.caption,
            addEvenWhilePreparing:
              u.previewable &&
              u.state ===
                o("WAWebAttachMediaModel").ATTACH_MEDIA_STATE.PROCESSING,
            useBasePropsType: !0,
          };
          return u
            .sendToChat({
              chat: t,
              options: babelHelpers.extends({}, m, {
                type: o("WAWebMsgType").MSG_TYPE.PRODUCT,
                productMsgOptions: p(n),
              }),
            })
            .catch(function () {
              throw (
                o("WAWebToastManager").ToastManager.open(
                  c.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(/*BTDS*/ "Failed to send product"),
                  }),
                ),
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
        f.apply(this, arguments)
      );
    }
    ((l.createProductMsgSnapshot = p), (l.sendProductMessage = _));
  },
  226,
);
