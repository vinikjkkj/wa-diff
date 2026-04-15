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
    "react-compiler-runtime",
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
        a = o("react-compiler-runtime").c(43),
        i,
        l;
      a[0] !== t
        ? ((l = t.ref),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (a[0] = t),
          (a[1] = i),
          (a[2] = l))
        : ((i = a[1]), (l = a[2]));
      var s;
      a[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE()),
          (a[3] = s))
        : (s = a[3]);
      var u = s,
        c = i,
        m = c.chat,
        _ = c.orderInfo,
        f = c.sellerWid,
        h = _.referenceId,
        v = _.totalAmount,
        S = r("useWAWebOrderDetailItems")(_, f),
        L = S.isLoading,
        E = S.orderItems,
        k;
      a[4] !== m || a[5] !== h
        ? ((k = o("WAWebOrderStatus").findOrderStatus(m, h)),
          (a[4] = m),
          (a[5] = h),
          (a[6] = k))
        : (k = a[6]);
      var I = k,
        T = (n = i.onlyShowPaymentDetails) != null ? n : !1,
        D,
        x;
      (a[7] !== i.entryPoint
        ? ((D = function () {
            var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
            new (o(
              "WAWebOrderDetailsActionsSmbWamEvent",
            ).OrderDetailsActionsSmbWamEvent)({
              actionCategory: String(
                r("WAWebOrderDetailsActionCategory").ORDER_DETAILS_MANAGEMENT,
              ),
              hasCatalog: o("WAWebBusinessProfileUtils").hasCatalog(
                o(
                  "WAWebBusinessProfileCollection",
                ).BusinessProfileCollection.get(e),
              ),
              orderDetailEntryPoint: String(i.entryPoint),
              orderDetailsCreationAction: o(
                "WAWebWamEnumOrderDetailsCreationAction",
              ).ORDER_DETAILS_CREATION_ACTION.VIEW_ORDER_DETAILS,
            }).commit();
          }),
          (x = [i.entryPoint]),
          (a[7] = i.entryPoint),
          (a[8] = D),
          (a[9] = x))
        : ((D = a[8]), (x = a[9])),
        p(D, x));
      var $ = E.length > 0,
        P;
      a[10] !== m || a[11] !== _ || a[12] !== I || a[13] !== f
        ? ((P = function () {
            o("WAWebBizSendOrderAction")
              .sendOrderPaymentMethodUpdate({
                chat: m,
                offset: o("WAWebOrderDetailMath").DEFAULT_OFFSET,
                orderInfo: _,
                orderNote: null,
                orderStatus: I,
                paymentMethod: o("WAWebOrderPaymentStatus").OrderPaymentMethod
                  .Confirm,
                paymentStatus: null,
                sellerJid: f.toJid(),
              })
              .finally(C);
          }),
          (a[10] = m),
          (a[11] = _),
          (a[12] = I),
          (a[13] = f),
          (a[14] = P))
        : (P = a[14]);
      var N = P,
        M = i.onBack,
        w;
      a[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = o("WAWebBizGatingUtils").isOrderContentOptimizationEnabled()),
          (a[15] = w))
        : (w = a[15]);
      var A;
      a[16] !== $ || a[17] !== T
        ? ((A = y({
            containsOrder: $,
            onlyShowPaymentDetails: T,
            optimizationEnabled: w,
          })),
          (a[16] = $),
          (a[17] = T),
          (a[18] = A))
        : (A = a[18]);
      var F;
      a[19] !== i.onBack || a[20] !== A
        ? ((F = d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: A,
            onBack: i.onBack,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          })),
          (a[19] = i.onBack),
          (a[20] = A),
          (a[21] = F))
        : (F = a[21]);
      var O = L ? "center-content" : void 0,
        B;
      a[22] !== m ||
      a[23] !== $ ||
      a[24] !== L ||
      a[25] !== T ||
      a[26] !== _ ||
      a[27] !== E ||
      a[28] !== I ||
      a[29] !== i.interactiveMessage ||
      a[30] !== i.onOrderStatusUpdateClick ||
      a[31] !== f ||
      a[32] !== N ||
      a[33] !== v
        ? ((B = L
            ? d.jsx(R, {})
            : d.jsx(b, {
                containsOrder: $,
                onlyShowPaymentDetails: T,
                chat: m,
                interactiveMessage: i.interactiveMessage,
                onOrderStatusUpdateClick: i.onOrderStatusUpdateClick,
                orderInfo: _,
                orderItems: E,
                orderStatus: I,
                sellerWid: f,
                sendConfirmOrderInfo: N,
                totalAmount: v,
                userWid: u,
              })),
          (a[22] = m),
          (a[23] = $),
          (a[24] = L),
          (a[25] = T),
          (a[26] = _),
          (a[27] = E),
          (a[28] = I),
          (a[29] = i.interactiveMessage),
          (a[30] = i.onOrderStatusUpdateClick),
          (a[31] = f),
          (a[32] = N),
          (a[33] = v),
          (a[34] = B))
        : (B = a[34]);
      var W;
      a[35] !== O || a[36] !== B
        ? ((W = d.jsx(r("WAWebDrawerBody.react"), { theme: O, children: B })),
          (a[35] = O),
          (a[36] = B),
          (a[37] = W))
        : (W = a[37]);
      var q;
      return (
        a[38] !== i.onBack || a[39] !== l || a[40] !== W || a[41] !== F
          ? ((q = d.jsxs(r("WAWebDrawer.react"), {
              onDrop: M,
              ref: l,
              tsNavigationData: g,
              children: [F, W],
            })),
            (a[38] = i.onBack),
            (a[39] = l),
            (a[40] = W),
            (a[41] = F),
            (a[42] = q))
          : (q = a[42]),
        q
      );
    }
    function y(e) {
      if (
        (((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.onlyShowPaymentDetails === !0) ||
        (((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.containsOrder === !1)
      )
        return s._(/*BTDS*/ "Payment details");
      if (
        ((typeof e == "object" && e !== null) || typeof e == "function") &&
        e.containsOrder === !0 &&
        e.optimizationEnabled === !0
      )
        return s._(/*BTDS*/ "Charge details");
      if ((typeof e == "object" && e !== null) || typeof e == "function")
        return s._(/*BTDS*/ "Order details");
      throw Error(
        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
          e,
      );
    }
    function C() {
      (o("WAWebDrawerManager").DrawerManager.closeDrawerRight(),
        r("WAWebNoop")());
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.chat,
        r = e.containsOrder,
        a = e.interactiveMessage,
        i = e.onlyShowPaymentDetails,
        l = e.onOrderStatusUpdateClick,
        s = e.orderInfo,
        u = e.orderItems,
        c = e.orderStatus,
        m = e.sellerWid,
        p = e.sendConfirmOrderInfo,
        _ = e.totalAmount,
        f = e.userWid,
        g = i || !r,
        h;
      return (
        t[0] !== n ||
        t[1] !== a ||
        t[2] !== l ||
        t[3] !== i ||
        t[4] !== s ||
        t[5] !== u ||
        t[6] !== c ||
        t[7] !== m ||
        t[8] !== p ||
        t[9] !== g ||
        t[10] !== _ ||
        t[11] !== f
          ? ((h = g
              ? d.jsx(S, {
                  chat: n,
                  interactiveMessage: a,
                  onlyShowPaymentDetails: i,
                  onOrderStatusUpdateClick: l,
                  orderInfo: s,
                  orderStatus: c,
                  sellerWid: m,
                  totalAmount: _,
                  userWid: f,
                })
              : d.jsx(v, {
                  chat: n,
                  interactiveMessage: a,
                  onOrderStatusUpdateClick: l,
                  orderInfo: s,
                  orderItems: u,
                  orderStatus: c,
                  sellerWid: m,
                  sendConfirmOrderInfo: p,
                  totalAmount: _,
                  userWid: f,
                })),
            (t[0] = n),
            (t[1] = a),
            (t[2] = l),
            (t[3] = i),
            (t[4] = s),
            (t[5] = u),
            (t[6] = c),
            (t[7] = m),
            (t[8] = p),
            (t[9] = g),
            (t[10] = _),
            (t[11] = f),
            (t[12] = h))
          : (h = t[12]),
        h
      );
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(48),
        n = e.chat,
        a = e.interactiveMessage,
        i = e.onOrderStatusUpdateClick,
        l = e.orderInfo,
        c = e.orderItems,
        m = e.orderStatus,
        p = e.sellerWid,
        _ = e.sendConfirmOrderInfo,
        g = e.totalAmount,
        h = e.userWid,
        y = l.discount,
        C = l.shipping,
        b = l.subtotal,
        v = l.tax;
      if (b == null) return null;
      var S;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = [
            o("WAWebUISpacing").uiPadding.top20,
            o("WAWebUISpacing").uiPadding.bottom15,
          ]),
          (t[0] = S))
        : (S = t[0]);
      var R;
      t[1] !== m
        ? ((R = d.jsx(r("WAWebOrderDetailStatusPill.react"), {
            orderStatus: m,
          })),
          (t[1] = m),
          (t[2] = R))
        : (R = t[2]);
      var L;
      t[3] !== l.referenceId || t[4] !== p || t[5] !== R
        ? ((L = d.jsx(r("WAWebOrderDetailSellerProfile.react"), {
            testid: void 0,
            orderId: l.referenceId,
            sellerWid: p,
            orderStatus: R,
          })),
          (t[3] = l.referenceId),
          (t[4] = p),
          (t[5] = R),
          (t[6] = L))
        : (L = t[6]);
      var k;
      t[7] !== l.currency || t[8] !== c
        ? ((k = d.jsx(r("WAWebOrderDetailItems"), {
            details: !0,
            currency: l.currency,
            items: c,
          })),
          (t[7] = l.currency),
          (t[8] = c),
          (t[9] = k))
        : (k = t[9]);
      var I = v != null ? v * o("WAWebOrderDetailMath").DEFAULT_OFFSET : null,
        T = y != null ? y * o("WAWebOrderDetailMath").DEFAULT_OFFSET : null,
        D = C != null ? C * o("WAWebOrderDetailMath").DEFAULT_OFFSET : null,
        x = b * o("WAWebOrderDetailMath").DEFAULT_OFFSET,
        $;
      t[10] !== l.currency ||
      t[11] !== I ||
      t[12] !== T ||
      t[13] !== D ||
      t[14] !== x
        ? (($ = d.jsx(o("WAWebOrderSummaryDrawer").OrderValues, {
            tax: I,
            discount: T,
            shipping: D,
            subtotal: x,
            currency: l.currency,
            canDisplayAdditionalCharges: !0,
          })),
          (t[10] = l.currency),
          (t[11] = I),
          (t[12] = T),
          (t[13] = D),
          (t[14] = x),
          (t[15] = $))
        : ($ = t[15]);
      var P;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = d.jsx(o("WAWebText.react").WAWebTextTitle, {
            as: "span",
            children: s._(/*BTDS*/ "Total"),
          })),
          (t[16] = P))
        : (P = t[16]);
      var N;
      t[17] !== l.currency || t[18] !== g
        ? ((N = o("WAWebCurrencyUtils").formatAmount(l.currency, g)),
          (t[17] = l.currency),
          (t[18] = g),
          (t[19] = N))
        : (N = t[19]);
      var M;
      t[20] !== N
        ? ((M = d.jsxs(o("WAWebFlex.react").FlexRow, {
            justify: "all",
            xstyle: o("WAWebUISpacing").uiPadding.horiz16,
            testid: void 0,
            children: [
              P,
              d.jsx(o("WAWebText.react").WAWebTextTitle, {
                as: "span",
                children: N,
              }),
            ],
          })),
          (t[20] = N),
          (t[21] = M))
        : (M = t[21]);
      var w;
      t[22] !== M || t[23] !== L || t[24] !== k || t[25] !== $
        ? ((w = d.jsx(r("WAWebDrawerSection.react"), {
            xstyle: S,
            children: d.jsxs(r("WAWebOrderDetailSectionContainer.react"), {
              children: [L, k, $, M],
            }),
          })),
          (t[22] = M),
          (t[23] = L),
          (t[24] = k),
          (t[25] = $),
          (t[26] = w))
        : (w = t[26]);
      var A;
      if (t[27] !== p.user || t[28] !== h.user) {
        var F, O;
        ((A =
          h.user === p.user &&
          ((F =
            (O = o(
              "WAWebOrdersExpansionCountries",
            ).getOrdersExpansionAllowedCountries()) == null
              ? void 0
              : O.length) != null
            ? F
            : 0) > 0 &&
          d.jsx(r("WAWebDrawerSection.react"), {
            children: d.jsxs(o("WAWebDrawerButton.react").DrawerButtonSimple, {
              icon: d.jsx(o("WAWebStatusClockIcon.react").StatusClockIcon, {
                width: 20,
              }),
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
            }),
          })),
          (t[27] = p.user),
          (t[28] = h.user),
          (t[29] = A));
      } else A = t[29];
      var B;
      t[30] !== i || t[31] !== m || t[32] !== p.user || t[33] !== h.user
        ? ((B =
            [
              o("WAWebOrderStatus").OrderStatus.Canceled,
              o("WAWebOrderStatus").OrderStatus.Complete,
            ].every(function (e) {
              return m !== e;
            }) &&
            h.user === p.user &&
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
            })),
          (t[30] = i),
          (t[31] = m),
          (t[32] = p.user),
          (t[33] = h.user),
          (t[34] = B))
        : (B = t[34]);
      var W;
      if (
        t[35] !== n ||
        t[36] !== a ||
        t[37] !== l ||
        t[38] !== m ||
        t[39] !== p.user ||
        t[40] !== _ ||
        t[41] !== h.user
      ) {
        var q, U;
        ((W =
          h.user !== p.user &&
          m === o("WAWebOrderStatus").OrderStatus.Pending &&
          ((q =
            (U = o(
              "WAWebOrdersExpansionCountries",
            ).getConsumerOrdersExpansionAllowedCountries()) == null
              ? void 0
              : U.length) != null
            ? q
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
                  children: d.jsx(E, {
                    sendConfirmOrderInfo: _,
                    chat: n,
                    orderInfo: l,
                    interactiveMessage: a,
                  }),
                },
              ),
            ),
          })),
          (t[35] = n),
          (t[36] = a),
          (t[37] = l),
          (t[38] = m),
          (t[39] = p.user),
          (t[40] = _),
          (t[41] = h.user),
          (t[42] = W));
      } else W = t[42];
      var V;
      return (
        t[43] !== w || t[44] !== A || t[45] !== B || t[46] !== W
          ? ((V = d.jsxs(d.Fragment, { children: [w, A, B, W] })),
            (t[43] = w),
            (t[44] = A),
            (t[45] = B),
            (t[46] = W),
            (t[47] = V))
          : (V = t[47]),
        V
      );
    }
    function S(e) {
      var t = o("react-compiler-runtime").c(50),
        n = e.chat,
        a = e.interactiveMessage,
        i = e.onlyShowPaymentDetails,
        l = e.onOrderStatusUpdateClick,
        c = e.orderInfo,
        m = e.orderStatus,
        p = e.sellerWid,
        _ = e.totalAmount,
        g = e.userWid,
        h = n.contact,
        y;
      t[0] !== h
        ? ((y =
            h.verifiedName ||
            h.name ||
            o("WAWebFrontendContactGetters").getDisplayName(h)),
          (t[0] = h),
          (t[1] = y))
        : (y = t[1]);
      var C = y,
        b = _ * 1e3,
        v;
      t[2] !== c.currency || t[3] !== b
        ? ((v = o("WAWebCurrencyUtils").formatAmount1000ToParts(c.currency, b)),
          (t[2] = c.currency),
          (t[3] = b),
          (t[4] = v))
        : (v = t[4]);
      var S = v,
        R = o("useWAWebOrderPaymentStatus").useOrderPaymentStatus(
          n,
          c.referenceId,
        ),
        E;
      t[5] !== a || t[6] !== p || t[7] !== g
        ? ((E =
            a != null
              ? o("WAWebMsgGetters").getIsSentByMe(a)
              : g.user === p.user),
          (t[5] = a),
          (t[6] = p),
          (t[7] = g),
          (t[8] = E))
        : (E = t[8]);
      var k = E,
        I;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = [
            o("WAWebUISpacing").uiPadding.top20,
            o("WAWebUISpacing").uiPadding.bottom15,
          ]),
          (t[9] = I))
        : (I = t[9]);
      var T;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = {
            className: "x6s0dn4 x78zum5 xdt5ytf x1p5oq8j xwxc41k x2b8uid",
          }),
          (t[10] = T))
        : (T = t[10]);
      var D;
      t[11] !== m
        ? ((D = {
            0: { className: "x1heor9g x1weigxw x1s688f" },
            1: {
              className: "x18cpw0e x1weigxw x1s688f xmqliwb x13zicib xudwaec",
            },
          }[(m === o("WAWebOrderStatus").OrderStatus.Canceled) << 0]),
          (t[11] = m),
          (t[12] = D))
        : (D = t[12]);
      var x = S.symbol + " " + S.integer + S.decimal,
        $;
      t[13] !== D || t[14] !== x
        ? (($ = d.jsx(r("WAWebDrawerSection.react"), {
            testid: void 0,
            children: d.jsx(
              "div",
              babelHelpers.extends({}, T, {
                children: d.jsx(
                  "span",
                  babelHelpers.extends({}, D, { children: x }),
                ),
              }),
            ),
          })),
          (t[13] = D),
          (t[14] = x),
          (t[15] = $))
        : ($ = t[15]);
      var P;
      t[16] !== i || t[17] !== R
        ? ((P = d.jsx(L, { currentStatus: R, onlyShowPaymentDetails: i })),
          (t[16] = i),
          (t[17] = R),
          (t[18] = P))
        : (P = t[18]);
      var N;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = { className: "x6s0dn4 x78zum5 x1q0g3np x1mfogq2 xz9dl7a" }),
          (t[19] = N))
        : (N = t[19]);
      var M;
      t[20] !== p
        ? ((M = d.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: p,
            size: 48,
          })),
          (t[20] = p),
          (t[21] = M))
        : (M = t[21]);
      var w, A;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = { className: "x1cy8zhl x78zum5 xdt5ytf" }),
          (A = { className: "xhslqc4 x1f6kntn xo1l8bm xwn43p0" }),
          (t[22] = w),
          (t[23] = A))
        : ((w = t[22]), (A = t[23]));
      var F;
      t[24] !== k
        ? ((F = d.jsx(
            "span",
            babelHelpers.extends({}, A, {
              children: k ? s._(/*BTDS*/ "Sent to") : s._(/*BTDS*/ "Sent from"),
            }),
          )),
          (t[24] = k),
          (t[25] = F))
        : (F = t[25]);
      var O;
      t[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = { className: "x1f6kntn xo1l8bm xwn43p0 x123j3cw" }),
          (t[26] = O))
        : (O = t[26]);
      var B;
      t[27] !== C
        ? ((B = d.jsx(
            "span",
            babelHelpers.extends({}, O, {
              children: s._(/*BTDS*/ "{merchant-name}", [
                s._param("merchant-name", C),
              ]),
            }),
          )),
          (t[27] = C),
          (t[28] = B))
        : (B = t[28]);
      var W;
      t[29] !== F || t[30] !== B
        ? ((W = d.jsxs(
            "div",
            babelHelpers.extends({}, w, { children: [F, B] }),
          )),
          (t[29] = F),
          (t[30] = B),
          (t[31] = W))
        : (W = t[31]);
      var q;
      t[32] !== M || t[33] !== W
        ? ((q = d.jsx(r("WAWebDrawerSection.react"), {
            children: d.jsxs(
              "div",
              babelHelpers.extends({}, N, { children: [M, W] }),
            ),
          })),
          (t[32] = M),
          (t[33] = W),
          (t[34] = q))
        : (q = t[34]);
      var U;
      t[35] !== P || t[36] !== q || t[37] !== $
        ? ((U = d.jsxs(r("WAWebDrawerSection.react"), {
            xstyle: I,
            children: [$, P, q],
          })),
          (t[35] = P),
          (t[36] = q),
          (t[37] = $),
          (t[38] = U))
        : (U = t[38]);
      var V;
      t[39] !== n ||
      t[40] !== l ||
      t[41] !== i ||
      t[42] !== c ||
      t[43] !== m ||
      t[44] !== p ||
      t[45] !== g
        ? ((V =
            !i &&
            !o("WAWebOrderStatus").isPaymentRequest(n, c) &&
            [
              o("WAWebOrderStatus").OrderStatus.Canceled,
              o("WAWebOrderStatus").OrderStatus.Complete,
            ].every(function (e) {
              return m !== e;
            }) &&
            g.user === p.user &&
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
                        l == null || l();
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
            })),
          (t[39] = n),
          (t[40] = l),
          (t[41] = i),
          (t[42] = c),
          (t[43] = m),
          (t[44] = p),
          (t[45] = g),
          (t[46] = V))
        : (V = t[46]);
      var H;
      return (
        t[47] !== U || t[48] !== V
          ? ((H = d.jsxs(d.Fragment, { children: [U, V] })),
            (t[47] = U),
            (t[48] = V),
            (t[49] = H))
          : (H = t[49]),
        H
      );
    }
    function R() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = d.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "center",
              testid: void 0,
              children: d.jsx(r("WAWebFlexItem.react"), {
                children: d.jsx(o("WAWebSpinner.react").Spinner, {}),
              }),
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function L(e) {
      var t = o("react-compiler-runtime").c(22),
        n = e.currentStatus,
        a = e.onlyShowPaymentDetails,
        i,
        l,
        u,
        c;
      e: {
        if (n === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Captured) {
          var m;
          (t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((m = d.jsx(o("WAWebWebIcCheckIcon.react").WebIcCheckIcon, {
                iconXstyle: f.checkIcon,
              })),
              (t[0] = m))
            : (m = t[0]),
            (i = m),
            (l = "contentActionEmphasized"));
          var p;
          (t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((p = s._(/*BTDS*/ "Completed")), (t[1] = p))
            : (p = t[1]),
            (u = p));
          var _;
          (t[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((_ = s._(/*BTDS*/ "Payment sent")), (t[2] = _))
            : (_ = t[2]),
            (c = _));
          break e;
        }
        if (n === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Failed) {
          var g;
          (t[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((g = d.jsx(r("WDSIconWdsIcCurrencyReal.react"), {
                width: 46,
                height: 46,
                iconXstyle: f.canceledIcon,
              })),
              (t[3] = g))
            : (g = t[3]),
            (i = g),
            (l = "secondaryNegative"));
          var h;
          (t[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = s._(/*BTDS*/ "Failed")), (t[4] = h))
            : (h = t[4]),
            (u = h));
          var y;
          (t[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((y = s._(/*BTDS*/ "Payment was not sent")), (t[5] = y))
            : (y = t[5]),
            (c = y));
          break e;
        }
        if (
          n === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Pending ||
          n === null ||
          n === void 0
        ) {
          var C;
          (t[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((C = d.jsx(r("WDSIconWdsIcCurrencyReal.react"), {
                width: 46,
                height: 46,
                iconXstyle: f.pendingIcon,
              })),
              (t[6] = C))
            : (C = t[6]),
            (i = C),
            (l = "contentDeemphasized"));
          var b;
          (t[7] !== a
            ? ((b = a ? s._(/*BTDS*/ "Requested") : s._(/*BTDS*/ "Pending")),
              (t[7] = a),
              (t[8] = b))
            : (b = t[8]),
            (u = b));
          var v;
          (t[9] !== a
            ? ((v = a
                ? s._(/*BTDS*/ "Payment requested")
                : s._(/*BTDS*/ "Processing payment")),
              (t[9] = a),
              (t[10] = v))
            : (v = t[10]),
            (c = v));
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            n,
        );
      }
      var S;
      t[11] !== l || t[12] !== u
        ? ((S = d.jsx(r("WDSText.react"), {
            type: "Body2Emphasized",
            colorName: l,
            xstyle: f.statusTextPadding,
            children: u,
          })),
          (t[11] = l),
          (t[12] = u),
          (t[13] = S))
        : (S = t[13]);
      var R;
      t[14] !== c
        ? ((R = d.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDefault",
            xstyle: f.paymentSentTextPadding,
            children: c,
          })),
          (t[14] = c),
          (t[15] = R))
        : (R = t[15]);
      var L;
      t[16] !== S || t[17] !== R
        ? ((L = d.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "start",
            children: [S, R],
          })),
          (t[16] = S),
          (t[17] = R),
          (t[18] = L))
        : (L = t[18]);
      var E;
      return (
        t[19] !== i || t[20] !== L
          ? ((E = d.jsx(r("WAWebDrawerSection.react"), {
              children: d.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                xstyle: f.statusRowPadding,
                children: [i, L],
              }),
            })),
            (t[19] = i),
            (t[20] = L),
            (t[21] = E))
          : (E = t[21]),
        E
      );
    }
    function E(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.chat,
        r = e.interactiveMessage,
        a = e.orderInfo,
        i = e.sendConfirmOrderInfo,
        l;
      t[0] !== n || t[1] !== r || t[2] !== a
        ? ((l = k(n, r, a)), (t[0] = n), (t[1] = r), (t[2] = a), (t[3] = l))
        : (l = t[3]);
      var u = l,
        c = u == null ? void 0 : u.Icon;
      if (u) {
        var m;
        t[4] !== c
          ? ((m = c && d.jsx(c, {})), (t[4] = c), (t[5] = m))
          : (m = t[5]);
        var p;
        return (
          t[6] !== u.label || t[7] !== u.onClick || t[8] !== m
            ? ((p = d.jsxs(o("WAWebButton.react").Button, {
                testid: void 0,
                type: "primary",
                onClick: u.onClick,
                children: [m, u.label],
              })),
              (t[6] = u.label),
              (t[7] = u.onClick),
              (t[8] = m),
              (t[9] = p))
            : (p = t[9]),
          p
        );
      }
      var _;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = o("WAWebBizGatingUtils").isOrderContentOptimizationEnabled()
            ? s._(/*BTDS*/ "Confirm info")
            : s._(/*BTDS*/ "Confirm order info")),
          (t[10] = _))
        : (_ = t[10]);
      var f;
      return (
        t[11] !== i
          ? ((f = d.jsx(o("WAWebButton.react").Button, {
              testid: void 0,
              type: "primary",
              onClick: i,
              children: _,
            })),
            (t[11] = i),
            (t[12] = f))
          : (f = t[12]),
        f
      );
    }
    function k(e, t, n) {
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
