__d(
  "WAWebDBMessageDelete",
  [
    "WALogger",
    "WAWebDBDeleteAssociatedMsgsByMsgKey",
    "WAWebDBGetAssociatedMsgsByParentMsgKey",
    "WAWebDBReportingTokenUtils",
    "WAWebDBStoreRevokeMsgs",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageInitialize",
    "WAWebModelStorageUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebNoop",
    "WAWebQuarantineDataStore",
    "WAWebSchemaMessage",
    "cr:375",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = (e = n("cr:375")) != null ? e : {},
      p = m.ftsLightClient;
    async function _(e, t) {
      t === void 0 && (t = { deleteAssociatedMsgs: !0 });
      var n = t,
        a = n.deleteAssociatedMsgs,
        i = n.preserveQuarantineData,
        l = i === void 0 ? !1 : i;
      if (e.length !== 0) {
        var m = [];
        return o("WAWebModelStorageInitialize")
          .initializeWithoutGKs()
          .then(async function () {
            var t = new Set(e),
              n = [],
              i = [];
            if (a) {
              var l = await o(
                "WAWebDBGetAssociatedMsgsByParentMsgKey",
              ).bulkGetMessagesByParentMsgKey(
                Array.from(e, function (e) {
                  return r("WAWebMsgKey").fromString(e);
                }),
              );
              l.forEach(function (e) {
                (i.push([e.msgKey, e.associationType]), t.add(e.msgKey));
              });
            }
            var s = Array.from(t);
            return (
              await o("WAWebSchemaMessage")
                .getMessageTable()
                .bulkGet(s, !1)
                .then(function (e) {
                  e.forEach(function (e) {
                    (e == null ? void 0 : e.rowId) != null &&
                      n.push(String(e.rowId));
                    var t = e == null ? void 0 : e.associationType;
                    t != null && e != null && i.push([e.id.toString(), t]);
                    var r = e == null ? void 0 : e.botResponseTargetId,
                      o = e == null ? void 0 : e.internalId;
                    (e == null ? void 0 : e.botPluginSearchProvider) != null &&
                      (e == null ? void 0 : e.botPluginSearchUrl) != null &&
                      r != null &&
                      o != null &&
                      m.push({ internalId: o, targetId: r });
                  });
                }),
              { deleteMsgIdsSet: t, msgRowIds: n, deleteAssociationMappings: i }
            );
          })
          .then(async function (e) {
            var t = e.deleteAssociationMappings,
              n = e.deleteMsgIdsSet;
            return (
              await o("WAWebModelStorageUtils")
                .getStorage()
                .lock(
                  ["message", "chat", "message-association"],
                  async function (e) {
                    var a = Array.from(n),
                      i = [
                        o("WAWebSchemaMessage").getMessageTable().bulkRemove(a),
                      ];
                    if (t.length > 0) {
                      o("WALogger").LOG(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[association-infra] del assocs for self",
                          ])),
                      );
                      var l = o(
                        "WAWebDBDeleteAssociatedMsgsByMsgKey",
                      ).bulkDeleteMessagesByMsgKeyAndAssociationType(t);
                      i.push(l);
                    }
                    try {
                      m.length > 0 &&
                        (o("WALogger").LOG(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "[bot] Removing bot plugin msgs after delete for self",
                            ])),
                        ),
                        await o(
                          "WAWebDBStoreRevokeMsgs",
                        ).findAndDeleteAssociatedPluginMsg(m));
                    } catch (e) {
                      var d = r("getErrorSafe")(e);
                      o("WALogger")
                        .ERROR(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
                              "[bot] findAndDeleteAssociatedPluginMsg failed",
                            ])),
                        )
                        .catching(d)
                        .sendLogs("Plugin carousel delete failed");
                    }
                    return Promise.all(i);
                  },
                ),
              { deleteMsgIdsSet: n, msgRowIds: e.msgRowIds }
            );
          })
          .then(function (e) {
            var t = e.deleteMsgIdsSet,
              n = e.msgRowIds;
            return (
              n.length > 0 && (p == null || p.purge(n).catch(r("WAWebNoop"))),
              t
            );
          })
          .then(function (e) {
            var t = Array.from(e);
            (o("WAWebDBReportingTokenUtils").handleDeleteReportingInfos(t, {
              removeWholeRow: !0,
            }),
              f(t, l));
          })
          .catch(function (e) {
            throw (
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "removeMessagesFromHistory",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              e
            );
          });
      }
    }
    function f(e, t) {
      t ||
        o("WAWebQuarantineDataStore")
          .bulkDeleteQuarantineData(e)
          .catch(r("WAWebNoop"));
    }
    function g(e) {
      var t = [];
      for (var n of e)
        if (o("WAWebMsgGetters").getIsStatus(n)) {
          t.push(n.id.toString());
          var r = o("WAWebLidMigrationUtils").getAlternateMsgKey(n.id);
          r != null && t.push(r.toString());
        }
      return t.length > 0
        ? o("WAWebSchemaMessage").getMessageTable().bulkRemove(t)
        : Promise.resolve();
    }
    ((l.removeMessagesFromHistory = _), (l.removeStatusMessage = g));
  },
  98,
);
