__d(
  "WAWebAddonReactionTableMode",
  [
    "WANullthrows",
    "WAWebAddonConstants",
    "WAWebAddonInfraError",
    "WAWebCastToReactionMsg",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebReactionDataUtils",
    "WAWebSchemaReactions",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      mode: o("WAWebAddonConstants").AddonTableMode.Reaction,
      bulkUpsert: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.map(function (e) {
            return o("WAWebReactionDataUtils").reactionMsgDataToReactionRow(
              o("WAWebCastToReactionMsg").assertReactionMsgData(e),
            );
          });
          yield o("WAWebSchemaReactions")
            .getReactionsTable()
            .bulkCreateOrReplace(t);
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      bulkGetByParentAndSender: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaReactions")
            .getReactionsTable()
            .anyOf(
              ["parentMsgKey", "senderUserJid"],
              e.map(function (e) {
                var t = e[0],
                  n = e[1];
                return [t.toString(), n.toString()];
              }),
            );
          return t.map(
            o("WAWebReactionDataUtils").reactionRowToReactionMsgData,
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
          var t = yield o("WAWebSchemaReactions")
            .getReactionsTable()
            .anyOf(
              ["parentMsgKey"],
              e.map(function (e) {
                return e.toString();
              }),
            );
          return t.map(
            o("WAWebReactionDataUtils").reactionRowToReactionMsgData,
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
          yield o("WAWebSchemaReactions")
            .getReactionsTable()
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
          var t = (yield o("WAWebSchemaReactions")
            .getReactionsTable()
            .equals(["msgKey"], e.toString()))[0];
          return t == null
            ? t
            : o("WAWebReactionDataUtils").reactionRowToReactionMsgData(t);
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      updateAck: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          if (e.kind === o("WAWebMsgType").MsgKind.ReactionEncrypted)
            n = e.targetMessageKey;
          else if (e.kind === o("WAWebMsgType").MsgKind.ReactionDecrypted)
            n = e.reactionParentKey;
          else
            throw new (o("WAWebAddonInfraError").AddonInfraError)(
              o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedMsgType,
            );
          yield o("WAWebSchemaReactions")
            .getReactionsTable()
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
          return o("WAWebSchemaReactions").getReactionsTable().count();
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
    };
    l.reactionTableMode = e;
  },
  98,
);
