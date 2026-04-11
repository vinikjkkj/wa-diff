__d(
  "WAWebMsgEphemerality",
  ["WAWebEphemeralityTypes", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t;
      if (
        e.ephemeralDuration == null &&
        e.ephemeralSettingTimestamp == null &&
        e.disappearingModeInitiator == null
      )
        return null;
      var n = (t = e.ephemeralDuration) != null ? t : 0,
        r = e.ephemeralSettingTimestamp,
        a = e.disappearingModeInitiator,
        i = e.disappearingModeTrigger,
        l = e.disappearingModeInitiatedByMe;
      return (
        e.subtype === "ephemeral_setting" &&
          ((r = e.t),
          (a = o("WAWebEphemeralityTypes").DisappearingModeInitiator
            .ChangedInChat)),
        {
          duration: n,
          settingTimestamp: r,
          initiator: a,
          disappearingModeTrigger: i,
          initiatedByMe: l,
          afterReadDuration: e.afterReadDuration,
        }
      );
    }
    var u = [
      (e = o("WAWebMsgType")).MSG_TYPE.CHAT,
      e.MSG_TYPE.IMAGE,
      e.MSG_TYPE.VIDEO,
      e.MSG_TYPE.AUDIO,
      e.MSG_TYPE.PTT,
      e.MSG_TYPE.DOCUMENT,
      e.MSG_TYPE.PRODUCT,
      e.MSG_TYPE.STICKER,
      e.MSG_TYPE.POLL_CREATION,
      e.MSG_TYPE.POLL_RESULT_SNAPSHOT,
      e.MSG_TYPE.NEWSLETTER_ADMIN_INVITE,
      e.MSG_TYPE.GROUPS_V4_INVITE,
      e.MSG_TYPE.CALL_LOG,
    ];
    function c(e) {
      return !!u.includes(e);
    }
    ((l.getMsgEphemeralitySettings = s),
      (l.ephemeralMessageTypes = u),
      (l.messageSupportsEphemerality = c));
  },
  98,
);
