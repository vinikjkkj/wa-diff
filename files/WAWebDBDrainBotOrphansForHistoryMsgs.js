__d(
  "WAWebDBDrainBotOrphansForHistoryMsgs",
  [
    "Promise",
    "WALogger",
    "WAWebBotGating",
    "WAWebBotGroupGatingUtils",
    "WAWebDBGetByParentMsgKey",
    "WAWebDBMessageSerialization",
    "WAWebDBProcessOrphansForNewMsg",
    "WAWebLidMigrationUtils",
    "WAWebMessageAddOnType",
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
          if (
            !(
              !o("WAWebBotGating").isBotOrphanMsgEnabled() &&
              !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
            )
          )
            try {
              var a = _(t);
              if (a.size === 0) return;
              var i = yield o(
                  "WAWebDBGetByParentMsgKey",
                ).bulkGetMessageOrphansByParentMsgKey(
                  Array.from(a.values(), function (e) {
                    var t = e.key;
                    return t;
                  }),
                ),
                l = new Set();
              for (var c of i) {
                var d = a.get(c.parentMsgKey);
                c.type ===
                  o("WAWebMessageAddOnType").MessageAddOnType.BotMsmsg &&
                  d != null &&
                  l.add(d.msg);
              }
              var p = yield m(Array.from(l)),
                f = yield (u || (u = n("Promise"))).allSettled(
                  p.map(function (e) {
                    return o(
                      "WAWebDBProcessOrphansForNewMsg",
                    ).processOrphansForNewMsg(e);
                  }),
                );
              for (var g of f)
                g.status === "rejected" &&
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "drainBotOrphansForHistoryMsgs: draining the bot orphans of a target failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(g.reason))
                    .tags("messaging")
                    .sendLogs("bot-orphan-history-drain-failed");
            } catch (e) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "drainBotOrphansForHistoryMsgs: draining bot orphans failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .tags("messaging")
                .sendLogs("bot-orphan-history-drain-failed", {
                  sampling: 0.01,
                });
            }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length === 0) return [];
          var t = yield o("WAWebSchemaMessage")
            .getMessageTable()
            .bulkGet(
              e.map(function (e) {
                return e.id.toString();
              }),
            );
          return e.filter(function (e, n) {
            var r = t[n];
            return (
              r != null &&
              o("WAWebDBMessageSerialization").messageFromDbRow(r)
                .messageSecret != null
            );
          });
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      var t = new Map();
      for (var n of e)
        if (n.messageSecret != null)
          for (var r of [
            n.id,
            o("WAWebLidMigrationUtils").getAlternateMsgKey(n.id),
          ])
            r != null && t.set(r.toString(), { key: r, msg: n });
      return t;
    }
    l.drainBotOrphansForHistoryMsgs = c;
  },
  98,
);
