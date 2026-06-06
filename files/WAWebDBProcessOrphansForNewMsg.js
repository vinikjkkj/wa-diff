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
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = o("WAWebLidMigrationUtils").getAlternateMsgKey(t.id),
            a = yield o(
              "WAWebDBGetByParentMsgKey",
            ).bulkGetMessageOrphansByParentMsgKey([t.id, r].filter(Boolean));
          a.length &&
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "processOrphansForNewMsg: found orphans",
                ])),
            );
          var i = o("WAWebAddonProcessMsgsUtils").sortAddonOrphans(a),
            l = i.legacyReactionAddons,
            u = i.otherOrphans,
            c = i.unifiedAddons,
            d = yield o("WAWebDBMapOrphansToProviders").mapOrphansToProviders(
              u,
            ),
            m = [
              o("WAWebStoreMsgs").storeMsgs(c),
              o("WAWebDBProcessReactionsMsgs").processReactionMsgs(l),
            ];
          for (var p of d.entries()) {
            var _ = p[0],
              f = p[1];
            m.push(_.processOrphansForNewMsg(t, f));
          }
          yield (s || (s = n("Promise"))).all(m);
          var g = Array.from(d.values())
            .flat()
            .map(function (e) {
              return e.msgKey;
            });
          ((g = g.concat(
            c.map(function (e) {
              return e.id.toString();
            }),
          )),
            l.length &&
              (g = g.concat(
                l.map(function (e) {
                  return e.id.toString();
                }),
              )),
            yield o("WAWebSchemaMessageOrphans")
              .getMessageOrphanTable()
              .bulkRemove(g));
        })),
        c.apply(this, arguments)
      );
    }
    l.processOrphansForNewMsg = u;
  },
  98,
);
