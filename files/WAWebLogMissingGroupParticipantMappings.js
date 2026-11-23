__d(
  "WAWebLogMissingGroupParticipantMappings",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebGroupsParticipantsApi",
    "WAWebIsCagGroupCache",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t) {
      var n = t.author,
        a = t.groupId,
        i = t.localAddressingMode,
        l = t.serverAddressingMode;
      if (!(!a.isGroup() || r("WAWebIsCagGroupCache").isCag(a) || n.isBot())) {
        var s = o("WAWebWidFactory").asUserWidOrThrow(n);
        if (o("WAWebApiContact").getAlternateUserWid(s) == null) {
          var u = await o("WAWebGroupsParticipantsApi").getParticipants(a);
          u == null ||
            u.participants.includes(s.toString()) ||
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "participant missing mapping, addressing mode mismatch = ",
                    ", localAddressingMode = ",
                    ", serverAddressingMode = ",
                    ", participant = ",
                    "",
                  ])),
                String(i !== l),
                String(i),
                String(l),
                s.toLogString(),
              )
              .sendLogs("GroupLidInfra/incoming_group_message_unknown", {
                sampling: 0.01,
              });
        }
      }
    }
    l.logMissingGroupParticipantMappings = s;
  },
  98,
);
