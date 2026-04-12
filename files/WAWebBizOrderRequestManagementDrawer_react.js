__d(
  "WAWebBizOrderRequestManagementDrawer.react",
  [
    "fbt",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebFlex.react",
    "WAWebOrderRequestDetail.react",
    "WAWebOrderRequestFetcher",
    "WAWebSpinner.react",
    "WAWebUISpacing",
    "WAWebWdsSmbPictoReceiptAndroidIcon.react",
    "react",
    "stylex",
    "useWAWebGetOrderRequests",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.Fragment,
      p = d.useRef,
      _ = 65,
      f = {
        infoRow: {
          color: "x1mhprgp",
          fontSize: "x1f6kntn",
          fontWeight: "xk50ysn",
          lineHeight: "xa7kkou",
          $$css: !0,
        },
        subTitle: { color: "x1mhprgp", $$css: !0 },
      },
      g = function () {
        return c.jsxs(c.Fragment, {
          children: [
            c.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  f.infoRow,
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
                    e.props(f.subTitle, o("WAWebUISpacing").uiPadding.all16),
                    { children: s._(/*BTDS*/ "No order requests") },
                  ),
                ),
              ],
            }),
          ],
        });
      };
    function h(e) {
      var t = e.onBack,
        n = e.ref,
        a = p(null),
        i = o("useWAWebGetOrderRequests").useGetOrderRequests(a, _),
        l = i.isLoading,
        u = i.ordersInfoMap.contactAndOrderRequestInfoMap,
        d = i.ordersLazylist;
      return c.jsxs(r("WAWebDrawer.react"), {
        ref: n,
        tsNavigationData: {
          surface: "unknown",
          viewName: "biz-order-request-management",
        },
        children: [
          c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: s._(/*BTDS*/ "Order requests"),
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: t,
          }),
          c.jsxs(r("WAWebDrawerBody.react"), {
            ref: a,
            className: "x1280gxy x5yr21d xw2csxc x1odjw0f",
            children: [
              d.map(function (e, t) {
                return c.jsxs(
                  m,
                  {
                    children: [
                      c.jsx(y, {
                        date: o("WAWebOrderRequestFetcher").getOrderDisplayDate(
                          u,
                          d,
                          t,
                        ),
                      }),
                      c.jsx(r("WAWebOrderRequestDetail.react"), {
                        contactAndOrderInfo: u[e],
                      }),
                    ],
                  },
                  e,
                );
              }),
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
              !l && !d.length && c.jsx(g, {}),
            ],
          }),
        ],
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(t) {
      var n = t.date,
        a = n === void 0 ? "" : n;
      return (
        a &&
        c.jsx(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(
              f.infoRow,
              o("WAWebUISpacing").uiPadding.horiz16,
              o("WAWebUISpacing").uiPadding.vert10,
            ),
            { children: a.toUpperCase() },
          ),
        )
      );
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
