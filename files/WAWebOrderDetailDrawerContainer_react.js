__d(
  "WAWebOrderDetailDrawerContainer.react",
  [
    "fbt",
    "WAWebBizFrontendGatingUtils",
    "WAWebBizGatingUtils",
    "WAWebBizSendOrderAction",
    "WAWebBrazilPaymentsGeoGating",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileUtils",
    "WAWebButton.react",
    "WAWebCurrencyUtils",
    "WAWebDetailImage.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerButton.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFrontendContactGetters",
    "WAWebGetBrazilnteractiveActions",
    "WAWebMsgGetters",
    "WAWebNoop",
    "WAWebOrderDetailItems",
    "WAWebOrderDetailMath",
    "WAWebOrderDetailSectionContainer.react",
    "WAWebOrderDetailSellerProfile.react",
    "WAWebOrderDetailStatusPill.react",
    "WAWebOrderDetailsActionCategory",
    "WAWebOrderDetailsActionsSmbWamEvent",
    "WAWebOrderPaymentStatus",
    "WAWebOrderStatus",
    "WAWebOrderSummaryDrawer",
    "WAWebOrdersExpansionCountries",
    "WAWebSpinner.react",
    "WAWebStatusClockIcon.react",
    "WAWebText.react",
    "WAWebText_DONOTUSE.react",
    "WAWebUISpacing",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumOrderDetailsCreationAction",
    "WAWebWebIcCheckIcon.react",
    "WDSIconWdsIcCurrencyReal.react",
    "WDSText.react",
    "react",
    "stylex",
    "useWAWebOrderDetailItems",
    "useWAWebOrderPaymentStatus",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useMemo,
      f = {
        buttonWrapper: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          $$css: !0,
        },
        canceledIcon: {
          alignItems: "x6s0dn4",
          backgroundColor: "x4wrhlh",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          color: "x30a034",
          display: "x78zum5",
          height: "x90ne7k",
          justifyContent: "xl56j7k",
          marginInlineStart: "xwklpps",
          paddingTop: "x1yrsyyn",
          paddingInlineEnd: "x1icxu4v",
          paddingBottom: "x10b6aqq",
          paddingInlineStart: "x25sj25",
          width: "x1691je0",
          $$css: !0,
        },
        checkIcon: {
          alignItems: "x6s0dn4",
          backgroundColor: "x1qe8gl4",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          color: "x11askks",
          display: "x78zum5",
          height: "x10w6t97",
          justifyContent: "xl56j7k",
          marginInlineStart: "xdwrcjd",
          paddingTop: "x1yrsyyn",
          paddingInlineEnd: "x1icxu4v",
          paddingBottom: "x10b6aqq",
          paddingInlineStart: "x25sj25",
          width: "x1td3qas",
          $$css: !0,
        },
        paymentSentTextPadding: { paddingInlineStart: "xwn43p0", $$css: !0 },
        pendingIcon: {
          alignItems: "x6s0dn4",
          backgroundColor: "x4wrhlh",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          color: "xhslqc4",
          display: "x78zum5",
          height: "x90ne7k",
          justifyContent: "xl56j7k",
          marginInlineStart: "xwklpps",
          paddingTop: "x1yrsyyn",
          paddingInlineEnd: "x1icxu4v",
          paddingBottom: "x10b6aqq",
          paddingInlineStart: "x25sj25",
          width: "x1691je0",
          $$css: !0,
        },
        statusRowPadding: {
          paddingInlineStart: "x1mfogq2",
          paddingTop: "xz9dl7a",
          $$css: !0,
        },
        statusTextPadding: { paddingInlineStart: "xwn43p0", $$css: !0 },
      },
      g = { surface: "smb-order-details" };
    function h(t) {
      var n,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        u = i.chat,
        c = i.orderInfo,
        m = i.sellerWid,
        f = c.referenceId,
        h = c.totalAmount,
        C = r("useWAWebOrderDetailItems")(c, m),
        b = C.isLoading,
        S = C.orderItems,
        R = _(
          function () {
            return o("WAWebOrderStatus").findOrderStatus(u, f);
          },
          [u, f],
        ),
        L = (n = i.onlyShowPaymentDetails) != null ? n : !1;
      p(
        function () {
          var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
          new (o(
            "WAWebOrderDetailsActionsSmbWamEvent",
          ).OrderDetailsActionsSmbWamEvent)({
            actionCategory: String(
              r("WAWebOrderDetailsActionCategory").ORDER_DETAILS_MANAGEMENT,
            ),
            hasCatalog: o("WAWebBusinessProfileUtils").hasCatalog(
              o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
                e,
              ),
            ),
            orderDetailEntryPoint: String(i.entryPoint),
            orderDetailsCreationAction: o(
              "WAWebWamEnumOrderDetailsCreationAction",
            ).ORDER_DETAILS_CREATION_ACTION.VIEW_ORDER_DETAILS,
          }).commit();
        },
        [i.entryPoint],
      );
      var E = r("WAWebNoop"),
        k = S.length > 0,
        I = function () {
          o("WAWebBizSendOrderAction")
            .sendOrderPaymentMethodUpdate({
              chat: u,
              offset: o("WAWebOrderDetailMath").DEFAULT_OFFSET,
              orderInfo: c,
              orderNote: null,
              orderStatus: R,
              paymentMethod: o("WAWebOrderPaymentStatus").OrderPaymentMethod
                .Confirm,
              paymentStatus: null,
              sellerJid: m.toJid(),
            })
            .finally(function () {
              (o("WAWebDrawerManager").DrawerManager.closeDrawerRight(), E());
            });
        };
      return d.jsxs(r("WAWebDrawer.react"), {
        onDrop: i.onBack,
        ref: a,
        tsNavigationData: g,
        children: [
          d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: (function (e) {
              if (
                (((typeof e == "object" && e !== null) ||
                  typeof e == "function") &&
                  e.onlyShowPaymentDetails === !0) ||
                (((typeof e == "object" && e !== null) ||
                  typeof e == "function") &&
                  e.containsOrder === !1)
              )
                return s._(/*BTDS*/ "Payment details");
              if (
                ((typeof e == "object" && e !== null) ||
                  typeof e == "function") &&
                e.containsOrder === !0 &&
                e.optimizationEnabled === !0
              )
                return s._(/*BTDS*/ "Charge details");
              if (
                (typeof e == "object" && e !== null) ||
                typeof e == "function"
              )
                return s._(/*BTDS*/ "Order details");
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })({
              containsOrder: k,
              onlyShowPaymentDetails: L,
              optimizationEnabled: o(
                "WAWebBizGatingUtils",
              ).isOrderContentOptimizationEnabled(),
            }),
            onBack: i.onBack,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          }),
          d.jsx(r("WAWebDrawerBody.react"), {
            theme: b ? "center-content" : void 0,
            children: b
              ? d.jsx(v, {})
              : d.jsx(y, {
                  containsOrder: k,
                  onlyShowPaymentDetails: L,
                  chat: u,
                  interactiveMessage: i.interactiveMessage,
                  onOrderStatusUpdateClick: i.onOrderStatusUpdateClick,
                  orderInfo: c,
                  orderItems: S,
                  orderStatus: R,
                  sellerWid: m,
                  sendConfirmOrderInfo: I,
                  totalAmount: h,
                  userWid: l,
                }),
          }),
        ],
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.chat,
        n = e.containsOrder,
        r = e.interactiveMessage,
        o = e.onlyShowPaymentDetails,
        a = e.onOrderStatusUpdateClick,
        i = e.orderInfo,
        l = e.orderItems,
        s = e.orderStatus,
        u = e.sellerWid,
        c = e.sendConfirmOrderInfo,
        m = e.totalAmount,
        p = e.userWid,
        _ = o || !n;
      return _
        ? d.jsx(b, {
            chat: t,
            interactiveMessage: r,
            onlyShowPaymentDetails: o,
            onOrderStatusUpdateClick: a,
            orderInfo: i,
            orderStatus: s,
            sellerWid: u,
            totalAmount: m,
            userWid: p,
          })
        : d.jsx(C, {
            chat: t,
            interactiveMessage: r,
            onOrderStatusUpdateClick: a,
            orderInfo: i,
            orderItems: l,
            orderStatus: s,
            sellerWid: u,
            sendConfirmOrderInfo: c,
            totalAmount: m,
            userWid: p,
          });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t,
        n,
        a,
        i,
        l = e.chat,
        c = e.interactiveMessage,
        m = e.onOrderStatusUpdateClick,
        p = e.orderInfo,
        _ = e.orderItems,
        g = e.orderStatus,
        h = e.sellerWid,
        y = e.sendConfirmOrderInfo,
        C = e.totalAmount,
        b = e.userWid,
        v = p.discount,
        S = p.shipping,
        L = p.subtotal,
        E = p.tax;
      return L == null
        ? null
        : d.jsxs(d.Fragment, {
            children: [
              d.jsx(r("WAWebDrawerSection.react"), {
                xstyle: [
                  o("WAWebUISpacing").uiPadding.top20,
                  o("WAWebUISpacing").uiPadding.bottom15,
                ],
                children: d.jsxs(r("WAWebOrderDetailSectionContainer.react"), {
                  children: [
                    d.jsx(r("WAWebOrderDetailSellerProfile.react"), {
                      testid: void 0,
                      orderId: p.referenceId,
                      sellerWid: h,
                      orderStatus: d.jsx(
                        r("WAWebOrderDetailStatusPill.react"),
                        { orderStatus: g },
                      ),
                    }),
                    d.jsx(r("WAWebOrderDetailItems"), {
                      details: !0,
                      currency: p.currency,
                      items: _,
                    }),
                    d.jsx(o("WAWebOrderSummaryDrawer").OrderValues, {
                      tax:
                        E != null
                          ? E * o("WAWebOrderDetailMath").DEFAULT_OFFSET
                          : null,
                      discount:
                        v != null
                          ? v * o("WAWebOrderDetailMath").DEFAULT_OFFSET
                          : null,
                      shipping:
                        S != null
                          ? S * o("WAWebOrderDetailMath").DEFAULT_OFFSET
                          : null,
                      subtotal: L * o("WAWebOrderDetailMath").DEFAULT_OFFSET,
                      currency: p.currency,
                      canDisplayAdditionalCharges: !0,
                    }),
                    d.jsxs(o("WAWebFlex.react").FlexRow, {
                      justify: "all",
                      xstyle: o("WAWebUISpacing").uiPadding.horiz16,
                      testid: void 0,
                      children: [
                        d.jsx(o("WAWebText.react").WAWebTextTitle, {
                          as: "span",
                          children: s._(/*BTDS*/ "Total"),
                        }),
                        d.jsx(o("WAWebText.react").WAWebTextTitle, {
                          as: "span",
                          children: o("WAWebCurrencyUtils").formatAmount(
                            p.currency,
                            C,
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              b.user === h.user &&
                ((t =
                  (n = o(
                    "WAWebOrdersExpansionCountries",
                  ).getOrdersExpansionAllowedCountries()) == null
                    ? void 0
                    : n.length) != null
                  ? t
                  : 0) > 0 &&
                d.jsx(r("WAWebDrawerSection.react"), {
                  children: d.jsxs(
                    o("WAWebDrawerButton.react").DrawerButtonSimple,
                    {
                      icon: d.jsx(
                        o("WAWebStatusClockIcon.react").StatusClockIcon,
                        { width: 20 },
                      ),
                      testid: void 0,
                      color: "dark",
                      disabled: !0,
                      onClick: r("WAWebNoop"),
                      children: [
                        d.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
                          size: "16",
                          children: s._(/*BTDS*/ "Payment details"),
                        }),
                        d.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
                          className: "x1pg5gke xk4td0m",
                          children: s._(
                            /*BTDS*/ "To see payment details, open WhatsApp on your phone.",
                          ),
                        }),
                      ],
                    },
                  ),
                }),
              [
                o("WAWebOrderStatus").OrderStatus.Canceled,
                o("WAWebOrderStatus").OrderStatus.Complete,
              ].every(function (e) {
                return g !== e;
              }) &&
                b.user === h.user &&
                d.jsx(r("WAWebDrawerSection.react"), {
                  children: d.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      (u || (u = r("stylex"))).props(
                        f.buttonWrapper,
                        o("WAWebUISpacing").uiMargin.vert16,
                      ),
                      {
                        children: d.jsx(o("WAWebButton.react").Button, {
                          testid: void 0,
                          type: "primary",
                          onClick: function () {
                            m == null || m();
                          },
                          children: o(
                            "WAWebBizGatingUtils",
                          ).isOrderContentOptimizationEnabled()
                            ? s._(/*BTDS*/ "Update status")
                            : s._(/*BTDS*/ "Update order status"),
                        }),
                      },
                    ),
                  ),
                }),
              b.user !== h.user &&
                g === o("WAWebOrderStatus").OrderStatus.Pending &&
                ((a =
                  (i = o(
                    "WAWebOrdersExpansionCountries",
                  ).getConsumerOrdersExpansionAllowedCountries()) == null
                    ? void 0
                    : i.length) != null
                  ? a
                  : 0) > 0 &&
                d.jsx(r("WAWebDrawerSection.react"), {
                  children: d.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      (u || (u = r("stylex"))).props(
                        f.buttonWrapper,
                        o("WAWebUISpacing").uiMargin.vert16,
                      ),
                      {
                        children: d.jsx(R, {
                          sendConfirmOrderInfo: y,
                          chat: l,
                          orderInfo: p,
                          interactiveMessage: c,
                        }),
                      },
                    ),
                  ),
                }),
            ],
          });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = e.chat,
        n = e.interactiveMessage,
        a = e.onlyShowPaymentDetails,
        i = e.onOrderStatusUpdateClick,
        l = e.orderInfo,
        c = e.orderStatus,
        m = e.sellerWid,
        p = e.totalAmount,
        _ = e.userWid,
        g = t.contact,
        h =
          g.verifiedName ||
          g.name ||
          o("WAWebFrontendContactGetters").getDisplayName(g),
        y = o("WAWebCurrencyUtils").formatAmount1000ToParts(
          l.currency,
          p * 1e3,
        ),
        C = o("useWAWebOrderPaymentStatus").useOrderPaymentStatus(
          t,
          l.referenceId,
        ),
        b =
          n != null ? o("WAWebMsgGetters").getIsSentByMe(n) : _.user === m.user;
      return d.jsxs(d.Fragment, {
        children: [
          d.jsxs(r("WAWebDrawerSection.react"), {
            xstyle: [
              o("WAWebUISpacing").uiPadding.top20,
              o("WAWebUISpacing").uiPadding.bottom15,
            ],
            children: [
              d.jsx(r("WAWebDrawerSection.react"), {
                testid: void 0,
                children: d.jsx("div", {
                  className: "x6s0dn4 x78zum5 xdt5ytf x1p5oq8j xwxc41k x2b8uid",
                  children: d.jsx(
                    "span",
                    babelHelpers.extends(
                      {},
                      {
                        0: { className: "x1heor9g x1weigxw x1s688f" },
                        1: {
                          className:
                            "x18cpw0e x1weigxw x1s688f xmqliwb x13zicib xudwaec",
                        },
                      }[
                        (c === o("WAWebOrderStatus").OrderStatus.Canceled) << 0
                      ],
                      { children: y.symbol + " " + y.integer + y.decimal },
                    ),
                  ),
                }),
              }),
              d.jsx(S, { currentStatus: C, onlyShowPaymentDetails: a }),
              d.jsx(r("WAWebDrawerSection.react"), {
                children: d.jsxs("div", {
                  className: "x6s0dn4 x78zum5 x1q0g3np x1mfogq2 xz9dl7a",
                  children: [
                    d.jsx(o("WAWebDetailImage.react").DetailImage, {
                      id: m,
                      size: 48,
                    }),
                    d.jsxs("div", {
                      className: "x1cy8zhl x78zum5 xdt5ytf",
                      children: [
                        d.jsx("span", {
                          className: "xhslqc4 x1f6kntn xo1l8bm xwn43p0",
                          children: b
                            ? s._(/*BTDS*/ "Sent to")
                            : s._(/*BTDS*/ "Sent from"),
                        }),
                        d.jsx("span", {
                          className: "x1f6kntn xo1l8bm xwn43p0 x123j3cw",
                          children: s._(/*BTDS*/ "{merchant-name}", [
                            s._param("merchant-name", h),
                          ]),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          !a &&
            !o("WAWebOrderStatus").isPaymentRequest(t, l) &&
            [
              o("WAWebOrderStatus").OrderStatus.Canceled,
              o("WAWebOrderStatus").OrderStatus.Complete,
            ].every(function (e) {
              return c !== e;
            }) &&
            _.user === m.user &&
            d.jsx(r("WAWebDrawerSection.react"), {
              children: d.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (u || (u = r("stylex"))).props(
                    f.buttonWrapper,
                    o("WAWebUISpacing").uiMargin.vert16,
                  ),
                  {
                    children: d.jsx(o("WAWebButton.react").Button, {
                      testid: void 0,
                      type: "primary",
                      onClick: function () {
                        i == null || i();
                      },
                      children: o(
                        "WAWebBizGatingUtils",
                      ).isOrderContentOptimizationEnabled()
                        ? s._(/*BTDS*/ "Update status")
                        : s._(/*BTDS*/ "Update order status"),
                    }),
                  },
                ),
              ),
            }),
        ],
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v() {
      return d.jsx(o("WAWebFlex.react").FlexRow, {
        align: "center",
        justify: "center",
        testid: void 0,
        children: d.jsx(r("WAWebFlexItem.react"), {
          children: d.jsx(o("WAWebSpinner.react").Spinner, {}),
        }),
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      var t = e.currentStatus,
        n = e.onlyShowPaymentDetails,
        a,
        i,
        l,
        u;
      e: {
        if (t === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Captured) {
          ((a = d.jsx(o("WAWebWebIcCheckIcon.react").WebIcCheckIcon, {
            iconXstyle: f.checkIcon,
          })),
            (i = "contentActionEmphasized"),
            (l = s._(/*BTDS*/ "Completed")),
            (u = s._(/*BTDS*/ "Payment sent")));
          break e;
        }
        if (t === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Failed) {
          ((a = d.jsx(r("WDSIconWdsIcCurrencyReal.react"), {
            width: 46,
            height: 46,
            iconXstyle: f.canceledIcon,
          })),
            (i = "secondaryNegative"),
            (l = s._(/*BTDS*/ "Failed")),
            (u = s._(/*BTDS*/ "Payment was not sent")));
          break e;
        }
        if (
          t === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Pending ||
          t === null ||
          t === void 0
        ) {
          ((a = d.jsx(r("WDSIconWdsIcCurrencyReal.react"), {
            width: 46,
            height: 46,
            iconXstyle: f.pendingIcon,
          })),
            (i = "contentDeemphasized"),
            (l = n ? s._(/*BTDS*/ "Requested") : s._(/*BTDS*/ "Pending")),
            (u = n
              ? s._(/*BTDS*/ "Payment requested")
              : s._(/*BTDS*/ "Processing payment")));
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
      return d.jsx(r("WAWebDrawerSection.react"), {
        children: d.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          xstyle: f.statusRowPadding,
          children: [
            a,
            d.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "start",
              children: [
                d.jsx(r("WDSText.react"), {
                  type: "Body2Emphasized",
                  colorName: i,
                  xstyle: f.statusTextPadding,
                  children: l,
                }),
                d.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDefault",
                  xstyle: f.paymentSentTextPadding,
                  children: u,
                }),
              ],
            }),
          ],
        }),
      });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      var t = e.chat,
        n = e.interactiveMessage,
        r = e.orderInfo,
        a = e.sendConfirmOrderInfo,
        i = L(t, n, r),
        l = i == null ? void 0 : i.Icon;
      return i
        ? d.jsxs(o("WAWebButton.react").Button, {
            testid: void 0,
            type: "primary",
            onClick: i.onClick,
            children: [l && d.jsx(l, {}), i.label],
          })
        : d.jsx(o("WAWebButton.react").Button, {
            testid: void 0,
            type: "primary",
            onClick: a,
            children: o(
              "WAWebBizGatingUtils",
            ).isOrderContentOptimizationEnabled()
              ? s._(/*BTDS*/ "Confirm info")
              : s._(/*BTDS*/ "Confirm order info"),
          });
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e, t, n) {
      if (t == null) return null;
      var r = [];
      return (
        o("WAWebBizFrontendGatingUtils").isAPICopyPixCTAEnabled() &&
          o("WAWebGetBrazilnteractiveActions").hasValidDynamicPix(n) &&
          r.push(
            o(
              "WAWebGetBrazilnteractiveActions",
            ).getCopyPixCodeInteractiveAction(n, t),
          ),
        o("WAWebBrazilPaymentsGeoGating").isPaymentLinkEnabled(e) &&
          o("WAWebGetBrazilnteractiveActions").hasValidPaymentLink(n) &&
          r.push(
            o(
              "WAWebGetBrazilnteractiveActions",
            ).getOpenPaymentLinkInteractiveAction(n, t),
          ),
        o("WAWebBrazilPaymentsGeoGating").isBoletoEnabled(e) &&
          o("WAWebGetBrazilnteractiveActions").hasValidBoletoCode(n) &&
          r.push(
            o(
              "WAWebGetBrazilnteractiveActions",
            ).getCopyBoletoCodeInteractiveAction(n, t),
          ),
        r.length >= 1 ? r[0] : null
      );
    }
    l.default = h;
  },
  226,
);
