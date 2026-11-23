__d(
  "WAWebPQSessionUpgradeJob",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebApiVerifiedBusinessName",
    "WAWebKyberPreKeyStore",
    "WAWebPQSessionUpgradeAttemptLogger",
    "WAWebPQSessionUpgradeSessionEstablisher",
    "WAWebPrivacyModeSystemMsg",
    "WAWebSchemaSession",
    "WAWebSessionScope",
    "WAWebSignalCommonUtils",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 500,
      c = 4,
      d = 15 * o("WATimeUtils").MINUTE_SECONDS,
      m = "\uFFFF";
    async function p(t) {
      var n = t.maxDevices,
        a = t.periodDays;
      if (!(await o("WAWebKyberPreKeyStore").isPQMigrated())) return d;
      var i = await _(Math.min(n, u)),
        l = i.cursor,
        s = i.wids;
      if (
        (await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
          o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.PQ_SESSION_UPGRADE_CURSOR,
          l,
        ),
        s.length === 0)
      )
        return o("WATimeUtils").DAY_SECONDS;
      try {
        var c = await o(
          "WAWebPQSessionUpgradeSessionEstablisher",
        ).establishPQSessionUpgrades(s);
        o("WAWebPQSessionUpgradeAttemptLogger").logPQSessionUpgradeAttempt(
          s.length,
          c,
        );
      } catch (t) {
        (o("WAWebPQSessionUpgradeAttemptLogger").logPQSessionUpgradeFailure(
          s.length,
          t,
        ),
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "PQ session upgrade failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("pq-session-upgrade-failed"));
      }
      return a * o("WATimeUtils").DAY_SECONDS;
    }
    async function _(e) {
      var t,
        n = e * c,
        r = await o("WAWebSchemaSession")
          .getTable()
          .betweenKeys(
            ["address"],
            (t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
              o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
                .PQ_SESSION_UPGRADE_CURSOR,
            )) != null
              ? t
              : "",
            m,
            { limit: n, returnKeyType: "primary_key" },
          ),
        a = (await h(await g(r.flatMap(f)))).slice(0, e);
      return a.length === e
        ? {
            wids: a,
            cursor: o("WAWebSignalCommonUtils").createSignalAddress(a[e - 1]),
          }
        : { wids: a, cursor: r.length === n ? r[n - 1] : "" };
    }
    function f(e) {
      if (!e.endsWith("@lid.0")) return [];
      try {
        return [o("WAWebWidFactory").createDeviceWidOrThrow(e.slice(0, -2))];
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "PQ session upgrade skipped an invalid session address",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("pq-session-upgrade-invalid-address", { sampling: 0.01 }),
          []
        );
      }
    }
    async function g(e) {
      var t = await o(
        "WAWebApiVerifiedBusinessName",
      ).bulkGetVerifiedBusinessNameRecordsLidAware(
        e.map(o("WAWebWidFactory").asUserLidOrThrow),
      );
      return e.filter(function (e, n) {
        var r,
          a = (r = t[n]) == null ? void 0 : r.privacyMode;
        return (
          a == null ||
          o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(
            o("WAWebApiVerifiedBusinessName").convertPrivacyModeFromStorageType(
              a,
            ),
          ) === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.E2EE
        );
      });
    }
    async function h(e) {
      var t = e.map(function (e) {
          return o("WAWebSignalCommonUtils").createSignalAddress(
            e,
            o("WAWebSessionScope").SessionScope.PQ,
          );
        }),
        n = new Set(
          await o("WAWebSchemaSession")
            .getTable()
            .anyOfPrimaryKeys(["address"], t),
        );
      return e.filter(function (e, r) {
        return !n.has(t[r]);
      });
    }
    l.runPQSessionUpgradeJob = p;
  },
  98,
);
