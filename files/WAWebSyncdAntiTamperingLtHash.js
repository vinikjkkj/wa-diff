__d(
  "WAWebSyncdAntiTamperingLtHash",
  [
    "Promise",
    "WACryptoLtHash",
    "WACryptoUtils",
    "WAJids",
    "WALogger",
    "WASyncdConst",
    "WAWebCurrentUser",
    "WAWebLid1X1MigrationGating",
    "WAWebRunInTransaction",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdDb",
    "WAWebSyncdDbCallbacksApi",
    "WAWebUserPrefsTypes",
    "WAWebWamEnumIsPureSyncdSessionEnum",
    "WAWebWamEnumLidMigrationStageEnum",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c;
    function d(e) {
      var t = new Map(
        e.map(function (e) {
          return [
            o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(e.indexMac),
            e.valueMac,
          ];
        }),
      );
      return o("WACryptoLtHash").LT_HASH_ANTI_TAMPERING.add(
        o("WACryptoLtHash").EMPTY_LT_HASH,
        Array.from(t.values()),
      );
    }
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          var i = o("WAWebCurrentUser").isEmployee() ? 900 : a,
            l = yield o("WAWebRunInTransaction").runInTransaction(
              { SyncActionStore: !0, CollectionVersionStore: !0 },
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = e.CollectionVersionStore,
                      o = e.SyncActionStore,
                      a = r == null ? yield t.getAll() : [yield t.get(r)];
                    return (c || (c = n("Promise"))).all(
                      a.filter(Boolean).map(
                        (function () {
                          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                            function* (e) {
                              var t = e.collection,
                                n = e.ltHash,
                                r = yield o.getByCollections([t]);
                              return { collection: t, ltHash: n, mutations: r };
                            },
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      ),
                    );
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
            s = 0;
          if (
            (l.map(function (e) {
              var t = e.collection,
                n = e.ltHash,
                r = e.mutations;
              s += r.length;
            }),
            i !== void 0 && s > i)
          )
            return {
              isLtHashConsistent: void 0,
              scratchLtHash: void 0,
              cachedLtHash: void 0,
            };
          var u = null,
            m = null,
            p = !0,
            _ = [];
          return (
            yield (c || (c = n("Promise"))).all(
              l.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = e.collection,
                        n = e.ltHash,
                        r = e.mutations,
                        a = yield d(r);
                      (u == null && (u = a),
                        m == null && (m = n),
                        o("WACryptoUtils").arrayBuffersEqual(n, a) ||
                          (s > 0 && ((p = !1), _.push(t))));
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            _.length > 0 &&
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[",
                      "] syncd: failed LtHash check for ",
                      " collections => ",
                      "",
                    ])),
                  t,
                  _.length,
                  _.slice(0, 3),
                )
                .verbose(),
            { isLtHashConsistent: p, scratchLtHash: u, cachedLtHash: m }
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n, r) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            r === void 0 && (r = 400);
            var a = yield m(n, e, r),
              i = a.cachedLtHash,
              l = a.isLtHashConsistent,
              c = a.scratchLtHash,
              d =
                c == null
                  ? ""
                  : o("WAWebSyncdCryptoUtils")
                      .arrayBufferToHexPadded(c)
                      .slice(-16),
              p =
                i == null
                  ? ""
                  : o("WAWebSyncdCryptoUtils")
                      .arrayBufferToHexPadded(i)
                      .slice(-16);
            if (l === !1) {
              (yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                e,
                "[" +
                  n +
                  "] lthash first time inconsistent. scratchLtHash: " +
                  d +
                  ", cachedLtHash: " +
                  p +
                  ", context: " +
                  t,
              ),
                yield o("WAWebSyncdDbCallbacksApi").printSyncdLog(e));
              var _ = "syncd: lthash inconsistent";
              return (
                e === o("WASyncdConst").CollectionName.CriticalBlock ||
                o("WAWebCurrentUser").isEmployee()
                  ? o("WALogger")
                      .ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " first time for ",
                            "",
                          ])),
                        _,
                        e,
                      )
                      .verbose()
                      .sendLogs(_)
                  : o("WALogger")
                      .ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " first time for ",
                            "",
                          ])),
                        _,
                        e,
                      )
                      .verbose()
                      .sendLogs(_, { sampling: 0.01 }),
                !0
              );
            } else if (l === !0)
              return (
                yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                  e,
                  "lthash consistent. scratchLtHash: " +
                    d +
                    ", cachedLtHash: " +
                    p +
                    ", context: " +
                    t,
                ),
                !1
              );
            yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
              e,
              "lthash unknown if consistent. scratchLtHash: " +
                d +
                ", cachedLtHash: " +
                p +
                ", context: " +
                t,
            );
          },
        )),
        f.apply(this, arguments)
      );
    }
    function g() {
      return o(
        "WAWebLid1X1MigrationGating",
      ).Lid1X1MigrationUtils.isLidMigrated()
        ? o(
            "WAWebLid1X1MigrationGating",
          ).Lid1X1MigrationUtils.lidMigrationSource() ===
          o("WAWebUserPrefsTypes").LidMigrationSource.PEER
          ? o("WAWebWamEnumLidMigrationStageEnum").LID_MIGRATION_STAGE_ENUM
              .PEER_MIGRATED
          : o("WAWebWamEnumLidMigrationStageEnum").LID_MIGRATION_STAGE_ENUM
              .HISTORY_MIGRATED
        : o("WAWebWamEnumLidMigrationStageEnum").LID_MIGRATION_STAGE_ENUM
            .NOT_MIGRATED;
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o(
            "WAWebLid1X1MigrationGating",
          ).Lid1X1MigrationUtils.isPureLidSyncDSession();
          if (e != null)
            return e
              ? o("WAWebWamEnumIsPureSyncdSessionEnum")
                  .IS_PURE_SYNCD_SESSION_ENUM.YES
              : o("WAWebWamEnumIsPureSyncdSessionEnum")
                  .IS_PURE_SYNCD_SESSION_ENUM.NO;
          var t = yield o("WAWebSyncdDb").getSyncActionsRows(
              ["action"],
              [
                o("WASyncdConst").Actions.Archive,
                o("WASyncdConst").Actions.ClearChat,
                o("WASyncdConst").Actions.DeleteChat,
                o("WASyncdConst").Actions.DeleteMessageForMe,
                o("WASyncdConst").Actions.MarkChatAsRead,
                o("WASyncdConst").Actions.Mute,
                o("WASyncdConst").Actions.Pin,
                o("WASyncdConst").Actions.Star,
              ],
            ),
            n = t.find(function (e) {
              return e.index.includes(o("WAJids").WA_USER_DOMAIN);
            });
          if (n)
            return o("WAWebWamEnumIsPureSyncdSessionEnum")
              .IS_PURE_SYNCD_SESSION_ENUM.PROBABLY_NO;
          var r = t.find(function (e) {
            return e.index.includes(o("WAJids").LID_DOMAIN);
          });
          return r
            ? o("WAWebWamEnumIsPureSyncdSessionEnum").IS_PURE_SYNCD_SESSION_ENUM
                .PROBABLY_YES
            : o("WAWebWamEnumIsPureSyncdSessionEnum").IS_PURE_SYNCD_SESSION_ENUM
                .UNKNOWN;
        })),
        y.apply(this, arguments)
      );
    }
    ((l.checkLtHash = m),
      (l.reportCollectionInconsistency = _),
      (l.getLidMigrationStage = g),
      (l.getPureSyncDSessionDetails = h));
  },
  98,
);
