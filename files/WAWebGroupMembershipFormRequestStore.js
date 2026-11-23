__d(
  "WAWebGroupMembershipFormRequestStore",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebGroupMembershipFormProto",
    "WAWebSchemaGroupMembershipFormRequest",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 2592e3;
    async function u(t) {
      var n;
      if (
        !o(
          "WAWebSchemaGroupMembershipFormRequest",
        ).canUseGroupMembershipFormRequestTable()
      )
        return null;
      var a = o(
          "WAWebSchemaGroupMembershipFormRequest",
        ).getGroupMembershipFormRequestTable(),
        i =
          t.type === "group"
            ? await a.get(o("WAWebWidToJid").widToGroupJid(t.groupId))
            : (await a.equals(["inviteCode"], t.inviteCode))[0];
      if (i == null) return null;
      if (o("WATimeUtils").unixTime() - i.createdAt > s)
        return (await a.remove(i.groupId), null);
      var l;
      try {
        l = o(
          "WAWebGroupMembershipFormProto",
        ).decodeGroupMembershipFormSubmission(new Uint8Array(i.answers));
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[GMF] stored request doesn't decode; removing it",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("gmf-stored-request-undecodable"),
          await a.remove(i.groupId),
          null
        );
      }
      return {
        groupId: o("WAWebWidFactory").asGroupWidOrThrow(
          o("WAWebWidFactory").createWid(i.groupId),
        ),
        inviteCode: (n = i.inviteCode) != null ? n : null,
        answers: l,
        requestId: i.requestId,
        keyId: i.keyId,
        createdAt: i.createdAt,
      };
    }
    async function c(e) {
      if (
        o(
          "WAWebSchemaGroupMembershipFormRequest",
        ).canUseGroupMembershipFormRequestTable()
      ) {
        var t = o(
            "WAWebGroupMembershipFormProto",
          ).encodeGroupMembershipFormSubmission(e.answers),
          n = babelHelpers.extends(
            { groupId: o("WAWebWidToJid").widToGroupJid(e.groupId) },
            e.inviteCode != null && { inviteCode: e.inviteCode },
            {
              answers: d(t),
              requestId: e.requestId,
              keyId: e.keyId,
              createdAt: o("WATimeUtils").unixTime(),
            },
          );
        await o("WAWebSchemaGroupMembershipFormRequest")
          .getGroupMembershipFormRequestTable()
          .createOrReplace(n);
      }
    }
    function d(e) {
      var t = new ArrayBuffer(e.byteLength);
      return (new Uint8Array(t).set(e), t);
    }
    async function m(e) {
      o(
        "WAWebSchemaGroupMembershipFormRequest",
      ).canUseGroupMembershipFormRequestTable() &&
        (await o("WAWebSchemaGroupMembershipFormRequest")
          .getGroupMembershipFormRequestTable()
          .remove(o("WAWebWidToJid").widToGroupJid(e)));
    }
    ((l.getGroupMembershipFormStoredRequest = u),
      (l.putGroupMembershipFormStoredRequest = c),
      (l.deleteGroupMembershipFormStoredRequest = m));
  },
  98,
);
