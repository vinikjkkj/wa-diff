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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      mode: o("WAWebAddonConstants").AddonTableMode.EventResponse,
      bulkUpsert: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebEventResponsesSchema")
            .getTable()
            .bulkCreateOrReplace(
              e.map(function (e) {
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
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      bulkGetByParentAndSender: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebEventResponsesSchema")
            .getTable()
            .anyOf(
              ["parentMsgKey", "sender"],
              e.map(function (e) {
                return [e[0].toString(), e[1].toString()];
              }),
            );
          return t.map(
            o("WAWebEventResponseDBSerialization")
              .eventResponseMessageFromDBRow,
          );
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      bulkGetByMsgKey: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          throw new (o("WAWebAddonInfraError").AddonInfraError)(
            o("WAWebAddonInfraError").AddonInfraErrorCode.NotSupportedFeature,
          );
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      bulkGetByParentMsgKey: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebEventResponsesSchema")
            .getTable()
            .anyOf(
              ["parentMsgKey"],
              e.map(function (e) {
                return e.toString();
              }),
            );
          return t.map(
            o("WAWebEventResponseDBSerialization")
              .eventResponseMessageFromDBRow,
          );
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      bulkGetByChatWid: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          throw new (o("WAWebAddonInfraError").AddonInfraError)(
            o("WAWebAddonInfraError").AddonInfraErrorCode.NotSupportedFeature,
          );
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      bulkRemoveByMsgKey: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebEventResponsesSchema")
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
          var t,
            n =
              (t = yield o("WAWebEventResponsesSchema")
                .getTable()
                .equals(["msgKey"], e.toString())) == null
                ? void 0
                : t[0];
          return n == null
            ? n
            : o(
                "WAWebEventResponseDBSerialization",
              ).eventResponseMessageFromDBRow(n);
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      updateAck: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          if (e.kind === o("WAWebMsgType").MsgKind.EventResponseEncrypted)
            n = e.targetMessageKey;
          else if (e.kind === o("WAWebMsgType").MsgKind.EventResponseDecrypted)
            n = e.parentMsgKey;
          else
            throw new (o("WAWebAddonInfraError").AddonInfraError)(
              o("WAWebAddonInfraError").AddonInfraErrorCode.NotSupportedMsgType,
            );
          yield o("WAWebEventResponsesSchema")
            .getTable()
            .merge(
              [
                n.toString(),
                r("WANullthrows")(o("WAWebMsgGetters").getSender(e)).toString(),
              ],
              { ack: t },
            );
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
          return o("WAWebEventResponsesSchema").getTable().count();
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
    };
    l.eventResponseTableMode = e;
  },
  98,
);
