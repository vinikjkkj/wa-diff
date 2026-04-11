__d(
  "WAWebCatalogCartVariantsPopup.react",
  [
    "fbt",
    "WALogger",
    "WANullthrows",
    "WAWebChatCollection",
    "WAWebFlex.react",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebProductCatalogProductDetailsDrawer.react",
    "WAWebWidFactory",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = t.collectionId,
        a = t.onAddToCart,
        i = t.product,
        l = function () {
          (a == null || a(), o("WAWebModalManager").ModalManager.close());
        },
        u = i.catalogWid;
      (o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() &&
        (u = o("WAWebLidMigrationUtils").toUserLidOrThrow(
          o("WAWebWidFactory").createUserWidOrThrow(i.catalogWid.toString()),
        )),
        u == null &&
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[catalog] product details drawer: chatId is null",
                ])),
            )
            .sendLogs("catalog-pdp-chat-id-null"));
      var d = s._(/*BTDS*/ "Catalog product details with variants modal");
      return c.jsx(o("WAWebModal.react").Modal, {
        type: o("WAWebModal.react").ModalTheme.Tower,
        title: "Product details with variants",
        ariaLabel: d,
        testid: void 0,
        children: c.jsx(o("WAWebFlex.react").FlexRow, {
          children: c.jsx(r("WAWebProductCatalogProductDetailsDrawer.react"), {
            chat: r("WANullthrows")(
              o("WAWebChatCollection").ChatCollection.get(u),
            ),
            collectionId: n,
            product: r("WANullthrows")(i),
            onEnd: r("WAWebNoop"),
            onBack: o("WAWebModalManager").closeModalManager,
            refreshCarousel: !1,
            onProductLinkClick: r("WAWebNoop"),
            onProductMoreInformation: r("WAWebNoop"),
            onCartClick: l,
            hideMessageBusinessButton: !0,
            hideHeader: !0,
            hideCatalogSection: !0,
            hideDescription: !0,
          }),
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
