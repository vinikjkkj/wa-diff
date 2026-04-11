__d(
  "WAWebEphemeralKeepInChatUtils",
  [
    "WAWebBackendApi",
    "WAWebEphemeralConstants",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e != null && e === o("WAWebProtobufsE2E.pb").KeepType.KEEP_FOR_ALL
        ? o("WAWebEphemeralConstants").KeepInChatState.KEPT
        : e != null &&
            e === o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL
          ? o("WAWebEphemeralConstants").KeepInChatState.UNKEPT
          : null;
    }
    function s(e) {
      return e === o("WAWebEphemeralConstants").KeepInChatState.KEPT
        ? o("WAWebProtobufsE2E.pb").KeepType.KEEP_FOR_ALL
        : e === o("WAWebEphemeralConstants").KeepInChatState.UNKEPT
          ? o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL
          : o("WAWebProtobufsE2E.pb").KeepType.UNKNOWN;
    }
    function u(e) {
      return e === o("WAWebEphemeralConstants").KeepInChatState.KEPT;
    }
    function c(e) {
      return e === o("WAWebEphemeralConstants").KeepInChatState.UNKEPT;
    }
    function d(e) {
      var t, n;
      return (
        e.forEach(function (e) {
          (!t || m(e, t) === 1) && ((n = t), (t = e));
        }),
        n != null &&
          o("WAWebBackendApi").frontendFireAndForget(
            "logTieBreakIgnoredKicWam",
            { keepInChatMessage: n },
          ),
        t
      );
    }
    function m(e, t) {
      return e.senderTimestampMs == null
        ? -1
        : t.senderTimestampMs == null ||
            e.senderTimestampMs > t.senderTimestampMs ||
            (e.senderTimestampMs === t.senderTimestampMs && e.id.id > t.id.id)
          ? 1
          : -1;
    }
    function p(e) {
      if (e.kicKey != null) {
        var t,
          n,
          r,
          a = o("WAWebMsgGetters").getIsGroupMsg(e);
        if (((t = e.kicKey) == null ? void 0 : t.fromMe) === !0)
          return o("WAWebUserPrefsMeUser").getMaybeMePnUser();
        if (a && ((n = e.kicKey) == null ? void 0 : n.participant) != null)
          return o("WAWebWidFactory").asUserWidOrThrow(e.kicKey.participant);
        if (!a && ((r = e.kicKey) == null ? void 0 : r.remote) != null)
          return o("WAWebWidFactory").asUserWidOrThrow(e.kicKey.remote);
      }
    }
    function _(e) {
      return (
        c(e.kicState) &&
        r("WAWebWid").equals.apply(
          r("WAWebWid"),
          o("WAWebLidMigrationUtils").toCommonAddressingMode(
            p(e),
            o("WAWebMsgGetters").getSender(e),
          ),
        )
      );
    }
    ((l.parseKeepTypeToKicState = e),
      (l.kicStateToKeepType = s),
      (l.isKept = u),
      (l.runKeepInChatTieBreaker = d),
      (l.compareKeepInChatMessages = m),
      (l.kicSenderSuperPowerActive = _));
  },
  98,
);
