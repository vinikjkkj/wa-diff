__d(
  "WAWebAddonPinTableMode",
  [
    "WAWebAddonConstants",
    "WAWebAddonInfraError",
    "WAWebCastToPinInChatMsg",
    "WAWebDBCRUDOperationsPinInChat",
    "WAWebPinInChatSchema",
    "WAWebPinsDbSerialization",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      mode: o("WAWebAddonConstants").AddonTableMode.Pin,
      bulkUpsert: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.map(function (e) {
            return o("WAWebPinsDbSerialization").serializePinInChatMsgData(
              o("WAWebCastToPinInChatMsg").assertPinInChatMsgData(e),
            );
          });
          yield o("WAWebDBCRUDOperationsPinInChat").createOrUpdatePinInChat(
            e[0].id.remote,
            t,
          );
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      bulkGetByParentAndSender: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          throw new (o("WAWebAddonInfraError").AddonInfraError)(
            o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError,
          );
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      bulkGetByMsgKey: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          throw new (o("WAWebAddonInfraError").AddonInfraError)(
            o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError,
          );
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      bulkGetByParentMsgKey: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length !== 1) return [];
          var t = yield o("WAWebPinInChatSchema")
            .getTable()
            .get(e[0].toString());
          return t == null
            ? []
            : [o("WAWebPinsDbSerialization").deserializePinInChatMsgData(t)];
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      bulkGetByChatWid: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebPinInChatSchema")
            .getTable()
            .anyOf(
              ["chatId"],
              e.map(function (e) {
                return e.toString();
              }),
            );
          return t.map(
            o("WAWebPinsDbSerialization").deserializePinInChatMsgData,
          );
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      bulkRemoveByMsgKey: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebPinInChatSchema")
            .getTable()
            .bulkRemoveByIndex(
              ["msgKey"],
              e.map(function (e) {
                return e.toString();
              }),
            );
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      getByMsgKey: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = (yield o("WAWebPinInChatSchema")
            .getTable()
            .equals(["msgKey"], e.toString()))[0];
          return t == null
            ? t
            : o("WAWebPinsDbSerialization").deserializePinInChatMsgData(t);
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      updateAck: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebPinsDbSerialization").serializePinInChatMsgData(
            o("WAWebCastToPinInChatMsg").assertPinInChatMsgData(e),
          );
          yield o("WAWebPinInChatSchema")
            .getTable()
            .merge(n.parentMsgKey, { ack: t });
        });
        function t(t, n) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      markAsRead: (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield e.getByMsgKey(t);
          if (n != null)
            return e.bulkUpsert([babelHelpers.extends({}, n, { read: !0 })]);
        });
        function r(e) {
          return t.apply(this, arguments);
        }
        return r;
      })(),
      getTableSize: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebPinInChatSchema").getTable().count();
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
    };
    l.pinTableMode = e;
  },
  98,
);
