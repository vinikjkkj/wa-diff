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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("react-compiler-runtime").c(4);
      if (!o("WAWebMobilePlatforms").isSMB()) return null;
      var t, n, a;
      if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        var i = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
          l = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
            i,
          );
        ((n = o("WAWebBusinessProfileUtils").hasShop(l)),
          (t = d),
          (a =
            o("WAWebBizGatingUtils").bannedShopsEnabled() &&
            o("WAWebBusinessProfileUtils").isShopBanned(l)
              ? s._(/*BTDS*/ "Shop (disabled)")
              : s._(/*BTDS*/ "Shop")),
          (e[0] = t),
          (e[1] = n),
          (e[2] = a));
      } else ((t = e[0]), (n = e[1]), (a = e[2]));
      var c = a;
      if (!n) return null;
      var m;
      return (
        e[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = u.jsx(r("WDSMenuItem.react"), {
              testid: void 0,
              Icon: o("WAWebShopIcon.react").ShopIcon,
              onPress: t,
              title: c,
            })),
            (e[3] = m))
          : (m = e[3]),
        m
      );
    }
    function d(e) {
      (e == null || e.preventDefault(),
        o("WAWebModalManager").ModalManager.open(
          u.jsx(r("WAWebBizShopsManagePopup.react"), {
            onViewShopClick: _,
            onCommerceManagerClick: p,
            onCancelClick: m,
          }),
        ),
        o("WAWebShopsLog").logShopsManagementEvent(
          o("WAWebWamEnumShopsManagementAction").SHOPS_MANAGEMENT_ACTION
            .ACTION_CLICK_SHOPS_SETTING,
        ));
    }
    function m() {
      o("WAWebShopsLog").logShopsManagementEvent(
        o("WAWebWamEnumShopsManagementAction").SHOPS_MANAGEMENT_ACTION
          .ACTION_CLICK_CANCEL_IN_SHOPS_SETTING,
      );
    }
    function p() {
      o("WAWebShopsLog").logShopsManagementEvent(
        o("WAWebWamEnumShopsManagementAction").SHOPS_MANAGEMENT_ACTION
          .ACTION_CLICK_COMMERCE_MANAGER_IN_SHOPS_SETTING,
      );
    }
    function _() {
      o("WAWebShopsLog").logShopsManagementEvent(
        o("WAWebWamEnumShopsManagementAction").SHOPS_MANAGEMENT_ACTION
          .ACTION_CLICK_VIEW_SHOPS_IN_SHOPS_SETTING,
      );
    }
    l.default = c;
  },
  226,
);
