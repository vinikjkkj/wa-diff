__d(
  "WAWebBizOrderManagementFlow.react",
  [
    "fbt",
    "$InternalEnum",
    "WAWebBizChargesInfoBanner.react",
    "WAWebBizEntryPoint",
    "WAWebBizGatingUtils",
    "WAWebBizOrderDetailAction",
    "WAWebBizOrderManagementPaymentMethodsSection.react",
    "WAWebBizOrderManagementSettingsSection.react",
    "WAWebBizOrderRequestManagementDrawer.react",
    "WAWebBizOrderStatusLabels",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileUtils",
    "WAWebCmd",
    "WAWebCurrencyUtils",
    "WAWebDetailImage.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebName.react",
    "WAWebOrderDetailsActionCategory",
    "WAWebOrderDetailsActionsSmbWamEvent",
    "WAWebOrderFetcher",
    "WAWebOrderRequestDetail.react",
    "WAWebOrderStatus",
    "WAWebSpinner.react",
    "WAWebUISpacing",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumOrderDetailsCreationAction",
    "WAWebWdsSmbPictoReceiptAndroidIcon.react",
    "react",
    "stylex",
    "useWAWebFlow",
    "useWAWebGetOrderRequests",
    "useWAWebGetOrders",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.Fragment,
      p = d.useRef,
      _ = n("$InternalEnum").Mirrored(["Orders", "Requests"]),
      f = 65,
      g = {
        canceled: { color: "x30a034", $$css: !0 },
        completed: { color: "x1v5yvga", $$css: !0 },
        delivered: { color: "x1du590y", $$css: !0 },
        infoRow: {
          color: "x1mhprgp",
          fontSize: "x1f6kntn",
          fontWeight: "xk50ysn",
          lineHeight: "xa7kkou",
          $$css: !0,
        },
        orderInfo: {
          borderBottomColor: "x120ee7l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomWidth: "xso031l",
          flexGrow: "x1iyjqo2",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        orderStatusLabel: { fontWeight: "xk50ysn", $$css: !0 },
        orderSubDetails: {
          color: "x1mhprgp",
          fontSize: "x1f6kntn",
          lineHeight: "x37zpob",
          $$css: !0,
        },
        seeAllButton: { color: "x1mc9qgo", $$css: !0 },
        subTitle: { color: "x1mhprgp", $$css: !0 },
        title: {
          color: "x6o5irq",
          fontSize: "x1jchvi3",
          justifyContent: "x1qughib",
          lineHeight: "x1evy7pa",
          $$css: !0,
        },
      };
    function h(e) {
      var t = e.isInitialStep,
        n = e.ref,
        a = o("useWAWebFlow").useFlow(_.Orders, {
          transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
        }),
        i = a[0],
        l = a[1];
      if (l.step == null) return null;
      var s;
      switch (l.step) {
        case _.Orders:
          s = c.jsx(E, {
            onSeeAll: function () {
              l.push(_.Requests);
            },
            onBack: function () {
              return l.end();
            },
            isInitialStep: t != null ? t : !1,
          });
          break;
        case _.Requests:
          s = c.jsx(r("WAWebBizOrderRequestManagementDrawer.react"), {
            onBack: function () {
              return l.pop();
            },
          });
          break;
      }
      return c.jsx(i, { ref: n, flow: l, children: s });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      switch (e) {
        case o("WAWebOrderStatus").OrderStatus.Canceled:
          return g.canceled;
        case o("WAWebOrderStatus").OrderStatus.Complete:
          return g.completed;
        case o("WAWebOrderStatus").OrderStatus.Delivered:
          return g.delivered;
        case o("WAWebOrderStatus").OrderStatus.Pending:
        case o("WAWebOrderStatus").OrderStatus.Processing:
        case o("WAWebOrderStatus").OrderStatus.PartiallyShipped:
        case o("WAWebOrderStatus").OrderStatus.Shipped:
        case o("WAWebOrderStatus").OrderStatus.PaymentRequested:
        case o("WAWebOrderStatus").OrderStatus.PreparingToShip:
        case o("WAWebOrderStatus").OrderStatus.Confirmed:
        case o("WAWebOrderStatus").OrderStatus.Delayed:
        case o("WAWebOrderStatus").OrderStatus.Failed:
        case o("WAWebOrderStatus").OrderStatus.OutForDelivery:
        case o("WAWebOrderStatus").OrderStatus.Refunded:
          return null;
      }
    }
    function C(t) {
      var n = t.orderStatusInfo,
        a = n === void 0 ? o("WAWebOrderStatus").getDefaultOrderStatus() : n,
        i = o("WAWebBizOrderStatusLabels").getWAWebBizOrderStatusLabel(a);
      return c.jsx(
        "span",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(g.orderStatusLabel, y(a)),
          { children: i },
        ),
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    var b = [];
    function v(e) {
      var t = e.items,
        n = t === void 0 ? b : t;
      if (n.length === 0) return null;
      var r = n[0],
        o = babelHelpers.arrayLikeToArray(n).slice(1),
        a = String(
          s._(/*BTDS*/ '_j{"*":"{number_of_items} items","_1":"1 item"}', [
            s._plural(o.length, "number_of_items"),
          ]),
        ),
        i =
          o.length > 0
            ? String(s._(/*BTDS*/ "and")) +
              " " +
              (o.length === 1 ? o[0].name : a)
            : "",
        l = r.name + " " + i;
      return c.jsx("span", {
        title: l,
        className: "x6ikm8r x10wlt62 xlyipyv xuxw1ft x1iyjqo2",
        children: l,
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    var S = function () {
        return c.jsxs(c.Fragment, {
          children: [
            c.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  g.infoRow,
                  o("WAWebUISpacing").uiPadding.horiz16,
                  o("WAWebUISpacing").uiPadding.vert10,
                ),
                { children: s._(/*BTDS*/ "History") },
              ),
            ),
            c.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              xstyle: o("WAWebUISpacing").uiPadding.top9,
              children: [
                c.jsx(
                  o("WAWebWdsSmbPictoReceiptAndroidIcon.react")
                    .WdsSmbPictoReceiptAndroidIcon,
                  { height: 88, width: 88 },
                ),
                c.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    e.props(g.subTitle, o("WAWebUISpacing").uiPadding.all16),
                    {
                      children: o(
                        "WAWebBizGatingUtils",
                      ).isOrderContentOptimizationEnabled()
                        ? s._(/*BTDS*/ "No charges")
                        : s._(/*BTDS*/ "No order history"),
                    },
                  ),
                ),
              ],
            }),
          ],
        });
      },
      R = { surface: "smb-orders-hub" };
    function L(t) {
      var n = t.onSeeAll,
        a = t.scrollElementRef,
        i = o("useWAWebGetOrderRequests").useGetOrderRequests(a, f),
        l = i.isLoading,
        u = i.ordersInfoMap.contactAndOrderRequestInfoMap,
        d = i.ordersLazylist,
        m = function () {
          new (o(
            "WAWebOrderDetailsActionsSmbWamEvent",
          ).OrderDetailsActionsSmbWamEvent)({
            actionCategory: String(
              r("WAWebOrderDetailsActionCategory").ORDER_DETAILS_MANAGEMENT,
            ),
            hasCatalog: o("WAWebBusinessProfileUtils").hasCatalog(
              o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
                o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              ),
            ),
            orderDetailEntryPoint: String(
              r("WAWebBizEntryPoint").ORDER_REQUEST_LIST,
            ),
            orderDetailsCreationAction: o(
              "WAWebWamEnumOrderDetailsCreationAction",
            ).ORDER_DETAILS_CREATION_ACTION.CLICK_SEE_ALL_ORDER_REQUESTS,
          }).commit();
        };
      return c.jsxs(c.Fragment, {
        children: [
          (d.length > 0 || l) &&
            c.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  g.infoRow,
                  o("WAWebUISpacing").uiPadding.horiz16,
                  o("WAWebUISpacing").uiPadding.vert10,
                ),
                { children: s._(/*BTDS*/ "Order requests") },
              ),
            ),
          l &&
            c.jsx(o("WAWebFlex.react").FlexRow, {
              justify: "center",
              xstyle: o("WAWebUISpacing").uiPadding.all16,
              children: c.jsx(o("WAWebSpinner.react").Spinner, {
                color: "default",
                size: 24,
                stroke: 6,
              }),
            }),
          d.slice(0, 3).map(function (e, t) {
            return c.jsx(
              "div",
              {
                children: c.jsx(r("WAWebOrderRequestDetail.react"), {
                  contactAndOrderInfo: u[e],
                }),
              },
              e,
            );
          }),
          d.length > 3 &&
            c.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "end",
              children: c.jsx(
                "button",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    g.seeAllButton,
                    o("WAWebUISpacing").uiPadding.horiz16,
                    o("WAWebUISpacing").uiPadding.vert10,
                  ),
                  {
                    onClick: function () {
                      (n(), m());
                    },
                    children: s._(/*BTDS*/ "See all"),
                  },
                ),
              ),
            }),
        ],
      });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e) {
      var t = e.isInitialStep,
        n = t === void 0 ? !1 : t,
        a = e.onBack,
        i = e.onSeeAll,
        l = e.ref,
        u = p(null),
        d = o("useWAWebGetOrders").useGetOrders(
          u,
          f,
          o("useWAWebGetOrders").OrderManagementViewType.CHARGES_HOME,
        ),
        _ = d.isLoading,
        g = d.ordersInfoMap,
        h = g.contactAndOrderInfoMap,
        y = g.orderStatusInfoMap,
        C = d.ordersLazylist,
        b = {};
      return (
        n ? (b.onCancel = a) : (b.onBack = a),
        c.jsxs(r("WAWebDrawer.react"), {
          ref: l,
          tsNavigationData: R,
          children: [
            c.jsx(
              o("WAWebDrawerHeader.react").DrawerHeader,
              babelHelpers.extends(
                {
                  testid: void 0,
                  title: o(
                    "WAWebBizGatingUtils",
                  ).isOrderContentOptimizationEnabled()
                    ? s._(/*BTDS*/ "Charges")
                    : s._(/*BTDS*/ "Orders"),
                  type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
                },
                b,
              ),
            ),
            c.jsxs(r("WAWebDrawerBody.react"), {
              className: "x1280gxy x5yr21d",
              children: [
                o("WAWebBizGatingUtils").paymentsHomeEnabled() &&
                  c.jsx(r("WAWebBizChargesInfoBanner.react"), {}),
                !o("WAWebBizGatingUtils").paymentsHomeEnabled() &&
                  c.jsx(
                    r("WAWebBizOrderManagementPaymentMethodsSection.react"),
                    {},
                  ),
                c.jsx(r("WAWebBizOrderManagementSettingsSection.react"), {}),
                c.jsxs(r("WAWebDrawerSection.react"), {
                  ref: u,
                  className: "x1280gxy x94v8gs xw2csxc x1odjw0f",
                  animation: !1,
                  children: [
                    o("WAWebBizGatingUtils").isSellerOrderRevampEnabled() &&
                      c.jsx(L, { onSeeAll: i, scrollElementRef: u }),
                    C.map(function (e, t) {
                      var n, r;
                      return c.jsxs(
                        m,
                        {
                          children: [
                            c.jsx(I, {
                              date: o("WAWebOrderFetcher").getOrderDisplayDate(
                                h,
                                C,
                                t,
                              ),
                            }),
                            c.jsx(k, {
                              contactAndOrderInfo: h[e],
                              orderStatusInfo:
                                (n = (r = y[e]) == null ? void 0 : r.status) !=
                                null
                                  ? n
                                  : o(
                                      "WAWebOrderStatus",
                                    ).getDefaultOrderStatus(),
                            }),
                          ],
                        },
                        e,
                      );
                    }),
                    _ &&
                      c.jsx(o("WAWebFlex.react").FlexRow, {
                        justify: "center",
                        xstyle: o("WAWebUISpacing").uiPadding.all16,
                        children: c.jsx(o("WAWebSpinner.react").Spinner, {
                          color: "default",
                          size: 24,
                          stroke: 6,
                        }),
                      }),
                    !_ && !C.length && c.jsx(S, {}),
                  ],
                }),
              ],
            }),
          ],
        })
      );
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(t) {
      var n,
        a = t.contactAndOrderInfo,
        i = t.orderStatusInfo,
        l = r("useWAWebUIM")(),
        s = function () {
          var e = a.interactiveMsg;
          e &&
            (o("WAWebCmd").Cmd.openChatFromUnread({
              chat: o("WAWebFrontendMsgGetters").getChat(e.unsafe()),
            }),
            o("WAWebBizOrderDetailAction").openOrderDetailDrawer(
              e,
              l,
              r("WAWebBizEntryPoint").FROM_BUSINESS_TOOLS,
            ));
        };
      return c.jsxs("button", {
        "data-testid": void 0,
        onClick: s,
        className: "x6s0dn4 x78zum5 xvt47uu x1yc453h xh8yej3",
        children: [
          c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                o("WAWebUISpacing").uiPadding.vert12,
                o("WAWebUISpacing").uiPadding.horiz16,
              ),
              {
                children: c.jsx(o("WAWebDetailImage.react").DetailImage, {
                  id: a.contact.id,
                  size: 40,
                }),
              },
            ),
          ),
          c.jsxs(
            "div",
            babelHelpers.extends(
              {},
              e.props(
                g.orderInfo,
                o("WAWebUISpacing").uiPadding.vert10,
                o("WAWebUISpacing").uiPadding.end16,
              ),
              {
                children: [
                  c.jsxs(o("WAWebFlex.react").FlexRow, {
                    xstyle: g.title,
                    children: [
                      c.jsx(o("WAWebName.react").Name, {
                        titlify: !0,
                        ellipsify: !0,
                        className: "x1iyjqo2",
                        contact: a.contact,
                      }),
                      c.jsx("span", {
                        children: o("WAWebCurrencyUtils").formatAmount(
                          a.orderInfo.currency,
                          (n = a.orderInfo.totalAmount) != null ? n : 0,
                        ),
                      }),
                    ],
                  }),
                  c.jsxs(o("WAWebFlex.react").FlexRow, {
                    xstyle: g.orderSubDetails,
                    children: [
                      c.jsx(v, { items: a.orderInfo.items }),
                      c.jsx(C, { orderStatusInfo: i }),
                    ],
                  }),
                ],
              },
            ),
          ),
        ],
      });
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I(t) {
      var n = t.date,
        a = n === void 0 ? "" : n;
      return (
        a &&
        c.jsx(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(
              g.infoRow,
              o("WAWebUISpacing").uiPadding.horiz16,
              o("WAWebUISpacing").uiPadding.vert10,
            ),
            { children: a.toUpperCase() },
          ),
        )
      );
    }
    ((I.displayName = I.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
