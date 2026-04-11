__d(
  "WAWebProductCatalogListItem.react",
  [
    "fbt",
    "WAWebAccessibility.react",
    "WAWebAddToCartIcon.react",
    "WAWebBadge.react",
    "WAWebBizGatingUtils",
    "WAWebBusinessHoursIcon.react",
    "WAWebCartQuantityControls.react",
    "WAWebCatalogVariantHelper",
    "WAWebChatCell.react",
    "WAWebCopyToClipboard",
    "WAWebDeleteRefreshedIcon.react",
    "WAWebDevOnlyBadge.react",
    "WAWebDrawerContext",
    "WAWebDropdownItem.react",
    "WAWebDropdownItemSeparator.react",
    "WAWebEmojiText.react",
    "WAWebErrorIcon.react",
    "WAWebFlex.react",
    "WAWebFocusTracer",
    "WAWebKeyboardHotKeys.react",
    "WAWebLinkedCatalogHelper",
    "WAWebManageCart",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogLogEvents",
    "WAWebProductCatalogProductPriceInfoText.react",
    "WAWebProductCatalogProductThumb.react",
    "WAWebProductCollection",
    "WAWebProductSelectors",
    "WAWebProductTypes.flow",
    "WAWebQplFlowWrapper",
    "WAWebStateUtils",
    "WAWebUISpacing",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUserPrefsMeUser",
    "WDSButton.react",
    "WDSIconIcAddShoppingCart.react",
    "WDSIconIcLink.react",
    "WDSIconIcShare.react",
    "WDSIconIcVisibility.react",
    "WDSIconIcVisibilityOff.react",
    "gkx",
    "isStringNullOrEmpty",
    "qpl",
    "react",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useContext,
      m = c.useRef,
      p = c.useState,
      _ = {
        shareButton: {
          color: "xhslqc4",
          ":hover_color": "x12ln5q2",
          ":focus_color": "x1guw8n8",
          $$css: !0,
        },
      },
      f = r("qpl")._(774774794, "10"),
      g = function (t, n) {
        if (n === !0 && o("WAWebBizGatingUtils").isCountryOfOriginEnabled())
          return u.jsx(r("WAWebBadge.react"), {
            theme: "warning",
            Icon: o("WAWebErrorIcon.react").ErrorIcon,
          });
        switch (t) {
          case o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.NO_REVIEW:
          case o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.OUTDATED:
          case o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.PENDING:
            return u.jsx(r("WAWebBadge.react"), {
              theme: "pending",
              Icon: o("WAWebBusinessHoursIcon.react").BusinessHoursIcon,
            });
          case o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.REJECTED:
            return u.jsx(r("WAWebBadge.react"), {
              theme: "warning",
              Icon: o("WAWebErrorIcon.react").ErrorIcon,
            });
        }
      };
    function h(e) {
      "use no forget";
      var t,
        n = e.canManageCatalog,
        a = n === void 0 ? !1 : n,
        i = e.checkbox,
        l = e.collectionId,
        c = e.detail,
        h = e.disableOutOfStockAppearance,
        y = e.isMuted,
        C = e.managedFocus,
        b = C === void 0 ? !1 : C,
        v = e.onCartOpen,
        S = e.onClick,
        R = e.onProductDelete,
        L = e.onProductHideShow,
        E = e.onProductShare,
        k = e.theme,
        I = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        T = d(o("WAWebDrawerContext").DrawerContext),
        D = o("useWAWebModelValues").useModelValues(e.product, [
          "id",
          "name",
          "description",
          "availability",
          "url",
          "retailerId",
          "currency",
          "priceAmount1000",
          "salePriceAmount1000",
          "salePriceStartDate",
          "salePriceEndDate",
          "reviewStatus",
          "catalogWid",
          "productImageCollection",
          "imageHash",
          "imageCdnUrl",
          "isHidden",
          "isSanctioned",
          "maxAvailable",
          "variantInfo",
        ]),
        x = m(null),
        $ = m(null),
        P = p(null),
        N = P[0],
        M = P[1],
        w = p(!1),
        A = w[0],
        F = w[1],
        O = p(!1),
        B = O[0],
        W = O[1],
        q = function (t) {
          (t.preventDefault(), t.stopPropagation(), S == null || S());
        },
        U = function (t) {
          var e;
          (t.stopPropagation(),
            t.preventDefault(),
            (e = x.current) == null || e.mouseOver(),
            F(!0));
        },
        V = function () {
          var e;
          ((e = x.current) == null || e.mouseLeave(), F(!1));
        };
      o("useWAWebListener").useListener(e.active, D.id.toString(), I);
      var H = function () {
          return !(
            !D.variantInfo ||
            !D.variantInfo.types ||
            D.variantInfo.types.length === 0
          );
        },
        G = function (t) {
          var e = o("WAWebProductCatalogContext").getProductCatalogContext(T);
          (o("WAWebQplFlowWrapper").QPL.markerStart(f, {
            annotations: { string: { EntryPoint: "Catalog" } },
          }),
            e.session.isAccidental()
              ? o("WAWebQplFlowWrapper").QPL.markerDrop(f)
              : (o("WAWebManageCart").addToCart(D, e, l),
                t.preventDefault(),
                t.stopPropagation()));
        },
        z = function (t) {
          (t.preventDefault(),
            t.stopPropagation(),
            L && L(o("WAWebStateUtils").unproxy(D)));
        },
        j = function (t) {
          (t.preventDefault(), t.stopPropagation(), R && R(D));
        },
        K = function () {
          (M(null), r("WAWebFocusTracer").focus($.current));
        },
        Q = function () {
          var e = [],
            t =
              D.reviewStatus ===
                o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.APPROVED &&
              D.isHidden !== !0 &&
              D.isSanctioned !== !0;
          E != null &&
            t &&
            e.push(
              u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  testid: void 0,
                  action: function (t) {
                    (t.stopPropagation(), E(o("WAWebStateUtils").unproxy(D)));
                  },
                  icon: u.jsx(r("WDSIconIcShare.react"), {}),
                  children: s._(/*BTDS*/ "Share"),
                },
                "ShareLabel",
              ),
            );
          var n = o("WAWebUserPrefsMeUser").isMePnUser(D.catalogWid);
          return (
            n &&
              L &&
              !o(
                "WAWebLinkedCatalogHelper",
              ).shouldHideComponentForSMBLinkedCatalog() &&
              (D.isHidden
                ? e.push(
                    u.jsx(
                      o("WAWebDropdownItem.react").DropdownItem,
                      {
                        testid: void 0,
                        action: z,
                        icon: u.jsx(r("WDSIconIcVisibility.react"), {}),
                        children: s._(/*BTDS*/ "Show item"),
                      },
                      "ShowLabel",
                    ),
                  )
                : e.push(
                    u.jsx(
                      o("WAWebDropdownItem.react").DropdownItem,
                      {
                        testid: void 0,
                        action: z,
                        icon: u.jsx(r("WDSIconIcVisibilityOff.react"), {}),
                        children: s._(/*BTDS*/ "Hide item"),
                      },
                      "HideLabel",
                    ),
                  )),
            t &&
              v != null &&
              e.push(
                u.jsx(
                  o("WAWebDropdownItem.react").DropdownItem,
                  {
                    testid: void 0,
                    action: G,
                    icon: u.jsx(r("WDSIconIcAddShoppingCart.react"), {}),
                    children: s._(/*BTDS*/ "Add to cart"),
                  },
                  "AddToCartLabel",
                ),
              ),
            n &&
              R &&
              !o(
                "WAWebLinkedCatalogHelper",
              ).shouldHideComponentForSMBLinkedCatalog() &&
              (e.push(u.jsx(r("WAWebDropdownItemSeparator.react"), {})),
              e.push(
                u.jsx(
                  o("WAWebDropdownItem.react").DropdownItem,
                  {
                    testid: void 0,
                    action: j,
                    icon: u.jsx(
                      o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon,
                      {},
                    ),
                    theme: o("WAWebDropdownItem.react").DropdownItemThemeType
                      .Negative,
                    children: s._(/*BTDS*/ "Delete"),
                  },
                  "DeleteLabel",
                ),
              )),
            n &&
              !r("gkx")("26258") &&
              (e.push(u.jsx(r("WAWebDropdownItemSeparator.react"), {})),
              e.push(
                u.jsx(
                  o("WAWebDropdownItem.react").DropdownItem,
                  {
                    addSpacing: !0,
                    testid: void 0,
                    action: function () {
                      o("WAWebCopyToClipboard").copyTextToClipboard(
                        D.id.toString(),
                      );
                    },
                    children: u.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {
                      label: "Copy Product ID",
                    }),
                  },
                  "copy-id",
                ),
              )),
            e
          );
        },
        X = function (t) {
          if (N) {
            M(null);
            return;
          }
          var e = Q(),
            n = o("WAWebProductCatalogContext").getProductCatalogContext(T);
          (o("WAWebProductCatalogLogEvents").logCatalogContextMenuClick(
            D.id.toString(),
            n.session.isAccidental() ? void 0 : n,
          ),
            M({ menu: e, event: t.event, anchor: t.anchor }));
        },
        Y = (t = D.getPreviewImage()) == null ? void 0 : t.mediaData,
        J =
          k ||
          (!h &&
          o(
            "WAWebProductTypes.flow",
          ).PRODUCT_AVAILABILITY_UNAVAILABLE_VALUES.includes(D.availability)
            ? "product-out-of-stock"
            : "product"),
        Z = g(D.reviewStatus, D.isSanctioned),
        ee,
        te;
      D.isHidden &&
        ((ee = u.jsx(r("WDSIconIcVisibilityOff.react"), {})),
        (te = u.jsx(o("WAWebAccessibility.react").InvisibleLabel, {
          children: s._(/*BTDS*/ "Item is hidden"),
        })));
      var ne = Y
          ? u.jsx(o("WAWebProductCatalogProductThumb.react").ProductThumb, {
              theme: "list",
              mediaData: Y,
              badge: Z,
              overlayContent: ee,
            })
          : null,
        re = u.jsx(o("WAWebEmojiText.react").EmojiText, {
          text: D.name,
          ellipsify: !0,
          titlify: !0,
        }),
        oe = o("WAWebProductSelectors").isEmptyPrice(D)
          ? null
          : u.jsx(r("WAWebProductCatalogProductPriceInfoText.react"), {
              product: D,
              showAvailabilityNotice: !0,
            }),
        ae;
      if (o("WAWebBizGatingUtils").isCatalogVariantsViewingEnabled()) {
        var ie,
          le =
            D == null ||
            (ie = D.variantInfo) == null ||
            (ie = ie.listing_details) == null ||
            (ie = ie.description) == null
              ? void 0
              : ie.toLocaleUpperCase();
        if (le != null) ae = le;
        else {
          var se,
            ue =
              D == null ||
              (se = D.variantInfo) == null ||
              (se = se.types) == null
                ? void 0
                : se.find(function (e) {
                    var t;
                    return (
                      ((t = e.name) == null
                        ? void 0
                        : t.toLocaleLowerCase("en-US")) ===
                      o("WAWebCatalogVariantHelper").VariantOptionName.COLOR
                    );
                  });
          ue != null &&
            ue.options.length > 1 &&
            ue.name != null &&
            (ae = o("WAWebCatalogVariantHelper").getVariantTypeOptions(
              o("WAWebCatalogVariantHelper").VariantOptionName.COLOR,
              ue.options.length,
            ));
        }
      }
      ae == null &&
        !r("isStringNullOrEmpty")(D.description) &&
        (ae = D.description);
      var ce =
          oe != null || ae != null
            ? u.jsxs(u.Fragment, {
                children: [
                  u.jsx(o("WAWebFlex.react").FlexRow, {
                    children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                      text: ae,
                      ellipsify: !0,
                    }),
                  }),
                  u.jsx(o("WAWebFlex.react").FlexRow, { children: oe }),
                  te,
                ],
              })
            : null,
        de;
      N &&
        (de = u.jsx(o("WAWebUimUie.react").UIE, {
          displayName: "ChatContextMenu",
          escapable: !0,
          popable: !0,
          dismissOnWindowResize: !0,
          requestDismiss: K,
          children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: N }),
        }));
      var me;
      o("WAWebBizGatingUtils").isQuantityControlsFeatureEnabled()
        ? H()
          ? (me = u.jsx(
              o("WAWebCartQuantityControls.react")
                .WAWebVariantCartQuantityControls,
              { product: D, collectionId: l },
            ))
          : (me =
              D.availability ===
              o("WAWebProductTypes.flow").ProductAvailability.IN_STOCK
                ? u.jsx(
                    o("WAWebCartQuantityControls.react")
                      .WAWebCartQuantityControls,
                    { product: D, context: T, collectionId: l },
                  )
                : null)
        : (me = u.jsx(r("WAWebAddToCartIcon.react"), { onClick: G }));
      var pe = u.jsx(o("WAWebFlex.react").FlexRow, {
          xstyle: o("WAWebUISpacing").uiMargin.horiz5,
          children:
            v != null &&
            D.reviewStatus ===
              o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.APPROVED
              ? me
              : null,
        }),
        _e = u.jsx(o("WAWebFlex.react").FlexRow, {
          xstyle: o("WAWebUISpacing").uiMargin.horiz5,
          children:
            E != null &&
            D.reviewStatus ===
              o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.APPROVED
              ? u.jsx(r("WDSButton.react"), {
                  "aria-label": "",
                  xstyle: _.shareButton,
                  onPress: function (t) {
                    (t.stopPropagation(), E(o("WAWebStateUtils").unproxy(D)));
                  },
                  Icon: r("WDSIconIcLink.react"),
                  variant: "borderless",
                })
              : null,
        }),
        fe =
          c != null
            ? c
            : a
              ? null
              : u.jsxs(
                  "div",
                  babelHelpers.extends(
                    {},
                    {
                      0: { className: "x1s85apg" },
                      1: { className: "x78zum5" },
                    }[
                      !!(
                        B ||
                        A ||
                        o(
                          "WAWebBizGatingUtils",
                        ).isQuantityControlsFeatureEnabled()
                      ) << 0
                    ],
                    { children: [pe, _e] },
                  ),
                );
      return u.jsxs(
        o("WAWebKeyboardHotKeys.react").HotKeys,
        babelHelpers.extends(
          {
            ref: $,
            handlers: {
              space: q,
              right: function () {
                var e;
                r("WAWebFocusTracer").focus(
                  (e = x.current) == null ? void 0 : e.getContextMenuRef(),
                );
              },
            },
            tabIndex: 0,
            role: "button",
            onMouseEnter: function () {
              return W(!0);
            },
            onMouseLeave: function () {
              return W(!1);
            },
          },
          b
            ? void 0
            : {
                onFocus: U,
                onBlur: V,
                onMouseLeave: function () {
                  (V(), W(!1));
                },
              },
          {
            children: [
              u.jsx(
                r("WAWebChatCell.react"),
                {
                  testid: void 0,
                  customImage: !0,
                  image: ne,
                  primary: re,
                  onClick: S,
                  secondary: ce,
                  theme: J,
                  active: A || !!N,
                  checkbox: i,
                  idle: y,
                  detail: fe,
                  contextEnabled: function () {
                    return a;
                  },
                  onContext: X,
                  ref: x,
                  contextMenuControlled: !0,
                },
                D.id.toString(),
              ),
              de,
            ],
          },
        ),
      );
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
