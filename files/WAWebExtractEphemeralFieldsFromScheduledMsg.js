__d(
  "WAWebExtractEphemeralFieldsFromScheduledMsg",
  [
    "WALongInt",
    "WAWebAfterReadUtils",
    "WAWebDisappearingModeProtoUtils",
    "WAWebGetScheduledMsgContextInfo",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WAWebGetScheduledMsgContextInfo").getScheduledMsgContextInfo(
        e,
      );
      if (n == null) return {};
      var r = {};
      (n.expiration != null && (r.ephemeralDuration = n.expiration),
        n.ephemeralSettingTimestamp != null &&
          (r.ephemeralSettingTimestamp = o("WALongInt").numberOrThrowIfTooLarge(
            n.ephemeralSettingTimestamp,
          )),
        n.ephemeralSharedSecret != null &&
          (r.ephemeralSharedSecret = n.ephemeralSharedSecret),
        n.afterReadDuration != null &&
          o("WAWebAfterReadUtils").isAfterReadEnabled() &&
          (r.afterReadDuration = n.afterReadDuration));
      var a = n.disappearingMode;
      if (a != null) {
        var i = { from: t },
          l = o(
            "WAWebDisappearingModeProtoUtils",
          ).protoToDisappearingModeInitiator(i, a);
        l != null && (r.disappearingModeInitiator = l);
        var s = o("WAWebDisappearingModeProtoUtils").protoToDisappearingMode(
          i,
          a,
        );
        s != null &&
          ((r.disappearingModeTrigger = s.disappearingModeTrigger),
          s.initiatedByMe != null &&
            (r.disappearingModeInitiatedByMe = s.initiatedByMe));
      }
      return r;
    }
    l.extractEphemeralFieldsFromScheduledMsg = e;
  },
  98,
);
