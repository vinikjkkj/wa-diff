__d(
  "WAWebDBProcessOrphansForNewMsg",
  [
    "WALogger",
    "WAWebAddonProcessMsgsUtils",
    "WAWebDBGetByParentMsgKey",
    "WAWebDBMapOrphansToProviders",
    "WAWebDBProcessReactionsMsgs",
    "WAWebLidMigrationUtils",
    "WAWebSchemaMessageOrphans",
    "WAWebStoreMsgs",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      var n = o("WAWebLidMigrationUtils").getAlternateMsgKey(t.id),
        r = await o(
          "WAWebDBGetByParentMsgKey",
        ).bulkGetMessageOrphansByParentMsgKey([t.id, n].filter(Boolean));
      r.length &&
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "processOrphansForNewMsg: found orphans",
            ])),
        );
      var a = o("WAWebAddonProcessMsgsUtils").sortAddonOrphans(r),
        i = a.legacyReactionAddons,
        l = a.otherOrphans,
        s = a.unifiedAddons,
        u = await o("WAWebDBMapOrphansToProviders").mapOrphansToProviders(l),
        c = [
          o("WAWebStoreMsgs").storeMsgs(s),
          o("WAWebDBProcessReactionsMsgs").processReactionMsgs(i),
        ];
      for (var d of u.entries()) {
        var m = d[0],
          p = d[1];
        c.push(m.processOrphansForNewMsg(t, p));
      }
      await Promise.all(c);
      var _ = Array.from(u.values())
        .flat()
        .map(function (e) {
          return e.msgKey;
        });
      ((_ = _.concat(
        s.map(function (e) {
          return e.id.toString();
        }),
      )),
        i.length &&
          (_ = _.concat(
            i.map(function (e) {
              return e.id.toString();
            }),
          )),
        await o("WAWebSchemaMessageOrphans")
          .getMessageOrphanTable()
          .bulkRemove(_));
    }
    l.processOrphansForNewMsg = s;
  },
  98,
);
