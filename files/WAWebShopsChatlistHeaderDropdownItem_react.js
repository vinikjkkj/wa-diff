__d(
  "WAWebShopsChatlistHeaderDropdownItem.react",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "WAWebBizShopsManagePopup.react",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileUtils",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebShopIcon.react",
    "WAWebShopsLog",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumShopsManagementAction",
    "WDSMenuItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      if (!o("WAWebMobilePlatforms").isSMB()) return null;
      var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        t = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
          e,
        ),
        n = o("WAWebBusinessProfileUtils").hasShop(t),
        a = function (t) {
          (t == null || t.preventDefault(),
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebBizShopsManagePopup.react"), {
                onViewShopClick: function () {
                  o("WAWebShopsLog").logShopsManagementEvent(
                    o("WAWebWamEnumShopsManagementAction")
                      .SHOPS_MANAGEMENT_ACTION
                      .ACTION_CLICK_VIEW_SHOPS_IN_SHOPS_SETTING,
                  );
                },
                onCommerceManagerClick: function () {
                  o("WAWebShopsLog").logShopsManagementEvent(
                    o("WAWebWamEnumShopsManagementAction")
                      .SHOPS_MANAGEMENT_ACTION
                      .ACTION_CLICK_COMMERCE_MANAGER_IN_SHOPS_SETTING,
                  );
                },
                onCancelClick: function () {
                  o("WAWebShopsLog").logShopsManagementEvent(
                    o("WAWebWamEnumShopsManagementAction")
                      .SHOPS_MANAGEMENT_ACTION
                      .ACTION_CLICK_CANCEL_IN_SHOPS_SETTING,
                  );
                },
              }),
            ),
            o("WAWebShopsLog").logShopsManagementEvent(
              o("WAWebWamEnumShopsManagementAction").SHOPS_MANAGEMENT_ACTION
                .ACTION_CLICK_SHOPS_SETTING,
            ));
        },
        i =
          o("WAWebBizGatingUtils").bannedShopsEnabled() &&
          o("WAWebBusinessProfileUtils").isShopBanned(t)
            ? s._(/*BTDS*/ "Shop (disabled)")
            : s._(/*BTDS*/ "Shop"),
        l = "mi-shop menu-item";
      return n
        ? u.jsx(r("WDSMenuItem.react"), {
            testid: void 0,
            Icon: o("WAWebShopIcon.react").ShopIcon,
            onPress: a,
            title: i,
          })
        : null;
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
