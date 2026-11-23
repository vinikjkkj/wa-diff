__d(
  "WAWebContactsAndGroupsDBChatMessageCounts",
  [
    "WAWebDBMessageRangeIndex",
    "WAWebDBMessageStoreUtils",
    "WAWebMsgType",
    "WAWebSchemaMessage",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [
      o("WAWebDBMessageRangeIndex").MessagePropertyType.IncomingChatMessage,
      o("WAWebDBMessageRangeIndex").MessagePropertyType.Outgoing,
    ];
    async function s(t, n) {
      var r = await Promise.all(
          e.map(function (e) {
            return o("WAWebSchemaMessage")
              .getMessageTable()
              .betweenCount(
                ["messageRangeIndex"],
                o("WAWebDBMessageStoreUtils").beginningOfMessageRange(t, e, n),
                o("WAWebDBMessageStoreUtils").endOfMessageRange(t, e),
                { lowerInclusive: !0 },
              );
          }),
        ),
        a = r[0],
        i = r[1];
      return { received: a, sent: i };
    }
    function u(e) {
      return (
        e !== o("WAWebMsgType").MSG_TYPE.REACTION &&
        !o("WAWebMsgType").SYSTEM_MESSAGE_TYPES.includes(e)
      );
    }
    ((l.countSentAndReceivedMessagesSince = s),
      (l.isSentOrReceivedMessageType = u));
  },
  98,
);
