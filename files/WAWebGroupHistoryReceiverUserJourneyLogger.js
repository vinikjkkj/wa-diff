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
          (n.downloadFailed = function (t) {
            this.$1({
              groupHistoryReceiverActionType: o(
                "WAWebWamEnumGroupHistoryReceiverUserJourneyActionType",
              ).GROUP_HISTORY_RECEIVER_USER_JOURNEY_ACTION_TYPE
                .GROUP_HISTORY_DOWNLOAD_FAILED,
              groupHistoryReceiverGroupId: t,
            });
          }),
          (n.parseHistoryProtoFailed = function (t, n, r) {
            this.$1({
              groupHistoryReceiverActionType: o(
                "WAWebWamEnumGroupHistoryReceiverUserJourneyActionType",
              ).GROUP_HISTORY_RECEIVER_USER_JOURNEY_ACTION_TYPE
                .GROUP_HISTORY_PARSE_HISTORY_PROTO_FAILED,
              groupHistoryReceiverGroupId: t,
              groupHistoryMessagesCount: n,
              groupHistoryOutWindowPinsCount: r,
            });
          }),
          (n.parseHistoryProtoSucceeded = function (t, n, r) {
            this.$1({
              groupHistoryReceiverActionType: o(
                "WAWebWamEnumGroupHistoryReceiverUserJourneyActionType",
              ).GROUP_HISTORY_RECEIVER_USER_JOURNEY_ACTION_TYPE
                .GROUP_HISTORY_PARSE_HISTORY_PROTO_SUCCEEDED,
              groupHistoryReceiverGroupId: t,
              groupHistoryMessagesCount: n,
              groupHistoryOutWindowPinsCount: r,
            });
          }),
          (n.dbInserted = function (t, n, r, a) {
            this.$1({
              groupHistoryReceiverActionType: o(
                "WAWebWamEnumGroupHistoryReceiverUserJourneyActionType",
              ).GROUP_HISTORY_RECEIVER_USER_JOURNEY_ACTION_TYPE
                .GROUP_HISTORY_DB_INSERTED,
              groupHistoryReceiverGroupId: t,
              groupHistoryMessagesCount: n,
              groupHistoryDbIgnoredOlderMessages: r,
              groupHistoryOutWindowPinsCount: a,
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
          t
        );
      })(),
      u = new s();
    l.GroupHistoryReceiverUserJourneyLogger = u;
  },
  98,
);
