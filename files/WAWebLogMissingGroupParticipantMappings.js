__d(
  "WAWebLogMissingGroupParticipantMappings",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebGroupsParticipantsApi",
    "WAWebIsCagGroupCache",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.author,
            a = t.groupId,
            i = t.localAddressingMode,
            l = t.serverAddressingMode;
          if (
            !(!a.isGroup() || r("WAWebIsCagGroupCache").isCag(a) || n.isBot())
          ) {
            var s = o("WAWebWidFactory").asUserWidOrThrow(n);
            if (o("WAWebApiContact").getAlternateUserWid(s) == null) {
              var u = yield o("WAWebGroupsParticipantsApi").getParticipants(a);
              u == null ||
                u.participants.includes(s.toString()) ||
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "participant missing mapping, addressing mode mismatch = ",
                        "",
                      ])),
                    String(i !== l),
                  )
                  .sendLogs("GroupLidInfra/incoming_group_message_unknown", {
                    sampling: 0.01,
                  });
            }
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.logMissingGroupParticipantMappings = s;
  },
  98,
);
