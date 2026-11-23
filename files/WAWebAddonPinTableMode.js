__d(
  "WAWebAddonPinTableMode",
  [
    "WAWebAddonConstants",
    "WAWebAddonInfraError",
    "WAWebCastToPinInChatMsg",
    "WAWebDBCRUDOperationsPinInChat",
    "WAWebPinInChatSchema",
    "WAWebPinsDbSerialization",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      mode: o("WAWebAddonConstants").AddonTableMode.Pin,
      bulkUpsert: async function (t) {
        var e = t.map(function (e) {
          return o("WAWebPinsDbSerialization").serializePinInChatMsgData(
            o("WAWebCastToPinInChatMsg").assertPinInChatMsgData(e),
          );
        });
        await o("WAWebDBCRUDOperationsPinInChat").createOrUpdatePinInChat(
          t[0].id.remote,
          e,
        );
      },
      bulkGetByParentAndSender: async function () {
        throw new (o("WAWebAddonInfraError").AddonInfraError)(
          o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError,
        );
      },
      bulkGetByMsgKey: async function () {
        throw new (o("WAWebAddonInfraError").AddonInfraError)(
          o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError,
        );
      },
      bulkGetByParentMsgKey: async function (t) {
        if (t.length !== 1) return [];
        var e = await o("WAWebPinInChatSchema").getTable().get(t[0].toString());
        return e == null
          ? []
          : [o("WAWebPinsDbSerialization").deserializePinInChatMsgData(e)];
      },
      bulkGetByChatWid: async function (t) {
        var e = await o("WAWebPinInChatSchema")
          .getTable()
          .anyOf(
            ["chatId"],
            t.map(function (e) {
              return e.toString();
            }),
          );
        return e.map(o("WAWebPinsDbSerialization").deserializePinInChatMsgData);
      },
      bulkRemoveByMsgKey: async function (t) {
        await o("WAWebPinInChatSchema")
          .getTable()
          .bulkRemoveByIndex(
            ["msgKey"],
            t.map(function (e) {
              return e.toString();
            }),
          );
      },
      getByMsgKey: async function (t) {
        var e = (
          await o("WAWebPinInChatSchema")
            .getTable()
            .equals(["msgKey"], t.toString())
        )[0];
        return e == null
          ? e
          : o("WAWebPinsDbSerialization").deserializePinInChatMsgData(e);
      },
      updateAck: async function (t, n) {
        var e = o("WAWebPinsDbSerialization").serializePinInChatMsgData(
          o("WAWebCastToPinInChatMsg").assertPinInChatMsgData(t),
        );
        await o("WAWebPinInChatSchema")
          .getTable()
          .merge(e.parentMsgKey, { ack: n });
      },
      markAsRead: async function (n) {
        var t = await e.getByMsgKey(n);
        if (t != null)
          return e.bulkUpsert([babelHelpers.extends({}, t, { read: !0 })]);
      },
      getTableSize: async function () {
        return o("WAWebPinInChatSchema").getTable().count();
      },
    };
    l.pinTableMode = e;
  },
  98,
);
