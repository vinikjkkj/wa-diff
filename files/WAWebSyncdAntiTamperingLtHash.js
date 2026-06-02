__d(
  "WAWebSyncdAntiTamperingLtHash",
  [
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
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(e) {
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
    async function d(t, n, r) {
      var a = o("WAWebCurrentUser").isEmployee() ? 900 : r,
        i = await o("WAWebRunInTransaction").runInTransaction(
          { SyncActionStore: !0, CollectionVersionStore: !0 },
          async function (e) {
            var t = e.CollectionVersionStore,
              r = e.SyncActionStore,
              o = n == null ? await t.getAll() : [await t.get(n)];
            return Promise.all(
              o.filter(Boolean).map(async function (e) {
                var t = e.collection,
                  n = e.ltHash,
                  o = await r.getByCollections([t]);
                return { collection: t, ltHash: n, mutations: o };
              }),
            );
          },
        ),
        l = 0;
      if (
        (i.map(function (e) {
          var t = e.collection,
            n = e.ltHash,
            r = e.mutations;
          l += r.length;
        }),
        a !== void 0 && l > a)
      )
        return {
          isLtHashConsistent: void 0,
          scratchLtHash: void 0,
          cachedLtHash: void 0,
        };
      var s = null,
        u = null,
        d = !0,
        m = [];
      return (
        await Promise.all(
          i.map(async function (e) {
            var t = e.collection,
              n = e.ltHash,
              r = e.mutations,
              a = await c(r);
            (s == null && (s = a),
              u == null && (u = n),
              o("WACryptoUtils").arrayBuffersEqual(n, a) ||
                (l > 0 && ((d = !1), m.push(t))));
          }),
        ),
        m.length > 0 &&
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
              m.length,
              m.slice(0, 3),
            )
            .verbose(),
        { isLtHashConsistent: d, scratchLtHash: s, cachedLtHash: u }
      );
    }
    async function m(e, t, n, r) {
      r === void 0 && (r = 400);
      var a = await d(n, e, r),
        i = a.cachedLtHash,
        l = a.isLtHashConsistent,
        c = a.scratchLtHash,
        m =
          c == null
            ? ""
            : o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(c).slice(-16),
        p =
          i == null
            ? ""
            : o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(i).slice(-16);
      if (l === !1) {
        (await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
          e,
          "[" +
            n +
            "] lthash first time inconsistent. scratchLtHash: " +
            m +
            ", cachedLtHash: " +
            p +
            ", context: " +
            t,
        ),
          await o("WAWebSyncdDbCallbacksApi").printSyncdLog(e));
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
          await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
            e,
            "lthash consistent. scratchLtHash: " +
              m +
              ", cachedLtHash: " +
              p +
              ", context: " +
              t,
          ),
          !1
        );
      await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
        e,
        "lthash unknown if consistent. scratchLtHash: " +
          m +
          ", cachedLtHash: " +
          p +
          ", context: " +
          t,
      );
    }
    function p() {
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
    async function _() {
      var e = o(
        "WAWebLid1X1MigrationGating",
      ).Lid1X1MigrationUtils.isPureLidSyncDSession();
      if (e != null)
        return e
          ? o("WAWebWamEnumIsPureSyncdSessionEnum").IS_PURE_SYNCD_SESSION_ENUM
              .YES
          : o("WAWebWamEnumIsPureSyncdSessionEnum").IS_PURE_SYNCD_SESSION_ENUM
              .NO;
      var t = await o("WAWebSyncdDb").getSyncActionsRows(
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
    }
    ((l.checkLtHash = d),
      (l.reportCollectionInconsistency = m),
      (l.getLidMigrationStage = p),
      (l.getPureSyncDSessionDetails = _));
  },
  98,
);
