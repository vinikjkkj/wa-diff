__d(
  "WAWebDBStoreRevokeMsgs",
  ["WAWebBackendApi", "WAWebNoop", "WAWebSchemaMessage", "cr:375"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = n("cr:375")) != null ? e : {},
      u = s.ftsLightClient,
      c = 20;
    async function d(e) {
      var t = [],
        n = [],
        a = e.map(async function (e) {
          var r = await m(e),
            a = r.pluginLinkMsgIds,
            i = r.pluginLinkMsgIdsRowIds;
          ((t = [].concat(t, a)),
            (n = [].concat(n, i)),
            await o("WAWebSchemaMessage").getMessageTable().bulkRemove(t));
        });
      (await Promise.all(a),
        u == null || u.purge(n).catch(r("WAWebNoop")),
        o("WAWebBackendApi").frontendFireAndForget(
          "deleteAssociatedBotCarouselMsgs",
          { msgKeys: t },
        ));
    }
    async function m(e) {
      var t = [],
        n = [],
        r = e.internalId,
        a = e.targetId,
        i = r.split("_")[0];
      return (
        await o("WAWebSchemaMessage")
          .getMessageTable()
          .between(
            ["internalId"],
            r,
            i + "_g",
            { reverse: !1, limit: c, shouldDecrypt: !1 },
            function (e) {
              if (e.botResponseTargetId === a)
                (t.push(e.id), n.push(String(e.rowId)));
              else return !0;
              return !1;
            },
          ),
        { pluginLinkMsgIds: t, pluginLinkMsgIdsRowIds: n }
      );
    }
    ((l.findAndDeleteAssociatedPluginMsg = d),
      (l.findAssociatedPluginMsgs = m));
  },
  98,
);
