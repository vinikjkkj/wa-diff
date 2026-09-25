__d(
  "WAWebBizProductCatalogAction",
  [
    "WAWebBizCreateProductInquiry",
    "WAWebBizProductCatalogBridge",
    "WAWebBusinessProfileCollection",
    "WAWebCatalogCollection",
    "WAWebCatalogVariantHelper",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebDrawerManager",
    "WAWebFindChatAction",
    "WAWebFrontendConstants",
    "WAWebMsgCollection",
    "WAWebMsgModelUtils",
    "WAWebStateUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r, o, a) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i) {
            var l;
            (n === void 0 && (n = 100), r === void 0 && (r = 100));
            var s,
              u,
              c,
              d = yield o(
                "WAWebBusinessProfileCollection",
              ).BusinessProfileCollection.find(e),
              m =
                (l = o("WAWebCatalogCollection").CatalogCollection.get(e)) ==
                null
                  ? void 0
                  : l.productCollection.get(t);
            return (
              o("WAWebCatalogVariantHelper").shouldRequestVariantInfo(d, m) &&
                ((s = o("WAWebCatalogVariantHelper").FULL_VARIANT_INFO_FIELDS),
                (u = o(
                  "WAWebCatalogVariantHelper",
                ).VARIANT_THUMBNAIL_IMAGE_SIZE),
                (c = o(
                  "WAWebCatalogVariantHelper",
                ).VARIANT_THUMBNAIL_IMAGE_SIZE)),
              o("WAWebBizProductCatalogBridge").queryProduct(
                e,
                t,
                n,
                r,
                a,
                i,
                s,
                u,
                c,
              )
            );
          },
        )),
        s.apply(this, arguments)
      );
    }
    function u(e, t, n, r, a, i, l, s, u, c) {
      return (
        n === void 0 && (n = 5),
        r === void 0 && (r = 100),
        a === void 0 && (a = 100),
        l === void 0 && (l = !1),
        o("WAWebBizProductCatalogBridge").queryCatalog(
          e,
          t,
          n,
          r,
          a,
          i,
          l,
          s,
          u,
          c,
        )
      );
    }
    function c(e, t, n, r, a) {
      return (
        n === void 0 && (n = 100),
        r === void 0 && (r = 100),
        o("WAWebBizProductCatalogBridge").queryProductList(e, t, n, r, a)
      );
    }
    function d(e, t) {
      return o("WAWebBizProductCatalogBridge").appealProduct(e, t);
    }
    function m(e, t, n) {
      return o("WAWebBizProductCatalogBridge").reportProduct(e, t, n);
    }
    function p(e) {
      var t = e.height,
        n = t === void 0 ? 100 : t,
        r = e.product,
        a = e.width,
        i = a === void 0 ? 100 : a;
      return o("WAWebBizProductCatalogBridge").addProduct({
        height: n,
        product: r,
        width: i,
      });
    }
    function _(e, t, n) {
      return (
        t === void 0 && (t = 100),
        n === void 0 && (n = 100),
        o("WAWebBizProductCatalogBridge").editProduct(e, t, n)
      );
    }
    function f(e) {
      return o("WAWebBizProductCatalogBridge").deleteProducts(e);
    }
    function g(e, t, r) {
      var a = e.catalogWid;
      if (t) {
        var i = t.productCollection.get(e.id),
          l = i
            ? o("WAWebStateUtils").unproxy(i)
            : o("WAWebStateUtils").unproxy(e);
        if (l) {
          var s = l.getProductImageCollectionHead(),
            u = s == null ? void 0 : s.mediaData;
          u &&
            o("WAWebFindChatAction")
              .findOrCreateLatestChat(a, "bizProductCatalogAction")
              .then(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = e.chat;
                      yield o("WAWebCmd")
                        .Cmd.openChatFromUnread({
                          chat: t,
                          chatEntryPoint: o("WAWebChatEntryPoint")
                            .ChatEntryPoint.BizProduct,
                        })
                        .then(function (e) {
                          if (e) {
                            var n = o("WAWebStateUtils").unproxy(
                              o(
                                "WAWebBizCreateProductInquiry",
                              ).createProductInquiry({
                                catalogWid: a,
                                chatId: t.id,
                                mediaData: u,
                                product: l,
                                sessionId:
                                  r == null ? void 0 : r.session.toString(),
                              }),
                            );
                            (o("WAWebMsgCollection").MsgCollection.add(n),
                              (t.composeQuotedMsg =
                                o("WAWebMsgModelUtils").createMsgSnapshot(n)),
                              o(
                                "WAWebComposeBoxActions",
                              ).ComposeBoxActions.focus(t),
                              window.innerWidth <=
                                o("WAWebFrontendConstants")
                                  .LAYOUT_2COLUMNS_MAX_WIDTH &&
                                o(
                                  "WAWebDrawerManager",
                                ).DrawerManager.closeDrawerRight());
                          }
                        });
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              );
        }
      }
    }
    ((l.queryProduct = e),
      (l.queryCatalog = u),
      (l.queryProductList = c),
      (l.appealProduct = d),
      (l.reportProduct = m),
      (l.addProduct = p),
      (l.editProduct = _),
      (l.deleteProducts = f),
      (l.sendProductToChat = g));
  },
  98,
);
