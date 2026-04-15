__d(
  "WAWebOrdersChatlistHeaderDropdownItem.react",
  [
    "fbt",
    "WAWebBizEntryPoint",
    "WAWebBizGatingUtils",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileUtils",
    "WAWebDrawerManager",
    "WAWebMobilePlatforms",
    "WAWebOrderDetailsActionCategory",
    "WAWebOrderDetailsActionsSmbWamEvent",
    "WAWebOrderManagementFlowLoadable",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumOrderDetailsCreationAction",
    "WDSIconIcReceipt.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("react-compiler-runtime").c(1);
      if (
        !(
          o("WAWebMobilePlatforms").isSMB() &&
          o("WAWebBizGatingUtils").orderManagementEnabled()
        )
      )
        return null;
      var t = d,
        n;
      if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        var a = o("WAWebBizGatingUtils").isOrderContentOptimizationEnabled()
          ? s._(/*BTDS*/ "Charges")
          : s._(/*BTDS*/ "Orders");
        ((n = u.jsx(r("WDSMenuItem.react"), {
          testid: void 0,
          Icon: r("WDSIconIcReceipt.react"),
          onPress: t,
          title: a,
        })),
          (e[0] = n));
      } else n = e[0];
      return n;
    }
    function d(e) {
      e == null || e.stopPropagation();
      var t = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
      (new (o(
        "WAWebOrderDetailsActionsSmbWamEvent",
      ).OrderDetailsActionsSmbWamEvent)({
        orderDetailsCreationAction: o("WAWebWamEnumOrderDetailsCreationAction")
          .ORDER_DETAILS_CREATION_ACTION.VIEW_ORDER_DETAILS_HUB,
        actionCategory: String(
          r("WAWebOrderDetailsActionCategory").ORDER_DETAILS_MANAGEMENT,
        ),
        orderDetailEntryPoint: String(
          r("WAWebBizEntryPoint").FROM_BUSINESS_TOOLS,
        ),
        hasCatalog: o("WAWebBusinessProfileUtils").hasCatalog(
          o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(t),
        ),
      }).commit(),
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
          u.jsx(r("WAWebOrderManagementFlowLoadable"), { isInitialStep: !0 }),
        ));
    }
    l.default = c;
  },
  226,
);
