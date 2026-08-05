__d(
  "WAWebSubscriptionUserActionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumWsuaAction",
    "WAWebWamEnumWsuaActionTarget",
    "WAWebWamEnumWsuaProductType",
    "WAWebWamEnumWsuaReferral",
    "WAWebWamEnumWsuaScreen",
    "WAWebWamEnumWsuaScreenElement",
    "WAWebWamEnumWsuaTier",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          SubscriptionUserAction: [
            7458,
            {
              wsuaAction: [1, o("WAWebWamEnumWsuaAction").WSUA_ACTION],
              wsuaActionTarget: [
                2,
                o("WAWebWamEnumWsuaActionTarget").WSUA_ACTION_TARGET,
              ],
              wsuaActiveSubscriptions: [10, e.TYPES.STRING],
              wsuaBenefitGroup: [11, e.TYPES.STRING],
              wsuaBenefitsShown: [9, e.TYPES.STRING],
              wsuaProductType: [
                3,
                o("WAWebWamEnumWsuaProductType").WSUA_PRODUCT_TYPE,
              ],
              wsuaQuickPromotionId: [4, e.TYPES.STRING],
              wsuaReferral: [5, o("WAWebWamEnumWsuaReferral").WSUA_REFERRAL],
              wsuaScreen: [6, o("WAWebWamEnumWsuaScreen").WSUA_SCREEN],
              wsuaScreenElement: [
                7,
                o("WAWebWamEnumWsuaScreenElement").WSUA_SCREEN_ELEMENT,
              ],
              wsuaSessionId: [8, e.TYPES.STRING],
              wsuaTier: [12, o("WAWebWamEnumWsuaTier").WSUA_TIER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { SubscriptionUserAction: [] },
      );
    l.SubscriptionUserActionWamEvent = s;
  },
  98,
);
