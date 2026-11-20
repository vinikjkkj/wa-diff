__d(
  "WAWebDBReplayParkedOrphans",
  [
    "Promise",
    "WALogger",
    "WAWebDBGetByParentMsgKey",
    "WAWebDBMessageSerialization",
    "WAWebDBProcessOrphansForNewMsg",
    "WAWebLidMigrationUtils",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.getKey,
            i = t.getReplayableParent,
            l = t.isWaitingOrphan,
            c = t.parents,
            d = t.sendLogsReason,
            p = t.shouldReplay;
          try {
            var f = _(c, a);
            if (f.size === 0) return;
            var g = yield o(
                "WAWebDBGetByParentMsgKey",
              ).bulkGetMessageOrphansByParentMsgKey(
                Array.from(f.values(), function (e) {
                  var t = e.key;
                  return t;
                }),
              ),
              h = new Set();
            for (var y of g) {
              var C = f.get(y.parentMsgKey);
              C != null && l(y) && h.add(C.parent);
            }
            if (h.size === 0 || !p(h)) return;
            var b = yield m(Array.from(h), a, i),
              v = yield (u || (u = n("Promise"))).allSettled(
                b.map(function (e) {
                  return o(
                    "WAWebDBProcessOrphansForNewMsg",
                  ).processOrphansForNewMsg(e);
                }),
              );
            for (var S of v)
              S.status === "rejected" &&
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "replayParkedOrphans: draining the orphans of a message failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(S.reason))
                  .tags("messaging")
                  .sendLogs(d);
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
              .sendLogs(d, { sampling: 0.01 });
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o("WAWebSchemaMessage")
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
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      var n = new Map();
      for (var r of e) {
        var a = t(r);
        for (var i of [a, o("WAWebLidMigrationUtils").getAlternateMsgKey(a)])
          i != null && n.set(i.toString(), { key: i, parent: r });
      }
      return n;
    }
    l.replayParkedOrphans = c;
  },
  98,
);
