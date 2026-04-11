__d(
  "WAWebGroupSafetyCheckModalLoggingUtils",
  [
    "WAWebGroupSafetyCheckGatingUtils",
    "WAWebPsGroupOpenedWamEvent",
    "WAWebPsGroupSafetyCheckEnabledWamEvent",
    "WAWebPsGroupSafetyCheckExitDialogWamEvent",
    "WAWebPsGroupSafetyCheckSheetSeenWamEvent",
    "WAWebPsGroupSafetyCheckUiInteractionsWamEvent",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.groupJid;
      o("WAWebGroupSafetyCheckGatingUtils").groupSafetyCheckLoggingEnabled() &&
        new (o("WAWebPsGroupOpenedWamEvent").PsGroupOpenedWamEvent)({
          isGroupSafetyCheckAbpropEnabled: !0,
          isPartOfGroupSafetyCheckExperiment: o(
            "WAWebGroupSafetyCheckGatingUtils",
          ).groupSafetyCheckIsPartOfExperiment(),
          openedGroupJid: t,
        }).commit();
    }
    function s(e) {
      var t = e.groupJid,
        n = e.initiallyMuted;
      new (o(
        "WAWebPsGroupSafetyCheckEnabledWamEvent",
      ).PsGroupSafetyCheckEnabledWamEvent)({
        psSafetyCheckGroupJid: t,
        psWasSafetyCheckGroupInitiallyMuted: n,
      }).commit();
    }
    function u(e) {
      var t = e.groupJid;
      new (o(
        "WAWebPsGroupSafetyCheckSheetSeenWamEvent",
      ).PsGroupSafetyCheckSheetSeenWamEvent)({
        psSafetyCheckGroupJid: t,
      }).commit();
    }
    function c(e) {
      var t = e.groupJid,
        n = e.interaction;
      new (o(
        "WAWebPsGroupSafetyCheckUiInteractionsWamEvent",
      ).PsGroupSafetyCheckUiInteractionsWamEvent)({
        psSafetyCheckGroupJid: t,
        psSafetyCheckInteraction: n,
      }).commit();
    }
    function d(e) {
      var t = e.groupJid,
        n = e.interaction;
      new (o(
        "WAWebPsGroupSafetyCheckExitDialogWamEvent",
      ).PsGroupSafetyCheckExitDialogWamEvent)({
        psSafetyCheckGroupJid: t,
        psGroupSafetyCheckExitDialogAction: n,
      }).commit();
    }
    ((l.logGroupOpenEvent = e),
      (l.logGroupSafetyCheckEnabledEvent = s),
      (l.logGroupSafetyCheckModalSeenEvent = u),
      (l.logGroupSafetyCheckUIInteractionsEvent = c),
      (l.logGroupSafetyCheckExitDialogUIInteractionsEvent = d));
  },
  98,
);
