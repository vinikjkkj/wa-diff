__d(
  "WAWebSyncdCoreApi",
  [
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
    "tryParseJSONMixed",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = ["pending-mutations"];
    function m() {
      return o("WAWebSyncdDisabled").isSyncdDisabled()
        ? Promise.resolve()
        : (p(),
          o("WAWebEventsWaitForOfflineDeliveryEnd")
            .waitForOfflineDeliveryEnd()
            .then(function () {
              o("WAWebSyncd").processOnAppResume();
            }),
          _(),
          o("WAWebSyncd").initializeStateMachine());
    }
    function p() {
      var e = 6e4,
        t = r("WAWebDebounce")(o("WAWebSyncd").reportWam, e, {
          maxWait: e * 3,
        });
      o("WAWebBackendEventBus").BackendEventBus.onAppStateSyncCompleted(t);
    }
    async function _() {
      var t = await o(
        "WAWebUserPrefsAppStateSync",
      ).getMdSyncActionsActionSanitized();
      if (!t) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[syncd] sanitizing null action in sync-actions",
            ])),
        );
        var n = await o("WAWebSchemaSyncActions").getSyncActionsTable().all(),
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
          await o("WAWebSyncdDb").updateSyncActionRows(l),
          await o("WAWebUserPrefsAppStateSync").setMdSyncActionsActionSanitized(
            !0,
          ));
      }
    }
    function f(e, t, n) {
      var r = [].concat(e, d);
      o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() &&
        r.push("chat", "sync-actions");
      var a = o("WAWebModelStorageUtils")
        .getStorage()
        .lock(r, async function (e) {
          var r = await g(t);
          return Promise.all([
            o("WAWebSyncdDb").appendPendingMutationsRows(t.concat(r)),
            n(e),
          ]);
        })
        .then(function () {
          var e = t.map(function (e) {
            return e.collection;
          });
          o("WAWebSyncd").markCollectionsForSync(e);
        });
      return Promise.resolve(a);
    }
    async function g(e) {
      if (
        !o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() ||
        o(
          "WAWebLid1X1MigrationGating",
        ).Lid1X1MigrationUtils.isSyncdSessionMigrated()
      )
        return [];
      var t = 0,
        n = 0,
        a = (
          await Promise.all(
            e.map(async function (e) {
              if (e.action != null) {
                var a = o("WAWebSyncdGetActionHandler").getActionHandler(
                  e.action,
                );
                if (!(a == null || !a.isChatSyncdAction())) {
                  var i = a.chatJidIndex,
                    l = r("tryParseJSONMixed")(e.index);
                  if (!Array.isArray(l)) {
                    t++;
                    return;
                  }
                  var s = l[i];
                  if (!o("WATypeUtils").isString(s)) {
                    n++;
                    return;
                  }
                  if (r("WAWebWid").isStringLid(s)) {
                    var u = (
                      await o("WAWebSchemaChat")
                        .getChatTable()
                        .equals(["accountLid"], s, { shouldDecrypt: !1 })
                    )[0];
                    if (!(u == null || u.accountLid === u.id)) {
                      var c = o("WAWebWidFactory").createWid(u.id).toJid(),
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
            }),
          )
        )
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
        n > 0 &&
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[syncd] getPnMutationsForLidCleanup: ",
                  " non-string JIDs",
                ])),
              n,
            )
            .sendLogs("syncd-lid-cleanup-invalid-index-non-string-jid"),
        o(
          "WAWebSyncdRequestBuilderTypesConverter",
        ).syncActionsToPendingMutations(
          a,
          o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE,
        )
      );
    }
    ((l.initialize = m),
      (l.sanitizeActionInSyncActionsRow = _),
      (l.lockForSync = f));
  },
  98,
);
