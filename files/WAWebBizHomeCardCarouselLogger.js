__d(
  "WAWebBizHomeCardCarouselLogger",
  [
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { CARD: "card", DISMISS: "dismiss", NEXT: "next", PREV: "prev" },
      s = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.setEntryPoint = function (t) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.setEntryPoint(
              t,
              o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
                .BUSINESS_TOOLS_HOME,
            );
          }),
          (n.logViewBusinessTools = function (t) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              extraAttributes: { num_cards_loaded: t },
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.BUSINESS_TOOLS_HOME,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .BUSINESS_HOME_PAGE,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (n.logViewCard = function (n, r) {
            this.$1(
              o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM
                .VIEW,
              e.CARD,
              n,
              r,
            );
          }),
          (n.logSwipeNext = function (n, r) {
            this.$1(
              o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM
                .CLICK,
              e.NEXT,
              n,
              r,
            );
          }),
          (n.logSwipePrev = function (n, r) {
            this.$1(
              o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM
                .CLICK,
              e.PREV,
              n,
              r,
            );
          }),
          (n.logDismissCard = function (n, r) {
            this.$1(
              o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM
                .CLICK,
              e.DISMISS,
              n,
              r,
            );
          }),
          (n.logPrimaryClick = function (n, r) {
            this.$1(
              o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM
                .CLICK,
              e.CARD,
              n,
              r,
            );
          }),
          (n.$1 = function (t, n, r, a) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              extraAttributes: { card_id: r, card_idx: a },
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.BUSINESS_TOOLS_HOME,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .BUSINESS_HOME_PAGE,
              userActionTarget: n,
              userActionType: t,
            });
          }),
          t
        );
      })(),
      u = new s();
    l.BizHomeCardCarouselLogger = u;
  },
  98,
);
