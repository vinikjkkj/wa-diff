__d(
  "WAWebBizHomeCardCarouselLogger",
  [
    "$InternalEnum",
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { CARD: "card", DISMISS: "dismiss", NEXT: "next", PREV: "prev" },
      s = n("$InternalEnum")({
        MOUNT: "mount",
        FORWARD: "forward",
        BACKWARD: "backward",
      }),
      u = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.setEntryPoint = function (t) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.setEntryPoint(
              t,
              o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
                .BUSINESS_TOOLS_REC_CARD,
            );
          }),
          (n.logViewBusinessTools = function (t) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              extraAttributes: { num_cards_loaded: t },
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.BUSINESS_TOOLS_REC_CARD,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .BUSINESS_HOME_PAGE,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (n.logViewCard = function (n, r, a) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              extraAttributes: {
                insight_card_id: n,
                card_seq_id: r,
                view_source: a,
              },
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.BUSINESS_TOOLS_REC_CARD,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .BUSINESS_HOME_PAGE,
              userActionTarget: e.CARD,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
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
              extraAttributes: { insight_card_id: r, card_seq_id: a },
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.BUSINESS_TOOLS_REC_CARD,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .BUSINESS_HOME_PAGE,
              userActionTarget: n,
              userActionType: t,
            });
          }),
          t
        );
      })(),
      c = new u();
    ((l.ViewSource = s), (l.BizHomeCardCarouselLogger = c));
  },
  98,
);
