__d(
  "WAWebEphemeralityWAMUtils",
  [
    "WAWebEphemeralityTypes",
    "WAWebWamEnumDisappearingChatInitiatorType",
    "WAWebWamEnumEphemeralityInitiatorType",
    "WAWebWamEnumEphemeralityTriggerActionType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      switch (e) {
        case o("WAWebEphemeralityTypes").DisappearingModeTrigger
          .AccountSettings:
          return o("WAWebWamEnumEphemeralityTriggerActionType")
            .EPHEMERALITY_TRIGGER_ACTION_TYPE.ACCOUNT_SETTINGS;
        case o("WAWebEphemeralityTypes").DisappearingModeTrigger.ChatSettings:
          return o("WAWebWamEnumEphemeralityTriggerActionType")
            .EPHEMERALITY_TRIGGER_ACTION_TYPE.CHAT_SETTINGS;
        case o("WAWebEphemeralityTypes").DisappearingModeTrigger.BulkChange:
          return o("WAWebWamEnumEphemeralityTriggerActionType")
            .EPHEMERALITY_TRIGGER_ACTION_TYPE.BULK_CHANGE;
        case o("WAWebEphemeralityTypes").DisappearingModeTrigger.UnknownGroups:
          return o("WAWebWamEnumEphemeralityTriggerActionType")
            .EPHEMERALITY_TRIGGER_ACTION_TYPE.UNKNOWN_GROUP;
        case o("WAWebEphemeralityTypes").DisappearingModeTrigger
          .BizSupportFbHosting:
        case o("WAWebEphemeralityTypes").DisappearingModeTrigger.Unknown:
          return o("WAWebWamEnumEphemeralityTriggerActionType")
            .EPHEMERALITY_TRIGGER_ACTION_TYPE.UNKNOWN;
      }
    }
    function s(e) {
      return (
        e === void 0 && (e = !1),
        e
          ? o("WAWebWamEnumEphemeralityInitiatorType")
              .EPHEMERALITY_INITIATOR_TYPE.INITIATED_BY_ME
          : o("WAWebWamEnumEphemeralityInitiatorType")
              .EPHEMERALITY_INITIATOR_TYPE.INITIATED_BY_OTHER
      );
    }
    function u(e) {
      switch (e) {
        case o("WAWebEphemeralityTypes").DisappearingModeInitiator
          .InitiatedByMe:
          return o("WAWebWamEnumDisappearingChatInitiatorType")
            .DISAPPEARING_CHAT_INITIATOR_TYPE.INITIATED_BY_ME;
        case o("WAWebEphemeralityTypes").DisappearingModeInitiator
          .InitiatedByOther:
        case o("WAWebEphemeralityTypes").DisappearingModeInitiator
          .BizUpgradeFbHosting:
          return o("WAWebWamEnumDisappearingChatInitiatorType")
            .DISAPPEARING_CHAT_INITIATOR_TYPE.INITIATED_BY_OTHER;
        case o("WAWebEphemeralityTypes").DisappearingModeInitiator
          .ChangedInChat:
          return o("WAWebWamEnumDisappearingChatInitiatorType")
            .DISAPPEARING_CHAT_INITIATOR_TYPE.CHAT;
      }
    }
    ((l.getWamDisappearingModeTrigger = e),
      (l.getWamDisappearingModeInitiatedByMe = s),
      (l.getWamDisappearingModeInitiator = u));
  },
  98,
);
