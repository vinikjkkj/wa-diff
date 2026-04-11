__d(
  "WAWebDefenseModeQuarantineLogger",
  [
    "WAWebDefenseModeQuarantineWamEvent",
    "WAWebWamEnumDefenseModeQuarantineAction",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      (e === void 0 && (e = 1),
        new (o(
          "WAWebDefenseModeQuarantineWamEvent",
        ).DefenseModeQuarantineWamEvent)({
          quarantineAction: o("WAWebWamEnumDefenseModeQuarantineAction")
            .DEFENSE_MODE_QUARANTINE_ACTION.QUARANTINED_MSG,
          defenseModeQuarantineEventCount: e,
        }).commit());
    }
    function s() {
      new (o(
        "WAWebDefenseModeQuarantineWamEvent",
      ).DefenseModeQuarantineWamEvent)({
        quarantineAction: o("WAWebWamEnumDefenseModeQuarantineAction")
          .DEFENSE_MODE_QUARANTINE_ACTION.QUARANTINE_RESTORE_CLICK,
      }).commit();
    }
    function u() {
      new (o(
        "WAWebDefenseModeQuarantineWamEvent",
      ).DefenseModeQuarantineWamEvent)({
        quarantineAction: o("WAWebWamEnumDefenseModeQuarantineAction")
          .DEFENSE_MODE_QUARANTINE_ACTION.QUARANTINE_RESTORE_DISMISS,
      }).commit();
    }
    function c() {
      new (o(
        "WAWebDefenseModeQuarantineWamEvent",
      ).DefenseModeQuarantineWamEvent)({
        quarantineAction: o("WAWebWamEnumDefenseModeQuarantineAction")
          .DEFENSE_MODE_QUARANTINE_ACTION.QUARANTINE_RESTORE_CONFIRM,
      }).commit();
    }
    function d(e) {
      new (o(
        "WAWebDefenseModeQuarantineWamEvent",
      ).DefenseModeQuarantineWamEvent)({
        quarantineAction: o("WAWebWamEnumDefenseModeQuarantineAction")
          .DEFENSE_MODE_QUARANTINE_ACTION.QUARANTINE_RESTORE_AUTO,
        defenseModeQuarantineEventCount: e,
      }).commit();
    }
    function m() {
      new (o(
        "WAWebDefenseModeQuarantineWamEvent",
      ).DefenseModeQuarantineWamEvent)({
        quarantineAction: o("WAWebWamEnumDefenseModeQuarantineAction")
          .DEFENSE_MODE_QUARANTINE_ACTION.QUARANTINE_RESTORE_SUCCESS,
      }).commit();
    }
    function p() {
      new (o(
        "WAWebDefenseModeQuarantineWamEvent",
      ).DefenseModeQuarantineWamEvent)({
        quarantineAction: o("WAWebWamEnumDefenseModeQuarantineAction")
          .DEFENSE_MODE_QUARANTINE_ACTION.QUARANTINE_RESTORE_FAILED,
      }).commit();
    }
    ((l.logQuarantinedMessage = e),
      (l.logQuarantineRestoreClick = s),
      (l.logQuarantineRestoreDismiss = u),
      (l.logQuarantineRestoreConfirm = c),
      (l.logQuarantineRestoreAuto = d),
      (l.logQuarantineRestoreSuccess = m),
      (l.logQuarantineRestoreFailed = p));
  },
  98,
);
