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
      var t = e.xstyle;
      return p.jsx(
        "div",
        babelHelpers.extends(
          {},
          (d || (d = r("stylex"))).props(C.spacer, C.marginTop16, t),
        ),
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
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
    function R(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, c),
        i = h(S),
        l = i[0],
        d = i[1],
        m = h(""),
        _ = m[0],
        R = m[1],
        L = g(
          function () {
            return o("WAWebOrderStatus").findOrderStatus(
              a.chat,
              a.orderInfo.referenceId,
            );
          },
          [a.chat, a.orderInfo.referenceId],
        ),
        E = g(
          function () {
            return o("WAWebOrderPaymentStatus").findLastOrderPaymentStatusInfo(
              a.chat,
              a.orderInfo.referenceId,
            );
          },
          [a.chat, a.orderInfo.referenceId],
        ),
        k = h(L),
        I = k[0],
        T = k[1],
        D = h(
          (E == null ? void 0 : E.paymentStatus) ===
            o("WAWebOrderPaymentStatus").OrderPaymentStatus.Captured,
        ),
        x = D[0],
        $ = D[1];
      f(function () {
        var e = function (t) {
          return d(
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
      }, []);
      var P = a.chat,
        N = a.orderInfo,
        M = a.sellerJid,
        w = "no_method_confirmed",
        A = function () {
          var e,
            t,
            n =
              (e =
                (t = N.externalPaymentConfigurations) == null ||
                (t = t.at(0)) == null
                  ? void 0
                  : t.type) != null
                ? e
                : w;
          new (o(
            "WAWebOrderDetailsActionsSmbWamEvent",
          ).OrderDetailsActionsSmbWamEvent)({
            actionCategory: String(
              r("WAWebOrderDetailsActionCategory").ORDER_DETAILS_MANAGEMENT,
            ),
            hasNote: !!_,
            orderDetailEntryPoint: String(a.entryPoint),
            orderDetailsCreationAction: o(
              "WAWebWamEnumOrderDetailsCreationAction",
            ).ORDER_DETAILS_CREATION_ACTION.SEND_MARK_AS_PAID,
            paymentStatus: !0,
            paymentType: n,
          }).commit();
        };
      function F(e, t, n, r) {
        (o("WAWebDrawerManager").DrawerManager.closeDrawerRight(),
          e &&
            (B(!t, n, r),
            o(
              "WAWebSmb3pdConversionSignalAction",
            ).log3pdConversionSignalForOrders(
              {
                chat: P,
                isPaidStateChanged: !0,
                orderStatus: I,
                paidData: {
                  amount: String(N.totalAmount),
                  currency: N.currency,
                  paid: x,
                },
                type: "order_updated",
              },
              l,
            )),
          t && O(n, r));
      }
      function O(t, n) {
        var i = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
          s = o("WAWebBusinessProfileUtils").hasCatalog(
            o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
              i,
            ),
          );
        (new (o(
          "WAWebOrderDetailsActionsSmbWamEvent",
        ).OrderDetailsActionsSmbWamEvent)({
          actionCategory: String(
            r("WAWebOrderDetailsActionCategory").ORDER_DETAILS_MANAGEMENT,
          ),
          hasCatalog: s,
          hasNote: !!_,
          orderDetailEntryPoint: String(a.entryPoint),
          orderDetailsCreationAction: o(
            "WAWebWamEnumOrderDetailsCreationAction",
          ).ORDER_DETAILS_CREATION_ACTION.SEND_ORDER_STATUS,
        }).commit(),
          o("WAWebBizSendOrderAction")
            .sendOrderStatusMessageAsMerchant({
              chat: P,
              offset: o("WAWebOrderDetailMath").DEFAULT_OFFSET,
              orderInfo: N,
              orderNote: _,
              orderStatus: t,
              paymentMethod: null,
              paymentStatus: n
                ? o("WAWebOrderPaymentStatus").OrderPaymentStatus.Captured
                : o("WAWebOrderPaymentStatus").OrderPaymentStatus.Pending,
              sellerJid: M,
            })
            .catch(function (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Error sending order status in chat",
                    ])),
                )
                .verbose();
            }),
          o("WAWebSmbMarkAsXOrderAction").markOrderAsUpdatedStatusAction(
            P,
            l,
            I,
            x,
          ),
          o(
            "WAWebSmb3pdConversionSignalAction",
          ).log3pdConversionSignalForOrders(
            {
              chat: P,
              orderStatus: I,
              paidData: {
                amount: String(N.totalAmount),
                currency: N.currency,
                paid: x,
              },
              type: "order_updated",
            },
            l,
          ),
          o("WAWebCmd")
            .Cmd.openChatFromUnread({ chat: P })
            .catch(function (e) {
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Error opening chat",
                    ])),
                )
                .verbose();
            }));
      }
      function B(e, t, n) {
        o("WAWebBizSendOrderAction")
          .sendOrderPaymentStatusMessageAsMerchant({
            chat: P,
            offset: o("WAWebOrderDetailMath").DEFAULT_OFFSET,
            orderInfo: N,
            orderNote: e ? _ : null,
            orderStatus: t,
            paymentMethod: null,
            paymentStatus: n
              ? o("WAWebOrderPaymentStatus").OrderPaymentStatus.Captured
              : o("WAWebOrderPaymentStatus").OrderPaymentStatus.Pending,
            sellerJid: M,
          })
          .finally(function () {
            A();
          });
      }
      function W(e) {
        return y.findIndex(function (t) {
          return t === e;
        });
      }
      function q() {
        var e = W(I),
          t = W(L),
          n =
            (E == null ? void 0 : E.paymentStatus) ===
            o("WAWebOrderPaymentStatus").OrderPaymentStatus.Captured,
          a = e !== t,
          i = n !== x,
          l = !a && !i,
          u = e < t,
          c = I,
          d = x;
        (o("WAWebBizGatingUtils").isOrderStatusM1Enabled() &&
          (i &&
            (x
              ? I === o("WAWebOrderStatus").OrderStatus.PaymentRequested &&
                (c = o("WAWebOrderStatus").OrderStatus.PreparingToShip)
              : I === o("WAWebOrderStatus").OrderStatus.PreparingToShip &&
                (c = o("WAWebOrderStatus").OrderStatus.PaymentRequested)),
          a &&
            x &&
            I === o("WAWebOrderStatus").OrderStatus.PaymentRequested &&
            (d = !1)),
          l
            ? o("WAWebModalManager").ModalManager.open(
                p.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                  title: s._(/*BTDS*/ "Status already sent"),
                  okText: r("WAWebFbtCommon")("OK"),
                  onOK: function () {
                    o("WAWebModalManager").ModalManager.close();
                  },
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
                            ).getWAWebBizOrderStatusLabel(L),
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
                            ).getWAWebBizOrderStatusLabel(L),
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
                      (F(i, a, c, d),
                        o("WAWebModalManager").ModalManager.close());
                    },
                    cancelText: s._(/*BTDS*/ "Cancel"),
                    onCancel: function () {
                      o("WAWebModalManager").ModalManager.close();
                    },
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
                              ).getWAWebBizOrderStatusLabel(L),
                            ),
                            s._param(
                              "orderStatus",
                              o(
                                "WAWebBizOrderStatusLabels",
                              ).getWAWebBizOrderStatusLabel(I),
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
                              ).getWAWebBizOrderStatusLabel(L),
                            ),
                            s._param(
                              "orderStatus",
                              o(
                                "WAWebBizOrderStatusLabels",
                              ).getWAWebBizOrderStatusLabel(I),
                            ),
                          ],
                        ),
                  }),
                )
              : F(i, a, c, d));
      }
      var U = s._(/*BTDS*/ "Add a note"),
        V = function () {
          var e = !x;
          ($(e),
            e &&
              I === o("WAWebOrderStatus").OrderStatus.PaymentRequested &&
              T(o("WAWebOrderStatus").OrderStatus.PreparingToShip));
        };
      return p.jsxs(r("WAWebDrawer.react"), {
        onDrop: a.onBack,
        ref: n,
        tsNavigationData: {
          surface: "unknown",
          viewName: "order-status-update",
        },
        children: [
          p.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: o("WAWebBizGatingUtils").isOrderContentOptimizationEnabled()
              ? s._(/*BTDS*/ "Update status")
              : s._(/*BTDS*/ "Update order status"),
            onBack: a.onBack,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          }),
          p.jsx(r("WAWebDrawerBody.react"), {
            children: p.jsxs(r("WAWebDrawerSection.react"), {
              children: [
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
                              value: x,
                              onChange: V,
                              testid: void 0,
                            }),
                          }),
                          p.jsx("div", { children: s._(/*BTDS*/ "Paid") }),
                        ],
                      }),
                      p.jsx(b, { xstyle: C.marginBottom16 }),
                    ],
                  }),
                p.jsx("div", {
                  className: "x1tiyuxx x1nbhmlj xdx6fka xvtqlqk",
                  children: p.jsx(o("WAWebFlex.react").FlexColumn, {
                    xstyle: C.checkboxContainer,
                    children: y.map(function (e) {
                      return p.jsx(
                        r("WAWebOrderDetailRadioButton.react"),
                        {
                          testid: void 0,
                          label: o(
                            "WAWebBizOrderStatusLabels",
                          ).getWAWebBizOrderStatusLabel(e),
                          isCanceled:
                            e === o("WAWebOrderStatus").OrderStatus.Canceled,
                          checked: I === e,
                          onClick: function () {
                            (T(e),
                              e ===
                                o("WAWebOrderStatus").OrderStatus
                                  .PaymentRequested &&
                                x &&
                                $(!1));
                          },
                        },
                        e,
                      );
                    }),
                  }),
                }),
                p.jsx(b, {}),
                p.jsx("div", {
                  className: "xdylf7x x5s3kwk",
                  children: p.jsx(o("WAWebRichTextField.react").RichTextField, {
                    maxLength: r("WAWebConstantsDeprecated")
                      .MAX_CART_MESSAGE_LENGTH,
                    placeholder: U,
                    value: _,
                    testid: void 0,
                    multiline: !0,
                    showRemaining: !0,
                    spellCheck: !0,
                    emojiBtnPosition: "side",
                    textFormatEnabled: !0,
                    onEnter: q,
                    onChange: function (t) {
                      return R(t.text);
                    },
                  }),
                }),
                v(a.chat, N.items.length, l, d),
                p.jsx(o("WAWebFlex.react").FlexColumn, {
                  align: "center",
                  xstyle: [C.paddingHoriz16, C.marginTop8, C.marginBottom24],
                  children: p.jsx(o("WAWebButton.react").Button, {
                    testid: void 0,
                    type: "primary",
                    onClick: q,
                    children: s._(/*BTDS*/ "Send update"),
                  }),
                }),
              ],
            }),
          }),
        ],
      });
    }
    ((R.displayName = R.name + " [from " + i.id + "]"), (l.default = R));
  },
  226,
);
