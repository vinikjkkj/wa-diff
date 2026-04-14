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
      var t = e.isInitialStep,
        n = t === void 0 ? !1 : t,
        a = e.onBack,
        i = e.onRequestPayment,
        l = e.onSeeAll,
        c = e.onTryIt,
        f = e.ref,
        g = e.referral,
        h = g === void 0 ? "from_business_tools" : g,
        y = m(null),
        C = o("useWAWebGetOrders").useGetOrders(
          y,
          p,
          o("useWAWebGetOrders").OrderManagementViewType.PAYMENTS_HOME,
        ),
        b = C.isLoading,
        v = C.ordersInfoMap,
        S = v.contactAndOrderInfoMap,
        R = v.orderStatusInfoMap,
        L = C.ordersLazylist;
      d(
        function () {
          o("WAWebSyncdMdSyncFieldstatMeta")
            .MdSyncFieldStatsMeta.getMdSessionId()
            .then(function (e) {
              o("WAWebPaymentsUserActionLogging").logPaymentsHomeEvent({
                paymentActionType: o("WAWebWamEnumPaymentActionTypes")
                  .PAYMENT_ACTION_TYPES.VIEW,
                paymentsEventId: e,
                referral: h,
              });
            });
        },
        [h],
      );
      var E = {};
      return (
        n ? (E.onCancel = a) : (E.onBack = a),
        u.jsxs(r("WAWebDrawer.react"), {
          ref: f,
          tsNavigationData: {
            surface: "unknown",
            viewName: "biz-payments-home",
          },
          children: [
            u.jsx(
              o("WAWebDrawerHeader.react").DrawerHeader,
              babelHelpers.extends(
                {
                  testid: void 0,
                  title: s._(/*BTDS*/ "Payments"),
                  type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
                  rightActionElement: u.jsx(
                    r("WAWebBizRequestPaymentButton.react"),
                    { onPress: i },
                  ),
                },
                E,
              ),
            ),
            u.jsxs(r("WAWebDrawerBody.react"), {
              className: "x1280gxy x5yr21d",
              children: [
                u.jsx(r("WAWebBizPaymentsHomeBanner.react"), { onTryIt: c }),
                u.jsx(
                  r(
                    "WAWebBizPaymentsHomeManagementPaymentMethodsSection.react",
                  ),
                  {},
                ),
                u.jsx("div", {
                  className: "x120ee7l x1q0q8m5 xso031l xd6izgl x6pxu1d",
                }),
                u.jsxs(r("WAWebDrawerSection.react"), {
                  ref: y,
                  className: "x1280gxy x16ovd2e",
                  animation: !1,
                  children: [
                    u.jsxs(o("WAWebFlex.react").FlexRow, {
                      justify: L.length > 0 ? "all" : "start",
                      align: "center",
                      xstyle: _.headerPadding,
                      children: [
                        u.jsx(r("WDSText.react"), {
                          type: "Body2Emphasized",
                          colorName: "contentDeemphasized",
                          children: s._(/*BTDS*/ "Payment history"),
                        }),
                        L.length > 0 &&
                          u.jsx(r("WAWebBizSeeAllPaymentsButton.react"), {
                            onPress: l,
                          }),
                      ],
                    }),
                    L.slice(0, 3).map(function (e) {
                      return u.jsx(
                        o("WAWebBizPaymentDetail.react").WAWebBizPaymentDetail,
                        {
                          contactAndOrderInfo: S[e],
                          orderPaymentStatusInfo: o(
                            "WAWebBizPaymentDetail.react",
                          ).extractPaymentStatus(R, e),
                        },
                        e,
                      );
                    }),
                    b &&
                      u.jsx(o("WAWebFlex.react").FlexRow, {
                        justify: "center",
                        xstyle: _.paddingAll16,
                        children: u.jsx(o("WAWebSpinner.react").Spinner, {
                          color: "default",
                          size: 24,
                          stroke: 6,
                        }),
                      }),
                    !b &&
                      !L.length &&
                      u.jsx(r("WAWebBizNoPaymentHistory.react"), {}),
                  ],
                }),
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
