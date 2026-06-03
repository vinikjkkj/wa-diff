__d(
  "WAWebHistorySyncScheduledMsgInnerProtoBuilder",
  ["WAWebAfterReadUtils", "WAWebE2EProtoUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = e != null ? e : "",
        r = s(t);
      return r == null
        ? { conversation: n }
        : { extendedTextMessage: { text: n, contextInfo: r } };
    }
    function s(e) {
      var t = e.afterReadDuration,
        n = e.disappearingModeInitiatedByMe,
        r = e.disappearingModeInitiator,
        a = e.disappearingModeTrigger,
        i = e.ephemeralDuration,
        l = e.ephemeralSettingTimestamp,
        s =
          (i != null && i > 0) ||
          l != null ||
          (t != null &&
            t > 0 &&
            o("WAWebAfterReadUtils").isAfterReadEnabled()) ||
          r != null;
      if (!s) return null;
      var u = {};
      return (
        i != null && i > 0 && (u.expiration = i),
        l != null && (u.ephemeralSettingTimestamp = l),
        t != null &&
          t > 0 &&
          o("WAWebAfterReadUtils").isAfterReadEnabled() &&
          (u.afterReadDuration = t),
        r != null &&
          (u.disappearingMode = o(
            "WAWebE2EProtoUtils",
          ).disappearingModeInitiatorToProto(
            r,
            a != null ? a : void 0,
            n != null ? n : void 0,
          )),
        u
      );
    }
    l.buildHistorySyncInnerProto = e;
  },
  98,
);
