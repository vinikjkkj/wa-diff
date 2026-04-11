__d(
  "WAWebOrderStatusUpdateDrawer.react",
  [
    "fbt",
    "WALogger",
    "WASmaxInBizSettingsEnums",
    "WAWebBizGatingUtils",
    "WAWebBizOrderStatusLabels",
    "WAWebBizSendOrderAction",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileUtils",
    "WAWebButton.react",
    "WAWebCTWADataSharingModel",
    "WAWebCmd",
    "WAWebCommonCTWADataSharing",
    "WAWebConfirmPopup.react",
    "WAWebConstantsDeprecated",
    "WAWebDataSharingOptOutOrUpsell.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebDrawerSection.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebOrderDetailMath",
    "WAWebOrderDetailRadioButton.react",
    "WAWebOrderDetailsActionCategory",
    "WAWebOrderDetailsActionsSmbWamEvent",
    "WAWebOrderPaymentStatus",
    "WAWebOrderStatus",
    "WAWebOrdersExpansionUtils",
    "WAWebRichTextField.react",
    "WAWebSmb3pdConversionSignalAction",
    "WAWebSmbMarkAsXOrderAction",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumOrderDetailsCreationAction",
    "WDSSwitch.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = ["ref"],
      d,
      m,
      p = m || (m = o("react")),
      _ = m,
      f = _.useEffect,
      g = _.useMemo,
      h = _.useState,
      y = o("WAWebBizGatingUtils").isOrderStatusM1Enabled()
        ? [
            o("WAWebOrderStatus").OrderStatus.PaymentRequested,
            o("WAWebOrderStatus").OrderStatus.PreparingToShip,
            o("WAWebOrderStatus").OrderStatus.Shipped,
            o("WAWebOrderStatus").OrderStatus.Delivered,
            o("WAWebOrderStatus").OrderStatus.Canceled,
          ]
        : [
            o("WAWebOrderStatus").OrderStatus.Processing,
            o("WAWebOrderStatus").OrderStatus.Shipped,
            o("WAWebOrderStatus").OrderStatus.Complete,
            o("WAWebOrderStatus").OrderStatus.Canceled,
          ],
      C = {
        checkboxContainer: {
          rowGap: "x1na6gtj",
          columnGap: "x1qgv0r9",
          $$css: !0,
        },
        marginBottom16: { marginBottom: "x1ua1l7f", $$css: !0 },
        marginBottom24: { marginBottom: "x14mdic9", $$css: !0 },
        marginTop16: { marginTop: "x98l61r", $$css: !0 },
        marginTop8: { marginTop: "x1380le5", $$css: !0 },
        paddingEnd24: { paddingInlineEnd: "xyo0t3i", $$css: !0 },
        paddingHoriz16: {
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        paddingTop16: { paddingTop: "x1p57kb1", $$css: !0 },
        spacer: {
          borderTopColor: "xx42vgk",
          borderTopStyle: "x13fuv20",
          borderTopWidth: "x178xt8z",
          height: "xqtp20y",
          $$css: !0,
        },
      };
    function b(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.xstyle,
        a;
      t[0] !== n
        ? ((a = (d || (d = r("stylex"))).props(C.spacer, C.marginTop16, n)),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i;
      return (
        t[2] !== a
          ? ((i = p.jsx("div", babelHelpers.extends({}, a))),
            (t[2] = a),
            (t[3] = i))
          : (i = t[3]),
        i
      );
    }
    var v = function (t, n, a, i) {
        if (
          r(
            "WAWebCommonCTWADataSharing",
          ).shouldDisplayDataSharingOrderOptOutOrUpsell(t, "order-update", n)
        )
          return p.jsx(
            o("WAWebDataSharingOptOutOrUpsell.react").DataSharingOptOutOrUpsell,
            {
              chats: [t],
              theme: "order-update",
              onCheckboxToggle: function () {
                return i(!a);
              },
              checkboxValue: a,
            },
          );
      },
      S = function () {
        return (
          o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() ===
          o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true
        );
      };
    function R(e) {
      var t = o("react-compiler-runtime").c(74),
        n,
        a;
      t[0] !== e
        ? ((a = e.ref),
          (n = babelHelpers.objectWithoutPropertiesLoose(e, c)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = a))
        : ((n = t[1]), (a = t[2]));
      var i = h(S),
        l = i[0],
        u = i[1],
        d = h(""),
        m = d[0],
        _ = d[1],
        g;
      t[3] !== n.chat || t[4] !== n.orderInfo.referenceId
        ? ((g = o("WAWebOrderStatus").findOrderStatus(
            n.chat,
            n.orderInfo.referenceId,
          )),
          (t[3] = n.chat),
          (t[4] = n.orderInfo.referenceId),
          (t[5] = g))
        : (g = t[5]);
      var R = g,
        T;
      t[6] !== n.chat || t[7] !== n.orderInfo.referenceId
        ? ((T = o("WAWebOrderPaymentStatus").findLastOrderPaymentStatusInfo(
            n.chat,
            n.orderInfo.referenceId,
          )),
          (t[6] = n.chat),
          (t[7] = n.orderInfo.referenceId),
          (t[8] = T))
        : (T = t[8]);
      var D = T,
        x = h(R),
        $ = x[0],
        P = x[1],
        N = h(
          (D == null ? void 0 : D.paymentStatus) ===
            o("WAWebOrderPaymentStatus").OrderPaymentStatus.Captured,
        ),
        M = N[0],
        w = N[1],
        A,
        F;
      (t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = function () {
            var e = function (t) {
              return u(
                t === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true,
              );
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
          (F = []),
          (t[9] = A),
          (t[10] = F))
        : ((A = t[9]), (F = t[10])),
        f(A, F));
      var O = n,
        B = O.chat,
        W = O.orderInfo,
        q = O.sellerJid,
        U;
      t[11] !== m ||
      t[12] !== W.externalPaymentConfigurations ||
      t[13] !== n.entryPoint
        ? ((U = function () {
            var e,
              t,
              a =
                (e =
                  (t = W.externalPaymentConfigurations) == null ||
                  (t = t.at(0)) == null
                    ? void 0
                    : t.type) != null
                  ? e
                  : "no_method_confirmed";
            new (o(
              "WAWebOrderDetailsActionsSmbWamEvent",
            ).OrderDetailsActionsSmbWamEvent)({
              actionCategory: String(
                r("WAWebOrderDetailsActionCategory").ORDER_DETAILS_MANAGEMENT,
              ),
              hasNote: !!m,
              orderDetailEntryPoint: String(n.entryPoint),
              orderDetailsCreationAction: o(
                "WAWebWamEnumOrderDetailsCreationAction",
              ).ORDER_DETAILS_CREATION_ACTION.SEND_MARK_AS_PAID,
              paymentStatus: !0,
              paymentType: a,
            }).commit();
          }),
          (t[11] = m),
          (t[12] = W.externalPaymentConfigurations),
          (t[13] = n.entryPoint),
          (t[14] = U))
        : (U = t[14]);
      var V = U,
        H;
      if (
        t[15] !== B ||
        t[16] !== l ||
        t[17] !== M ||
        t[18] !== V ||
        t[19] !== m ||
        t[20] !== W ||
        t[21] !== $ ||
        t[22] !== n.entryPoint ||
        t[23] !== q
      ) {
        var G = function (t, a) {
            var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              i = o("WAWebBusinessProfileUtils").hasCatalog(
                o(
                  "WAWebBusinessProfileCollection",
                ).BusinessProfileCollection.get(e),
              );
            (new (o(
              "WAWebOrderDetailsActionsSmbWamEvent",
            ).OrderDetailsActionsSmbWamEvent)({
              actionCategory: String(
                r("WAWebOrderDetailsActionCategory").ORDER_DETAILS_MANAGEMENT,
              ),
              hasCatalog: i,
              hasNote: !!m,
              orderDetailEntryPoint: String(n.entryPoint),
              orderDetailsCreationAction: o(
                "WAWebWamEnumOrderDetailsCreationAction",
              ).ORDER_DETAILS_CREATION_ACTION.SEND_ORDER_STATUS,
            }).commit(),
              o("WAWebBizSendOrderAction")
                .sendOrderStatusMessageAsMerchant({
                  chat: B,
                  offset: o("WAWebOrderDetailMath").DEFAULT_OFFSET,
                  orderInfo: W,
                  orderNote: m,
                  orderStatus: t,
                  paymentMethod: null,
                  paymentStatus: a
                    ? o("WAWebOrderPaymentStatus").OrderPaymentStatus.Captured
                    : o("WAWebOrderPaymentStatus").OrderPaymentStatus.Pending,
                  sellerJid: q,
                })
                .catch(I),
              o("WAWebSmbMarkAsXOrderAction").markOrderAsUpdatedStatusAction(
                B,
                l,
                $,
                M,
              ),
              o(
                "WAWebSmb3pdConversionSignalAction",
              ).log3pdConversionSignalForOrders(
                {
                  chat: B,
                  orderStatus: $,
                  paidData: {
                    amount: String(W.totalAmount),
                    currency: W.currency,
                    paid: M,
                  },
                  type: "order_updated",
                },
                l,
              ),
              o("WAWebCmd").Cmd.openChatFromUnread({ chat: B }).catch(k));
          },
          z = function (t, n, r) {
            o("WAWebBizSendOrderAction")
              .sendOrderPaymentStatusMessageAsMerchant({
                chat: B,
                offset: o("WAWebOrderDetailMath").DEFAULT_OFFSET,
                orderInfo: W,
                orderNote: t ? m : null,
                orderStatus: n,
                paymentMethod: null,
                paymentStatus: r
                  ? o("WAWebOrderPaymentStatus").OrderPaymentStatus.Captured
                  : o("WAWebOrderPaymentStatus").OrderPaymentStatus.Pending,
                sellerJid: q,
              })
              .finally(function () {
                V();
              });
          };
        ((H = function (t, n, r, a) {
          (o("WAWebDrawerManager").DrawerManager.closeDrawerRight(),
            t &&
              (z(!n, r, a),
              o(
                "WAWebSmb3pdConversionSignalAction",
              ).log3pdConversionSignalForOrders(
                {
                  chat: B,
                  isPaidStateChanged: !0,
                  orderStatus: $,
                  paidData: {
                    amount: String(W.totalAmount),
                    currency: W.currency,
                    paid: M,
                  },
                  type: "order_updated",
                },
                l,
              )),
            n && G(r, a));
        }),
          (t[15] = B),
          (t[16] = l),
          (t[17] = M),
          (t[18] = V),
          (t[19] = m),
          (t[20] = W),
          (t[21] = $),
          (t[22] = n.entryPoint),
          (t[23] = q),
          (t[24] = H));
      } else H = t[24];
      var j;
      t[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = function (t) {
            return y.findIndex(function (e) {
              return e === t;
            });
          }),
          (t[25] = j))
        : (j = t[25]);
      var K = j,
        Q;
      t[26] !== M ||
      t[27] !== $ ||
      t[28] !== (D == null ? void 0 : D.paymentStatus) ||
      t[29] !== R ||
      t[30] !== H
        ? ((Q = function () {
            var e = K($),
              t = K(R),
              n =
                (D == null ? void 0 : D.paymentStatus) ===
                o("WAWebOrderPaymentStatus").OrderPaymentStatus.Captured,
              a = e !== t,
              i = n !== M,
              l = !a && !i,
              u = e < t,
              c = $,
              d = M;
            (o("WAWebBizGatingUtils").isOrderStatusM1Enabled() &&
              (i &&
                (M
                  ? $ === o("WAWebOrderStatus").OrderStatus.PaymentRequested &&
                    (c = o("WAWebOrderStatus").OrderStatus.PreparingToShip)
                  : $ === o("WAWebOrderStatus").OrderStatus.PreparingToShip &&
                    (c = o("WAWebOrderStatus").OrderStatus.PaymentRequested)),
              a &&
                M &&
                $ === o("WAWebOrderStatus").OrderStatus.PaymentRequested &&
                (d = !1)),
              l
                ? o("WAWebModalManager").ModalManager.open(
                    p.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                      title: s._(/*BTDS*/ "Status already sent"),
                      okText: r("WAWebFbtCommon")("OK"),
                      onOK: E,
                      tsNavigationData: {
                        surface: "unknown",
                        viewName: "order-status-update",
                      },
                      children: o(
                        "WAWebBizGatingUtils",
                      ).isOrderContentOptimizationEnabled()
                        ? s._(
                            /*BTDS*/ "You already updated this status to {originalOrderStatus}",
                            [
                              s._param(
                                "originalOrderStatus",
                                o(
                                  "WAWebBizOrderStatusLabels",
                                ).getWAWebBizOrderStatusLabel(R),
                              ),
                            ],
                          )
                        : s._(
                            /*BTDS*/ "You have already updated this order to {originalOrderStatus}",
                            [
                              s._param(
                                "originalOrderStatus",
                                o(
                                  "WAWebBizOrderStatusLabels",
                                ).getWAWebBizOrderStatusLabel(R),
                              ),
                            ],
                          ),
                    }),
                  )
                : u
                  ? o("WAWebModalManager").ModalManager.open(
                      p.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                        title: s._(/*BTDS*/ "Update sent status?"),
                        okText: s._(/*BTDS*/ "Update"),
                        tsNavigationData: {
                          surface: "unknown",
                          viewName: "order-status-update",
                        },
                        onOK: function () {
                          (H(i, a, c, d),
                            o("WAWebModalManager").ModalManager.close());
                        },
                        cancelText: s._(/*BTDS*/ "Cancel"),
                        onCancel: L,
                        children: o(
                          "WAWebBizGatingUtils",
                        ).isOrderContentOptimizationEnabled()
                          ? s._(
                              /*BTDS*/ "You already marked the status as {originalOrderStatus}. Are you sure you want to update it to {orderStatus}?",
                              [
                                s._param(
                                  "originalOrderStatus",
                                  o(
                                    "WAWebBizOrderStatusLabels",
                                  ).getWAWebBizOrderStatusLabel(R),
                                ),
                                s._param(
                                  "orderStatus",
                                  o(
                                    "WAWebBizOrderStatusLabels",
                                  ).getWAWebBizOrderStatusLabel($),
                                ),
                              ],
                            )
                          : s._(
                              /*BTDS*/ "Your customer has already seen this order marked as {originalOrderStatus}. Do you want update it to {orderStatus}?",
                              [
                                s._param(
                                  "originalOrderStatus",
                                  o(
                                    "WAWebBizOrderStatusLabels",
                                  ).getWAWebBizOrderStatusLabel(R),
                                ),
                                s._param(
                                  "orderStatus",
                                  o(
                                    "WAWebBizOrderStatusLabels",
                                  ).getWAWebBizOrderStatusLabel($),
                                ),
                              ],
                            ),
                      }),
                    )
                  : H(i, a, c, d));
          }),
          (t[26] = M),
          (t[27] = $),
          (t[28] = D == null ? void 0 : D.paymentStatus),
          (t[29] = R),
          (t[30] = H),
          (t[31] = Q))
        : (Q = t[31]);
      var X = Q,
        Y;
      t[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y = s._(/*BTDS*/ "Add a note")), (t[32] = Y))
        : (Y = t[32]);
      var J = Y,
        Z;
      t[33] !== M || t[34] !== $
        ? ((Z = function () {
            var e = !M;
            (w(e),
              e &&
                $ === o("WAWebOrderStatus").OrderStatus.PaymentRequested &&
                P(o("WAWebOrderStatus").OrderStatus.PreparingToShip));
          }),
          (t[33] = M),
          (t[34] = $),
          (t[35] = Z))
        : (Z = t[35]);
      var ee = Z,
        te = n.onBack,
        ne;
      t[36] === Symbol.for("react.memo_cache_sentinel")
        ? ((ne = { surface: "unknown", viewName: "order-status-update" }),
          (t[36] = ne))
        : (ne = t[36]);
      var re;
      t[37] === Symbol.for("react.memo_cache_sentinel")
        ? ((re = o("WAWebBizGatingUtils").isOrderContentOptimizationEnabled()
            ? s._(/*BTDS*/ "Update status")
            : s._(/*BTDS*/ "Update order status")),
          (t[37] = re))
        : (re = t[37]);
      var oe;
      t[38] !== n.onBack
        ? ((oe = p.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: re,
            onBack: n.onBack,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          })),
          (t[38] = n.onBack),
          (t[39] = oe))
        : (oe = t[39]);
      var ae;
      t[40] !== M || t[41] !== ee
        ? ((ae =
            o("WAWebOrdersExpansionUtils").isOrderExpansionEnabled() &&
            p.jsxs(p.Fragment, {
              children: [
                p.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  xstyle: [C.paddingTop16, C.paddingHoriz16],
                  children: [
                    p.jsx(o("WAWebFlex.react").FlexColumn, {
                      xstyle: C.paddingEnd24,
                      children: p.jsx(r("WDSSwitch.react"), {
                        value: M,
                        onChange: ee,
                        testid: void 0,
                      }),
                    }),
                    p.jsx("div", { children: s._(/*BTDS*/ "Paid") }),
                  ],
                }),
                p.jsx(b, { xstyle: C.marginBottom16 }),
              ],
            })),
          (t[40] = M),
          (t[41] = ee),
          (t[42] = ae))
        : (ae = t[42]);
      var ie;
      t[43] === Symbol.for("react.memo_cache_sentinel")
        ? ((ie = { className: "x1tiyuxx x1nbhmlj xdx6fka xvtqlqk" }),
          (t[43] = ie))
        : (ie = t[43]);
      var le;
      t[44] !== M || t[45] !== $
        ? ((le = y.map(function (e) {
            return p.jsx(
              r("WAWebOrderDetailRadioButton.react"),
              {
                testid: void 0,
                label: o(
                  "WAWebBizOrderStatusLabels",
                ).getWAWebBizOrderStatusLabel(e),
                isCanceled: e === o("WAWebOrderStatus").OrderStatus.Canceled,
                checked: $ === e,
                onClick: function () {
                  (P(e),
                    e === o("WAWebOrderStatus").OrderStatus.PaymentRequested &&
                      M &&
                      w(!1));
                },
              },
              e,
            );
          })),
          (t[44] = M),
          (t[45] = $),
          (t[46] = le))
        : (le = t[46]);
      var se;
      t[47] !== le
        ? ((se = p.jsx(
            "div",
            babelHelpers.extends({}, ie, {
              children: p.jsx(o("WAWebFlex.react").FlexColumn, {
                xstyle: C.checkboxContainer,
                children: le,
              }),
            }),
          )),
          (t[47] = le),
          (t[48] = se))
        : (se = t[48]);
      var ue, ce;
      t[49] === Symbol.for("react.memo_cache_sentinel")
        ? ((ue = p.jsx(b, {})),
          (ce = { className: "xdylf7x x5s3kwk" }),
          (t[49] = ue),
          (t[50] = ce))
        : ((ue = t[49]), (ce = t[50]));
      var de;
      t[51] === Symbol.for("react.memo_cache_sentinel")
        ? ((de = function (t) {
            return _(t.text);
          }),
          (t[51] = de))
        : (de = t[51]);
      var me;
      t[52] !== X || t[53] !== m
        ? ((me = p.jsx(
            "div",
            babelHelpers.extends({}, ce, {
              children: p.jsx(o("WAWebRichTextField.react").RichTextField, {
                maxLength: r("WAWebConstantsDeprecated")
                  .MAX_CART_MESSAGE_LENGTH,
                placeholder: J,
                value: m,
                testid: void 0,
                multiline: !0,
                showRemaining: !0,
                spellCheck: !0,
                emojiBtnPosition: "side",
                textFormatEnabled: !0,
                onEnter: X,
                onChange: de,
              }),
            }),
          )),
          (t[52] = X),
          (t[53] = m),
          (t[54] = me))
        : (me = t[54]);
      var pe;
      t[55] !== l || t[56] !== W.items.length || t[57] !== n.chat
        ? ((pe = v(n.chat, W.items.length, l, u)),
          (t[55] = l),
          (t[56] = W.items.length),
          (t[57] = n.chat),
          (t[58] = pe))
        : (pe = t[58]);
      var _e;
      t[59] === Symbol.for("react.memo_cache_sentinel")
        ? ((_e = [C.paddingHoriz16, C.marginTop8, C.marginBottom24]),
          (t[59] = _e))
        : (_e = t[59]);
      var fe;
      t[60] === Symbol.for("react.memo_cache_sentinel")
        ? ((fe = s._(/*BTDS*/ "Send update")), (t[60] = fe))
        : (fe = t[60]);
      var ge;
      t[61] !== X
        ? ((ge = p.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            xstyle: _e,
            children: p.jsx(o("WAWebButton.react").Button, {
              testid: void 0,
              type: "primary",
              onClick: X,
              children: fe,
            }),
          })),
          (t[61] = X),
          (t[62] = ge))
        : (ge = t[62]);
      var he;
      t[63] !== ae ||
      t[64] !== se ||
      t[65] !== me ||
      t[66] !== pe ||
      t[67] !== ge
        ? ((he = p.jsx(r("WAWebDrawerBody.react"), {
            children: p.jsxs(r("WAWebDrawerSection.react"), {
              children: [ae, se, ue, me, pe, ge],
            }),
          })),
          (t[63] = ae),
          (t[64] = se),
          (t[65] = me),
          (t[66] = pe),
          (t[67] = ge),
          (t[68] = he))
        : (he = t[68]);
      var ye;
      return (
        t[69] !== n.onBack || t[70] !== a || t[71] !== oe || t[72] !== he
          ? ((ye = p.jsxs(r("WAWebDrawer.react"), {
              onDrop: te,
              ref: a,
              tsNavigationData: ne,
              children: [oe, he],
            })),
            (t[69] = n.onBack),
            (t[70] = a),
            (t[71] = oe),
            (t[72] = he),
            (t[73] = ye))
          : (ye = t[73]),
        ye
      );
    }
    function L() {
      o("WAWebModalManager").ModalManager.close();
    }
    function E() {
      o("WAWebModalManager").ModalManager.close();
    }
    function k(t) {
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Error opening chat",
            ])),
        )
        .verbose();
    }
    function I(e) {
      o("WALogger")
        .ERROR(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "Error sending order status in chat",
            ])),
        )
        .verbose();
    }
    l.default = R;
  },
  226,
);
