__d(
  "WAWebQbmThreadMsgs",
  [
    "WATimeUtils",
    "WAWebDBMessageFindLocal",
    "WAWebDBMessageUtils",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.msgs.toArray(),
        n = _(t, function (e) {
          return !o("WAWebMsgGetters").getIsNotification(e);
        });
      return {
        businessMsg: p(t),
        didUserReply: n != null && o("WAWebMsgGetters").getIsSentByMe(n),
        lastMsg: t.at(-1),
      };
    }
    function s(e) {
      return p(e.msgs.toArray());
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t, n;
          if (e.msgs.msgLoadState.noEarlierMsgs) return null;
          var r = yield o("WAWebDBMessageFindLocal").msgFindBefore({
              anchor:
                (t = (n = e.msgs.head()) == null ? void 0 : n.id) != null
                  ? t
                  : { remote: e.id },
            }),
            a = r.messages,
            i = p(a);
          return i != null
            ? o("WAWebMsgCollection").MsgCollection.add(i)[0]
            : null;
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaMessage")
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
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _(e, function (e) {
        return (
          !o("WAWebMsgGetters").getIsSentByMe(e) &&
          !o("WAWebMsgGetters").getIsNotification(e)
        );
      });
    }
    function _(e, t) {
      for (var n = e.length - 1; n >= 0; n--) if (t(e[n])) return e[n];
      return null;
    }
    ((l.getLoadedThreadMsgs = e),
      (l.getLastIncomingMsg = s),
      (l.findLastIncomingMsgInStorage = u),
      (l.getStoredThreadAge = d),
      (l.findLastIncoming = p));
  },
  98,
);
