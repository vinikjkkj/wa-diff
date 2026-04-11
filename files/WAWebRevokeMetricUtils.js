__d(
  "WAWebRevokeMetricUtils",
  [
    "WARandomHex",
    "WAWebUiRevokeActionWamEvent",
    "WAWebWamEnumUiRevokeActionType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.$4 = function (t) {
            var e = Date.now(),
              n = this.$2 != null ? e - this.$2 : 0;
            (new (o("WAWebUiRevokeActionWamEvent").UiRevokeActionWamEvent)({
              messageAction: t,
              uiRevokeActionDuration: n,
              uiRevokeActionSessionId: this.$1,
            }).commit(),
              (this.$2 = e));
          }),
          (t.startSession = function () {
            ((this.$1 = o("WARandomHex").randomHex(16)),
              (this.$2 = null),
              (this.$3 = 0));
          }),
          (t.endSession = function () {
            this.startSession();
          }),
          (t.messageSelected = function () {
            this.$3 > 0 ||
              (this.$4(
                o("WAWebWamEnumUiRevokeActionType").UI_REVOKE_ACTION_TYPE
                  .MESSAGE_SELECTED,
              ),
              (this.$3 = 1));
          }),
          (t.trashCanSelected = function () {
            this.$3 > 1 ||
              (this.$4(
                o("WAWebWamEnumUiRevokeActionType").UI_REVOKE_ACTION_TYPE
                  .TRASH_CAN_SELECTED,
              ),
              (this.$3 = 2));
          }),
          (t.adminRevoke = function () {
            this.$4(
              o("WAWebWamEnumUiRevokeActionType").UI_REVOKE_ACTION_TYPE
                .ADMIN_DELETE_FOR_EVERYONE,
            );
          }),
          (t.senderRevoke = function () {
            (this.$4(
              o("WAWebWamEnumUiRevokeActionType").UI_REVOKE_ACTION_TYPE
                .SENDER_DELETE_FOR_EVERYONE,
            ),
              this.endSession());
          }),
          (t.adminAndSenderRevoke = function () {
            this.$4(
              o("WAWebWamEnumUiRevokeActionType").UI_REVOKE_ACTION_TYPE
                .ADMIN_AND_SENDER_DELETE_FOR_EVERYONE,
            );
          }),
          (t.revokeConfirmed = function () {
            (this.$4(
              o("WAWebWamEnumUiRevokeActionType").UI_REVOKE_ACTION_TYPE
                .DELETE_FOR_EVERYONE_SELECTED,
            ),
              this.endSession());
          }),
          e
        );
      })(),
      s = new e();
    l.UiRevokeActionHelper = s;
  },
  98,
);
