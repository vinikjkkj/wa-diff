__d(
  "WAWebMessageYourselfMetricUtils",
  [
    "WARandomHex",
    "WAWebChatConstants",
    "WAWebUiMessageYourselfActionWamEvent",
    "WAWebWamEnumUiMessageYourselfActionType",
    "WAWebWamEnumUiMessageYourselfFunnelName",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
        function e(e) {
          this.$2 = e;
        }
        var t = e.prototype;
        return (
          (t.$3 = function (t) {
            new (o(
              "WAWebUiMessageYourselfActionWamEvent",
            ).UiMessageYourselfActionWamEvent)({
              uiMessageYourselfActionSessionId: this.$1,
              uiMessageYourselfActionType: t,
              uiMessageYourselfFunnelName: this.$2,
            }).commit();
          }),
          (t.startSession = function () {
            this.$1 = o("WARandomHex").randomHex(16);
          }),
          (t.newChatPressed = function () {
            this.$3(
              o("WAWebWamEnumUiMessageYourselfActionType")
                .UI_MESSAGE_YOURSELF_ACTION_TYPE.NEW_CHAT_PRESSED,
            );
          }),
          (t.youSelected = function () {
            this.$3(
              o("WAWebWamEnumUiMessageYourselfActionType")
                .UI_MESSAGE_YOURSELF_ACTION_TYPE.YOU_SELECTED,
            );
          }),
          (t.searchBarPressed = function () {
            this.$3(
              o("WAWebWamEnumUiMessageYourselfActionType")
                .UI_MESSAGE_YOURSELF_ACTION_TYPE.SEARCH_BAR_PRESSED,
            );
          }),
          (t.logMessageYourselfOpenedEvent = function (t, n) {
            (n ? this.searchFullNameYouSelected() : this.youSelected(),
              t.msgs.length ||
              t.endOfHistoryTransferType ===
                o("WAWebChatConstants")
                  .ConversationEndOfHistoryTransferModelPropType.INCOMPLETE
                ? this.existingMessageYourselfOpened()
                : this.newMessageYourselfCreated());
          }),
          (t.searchFullNameYouSelected = function () {
            this.$3(
              o("WAWebWamEnumUiMessageYourselfActionType")
                .UI_MESSAGE_YOURSELF_ACTION_TYPE.SEARCH_FULL_NAME_YOU_SELECTED,
            );
          }),
          (t.newMessageYourselfCreated = function () {
            this.$3(
              o("WAWebWamEnumUiMessageYourselfActionType")
                .UI_MESSAGE_YOURSELF_ACTION_TYPE.NEW_NTS_CREATED,
            );
          }),
          (t.existingMessageYourselfOpened = function () {
            this.$3(
              o("WAWebWamEnumUiMessageYourselfActionType")
                .UI_MESSAGE_YOURSELF_ACTION_TYPE.EXISTING_NTS_OPENED,
            );
          }),
          e
        );
      })(),
      s = new e(
        o("WAWebWamEnumUiMessageYourselfFunnelName")
          .UI_MESSAGE_YOURSELF_FUNNEL_NAME.NEW_CHAT,
      ),
      u = new e(
        o("WAWebWamEnumUiMessageYourselfFunnelName")
          .UI_MESSAGE_YOURSELF_FUNNEL_NAME.CONTACT_AND_GLOBAL_SEARCH,
      );
    ((l.UiMessageYourselfNewChatAction = s),
      (l.UiMessageYourselfSearchAction = u));
  },
  98,
);
