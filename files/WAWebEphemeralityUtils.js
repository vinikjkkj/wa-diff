__d(
  "WAWebEphemeralityUtils",
  ["WAWebEphemeralityTypes", "WAWebProtobufsE2E.pb", "gkx", "justknobx"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      switch (e) {
        case o("WAWebEphemeralityTypes").DisappearingModeTrigger.ChatSettings:
          return 1;
        case o("WAWebEphemeralityTypes").DisappearingModeTrigger.BulkChange:
          return 3;
        default:
          return null;
      }
    }
    function s(e, t) {
      return t == null ? (e > 0 ? 1 : null) : e === t ? 2 : 1;
    }
    function u(e) {
      switch (e) {
        case 1:
          return o("WAWebEphemeralityTypes").DisappearingModeTrigger
            .ChatSettings;
        case 2:
          return o("WAWebEphemeralityTypes").DisappearingModeTrigger
            .AccountSettings;
        case 3:
          return o("WAWebEphemeralityTypes").DisappearingModeTrigger.BulkChange;
        default:
          return null;
      }
    }
    function c(e) {
      switch (e) {
        case "1":
          return o("WAWebEphemeralityTypes").DisappearingModeTrigger
            .ChatSettings;
        case "2":
          return o("WAWebEphemeralityTypes").DisappearingModeTrigger
            .AccountSettings;
        case "3":
          return o("WAWebEphemeralityTypes").DisappearingModeTrigger.BulkChange;
        default:
          return null;
      }
    }
    function d(e) {
      switch (e) {
        case "chat_settings":
          return o("WAWebEphemeralityTypes").DisappearingModeTrigger
            .ChatSettings;
        case "account_settings":
          return o("WAWebEphemeralityTypes").DisappearingModeTrigger
            .AccountSettings;
        case "bulk_change":
          return o("WAWebEphemeralityTypes").DisappearingModeTrigger.BulkChange;
        case "biz_supports_fb_hosting":
          return o("WAWebEphemeralityTypes").DisappearingModeTrigger
            .BizSupportFbHosting;
        case "unknown_groups":
          return o("WAWebEphemeralityTypes").DisappearingModeTrigger
            .UnknownGroups;
        case "unknown":
        default:
          return o("WAWebEphemeralityTypes").DisappearingModeTrigger.Unknown;
      }
    }
    function m(e) {
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
          return o("WAWebEphemeralityTypes").DisappearingModeTrigger
            .BizSupportFbHosting;
        case o("WAWebProtobufsE2E.pb").DisappearingMode$Trigger.UNKNOWN_GROUPS:
          return o("WAWebEphemeralityTypes").DisappearingModeTrigger
            .UnknownGroups;
        default:
          return;
      }
    }
    function p(e) {
      return (
        e.isEphemeralityDisabled === !0 &&
        (!r("justknobx")._("5335") || !r("gkx")("26258"))
      );
    }
    ((l.getGroupEphemeralTrigger = e),
      (l.getEphemeralTriggerForGroupCreation = s),
      (l.getDisappearingModeTrigger = u),
      (l.getDisappearingModeTriggerString = c),
      (l.getDisappearingModeTriggerFromString = d),
      (l.getDisappearingModeTriggerFromProtobuf = m),
      (l.isEphemeralityDisabledForMessagingWithContact = p));
  },
  98,
);
