__d(
  "createReStoreEBSMTablesPersistence",
  [
    "CurrentMessengerUser",
    "EBLogger",
    "MAWUnrecoverableDbErrors",
    "MWEBODSCategory",
    "MWEBODSEntityKey.enum",
    "MWEBODSEntityName.enum",
    "MWEBUseLocalStorage",
    "MWEncryptedBackupsFirstRestoreUpsellTime",
    "MWEncryptedBackupsLocalStorageEntryEnum",
    "ODS",
    "QPLMemoryUtils",
    "QPLUserFlow",
    "Random",
    "ReStorePersistence",
    "ReStoreTabNotifier",
    "WMIQplFlow",
    "WebSession",
    "getErrorSafe",
    "promiseDone",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = o("CurrentMessengerUser").getIDorEIMU(),
      d =
        r("ReStoreTabNotifier") == null
          ? void 0
          : r("ReStoreTabNotifier")("mwChat-" + c),
      m = null,
      p = !1,
      _ = !1,
      f = o("EBLogger").EBLogger().tags(["EBSM", "Pesistence", "MainThread"]);
    function g(e, t, n) {
      var r = e.get(t);
      if (r !== void 0) return r;
      var o = n();
      return (e.set(t, o), o);
    }
    function h(t) {
      var n = Promise.resolve(),
        a = "flushChangesV2",
        i = new Map();
      function l(e) {
        return g(i, e, function () {
          return new Map();
        });
      }
      var c = o(
        "MWEncryptedBackupsFirstRestoreUpsellTime",
      ).getFirstRestoreUpsellTime();
      (r("QPLUserFlow").start(r("qpl")._(521481876, "1407"), {
        annotations: {
          string: {
            ebSessionIdentifier: c,
            sessionTabId: o("WebSession").getId(),
          },
        },
      }),
        (u || (u = o("ODS"))).bumpEntityKey(
          r("MWEBODSCategory"),
          r("MWEBODSEntityName.enum").MW_EBSM_HYDRATION,
          r("MWEBODSEntityKey.enum").START,
        ),
        o("QPLMemoryUtils").logMemoryForQPLStart(
          r("qpl")._(521481876, "1407"),
        ));
      async function h() {
        try {
          (await t.rehydrateEBSMFromEBDB(l),
            o("QPLMemoryUtils").logMemoryForQPLEnd(
              r("qpl")._(521481876, "1407"),
            ),
            r("QPLUserFlow").endSuccess(r("qpl")._(521481876, "1407")),
            (u || (u = o("ODS"))).bumpEntityKey(
              r("MWEBODSCategory"),
              r("MWEBODSEntityName.enum").MW_EBSM_HYDRATION,
              r("MWEBODSEntityKey.enum").SUCCESS,
            ));
        } catch (t) {
          r("QPLUserFlow").addPoint(
            r("qpl")._(521481876, "1407"),
            "EBSM_HYDRATION_FAILED",
          );
          var n = r("getErrorSafe")(t);
          (f.MUSTFIX(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "An error occured in EBSM hydration when loading EB data: ",
                "",
              ])),
            n.message,
          ),
            r("QPLUserFlow").endFailure(
              r("qpl")._(521481876, "1407"),
              "Hydration failed.",
            ),
            (u || (u = o("ODS"))).bumpEntityKey(
              r("MWEBODSCategory"),
              r("MWEBODSEntityName.enum").MW_EBSM_HYDRATION,
              r("MWEBODSEntityKey.enum").FAIL,
            ));
        }
      }
      return (
        (m = h()),
        d == null ||
          d.onEventReceive("flushChangesV2", function (e) {
            var n = e.changeSet,
              i = new Map();
            if (
              (n.forEach(function (e, t) {
                i.set(t, { toAdd: [], toDelete: [] });
                var n = l(t);
                e.forEach(function (e, r) {
                  if (
                    o("ReStorePersistence").isDeletedValue(
                      e,
                      o("ReStorePersistence").sentinelDeleted,
                    )
                  ) {
                    var a;
                    (a = i.get(t)) == null || a.toDelete.push(n.get(r));
                  } else {
                    var l;
                    (l = i.get(t)) == null || l.toAdd.push(e);
                  }
                });
              }),
              t.updateEBSM == null)
            ) {
              f.MUSTFIX(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "ebdbEbsmApi.updateEBSM is not defined",
                  ])),
              );
              return;
            }
            r("promiseDone")(t.updateEBSM(i, a));
          }),
        {
          flush: async function (n, i) {
            var e, s;
            if (
              n.size !== 0 &&
              (n.size > 0 &&
                n.forEach(function (e, t) {
                  e.size === 0 && n.delete(t);
                }),
              n.size !== 0)
            ) {
              var u =
                ((e = i.actionSource) == null ? void 0 : e.type) ===
                  "user_initiated" &&
                ((s = i.actionSource) == null ? void 0 : s.source) === a;
              if (u) {
                n.forEach(function (e, t) {
                  var n = l(t);
                  e.forEach(function (e, t) {
                    o("ReStorePersistence").isDeletedValue(
                      e,
                      o("ReStorePersistence").sentinelDeleted,
                    )
                      ? n.delete(t)
                      : n.set(t, e);
                  });
                });
                return;
              }
              var c = new Map();
              (n.forEach(function (e, t) {
                c.set(t, { toAdd: [], toDelete: [] });
                var n = l(t);
                e.forEach(function (e, r) {
                  if (
                    o("ReStorePersistence").isDeletedValue(
                      e,
                      o("ReStorePersistence").sentinelDeleted,
                    )
                  ) {
                    var a;
                    ((a = c.get(t)) == null || a.toDelete.push(n.get(r)),
                      n.delete(r));
                  } else {
                    var i;
                    ((i = c.get(t)) == null || i.toAdd.push(e), n.set(r, e));
                  }
                });
              }),
                d == null ||
                  d.postMessage("flushChangesV2", {
                    changeSet: n,
                    fromVersion: "",
                    sentinelDeleted: o("ReStorePersistence").sentinelDeleted,
                    version: "",
                  }));
              var p = o("Random").uint32(),
                _ = Array.from(n.keys()),
                f = o("WMIQplFlow").startQplFlow(
                  r("qpl")._(521485383, "2200"),
                  {
                    annotations: {
                      bool: { ebsmv2: !0 },
                      string_array: { tables: _ },
                    },
                    instanceKey: p,
                  },
                );
              try {
                await m;
              } catch (e) {
                throw (f.endFail("rehydration_failed"), e);
              }
              try {
                await t.flushEBSMtoEBDB(c);
              } catch (e) {
                f.endFail("flush_failed");
                return;
              }
              f.endSuccess();
            }
          },
          get: function (t, n, r) {
            var e = l(n);
            return p
              ? e.get(r)
              : m == null
                ? Promise.reject("rehydration is not complete")
                : m.then(function () {
                    return ((p = !0), e.get(r));
                  });
          },
          logError: function (n, a, i, l) {
            if (
              ((u || (u = o("ODS"))).bumpEntityKey(
                r("MWEBODSCategory"),
                r("MWEBODSEntityName.enum").MW_EBSM_RESTORE_PERSISTENCE_ERROR,
                n,
              ),
              i === "dbCorruption")
            ) {
              var e, s;
              (u || (u = o("ODS"))).bumpEntityKey(
                r("MWEBODSCategory"),
                r("MWEBODSEntityName.enum").MW_EBSM_CORRUPTION,
                n,
              );
              var c =
                "Got unexpected undefined in ebsm, mode: " +
                a +
                ", table: " +
                n +
                ", id: " +
                ((e = l == null ? void 0 : l.id) != null ? e : "") +
                ", deletedInThisTxn: " +
                ((s = l == null ? void 0 : l.deletedInThisTxn) != null
                  ? s
                  : "") +
                ". Deleting EBSM db";
              f.mustfix(c);
              var d = o("Random").uint32();
              (o("MAWUnrecoverableDbErrors").setError(
                new (o("MAWUnrecoverableDbErrors").EbsmHydrationError)(
                  c,
                  !0,
                  d,
                  n,
                ),
                function () {
                  r("promiseDone")(t.clearEbStores(), function () {
                    (u || (u = o("ODS"))).bumpEntityKey(
                      r("MWEBODSCategory"),
                      r("MWEBODSEntityName.enum").MW_EBSM_CORRUPTION,
                      "db_deleted.main_thread",
                    );
                  });
                },
              ),
                _ ||
                  ((_ = !0),
                  o("MWEBUseLocalStorage").mwEBCreateLocalStorageEntry(
                    r("MWEncryptedBackupsLocalStorageEntryEnum")
                      .EBSM_CORRUPTION_WIPE,
                    "full",
                  )));
            }
          },
          queueCommitWork: void 0,
          runExclusively: function (t) {
            return new Promise(function (e, r) {
              n = n.then(async function () {
                var n = await t(),
                  o = n[0],
                  a = n[1];
                try {
                  e(await o());
                } catch (e) {
                  r(e);
                }
              });
            });
          },
          shouldApplySync: function () {
            return !1;
          },
          shouldInline: function (t, n) {
            return !1;
          },
          shouldSync: function (t, n) {
            return t !== "notifyInMemoryTable";
          },
          tabTablesNotifier: function () {
            return d;
          },
          types: ["ephemeral"],
          uniqueId: "",
        }
      );
    }
    l.default = h;
  },
  98,
);
