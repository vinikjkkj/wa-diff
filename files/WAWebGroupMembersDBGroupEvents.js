__d(
  "WAWebGroupMembersDBGroupEvents",
  [
    "WAWebDBMessageRangeIndex",
    "WAWebDBMessageStoreUtils",
    "WAWebDBMessageUtils",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 1e3;
    async function s(t) {
      var n = await o("WAWebSchemaMessage")
        .getMessageTable()
        .between(
          ["messageRangeIndex"],
          o("WAWebDBMessageStoreUtils").beginningOfMessageRange(
            t,
            o("WAWebDBMessageRangeIndex").MessagePropertyType.SystemMessage,
            null,
          ),
          o("WAWebDBMessageStoreUtils").endOfMessageRange(
            t,
            o("WAWebDBMessageRangeIndex").MessagePropertyType.SystemMessage,
          ),
          { limit: e, lowerInclusive: !0, reverse: !0, shouldDecrypt: !1 },
        );
      return n
        .filter(function (e) {
          return e.type === o("WAWebMsgType").MSG_TYPE.GP2;
        })
        .sort(function (e, t) {
          return e.t - t.t || u(e) - u(t);
        })
        .map(c);
    }
    function u(e) {
      return e.internalId == null
        ? 0
        : o("WAWebDBMessageUtils").getInChatMsgId(e.internalId);
    }
    function c(e) {
      var t;
      return {
        author:
          e.author == null
            ? null
            : o("WAWebWidFactory").createWidFromWidLike(e.author),
        id: e.id,
        recipients: ((t = e.recipients) != null ? t : []).map(
          o("WAWebWidFactory").createWidFromWidLike,
        ),
        subtype: e.subtype,
        t: e.t,
        type: e.type,
      };
    }
    l.getStoredGroupEvents = s;
  },
  98,
);
