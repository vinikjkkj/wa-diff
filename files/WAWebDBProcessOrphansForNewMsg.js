__d(
  "WAWebDBProcessOrphansForNewMsg",
  [
    "Promise",
    "WALogger",
    "WAWebAddonProcessMsgsUtils",
    "WAWebDBGetByParentMsgKey",
    "WAWebDBMapOrphansToProviders",
    "WAWebDBProcessReactionsMsgs",
    "WAWebLidMigrationUtils",
    "WAWebSchemaMessageOrphans",
    "WAWebStoreMsgs",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebLidMigrationUtils").getAlternateMsgKey(e.id),
            r = yield o(
              "WAWebDBGetByParentMsgKey",
            ).bulkGetMessageOrphansByParentMsgKey([e.id, t].filter(Boolean));
          r.length &&
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "processOrphansForNewMsg: found orphans",
                ])),
            );
          var a = o("WAWebAddonProcessMsgsUtils").sortAddonOrphans(r),
            i = a.legacyReactionAddons,
            l = a.otherOrphans,
            c = a.unifiedAddons,
            d = yield o("WAWebDBMapOrphansToProviders").mapOrphansToProviders(
              l,
            ),
            p = [
              o("WAWebStoreMsgs").storeMsgs(c),
              o("WAWebDBProcessReactionsMsgs").processReactionMsgs(i),
            ],
            _ = [],
            f = function* () {
              var t = g[0],
                n = g[1];
              _.push(
                t.processOrphansForNewMsg(e, n).then(function (e) {
                  var t = new Set();
                  return (
                    m(e, t),
                    n
                      .map(function (e) {
                        return e.msgKey;
                      })
                      .filter(function (e) {
                        return !t.has(e);
                      })
                  );
                }),
              );
            };
          for (var g of d.entries()) yield* f();
          var h = yield (u || (u = n("Promise"))).all([u.all(p), u.all(_)]),
            y = h[1],
            C = y.flat();
          ((C = C.concat(
            c.map(function (e) {
              return e.id.toString();
            }),
          )),
            i.length &&
              (C = C.concat(
                i.map(function (e) {
                  return e.id.toString();
                }),
              )),
            yield o("WAWebSchemaMessageOrphans")
              .getMessageOrphanTable()
              .bulkRemove(C));
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      if (
        !(e == null || typeof e != "object") &&
        "retainedOrphanMsgKeys" in e
      ) {
        var n = e.retainedOrphanMsgKeys;
        if (!Array.isArray(n)) {
          p("not an array");
          return;
        }
        var r = 0;
        for (var o of n) typeof o == "string" ? t.add(o) : (r += 1);
        r > 0 && p(r + " non-string entries");
      }
    }
    function p(t) {
      o("WALogger")
        .WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "processOrphansForNewMsg: unusable retainedOrphanMsgKeys (",
              ")",
            ])),
          t,
        )
        .tags("messaging")
        .sendLogs("orphan-retention-malformed", { sampling: 0.01 });
    }
    l.processOrphansForNewMsg = c;
  },
  98,
);
