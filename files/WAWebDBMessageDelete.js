__d(
  "WAWebDBMessageDelete",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "cr:375",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = (e = n("cr:375")) != null ? e : {},
      _ = p.ftsLightClient;
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = { deleteAssociatedMsgs: !0 });
          var a = t,
            i = a.deleteAssociatedMsgs;
          if (e.length !== 0) {
            var l = [];
            return o("WAWebModelStorageInitialize")
              .initializeWithoutGKs()
              .then(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  var t = new Set(e),
                    n = [],
                    a = [];
                  if (
                    i &&
                    o(
                      "WAWebMessageAssociationGatingUtils",
                    ).isMessageAssociationInfraEnabled()
                  ) {
                    var s = yield o(
                      "WAWebDBGetAssociatedMsgsByParentMsgKey",
                    ).bulkGetMessagesByParentMsgKey(
                      Array.from(e, function (e) {
                        return r("WAWebMsgKey").fromString(e);
                      }),
                    );
                    s.forEach(function (e) {
                      (a.push([e.msgKey, e.associationType]), t.add(e.msgKey));
                    });
                  }
                  var u = Array.from(t);
                  return (
                    yield o("WAWebSchemaMessage")
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
                            a.push([e.id.toString(), t]);
                          var r = e == null ? void 0 : e.botResponseTargetId,
                            i = e == null ? void 0 : e.internalId;
                          (e == null ? void 0 : e.botPluginSearchProvider) !=
                            null &&
                            (e == null ? void 0 : e.botPluginSearchUrl) !=
                              null &&
                            r != null &&
                            i != null &&
                            l.push({ internalId: i, targetId: r });
                        });
                      }),
                    {
                      deleteMsgIdsSet: t,
                      msgRowIds: n,
                      deleteAssociationMappings: a,
                    }
                  );
                }),
              )
              .then(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = e.deleteAssociationMappings,
                        a = e.deleteMsgIdsSet;
                      return (
                        yield o("WAWebModelStorageUtils")
                          .getStorage()
                          .lock(
                            ["message", "chat", "message-association"],
                            (function () {
                              var e = n(
                                "asyncToGeneratorRuntime",
                              ).asyncToGenerator(function* (e) {
                                var i = Array.from(a),
                                  d = [
                                    o("WAWebSchemaMessage")
                                      .getMessageTable()
                                      .bulkRemove(i),
                                  ];
                                if (
                                  t.length > 0 &&
                                  o(
                                    "WAWebMessageAssociationGatingUtils",
                                  ).isMessageAssociationInfraEnabled()
                                ) {
                                  o("WALogger").LOG(
                                    s ||
                                      (s =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          [
                                            "[association-infra] del assocs for self",
                                          ],
                                        )),
                                  );
                                  var p = o(
                                    "WAWebDBDeleteAssociatedMsgsByMsgKey",
                                  ).bulkDeleteMessagesByMsgKeyAndAssociationType(
                                    t,
                                  );
                                  d.push(p);
                                }
                                try {
                                  l.length > 0 &&
                                    (o("WALogger").LOG(
                                      u ||
                                        (u =
                                          babelHelpers.taggedTemplateLiteralLoose(
                                            [
                                              "[bot] Removing bot plugin msgs after delete for self",
                                            ],
                                          )),
                                    ),
                                    yield o(
                                      "WAWebDBStoreRevokeMsgs",
                                    ).findAndDeleteAssociatedPluginMsg(l));
                                } catch (e) {
                                  var _ = r("getErrorSafe")(e);
                                  o("WALogger")
                                    .ERROR(
                                      c ||
                                        (c =
                                          babelHelpers.taggedTemplateLiteralLoose(
                                            [
                                              "[bot] findAndDeleteAssociatedPluginMsg failed",
                                            ],
                                          )),
                                    )
                                    .catching(_)
                                    .sendLogs("Plugin carousel delete failed");
                                }
                                return (m || (m = n("Promise"))).all(d);
                              });
                              return function (t) {
                                return e.apply(this, arguments);
                              };
                            })(),
                          ),
                        { deleteMsgIdsSet: a, msgRowIds: e.msgRowIds }
                      );
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              )
              .then(function (e) {
                var t = e.deleteMsgIdsSet,
                  n = e.msgRowIds;
                return (
                  n.length > 0 &&
                    (_ == null || _.purge(n).catch(r("WAWebNoop"))),
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
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      var t = [];
      for (var r of e)
        if (o("WAWebMsgGetters").getIsStatus(r)) {
          t.push(r.id.toString());
          var a = o("WAWebLidMigrationUtils").getAlternateMsgKey(r.id);
          a != null && t.push(a.toString());
        }
      return t.length > 0
        ? o("WAWebSchemaMessage").getMessageTable().bulkRemove(t)
        : (m || (m = n("Promise"))).resolve();
    }
    ((l.removeMessagesFromHistory = f), (l.removeStatusMessage = h));
  },
  98,
);
