__d(
  "WAWebOrderSummaryDrawer",
  [
    "fbt",
    "WALogger",
    "WASmaxInBizSettingsEnums",
    "WAWebABProps",
    "WAWebCTWADataSharingModel",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebClickableLink.react",
    "WAWebCommonCTWADataSharing",
    "WAWebCurrencyUtils",
    "WAWebDataSharingOptOutOrUpsell.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WAWebFormatUprAmount",
    "WAWebGetMaybeChatById",
    "WAWebModalManager",
    "WAWebOrderDetailItems",
    "WAWebOrderDetailMathPercentageSymbol",
    "WAWebOrderDetailSectionContainer.react",
    "WAWebOrderDetailSellerProfile.react",
    "WAWebOrderDetailSharedStyles",
    "WAWebOrderEphemeralExemptionPopup.react",
    "WAWebOrderExpansionNotSupportedPopup.react",
    "WAWebOrderGatingUtils",
    "WAWebOrderStatus",
    "WAWebOrderTotalPrice",
    "WAWebOrdersExpansionUtils",
    "WAWebShowGenericErrorToastAction",
    "WAWebSmb3pdConversionSignalAction",
    "WAWebSmbMarkAsXOrderAction",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "WAWebUserUtils",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "WDSText.react",
    "justknobx",
    "react",
    "stylex",
    "useWAWebChatValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useState,
      f = {
        orderFieldsContainer: {
          columnGap: "x1mn2tih",
          rowGap: "x121sasi",
          $$css: !0,
        },
        orderItemsContainer: {
          flexShrink: "xs83m0k",
          overflowY: "x1odjw0f",
          $$css: !0,
        },
      };
    function g(e) {
      var t = e.allItemsHavePrice,
        n = e.chatId,
        a = e.currency,
        i = e.totalPrice1000;
      if (!t) return s._(/*BTDS*/ "").toString();
      var l =
          o("WAWebABProps").getABPropConfigValue(
            "order_details_total_order_minimum_value",
          ) * 1e3,
        u = o("WAWebOrderGatingUtils").orderDetailsTotalMaxValue(n) * 1e3;
      return i < l
        ? (r("justknobx")._("8427")
            ? s._(/*BTDS*/ "", [
                s._param(
                  "order_min_allowed_amount",
                  o("WAWebCurrencyUtils").formatAmount1000({
                    amount: l,
                    currency: a,
                  }),
                ),
              ])
            : s._(/*BTDS*/ "", [
                s._param(
                  "order_min_allowed_amount",
                  o("WAWebCurrencyUtils").formatAmount1000({
                    amount: l,
                    currency: a,
                  }),
                ),
              ])
          ).toString()
        : i > u
          ? (r("justknobx")._("8427")
              ? s._(/*BTDS*/ "", [
                  s._param(
                    "order_max_allowed_amount",
                    o("WAWebCurrencyUtils").formatAmount1000({
                      amount: u,
                      currency: a,
                    }),
                  ),
                ])
              : s._(/*BTDS*/ "", [
                  s._param(
                    "order_max_allowed_amount",
                    o("WAWebCurrencyUtils").formatAmount1000({
                      amount: u,
                      currency: a,
                    }),
                  ),
                ])
            ).toString()
          : null;
    }
    function h(e) {
      var t = e.additionalCharges,
        n = e.canChangeAdditionalCharges,
        a = e.canDisplayAdditionalCharges,
        i = e.currency,
        l = e.discount,
        c = e.onAdditionalCharges,
        m = e.shipping,
        p = e.subtotal,
        _ = e.tax,
        g =
          t != null &&
          t.discountText &&
          t.discountType ===
            o("WAWebOrderDetailMathPercentageSymbol").PERCENTAGE_SYMBOL
            ? s._(/*BTDS*/ "", [s._param("discount_percent", t.discountText)])
            : null,
        h =
          t != null &&
          t.taxText &&
          t.taxType ===
            o("WAWebOrderDetailMathPercentageSymbol").PERCENTAGE_SYMBOL
            ? s._(/*BTDS*/ "", [s._param("tax_percent", t.taxText)])
            : null;
      return d.jsxs(o("WAWebFlex.react").FlexColumn, {
        align: "stretch",
        xstyle: [
          f.orderFieldsContainer,
          o("WDSPaddings.stylex").wdsPaddings.paddingHor16,
          o("WDSPaddings.stylex").wdsPaddings.paddingBottom20,
        ],
        children: [
          d.jsxs(o("WAWebFlex.react").FlexRow, {
            justify: "all",
            testid: "order-details-subtotal-row",
            children: [
              d.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDeemphasized",
                testid: "order-values-subtotal-label",
                children: s._(/*BTDS*/ ""),
              }),
              d.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDeemphasized",
                testid: "order-values-subtotal-value",
                children: o("WAWebFormatUprAmount").formatUprAmount1000(i, p),
              }),
            ],
          }),
          !!a &&
            d.jsxs(d.Fragment, {
              children: [
                l != null &&
                  d.jsxs(o("WAWebFlex.react").FlexRow, {
                    justify: "all",
                    testid: "order-details-discount-row",
                    children: [
                      d.jsxs(r("WDSText.react"), {
                        type: "Body1",
                        colorName: "contentDeemphasized",
                        testid: "order-values-discount-label",
                        children: [s._(/*BTDS*/ ""), " ", g],
                      }),
                      d.jsx(r("WDSText.react"), {
                        type: "Body1",
                        colorName: "contentDeemphasized",
                        testid: "order-values-discount-value",
                        children: o("WAWebFormatUprAmount").formatUprAmount1000(
                          i,
                          -l,
                        ),
                      }),
                    ],
                  }),
                m != null &&
                  d.jsxs(o("WAWebFlex.react").FlexRow, {
                    justify: "all",
                    testid: "order-details-shipping-row",
                    children: [
                      d.jsx(r("WDSText.react"), {
                        type: "Body1",
                        colorName: "contentDeemphasized",
                        testid: "order-values-shipping-label",
                        children: s._(/*BTDS*/ ""),
                      }),
                      d.jsx(r("WDSText.react"), {
                        type: "Body1",
                        colorName: "contentDeemphasized",
                        testid: "order-values-shipping-value",
                        children: o("WAWebFormatUprAmount").formatUprAmount1000(
                          i,
                          m,
                        ),
                      }),
                    ],
                  }),
                _ != null &&
                  d.jsxs(o("WAWebFlex.react").FlexRow, {
                    justify: "all",
                    testid: "order-details-tax-row",
                    children: [
                      d.jsxs(r("WDSText.react"), {
                        type: "Body1",
                        colorName: "contentDeemphasized",
                        testid: "order-values-tax-label",
                        children: [s._(/*BTDS*/ ""), " ", h],
                      }),
                      d.jsx(r("WDSText.react"), {
                        type: "Body1",
                        colorName: "contentDeemphasized",
                        testid: "order-values-tax-value",
                        children: o("WAWebFormatUprAmount").formatUprAmount1000(
                          i,
                          _,
                        ),
                      }),
                    ],
                  }),
                !!n &&
                  d.jsx(o("WAWebFlex.react").FlexRow, {
                    justify: "all",
                    align: "center",
                    children: d.jsx(r("WAWebClickableLink.react"), {
                      onClick: function () {
                        return c == null ? void 0 : c();
                      },
                      testid: "order-details-additional-charges-button",
                      className: (u || (u = r("stylex")))(
                        r("WAWebOrderDetailSharedStyles").clickableText,
                        o("WDSMargins.stylex").wdsMargins.marginBottom0,
                      ),
                      children: d.jsx("span", { children: s._(/*BTDS*/ "") }),
                    }),
                  }),
              ],
            }),
        ],
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.accountLid,
        n = e.chatId,
        r = e.itemsCount,
        a = e.onOptOutValueToggle,
        i = e.optOutValue;
      if (
        o(
          "WAWebCommonCTWADataSharing",
        ).shouldDisplayDataSharingOrderOptOutOrUpsellFor(
          n,
          t,
          "order-create",
          r,
        )
      )
        return d.jsx(
          o("WAWebDataSharingOptOutOrUpsell.react").DataSharingOptOutOrUpsell,
          {
            customers: [{ accountLid: t, chatId: n }],
            checkboxValue: i,
            onCheckboxToggle: a,
            theme: "order-create",
          },
        );
    }
    function C() {
      return (
        o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() ===
        o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true
      );
    }
    function b(t) {
      var n = t.amount,
        a = t.chatId,
        i = t.currency,
        l = t.onSubmit,
        s = t.smbOptOut,
        u = o("WAWebGetMaybeChatById").getMaybeChatById(a);
      if (u == null) {
        (o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[order-summary-drawer] submit skipped, chat left the collection",
            ])),
        ),
          r("WAWebShowGenericErrorToastAction")());
        return;
      }
      var c =
        (!o("WAWebOrdersExpansionUtils").isOrderExpansionEnabled() &&
          o("WAWebOrdersExpansionUtils").isSellerCountrySameAsBuyer(u)) ||
        o("WAWebOrdersExpansionUtils").isContactCountrySupported(u);
      if (!c) {
        o("WAWebModalManager").ModalManager.open(
          d.jsx(r("WAWebOrderExpansionNotSupportedPopup.react"), { chatId: a }),
        );
        return;
      }
      var m = function () {
        (o("WAWebSmbMarkAsXOrderAction").markOrderAsCreatedAction(u, s),
          o(
            "WAWebSmb3pdConversionSignalAction",
          ).log3pdConversionSignalForOrders(
            {
              chat: u,
              orderStatus: o("WAWebOrderStatus").OrderStatus.Processing,
              paidData: { amount: String(n), currency: i, paid: !1 },
              type: "order_created",
            },
            s,
          ),
          l());
      };
      r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.DISAPPEARING_MSG_DISCLAIMER_DISMISSED,
      ) !== !0 &&
      o("WAWebOrderGatingUtils").inOrderMessagesEphemeralExceptionEnabled() &&
      o("WAWebChatEphemerality").isEphemeralSettingOn(u)
        ? o("WAWebModalManager").ModalManager.open(
            d.jsx(r("WAWebOrderEphemeralExemptionPopup.react"), {
              chatId: a,
              onSubmit: m,
            }),
          )
        : m();
    }
    function v(e) {
      var t,
        n = e.additionalCharges,
        a = e.chatId,
        i = e.currency,
        l = e.entryPoint,
        u = l === void 0 ? null : l,
        c = e.flatAmounts,
        m = e.onAddItem,
        v = e.onAdditionalCharges,
        S = e.onBack,
        R = e.onDeclineOrder,
        L = R === void 0 ? null : R,
        E = e.onDeleteItem,
        k = e.onItemQuantityChange,
        I = e.onPriceChange,
        T = e.onSubmit,
        D = e.orderItems,
        x = e.orderSubtotal,
        $ = e.priceMap,
        P = _(C),
        N = P[0],
        M = P[1],
        w =
          (t = o("useWAWebChatValues").useOptionalChatValues(a, [
            o("WAWebChatGetters").getAccountLid,
          ])) != null
            ? t
            : [void 0],
        A = w[0];
      p(function () {
        var e = function () {
          var e =
            o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() ===
            o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true;
          M(e);
        };
        return (
          o(
            "WAWebCTWADataSharingModel",
          ).CTWADataSharingModel.subscribeForUpdates(e),
          function () {
            o(
              "WAWebCTWADataSharingModel",
            ).CTWADataSharingModel.unsubscribeFromUpdates(e);
          }
        );
      }, []);
      var F = D.every(function (e) {
          var t;
          return Number.isInteger((t = e.price) != null ? t : $[e.id]);
        }),
        O = D.length !== 0;
      return d.jsxs(r("WAWebDrawer.react"), {
        tsNavigationData: { surface: "unknown", viewName: "order-summary" },
        children: [
          d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: o(
              "WAWebOrderGatingUtils",
            ).isOrderContentOptimizationEnabled()
              ? s._(/*BTDS*/ "")
              : s._(/*BTDS*/ ""),
            onBack: S,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          }),
          d.jsxs(r("WAWebDrawerBody.react"), {
            children: [
              d.jsxs(r("WAWebDrawerSection.react"), {
                xstyle: [
                  f.orderItemsContainer,
                  o("WDSPaddings.stylex").wdsPaddings.paddingTop20,
                  o("WDSMargins.stylex").wdsMargins.marginBottom0,
                ],
                theme: "refresh-padding-title",
                children: [
                  d.jsxs(r("WAWebOrderDetailSectionContainer.react"), {
                    children: [
                      d.jsx(r("WAWebOrderDetailSellerProfile.react"), {
                        sellerWid: o("WAWebUserUtils").getMeUserOrThrow(),
                      }),
                      d.jsx(r("WAWebOrderDetailItems"), {
                        currency: i,
                        priceMap: $,
                        items: D,
                        onDeleteItem: E,
                        onPriceChange: I,
                        onAddItem: m,
                        onItemQuantityChange: k,
                      }),
                      d.jsx(h, {
                        tax: c.tax,
                        discount: c.discount,
                        shipping: c.shipping,
                        currency: i,
                        subtotal: x,
                        additionalCharges: n,
                        canDisplayAdditionalCharges: O,
                        canChangeAdditionalCharges: O,
                        onAdditionalCharges: v,
                      }),
                    ],
                  }),
                  y({
                    accountLid: A,
                    chatId: a,
                    itemsCount: D.length,
                    onOptOutValueToggle: function () {
                      return M(!N);
                    },
                    optOutValue: N,
                  }),
                ],
              }),
              d.jsx(r("WAWebDrawerSection.react"), {
                children: d.jsx(o("WAWebOrderTotalPrice").OrderTotalPrice, {
                  xstyle: o("WDSPaddings.stylex").wdsPaddings.padding16,
                  visible: O,
                  disabled: !F,
                  testid: "send-order-button",
                  totalPrice: o("WAWebFormatUprAmount").formatUprAmount1000(
                    i,
                    c.total,
                  ),
                  title: s._(/*BTDS*/ ""),
                  onConfirm: function () {
                    return b({
                      amount: c.total / 1e3,
                      chatId: a,
                      currency: i,
                      onSubmit: T,
                      smbOptOut: N,
                    });
                  },
                  confirmTitle: o(
                    "WAWebOrderGatingUtils",
                  ).isOrderContentOptimizationEnabled()
                    ? s._(/*BTDS*/ "")
                    : s._(/*BTDS*/ ""),
                  error: g({
                    allItemsHavePrice: F,
                    chatId: a,
                    currency: i,
                    totalPrice1000: c.total,
                  }),
                  entryPoint: u,
                  onDeclineOrder: L,
                }),
              }),
            ],
          }),
        ],
      });
    }
    ((v.displayName = v.name + " [from " + i.id + "]"),
      (l.getErrorLabel = g),
      (l.OrderValues = h),
      (l.getDataSharing = y),
      (l.maybeShowDialogOnSubmit = b),
      (l.OrderSummaryDrawer = v));
  },
  226,
);
