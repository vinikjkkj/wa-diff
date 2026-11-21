__d(
  "WAWebInboundMsgChatIndex",
  ["WAWebInboundMsgQueueRow"],
  function (t, n, r, o, a, i, l) {
    var e = new Map(),
      s = new Map(),
      u = new Set(),
      c = null;
    function d(t) {
      t.forEach(function (t) {
        var n = t.chatKey,
          r = t.priority,
          a = t.queueId,
          i = t.row;
        if (r === o("WAWebInboundMsgQueueRow").InboundRowPriority.NORMAL) {
          if (((c == null || a > c) && (c = a), n == null)) {
            u.add(a);
            return;
          }
          (b(e, n, a),
            (i == null ? void 0 : i.kind) === "message" &&
              i.intake.offline == null &&
              b(s, n, a));
        }
      });
    }
    function m(t) {
      t.forEach(function (t) {
        var n = t.chatKey,
          r = t.queueId;
        if (n == null) {
          u.delete(r);
          return;
        }
        (v(e, n, r), v(s, n, r));
      });
    }
    function p(t) {
      (e.delete(t), s.delete(t));
    }
    function _(t) {
      return e.has(t);
    }
    function f() {
      return Array.from(e.keys());
    }
    function g() {
      return Array.from(s.entries())
        .map(function (e) {
          var t = e[0],
            n = e[1];
          return { chatKey: t, newest: S(n) };
        })
        .sort(function (e, t) {
          return e.newest < t.newest ? 1 : -1;
        })
        .map(function (e) {
          var t = e.chatKey;
          return t;
        });
    }
    function h(t) {
      var n = y(),
        r = R(e.get(t));
      return n == null || (r != null && r < n);
    }
    function y() {
      return R(u);
    }
    function C() {
      return { before: y(), upTo: c };
    }
    function b(e, t, n) {
      var r,
        o = (r = e.get(t)) != null ? r : new Set();
      (o.add(n), e.set(t, o));
    }
    function v(e, t, n) {
      var r = e.get(t);
      (r == null || r.delete(n),
        (r == null ? void 0 : r.size) === 0 && e.delete(t));
    }
    function S(e) {
      return Array.from(e).reduce(function (e, t) {
        return t > e ? t : e;
      });
    }
    function R(e) {
      var t = null;
      return (
        e == null ||
          e.forEach(function (e) {
            (t == null || e < t) && (t = e);
          }),
        t
      );
    }
    ((l.addQueuedInboundMsgs = d),
      (l.removeQueuedInboundMsgs = m),
      (l.forgetQueuedInboundMsgChat = p),
      (l.hasQueuedInboundMsgs = _),
      (l.getChatsWithQueuedInboundMsgs = f),
      (l.getChatsWithLiveInboundMsgs = g),
      (l.precedesUnkeyedInboundMsgs = h),
      (l.getOldestUnkeyedInboundMsg = y),
      (l.getChatRowRange = C));
  },
  98,
);
