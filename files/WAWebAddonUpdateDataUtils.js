__d(
  "WAWebAddonUpdateDataUtils",
  [
    "WANullthrows",
    "WAWebAddonConstants",
    "WAWebAddonDBTable",
    "WAWebAddonHydrationUtils",
    "WAWebAddonInfraError",
    "WAWebAddonPerfUtils",
    "WAWebAddonProcessMsgsUtils",
    "WAWebAddonSelectUtils",
    "WAWebAddonSortUtils",
    "WAWebCommentUtils",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Set([
        (e = o("WAWebAddonConstants")).AddonProcessMode.OnlineReceive,
        e.AddonProcessMode.Revoke,
        e.AddonProcessMode.DeleteForMe,
        e.AddonProcessMode.DeleteWithParent,
      ]);
    async function u(e) {
      var t,
        n,
        a = e.addons,
        i = e.metricReporter,
        l = e.processMode,
        s = e.tableMode,
        u = [],
        c = (t = a.removeByMsgKey) != null ? t : [],
        d = (n = a.removeByMsgKey) != null ? n : [];
      if (
        (a.remove != null &&
          a.remove.length > 0 &&
          ((c = c.concat(
            a.remove.map(function (e) {
              return e.id;
            }),
          )),
          (d = d.concat(
            o("WAWebAddonHydrationUtils")
              .filterAddonsByHydratedStatus(a.remove)
              .map(function (e) {
                return e.id;
              }),
          ))),
        s !== o("WAWebAddonConstants").AddonTableMode.None)
      ) {
        if (a.add != null && a.add.length > 0) {
          var m = async function () {
            var e, t;
            i == null ||
              (e = i.sendPerfReporter) == null ||
              e.startSavedStage();
            var n = await o("WAWebAddonPerfUtils").createAddonQplMarker(
              l === o("WAWebAddonConstants").AddonProcessMode.Send
                ? o("WAWebAddonPerfUtils").AddonQplMarkerType.Outgoing
                : o("WAWebAddonPerfUtils").AddonQplMarkerType.Incoming,
              {
                mode: s,
                type: o("WAWebAddonPerfUtils").AnnotationRequestType.BulkUpsert,
                size: a.add.length,
              },
            );
            try {
              (l === o("WAWebAddonConstants").AddonProcessMode.SetAck
                ? await Promise.all(
                    a.add.map(function (e) {
                      return o(
                        "WAWebAddonDBTable",
                      ).addonInternalDBTable.updateAck(
                        s,
                        e,
                        r("WANullthrows")(e.ack, "ack is not defined"),
                      );
                    }),
                  )
                : await o("WAWebAddonDBTable").addonInternalDBTable.bulkUpsert(
                    s,
                    a.add,
                  ),
                n == null || n.success());
            } catch (e) {
              throw (n == null || n.fail(), e);
            }
            i == null || (t = i.sendPerfReporter) == null || t.postSavedStage();
          };
          u.push(m());
        }
        c.length > 0 &&
          u.push(
            o("WAWebAddonDBTable").addonInternalDBTable.bulkRemoveByMsgKey(
              s,
              c,
            ),
          );
      }
      return (
        u.length > 0 && (await Promise.all(u)),
        { removeFromUICollection: d }
      );
    }
    async function c(e, t, n) {
      var r = e.processMode,
        a = e.tableMode,
        i = n == null ? void 0 : n.metricReporter;
      if (r === o("WAWebAddonConstants").AddonProcessMode.Hydration)
        throw new (o("WAWebAddonInfraError").AddonInfraError)(
          o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError,
        );
      var l = await u({
          addons: t,
          metricReporter: i,
          processMode: r,
          tableMode: a,
        }),
        c = l.removeFromUICollection;
      if (r !== o("WAWebAddonConstants").AddonProcessMode.HistorySync)
        if (t.add != null) {
          var d, m;
          (i == null ||
            (d = i.sendPerfReporter) == null ||
            d.startRenderedStage(),
            await Promise.all(
              o("WAWebAddonSortUtils")
                .groupAddonsByProcessor(r, a, t.add)
                .map(async function (e) {
                  var t = o(
                      "WAWebAddonHydrationUtils",
                    ).filterAddonsByHydratedStatus(e.addons),
                    n =
                      t.length !== 0 ||
                      c.length !== 0 ||
                      r ===
                        o("WAWebAddonConstants").AddonProcessMode.OnlineReceive;
                  n &&
                    (await e.processor.updateCollection(
                      { add: t, remove: c },
                      r,
                    ),
                    s.has(r) &&
                      (await e.processor.manageNotifications(
                        {
                          add:
                            r ===
                            o("WAWebAddonConstants").AddonProcessMode.Revoke
                              ? []
                              : e.addons,
                          remove: c,
                        },
                        { processMode: r },
                      )));
                }),
            ),
            i == null ||
              (m = i.sendPerfReporter) == null ||
              m.postRenderedStage());
        } else if (t.remove != null) {
          if (
            (await Promise.all(
              o("WAWebAddonSortUtils")
                .groupAddonsByProcessor(r, a, t.remove)
                .map(async function (e) {
                  (await e.processor.updateCollection(
                    { add: [], remove: c },
                    r,
                  ),
                    s.has(r) &&
                      (await e.processor.manageNotifications(
                        { add: [], remove: c },
                        { processMode: r },
                      )));
                }),
            ),
            r === o("WAWebAddonConstants").AddonProcessMode.DeleteForMe &&
              a === o("WAWebAddonConstants").AddonTableMode.Comment)
          ) {
            var p = await o("WAWebAddonProcessMsgsUtils").queryAddonParentMsgs(
                t.remove,
                o("WAWebAddonConstants").AddonProcessMode.DeleteForMe,
              ),
              _ = p[0],
              f = [];
            for (var g of t.remove)
              g.kind === o("WAWebMsgType").MsgKind.CommentDecrypted &&
                f.push(g);
            await o("WAWebCommentUtils").updateReplyCount(
              [],
              o("WAWebAddonSelectUtils").createAddonParentSelector(_),
              f,
            );
          }
        } else
          throw new (o("WAWebAddonInfraError").AddonInfraError)(
            o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError,
          );
    }
    l.updateAddonsInTableMode = c;
  },
  98,
);
