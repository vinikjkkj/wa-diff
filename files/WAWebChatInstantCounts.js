__d(
  "WAWebChatInstantCounts",
  [
    "WAWebChatUnreadConstants",
    "WAWebInstantMsgTypes",
    "WAWebInstantsConsumption",
    "WAWebInstantsExpiry",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgKey",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 100;
    function s(e) {
      var t = e.newestMsgs,
        n = e.now,
        r = e.recentIncomingMsgs,
        a = e.unreadCount,
        i = r.filter(function (e) {
          return d(e, n);
        }),
        l = m(t, a),
        s = i
          .map(function (e) {
            return o("WAWebInstantsExpiry").getInstantExpiryTs(p(e));
          })
          .filter(Boolean);
      return {
        unconsumedInstantCount: i.length,
        nextInstantExpiryTs: s.length > 0 ? Math.min.apply(Math, s) : null,
        unreadInstantCount: l.length,
      };
    }
    function u(e, t) {
      return Math.max(0, e - t);
    }
    function c(e, t) {
      var n = t.unconsumedInstantCount,
        r = t.unreadInstantCount,
        a = e > 0 || e === o("WAWebChatUnreadConstants").MARKED_AS_UNREAD;
      return a && u(e, r) === 0 && n === 0;
    }
    function d(e, t) {
      var n = p(e);
      return _(e) ||
        !o("WAWebInstantMsgTypes").isInstantTypeReceiverEnabled(n.type)
        ? !1
        : !o("WAWebInstantsConsumption").isInstantConsumed(n) &&
            !o("WAWebInstantsExpiry").isInstantExpiredAt(n, t);
    }
    function m(t, n) {
      var r = n,
        a = [];
      for (var i of t.slice(0, e)) {
        if (r <= 0) return a;
        _(i) ||
          (o("WAWebInstantMsgTypes").isInstantMsgType(i.type)
            ? (r--,
              o("WAWebInstantMsgTypes").isInstantTypeReceiverEnabled(i.type) &&
                a.push(i))
            : o("WAWebMsgGetters").getIsUnreadType(p(i)) && r--);
      }
      return a;
    }
    function p(e) {
      var t;
      return (t = o("WAWebMsgCollection").MsgCollection.get(e.id)) != null
        ? t
        : e;
    }
    function _(e) {
      return r("WAWebMsgKey").fromString(e.id).fromMe;
    }
    ((l.UNREAD_INSTANT_WALK_LIMIT = e),
      (l.countChatInstants = s),
      (l.getUnreadCountWithoutInstants = u),
      (l.shouldShowUnreadDot = c),
      (l.isUnconsumedIncomingInstant = d));
  },
  98,
);
