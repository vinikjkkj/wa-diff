__d(
  "WAWebGroupMutationParticipantUtils",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebMiscErrors",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(t, n, r) {
      var a = t.id.isLid() ? t.phoneNumber : t.id;
      if (o("WAWebUsernameGatingUtils").usernameGroupMutationEnabled() && n) {
        var i = t.id.isLid()
          ? t.id
          : o("WAWebApiContact").getCurrentLid(
              o("WAWebWidFactory").asUserWidOrThrow(t.id),
            );
        if (i == null)
          throw (
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "getGroupMutationParticipant: ",
                    ": no lid",
                  ])),
                r,
              )
              .sendLogs("getGroupMutationParticipant-" + r + "-missing-lid"),
            new (o("WAWebMiscErrors").ActionError)()
          );
        var l = t.username;
        if (l != null) return { lid: i, username: l };
        if (a != null)
          return {
            lid: i,
            phoneNumber: o("WAWebWidFactory").asUserWidOrThrow(a),
          };
        throw (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "getGroupMutationParticipant: ",
                  ": username and pn is null",
                ])),
              r,
            )
            .sendLogs(
              "getGroupMutationParticipant-" + r + "-missing-username-and-pn",
            ),
          new (o("WAWebMiscErrors").ActionError)()
        );
      }
      if (a == null)
        throw (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "getGroupMutationParticipant: ",
                  ": no pn",
                ])),
              r,
            )
            .sendLogs("getGroupMutationParticipant-" + r + "-missing-pn"),
          new (o("WAWebMiscErrors").ActionError)()
        );
      return { phoneNumber: o("WAWebWidFactory").asUserWidOrThrow(a) };
    }
    l.getGroupMutationParticipant = c;
  },
  98,
);
