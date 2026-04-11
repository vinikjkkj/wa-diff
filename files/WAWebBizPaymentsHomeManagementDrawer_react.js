__d(
  "WAWebBizPaymentsHomeManagementDrawer.react",
  [
    "fbt",
    "WAWebBizNoPaymentHistory.react",
    "WAWebBizPaymentDetail.react",
    "WAWebBizPaymentsHomeBanner.react",
    "WAWebBizPaymentsHomeManagementPaymentMethodsSection.react",
    "WAWebBizRequestPaymentButton.react",
    "WAWebBizSeeAllPaymentsButton.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WAWebPaymentsUserActionLogging",
    "WAWebSpinner.react",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebWamEnumPaymentActionTypes",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebGetOrders",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useRef,
      p = 65,
      _ = {
        headerPadding: {
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "xf7dkkf",
          paddingInlineEnd: "xv54qhq",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        paddingAll16: {
          paddingTop: "x1p57kb1",
          paddingInlineEnd: "xvtqlqk",
          paddingBottom: "xvpt6g3",
          paddingInlineStart: "xdx6fka",
          $$css: !0,
        },
      };
    function f(e) {
      var t = o("react-compiler-runtime").c(50),
        n = e.isInitialStep,
        a = e.onBack,
        i = e.onRequestPayment,
        l = e.onSeeAll,
        c = e.onTryIt,
        f = e.ref,
        g = e.referral,
        h = n === void 0 ? !1 : n,
        y = g === void 0 ? "from_business_tools" : g,
        C = m(null),
        b = o("useWAWebGetOrders").useGetOrders(
          C,
          p,
          o("useWAWebGetOrders").OrderManagementViewType.PAYMENTS_HOME,
        ),
        v = b.isLoading,
        S = b.ordersInfoMap,
        R = b.ordersLazylist,
        L = S.contactAndOrderInfoMap,
        E = S.orderStatusInfoMap,
        k,
        I;
      (t[0] !== y
        ? ((k = function () {
            o("WAWebSyncdMdSyncFieldstatMeta")
              .MdSyncFieldStatsMeta.getMdSessionId()
              .then(function (e) {
                o("WAWebPaymentsUserActionLogging").logPaymentsHomeEvent({
                  paymentActionType: o("WAWebWamEnumPaymentActionTypes")
                    .PAYMENT_ACTION_TYPES.VIEW,
                  paymentsEventId: e,
                  referral: y,
                });
              });
          }),
          (I = [y]),
          (t[0] = y),
          (t[1] = k),
          (t[2] = I))
        : ((k = t[1]), (I = t[2])),
        d(k, I));
      var T;
      t[3] !== h || t[4] !== a
        ? ((T = {}),
          h ? (T.onCancel = a) : (T.onBack = a),
          (t[3] = h),
          (t[4] = a),
          (t[5] = T))
        : (T = t[5]);
      var D;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = { surface: "unknown", viewName: "biz-payments-home" }),
          (t[6] = D))
        : (D = t[6]);
      var x;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = s._(/*BTDS*/ "Payments")), (t[7] = x))
        : (x = t[7]);
      var $;
      t[8] !== i
        ? (($ = u.jsx(r("WAWebBizRequestPaymentButton.react"), { onPress: i })),
          (t[8] = i),
          (t[9] = $))
        : ($ = t[9]);
      var P;
      t[10] !== T || t[11] !== $
        ? ((P = u.jsx(
            o("WAWebDrawerHeader.react").DrawerHeader,
            babelHelpers.extends(
              {
                testid: void 0,
                title: x,
                type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
                rightActionElement: $,
              },
              T,
            ),
          )),
          (t[10] = T),
          (t[11] = $),
          (t[12] = P))
        : (P = t[12]);
      var N;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = "x1280gxy x5yr21d"), (t[13] = N))
        : (N = t[13]);
      var M;
      t[14] !== c
        ? ((M = u.jsx(r("WAWebBizPaymentsHomeBanner.react"), { onTryIt: c })),
          (t[14] = c),
          (t[15] = M))
        : (M = t[15]);
      var w, A;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = u.jsx(
            r("WAWebBizPaymentsHomeManagementPaymentMethodsSection.react"),
            {},
          )),
          (A = u.jsx("div", {
            className: "x120ee7l x1q0q8m5 xso031l xd6izgl x6pxu1d",
          })),
          (t[16] = w),
          (t[17] = A))
        : ((w = t[16]), (A = t[17]));
      var F;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = "x1280gxy x16ovd2e"), (t[18] = F))
        : (F = t[18]);
      var O = R.length > 0 ? "all" : "start",
        B;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = u.jsx(r("WDSText.react"), {
            type: "Body2Emphasized",
            colorName: "contentDeemphasized",
            children: s._(/*BTDS*/ "Payment history"),
          })),
          (t[19] = B))
        : (B = t[19]);
      var W;
      t[20] !== l || t[21] !== R.length
        ? ((W =
            R.length > 0 &&
            u.jsx(r("WAWebBizSeeAllPaymentsButton.react"), { onPress: l })),
          (t[20] = l),
          (t[21] = R.length),
          (t[22] = W))
        : (W = t[22]);
      var q;
      t[23] !== O || t[24] !== W
        ? ((q = u.jsxs(o("WAWebFlex.react").FlexRow, {
            justify: O,
            align: "center",
            xstyle: _.headerPadding,
            children: [B, W],
          })),
          (t[23] = O),
          (t[24] = W),
          (t[25] = q))
        : (q = t[25]);
      var U;
      if (t[26] !== L || t[27] !== E || t[28] !== R) {
        var V;
        (t[30] !== L || t[31] !== E
          ? ((V = function (t) {
              return u.jsx(
                o("WAWebBizPaymentDetail.react").WAWebBizPaymentDetail,
                {
                  contactAndOrderInfo: L[t],
                  orderPaymentStatusInfo: o(
                    "WAWebBizPaymentDetail.react",
                  ).extractPaymentStatus(E, t),
                },
                t,
              );
            }),
            (t[30] = L),
            (t[31] = E),
            (t[32] = V))
          : (V = t[32]),
          (U = R.slice(0, 3).map(V)),
          (t[26] = L),
          (t[27] = E),
          (t[28] = R),
          (t[29] = U));
      } else U = t[29];
      var H;
      t[33] !== v
        ? ((H =
            v &&
            u.jsx(o("WAWebFlex.react").FlexRow, {
              justify: "center",
              xstyle: _.paddingAll16,
              children: u.jsx(o("WAWebSpinner.react").Spinner, {
                color: "default",
                size: 24,
                stroke: 6,
              }),
            })),
          (t[33] = v),
          (t[34] = H))
        : (H = t[34]);
      var G;
      t[35] !== v || t[36] !== R.length
        ? ((G =
            !v && !R.length && u.jsx(r("WAWebBizNoPaymentHistory.react"), {})),
          (t[35] = v),
          (t[36] = R.length),
          (t[37] = G))
        : (G = t[37]);
      var z;
      t[38] !== q || t[39] !== U || t[40] !== H || t[41] !== G
        ? ((z = u.jsxs(r("WAWebDrawerSection.react"), {
            ref: C,
            className: F,
            animation: !1,
            children: [q, U, H, G],
          })),
          (t[38] = q),
          (t[39] = U),
          (t[40] = H),
          (t[41] = G),
          (t[42] = z))
        : (z = t[42]);
      var j;
      t[43] !== M || t[44] !== z
        ? ((j = u.jsxs(r("WAWebDrawerBody.react"), {
            className: N,
            children: [M, w, A, z],
          })),
          (t[43] = M),
          (t[44] = z),
          (t[45] = j))
        : (j = t[45]);
      var K;
      return (
        t[46] !== f || t[47] !== j || t[48] !== P
          ? ((K = u.jsxs(r("WAWebDrawer.react"), {
              ref: f,
              tsNavigationData: D,
              children: [P, j],
            })),
            (t[46] = f),
            (t[47] = j),
            (t[48] = P),
            (t[49] = K))
          : (K = t[49]),
        K
      );
    }
    l.default = f;
  },
  226,
);
