__d(
  "WAWebGroupHistoryReceiverUserJourneyLogger",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebGroupHistoryReceiverUserJourneyWamEvent",
    "WAWebUnifiedSession",
    "WAWebWamEnumGroupHistoryReceiverUserJourneyActionType",
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
              "WAWebGroupHistoryReceiverUserJourneyWamEvent",
            ).GroupHistoryReceiverUserJourneyWamEvent)(
              babelHelpers.extends({}, n, {
                userJourneyMs: o("WATimeUtils").unixTimeMs(),
                unifiedSessionId: t,
              }),
            ).commit();
          }),
          (n.downloadStarted = function (t, n) {
            this.$1({
              groupHistoryReceiverActionType: o(
                "WAWebWamEnumGroupHistoryReceiverUserJourneyActionType",
              ).GROUP_HISTORY_RECEIVER_USER_JOURNEY_ACTION_TYPE
                .GROUP_HISTORY_DOWNLOAD_STARTED,
              groupHistoryReceiverGroupId: t,
              isAutoProcess: n,
            });
          }),
          (n.downloadSucceeded = function (t) {
            this.$1({
              groupHistoryReceiverActionType: o(
                "WAWebWamEnumGroupHistoryReceiverUserJourneyActionType",
              ).GROUP_HISTORY_RECEIVER_USER_JOURNEY_ACTION_TYPE
                .GROUP_HISTORY_DOWNLOAD_SUCCEEDED,
              groupHistoryReceiverGroupId: t,
            });
          }),
          (n.downloadFailed = function (t, n) {
            this.$1({
              groupHistoryReceiverActionType: o(
                "WAWebWamEnumGroupHistoryReceiverUserJourneyActionType",
              ).GROUP_HISTORY_RECEIVER_USER_JOURNEY_ACTION_TYPE
                .GROUP_HISTORY_DOWNLOAD_FAILED,
              groupHistoryReceiverGroupId: t,
              receiverFailureReason: n,
            });
          }),
          (n.downloadExpired = function (t) {
            this.$1({
              groupHistoryReceiverActionType: o(
                "WAWebWamEnumGroupHistoryReceiverUserJourneyActionType",
              ).GROUP_HISTORY_RECEIVER_USER_JOURNEY_ACTION_TYPE
                .GROUP_HISTORY_DOWNLOAD_EXPIRED,
              groupHistoryReceiverGroupId: t,
            });
          }),
          (n.parseHistoryProtoFailed = function (t) {
            var e = t.groupHistoryMessagesCount,
              n = t.groupHistoryOutWindowPinsCount,
              r = t.groupHistoryReceiverGroupId,
              a = t.receiverFailureReason;
            this.$1({
              groupHistoryReceiverActionType: o(
                "WAWebWamEnumGroupHistoryReceiverUserJourneyActionType",
              ).GROUP_HISTORY_RECEIVER_USER_JOURNEY_ACTION_TYPE
                .GROUP_HISTORY_PARSE_HISTORY_PROTO_FAILED,
              groupHistoryReceiverGroupId: r,
              groupHistoryMessagesCount: e,
              groupHistoryOutWindowPinsCount: n,
              receiverFailureReason: a,
            });
          }),
          (n.parseHistoryProtoSucceeded = function (t, n, r, a, i) {
            this.$1({
              groupHistoryReceiverActionType: o(
                "WAWebWamEnumGroupHistoryReceiverUserJourneyActionType",
              ).GROUP_HISTORY_RECEIVER_USER_JOURNEY_ACTION_TYPE
                .GROUP_HISTORY_PARSE_HISTORY_PROTO_SUCCEEDED,
              groupHistoryReceiverGroupId: t,
              groupHistoryMessagesCount: n,
              groupHistoryOutWindowPinsCount: r,
              groupHistoryPinsCount: a,
              groupHistoryUncountedMessagesCount: i,
            });
          }),
          (n.dbInserted = function (t) {
            var e = t.groupHistoryDbIgnoredOlderMessages,
              n = t.groupHistoryMessagesCount,
              r = t.groupHistoryOutWindowPinsCount,
              a = t.groupHistoryReceiverGroupId;
            this.$1({
              groupHistoryReceiverActionType: o(
                "WAWebWamEnumGroupHistoryReceiverUserJourneyActionType",
              ).GROUP_HISTORY_RECEIVER_USER_JOURNEY_ACTION_TYPE
                .GROUP_HISTORY_DB_INSERTED,
              groupHistoryReceiverGroupId: a,
              groupHistoryMessagesCount: n,
              groupHistoryDbIgnoredOlderMessages: e,
              groupHistoryOutWindowPinsCount: r,
            });
          }),
          (n.downloadButtonClicked = function (t) {
            this.$1({
              groupHistoryReceiverActionType: o(
                "WAWebWamEnumGroupHistoryReceiverUserJourneyActionType",
              ).GROUP_HISTORY_RECEIVER_USER_JOURNEY_ACTION_TYPE
                .GROUP_HISTORY_DOWNLOAD_BUTTON_CLICKED,
              groupHistoryReceiverGroupId: t,
            });
          }),
          (n.viewButtonClicked = function (t) {
            this.$1({
              groupHistoryReceiverActionType: o(
                "WAWebWamEnumGroupHistoryReceiverUserJourneyActionType",
              ).GROUP_HISTORY_RECEIVER_USER_JOURNEY_ACTION_TYPE
                .GROUP_HISTORY_VIEW_BUTTON_CLICKED,
              groupHistoryReceiverGroupId: t,
            });
          }),
          (n.footerInlineShown = function (t) {
            this.$1({
              groupHistoryReceiverActionType: o(
                "WAWebWamEnumGroupHistoryReceiverUserJourneyActionType",
              ).GROUP_HISTORY_RECEIVER_USER_JOURNEY_ACTION_TYPE
                .GROUP_HISTORY_FOOTER_INLINE_SHOWN,
              groupHistoryReceiverGroupId: t,
            });
          }),
          (n.footerFloatingShown = function (t) {
            this.$1({
              groupHistoryReceiverActionType: o(
                "WAWebWamEnumGroupHistoryReceiverUserJourneyActionType",
              ).GROUP_HISTORY_RECEIVER_USER_JOURNEY_ACTION_TYPE
                .GROUP_HISTORY_FOOTER_FLOATING_SHOWN,
              groupHistoryReceiverGroupId: t,
            });
          }),
          t
        );
      })(),
      u = new s();
    l.GroupHistoryReceiverUserJourneyLogger = u;
  },
  98,
);
