__d(
  "MAWMpsMessagePointQuery",
  ["EBMessagePointQuery", "MpsErrors", "WAJids", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t,
        n = e.ctx,
        a = e.messageIds,
        i = e.threadId;
      (t = n.metric) == null ||
        t.addPoint("mps_message_point_query_start", {
          int: { batchSize: a.length },
        });
      var l = o("WAJids").validateChatJid(i),
        s = r("nullthrows")(
          l,
          "invalid threadId passed to validateThreadId: " + i,
        ),
        u = await o("EBMessagePointQuery").messagePointQuery({
          chatJid: s,
          messageIds: a,
        });
      if (!u.success) {
        var c;
        throw (
          (c = n.metric) == null || c.addPoint("mps_message_point_query_fail"),
          o("MpsErrors").MpsErrors.error(
            "read_failed",
            "EB point query failed: %s",
            u.error.errorCode,
          )
        );
      }
      return u.value;
    }
    l.MAWMpsMessagePointQuery = e;
  },
  98,
);
