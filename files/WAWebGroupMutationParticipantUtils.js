__d(
  "WAWebGroupMutationParticipantUtils",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebMiscErrors",
    "WAWebOrgMemberSearchRows",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t, n) {
      var r = o("WAWebWidFactory").asUserWidOrThrow(e.id),
        a = d(r, e),
        i = a.phoneNumber,
        l = a.username;
      return p(
        r,
        i,
        l == null ? null : o("WAWebUsernameTypes").serializeUsername(l),
        t,
        n,
      );
    }
    function d(e, t) {
      var n,
        r = { phoneNumber: t.phoneNumber, username: t.username };
      return r.phoneNumber != null || r.username != null
        ? r
        : (n = o("WAWebOrgMemberSearchRows").getKnownOrgMemberIdentifiers(e)) !=
            null
          ? n
          : r;
    }
    function m(e, t, n) {
      var r = o("WAWebWidFactory").asUserWidOrThrow(e.id);
      return r.isFbidBot() ? { phoneNumber: r } : c(e, t, n);
    }
    function p(t, n, r, a, i) {
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
      (l.getGroupAddParticipant = m),
      (l.getGroupMutationParticipantFromIdentity = p));
  },
  98,
);
