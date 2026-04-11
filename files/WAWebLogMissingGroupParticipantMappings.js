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
    function s(e, t, n, r) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i) {
            if (
              !(!t.isGroup() || r("WAWebIsCagGroupCache").isCag(t) || n.isBot())
            ) {
              var l = o("WAWebWidFactory").asUserWidOrThrow(n);
              if (o("WAWebApiContact").getAlternateUserWid(l) == null) {
                var s = yield o("WAWebGroupsParticipantsApi").getParticipants(
                  t,
                );
                s == null ||
                  s.participants.includes(l.toString()) ||
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "participant missing mapping, addressing mode mismatch = ",
                          "",
                        ])),
                      String(i !== a),
                    )
                    .sendLogs("GroupLidInfra/incoming_group_message_unknown", {
                      sampling: 0.01,
                    });
              }
            }
          },
        )),
        u.apply(this, arguments)
      );
    }
    l.logMissingGroupParticipantMappings = s;
  },
  98,
);
