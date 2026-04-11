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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(7),
        n = e.isAvailable,
        r = e.onSendChat,
        a = e.product,
        i = o("WAWebUserPrefsMeUser").isMePnUser(a.catalogWid);
      if (
        i ||
        !r ||
        !a.fetchedFromServer ||
        !n ||
        a.reviewStatus !==
          o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.APPROVED
      )
        return null;
      var l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "Message business")), (t[0] = l))
        : (l = t[0]);
      var u = l,
        c;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = { className: "x78zum5 x2b8uid xefnzgg" }), (t[1] = c))
        : (c = t[1]);
      var m;
      t[2] !== r
        ? ((m = d.jsx(o("WAWebButton.react").Button, {
            testid: void 0,
            onClick: r,
            type: "secondary",
            stretch: !0,
            children: u,
          })),
          (t[2] = r),
          (t[3] = m))
        : (m = t[3]);
      var p;
      return (
        t[4] !== c || t[5] !== m
          ? ((p = d.jsx(
              "div",
              babelHelpers.extends({}, c, { title: u, children: m }),
            )),
            (t[4] = c),
            (t[5] = m),
            (t[6] = p))
          : (p = t[6]),
        p
      );
    }
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
      var t = o("react-compiler-runtime").c(24),
        n = e.hideRetailerID,
        a = e.isAvailable,
        i = e.isDescExpanded,
        l = e.onClickUrl,
        c = e.onReadMore,
        m = e.product,
        p;
      t[0] !== m.description
        ? ((p = r("isStringNullOrEmpty")(m.description)),
          (t[0] = m.description),
          (t[1] = p))
        : (p = t[1]);
      var _ = !p,
        f;
      t[2] !== m.retailerId
        ? ((f = r("isStringNullOrEmpty")(m.retailerId)),
          (t[2] = m.retailerId),
          (t[3] = f))
        : (f = t[3]);
      var h = !f,
        y = !r("isStringNullOrEmpty")(m.url);
      if (!_ && !y && !h) return null;
      var C =
          m.description != null &&
          m.description.length >
            r("WAWebConstantsDeprecated")
              .GROUP_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH,
        v;
      t[4] !== i ||
      t[5] !== c ||
      t[6] !== m.description ||
      t[7] !== C ||
      t[8] !== _
        ? ((v = _
            ? d.jsxs("div", {
                children: [
                  d.jsx(o("WAWebEmojiText.react").EmojiText, {
                    selectable: !0,
                    multiline: !0,
                    text: m.description,
                    textLimit: i
                      ? 1 / 0
                      : r("WAWebConstantsDeprecated")
                          .GROUP_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH,
                  }),
                  C && !i
                    ? d.jsxs("span", {
                        className: "x1ph7ams",
                        role: "button",
                        onClick: c,
                        children: [" ", s._(/*BTDS*/ "Read more")],
                      })
                    : null,
                ],
              })
            : null),
          (t[4] = i),
          (t[5] = c),
          (t[6] = m.description),
          (t[7] = C),
          (t[8] = _),
          (t[9] = v))
        : (v = t[9]);
      var S = v,
        R;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = (u || (u = r("stylex")))([g.description, g.marginBottom20])),
          (t[10] = R))
        : (R = t[10]);
      var L;
      t[11] !== a || t[12] !== l || t[13] !== m
        ? ((L = d.jsx(b, { isAvailable: a, product: m, onClick: l })),
          (t[11] = a),
          (t[12] = l),
          (t[13] = m),
          (t[14] = L))
        : (L = t[14]);
      var E;
      t[15] !== n || t[16] !== m.retailerId || t[17] !== h
        ? ((E =
            h && !n
              ? d.jsx("div", {
                  children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: m.retailerId,
                    selectable: !0,
                    direction: "inherit",
                  }),
                })
              : null),
          (t[15] = n),
          (t[16] = m.retailerId),
          (t[17] = h),
          (t[18] = E))
        : (E = t[18]);
      var k;
      return (
        t[19] !== S || t[20] !== R || t[21] !== L || t[22] !== E
          ? ((k = d.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
              theme: "plain",
              className: R,
              children: [S, L, E],
            })),
            (t[19] = S),
            (t[20] = R),
            (t[21] = L),
            (t[22] = E),
            (t[23] = k))
          : (k = t[23]),
        k
      );
    }
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
