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
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStore",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
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
        r = e.currency,
        a = e.totalPrice1000;
      if (!t) return s._(/*BTDS*/ "Items must all have a price").toString();
      var i =
          o("WAWebABProps").getABPropConfigValue(
            "order_details_total_order_minimum_value",
          ) * 1e3,
        l = o("WAWebOrderGatingUtils").orderDetailsTotalMaxValue(n) * 1e3;
      return a < i
        ? s
            ._(
              /*BTDS*/ "Total cannot be less than {order_min_allowed_amount}",
              [
                s._param(
                  "order_min_allowed_amount",
                  o("WAWebCurrencyUtils").formatAmount1000({
                    amount: i,
                    currency: r,
                  }),
                ),
              ],
            )
            .toString()
        : a > l
          ? s
              ._(
                /*BTDS*/ "Total cannot be more than {order_max_allowed_amount}",
                [
                  s._param(
                    "order_max_allowed_amount",
                    o("WAWebCurrencyUtils").formatAmount1000({
                      amount: l,
                      currency: r,
                    }),
                  ),
                ],
              )
              .toString()
          : null;
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(24),
        n = e.additionalCharges,
        a = e.canChangeAdditionalCharges,
        i = e.canDisplayAdditionalCharges,
        l = e.currency,
        c = e.discount,
        m = e.onAdditionalCharges,
        p = e.shipping,
        _ = e.subtotal,
        g = e.tax,
        h;
      t[0] !== n
        ? ((h =
            n != null &&
            n.discountText &&
            n.discountType ===
              o("WAWebOrderDetailMathPercentageSymbol").PERCENTAGE_SYMBOL
              ? s._(/*BTDS*/ "({discount_percent}\u0025)", [
                  s._param("discount_percent", n.discountText),
                ])
              : null),
          (t[0] = n),
          (t[1] = h))
        : (h = t[1]);
      var y = h,
        C;
      t[2] !== n
        ? ((C =
            n != null &&
            n.taxText &&
            n.taxType ===
              o("WAWebOrderDetailMathPercentageSymbol").PERCENTAGE_SYMBOL
              ? s._(/*BTDS*/ "({tax_percent}\u0025)", [
                  s._param("tax_percent", n.taxText),
                ])
              : null),
          (t[2] = n),
          (t[3] = C))
        : (C = t[3]);
      var b = C,
        v;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = [
            f.orderFieldsContainer,
            o("WDSPaddings.stylex").wdsPaddings.paddingHor16,
            o("WDSPaddings.stylex").wdsPaddings.paddingBottom20,
          ]),
          (t[4] = v))
        : (v = t[4]);
      var S;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = d.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDeemphasized",
            testid: "order-values-subtotal-label",
            children: s._(/*BTDS*/ "Subtotal"),
          })),
          (t[5] = S))
        : (S = t[5]);
      var R;
      t[6] !== l || t[7] !== _
        ? ((R = o("WAWebFormatUprAmount").formatUprAmount1000(l, _)),
          (t[6] = l),
          (t[7] = _),
          (t[8] = R))
        : (R = t[8]);
      var L;
      t[9] !== R
        ? ((L = d.jsxs(o("WAWebFlex.react").FlexRow, {
            justify: "all",
            testid: "order-details-subtotal-row",
            children: [
              S,
              d.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDeemphasized",
                testid: "order-values-subtotal-value",
                children: R,
              }),
            ],
          })),
          (t[9] = R),
          (t[10] = L))
        : (L = t[10]);
      var E;
      t[11] !== a ||
      t[12] !== i ||
      t[13] !== l ||
      t[14] !== c ||
      t[15] !== y ||
      t[16] !== m ||
      t[17] !== p ||
      t[18] !== g ||
      t[19] !== b
        ? ((E =
            !!i &&
            d.jsxs(d.Fragment, {
              children: [
                c != null &&
                  d.jsxs(o("WAWebFlex.react").FlexRow, {
                    justify: "all",
                    testid: "order-details-discount-row",
                    children: [
                      d.jsxs(r("WDSText.react"), {
                        type: "Body1",
                        colorName: "contentDeemphasized",
                        testid: "order-values-discount-label",
                        children: [s._(/*BTDS*/ "Discount"), " ", y],
                      }),
                      d.jsx(r("WDSText.react"), {
                        type: "Body1",
                        colorName: "contentDeemphasized",
                        testid: "order-values-discount-value",
                        children: o("WAWebFormatUprAmount").formatUprAmount1000(
                          l,
                          -c,
                        ),
                      }),
                    ],
                  }),
                p != null &&
                  d.jsxs(o("WAWebFlex.react").FlexRow, {
                    justify: "all",
                    testid: "order-details-shipping-row",
                    children: [
                      d.jsx(r("WDSText.react"), {
                        type: "Body1",
                        colorName: "contentDeemphasized",
                        testid: "order-values-shipping-label",
                        children: s._(/*BTDS*/ "Shipping"),
                      }),
                      d.jsx(r("WDSText.react"), {
                        type: "Body1",
                        colorName: "contentDeemphasized",
                        testid: "order-values-shipping-value",
                        children: o("WAWebFormatUprAmount").formatUprAmount1000(
                          l,
                          p,
                        ),
                      }),
                    ],
                  }),
                g != null &&
                  d.jsxs(o("WAWebFlex.react").FlexRow, {
                    justify: "all",
                    testid: "order-details-tax-row",
                    children: [
                      d.jsxs(r("WDSText.react"), {
                        type: "Body1",
                        colorName: "contentDeemphasized",
                        testid: "order-values-tax-label",
                        children: [s._(/*BTDS*/ "Tax"), " ", b],
                      }),
                      d.jsx(r("WDSText.react"), {
                        type: "Body1",
                        colorName: "contentDeemphasized",
                        testid: "order-values-tax-value",
                        children: o("WAWebFormatUprAmount").formatUprAmount1000(
                          l,
                          g,
                        ),
                      }),
                    ],
                  }),
                !!a &&
                  d.jsx(o("WAWebFlex.react").FlexRow, {
                    justify: "all",
                    align: "center",
                    children: d.jsx(r("WAWebClickableLink.react"), {
                      onClick: function () {
                        return m == null ? void 0 : m();
                      },
                      testid: "order-details-additional-charges-button",
                      className: (u || (u = r("stylex")))(
                        r("WAWebOrderDetailSharedStyles").clickableText,
                        o("WDSMargins.stylex").wdsMargins.marginBottom0,
                      ),
                      children: d.jsx("span", {
                        children: s._(/*BTDS*/ "Add discount, shipping or tax"),
                      }),
                    }),
                  }),
              ],
            })),
          (t[11] = a),
          (t[12] = i),
          (t[13] = l),
          (t[14] = c),
          (t[15] = y),
          (t[16] = m),
          (t[17] = p),
          (t[18] = g),
          (t[19] = b),
          (t[20] = E))
        : (E = t[20]);
      var k;
      return (
        t[21] !== L || t[22] !== E
          ? ((k = d.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "stretch",
              xstyle: v,
              children: [L, E],
            })),
            (t[21] = L),
            (t[22] = E),
            (t[23] = k))
          : (k = t[23]),
        k
      );
    }
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
        n = o("react-compiler-runtime").c(112),
        a = e.additionalCharges,
        i = e.chatId,
        l = e.currency,
        u = e.entryPoint,
        c = e.flatAmounts,
        m = e.onAddItem,
        v = e.onAdditionalCharges,
        S = e.onBack,
        R = e.onDeclineOrder,
        L = e.onDeleteItem,
        E = e.onItemQuantityChange,
        k = e.onPriceChange,
        I = e.onSubmit,
        T = e.orderItems,
        D = e.orderSubtotal,
        x = e.priceMap,
        $ = u === void 0 ? null : u,
        P = R === void 0 ? null : R,
        N = _(C),
        M = N[0],
        w = N[1],
        A =
          (t = o("useWAWebChatValues").useOptionalChatValues(i, [
            o("WAWebChatGetters").getAccountLid,
          ])) != null
            ? t
            : [void 0],
        F = A[0],
        O,
        B;
      (n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = function () {
            var e = function () {
              var e =
                o(
                  "WAWebCTWADataSharingModel",
                ).CTWADataSharingModel.getValue() ===
                o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true;
              w(e);
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
          }),
          (B = []),
          (n[0] = O),
          (n[1] = B))
        : ((O = n[0]), (B = n[1])),
        p(O, B));
      var W, q, U, V, H, G, z, j, K, Q, X, Y, J, Z, ee, te;
      if (
        n[2] !== F ||
        n[3] !== a ||
        n[4] !== i ||
        n[5] !== l ||
        n[6] !== c.discount ||
        n[7] !== c.shipping ||
        n[8] !== c.tax ||
        n[9] !== c.total ||
        n[10] !== m ||
        n[11] !== v ||
        n[12] !== S ||
        n[13] !== L ||
        n[14] !== E ||
        n[15] !== k ||
        n[16] !== I ||
        n[17] !== T ||
        n[18] !== D ||
        n[19] !== x ||
        n[20] !== M
      ) {
        var ne;
        n[37] !== x
          ? ((ne = function (t) {
              var e;
              return Number.isInteger((e = t.price) != null ? e : x[t.id]);
            }),
            (n[37] = x),
            (n[38] = ne))
          : (ne = n[38]);
        var re = T.every(ne),
          oe = T.length !== 0;
        ((V = r("WAWebDrawer.react")),
          n[39] === Symbol.for("react.memo_cache_sentinel")
            ? ((Q = { surface: "unknown", viewName: "order-summary" }),
              (n[39] = Q))
            : (Q = n[39]));
        var ae;
        (n[40] === Symbol.for("react.memo_cache_sentinel")
          ? ((ae = o(
              "WAWebOrderGatingUtils",
            ).isOrderContentOptimizationEnabled()
              ? s._(/*BTDS*/ "Charge buyer")
              : s._(/*BTDS*/ "Create order")),
            (n[40] = ae))
          : (ae = n[40]),
          n[41] !== S
            ? ((X = d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                title: ae,
                onBack: S,
                type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              })),
              (n[41] = S),
              (n[42] = X))
            : (X = n[42]),
          (U = r("WAWebDrawerBody.react")));
        var ie;
        n[43] === Symbol.for("react.memo_cache_sentinel")
          ? ((ie = [
              f.orderItemsContainer,
              o("WDSPaddings.stylex").wdsPaddings.paddingTop20,
              o("WDSMargins.stylex").wdsMargins.marginBottom0,
            ]),
            (n[43] = ie))
          : (ie = n[43]);
        var le;
        n[44] === Symbol.for("react.memo_cache_sentinel")
          ? ((le = d.jsx(r("WAWebOrderDetailSellerProfile.react"), {
              sellerWid: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
            })),
            (n[44] = le))
          : (le = n[44]);
        var se;
        n[45] !== l ||
        n[46] !== m ||
        n[47] !== L ||
        n[48] !== E ||
        n[49] !== k ||
        n[50] !== T ||
        n[51] !== x
          ? ((se = d.jsx(r("WAWebOrderDetailItems"), {
              currency: l,
              priceMap: x,
              items: T,
              onDeleteItem: L,
              onPriceChange: k,
              onAddItem: m,
              onItemQuantityChange: E,
            })),
            (n[45] = l),
            (n[46] = m),
            (n[47] = L),
            (n[48] = E),
            (n[49] = k),
            (n[50] = T),
            (n[51] = x),
            (n[52] = se))
          : (se = n[52]);
        var ue;
        n[53] !== a ||
        n[54] !== l ||
        n[55] !== c.discount ||
        n[56] !== c.shipping ||
        n[57] !== c.tax ||
        n[58] !== oe ||
        n[59] !== v ||
        n[60] !== D
          ? ((ue = d.jsx(h, {
              tax: c.tax,
              discount: c.discount,
              shipping: c.shipping,
              currency: l,
              subtotal: D,
              additionalCharges: a,
              canDisplayAdditionalCharges: oe,
              canChangeAdditionalCharges: oe,
              onAdditionalCharges: v,
            })),
            (n[53] = a),
            (n[54] = l),
            (n[55] = c.discount),
            (n[56] = c.shipping),
            (n[57] = c.tax),
            (n[58] = oe),
            (n[59] = v),
            (n[60] = D),
            (n[61] = ue))
          : (ue = n[61]);
        var ce;
        n[62] !== se || n[63] !== ue
          ? ((ce = d.jsxs(r("WAWebOrderDetailSectionContainer.react"), {
              children: [le, se, ue],
            })),
            (n[62] = se),
            (n[63] = ue),
            (n[64] = ce))
          : (ce = n[64]);
        var de;
        n[65] !== M
          ? ((de = function () {
              return w(!M);
            }),
            (n[65] = M),
            (n[66] = de))
          : (de = n[66]);
        var me;
        (n[67] !== F ||
        n[68] !== i ||
        n[69] !== T.length ||
        n[70] !== M ||
        n[71] !== de
          ? ((me = y({
              accountLid: F,
              chatId: i,
              itemsCount: T.length,
              onOptOutValueToggle: de,
              optOutValue: M,
            })),
            (n[67] = F),
            (n[68] = i),
            (n[69] = T.length),
            (n[70] = M),
            (n[71] = de),
            (n[72] = me))
          : (me = n[72]),
          n[73] !== ce || n[74] !== me
            ? ((K = d.jsxs(r("WAWebDrawerSection.react"), {
                xstyle: ie,
                theme: "refresh-padding-title",
                children: [ce, me],
              })),
              (n[73] = ce),
              (n[74] = me),
              (n[75] = K))
            : (K = n[75]),
          (q = r("WAWebDrawerSection.react")),
          (W = o("WAWebOrderTotalPrice").OrderTotalPrice),
          (Y = o("WDSPaddings.stylex").wdsPaddings.padding16),
          (J = oe),
          (Z = !re),
          (ee = "send-order-button"),
          n[76] !== l || n[77] !== c.total
            ? ((te = o("WAWebFormatUprAmount").formatUprAmount1000(l, c.total)),
              (n[76] = l),
              (n[77] = c.total),
              (n[78] = te))
            : (te = n[78]),
          n[79] === Symbol.for("react.memo_cache_sentinel")
            ? ((H = s._(/*BTDS*/ "Total")), (n[79] = H))
            : (H = n[79]),
          n[80] !== i ||
          n[81] !== l ||
          n[82] !== c.total ||
          n[83] !== I ||
          n[84] !== M
            ? ((G = function () {
                return b({
                  amount: c.total / 1e3,
                  chatId: i,
                  currency: l,
                  onSubmit: I,
                  smbOptOut: M,
                });
              }),
              (n[80] = i),
              (n[81] = l),
              (n[82] = c.total),
              (n[83] = I),
              (n[84] = M),
              (n[85] = G))
            : (G = n[85]),
          n[86] === Symbol.for("react.memo_cache_sentinel")
            ? ((z = o(
                "WAWebOrderGatingUtils",
              ).isOrderContentOptimizationEnabled()
                ? s._(/*BTDS*/ "Send charge request")
                : s._(/*BTDS*/ "Send order")),
              (n[86] = z))
            : (z = n[86]),
          (j = g({
            allItemsHavePrice: re,
            chatId: i,
            currency: l,
            totalPrice1000: c.total,
          })),
          (n[2] = F),
          (n[3] = a),
          (n[4] = i),
          (n[5] = l),
          (n[6] = c.discount),
          (n[7] = c.shipping),
          (n[8] = c.tax),
          (n[9] = c.total),
          (n[10] = m),
          (n[11] = v),
          (n[12] = S),
          (n[13] = L),
          (n[14] = E),
          (n[15] = k),
          (n[16] = I),
          (n[17] = T),
          (n[18] = D),
          (n[19] = x),
          (n[20] = M),
          (n[21] = W),
          (n[22] = q),
          (n[23] = U),
          (n[24] = V),
          (n[25] = H),
          (n[26] = G),
          (n[27] = z),
          (n[28] = j),
          (n[29] = K),
          (n[30] = Q),
          (n[31] = X),
          (n[32] = Y),
          (n[33] = J),
          (n[34] = Z),
          (n[35] = ee),
          (n[36] = te));
      } else
        ((W = n[21]),
          (q = n[22]),
          (U = n[23]),
          (V = n[24]),
          (H = n[25]),
          (G = n[26]),
          (z = n[27]),
          (j = n[28]),
          (K = n[29]),
          (Q = n[30]),
          (X = n[31]),
          (Y = n[32]),
          (J = n[33]),
          (Z = n[34]),
          (ee = n[35]),
          (te = n[36]));
      var pe;
      n[87] !== W ||
      n[88] !== $ ||
      n[89] !== P ||
      n[90] !== H ||
      n[91] !== G ||
      n[92] !== z ||
      n[93] !== j ||
      n[94] !== Y ||
      n[95] !== J ||
      n[96] !== Z ||
      n[97] !== ee ||
      n[98] !== te
        ? ((pe = d.jsx(W, {
            xstyle: Y,
            visible: J,
            disabled: Z,
            testid: ee,
            totalPrice: te,
            title: H,
            onConfirm: G,
            confirmTitle: z,
            error: j,
            entryPoint: $,
            onDeclineOrder: P,
          })),
          (n[87] = W),
          (n[88] = $),
          (n[89] = P),
          (n[90] = H),
          (n[91] = G),
          (n[92] = z),
          (n[93] = j),
          (n[94] = Y),
          (n[95] = J),
          (n[96] = Z),
          (n[97] = ee),
          (n[98] = te),
          (n[99] = pe))
        : (pe = n[99]);
      var _e;
      n[100] !== q || n[101] !== pe
        ? ((_e = d.jsx(q, { children: pe })),
          (n[100] = q),
          (n[101] = pe),
          (n[102] = _e))
        : (_e = n[102]);
      var fe;
      n[103] !== U || n[104] !== K || n[105] !== _e
        ? ((fe = d.jsxs(U, { children: [K, _e] })),
          (n[103] = U),
          (n[104] = K),
          (n[105] = _e),
          (n[106] = fe))
        : (fe = n[106]);
      var ge;
      return (
        n[107] !== V || n[108] !== Q || n[109] !== X || n[110] !== fe
          ? ((ge = d.jsxs(V, { tsNavigationData: Q, children: [X, fe] })),
            (n[107] = V),
            (n[108] = Q),
            (n[109] = X),
            (n[110] = fe),
            (n[111] = ge))
          : (ge = n[111]),
        ge
      );
    }
    ((l.getErrorLabel = g),
      (l.OrderValues = h),
      (l.getDataSharing = y),
      (l.maybeShowDialogOnSubmit = b),
      (l.OrderSummaryDrawer = v));
  },
  226,
);
