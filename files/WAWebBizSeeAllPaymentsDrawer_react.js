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
      var t = e.onBack,
        n = e.ref,
        a = m(null),
        i = m(!1),
        l = o("useWAWebGetOrders").useGetOrders(
          a,
          p,
          o("useWAWebGetOrders").OrderManagementViewType.PAYMENTS_HOME,
        ),
        c = l.isLoading,
        f = l.ordersInfoMap,
        g = f.contactAndOrderInfoMap,
        h = f.orderStatusInfoMap,
        y = l.ordersLazylist,
        C = l.totalOrderCount;
      return (
        d(
          function () {
            C > 0 &&
              !i.current &&
              ((i.current = !0),
              o("WAWebSyncdMdSyncFieldstatMeta")
                .MdSyncFieldStatsMeta.getMdSessionId()
                .then(function (e) {
                  o("WAWebPaymentsUserActionLogging").logPaymentsHomeEvent({
                    paymentActionType: o("WAWebWamEnumPaymentActionTypes")
                      .PAYMENT_ACTION_TYPES.VIEW,
                    paymentsEventId: e,
                    queryParams: JSON.stringify({ num_payments: C }),
                  });
                }));
          },
          [C],
        ),
        u.jsxs(r("WAWebDrawer.react"), {
          ref: n,
          tsNavigationData: {
            surface: "unknown",
            viewName: "biz-see-all-payments",
          },
          children: [
            u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: s._(/*BTDS*/ "Payment history"),
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              onBack: t,
            }),
            u.jsxs(r("WAWebDrawerBody.react"), {
              ref: a,
              className: "x1280gxy x5yr21d xw2csxc x1odjw0f",
              children: [
                y.map(function (e) {
                  return u.jsx(
                    o("WAWebBizPaymentDetail.react").WAWebBizPaymentDetail,
                    {
                      contactAndOrderInfo: g[e],
                      orderPaymentStatusInfo: o(
                        "WAWebBizPaymentDetail.react",
                      ).extractPaymentStatus(h, e),
                    },
                    e,
                  );
                }),
                c &&
                  u.jsx(o("WAWebFlex.react").FlexRow, {
                    justify: "center",
                    xstyle: _.spinnerContainer,
                    children: u.jsx(o("WAWebSpinner.react").Spinner, {
                      color: "default",
                      size: 24,
                      stroke: 6,
                    }),
                  }),
                !c &&
                  !y.length &&
                  u.jsx(r("WAWebBizNoPaymentHistory.react"), {}),
              ],
            }),
          ],
        })
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
