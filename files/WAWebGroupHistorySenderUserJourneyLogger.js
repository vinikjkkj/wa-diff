__d(
  "WAWebGroupHistorySenderUserJourneyLogger",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebGroupHistorySenderUserJourneyWamEvent",
    "WAWebUnifiedSession",
    "WAWebWamEnumGroupHistoryIneligibilityReason",
    "WAWebWamEnumGroupHistorySenderActionType",
    "WAWebWamEnumGroupHistorySystemMessageType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = {
        add: (s = o("WAWebWamEnumGroupHistorySystemMessageType"))
          .GROUP_HISTORY_SYSTEM_MESSAGE_TYPE.MANUALLY_ADD,
        auto_add: s.GROUP_HISTORY_SYSTEM_MESSAGE_TYPE.INVITE_AUTO_ADD,
        invite: s.GROUP_HISTORY_SYSTEM_MESSAGE_TYPE.INVITE_ACCEPT,
        invite_auto_add: s.GROUP_HISTORY_SYSTEM_MESSAGE_TYPE.INVITE_AUTO_ADD,
        linked_group_join: s.GROUP_HISTORY_SYSTEM_MESSAGE_TYPE.COMMUNITY,
        v4_add_invite_join: s.GROUP_HISTORY_SYSTEM_MESSAGE_TYPE.INVITE_LINK,
      };
    function d(e) {
      var t;
      return e == null
        ? o("WAWebWamEnumGroupHistorySystemMessageType")
            .GROUP_HISTORY_SYSTEM_MESSAGE_TYPE.UNKNOWN
        : (t = c[e]) != null
          ? t
          : o("WAWebWamEnumGroupHistorySystemMessageType")
              .GROUP_HISTORY_SYSTEM_MESSAGE_TYPE.UNKNOWN;
    }
    var m = {
      already_received: (u = o("WAWebWamEnumGroupHistoryIneligibilityReason"))
        .GROUP_HISTORY_INELIGIBILITY_REASON.NOT_NEW_OR_ALREADY_SENT,
      bot: u.GROUP_HISTORY_INELIGIBILITY_REASON.RECEIVER_NOT_ELIGIBLE,
      group_ineligible:
        u.GROUP_HISTORY_INELIGIBILITY_REASON.GROUP_TYPE_NOT_ELIGIBLE,
      no_available_messages:
        u.GROUP_HISTORY_INELIGIBILITY_REASON.NO_SHAREABLE_MESSAGES,
      no_join_time: u.GROUP_HISTORY_INELIGIBILITY_REASON.NOT_IN_GROUP,
      window_expired:
        u.GROUP_HISTORY_INELIGIBILITY_REASON.NOT_NEW_OR_ALREADY_SENT,
    };
    function p(e) {
      var t;
      return e == null
        ? o("WAWebWamEnumGroupHistoryIneligibilityReason")
            .GROUP_HISTORY_INELIGIBILITY_REASON.UNKNOWN
        : (t = m[e]) != null
          ? t
          : o("WAWebWamEnumGroupHistoryIneligibilityReason")
              .GROUP_HISTORY_INELIGIBILITY_REASON.UNKNOWN;
    }
    var _ = (function () {
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
                    "[group-history][M2] Unified session ID is null",
                  ])),
              );
              return;
            }
            new (o(
              "WAWebGroupHistorySenderUserJourneyWamEvent",
            ).GroupHistorySenderUserJourneyWamEvent)(
              babelHelpers.extends({}, n, {
                userJourneyTs: o("WATimeUtils").unixTimeMs(),
                unifiedSessionId: t,
              }),
            ).commit();
          }),
          (n.$2 = function (t, n) {
            var e = n.groupHistorySystemMessageType,
              r = n.recipientCount,
              o = n.uiSurface;
            this.$1({
              groupHistorySenderActionType: t,
              groupHistorySystemMessageType: e,
              recipientCount: r,
              uiSurface: o,
            });
          }),
          (n.sendMessageHistorySystemMessageClicked = function (t) {
            this.$2(
              o("WAWebWamEnumGroupHistorySenderActionType")
                .GROUP_HISTORY_SENDER_ACTION_TYPE
                .SEND_MESSAGE_HISTORY_SYSTEM_MESSAGE_CLICKED,
              t,
            );
          }),
          (n.viewOptionsSystemMessageClicked = function (t) {
            this.$2(
              o("WAWebWamEnumGroupHistorySenderActionType")
                .GROUP_HISTORY_SENDER_ACTION_TYPE
                .VIEW_OPTIONS_SYSTEM_MESSAGE_CLICKED,
              t,
            );
          }),
          (n.dropdownMenuItemDisplayed = function (t) {
            var e = t.recipientCount,
              n = t.uiSurface;
            this.$1({
              groupHistorySenderActionType: o(
                "WAWebWamEnumGroupHistorySenderActionType",
              ).GROUP_HISTORY_SENDER_ACTION_TYPE
                .GROUP_HISTORY_DROPDOWN_MENU_ITEM_DISPLAYED,
              recipientCount: e,
              uiSurface: n,
            });
          }),
          (n.dropdownMenuItemClicked = function (t) {
            var e = t.recipientCount,
              n = t.uiSurface;
            this.$1({
              groupHistorySenderActionType: o(
                "WAWebWamEnumGroupHistorySenderActionType",
              ).GROUP_HISTORY_SENDER_ACTION_TYPE
                .GROUP_HISTORY_DROPDOWN_MENU_ITEM_CLICKED,
              recipientCount: e,
              uiSurface: n,
            });
          }),
          (n.bundleMessageSent = function (t) {
            var e = t.bundleSendSource,
              n = t.groupHistoryMessagesCount,
              r = t.recipientCount,
              a = t.uiSurface;
            this.$1({
              bundleSendSource: e,
              groupHistoryMessagesCount: n != null ? n : void 0,
              groupHistorySenderActionType: o(
                "WAWebWamEnumGroupHistorySenderActionType",
              ).GROUP_HISTORY_SENDER_ACTION_TYPE
                .GROUP_HISTORY_BUNDLE_MESSAGE_SENT,
              recipientCount: r,
              uiSurface: a,
            });
          }),
          (n.noticeMessageSent = function (t) {
            var e = t.bundleSendSource,
              n = t.recipientCount,
              r = t.uiSurface;
            this.$1({
              bundleSendSource: e,
              groupHistorySenderActionType: o(
                "WAWebWamEnumGroupHistorySenderActionType",
              ).GROUP_HISTORY_SENDER_ACTION_TYPE
                .GROUP_HISTORY_NOTICE_MESSAGE_SENT,
              recipientCount: n,
              uiSurface: r,
            });
          }),
          (n.$3 = function (t, n) {
            var e = n.ineligibleReason,
              r = n.uiSurface;
            this.$1({
              groupHistorySenderActionType: t,
              ineligibleReason: e,
              uiSurface: r,
            });
          }),
          (n.sendIneligibleAtCtaClick = function (t) {
            this.$3(
              o("WAWebWamEnumGroupHistorySenderActionType")
                .GROUP_HISTORY_SENDER_ACTION_TYPE
                .GROUP_HISTORY_SEND_INELIGIBLE_AT_CTA_CLICK,
              t,
            );
          }),
          (n.sendIneligibleAtSendClick = function (t) {
            this.$3(
              o("WAWebWamEnumGroupHistorySenderActionType")
                .GROUP_HISTORY_SENDER_ACTION_TYPE
                .GROUP_HISTORY_SEND_INELIGIBLE_AT_SEND_CLICK,
              t,
            );
          }),
          (n.selectableMessagesLoaded = function (t) {
            var e = t.groupHistoryMessagesCount,
              n = t.uiSurface;
            this.$1({
              groupHistoryMessagesCount: e,
              groupHistorySenderActionType: o(
                "WAWebWamEnumGroupHistorySenderActionType",
              ).GROUP_HISTORY_SENDER_ACTION_TYPE
                .GROUP_HISTORY_SELECTABLE_MESSAGES_LOADED,
              uiSurface: n,
            });
          }),
          (n.countChangeEntryPointClicked = function (t) {
            var e = t.groupHistoryMessagesCount,
              n = t.uiSurface;
            this.$1({
              groupHistoryMessagesCount: e,
              groupHistorySenderActionType: o(
                "WAWebWamEnumGroupHistorySenderActionType",
              ).GROUP_HISTORY_SENDER_ACTION_TYPE
                .GROUP_HISTORY_COUNT_CHANGE_ENTRY_POINT_CLICKED,
              uiSurface: n,
            });
          }),
          (n.countChanged = function (t) {
            var e = t.groupHistoryMessagesCount,
              n = t.uiSurface;
            this.$1({
              groupHistoryMessagesCount: e,
              groupHistorySenderActionType: o(
                "WAWebWamEnumGroupHistorySenderActionType",
              ).GROUP_HISTORY_SENDER_ACTION_TYPE.GROUP_HISTORY_COUNT_CHANGED,
              uiSurface: n,
            });
          }),
          t
        );
      })(),
      f = new _();
    ((l.getGroupHistorySystemMessageType = d),
      (l.mapEligibilityResultToIneligibleReason = p),
      (l.GroupHistorySenderUserJourneyLogger = f));
  },
  98,
);
