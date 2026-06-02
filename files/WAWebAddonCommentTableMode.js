__d(
  "WAWebAddonCommentTableMode",
  [
    "WAWebAddonConstants",
    "WAWebAddonInfraError",
    "WAWebCommentSchema",
    "WAWebDBCommentMessageSerialization",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      mode: o("WAWebAddonConstants").AddonTableMode.Comment,
      bulkUpsert: async function (t) {
        var e = t.map(function (e) {
          if (e.kind === o("WAWebMsgType").MsgKind.CommentDecrypted)
            return o(
              "WAWebDBCommentMessageSerialization",
            ).dbRowFromCommentMessage(e);
          if (e.kind === o("WAWebMsgType").MsgKind.RevokedAddon)
            return o(
              "WAWebDBCommentMessageSerialization",
            ).dbRowFromRevokedMsgData(e);
          if (e.kind === o("WAWebMsgType").MsgKind.PlaceholderAddon)
            return o(
              "WAWebDBCommentMessageSerialization",
            ).dbRowFromPlaceholderAddon(e);
          throw new (o("WAWebAddonInfraError").AddonInfraError)(
            o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedMsgType,
          );
        });
        await o("WAWebCommentSchema").getTable().bulkCreateOrReplace(e);
      },
      bulkGetByParentAndSender: async function () {
        throw new (o("WAWebAddonInfraError").AddonInfraError)(
          o("WAWebAddonInfraError").AddonInfraErrorCode.NotSupportedFeature,
        );
      },
      bulkGetByMsgKey: async function (t, n) {
        var e = await o("WAWebCommentSchema")
          .getTable()
          .bulkGet(
            t.map(function (e) {
              return e.toString();
            }),
            n,
          );
        return e.map(function (e) {
          return e == null
            ? e
            : o("WAWebDBCommentMessageSerialization").commentMessageFromDbRow(
                e,
              );
        });
      },
      bulkGetByParentMsgKey: async function (t) {
        var e = await o("WAWebCommentSchema")
          .getTable()
          .anyOf(
            ["parentMsgKey"],
            t.map(function (e) {
              return e.toString();
            }),
          );
        return e.map(
          o("WAWebDBCommentMessageSerialization").commentMessageFromDbRow,
        );
      },
      bulkGetByChatWid: async function () {
        throw new (o("WAWebAddonInfraError").AddonInfraError)(
          o("WAWebAddonInfraError").AddonInfraErrorCode.NotSupportedFeature,
        );
      },
      bulkRemoveByMsgKey: async function (t) {
        return o("WAWebCommentSchema")
          .getTable()
          .bulkRemove(
            t.map(function (e) {
              return e.toString();
            }),
          );
      },
      getByMsgKey: async function (t) {
        var e = await o("WAWebCommentSchema").getTable().get(t.toString());
        return e == null
          ? null
          : o("WAWebDBCommentMessageSerialization").commentMessageFromDbRow(e);
      },
      updateAck: async function (t, n) {
        await o("WAWebCommentSchema")
          .getTable()
          .merge(t.id.toString(), { ack: n });
      },
      markAsRead: async function (t) {
        await o("WAWebCommentSchema")
          .getTable()
          .merge(t.toString(), { read: !0 });
      },
      getTableSize: async function () {
        return o("WAWebCommentSchema").getTable().count();
      },
    };
    l.commentTableMode = e;
  },
  98,
);
