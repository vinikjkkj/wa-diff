__d(
  "WAWebDisappearingModeProtoUtils",
  [
    "WAWebBizCoexGatingUtils",
    "WAWebEphemeralityTypes",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (e.from != null) {
        var n = o("WAWebUserPrefsMeUser").isMeAccount(e.from);
        if (t.initiator != null)
          switch (t.initiator) {
            case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
              .CHANGED_IN_CHAT:
              return o("WAWebEphemeralityTypes").DisappearingModeInitiator
                .ChangedInChat;
            case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
              .INITIATED_BY_ME:
              return n
                ? o("WAWebEphemeralityTypes").DisappearingModeInitiator
                    .InitiatedByMe
                : o("WAWebEphemeralityTypes").DisappearingModeInitiator
                    .InitiatedByOther;
            case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
              .INITIATED_BY_OTHER:
            case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
              .BIZ_UPGRADE_FB_HOSTING:
              return n
                ? o("WAWebEphemeralityTypes").DisappearingModeInitiator
                    .InitiatedByOther
                : o("WAWebEphemeralityTypes").DisappearingModeInitiator
                    .InitiatedByMe;
          }
      }
    }
    function s(e, t) {
      var n = o("WAWebUserPrefsMeUser").isMeAccount(e.from),
        r = t.initiatedByMe,
        a = t.initiator,
        i = t.trigger;
      if (
        i != null &&
        o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
        i ===
          o("WAWebProtobufsE2E.pb").DisappearingMode$Trigger
            .BIZ_SUPPORTS_FB_HOSTING
      )
        return { disappearingModeTrigger: u(i), initiatedByMe: n ? r : !r };
      if (i != null && r != null)
        return { disappearingModeTrigger: u(i), initiatedByMe: n ? r : !r };
      if (t.initiator != null && a != null)
        switch (a) {
          case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
            .CHANGED_IN_CHAT:
            return {
              disappearingModeTrigger: o("WAWebEphemeralityTypes")
                .DisappearingModeTrigger.ChatSettings,
            };
          case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
            .INITIATED_BY_ME:
            return {
              disappearingModeTrigger: o("WAWebEphemeralityTypes")
                .DisappearingModeTrigger.AccountSettings,
              initiatedByMe: n,
            };
          case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
            .BIZ_UPGRADE_FB_HOSTING:
          case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
            .INITIATED_BY_OTHER:
            return {
              disappearingModeTrigger: o("WAWebEphemeralityTypes")
                .DisappearingModeTrigger.AccountSettings,
              initiatedByMe: !n,
            };
        }
    }
    function u(e) {
      switch (e) {
        case o("WAWebProtobufsE2E.pb").DisappearingMode$Trigger.CHAT_SETTING:
          return o("WAWebEphemeralityTypes").DisappearingModeTrigger
            .ChatSettings;
        case o("WAWebProtobufsE2E.pb").DisappearingMode$Trigger.ACCOUNT_SETTING:
          return o("WAWebEphemeralityTypes").DisappearingModeTrigger
            .AccountSettings;
        case o("WAWebProtobufsE2E.pb").DisappearingMode$Trigger.BULK_CHANGE:
          return o("WAWebEphemeralityTypes").DisappearingModeTrigger.BulkChange;
        case o("WAWebProtobufsE2E.pb").DisappearingMode$Trigger
          .BIZ_SUPPORTS_FB_HOSTING:
          return o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled()
            ? o("WAWebEphemeralityTypes").DisappearingModeTrigger
                .BizSupportFbHosting
            : o("WAWebEphemeralityTypes").DisappearingModeTrigger.Unknown;
        case o("WAWebProtobufsE2E.pb").DisappearingMode$Trigger.UNKNOWN_GROUPS:
          return o("WAWebEphemeralityTypes").DisappearingModeTrigger
            .UnknownGroups;
        case o("WAWebProtobufsE2E.pb").DisappearingMode$Trigger.UNKNOWN:
          return o("WAWebEphemeralityTypes").DisappearingModeTrigger.Unknown;
      }
    }
    ((l.protoToDisappearingModeInitiator = e), (l.protoToDisappearingMode = s));
  },
  98,
);
