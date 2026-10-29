__d(
  "WAWebCustomerManagerMetaOneEntryPointLogger",
  [
    "WAWebActiveSubscriptionProductTypes",
    "WAWebEligibleSubscriptionProductTypes",
    "WAWebSubscriptionUserActionWamEvent",
    "WAWebWamEnumWsuaAction",
    "WAWebWamEnumWsuaActionTarget",
    "WAWebWamEnumWsuaProductType",
    "WAWebWamEnumWsuaReferral",
    "WAWebWamEnumWsuaScreen",
    "WAWebWamEnumWsuaScreenElement",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      lock_card: o("WAWebWamEnumWsuaScreenElement").WSUA_SCREEN_ELEMENT
        .UPSELL_CARD,
      trial_banner: o("WAWebWamEnumWsuaScreenElement").WSUA_SCREEN_ELEMENT
        .UPSELL_BANNER,
    };
    function s(e, t) {
      c(o("WAWebWamEnumWsuaAction").WSUA_ACTION.VIEW, e, t);
    }
    function u(e, t) {
      c(o("WAWebWamEnumWsuaAction").WSUA_ACTION.CLICK, e, t);
    }
    function c(t, n, r) {
      new (o(
        "WAWebSubscriptionUserActionWamEvent",
      ).SubscriptionUserActionWamEvent)({
        wsuaAction: t,
        wsuaActionTarget: o("WAWebWamEnumWsuaActionTarget").WSUA_ACTION_TARGET
          .GET_META_ONE_BUSINESS,
        wsuaActiveSubscriptions: o(
          "WAWebActiveSubscriptionProductTypes",
        ).getActiveSubscriptionProductTypes(),
        wsuaEligibleSubscriptions: o(
          "WAWebEligibleSubscriptionProductTypes",
        ).getEligibleSubscriptionProductTypes(),
        wsuaProductType: o("WAWebWamEnumWsuaProductType").WSUA_PRODUCT_TYPE
          .META_ONE_BUSINESS,
        wsuaReferral: o("WAWebWamEnumWsuaReferral").WSUA_REFERRAL
          .CUSTOMER_MANAGER,
        wsuaScreen: o("WAWebWamEnumWsuaScreen").WSUA_SCREEN.CUSTOMER_MANAGER,
        wsuaScreenElement: e[n],
        wsuaSessionId: r,
      }).commit();
    }
    ((l.logCustomerManagerMetaOneEntryPointView = s),
      (l.logCustomerManagerMetaOneEntryPointClick = u));
  },
  98,
);
