__d(
  "WAWebVoipJoinVoiceChat",
  [
    "WAPromiseRaceAbort",
    "WAWebLidMigrationUtils",
    "WAWebVoipGatingUtils",
    "WAWebVoipVoiceChatUtils",
    "WAWebVoipWaCallEnums",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.callCreatorJid,
            n = e.callId,
            a = e.chat,
            i = e.groupParticipantsDeviceJidsCsv,
            l = e.groupParticipantsLidUserJid,
            s = e.groupParticipantsPnUserJid,
            u = e.isDeviceSwitch,
            c = e.lobbyEntryPoint,
            d = e.signal,
            m = e.voipStackInterface;
          if (
            (m == null ? void 0 : m.type) !== "web" ||
            !o("WAWebVoipGatingUtils").isWebVoiceChatEnabled()
          )
            throw r("err")(
              "voip: joinOngoingVoiceChat: voice chats are not supported",
            );
          var p = yield r("WAPromiseRaceAbort")(
            o("WAWebVoipVoiceChatUtils")
              .loadVoiceChatMemberWids(a.id)
              .then(o("WAWebVoipVoiceChatUtils").getVoiceChatGroupPhash),
            d,
          );
          if (p == null)
            throw r("err")(
              "voip: joinOngoingVoiceChat: a group member has no LID",
            );
          var _ = yield m.joinVoiceChat({
            callCreatorIsNotContact: !0,
            callCreatorJid: t,
            callId: n,
            groupJid: a.id.toString({ legacy: !0 }),
            groupParticipantsDeviceJidsCsv: i,
            groupParticipantsLidUserJid: l,
            groupParticipantsPnUserJid: s,
            groupPhash: p,
            initialGroupTransactionId: 0,
            isDeviceSwitch: u,
            joinAndAccept: !0,
            lobbyEntryType: c,
          });
          if (_ !== 0)
            throw r("err")(
              "voip: joinOngoingVoiceChat: join failed with status %s",
              _,
            );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      return e.filter(function (e) {
        var n = e.outcome,
          r = e.participant;
        return (
          n === o("WAWebVoipWaCallEnums").CallParticipantState.Connected ||
          (t != null && c(r, t))
        );
      });
    }
    function c(e, t) {
      if (e.isSameAccountAndAddressingMode(t)) return !0;
      var n = o("WAWebLidMigrationUtils").toUserLid(e);
      return n != null && n.equals(o("WAWebLidMigrationUtils").toUserLid(t));
    }
    ((l.joinOngoingVoiceChat = e), (l.getVoiceChatJoinParticipants = u));
  },
  98,
);
