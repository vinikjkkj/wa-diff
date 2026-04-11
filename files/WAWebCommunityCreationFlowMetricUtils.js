__d(
  "WAWebCommunityCreationFlowMetricUtils",
  [
    "WAWebCommunityCreationWamEvent",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebWamEnumCommunityCreationActionTakenType",
    "WAWebWamEnumCommunityCreationCurrentScreenType",
    "WAWebWamEnumCommunityCreationEntrypointType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      switch (e) {
        case "banner":
          return o("WAWebWamEnumCommunityCreationEntrypointType")
            .COMMUNITY_CREATION_ENTRYPOINT_TYPE.DEEP_LINK_BANNER;
        case "channel":
          return o("WAWebWamEnumCommunityCreationEntrypointType")
            .COMMUNITY_CREATION_ENTRYPOINT_TYPE.DEEP_LINK_CHANNEL;
        case "psa":
          return o("WAWebWamEnumCommunityCreationEntrypointType")
            .COMMUNITY_CREATION_ENTRYPOINT_TYPE.DEEP_LINK_PSA;
        case "chat":
          return o("WAWebWamEnumCommunityCreationEntrypointType")
            .COMMUNITY_CREATION_ENTRYPOINT_TYPE.DEEP_LINK_CHAT;
        default:
          return o("WAWebWamEnumCommunityCreationEntrypointType")
            .COMMUNITY_CREATION_ENTRYPOINT_TYPE.DEEP_LINK;
      }
    }
    var s = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.$3 = function (t) {
            var e = t.actionCount,
              n = t.actionTaken,
              r = t.communityId,
              a = t.currentScreen,
              i = new (o(
                "WAWebCommunityCreationWamEvent",
              ).CommunityCreationWamEvent)({
                communityCreationSessionId: this.$1,
                communityCreationActionTaken: n,
                communityCreationCurrentScreen: a,
                communityCreationActionCount: e,
                communityId: r,
              });
            (this.$2 != null && (i.communityCreationEntrypoint = this.$2),
              i.commit());
          }),
          (t.startSession = function (t) {
            ((this.$1 = r("WAWebPonyfillsCryptoRandomUUID")()), (this.$2 = t));
          }),
          (t.$4 = function () {
            this.startSession();
          }),
          (t.enter = function (t) {
            this.$3({
              actionTaken: o("WAWebWamEnumCommunityCreationActionTakenType")
                .COMMUNITY_CREATION_ACTION_TAKEN_TYPE.ENTER,
              currentScreen: t,
            });
          }),
          (t.getStarted = function () {
            this.$3({
              actionTaken: o("WAWebWamEnumCommunityCreationActionTakenType")
                .COMMUNITY_CREATION_ACTION_TAKEN_TYPE.GET_STARTED,
              currentScreen: o("WAWebWamEnumCommunityCreationCurrentScreenType")
                .COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.COMMUNITY_NUX,
            });
          }),
          (t.dismiss = function () {
            this.$3({
              actionTaken: o("WAWebWamEnumCommunityCreationActionTakenType")
                .COMMUNITY_CREATION_ACTION_TAKEN_TYPE.DISMISS,
              currentScreen: o("WAWebWamEnumCommunityCreationCurrentScreenType")
                .COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.COMMUNITY_NUX,
            });
          }),
          (t.next = function () {
            this.$3({
              actionTaken: o("WAWebWamEnumCommunityCreationActionTakenType")
                .COMMUNITY_CREATION_ACTION_TAKEN_TYPE.NEXT,
              currentScreen: o("WAWebWamEnumCommunityCreationCurrentScreenType")
                .COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.COMMUNITY_INFO,
            });
          }),
          (t.createGroup = function (t, n) {
            this.$3({
              actionTaken: o("WAWebWamEnumCommunityCreationActionTakenType")
                .COMMUNITY_CREATION_ACTION_TAKEN_TYPE.CREATE_GROUP,
              actionCount: t,
              currentScreen: n,
            });
          }),
          (t.linkGroup = function (t, n) {
            this.$3({
              actionTaken: o("WAWebWamEnumCommunityCreationActionTakenType")
                .COMMUNITY_CREATION_ACTION_TAKEN_TYPE.LINK_GROUP,
              actionCount: t,
              currentScreen: n,
            });
          }),
          (t.createCommunity = function (t) {
            this.$3({
              actionTaken: o("WAWebWamEnumCommunityCreationActionTakenType")
                .COMMUNITY_CREATION_ACTION_TAKEN_TYPE.CREATE_COMMUNITY,
              currentScreen: t,
            });
          }),
          (t.exit = function () {
            (this.$3({
              actionTaken: o("WAWebWamEnumCommunityCreationActionTakenType")
                .COMMUNITY_CREATION_ACTION_TAKEN_TYPE.EXIT,
              currentScreen: o("WAWebWamEnumCommunityCreationCurrentScreenType")
                .COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.COMMUNITY_INFO,
            }),
              this.$4());
          }),
          (t.unlinkGroup = function () {
            this.$3({
              actionTaken: o("WAWebWamEnumCommunityCreationActionTakenType")
                .COMMUNITY_CREATION_ACTION_TAKEN_TYPE.UNLINK_GROUP,
              currentScreen: o("WAWebWamEnumCommunityCreationCurrentScreenType")
                .COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.COMMUNITY_INFO,
            });
          }),
          (t.createCommunitySuccess = function (t, n) {
            this.$3({
              actionTaken: o("WAWebWamEnumCommunityCreationActionTakenType")
                .COMMUNITY_CREATION_ACTION_TAKEN_TYPE.CREATE_COMMUNITY_SUCCESS,
              currentScreen: t,
              communityId: n,
            });
          }),
          (t.createCommunityFail = function (t) {
            this.$3({
              actionTaken: o("WAWebWamEnumCommunityCreationActionTakenType")
                .COMMUNITY_CREATION_ACTION_TAKEN_TYPE.CREATE_COMMUNITY_FAIL,
              currentScreen: t,
            });
          }),
          (t.helpIconClick = function () {
            this.$3({
              actionTaken: o("WAWebWamEnumCommunityCreationActionTakenType")
                .COMMUNITY_CREATION_ACTION_TAKEN_TYPE.HELP_ICON_CLICK,
              currentScreen: o("WAWebWamEnumCommunityCreationCurrentScreenType")
                .COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.COMMUNITY_INFO,
            });
          }),
          (t.linkGroupConfirmationOk = function () {
            this.$3({
              actionTaken: o("WAWebWamEnumCommunityCreationActionTakenType")
                .COMMUNITY_CREATION_ACTION_TAKEN_TYPE
                .LINK_GROUP_CONFIRMATION_OK,
              currentScreen: o("WAWebWamEnumCommunityCreationCurrentScreenType")
                .COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.LINK_GROUP_CONFIRMATION,
            });
          }),
          (t.linkGroupConfirmationCancel = function () {
            this.$3({
              actionTaken: o("WAWebWamEnumCommunityCreationActionTakenType")
                .COMMUNITY_CREATION_ACTION_TAKEN_TYPE
                .LINK_GROUP_CONFIRMATION_CANCEL,
              currentScreen: o("WAWebWamEnumCommunityCreationCurrentScreenType")
                .COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.LINK_GROUP_CONFIRMATION,
            });
          }),
          e
        );
      })(),
      u = new s();
    ((l.getDeeplinkEntrypointType = e), (l.UiCommunityCreationAction = u));
  },
  98,
);
