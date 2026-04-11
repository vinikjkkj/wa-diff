__d(
  "WAWebAddonUnifiedAddonsTableMode",
  [
    "WAWebAddonConstants",
    "WAWebAddonInfraError",
    "WAWebMsgType",
    "WAWebPinsDbSerialization",
    "WAWebSchemaUnifiedAddons",
    "asyncToGeneratorRuntime",
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
        bulkUpsert: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.map(function (e) {
              if (e.kind === o("WAWebMsgType").MsgKind.PinInChat)
                return o(
                  "WAWebPinsDbSerialization",
                ).pinInChatMsgDatIntoUnifiedAddonRow(e);
              throw new (o("WAWebAddonInfraError").AddonInfraError)(
                o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError,
              );
            });
            yield o("WAWebSchemaUnifiedAddons")
              .getTable()
              .bulkCreateOrReplace(t);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        bulkGetByParentAndSender: (function () {
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
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var n = yield o("WAWebSchemaUnifiedAddons")
              .getTable()
              .anyOf(
                ["targetMsgKey"],
                t.map(function (e) {
                  return e.toString();
                }),
              );
            return e(n);
          });
          function r(e) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
        bulkGetByChatWid: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var n = yield o("WAWebSchemaUnifiedAddons")
              .getTable()
              .anyOf(
                ["arbitraryIndex"],
                t.map(function (e) {
                  return e.toString();
                }),
              );
            return e(n);
          });
          function r(e) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
        bulkRemoveByMsgKey: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            yield o("WAWebSchemaUnifiedAddons")
              .getTable()
              .bulkRemove(
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
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var n = yield o("WAWebSchemaUnifiedAddons")
              .getTable()
              .get(t.toString());
            return n == null ? null : e([n])[0];
          });
          function r(e) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
        updateAck: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              yield o("WAWebSchemaUnifiedAddons")
                .getTable()
                .merge(e.id.toString(), { ack: t });
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        markAsRead: (function () {
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
        getTableSize: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return o("WAWebSchemaUnifiedAddons").getTable().count();
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      };
    l.unifiedAddonsTableMode = s;
  },
  98,
);
