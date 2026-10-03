__d(
  "WAWebHistorySyncScheduledMsgInnerProtoBuilder",
  ["WALogger", "WAWebAfterReadUtils", "WAWebE2EProtoUtils"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t = e.body,
        n = e.ephemeral,
        r = e.sourceProto,
        o = u(r);
      if (o != null) return o;
      var a = m(r) && t != null ? t : "",
        i = p(n);
      return i == null
        ? { conversation: a }
        : { extendedTextMessage: { text: a, contextInfo: i } };
    }
    function u(e) {
      var t = e != null ? e : {},
        n = t.imageMessage,
        r = t.videoMessage;
      return n != null
        ? { imageMessage: n }
        : r != null
          ? { videoMessage: r }
          : null;
    }
    var c = 3;
    function d(e) {
      for (var t = e, n = 0; n < c; n++) {
        var r,
          o,
          a = t,
          i = a.botInvokeMessage,
          l = a.ephemeralMessage,
          s = a.groupMentionedMessage,
          u =
            (r = (o = i != null ? i : s) != null ? o : l) == null
              ? void 0
              : r.message;
        if (u == null) return t;
        t = u;
      }
      return t;
    }
    function m(t) {
      if (t == null) return !0;
      var n = d(t);
      return n.conversation != null || n.extendedTextMessage != null
        ? !0
        : (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][history_sync] unsupported scheduled content, revealing empty body",
                ])),
            )
            .sendLogs("scheduled-msg-history-sync-unsupported-content"),
          !1);
    }
    function p(e) {
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
    l.buildHistorySyncInnerProto = s;
  },
  98,
);
