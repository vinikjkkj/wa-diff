__d(
  "WAWebSyncdWamUtils",
  [
    "WABase64",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebGetSyncKey",
    "WAWebSchemaSyncActions",
    "WAWebSyncdActionUtils",
    "WAWebWamEnumMutationCountBucket",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = new Map(),
            t = yield o("WAWebSchemaSyncActions").getSyncActionsTable().all();
          return (
            t.forEach(function (t) {
              var n,
                r =
                  o("WAWebSyncdActionUtils").getMutationNameFromIndex(
                    t.collection,
                    t.index,
                  ) || "no-mutation-name",
                a =
                  (n = e.get(r)) != null
                    ? n
                    : {
                        action: r,
                        applied: 0,
                        invalid: 0,
                        orphan: 0,
                        unsupported: 0,
                        failed: 0,
                      };
              e: {
                if (
                  t.actionState === o("WASyncdConst").SyncActionState.Success ||
                  t.actionState === o("WASyncdConst").SyncActionState.Skipped
                ) {
                  a.applied++;
                  break e;
                }
                if (
                  t.actionState === o("WASyncdConst").SyncActionState.Malformed
                ) {
                  a.invalid++;
                  break e;
                }
                if (
                  t.actionState === o("WASyncdConst").SyncActionState.Orphan
                ) {
                  a.orphan++;
                  break e;
                }
                if (
                  t.actionState ===
                  o("WASyncdConst").SyncActionState.Unsupported
                ) {
                  a.unsupported++;
                  break e;
                }
                if (
                  t.actionState === o("WASyncdConst").SyncActionState.Failed
                ) {
                  a.failed++;
                  break e;
                }
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    t.actionState,
                );
              }
              e.set(r, a);
            }),
            e
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      if (e < 0) throw r("err")("cannot convert negative number to a bucket");
      return e === 0
        ? o("WAWebWamEnumMutationCountBucket").MUTATION_COUNT_BUCKET.ZERO
        : e === 1
          ? o("WAWebWamEnumMutationCountBucket").MUTATION_COUNT_BUCKET.ONE
          : e < 10
            ? o("WAWebWamEnumMutationCountBucket").MUTATION_COUNT_BUCKET.LT10
            : e < 100
              ? o("WAWebWamEnumMutationCountBucket").MUTATION_COUNT_BUCKET.LT100
              : e < 500
                ? o("WAWebWamEnumMutationCountBucket").MUTATION_COUNT_BUCKET
                    .LT500
                : e < 1e3
                  ? o("WAWebWamEnumMutationCountBucket").MUTATION_COUNT_BUCKET
                      .LT1K
                  : e < 5e3
                    ? o("WAWebWamEnumMutationCountBucket").MUTATION_COUNT_BUCKET
                        .LT5K
                    : o("WAWebWamEnumMutationCountBucket").MUTATION_COUNT_BUCKET
                        .GTE5K;
    }
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSchemaSyncActions")
            .getSyncActionsTable()
            .get('["primary_version","session_start"]');
          return e == null ? void 0 : e.timestamp;
        })),
        d.apply(this, arguments)
      );
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebGetSyncKey").getAllSyncKeysInTransaction(),
            t = yield o("WAWebSchemaSyncActions").getSyncActionsTable().all(),
            n = yield c(),
            r =
              n == null
                ? void 0
                : Math.round(
                    (o("WATimeUtils").unixTimeMs() - n) / (1e3 * 3600 * 24),
                  );
          return _(e, t, r);
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      var r = t.map(function (e) {
          return o("WABase64").encodeB64(e.keyId);
        }),
        a = Array.from(new Set(r)),
        i = new Map();
      for (var l of r) i.set(l, (i.get(l) || 0) + 1);
      var s = Array.from(i.values()).sort(),
        u = s.length,
        c = Math.floor(u * 0.8) - 1,
        d = Math.floor(u * 0.95) - 1;
      return {
        totalKeyCount: e.length,
        keysUsedInSnapshotCount: a.length,
        p80MuationsPerKey: s[c],
        p95MuationsPerKey: s[d],
        syncdSessionLengthDays: n,
      };
    }
    ((l.generateActionStatCounts = e),
      (l.convertToBucket = u),
      (l.getKeyStats = m),
      (l.getKeyStatsInternal = _));
  },
  98,
);
