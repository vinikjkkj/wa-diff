__d(
  "WAWebQbmThreadMsgs",
  [
    "WATimeUtils",
    "WAWebDBMessageFindLocal",
    "WAWebDBMessageUtils",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebSchemaMessage",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.msgs.toArray(),
        n = m(t, function (e) {
          return !o("WAWebMsgGetters").getIsNotification(e);
        });
      return {
        businessMsg: d(t),
        didUserReply: n != null && o("WAWebMsgGetters").getIsSentByMe(n),
        lastMsg: t.at(-1),
      };
    }
    function s(e) {
      return d(e.msgs.toArray());
    }
    async function u(e) {
      var t, n;
      if (e.msgs.msgLoadState.noEarlierMsgs) return null;
      var r = await o("WAWebDBMessageFindLocal").msgFindBefore({
          anchor:
            (t = (n = e.msgs.head()) == null ? void 0 : n.id) != null
              ? t
              : { remote: e.id },
        }),
        a = r.messages,
        i = d(a);
      return i != null ? o("WAWebMsgCollection").MsgCollection.add(i)[0] : null;
    }
    async function c(e) {
      var t = await o("WAWebSchemaMessage")
          .getMessageTable()
          .between(
            ["internalId"],
            o("WAWebDBMessageUtils").beginningOfChat(e.id),
            o("WAWebDBMessageUtils").endOfChat(e.id),
            { limit: 1, reverse: !1, shouldDecrypt: !1 },
          ),
        n = t[0];
      return (n == null ? void 0 : n.t) == null
        ? null
        : o("WATimeUtils").unixTime() - n.t;
    }
    function d(e) {
      return m(e, function (e) {
        return (
          !o("WAWebMsgGetters").getIsSentByMe(e) &&
          !o("WAWebMsgGetters").getIsNotification(e)
        );
      });
    }
    function m(e, t) {
      for (var n = e.length - 1; n >= 0; n--) if (t(e[n])) return e[n];
      return null;
    }
    ((l.getLoadedThreadMsgs = e),
      (l.getLastIncomingMsg = s),
      (l.findLastIncomingMsgInStorage = u),
      (l.getStoredThreadAge = c),
      (l.findLastIncoming = d));
  },
  98,
);
