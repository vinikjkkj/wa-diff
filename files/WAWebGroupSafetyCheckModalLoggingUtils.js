__d(
  "WAWebGroupSafetyCheckModalLoggingUtils",
  [
    "WAWebPsGroupSafetyCheckEnabledWamEvent",
    "WAWebPsGroupSafetyCheckExitDialogWamEvent",
    "WAWebPsGroupSafetyCheckSheetSeenWamEvent",
    "WAWebPsGroupSafetyCheckUiInteractionsWamEvent",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.groupJid,
        n = e.initiallyMuted;
      new (o(
        "WAWebPsGroupSafetyCheckEnabledWamEvent",
      ).PsGroupSafetyCheckEnabledWamEvent)({
        psSafetyCheckGroupJid: t,
        psWasSafetyCheckGroupInitiallyMuted: n,
      }).commit();
    }
    function s(e) {
      var t = e.groupJid;
      new (o(
        "WAWebPsGroupSafetyCheckSheetSeenWamEvent",
      ).PsGroupSafetyCheckSheetSeenWamEvent)({
        psSafetyCheckGroupJid: t,
      }).commit();
    }
    function u(e) {
      var t = e.groupJid,
        n = e.interaction;
      new (o(
        "WAWebPsGroupSafetyCheckUiInteractionsWamEvent",
      ).PsGroupSafetyCheckUiInteractionsWamEvent)({
        psSafetyCheckGroupJid: t,
        psSafetyCheckInteraction: n,
      }).commit();
    }
    function c(e) {
      var t = e.groupJid,
        n = e.interaction;
      new (o(
        "WAWebPsGroupSafetyCheckExitDialogWamEvent",
      ).PsGroupSafetyCheckExitDialogWamEvent)({
        psSafetyCheckGroupJid: t,
        psGroupSafetyCheckExitDialogAction: n,
      }).commit();
    }
    ((l.logGroupSafetyCheckEnabledEvent = e),
      (l.logGroupSafetyCheckModalSeenEvent = s),
      (l.logGroupSafetyCheckUIInteractionsEvent = u),
      (l.logGroupSafetyCheckExitDialogUIInteractionsEvent = c));
  },
  98,
);
