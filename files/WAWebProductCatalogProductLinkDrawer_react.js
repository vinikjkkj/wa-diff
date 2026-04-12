__d(
  "WAWebProductCatalogProductLinkDrawer.react",
  [
    "fbt",
    "WAWebBizSendProductButton.react",
    "WAWebBizSendProductLinkFlow.react",
    "WAWebCatalogShortLinkUtils",
    "WAWebCellFrame.react",
    "WAWebCmd",
    "WAWebCopyLinkButton.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerContext",
    "WAWebDrawerHeader.react",
    "WAWebEmojiText.react",
    "WAWebModalManager",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogLinkText.react",
    "WAWebProductCatalogLogEvents",
    "WAWebProductCatalogProductThumb.react",
    "WAWebSendLinkButton.react",
    "WAWebStateUtils",
    "WAWebUISpacing",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c.useContext,
      p = { surface: "smb-catalog-share-product-link" },
      _ = {
        prompt: { lineHeight: "x101yacv", $$css: !0 },
        productImageContainer: {
          width: "xjzcg3w",
          height: "xcbkimw",
          $$css: !0,
        },
        productThumbContainer: {
          position: "x170k5ml",
          backgroundColor: null,
          $$css: !0,
        },
      },
      f = "product-link-anchor";
    function g(e) {
      var t = e.getProductImageCollectionHead();
      return t
        ? d.jsx(o("WAWebProductCatalogProductThumb.react").ProductThumb, {
            xstyle: _.productImageContainer,
            mediaData: t.mediaData,
          })
        : d.jsx(
            o("WAWebProductCatalogProductThumb.react").ProductThumbPlaceholder,
            { xstyle: _.productThumbContainer },
          );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.centerDrawer,
        l = a.onBack,
        c = a.onCancel,
        h = a.onSend,
        y = a.product,
        C = a.prompt,
        b = a.sendProductMsg,
        v = m(o("WAWebDrawerContext").DrawerContext),
        S = function () {
          (o("WAWebModalManager").ModalManager.open(
            d.jsx(r("WAWebBizSendProductLinkFlow.react"), {
              product: y,
              onSend: h,
            }),
            { transition: "modal-flow" },
          ),
            o("WAWebProductCatalogLogEvents").logShareProductViaWALinkClick({
              product: y,
              catalogContext: o(
                "WAWebProductCatalogContext",
              ).getProductCatalogContext(v),
            }));
        },
        R = function (t) {
          (t.preventDefault(), S());
        },
        L = function () {
          o("WAWebProductCatalogLogEvents").logShareProductCopyLinkClick({
            product: y,
            catalogContext: o(
              "WAWebProductCatalogContext",
            ).getProductCatalogContext(v),
          });
        },
        E = function () {
          o("WAWebCmd").Cmd.attachProduct({
            product: o("WAWebStateUtils").unproxy(y),
            onSend: h,
          });
        },
        k = o("WAWebCatalogShortLinkUtils").createProductLink(
          y.catalogWid.user,
          y.id.toString(),
        ),
        I,
        T;
      i && ((I = "labels"), (T = "center-column"));
      var D;
      return (
        b != null
          ? (D = d.jsx(r("WAWebBizSendProductButton.react"), { onClick: E }))
          : (D = d.jsx(r("WAWebSendLinkButton.react"), { onClick: S })),
        d.jsxs(
          r("WAWebDrawer.react"),
          {
            ref: n,
            theme: I,
            tsNavigationData: p,
            children: [
              d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                testid: void 0,
                title: s._(/*BTDS*/ "Product link"),
                onBack: l,
                onCancel: c,
                type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
                focusBackOrCancel: !0,
              }),
              d.jsxs(r("WAWebDrawerBody.react"), {
                theme: T,
                children: [
                  d.jsxs(
                    "div",
                    babelHelpers.extends(
                      {},
                      (u || (u = r("stylex"))).props(
                        _.prompt,
                        o("WAWebUISpacing").uiPadding.horiz20,
                        o("WAWebUISpacing").uiPadding.bottom10,
                      ),
                      { children: [" ", C, " "] },
                    ),
                  ),
                  d.jsx(r("WAWebCellFrame.react"), {
                    image: g(y),
                    primary: d.jsx(o("WAWebEmojiText.react").EmojiText, {
                      text: y.name,
                      direction: "auto",
                    }),
                    theme: "identity",
                    secondary: d.jsx(r("WAWebProductCatalogLinkText.react"), {
                      id: f,
                      href: k,
                      onClick: R,
                      noHandle: !0,
                    }),
                  }),
                  D,
                  d.jsx(r("WAWebCopyLinkButton.react"), {
                    elementId: f,
                    onClick: L,
                  }),
                ],
              }),
            ],
          },
          "product-link-drawer",
        )
      );
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
