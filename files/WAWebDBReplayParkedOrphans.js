__d(
  "WAWebDBReplayParkedOrphans",
  [
    "WALogger",
    "WAWebDBGetByParentMsgKey",
    "WAWebDBMessageSerialization",
    "WAWebDBProcessOrphansForNewMsg",
    "WAWebLidMigrationUtils",
    "WAWebSchemaMessage",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
      var n = t.getKey,
        a = t.getReplayableParent,
        i = t.isWaitingOrphan,
        l = t.parents,
        u = t.sendLogsReason,
        m = t.shouldReplay;
      try {
        var p = d(l, n);
        if (p.size === 0) return;
        var _ = await o(
            "WAWebDBGetByParentMsgKey",
          ).bulkGetMessageOrphansByParentMsgKey(
            Array.from(p.values(), function (e) {
              var t = e.key;
              return t;
            }),
          ),
          f = new Set();
        for (var g of _) {
          var h = p.get(g.parentMsgKey);
          h != null && i(g) && f.add(h.parent);
        }
        if (f.size === 0 || !m(f)) return;
        var y = await c(Array.from(f), n, a),
          C = await Promise.allSettled(
            y.map(function (e) {
              return o(
                "WAWebDBProcessOrphansForNewMsg",
              ).processOrphansForNewMsg(e);
            }),
          );
        for (var b of C)
          b.status === "rejected" &&
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "replayParkedOrphans: draining the orphans of a message failed",
                  ])),
              )
              .catching(r("getErrorSafe")(b.reason))
              .tags("messaging")
              .sendLogs(u);
      } catch (e) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "replayParkedOrphans: draining orphans failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .tags("messaging")
          .sendLogs(u, { sampling: 0.01 });
      }
    }
    async function c(e, t, n) {
      var r = await o("WAWebSchemaMessage")
          .getMessageTable()
          .bulkGet(
            e.map(function (e) {
              return t(e).toString();
            }),
          ),
        a = [];
      return (
        e.forEach(function (e, t) {
          var i = r[t],
            l = n(
              e,
              i != null
                ? o("WAWebDBMessageSerialization").messageFromDbRow(i)
                : null,
            );
          l != null && a.push(l);
        }),
        a
      );
    }
    function d(e, t) {
      var n = new Map();
      for (var r of e) {
        var a = t(r);
        for (var i of [a, o("WAWebLidMigrationUtils").getAlternateMsgKey(a)])
          i != null && n.set(i.toString(), { key: i, parent: r });
      }
      return n;
    }
    l.replayParkedOrphans = u;
  },
  98,
);
