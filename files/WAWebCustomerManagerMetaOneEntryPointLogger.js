__d(
  "WAWebCustomerManagerMetaOneEntryPointLogger",
  [
    "WAWebSubscriptionUserActionWamEvent",
    "WAWebWamEnumWsuaAction",
    "WAWebWamEnumWsuaActionTarget",
    "WAWebWamEnumWsuaProductType",
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
        wsuaProductType: o("WAWebWamEnumWsuaProductType").WSUA_PRODUCT_TYPE
          .META_ONE_BUSINESS,
        wsuaScreenElement: e[n],
        wsuaSessionId: r,
      }).commit();
    }
    ((l.logCustomerManagerMetaOneEntryPointView = s),
      (l.logCustomerManagerMetaOneEntryPointClick = u));
  },
  98,
);
