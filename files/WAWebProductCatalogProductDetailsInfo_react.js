__d(
  "WAWebProductCatalogProductDetailsInfo.react",
  [
    "fbt",
    "WALogger",
    "WAWebAddToCartIcon.react",
    "WAWebBizGatingUtils",
    "WAWebBizGetProductQuantityCartAction",
    "WAWebButton.react",
    "WAWebCartQuantityControls.react",
    "WAWebConstantsDeprecated",
    "WAWebDrawerContext",
    "WAWebDrawerSection.react",
    "WAWebEmojiText.react",
    "WAWebExternalLink.react",
    "WAWebFormatConfiguration",
    "WAWebLinkify",
    "WAWebManageCart",
    "WAWebProductCatalogCheckCartEnabled",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogLogEvents",
    "WAWebProductCatalogProductPriceInfoText.react",
    "WAWebProductCollection",
    "WAWebProductDetailsInfoVariants.react",
    "WAWebProductTypes.flow",
    "WAWebQplFlowWrapper",
    "WAWebStateUtils",
    "WAWebStopEvent",
    "WAWebText.react",
    "WAWebText_DONOTUSE.react",
    "WAWebUserPrefsMeUser",
    "isStringNullOrEmpty",
    "qpl",
    "react",
    "stylex",
    "useHoverState",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useContext,
      _ = m.useEffect,
      f = m.useState,
      g = {
        addToCartIconDisabled: {
          color: "xhslqc4",
          ":hover_color": "x12ln5q2",
          $$css: !0,
        },
        addToCartIcon: {
          color: "xo1mcw5",
          ":hover_color": "xyla9g4",
          $$css: !0,
        },
        addToCartBtnHoverIcon: {
          color: "xk4n5i7",
          ":hover_color": "xfrlarv",
          $$css: !0,
        },
        description: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          wordWrap: "x1vvkbs",
          $$css: !0,
        },
        name: { fontWeight: "xk50ysn", wordWrap: "x1vvkbs", $$css: !0 },
        marginBottom20: { marginBottom: "xdqhqc9", $$css: !0 },
        marginBottom12: { marginBottom: "xcytdqz", $$css: !0 },
      },
      h = r("qpl")._(774774794, "10");
    function y(e) {
      var t = e.isAvailable,
        n = e.onSendChat,
        r = e.product,
        a = o("WAWebUserPrefsMeUser").isMePnUser(r.catalogWid);
      if (
        a ||
        !n ||
        !r.fetchedFromServer ||
        !t ||
        r.reviewStatus !==
          o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.APPROVED
      )
        return null;
      var i = s._(/*BTDS*/ "Message business");
      return d.jsx("div", {
        className: "x78zum5 x2b8uid xefnzgg",
        title: i,
        children: d.jsx(o("WAWebButton.react").Button, {
          testid: void 0,
          onClick: n,
          type: "secondary",
          stretch: !0,
          children: i,
        }),
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.cartEnabled,
        n = e.collectionId,
        a = e.context,
        i = e.isAvailable,
        l = e.onClick,
        u = e.product,
        c = r("useHoverState")(),
        m = c.isHovered,
        p = c.onMouseEnter,
        _ = c.onMouseLeave,
        f = o("WAWebUserPrefsMeUser").isMePnUser(u.catalogWid);
      if (
        f ||
        !t ||
        !u.fetchedFromServer ||
        !i ||
        u.reviewStatus !==
          o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.APPROVED
      )
        return null;
      var h = o("WAWebBizGatingUtils").isQuantityControlsFeatureEnabled(),
        y = s._(/*BTDS*/ "Add to cart"),
        C = o(
          "WAWebProductTypes.flow",
        ).PRODUCT_AVAILABILITY_UNAVAILABLE_VALUES.includes(u.availability),
        b = null;
      C
        ? (b = g.addToCartIconDisabled)
        : m
          ? (b = g.addToCartBtnHoverIcon)
          : (b = g.addToCartIcon);
      var v = r("WAWebBizGetProductQuantityCartAction")(u.id, u.catalogWid),
        S = h ? null : d.jsx(r("WAWebAddToCartIcon.react"), { colorXStyle: b }),
        R =
          h && v > 0
            ? d.jsx(
                o("WAWebCartQuantityControls.react").WAWebCartQuantityControls,
                { product: u, context: a, collectionId: n || "" },
              )
            : d.jsx(o("WAWebButton.react").Button, {
                testid: void 0,
                onClick: l,
                type: "secondary",
                disabled: C,
                stretch: !0,
                children: d.jsxs(
                  "span",
                  babelHelpers.extends(
                    {},
                    {
                      0: { className: "x78zum5 x6s0dn4 x1o2pa38" },
                      1: {
                        className:
                          "x78zum5 x6s0dn4 x1o2pa38 x1rdy4ex x14z9mp x4vbgl9 x1lziwak",
                      },
                    }[!!S << 0],
                    { children: [S, y] },
                  ),
                ),
              });
      return d.jsx(
        "div",
        babelHelpers.extends(
          {},
          {
            0: { className: "x78zum5 x2b8uid" },
            1: { className: "x78zum5 x2b8uid xl56j7k xhrpt6u xat24cr" },
          }[!!h << 0],
          { title: y, onMouseEnter: p, onMouseLeave: _, children: R },
        ),
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = e.isAvailable,
        n = e.onClick,
        a = e.product,
        i = a.url;
      if (!a.fetchedFromServer || r("isStringNullOrEmpty")(i) || !t)
        return null;
      var l = o("WAWebFormatConfiguration").TrustedGroupDesc({
        links: o("WAWebLinkify").findLinks(i),
      });
      return d.jsx("div", {
        children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
          selectable: !0,
          formatters: l,
          text: i,
          onClick: function (t) {
            return n(t, i);
          },
        }),
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = e.hideRetailerID,
        n = e.isAvailable,
        a = e.isDescExpanded,
        i = e.onClickUrl,
        l = e.onReadMore,
        c = e.product,
        m = !r("isStringNullOrEmpty")(c.description),
        p = !r("isStringNullOrEmpty")(c.retailerId),
        _ = !r("isStringNullOrEmpty")(c.url);
      if (!m && !_ && !p) return null;
      var f =
          c.description != null &&
          c.description.length >
            r("WAWebConstantsDeprecated")
              .GROUP_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH,
        h = m
          ? d.jsxs("div", {
              children: [
                d.jsx(o("WAWebEmojiText.react").EmojiText, {
                  selectable: !0,
                  multiline: !0,
                  text: c.description,
                  textLimit: a
                    ? 1 / 0
                    : r("WAWebConstantsDeprecated")
                        .GROUP_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH,
                }),
                f && !a
                  ? d.jsxs("span", {
                      className: "x1ph7ams",
                      role: "button",
                      onClick: l,
                      children: [" ", s._(/*BTDS*/ "Read more")],
                    })
                  : null,
              ],
            })
          : null;
      return d.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
        theme: "plain",
        className: (u || (u = r("stylex")))([g.description, g.marginBottom20]),
        children: [
          h,
          d.jsx(b, { isAvailable: n, product: c, onClick: i }),
          p && !t
            ? d.jsx("div", {
                children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: c.retailerId,
                  selectable: !0,
                  direction: "inherit",
                }),
              })
            : null,
        ],
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(t) {
      var n,
        a = t.collectionId,
        i = t.hideDescription,
        l = t.hideMessageBusinessButton,
        s = t.isAvailable,
        u = t.onAddToCart,
        c = t.onSendChat,
        m = p(o("WAWebDrawerContext").DrawerContext),
        b = o("useWAWebModelValues").useModelValues(t.product, [
          "name",
          "url",
          "description",
          "availability",
          "currency",
          "priceAmount1000",
          "salePriceAmount1000",
          "salePriceStartDate",
          "salePriceEndDate",
          "fetchedFromServer",
          "retailerId",
          "catalogWid",
          "productImageCollection",
          "imageHash",
          "reviewStatus",
          "imageCdnUrl",
          "id",
          "maxAvailable",
          "variantInfo",
        ]),
        S = f(!1),
        R = S[0],
        L = S[1],
        E = f(!1),
        k = E[0],
        I = E[1];
      _(function () {
        r("WAWebProductCatalogCheckCartEnabled")(b.catalogWid)
          .then(function (e) {
            I(e);
          })
          .catch(function () {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[product-catalog] failed to check cart enabled",
                  ])),
              )
              .sendLogs("failed-to-check-cart-enabled");
          });
      }, []);
      var T = function () {
          c == null || c();
        },
        D = function (t) {
          (o("WAWebQplFlowWrapper").QPL.markerStart(h, {
            annotations: { string: { EntryPoint: "Product" } },
          }),
            o("WAWebManageCart").addToCart(
              b,
              o("WAWebProductCatalogContext").getProductCatalogContext(m),
              a,
            ),
            u == null || u(),
            t.stopPropagation());
        },
        x = function () {
          L(!0);
        },
        $ = function (t, n) {
          o("WAWebStopEvent").stopEvent(t);
          var e = o("WAWebStateUtils").unproxy(b);
          o("WAWebProductCatalogLogEvents").logDetailLinkClick({
            product: e,
            catalogContext: o(
              "WAWebProductCatalogContext",
            ).getProductCatalogContext(m),
          });
          var r = n ? o("WAWebLinkify").findLink(n) : null;
          if (r) {
            var a =
              e.signedShimmedUrl != null &&
              o(
                "WAWebBizGatingUtils",
              ).isUsingSignedShimmedLinkInCatalogueEnabled()
                ? e.signedShimmedUrl
                : null;
            o("WAWebExternalLink.react").openExternalLink(
              a != null ? a : r.url,
            );
          }
        };
      return d.jsxs(r("WAWebDrawerSection.react"), {
        theme: "padding-product",
        animation: !1,
        children: [
          d.jsx(o("WAWebText.react").WAWebTextTitle, {
            xstyle: [g.name, g.marginBottom12],
            children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
              text: b.name,
              selectable: !0,
            }),
          }),
          b.priceAmount1000 != null
            ? d.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
                className: "xcytdqz",
                color: "dark",
                theme: "plain",
                children: d.jsx(
                  r("WAWebProductCatalogProductPriceInfoText.react"),
                  { product: b, selectable: !0, direction: "inherit" },
                ),
              })
            : null,
          ((n = b.variantInfo) == null || (n = n.availability) == null
            ? void 0
            : n.listing) != null &&
            o("WAWebBizGatingUtils").isCatalogVariantsViewingEnabled() &&
            d.jsx(
              o("WAWebProductDetailsInfoVariants.react")
                .ProductCatalogDetailsInfoVariants,
              { product: b, productChanged: t.onProductChange },
            ),
          !i &&
            d.jsx(v, {
              product: b,
              isAvailable: s,
              isDescExpanded: R,
              hideRetailerID: t.hideRetailerID === !0,
              onReadMore: x,
              onClickUrl: $,
            }),
          !l && d.jsx(y, { onSendChat: T, isAvailable: s, product: b }),
          d.jsx(C, {
            collectionId: a,
            cartEnabled: k,
            isAvailable: s,
            product: b,
            onClick: D,
            context: m,
          }),
        ],
      });
    }
    ((S.displayName = S.name + " [from " + i.id + "]"), (l.default = S));
  },
  226,
);
