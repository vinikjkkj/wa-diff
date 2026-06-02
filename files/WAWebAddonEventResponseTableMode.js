__d(
  "WAWebAddonEventResponseTableMode",
  [
    "WANullthrows",
    "WAWebAddonConstants",
    "WAWebAddonInfraError",
    "WAWebEventResponseDBSerialization",
    "WAWebEventResponsesSchema",
    "WAWebMsgGetters",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      mode: o("WAWebAddonConstants").AddonTableMode.EventResponse,
      bulkUpsert: async function (t) {
        await o("WAWebEventResponsesSchema")
          .getTable()
          .bulkCreateOrReplace(
            t.map(function (e) {
              if (e.kind !== o("WAWebMsgType").MsgKind.EventResponseDecrypted)
                throw new (o("WAWebAddonInfraError").AddonInfraError)(
                  o("WAWebAddonInfraError").AddonInfraErrorCode
                    .NotSupportedMsgType,
                );
              return o(
                "WAWebEventResponseDBSerialization",
              ).dbRowFromEventResponseMessage(e);
            }),
          );
      },
      bulkGetByParentAndSender: async function (t) {
        var e = await o("WAWebEventResponsesSchema")
          .getTable()
          .anyOf(
            ["parentMsgKey", "sender"],
            t.map(function (e) {
              return [e[0].toString(), e[1].toString()];
            }),
          );
        return e.map(
          o("WAWebEventResponseDBSerialization").eventResponseMessageFromDBRow,
        );
      },
      bulkGetByMsgKey: async function () {
        throw new (o("WAWebAddonInfraError").AddonInfraError)(
          o("WAWebAddonInfraError").AddonInfraErrorCode.NotSupportedFeature,
        );
      },
      bulkGetByParentMsgKey: async function (t) {
        var e = await o("WAWebEventResponsesSchema")
          .getTable()
          .anyOf(
            ["parentMsgKey"],
            t.map(function (e) {
              return e.toString();
            }),
          );
        return e.map(
          o("WAWebEventResponseDBSerialization").eventResponseMessageFromDBRow,
        );
      },
      bulkGetByChatWid: async function () {
        throw new (o("WAWebAddonInfraError").AddonInfraError)(
          o("WAWebAddonInfraError").AddonInfraErrorCode.NotSupportedFeature,
        );
      },
      bulkRemoveByMsgKey: async function (t) {
        await o("WAWebEventResponsesSchema")
          .getTable()
          .bulkRemoveByIndex(
            ["msgKey"],
            t.map(function (e) {
              return e.toString();
            }),
          );
      },
      getByMsgKey: async function (t) {
        var e,
          n =
            (e = await o("WAWebEventResponsesSchema")
              .getTable()
              .equals(["msgKey"], t.toString())) == null
              ? void 0
              : e[0];
        return n == null
          ? n
          : o(
              "WAWebEventResponseDBSerialization",
            ).eventResponseMessageFromDBRow(n);
      },
      updateAck: async function (t, n) {
        var e;
        if (t.kind === o("WAWebMsgType").MsgKind.EventResponseEncrypted)
          e = t.targetMessageKey;
        else if (t.kind === o("WAWebMsgType").MsgKind.EventResponseDecrypted)
          e = t.parentMsgKey;
        else
          throw new (o("WAWebAddonInfraError").AddonInfraError)(
            o("WAWebAddonInfraError").AddonInfraErrorCode.NotSupportedMsgType,
          );
        await o("WAWebEventResponsesSchema")
          .getTable()
          .merge(
            [
              e.toString(),
              r("WANullthrows")(o("WAWebMsgGetters").getSender(t)).toString(),
            ],
            { ack: n },
          );
      },
      markAsRead: async function (n) {
        var t = await e.getByMsgKey(n);
        if (t != null)
          return e.bulkUpsert([babelHelpers.extends({}, t, { read: !0 })]);
      },
      getTableSize: async function () {
        return o("WAWebEventResponsesSchema").getTable().count();
      },
    };
    l.eventResponseTableMode = e;
  },
  98,
);
