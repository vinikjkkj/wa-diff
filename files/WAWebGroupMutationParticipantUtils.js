__d(
  "WAWebGroupMutationParticipantUtils",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebMiscErrors",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t, n) {
      return d(
        o("WAWebWidFactory").asUserWidOrThrow(e.id),
        e.phoneNumber,
        e.username == null
          ? null
          : o("WAWebUsernameTypes").serializeUsername(e.username),
        t,
        n,
      );
    }
    function d(t, n, r, a, i) {
      var l = t.isLid() ? n : t;
      if (
        o("WAWebABProps").getABPropConfigValue(
          "username_group_mutation_enabled",
        ) &&
        a
      ) {
        var c = t.isLid() ? t : o("WAWebApiContact").getCurrentLid(t);
        if (c == null)
          throw (
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "getGroupMutationParticipant: ",
                    ": no lid",
                  ])),
                i,
              )
              .sendLogs("getGroupMutationParticipant-" + i + "-missing-lid"),
            new (o("WAWebMiscErrors").ActionError)()
          );
        if (r != null) return { lid: c, username: r };
        if (l != null)
          return {
            lid: c,
            phoneNumber: o("WAWebWidFactory").asUserWidOrThrow(l),
          };
        throw (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "getGroupMutationParticipant: ",
                  ": username and pn is null",
                ])),
              i,
            )
            .sendLogs(
              "getGroupMutationParticipant-" + i + "-missing-username-and-pn",
            ),
          new (o("WAWebMiscErrors").ActionError)()
        );
      }
      if (l == null)
        throw (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "getGroupMutationParticipant: ",
                  ": no pn",
                ])),
              i,
            )
            .sendLogs("getGroupMutationParticipant-" + i + "-missing-pn"),
          new (o("WAWebMiscErrors").ActionError)()
        );
      return { phoneNumber: o("WAWebWidFactory").asUserWidOrThrow(l) };
    }
    ((l.getGroupMutationParticipant = c),
      (l.getGroupMutationParticipantFromIdentity = d));
  },
  98,
);
