__d(
  "WAWebGroupMemberAddingUserJourneyLogger",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebGroupMemberAddingUserJourneyWamEvent",
    "WAWebUnifiedSession",
    "WAWebWamEnumBundleSendSource",
    "WAWebWamEnumGroupMemberAddingActionType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.$1 = function (n) {
            var t = o(
              "WAWebUnifiedSession",
            ).UnifiedSessionManager.getSessionId();
            if (t == null) {
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] Unified session ID is null",
                  ])),
              );
              return;
            }
            new (o(
              "WAWebGroupMemberAddingUserJourneyWamEvent",
            ).GroupMemberAddingUserJourneyWamEvent)(
              babelHelpers.extends({}, n, {
                userJourneyEventMs: o("WATimeUtils").unixTimeMs(),
                unifiedSessionId: t,
              }),
            ).commit();
          }),
          (n.selectableMessagesLoaded = function (t) {
            var e = t.groupHistoryMessagesCount;
            this.$1({
              groupMemberAddingActionType: o(
                "WAWebWamEnumGroupMemberAddingActionType",
              ).GROUP_MEMBER_ADDING_ACTION_TYPE
                .GROUP_HISTORY_SELECTABLE_MESSAGES_LOADED,
              groupHistoryMessagesCount: e,
            });
          }),
          (n.footerDisplayed = function (t) {
            var e = t.groupHistoryMessagesCount,
              n = t.isGroupHistoryToggledOn;
            this.$1({
              groupMemberAddingActionType: o(
                "WAWebWamEnumGroupMemberAddingActionType",
              ).GROUP_MEMBER_ADDING_ACTION_TYPE.GROUP_HISTORY_FOOTER_DISPLAYED,
              groupHistoryMessagesCount: e,
              isGroupHistoryToggledOn: n,
            });
          }),
          (n.groupHistoryToggleOn = function (t) {
            var e = t.groupHistoryMessagesCount;
            this.$1({
              groupMemberAddingActionType: o(
                "WAWebWamEnumGroupMemberAddingActionType",
              ).GROUP_MEMBER_ADDING_ACTION_TYPE.GROUP_HISTORY_TOGGLE_ON,
              groupHistoryMessagesCount: e,
            });
          }),
          (n.groupHistoryToggleOff = function (t) {
            var e = t.groupHistoryMessagesCount;
            this.$1({
              groupMemberAddingActionType: o(
                "WAWebWamEnumGroupMemberAddingActionType",
              ).GROUP_MEMBER_ADDING_ACTION_TYPE.GROUP_HISTORY_TOGGLE_OFF,
              groupHistoryMessagesCount: e,
            });
          }),
          (n.countChangeEntryPointClicked = function (t) {
            var e = t.groupHistoryMessagesCount;
            this.$1({
              groupMemberAddingActionType: o(
                "WAWebWamEnumGroupMemberAddingActionType",
              ).GROUP_MEMBER_ADDING_ACTION_TYPE
                .GROUP_HISTORY_COUNT_CHANGE_ENTRY_POINT_CLICKED,
              groupHistoryMessagesCount: e,
            });
          }),
          (n.countChanged = function (t) {
            var e = t.groupHistoryMessagesCount;
            this.$1({
              groupMemberAddingActionType: o(
                "WAWebWamEnumGroupMemberAddingActionType",
              ).GROUP_MEMBER_ADDING_ACTION_TYPE.GROUP_HISTORY_COUNT_CHANGED,
              groupHistoryMessagesCount: e,
            });
          }),
          (n.speedBumpDialogDisplayed = function () {
            this.$1({
              groupMemberAddingActionType: o(
                "WAWebWamEnumGroupMemberAddingActionType",
              ).GROUP_MEMBER_ADDING_ACTION_TYPE
                .GROUP_HISTORY_SPEED_BUMP_DIALOG_DISPLAYED,
            });
          }),
          (n.speedBumpDialogContinued = function () {
            this.$1({
              groupMemberAddingActionType: o(
                "WAWebWamEnumGroupMemberAddingActionType",
              ).GROUP_MEMBER_ADDING_ACTION_TYPE
                .GROUP_HISTORY_SPEED_BUMP_DIALOG_CONTINUED,
            });
          }),
          (n.speedBumpDialogCanceled = function () {
            this.$1({
              groupMemberAddingActionType: o(
                "WAWebWamEnumGroupMemberAddingActionType",
              ).GROUP_MEMBER_ADDING_ACTION_TYPE
                .GROUP_HISTORY_SPEED_BUMP_DIALOG_CANCELED,
            });
          }),
          (n.bundleMessageSentFromIqResponse = function (t) {
            var e = t === void 0 ? {} : t,
              n = e.groupHistoryOutWindowPinsCount;
            this.$1({
              groupMemberAddingActionType: o(
                "WAWebWamEnumGroupMemberAddingActionType",
              ).GROUP_MEMBER_ADDING_ACTION_TYPE
                .GROUP_HISTORY_BUNDLE_MESSAGE_SENT,
              bundleSendSource: o("WAWebWamEnumBundleSendSource")
                .BUNDLE_SEND_SOURCE.IQ_RESPONSE,
              groupHistoryOutWindowPinsCount: n,
            });
          }),
          (n.noticeMessageSent = function () {
            this.$1({
              groupMemberAddingActionType: o(
                "WAWebWamEnumGroupMemberAddingActionType",
              ).GROUP_MEMBER_ADDING_ACTION_TYPE
                .GROUP_HISTORY_NOTICE_MESSAGE_SENT,
            });
          }),
          t
        );
      })(),
      u = new s();
    l.GroupMemberAddingUserJourneyLogger = u;
  },
  98,
);
