__d(
  "WAWebExtractEphemeralFieldsFromScheduledMsg",
  ["WALongInt", "WAWebAfterReadUtils", "WAWebDisappearingModeProtoUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n,
        r = (n = e.extendedTextMessage) == null ? void 0 : n.contextInfo;
      if (r == null) return {};
      var a = {};
      (r.expiration != null && (a.ephemeralDuration = r.expiration),
        r.ephemeralSettingTimestamp != null &&
          (a.ephemeralSettingTimestamp = o("WALongInt").numberOrThrowIfTooLarge(
            r.ephemeralSettingTimestamp,
          )),
        r.ephemeralSharedSecret != null &&
          (a.ephemeralSharedSecret = r.ephemeralSharedSecret),
        r.afterReadDuration != null &&
          o("WAWebAfterReadUtils").isAfterReadEnabled() &&
          (a.afterReadDuration = r.afterReadDuration));
      var i = r.disappearingMode;
      if (i != null) {
        var l = { from: t },
          s = o(
            "WAWebDisappearingModeProtoUtils",
          ).protoToDisappearingModeInitiator(l, i);
        s != null && (a.disappearingModeInitiator = s);
        var u = o("WAWebDisappearingModeProtoUtils").protoToDisappearingMode(
          l,
          i,
        );
        u != null &&
          ((a.disappearingModeTrigger = u.disappearingModeTrigger),
          u.initiatedByMe != null &&
            (a.disappearingModeInitiatedByMe = u.initiatedByMe));
      }
      return a;
    }
    l.extractEphemeralFieldsFromScheduledMsg = e;
  },
  98,
);
