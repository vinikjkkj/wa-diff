__d(
  "WAWebSyncdCoreApi",
  [
    "Promise",
    "WALogger",
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
    "WAWebSyncdConst",
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
      m,
      p,
      _ = ["pending-mutations"];
    function f() {
      return o("WAWebSyncdDisabled").isSyncdDisabled()
        ? (p || (p = n("Promise"))).resolve()
        : (g(),
          o("WAWebEventsWaitForOfflineDeliveryEnd")
            .waitForOfflineDeliveryEnd()
            .then(function () {
              o("WAWebSyncd").processOnAppResume();
            }),
          h(),
          o("WAWebSyncd").initializeStateMachine());
    }
    function g() {
      var e = 6e4,
        t = r("WAWebDebounce")(o("WAWebSyncd").reportWam, e, {
          maxWait: e * 3,
        });
      o("WAWebBackendEventBus").BackendEventBus.onAppStateSyncCompleted(t);
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[syncd] sync-actions sanitation start",
              ])),
          );
          var t = yield o(
            "WAWebUserPrefsAppStateSync",
          ).getMdSyncActionsActionSanitized();
          if (t)
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[syncd] sync-actions sanitation completed: alreadySanitized=true",
                ])),
            );
          else {
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
                  n = o("WAWebSyncdConst").Actions.cast(t);
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
              ).setMdSyncActionsActionSanitized(!0),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncd] sync-actions sanitation completed: alreadySanitized=false, rows=",
                    ", nullActions=",
                    ", unknownActions=",
                    "",
                  ])),
                n.length,
                r.length,
                i,
              ));
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t, r) {
      var a = [].concat(e, _);
      o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() &&
        a.push("chat", "sync-actions");
      var i = o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          a,
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var a = yield b(t);
                return (p || (p = n("Promise"))).all([
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
      return (p || (p = n("Promise"))).resolve(i);
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            i = (yield (p || (p = n("Promise"))).all(
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
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd] getPnMutationsForLidCleanup: ",
                      " non-array indexes",
                    ])),
                  t,
                )
                .sendLogs("syncd-lid-cleanup-invalid-index-non-array"),
            a > 0 &&
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
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
        v.apply(this, arguments)
      );
    }
    ((l.initialize = f),
      (l.sanitizeActionInSyncActionsRow = h),
      (l.lockForSync = C));
  },
  98,
);
