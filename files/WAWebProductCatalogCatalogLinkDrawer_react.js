__d(
  "WAWebProductCatalogCatalogLinkDrawer.react",
  [
    "fbt",
    "WAWebBizSendCatalogLinkFlow.react",
    "WAWebCatalogShortLinkUtils",
    "WAWebCellFrame.react",
    "WAWebCopyLinkButton.react",
    "WAWebDetailImage.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerContext",
    "WAWebDrawerHeader.react",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogLinkText.react",
    "WAWebProductCatalogLogEvents",
    "WAWebSendLinkButton.react",
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
      p = { surface: "smb-catalog-share-link" },
      _ = { prompt: { lineHeight: "x101yacv", $$css: !0 } },
      f = "catalog-link-anchor";
    function g(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.catalog,
        l = a.centerDrawer,
        c = a.contact,
        g = a.onBack,
        h = a.onCancel,
        y = a.onSend,
        C = a.prompt,
        b = m(o("WAWebDrawerContext").DrawerContext),
        v = function () {
          (o("WAWebModalManager").ModalManager.open(
            d.jsx(r("WAWebBizSendCatalogLinkFlow.react"), {
              catalog: i,
              onSend: y,
            }),
            { transition: "modal-flow" },
          ),
            o("WAWebProductCatalogLogEvents").logShareCatalogViaWALinkClick({
              catalogOwnerWid: i.id,
              catalogContext: o(
                "WAWebProductCatalogContext",
              ).getProductCatalogContext(b),
            }));
        },
        S = function (t) {
          (t.preventDefault(), v());
        },
        R = function () {
          o("WAWebProductCatalogLogEvents").logShareCatalogCopyLinkClick({
            catalogOwnerWid: i.id,
            catalogContext: o(
              "WAWebProductCatalogContext",
            ).getProductCatalogContext(b),
          });
        },
        L = d.jsx(o("WAWebDetailImage.react").DetailImage, {
          id: c.id,
          size: 82,
          quality: o("WAWebDetailImage.react").DetailImageQuality.High,
        }),
        E,
        k;
      return (
        l && ((E = "labels"), (k = "center-column")),
        d.jsxs(
          r("WAWebDrawer.react"),
          {
            ref: n,
            theme: E,
            tsNavigationData: p,
            children: [
              d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                testid: void 0,
                title: s._(/*BTDS*/ "Catalog link"),
                onBack: g,
                onCancel: h,
                type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              }),
              d.jsxs(r("WAWebDrawerBody.react"), {
                theme: k,
                children: [
                  d.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      (u || (u = r("stylex"))).props([
                        _.prompt,
                        o("WAWebUISpacing").uiPadding.top0,
                        o("WAWebUISpacing").uiPadding.horiz20,
                        o("WAWebUISpacing").uiPadding.bottom10,
                      ]),
                      { children: C },
                    ),
                  ),
                  d.jsx(r("WAWebCellFrame.react"), {
                    image: L,
                    primary: d.jsx(o("WAWebName.react").Name, {
                      contact: c,
                      useVerifiedName: !0,
                    }),
                    theme: "identity",
                    secondary: d.jsx(r("WAWebProductCatalogLinkText.react"), {
                      id: f,
                      href: o("WAWebCatalogShortLinkUtils").createCatalogLink(
                        i.id.user,
                      ),
                      onClick: S,
                      noHandle: !0,
                    }),
                  }),
                  d.jsx(r("WAWebSendLinkButton.react"), { onClick: v }),
                  d.jsx(r("WAWebCopyLinkButton.react"), {
                    elementId: f,
                    onClick: R,
                  }),
                ],
              }),
            ],
          },
          "catalog-link-drawer",
        )
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
