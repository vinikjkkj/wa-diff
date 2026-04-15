__d(
  "WAWebOrderSummaryDrawer",
  [
    "fbt",
    "WASmaxInBizSettingsEnums",
    "WAWebBizGatingUtils",
    "WAWebCTWADataSharingModel",
    "WAWebChatEphemerality",
    "WAWebClickableLink.react",
    "WAWebCommonCTWADataSharing",
    "WAWebCurrencyUtils",
    "WAWebDataSharingOptOutOrUpsell.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebOrderDetailItems",
    "WAWebOrderDetailMath",
    "WAWebOrderDetailSectionContainer.react",
    "WAWebOrderDetailSellerProfile.react",
    "WAWebOrderDetailSharedStyles",
    "WAWebOrderEphemeralExemptionPopup.react",
    "WAWebOrderExpansionNotSupportedPopup.react",
    "WAWebOrderStatus",
    "WAWebOrderTotalPrice",
    "WAWebOrdersExpansionUtils",
    "WAWebSmb3pdConversionSignalAction",
    "WAWebSmbMarkAsXOrderAction",
    "WAWebText_DONOTUSE.react",
    "WAWebUISpacing",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStore",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useState,
      _ = {
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
      },
      f = function (t, n, r, a) {
        if (!t) return s._(/*BTDS*/ "Items must all have a price").toString();
        var e =
            o("WAWebBizGatingUtils").orderDetailsTotalOrderMinimumValue() * 1e3,
          i = o("WAWebBizGatingUtils").orderDetailsTotalMaxValue(a) * 1e3;
        return n < e
          ? s
              ._(
                /*BTDS*/ "Total cannot be less than {order_min_allowed_amount}",
                [
                  s._param(
                    "order_min_allowed_amount",
                    o("WAWebCurrencyUtils").formatAmount1000(r, e),
                  ),
                ],
              )
              .toString()
          : n > i
            ? s
                ._(
                  /*BTDS*/ "Total cannot be more than {order_max_allowed_amount}",
                  [
                    s._param(
                      "order_max_allowed_amount",
                      o("WAWebCurrencyUtils").formatAmount1000(r, i),
                    ),
                  ],
                )
                .toString()
            : null;
      };
    function g(t) {
      var n = o("react-compiler-runtime").c(24),
        a = t.additionalCharges,
        i = t.canChangeAdditionalCharges,
        l = t.canDisplayAdditionalCharges,
        u = t.currency,
        d = t.discount,
        m = t.onAdditionalCharges,
        p = t.shipping,
        f = t.subtotal,
        g = t.tax,
        h;
      n[0] !== a
        ? ((h =
            a != null &&
            a.discountText &&
            a.discountType === o("WAWebOrderDetailMath").PERCENTAGE_SYMBOL
              ? s._(/*BTDS*/ "({discount_percent}\u0025)", [
                  s._param("discount_percent", a.discountText),
                ])
              : null),
          (n[0] = a),
          (n[1] = h))
        : (h = n[1]);
      var y = h,
        C;
      n[2] !== a
        ? ((C =
            a != null &&
            a.taxText &&
            a.taxType === o("WAWebOrderDetailMath").PERCENTAGE_SYMBOL
              ? s._(/*BTDS*/ "({tax_percent}\u0025)", [
                  s._param("tax_percent", a.taxText),
                ])
              : null),
          (n[2] = a),
          (n[3] = C))
        : (C = n[3]);
      var b = C,
        v;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = [
            _.orderFieldsContainer,
            o("WAWebUISpacing").uiPadding.horiz16,
            o("WAWebUISpacing").uiPadding.bottom20,
          ]),
          (n[4] = v))
        : (v = n[4]);
      var S;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
            color: "secondary",
            size: "16",
            children: s._(/*BTDS*/ "Subtotal"),
          })),
          (n[5] = S))
        : (S = n[5]);
      var R;
      n[6] !== u || n[7] !== f
        ? ((R = o("WAWebCurrencyUtils").formatAmount1000(u, f)),
          (n[6] = u),
          (n[7] = f),
          (n[8] = R))
        : (R = n[8]);
      var L;
      n[9] !== R
        ? ((L = c.jsxs(o("WAWebFlex.react").FlexRow, {
            justify: "all",
            testid: void 0,
            children: [
              S,
              c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                color: "secondary",
                size: "16",
                children: R,
              }),
            ],
          })),
          (n[9] = R),
          (n[10] = L))
        : (L = n[10]);
      var E;
      n[11] !== i ||
      n[12] !== l ||
      n[13] !== u ||
      n[14] !== d ||
      n[15] !== y ||
      n[16] !== m ||
      n[17] !== p ||
      n[18] !== g ||
      n[19] !== b
        ? ((E =
            !!l &&
            c.jsxs(c.Fragment, {
              children: [
                d != null &&
                  c.jsxs(o("WAWebFlex.react").FlexRow, {
                    justify: "all",
                    testid: void 0,
                    children: [
                      c.jsxs(o("WAWebText_DONOTUSE.react").TextSpan, {
                        color: "secondary",
                        size: "16",
                        children: [s._(/*BTDS*/ "Discount"), " ", y],
                      }),
                      c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                        color: "secondary",
                        size: "16",
                        children: o("WAWebCurrencyUtils").formatAmount1000(
                          u,
                          -d,
                        ),
                      }),
                    ],
                  }),
                p != null &&
                  c.jsxs(o("WAWebFlex.react").FlexRow, {
                    justify: "all",
                    testid: void 0,
                    children: [
                      c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                        color: "secondary",
                        size: "16",
                        children: s._(/*BTDS*/ "Shipping"),
                      }),
                      c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                        color: "secondary",
                        size: "16",
                        children: o("WAWebCurrencyUtils").formatAmount1000(
                          u,
                          p,
                        ),
                      }),
                    ],
                  }),
                g != null &&
                  c.jsxs(o("WAWebFlex.react").FlexRow, {
                    justify: "all",
                    testid: void 0,
                    children: [
                      c.jsxs(o("WAWebText_DONOTUSE.react").TextSpan, {
                        color: "secondary",
                        size: "16",
                        children: [s._(/*BTDS*/ "Tax"), " ", b],
                      }),
                      c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                        color: "secondary",
                        size: "16",
                        children: o("WAWebCurrencyUtils").formatAmount1000(
                          u,
                          g,
                        ),
                      }),
                    ],
                  }),
                !!i &&
                  c.jsx(o("WAWebFlex.react").FlexRow, {
                    justify: "all",
                    align: "center",
                    children: c.jsx(r("WAWebClickableLink.react"), {
                      onClick: function () {
                        return m == null ? void 0 : m();
                      },
                      testid: void 0,
                      className: (e || (e = r("stylex")))(
                        r("WAWebOrderDetailSharedStyles").clickableText,
                        o("WAWebUISpacing").uiMargin.bottom0,
                      ),
                      children: c.jsx("span", {
                        children: s._(/*BTDS*/ "Add discount, shipping or tax"),
                      }),
                    }),
                  }),
              ],
            })),
          (n[11] = i),
          (n[12] = l),
          (n[13] = u),
          (n[14] = d),
          (n[15] = y),
          (n[16] = m),
          (n[17] = p),
          (n[18] = g),
          (n[19] = b),
          (n[20] = E))
        : (E = n[20]);
      var k;
      return (
        n[21] !== L || n[22] !== E
          ? ((k = c.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "stretch",
              xstyle: v,
              children: [L, E],
            })),
            (n[21] = L),
            (n[22] = E),
            (n[23] = k))
          : (k = n[23]),
        k
      );
    }
    var h = function (t, n, a, i) {
        if (
          r(
            "WAWebCommonCTWADataSharing",
          ).shouldDisplayDataSharingOrderOptOutOrUpsell(t, "order-create", n)
        )
          return c.jsx(
            o("WAWebDataSharingOptOutOrUpsell.react").DataSharingOptOutOrUpsell,
            {
              chats: [t],
              checkboxValue: a,
              onCheckboxToggle: i,
              theme: "order-create",
            },
          );
      },
      y = function () {
        return (
          o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() ===
          o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true
        );
      },
      C = function (t) {
        var e = t.amount,
          n = t.chat,
          a = t.currency,
          i = t.onSubmit,
          l = t.smbOptOut,
          s =
            (!o("WAWebOrdersExpansionUtils").isOrderExpansionEnabled() &&
              o("WAWebOrdersExpansionUtils").isSellerCountrySameAsBuyer(n)) ||
            o("WAWebOrdersExpansionUtils").isContactCountrySupported(n);
        if (!s) {
          o("WAWebModalManager").ModalManager.open(
            c.jsx(r("WAWebOrderExpansionNotSupportedPopup.react"), { chat: n }),
          );
          return;
        }
        var u = function () {
          (o("WAWebSmbMarkAsXOrderAction").markOrderAsCreatedAction(n, l),
            o(
              "WAWebSmb3pdConversionSignalAction",
            ).log3pdConversionSignalForOrders(
              {
                chat: n,
                orderStatus: o("WAWebOrderStatus").OrderStatus.Processing,
                paidData: { amount: String(e), currency: a, paid: !1 },
                type: "order_created",
              },
              l,
            ),
            i());
        };
        r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").KEYS.DISAPPEARING_MSG_DISCLAIMER_DIMISSED,
        ) !== !0 &&
        o("WAWebBizGatingUtils").inOrderMessagesEphemeralExceptionEnabled() &&
        o("WAWebChatEphemerality").isEphemeralSettingOn(n)
          ? o("WAWebModalManager").ModalManager.open(
              c.jsx(r("WAWebOrderEphemeralExemptionPopup.react"), {
                chat: n,
                onSubmit: u,
              }),
            )
          : u();
      };
    function b(e) {
      var t = o("react-compiler-runtime").c(110),
        n = e.additionalCharges,
        a = e.chat,
        i = e.currency,
        l = e.entryPoint,
        u = e.flatAmounts,
        d = e.onAddItem,
        b = e.onAdditionalCharges,
        v = e.onBack,
        S = e.onDeclineOrder,
        R = e.onDeleteItem,
        L = e.onItemQuantityChange,
        E = e.onPriceChange,
        k = e.onSubmit,
        I = e.orderItems,
        T = e.orderSubtotal,
        D = e.priceMap,
        x = l === void 0 ? null : l,
        $ = S === void 0 ? null : S,
        P = p(y),
        N = P[0],
        M = P[1],
        w,
        A;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = function () {
            var e = function () {
              var e =
                o(
                  "WAWebCTWADataSharingModel",
                ).CTWADataSharingModel.getValue() ===
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
          }),
          (A = []),
          (t[0] = w),
          (t[1] = A))
        : ((w = t[0]), (A = t[1])),
        m(w, A));
      var F, O, B, W, q, U, V, H, G, z, j, K, Q, X, Y, J;
      if (
        t[2] !== n ||
        t[3] !== a ||
        t[4] !== i ||
        t[5] !== u.discount ||
        t[6] !== u.shipping ||
        t[7] !== u.tax ||
        t[8] !== u.total ||
        t[9] !== d ||
        t[10] !== b ||
        t[11] !== v ||
        t[12] !== R ||
        t[13] !== L ||
        t[14] !== E ||
        t[15] !== k ||
        t[16] !== I ||
        t[17] !== T ||
        t[18] !== D ||
        t[19] !== N
      ) {
        var Z;
        t[36] !== D
          ? ((Z = function (t) {
              var e;
              return Number.isInteger((e = t.price) != null ? e : D[t.id]);
            }),
            (t[36] = D),
            (t[37] = Z))
          : (Z = t[37]);
        var ee = I.every(Z),
          te = I.length !== 0;
        ((W = r("WAWebDrawer.react")),
          t[38] === Symbol.for("react.memo_cache_sentinel")
            ? ((z = { surface: "unknown", viewName: "order-summary" }),
              (t[38] = z))
            : (z = t[38]));
        var ne;
        (t[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((ne = o("WAWebBizGatingUtils").isOrderContentOptimizationEnabled()
              ? s._(/*BTDS*/ "Charge buyer")
              : s._(/*BTDS*/ "Create order")),
            (t[39] = ne))
          : (ne = t[39]),
          t[40] !== v
            ? ((j = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                title: ne,
                onBack: v,
                type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              })),
              (t[40] = v),
              (t[41] = j))
            : (j = t[41]),
          (B = r("WAWebDrawerBody.react")));
        var re;
        t[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((re = [
              _.orderItemsContainer,
              o("WAWebUISpacing").uiPadding.top20,
              o("WAWebUISpacing").uiMargin.bottom0,
            ]),
            (t[42] = re))
          : (re = t[42]);
        var oe;
        t[43] === Symbol.for("react.memo_cache_sentinel")
          ? ((oe = c.jsx(r("WAWebOrderDetailSellerProfile.react"), {
              sellerWid: o(
                "WAWebUserPrefsMeUser",
              ).getMePnUserOrThrow_DO_NOT_USE(),
            })),
            (t[43] = oe))
          : (oe = t[43]);
        var ae;
        t[44] !== i ||
        t[45] !== d ||
        t[46] !== R ||
        t[47] !== L ||
        t[48] !== E ||
        t[49] !== I ||
        t[50] !== D
          ? ((ae = c.jsx(r("WAWebOrderDetailItems"), {
              currency: i,
              priceMap: D,
              items: I,
              onDeleteItem: R,
              onPriceChange: E,
              onAddItem: d,
              onItemQuantityChange: L,
            })),
            (t[44] = i),
            (t[45] = d),
            (t[46] = R),
            (t[47] = L),
            (t[48] = E),
            (t[49] = I),
            (t[50] = D),
            (t[51] = ae))
          : (ae = t[51]);
        var ie;
        t[52] !== n ||
        t[53] !== i ||
        t[54] !== u.discount ||
        t[55] !== u.shipping ||
        t[56] !== u.tax ||
        t[57] !== te ||
        t[58] !== b ||
        t[59] !== T
          ? ((ie = c.jsx(g, {
              tax: u.tax,
              discount: u.discount,
              shipping: u.shipping,
              currency: i,
              subtotal: T,
              additionalCharges: n,
              canDisplayAdditionalCharges: te,
              canChangeAdditionalCharges: te,
              onAdditionalCharges: b,
            })),
            (t[52] = n),
            (t[53] = i),
            (t[54] = u.discount),
            (t[55] = u.shipping),
            (t[56] = u.tax),
            (t[57] = te),
            (t[58] = b),
            (t[59] = T),
            (t[60] = ie))
          : (ie = t[60]);
        var le;
        t[61] !== ae || t[62] !== ie
          ? ((le = c.jsxs(r("WAWebOrderDetailSectionContainer.react"), {
              children: [oe, ae, ie],
            })),
            (t[61] = ae),
            (t[62] = ie),
            (t[63] = le))
          : (le = t[63]);
        var se;
        t[64] !== N
          ? ((se = function () {
              return M(!N);
            }),
            (t[64] = N),
            (t[65] = se))
          : (se = t[65]);
        var ue;
        (t[66] !== a || t[67] !== I.length || t[68] !== N || t[69] !== se
          ? ((ue = h(a, I.length, N, se)),
            (t[66] = a),
            (t[67] = I.length),
            (t[68] = N),
            (t[69] = se),
            (t[70] = ue))
          : (ue = t[70]),
          t[71] !== le || t[72] !== ue
            ? ((G = c.jsxs(r("WAWebDrawerSection.react"), {
                xstyle: re,
                theme: "refresh-padding-title",
                children: [le, ue],
              })),
              (t[71] = le),
              (t[72] = ue),
              (t[73] = G))
            : (G = t[73]),
          (O = r("WAWebDrawerSection.react")),
          (F = o("WAWebOrderTotalPrice").OrderTotalPrice),
          (K = o("WAWebUISpacing").uiPadding.all16),
          (Q = te),
          (X = !ee),
          (Y = "send-order-button"),
          t[74] !== i || t[75] !== u.total
            ? ((J = o("WAWebCurrencyUtils").formatAmount1000(i, u.total)),
              (t[74] = i),
              (t[75] = u.total),
              (t[76] = J))
            : (J = t[76]),
          t[77] === Symbol.for("react.memo_cache_sentinel")
            ? ((q = s._(/*BTDS*/ "Total")), (t[77] = q))
            : (q = t[77]),
          t[78] !== a ||
          t[79] !== i ||
          t[80] !== u.total ||
          t[81] !== k ||
          t[82] !== N
            ? ((U = function () {
                return C({
                  amount: u.total / 1e3,
                  chat: a,
                  currency: i,
                  onSubmit: k,
                  smbOptOut: N,
                });
              }),
              (t[78] = a),
              (t[79] = i),
              (t[80] = u.total),
              (t[81] = k),
              (t[82] = N),
              (t[83] = U))
            : (U = t[83]),
          t[84] === Symbol.for("react.memo_cache_sentinel")
            ? ((V = o("WAWebBizGatingUtils").isOrderContentOptimizationEnabled()
                ? s._(/*BTDS*/ "Send charge request")
                : s._(/*BTDS*/ "Send order")),
              (t[84] = V))
            : (V = t[84]),
          (H = f(ee, u.total, i, a)),
          (t[2] = n),
          (t[3] = a),
          (t[4] = i),
          (t[5] = u.discount),
          (t[6] = u.shipping),
          (t[7] = u.tax),
          (t[8] = u.total),
          (t[9] = d),
          (t[10] = b),
          (t[11] = v),
          (t[12] = R),
          (t[13] = L),
          (t[14] = E),
          (t[15] = k),
          (t[16] = I),
          (t[17] = T),
          (t[18] = D),
          (t[19] = N),
          (t[20] = F),
          (t[21] = O),
          (t[22] = B),
          (t[23] = W),
          (t[24] = q),
          (t[25] = U),
          (t[26] = V),
          (t[27] = H),
          (t[28] = G),
          (t[29] = z),
          (t[30] = j),
          (t[31] = K),
          (t[32] = Q),
          (t[33] = X),
          (t[34] = Y),
          (t[35] = J));
      } else
        ((F = t[20]),
          (O = t[21]),
          (B = t[22]),
          (W = t[23]),
          (q = t[24]),
          (U = t[25]),
          (V = t[26]),
          (H = t[27]),
          (G = t[28]),
          (z = t[29]),
          (j = t[30]),
          (K = t[31]),
          (Q = t[32]),
          (X = t[33]),
          (Y = t[34]),
          (J = t[35]));
      var ce;
      t[85] !== F ||
      t[86] !== x ||
      t[87] !== $ ||
      t[88] !== q ||
      t[89] !== U ||
      t[90] !== V ||
      t[91] !== H ||
      t[92] !== K ||
      t[93] !== Q ||
      t[94] !== X ||
      t[95] !== Y ||
      t[96] !== J
        ? ((ce = c.jsx(F, {
            xstyle: K,
            visible: Q,
            disabled: X,
            testid: void 0,
            totalPrice: J,
            title: q,
            onConfirm: U,
            confirmTitle: V,
            error: H,
            entryPoint: x,
            onDeclineOrder: $,
          })),
          (t[85] = F),
          (t[86] = x),
          (t[87] = $),
          (t[88] = q),
          (t[89] = U),
          (t[90] = V),
          (t[91] = H),
          (t[92] = K),
          (t[93] = Q),
          (t[94] = X),
          (t[95] = Y),
          (t[96] = J),
          (t[97] = ce))
        : (ce = t[97]);
      var de;
      t[98] !== O || t[99] !== ce
        ? ((de = c.jsx(O, { children: ce })),
          (t[98] = O),
          (t[99] = ce),
          (t[100] = de))
        : (de = t[100]);
      var me;
      t[101] !== B || t[102] !== G || t[103] !== de
        ? ((me = c.jsxs(B, { children: [G, de] })),
          (t[101] = B),
          (t[102] = G),
          (t[103] = de),
          (t[104] = me))
        : (me = t[104]);
      var pe;
      return (
        t[105] !== W || t[106] !== z || t[107] !== j || t[108] !== me
          ? ((pe = c.jsxs(W, { tsNavigationData: z, children: [j, me] })),
            (t[105] = W),
            (t[106] = z),
            (t[107] = j),
            (t[108] = me),
            (t[109] = pe))
          : (pe = t[109]),
        pe
      );
    }
    ((l.getErrorLabel = f),
      (l.OrderValues = g),
      (l.getDataSharing = h),
      (l.maybeShowDialogOnSubmit = C),
      (l.OrderSummaryDrawer = b));
  },
  226,
);
