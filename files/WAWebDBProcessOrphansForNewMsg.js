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
    var e, s;
    async function u(t) {
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
        d = [
          o("WAWebStoreMsgs").storeMsgs(s),
          o("WAWebDBProcessReactionsMsgs").processReactionMsgs(i),
        ],
        m = [],
        p = async function () {
          var e = _[0],
            n = _[1];
          m.push(
            e.processOrphansForNewMsg(t, n).then(function (e) {
              var t = new Set();
              return (
                c(e, t),
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
      for (var _ of u.entries()) await p();
      var f = await Promise.all([Promise.all(d), Promise.all(m)]),
        g = f[1],
        h = g.flat();
      ((h = h.concat(
        s.map(function (e) {
          return e.id.toString();
        }),
      )),
        i.length &&
          (h = h.concat(
            i.map(function (e) {
              return e.id.toString();
            }),
          )),
        await o("WAWebSchemaMessageOrphans")
          .getMessageOrphanTable()
          .bulkRemove(h));
    }
    function c(e, t) {
      if (
        !(e == null || typeof e != "object") &&
        "retainedOrphanMsgKeys" in e
      ) {
        var n = e.retainedOrphanMsgKeys;
        if (!Array.isArray(n)) {
          d("not an array");
          return;
        }
        var r = 0;
        for (var o of n) typeof o == "string" ? t.add(o) : (r += 1);
        r > 0 && d(r + " non-string entries");
      }
    }
    function d(e) {
      o("WALogger")
        .WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "processOrphansForNewMsg: unusable retainedOrphanMsgKeys (",
              ")",
            ])),
          e,
        )
        .tags("messaging")
        .sendLogs("orphan-retention-malformed", { sampling: 0.01 });
    }
    l.processOrphansForNewMsg = u;
  },
  98,
);
