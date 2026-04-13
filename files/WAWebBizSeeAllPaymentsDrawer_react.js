__d(
  "WAWebBizSeeAllPaymentsDrawer.react",
  [
    "fbt",
    "WAWebBizNoPaymentHistory.react",
    "WAWebBizPaymentDetail.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebFlex.react",
    "WAWebPaymentsUserActionLogging",
    "WAWebSpinner.react",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebWamEnumPaymentActionTypes",
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
        spinnerContainer: {
          paddingTop: "x1p57kb1",
          paddingInlineEnd: "xvtqlqk",
          paddingBottom: "xvpt6g3",
          paddingInlineStart: "xdx6fka",
          $$css: !0,
        },
      };
    function f(e) {
      var t = o("react-compiler-runtime").c(28),
        n = e.onBack,
        a = e.ref,
        i = m(null),
        l = m(!1),
        c = o("useWAWebGetOrders").useGetOrders(
          i,
          p,
          o("useWAWebGetOrders").OrderManagementViewType.PAYMENTS_HOME,
        ),
        f = c.isLoading,
        g = c.ordersInfoMap,
        h = c.ordersLazylist,
        y = c.totalOrderCount,
        C = g.contactAndOrderInfoMap,
        b = g.orderStatusInfoMap,
        v,
        S;
      (t[0] !== y
        ? ((v = function () {
            y > 0 &&
              !l.current &&
              ((l.current = !0),
              o("WAWebSyncdMdSyncFieldstatMeta")
                .MdSyncFieldStatsMeta.getMdSessionId()
                .then(function (e) {
                  o("WAWebPaymentsUserActionLogging").logPaymentsHomeEvent({
                    paymentActionType: o("WAWebWamEnumPaymentActionTypes")
                      .PAYMENT_ACTION_TYPES.VIEW,
                    paymentsEventId: e,
                    queryParams: JSON.stringify({ num_payments: y }),
                  });
                }));
          }),
          (S = [y]),
          (t[0] = y),
          (t[1] = v),
          (t[2] = S))
        : ((v = t[1]), (S = t[2])),
        d(v, S));
      var R;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = { surface: "unknown", viewName: "biz-see-all-payments" }),
          (t[3] = R))
        : (R = t[3]);
      var L;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = s._(/*BTDS*/ "Payment history")), (t[4] = L))
        : (L = t[4]);
      var E;
      t[5] !== n
        ? ((E = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: L,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: n,
          })),
          (t[5] = n),
          (t[6] = E))
        : (E = t[6]);
      var k;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = "x1280gxy x5yr21d xw2csxc x1odjw0f"), (t[7] = k))
        : (k = t[7]);
      var I;
      if (t[8] !== C || t[9] !== b || t[10] !== h) {
        var T;
        (t[12] !== C || t[13] !== b
          ? ((T = function (t) {
              return u.jsx(
                o("WAWebBizPaymentDetail.react").WAWebBizPaymentDetail,
                {
                  contactAndOrderInfo: C[t],
                  orderPaymentStatusInfo: o(
                    "WAWebBizPaymentDetail.react",
                  ).extractPaymentStatus(b, t),
                },
                t,
              );
            }),
            (t[12] = C),
            (t[13] = b),
            (t[14] = T))
          : (T = t[14]),
          (I = h.map(T)),
          (t[8] = C),
          (t[9] = b),
          (t[10] = h),
          (t[11] = I));
      } else I = t[11];
      var D;
      t[15] !== f
        ? ((D =
            f &&
            u.jsx(o("WAWebFlex.react").FlexRow, {
              justify: "center",
              xstyle: _.spinnerContainer,
              children: u.jsx(o("WAWebSpinner.react").Spinner, {
                color: "default",
                size: 24,
                stroke: 6,
              }),
            })),
          (t[15] = f),
          (t[16] = D))
        : (D = t[16]);
      var x;
      t[17] !== f || t[18] !== h.length
        ? ((x =
            !f && !h.length && u.jsx(r("WAWebBizNoPaymentHistory.react"), {})),
          (t[17] = f),
          (t[18] = h.length),
          (t[19] = x))
        : (x = t[19]);
      var $;
      t[20] !== x || t[21] !== I || t[22] !== D
        ? (($ = u.jsxs(r("WAWebDrawerBody.react"), {
            ref: i,
            className: k,
            children: [I, D, x],
          })),
          (t[20] = x),
          (t[21] = I),
          (t[22] = D),
          (t[23] = $))
        : ($ = t[23]);
      var P;
      return (
        t[24] !== a || t[25] !== $ || t[26] !== E
          ? ((P = u.jsxs(r("WAWebDrawer.react"), {
              ref: a,
              tsNavigationData: R,
              children: [E, $],
            })),
            (t[24] = a),
            (t[25] = $),
            (t[26] = E),
            (t[27] = P))
          : (P = t[27]),
        P
      );
    }
    l.default = f;
  },
  226,
);
