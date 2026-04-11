__d(
  "WAWebDBMsgUtils",
  [
    "$InternalEnum",
    "WANullthrows",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageUtils",
    "WAWebLid1X1MigrationGating",
    "WAWebMsgKey",
    "WAWebProtobufMsgKeyUtils",
    "WAWebSchemaMessage",
    "WAWebWid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({ Message: 1, MessageEdit: 2 });
    function s(e, t) {
      return o("WAWebSchemaMessage")
        .getMessageTable()
        .bulkGet(e)
        .then(function (e) {
          return e.filter(Boolean).map(function (e) {
            return o("WAWebDBMessageSerialization").messageFromDbRow(e, t);
          });
        });
    }
    function u(e, t) {
      var n = [];
      return (
        e.forEach(function (e) {
          var o = new (r("WAWebMsgKey"))({ fromMe: !0, remote: t, id: e });
          n.push(o.toString());
          var a = new (r("WAWebMsgKey"))({ fromMe: !1, remote: t, id: e });
          n.push(a.toString());
        }),
        o("WAWebSchemaMessage").getMessageTable().startsWithAnyOf(["id"], n)
      );
    }
    function c(e, t) {
      var n;
      return (
        e instanceof r("WAWebMsgKey") ? (n = e.toString()) : (n = e),
        o("WAWebSchemaMessage")
          .getMessageTable()
          .get(n)
          .then(function (e) {
            return e
              ? o("WAWebDBMessageSerialization").messageFromDbRow(e, t)
              : null;
          })
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t.length === 0) return t;
          var n = t;
          o(
            "WAWebLid1X1MigrationGating",
          ).Lid1X1MigrationUtils.isLidMigrated() &&
            r("WAWebWid").isUser(e) &&
            !r("WAWebWid").isStringLid(e) &&
            (n = t.map(function (t) {
              var n = t.key,
                r = t.timestamp,
                o = {};
              return (
                r != null && (o.timestamp = r),
                n != null &&
                  (o.key = babelHelpers.extends({}, n, { remoteJid: e })),
                o
              );
            }));
          var a = n.map(function (e) {
              return o("WAWebProtobufMsgKeyUtils")
                .protobufToMsgKey(r("WANullthrows")(e.key))
                .toString();
            }),
            i = yield o("WAWebSchemaMessage").getMessageTable().bulkGet(a, !1);
          return t.filter(function (e, t) {
            return i[t] != null;
          });
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return o("WAWebSchemaMessage")
        .getMessageTable()
        .bulkGet(e, !1)
        .then(function (e) {
          return e.map(Boolean);
        });
    }
    function _(e) {
      return o("WAWebSchemaMessage")
        .getMessageTable()
        .between(
          ["internalId"],
          o("WAWebDBMessageUtils").beginningOfChat(e),
          o("WAWebDBMessageUtils").endOfChat(e),
        );
    }
    ((l.PendingReadReceiptType = e),
      (l.getMsgsByMsgKey = s),
      (l.getMsgsByMsgIdsAndChatId = u),
      (l.getMsgByMsgKey = c),
      (l.filterReceivedMessagesInRange = d),
      (l.getMsgsExistByMsgKey = p),
      (l.getMsgsByChatId = _));
  },
  98,
);
