__d(
  "WAWebDecrementThreadUnreadCountsAction",
  [
    "WAWebAck",
    "WAWebThreadId",
    "WAWebThreadMetadataBulkJob",
    "WAWebThreadMsgUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = new Map();
      for (var n of e)
        if (!n.id.fromMe && n.ack < o("WAWebAck").ACK.READ) {
          var r = o("WAWebThreadMsgUtils").getMsgAiThread(n);
          if (r != null) {
            var a,
              i = r.toString(),
              l = (a = t.get(i)) != null ? a : 0;
            t.set(i, l + 1);
          }
        }
      return t;
    }
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e.size !== 0) {
            var n = yield o(
              "WAWebThreadMetadataBulkJob",
            ).bulkIncrementThreadUnreadCount(
              Array.from(e, function (e) {
                var t = e[0],
                  n = e[1];
                return { threadId: r("WAWebThreadId").from(t), delta: -n };
              }),
            );
            for (var a of n) {
              var i = a.threadId,
                l = a.unreadCount,
                s = t.get(i);
              s != null && s.set({ unreadCount: l });
            }
          }
        })),
        u.apply(this, arguments)
      );
    }
    ((l.getThreadUnreadDeltasFromMessages = e),
      (l.decrementThreadUnreadCountsAction = s));
  },
  98,
);
