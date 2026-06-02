__d(
  "WAWebAddonUnifiedAddonsTableMode",
  [
    "WAWebAddonConstants",
    "WAWebAddonInfraError",
    "WAWebMsgType",
    "WAWebPinsDbSerialization",
    "WAWebSchemaUnifiedAddons",
  ],
  function (t, n, r, o, a, i, l) {
    var e = function (t) {
        return t.map(function (e) {
          if (
            e.rowType === o("WAWebAddonConstants").AddonMinimizedType.PinInChat
          )
            return o(
              "WAWebPinsDbSerialization",
            ).unifiedAddonRowIntoPinInChatMsgData(e);
          throw new (o("WAWebAddonInfraError").AddonInfraError)(
            o("WAWebAddonInfraError").AddonInfraErrorCode.NotSupportedMsgType,
          );
        });
      },
      s = {
        mode: o("WAWebAddonConstants").AddonTableMode.Unified,
        bulkUpsert: async function (t) {
          var e = t.map(function (e) {
            if (e.kind === o("WAWebMsgType").MsgKind.PinInChat)
              return o(
                "WAWebPinsDbSerialization",
              ).pinInChatMsgDatIntoUnifiedAddonRow(e);
            throw new (o("WAWebAddonInfraError").AddonInfraError)(
              o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError,
            );
          });
          await o("WAWebSchemaUnifiedAddons").getTable().bulkCreateOrReplace(e);
        },
        bulkGetByParentAndSender: async function () {
          throw new (o("WAWebAddonInfraError").AddonInfraError)(
            o("WAWebAddonInfraError").AddonInfraErrorCode.NotSupportedFeature,
          );
        },
        bulkGetByMsgKey: async function () {
          throw new (o("WAWebAddonInfraError").AddonInfraError)(
            o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError,
          );
        },
        bulkGetByParentMsgKey: async function (n) {
          var t = await o("WAWebSchemaUnifiedAddons")
            .getTable()
            .anyOf(
              ["targetMsgKey"],
              n.map(function (e) {
                return e.toString();
              }),
            );
          return e(t);
        },
        bulkGetByChatWid: async function (n) {
          var t = await o("WAWebSchemaUnifiedAddons")
            .getTable()
            .anyOf(
              ["arbitraryIndex"],
              n.map(function (e) {
                return e.toString();
              }),
            );
          return e(t);
        },
        bulkRemoveByMsgKey: async function (t) {
          await o("WAWebSchemaUnifiedAddons")
            .getTable()
            .bulkRemove(
              t.map(function (e) {
                return e.toString();
              }),
            );
        },
        getByMsgKey: async function (n) {
          var t = await o("WAWebSchemaUnifiedAddons")
            .getTable()
            .get(n.toString());
          return t == null ? null : e([t])[0];
        },
        updateAck: async function (t, n) {
          await o("WAWebSchemaUnifiedAddons")
            .getTable()
            .merge(t.id.toString(), { ack: n });
        },
        markAsRead: async function () {
          throw new (o("WAWebAddonInfraError").AddonInfraError)(
            o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError,
          );
        },
        getTableSize: async function () {
          return o("WAWebSchemaUnifiedAddons").getTable().count();
        },
      };
    l.unifiedAddonsTableMode = s;
  },
  98,
);
