__d(
  "WAWebDBMessageDelete",
  [
    "WALogger",
    "WAWebDBDeleteAssociatedMsgsByMsgKey",
    "WAWebDBGetAssociatedMsgsByParentMsgKey",
    "WAWebDBReportingTokenUtils",
    "WAWebDBStoreRevokeMsgs",
    "WAWebLidMigrationUtils",
    "WAWebMessageAssociationGatingUtils",
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
        a = n.deleteAssociatedMsgs;
      if (e.length !== 0) {
        var i = [];
        return o("WAWebModelStorageInitialize")
          .initializeWithoutGKs()
          .then(async function () {
            var t = new Set(e),
              n = [],
              l = [];
            if (
              a &&
              o(
                "WAWebMessageAssociationGatingUtils",
              ).isMessageAssociationInfraEnabled()
            ) {
              var s = await o(
                "WAWebDBGetAssociatedMsgsByParentMsgKey",
              ).bulkGetMessagesByParentMsgKey(
                Array.from(e, function (e) {
                  return r("WAWebMsgKey").fromString(e);
                }),
              );
              s.forEach(function (e) {
                (l.push([e.msgKey, e.associationType]), t.add(e.msgKey));
              });
            }
            var u = Array.from(t);
            return (
              await o("WAWebSchemaMessage")
                .getMessageTable()
                .bulkGet(u, !1)
                .then(function (e) {
                  e.forEach(function (e) {
                    (e == null ? void 0 : e.rowId) != null &&
                      n.push(String(e.rowId));
                    var t = e == null ? void 0 : e.associationType;
                    t != null &&
                      e != null &&
                      o(
                        "WAWebMessageAssociationGatingUtils",
                      ).isMessageAssociationInfraEnabled() &&
                      l.push([e.id.toString(), t]);
                    var r = e == null ? void 0 : e.botResponseTargetId,
                      a = e == null ? void 0 : e.internalId;
                    (e == null ? void 0 : e.botPluginSearchProvider) != null &&
                      (e == null ? void 0 : e.botPluginSearchUrl) != null &&
                      r != null &&
                      a != null &&
                      i.push({ internalId: a, targetId: r });
                  });
                }),
              { deleteMsgIdsSet: t, msgRowIds: n, deleteAssociationMappings: l }
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
                      l = [
                        o("WAWebSchemaMessage").getMessageTable().bulkRemove(a),
                      ];
                    if (
                      t.length > 0 &&
                      o(
                        "WAWebMessageAssociationGatingUtils",
                      ).isMessageAssociationInfraEnabled()
                    ) {
                      o("WALogger").LOG(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[association-infra] del assocs for self",
                          ])),
                      );
                      var d = o(
                        "WAWebDBDeleteAssociatedMsgsByMsgKey",
                      ).bulkDeleteMessagesByMsgKeyAndAssociationType(t);
                      l.push(d);
                    }
                    try {
                      i.length > 0 &&
                        (o("WALogger").LOG(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "[bot] Removing bot plugin msgs after delete for self",
                            ])),
                        ),
                        await o(
                          "WAWebDBStoreRevokeMsgs",
                        ).findAndDeleteAssociatedPluginMsg(i));
                    } catch (e) {
                      var m = r("getErrorSafe")(e);
                      o("WALogger")
                        .ERROR(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
                              "[bot] findAndDeleteAssociatedPluginMsg failed",
                            ])),
                        )
                        .catching(m)
                        .sendLogs("Plugin carousel delete failed");
                    }
                    return Promise.all(l);
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
              o("WAWebQuarantineDataStore")
                .bulkDeleteQuarantineData(t)
                .catch(r("WAWebNoop")));
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
    function f(e) {
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
    ((l.removeMessagesFromHistory = _), (l.removeStatusMessage = f));
  },
  98,
);
