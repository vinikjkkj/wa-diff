__d(
  "WAFlowsShoppingNavigationUtils",
  [
    "WAFlowsBridgeEvents",
    "WAFlowsCartUtils.react",
    "WAFlowsLocalization",
    "WAFlowsShoppingStateUtils",
    "WAFlowsStateProvider.react",
    "WAFlowsTypes",
    "err",
    "react",
    "useCurrentScreenMeta",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u(e) {
      var t;
      return e == null ||
        (t = e.external_data) == null ||
        (t = t.meta_catalog) == null ||
        (t = t.product_detail) == null
        ? void 0
        : t.id;
    }
    function c() {
      var e = r("useCurrentScreenMeta")(),
        t = o("WAFlowsStateProvider.react").useWAFlowsState(),
        n = t.external;
      return s(
        function () {
          var t;
          return (e == null ? void 0 : e.layoutType) ===
            o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.ITEM_DETAIL &&
            u(n[(t = e == null ? void 0 : e.id) != null ? t : ""]) != null
            ? [
                {
                  id: "REPORT_ITEM",
                  title: o("WAFlowsLocalization")
                    .getNavBarContextualMenuReportItem()
                    .toString(),
                  iconID: "waf_report_icon",
                },
              ]
            : [];
        },
        [e, n],
      );
    }
    async function d(e, t) {
      var n = u(e);
      n != null &&
        (await t({
          eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
            .WAFlowsReportItem,
          payload: { product_id: n },
          fallBackDataForWeb: {},
          hasCallback: !1,
        }));
    }
    function m(e, t) {
      var n = (e == null ? void 0 : e.getScreens()) || [],
        a = t;
      switch (t) {
        case o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.CATEGORY_LIST:
          a = o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.ITEM_LIST;
          break;
        case o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.ITEM_LIST:
          a = o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.ITEM_DETAIL;
          break;
        case o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.ITEM_DETAIL:
          a = o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.CART;
          break;
        default:
          throw r("err")("Next pre-defined layout not exist for " + String(t));
      }
      var i = n.find(function (t) {
        var n = e == null ? void 0 : e.getScreenMeta(t);
        return (n == null ? void 0 : n.layoutType) === a;
      });
      return i != null ? i : "";
    }
    function p(e) {
      var t = (e == null ? void 0 : e.getScreens()) || [],
        n = t.find(function (t) {
          var n = e == null ? void 0 : e.getScreenMeta(t);
          return (
            (n == null ? void 0 : n.layoutType) ===
            o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.CART
          );
        });
      if (n === void 0)
        throw r("err")(
          "Cart Layout not defined, for View cart default click action",
        );
      return n;
    }
    function _(e, t, n) {
      var r = o(
          "WAFlowsShoppingStateUtils",
        ).isShoppingOffsiteCheckoutMessageFlow(n),
        a = o(
          "WAFlowsShoppingStateUtils",
        ).isShoppingIntegratedShoppingMessageFlow(n);
      return r && e === o("WAFlowsCartUtils.react").MM_DISCLOSURE_TITLE
        ? ""
        : (r || a) && t === o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.ITEM_LIST
          ? o("WAFlowsLocalization").getAddMoreFbt().toString()
          : t === o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.CART && e == null
            ? o("WAFlowsLocalization").getYourCartFbt().toString()
            : e;
    }
    ((l.useFlowsShoppingContextualMenuItems = c),
      (l.getFlowsShoppingReportItemJSBridge = d),
      (l.getNextScreenIdForShoppingFlow = m),
      (l.getViewCartScreenIdForShoppingFlow = p),
      (l.getShoppingFlowTitle = _));
  },
  98,
);
