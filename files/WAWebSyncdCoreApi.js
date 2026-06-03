__d(
  "WAWebSyncdCoreApi",
  [
    "Promise",
    "WALogger",
    "WASyncdConst",
    "WATypeUtils",
    "WAWebBackendEventBus",
    "WAWebDebounce",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebLid1X1MigrationGating",
    "WAWebModelStorageUtils",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaChat",
    "WAWebSchemaSyncActions",
    "WAWebSyncd",
    "WAWebSyncdActionUtils",
    "WAWebSyncdDb",
    "WAWebSyncdDisabled",
    "WAWebSyncdGetActionHandler",
    "WAWebSyncdRequestBuilderTypesConverter",
    "WAWebUserPrefsAppStateSync",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "tryParseJSONMixed",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = ["pending-mutations"];
    function p() {
      return o("WAWebSyncdDisabled").isSyncdDisabled()
        ? (d || (d = n("Promise"))).resolve()
        : (_(),
          o("WAWebEventsWaitForOfflineDeliveryEnd")
            .waitForOfflineDeliveryEnd()
            .then(function () {
              o("WAWebSyncd").processOnAppResume();
            }),
          f(),
          o("WAWebSyncd").initializeStateMachine());
    }
    function _() {
      var e = 6e4,
        t = r("WAWebDebounce")(o("WAWebSyncd").reportWam, e, {
          maxWait: e * 3,
        });
      o("WAWebBackendEventBus").BackendEventBus.onAppStateSyncCompleted(t);
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o(
            "WAWebUserPrefsAppStateSync",
          ).getMdSyncActionsActionSanitized();
          if (!t) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[syncd] sanitizing null action in sync-actions",
                ])),
            );
            var n = yield o("WAWebSchemaSyncActions")
                .getSyncActionsTable()
                .all(),
              r = n.filter(function (e) {
                return e.action == null;
              }),
              a = [],
              i = 0,
              l = r.map(function (e) {
                var t = o("WAWebSyncdActionUtils").getMutationNameFromIndex(
                    e.collection,
                    e.index,
                  ),
                  n = o("WASyncdConst").Actions.cast(t);
                return n
                  ? babelHelpers.extends({}, e, { action: n })
                  : (i++,
                    a.length < 3 && a.push(t != null ? t : "no-mutation-name"),
                    babelHelpers.extends({}, e));
              });
            (i > 0 &&
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: ",
                    " unknown actions => ",
                    "",
                  ])),
                i,
                a,
              ),
              yield o("WAWebSyncdDb").updateSyncActionRows(l),
              yield o(
                "WAWebUserPrefsAppStateSync",
              ).setMdSyncActionsActionSanitized(!0));
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t, r) {
      var a = [].concat(e, m);
      o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() &&
        a.push("chat", "sync-actions");
      var i = o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          a,
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var a = yield y(t);
                return (d || (d = n("Promise"))).all([
                  o("WAWebSyncdDb").appendPendingMutationsRows(t.concat(a)),
                  r(e),
                ]);
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        )
        .then(function () {
          var e = t.map(function (e) {
            return e.collection;
          });
          o("WAWebSyncd").markCollectionsForSync(e);
        });
      return (d || (d = n("Promise"))).resolve(i);
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.isLidMigrated() ||
            o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.isSyncdSessionMigrated()
          )
            return [];
          var t = 0,
            a = 0,
            i = (yield (d || (d = n("Promise"))).all(
              e.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      if (e.action != null) {
                        var n = o(
                          "WAWebSyncdGetActionHandler",
                        ).getActionHandler(e.action);
                        if (!(n == null || !n.isChatSyncdAction())) {
                          var i = n.chatJidIndex,
                            l = r("tryParseJSONMixed")(e.index);
                          if (!Array.isArray(l)) {
                            t++;
                            return;
                          }
                          var s = l[i];
                          if (!o("WATypeUtils").isString(s)) {
                            a++;
                            return;
                          }
                          if (r("WAWebWid").isStringLid(s)) {
                            var u = (yield o("WAWebSchemaChat")
                              .getChatTable()
                              .equals(["accountLid"], s, {
                                shouldDecrypt: !1,
                              }))[0];
                            if (!(u == null || u.accountLid === u.id)) {
                              var c = o("WAWebWidFactory")
                                  .createWid(u.id)
                                  .toJid(),
                                d = [].concat(l);
                              d[i] = c;
                              var m = JSON.stringify(d);
                              return o("WAWebSchemaSyncActions")
                                .getSyncActionsTable()
                                .get(m);
                            }
                          }
                        }
                      }
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ))
              .filter(Boolean)
              .map(o("WAWebSchemaSyncActions").convertToSyncActionFromRow);
          return (
            t > 0 &&
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd] getPnMutationsForLidCleanup: ",
                      " non-array indexes",
                    ])),
                  t,
                )
                .sendLogs("syncd-lid-cleanup-invalid-index-non-array"),
            a > 0 &&
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd] getPnMutationsForLidCleanup: ",
                      " non-string JIDs",
                    ])),
                  a,
                )
                .sendLogs("syncd-lid-cleanup-invalid-index-non-string-jid"),
            o(
              "WAWebSyncdRequestBuilderTypesConverter",
            ).syncActionsToPendingMutations(
              i,
              o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                .REMOVE,
            )
          );
        })),
        C.apply(this, arguments)
      );
    }
    ((l.initialize = p),
      (l.sanitizeActionInSyncActionsRow = f),
      (l.lockForSync = h));
  },
  98,
);
