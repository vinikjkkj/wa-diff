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
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = o("WAWebLidMigrationUtils").getAlternateMsgKey(t.id),
            i = yield o(
              "WAWebDBGetByParentMsgKey",
            ).bulkGetMessageOrphansByParentMsgKey([t.id, a].filter(Boolean));
          i.length &&
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "processOrphansForNewMsg: found orphans",
                ])),
            );
          var l = o("WAWebAddonProcessMsgsUtils").sortAddonOrphans(i),
            u = l.legacyReactionAddons,
            c = l.otherOrphans,
            d = l.unifiedAddons,
            m = yield o("WAWebDBMapOrphansToProviders").mapOrphansToProviders(
              c,
            ),
            p = [
              o("WAWebStoreMsgs").storeMsgs(d),
              o("WAWebDBProcessReactionsMsgs").processReactionMsgs(u),
            ];
          for (var _ of m.entries()) {
            var f = _[0],
              g = _[1];
            p.push(f.processOrphansForNewMsg(t, g));
          }
          yield (s || (s = n("Promise"))).all(p);
          var h = r("lodash")
            .flatten(Array.from(m.values()))
            .map(function (e) {
              return e.msgKey;
            });
          ((h = h.concat(
            d.map(function (e) {
              return e.id.toString();
            }),
          )),
            u.length &&
              (h = h.concat(
                u.map(function (e) {
                  return e.id.toString();
                }),
              )),
            yield o("WAWebSchemaMessageOrphans")
              .getMessageOrphanTable()
              .bulkRemove(h));
        })),
        c.apply(this, arguments)
      );
    }
    l.processOrphansForNewMsg = u;
  },
  98,
);
