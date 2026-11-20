__d(
  "WAWebContactsAndGroupsDBChatMessageCounts",
  [
    "Promise",
    "WAWebDBMessageRangeIndex",
    "WAWebDBMessageStoreUtils",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = [
        o("WAWebDBMessageRangeIndex").MessagePropertyType.IncomingChatMessage,
        o("WAWebDBMessageRangeIndex").MessagePropertyType.Outgoing,
      ];
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = yield (e || (e = n("Promise"))).all(
              s.map(function (e) {
                return o("WAWebSchemaMessage")
                  .getMessageTable()
                  .betweenCount(
                    ["messageRangeIndex"],
                    o("WAWebDBMessageStoreUtils").beginningOfMessageRange(
                      t,
                      e,
                      r,
                    ),
                    o("WAWebDBMessageStoreUtils").endOfMessageRange(t, e),
                    { lowerInclusive: !0 },
                  );
              }),
            ),
            i = a[0],
            l = a[1];
          return { received: i, sent: l };
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return (
        e !== o("WAWebMsgType").MSG_TYPE.REACTION &&
        !o("WAWebMsgType").SYSTEM_MESSAGE_TYPES.includes(e)
      );
    }
    ((l.countSentAndReceivedMessagesSince = u),
      (l.isSentOrReceivedMessageType = d));
  },
  98,
);
