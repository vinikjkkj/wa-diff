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
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      if (
        !(
          o("WAWebMobilePlatforms").isSMB() &&
          o("WAWebBizGatingUtils").orderManagementEnabled()
        )
      )
        return null;
      var e = function (t) {
          t == null || t.stopPropagation();
          var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
          (new (o(
            "WAWebOrderDetailsActionsSmbWamEvent",
          ).OrderDetailsActionsSmbWamEvent)({
            orderDetailsCreationAction: o(
              "WAWebWamEnumOrderDetailsCreationAction",
            ).ORDER_DETAILS_CREATION_ACTION.VIEW_ORDER_DETAILS_HUB,
            actionCategory: String(
              r("WAWebOrderDetailsActionCategory").ORDER_DETAILS_MANAGEMENT,
            ),
            orderDetailEntryPoint: String(
              r("WAWebBizEntryPoint").FROM_BUSINESS_TOOLS,
            ),
            hasCatalog: o("WAWebBusinessProfileUtils").hasCatalog(
              o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
                e,
              ),
            ),
          }).commit(),
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              u.jsx(r("WAWebOrderManagementFlowLoadable"), {
                isInitialStep: !0,
              }),
            ));
        },
        t = o("WAWebBizGatingUtils").isOrderContentOptimizationEnabled()
          ? s._(/*BTDS*/ "Charges")
          : s._(/*BTDS*/ "Orders"),
        n = "mi-orders menu-item";
      return u.jsx(r("WDSMenuItem.react"), {
        testid: void 0,
        Icon: r("WDSIconIcReceipt.react"),
        onPress: e,
        title: t,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
