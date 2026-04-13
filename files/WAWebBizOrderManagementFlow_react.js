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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(15),
        n = e.isInitialStep,
        a = e.ref,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }),
          (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebFlow").useFlow(_.Orders, i),
        s = l[0],
        u = l[1];
      if (u.step == null) return null;
      var d;
      e: switch (u.step) {
        case _.Orders: {
          var m, p;
          t[1] !== u
            ? ((m = function () {
                u.push(_.Requests);
              }),
              (p = function () {
                return u.end();
              }),
              (t[1] = u),
              (t[2] = m),
              (t[3] = p))
            : ((m = t[2]), (p = t[3]));
          var f = n != null ? n : !1,
            g;
          (t[4] !== m || t[5] !== p || t[6] !== f
            ? ((g = c.jsx(k, { onSeeAll: m, onBack: p, isInitialStep: f })),
              (t[4] = m),
              (t[5] = p),
              (t[6] = f),
              (t[7] = g))
            : (g = t[7]),
            (d = g));
          break e;
        }
        case _.Requests: {
          var h;
          (t[8] !== u
            ? ((h = c.jsx(r("WAWebBizOrderRequestManagementDrawer.react"), {
                onBack: function () {
                  return u.pop();
                },
              })),
              (t[8] = u),
              (t[9] = h))
            : (h = t[9]),
            (d = h));
        }
      }
      var y;
      return (
        t[10] !== s || t[11] !== d || t[12] !== u || t[13] !== a
          ? ((y = c.jsx(s, { ref: a, flow: u, children: d })),
            (t[10] = s),
            (t[11] = d),
            (t[12] = u),
            (t[13] = a),
            (t[14] = y))
          : (y = t[14]),
        y
      );
    }
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
      var n = o("react-compiler-runtime").c(9),
        a = t.orderStatusInfo,
        i;
      n[0] !== a
        ? ((i =
            a === void 0 ? o("WAWebOrderStatus").getDefaultOrderStatus() : a),
          (n[0] = a),
          (n[1] = i))
        : (i = n[1]);
      var l = i,
        s;
      n[2] !== l
        ? ((s = o("WAWebBizOrderStatusLabels").getWAWebBizOrderStatusLabel(l)),
          (n[2] = l),
          (n[3] = s))
        : (s = n[3]);
      var u = s,
        d;
      n[4] !== l
        ? ((d = (e || (e = r("stylex"))).props(g.orderStatusLabel, y(l))),
          (n[4] = l),
          (n[5] = d))
        : (d = n[5]);
      var m;
      return (
        n[6] !== u || n[7] !== d
          ? ((m = c.jsx("span", babelHelpers.extends({}, d, { children: u }))),
            (n[6] = u),
            (n[7] = d),
            (n[8] = m))
          : (m = n[8]),
        m
      );
    }
    var b = [];
    function v(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.items,
        r = n === void 0 ? b : n;
      if (r.length === 0) return null;
      var a, i;
      t[0] !== r
        ? ((a = r[0]),
          (i = babelHelpers.arrayLikeToArray(r).slice(1)),
          (t[0] = r),
          (t[1] = a),
          (t[2] = i))
        : ((a = t[1]), (i = t[2]));
      var l;
      t[3] !== i.length
        ? ((l = s._(
            /*BTDS*/ '_j{"*":"{number_of_items} items","_1":"1 item"}',
            [s._plural(i.length, "number_of_items")],
          )),
          (t[3] = i.length),
          (t[4] = l))
        : (l = t[4]);
      var u = String(l),
        d;
      t[5] !== u || t[6] !== i[0] || t[7] !== i.length
        ? ((d =
            i.length > 0
              ? String(s._(/*BTDS*/ "and")) +
                " " +
                (i.length === 1 ? i[0].name : u)
              : ""),
          (t[5] = u),
          (t[6] = i[0]),
          (t[7] = i.length),
          (t[8] = d))
        : (d = t[8]);
      var m = d,
        p = a.name + " " + m,
        _;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = { className: "x6ikm8r x10wlt62 xlyipyv xuxw1ft x1iyjqo2" }),
          (t[9] = _))
        : (_ = t[9]);
      var f;
      return (
        t[10] !== p
          ? ((f = c.jsx(
              "span",
              babelHelpers.extends({ title: p }, _, { children: p }),
            )),
            (t[10] = p),
            (t[11] = f))
          : (f = t[11]),
        f
      );
    }
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
      var n = o("react-compiler-runtime").c(18),
        a = t.onSeeAll,
        i = t.scrollElementRef,
        l = o("useWAWebGetOrderRequests").useGetOrderRequests(i, f),
        u = l.isLoading,
        d = l.ordersInfoMap,
        m = l.ordersLazylist,
        p = d.contactAndOrderRequestInfoMap,
        _ = E,
        h;
      n[0] !== u || n[1] !== m.length
        ? ((h =
            (m.length > 0 || u) &&
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
            )),
          (n[0] = u),
          (n[1] = m.length),
          (n[2] = h))
        : (h = n[2]);
      var y;
      n[3] !== u
        ? ((y =
            u &&
            c.jsx(o("WAWebFlex.react").FlexRow, {
              justify: "center",
              xstyle: o("WAWebUISpacing").uiPadding.all16,
              children: c.jsx(o("WAWebSpinner.react").Spinner, {
                color: "default",
                size: 24,
                stroke: 6,
              }),
            })),
          (n[3] = u),
          (n[4] = y))
        : (y = n[4]);
      var C;
      if (n[5] !== p || n[6] !== m) {
        var b;
        (n[8] !== p
          ? ((b = function (t, n) {
              return c.jsx(
                "div",
                {
                  children: c.jsx(r("WAWebOrderRequestDetail.react"), {
                    contactAndOrderInfo: p[t],
                  }),
                },
                t,
              );
            }),
            (n[8] = p),
            (n[9] = b))
          : (b = n[9]),
          (C = m.slice(0, 3).map(b)),
          (n[5] = p),
          (n[6] = m),
          (n[7] = C));
      } else C = n[7];
      var v;
      n[10] !== a || n[11] !== m.length
        ? ((v =
            m.length > 3 &&
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
                      (a(), _());
                    },
                    children: s._(/*BTDS*/ "See all"),
                  },
                ),
              ),
            })),
          (n[10] = a),
          (n[11] = m.length),
          (n[12] = v))
        : (v = n[12]);
      var S;
      return (
        n[13] !== h || n[14] !== y || n[15] !== C || n[16] !== v
          ? ((S = c.jsxs(c.Fragment, { children: [h, y, C, v] })),
            (n[13] = h),
            (n[14] = y),
            (n[15] = C),
            (n[16] = v),
            (n[17] = S))
          : (S = n[17]),
        S
      );
    }
    function E() {
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
        orderDetailsCreationAction: o("WAWebWamEnumOrderDetailsCreationAction")
          .ORDER_DETAILS_CREATION_ACTION.CLICK_SEE_ALL_ORDER_REQUESTS,
      }).commit();
    }
    function k(e) {
      var t = o("react-compiler-runtime").c(31),
        n = e.isInitialStep,
        a = e.onBack,
        i = e.onSeeAll,
        l = e.ref,
        u = n === void 0 ? !1 : n,
        d = p(null),
        _ = o("useWAWebGetOrders").useGetOrders(
          d,
          f,
          o("useWAWebGetOrders").OrderManagementViewType.CHARGES_HOME,
        ),
        g = _.isLoading,
        h = _.ordersInfoMap,
        y = _.ordersLazylist,
        C = h.contactAndOrderInfoMap,
        b = h.orderStatusInfoMap,
        v;
      t[0] !== u || t[1] !== a
        ? ((v = {}),
          u ? (v.onCancel = a) : (v.onBack = a),
          (t[0] = u),
          (t[1] = a),
          (t[2] = v))
        : (v = t[2]);
      var E;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = o("WAWebBizGatingUtils").isOrderContentOptimizationEnabled()
            ? s._(/*BTDS*/ "Charges")
            : s._(/*BTDS*/ "Orders")),
          (t[3] = E))
        : (E = t[3]);
      var k;
      t[4] !== v
        ? ((k = c.jsx(
            o("WAWebDrawerHeader.react").DrawerHeader,
            babelHelpers.extends(
              {
                testid: void 0,
                title: E,
                type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              },
              v,
            ),
          )),
          (t[4] = v),
          (t[5] = k))
        : (k = t[5]);
      var D, x, $, P;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = "x1280gxy x5yr21d"),
          (x =
            o("WAWebBizGatingUtils").paymentsHomeEnabled() &&
            c.jsx(r("WAWebBizChargesInfoBanner.react"), {})),
          ($ =
            !o("WAWebBizGatingUtils").paymentsHomeEnabled() &&
            c.jsx(r("WAWebBizOrderManagementPaymentMethodsSection.react"), {})),
          (P = c.jsx(r("WAWebBizOrderManagementSettingsSection.react"), {})),
          (t[6] = D),
          (t[7] = x),
          (t[8] = $),
          (t[9] = P))
        : ((D = t[6]), (x = t[7]), ($ = t[8]), (P = t[9]));
      var N;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = "x1280gxy x94v8gs xw2csxc x1odjw0f"), (t[10] = N))
        : (N = t[10]);
      var M;
      t[11] !== i
        ? ((M =
            o("WAWebBizGatingUtils").isSellerOrderRevampEnabled() &&
            c.jsx(L, { onSeeAll: i, scrollElementRef: d })),
          (t[11] = i),
          (t[12] = M))
        : (M = t[12]);
      var w;
      t[13] !== C || t[14] !== b || t[15] !== y
        ? ((w = y.map(function (e, t) {
            var n, r;
            return c.jsxs(
              m,
              {
                children: [
                  c.jsx(T, {
                    date: o("WAWebOrderFetcher").getOrderDisplayDate(C, y, t),
                  }),
                  c.jsx(I, {
                    contactAndOrderInfo: C[e],
                    orderStatusInfo:
                      (n = (r = b[e]) == null ? void 0 : r.status) != null
                        ? n
                        : o("WAWebOrderStatus").getDefaultOrderStatus(),
                  }),
                ],
              },
              e,
            );
          })),
          (t[13] = C),
          (t[14] = b),
          (t[15] = y),
          (t[16] = w))
        : (w = t[16]);
      var A;
      t[17] !== g
        ? ((A =
            g &&
            c.jsx(o("WAWebFlex.react").FlexRow, {
              justify: "center",
              xstyle: o("WAWebUISpacing").uiPadding.all16,
              children: c.jsx(o("WAWebSpinner.react").Spinner, {
                color: "default",
                size: 24,
                stroke: 6,
              }),
            })),
          (t[17] = g),
          (t[18] = A))
        : (A = t[18]);
      var F;
      t[19] !== g || t[20] !== y.length
        ? ((F = !g && !y.length && c.jsx(S, {})),
          (t[19] = g),
          (t[20] = y.length),
          (t[21] = F))
        : (F = t[21]);
      var O;
      t[22] !== M || t[23] !== w || t[24] !== A || t[25] !== F
        ? ((O = c.jsxs(r("WAWebDrawerBody.react"), {
            className: D,
            children: [
              x,
              $,
              P,
              c.jsxs(r("WAWebDrawerSection.react"), {
                ref: d,
                className: N,
                animation: !1,
                children: [M, w, A, F],
              }),
            ],
          })),
          (t[22] = M),
          (t[23] = w),
          (t[24] = A),
          (t[25] = F),
          (t[26] = O))
        : (O = t[26]);
      var B;
      return (
        t[27] !== l || t[28] !== O || t[29] !== k
          ? ((B = c.jsxs(r("WAWebDrawer.react"), {
              ref: l,
              tsNavigationData: R,
              children: [k, O],
            })),
            (t[27] = l),
            (t[28] = O),
            (t[29] = k),
            (t[30] = B))
          : (B = t[30]),
        B
      );
    }
    function I(t) {
      var n = o("react-compiler-runtime").c(33),
        a = t.contactAndOrderInfo,
        i = t.orderStatusInfo,
        l = r("useWAWebUIM")(),
        s;
      n[0] !== a || n[1] !== l
        ? ((s = function () {
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
          }),
          (n[0] = a),
          (n[1] = l),
          (n[2] = s))
        : (s = n[2]);
      var u = s,
        d,
        m;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = { className: "x6s0dn4 x78zum5 xvt47uu x1yc453h xh8yej3" }),
          (m = (e || (e = r("stylex"))).props(
            o("WAWebUISpacing").uiPadding.vert12,
            o("WAWebUISpacing").uiPadding.horiz16,
          )),
          (n[3] = d),
          (n[4] = m))
        : ((d = n[3]), (m = n[4]));
      var p;
      n[5] !== a.contact.id
        ? ((p = c.jsx(
            "div",
            babelHelpers.extends({}, m, {
              children: c.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: a.contact.id,
                size: 40,
              }),
            }),
          )),
          (n[5] = a.contact.id),
          (n[6] = p))
        : (p = n[6]);
      var _;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = (e || (e = r("stylex"))).props(
            g.orderInfo,
            o("WAWebUISpacing").uiPadding.vert10,
            o("WAWebUISpacing").uiPadding.end16,
          )),
          (n[7] = _))
        : (_ = n[7]);
      var f;
      n[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = "x1iyjqo2"), (n[8] = f))
        : (f = n[8]);
      var h;
      n[9] !== a.contact
        ? ((h = c.jsx(o("WAWebName.react").Name, {
            titlify: !0,
            ellipsify: !0,
            className: f,
            contact: a.contact,
          })),
          (n[9] = a.contact),
          (n[10] = h))
        : (h = n[10]);
      var y;
      if (n[11] !== a.orderInfo.currency || n[12] !== a.orderInfo.totalAmount) {
        var b;
        ((y = o("WAWebCurrencyUtils").formatAmount(
          a.orderInfo.currency,
          (b = a.orderInfo.totalAmount) != null ? b : 0,
        )),
          (n[11] = a.orderInfo.currency),
          (n[12] = a.orderInfo.totalAmount),
          (n[13] = y));
      } else y = n[13];
      var S;
      n[14] !== y
        ? ((S = c.jsx("span", { children: y })), (n[14] = y), (n[15] = S))
        : (S = n[15]);
      var R;
      n[16] !== h || n[17] !== S
        ? ((R = c.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: g.title,
            children: [h, S],
          })),
          (n[16] = h),
          (n[17] = S),
          (n[18] = R))
        : (R = n[18]);
      var L;
      n[19] !== a.orderInfo.items
        ? ((L = c.jsx(v, { items: a.orderInfo.items })),
          (n[19] = a.orderInfo.items),
          (n[20] = L))
        : (L = n[20]);
      var E;
      n[21] !== i
        ? ((E = c.jsx(C, { orderStatusInfo: i })), (n[21] = i), (n[22] = E))
        : (E = n[22]);
      var k;
      n[23] !== L || n[24] !== E
        ? ((k = c.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: g.orderSubDetails,
            children: [L, E],
          })),
          (n[23] = L),
          (n[24] = E),
          (n[25] = k))
        : (k = n[25]);
      var I;
      n[26] !== R || n[27] !== k
        ? ((I = c.jsxs(
            "div",
            babelHelpers.extends({}, _, { children: [R, k] }),
          )),
          (n[26] = R),
          (n[27] = k),
          (n[28] = I))
        : (I = n[28]);
      var T;
      return (
        n[29] !== u || n[30] !== I || n[31] !== p
          ? ((T = c.jsxs(
              "button",
              babelHelpers.extends({ "data-testid": void 0, onClick: u }, d, {
                children: [p, I],
              }),
            )),
            (n[29] = u),
            (n[30] = I),
            (n[31] = p),
            (n[32] = T))
          : (T = n[32]),
        T
      );
    }
    function T(t) {
      var n = o("react-compiler-runtime").c(2),
        a = t.date,
        i = a === void 0 ? "" : a,
        l;
      return (
        n[0] !== i
          ? ((l =
              i &&
              c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    g.infoRow,
                    o("WAWebUISpacing").uiPadding.horiz16,
                    o("WAWebUISpacing").uiPadding.vert10,
                  ),
                  { children: i.toUpperCase() },
                ),
              )),
            (n[0] = i),
            (n[1] = l))
          : (l = n[1]),
        l
      );
    }
    l.default = h;
  },
  226,
);
