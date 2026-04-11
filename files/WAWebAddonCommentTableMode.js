__d(
  "WAWebAddonCommentTableMode",
  [
    "WAWebAddonConstants",
    "WAWebAddonInfraError",
    "WAWebCommentSchema",
    "WAWebDBCommentMessageSerialization",
    "WAWebMsgType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      mode: o("WAWebAddonConstants").AddonTableMode.Comment,
      bulkUpsert: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.map(function (e) {
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
          yield o("WAWebCommentSchema").getTable().bulkCreateOrReplace(t);
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
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebCommentSchema")
            .getTable()
            .bulkGet(
              e.map(function (e) {
                return e.toString();
              }),
              t,
            );
          return n.map(function (e) {
            return e == null
              ? e
              : o("WAWebDBCommentMessageSerialization").commentMessageFromDbRow(
                  e,
                );
          });
        });
        function t(t, n) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      bulkGetByParentMsgKey: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebCommentSchema")
            .getTable()
            .anyOf(
              ["parentMsgKey"],
              e.map(function (e) {
                return e.toString();
              }),
            );
          return t.map(
            o("WAWebDBCommentMessageSerialization").commentMessageFromDbRow,
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
          return o("WAWebCommentSchema")
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
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebCommentSchema").getTable().get(e.toString());
          return t == null
            ? null
            : o("WAWebDBCommentMessageSerialization").commentMessageFromDbRow(
                t,
              );
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      updateAck: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield o("WAWebCommentSchema")
            .getTable()
            .merge(e.id.toString(), { ack: t });
        });
        function t(t, n) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      markAsRead: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebCommentSchema")
            .getTable()
            .merge(e.toString(), { read: !0 });
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      getTableSize: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebCommentSchema").getTable().count();
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
    };
    l.commentTableMode = e;
  },
  98,
);
