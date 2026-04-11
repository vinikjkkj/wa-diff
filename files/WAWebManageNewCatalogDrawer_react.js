__d(
  "WAWebManageNewCatalogDrawer.react",
  [
    "fbt",
    "WAWebActionToast.react",
    "WAWebCellFrame.react",
    "WAWebClickableLink.react",
    "WAWebConstantsDeprecated",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerContext",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebExternalLink.react",
    "WAWebManageAddItemCta.react",
    "WAWebNoop",
    "WAWebProductCatalogLogEvents",
    "WAWebSpinner.react",
    "WAWebText.react",
    "WAWebText_DONOTUSE.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c.useEffect,
      p = {
        placeholderContainer: {
          width: "xh8yej3",
          borderTopWidth: "x178xt8z",
          borderTopStyle: "x13fuv20",
          borderTopColor: "xx42vgk",
          $$css: !0,
        },
        addItemPlaceholder: { borderTopStyle: "x1ejq31n", $$css: !0 },
      },
      _ = "https://www.facebook.com/legal/terms",
      f = "https://www.facebook.com/policies/commerce",
      g = function () {
        o("WAWebToastManager").ToastManager.open(
          d.jsx(o("WAWebToast.react").Toast, {
            msg: s._(/*BTDS*/ "Failed to add first item to the catalog."),
            id: o("WAWebActionToast.react").genId(),
          }),
        );
      };
    function h(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.catalogContext,
        l = a.isCreatingCatalogFn,
        c = a.onAddProductClick,
        h = a.onBack,
        v = l();
      m(function () {
        o("WAWebProductCatalogLogEvents").logCatalogOnboardImpression(i);
      }, []);
      var S = d.jsx("div", {
          className:
            "x1n2onr6 xo5x3gg xnxb3zj x1vkjmz6 xrxyp3c xv0oops x1isl5vh xn8zj9a",
        }),
        R = d.jsx(r("WAWebClickableLink.react"), {
          href: _,
          onClick: y,
          children: s._(/*BTDS*/ "Facebook Product"),
        }),
        L = d.jsx(r("WAWebClickableLink.react"), {
          href: f,
          onClick: C,
          children: s._(/*BTDS*/ "Facebook Commercial Terms"),
        }),
        E = d.jsx(r("WAWebClickableLink.react"), {
          href: r("WAWebConstantsDeprecated").WA_COMMERCE_POLICY_URL,
          onClick: b,
          children: s._(/*BTDS*/ "WhatsApp Commerce Policies"),
        }),
        k = s._(
          /*BTDS*/ "By using this feature, you're using a {fb_product_link} and agree that the {fb_commerce_link} and {wa_commerce_policy_link} apply.",
          [
            s._param("fb_product_link", R),
            s._param("fb_commerce_link", L),
            s._param("wa_commerce_policy_link", E),
          ],
        ),
        I = { 0: "", 1: "x47corl xbyyjgo" }[!!v << 0],
        T = v
          ? d.jsx("div", {
              className: "x10l6tqk xh0rhid xbudbmw xupqr0c x11lhmoz",
              children: d.jsx(o("WAWebSpinner.react").Spinner, {
                size: 50,
                stroke: 3,
              }),
            })
          : null,
        D = v
          ? d.jsx(r("WAWebManageAddItemCta.react"), {
              onClick: r("WAWebNoop"),
              theme: "default",
              idle: !!v,
              testid: void 0,
            })
          : d.jsx(o("WAWebDrawerContext").DrawerContext.Consumer, {
              children: function (t) {
                return d.jsx(r("WAWebManageAddItemCta.react"), {
                  onClick: function () {
                    c().catch(g);
                  },
                  theme: "default",
                  idle: !1,
                  testid: void 0,
                });
              },
            });
      return d.jsxs(
        r("WAWebDrawer.react"),
        {
          ref: n,
          tsNavigationData: { surface: "unknown", viewName: "catalog-new" },
          children: [
            d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: s._(/*BTDS*/ "Catalog"),
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              onBack: h,
            }),
            d.jsx(r("WAWebDrawerBody.react"), {
              className: I,
              children: d.jsxs(r("WAWebDrawerSection.react"), {
                theme: "padding-small",
                animation: !1,
                children: [
                  T,
                  d.jsx(o("WAWebText.react").WAWebTextTitle, {
                    children: s._(
                      /*BTDS*/ "Add items to your catalog so customers can see what you're offering",
                    ),
                  }),
                  D,
                  d.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
                    theme: "plain",
                    children: k,
                  }),
                  d.jsxs(
                    "div",
                    babelHelpers.extends(
                      {},
                      (u || (u = r("stylex"))).props([
                        p.placeholderContainer,
                        o("WAWebUISpacing").uiPadding.top10,
                        o("WAWebUISpacing").uiMargin.vert20,
                      ]),
                      {
                        children: [
                          d.jsx(r("WAWebCellFrame.react"), {
                            theme: "add-item-placeholder",
                            image: S,
                            customImage: !0,
                            className: u([
                              p.addItemPlaceholder,
                              o("WAWebUISpacing").uiMargin.vert15,
                            ]),
                            primary: "",
                            secondary: "",
                            idle: !0,
                          }),
                          d.jsx("div", {
                            className:
                              "xthe8de x1vq0v4p x178xt8z x13fuv20 xx42vgk",
                          }),
                          d.jsx(r("WAWebCellFrame.react"), {
                            theme: "add-item-placeholder",
                            image: S,
                            customImage: !0,
                            className: u([
                              p.addItemPlaceholder,
                              o("WAWebUISpacing").uiMargin.vert15,
                            ]),
                            primary: "",
                            secondary: "",
                            idle: !0,
                          }),
                          d.jsx("div", {
                            className:
                              "xthe8de x1vq0v4p x178xt8z x13fuv20 xx42vgk",
                          }),
                        ],
                      },
                    ),
                  ),
                ],
              }),
            }),
          ],
        },
        "catalog-link-drawer",
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      (e.preventDefault(), o("WAWebExternalLink.react").openExternalLink(_));
    }
    function C(e) {
      (e.preventDefault(), o("WAWebExternalLink.react").openExternalLink(f));
    }
    function b(e) {
      (e.preventDefault(),
        o("WAWebExternalLink.react").openExternalLink(
          r("WAWebConstantsDeprecated").WA_COMMERCE_POLICY_URL,
        ));
    }
    l.default = h;
  },
  226,
);
