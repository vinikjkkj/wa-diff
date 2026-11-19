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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 500,
      c = 4,
      d = 15 * o("WATimeUtils").MINUTE_SECONDS,
      m = "\uFFFF";
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.maxDevices,
            n = e.periodDays;
          if (!(yield o("WAWebKyberPreKeyStore").isPQMigrated())) return d;
          var a = yield f(Math.min(t, u)),
            i = a.cursor,
            l = a.wids;
          if (
            (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
              o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
                .PQ_SESSION_UPGRADE_CURSOR,
              i,
            ),
            l.length === 0)
          )
            return o("WATimeUtils").DAY_SECONDS;
          try {
            var c = yield o(
              "WAWebPQSessionUpgradeSessionEstablisher",
            ).establishPQSessionUpgrades(l);
            o("WAWebPQSessionUpgradeAttemptLogger").logPQSessionUpgradeAttempt(
              l.length,
              c,
            );
          } catch (e) {
            (o("WAWebPQSessionUpgradeAttemptLogger").logPQSessionUpgradeFailure(
              l.length,
              e,
            ),
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "PQ session upgrade failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("pq-session-upgrade-failed"));
          }
          return n * o("WATimeUtils").DAY_SECONDS;
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e * c,
            r = yield o("WAWebSchemaSession")
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
            a = (yield b(yield y(r.flatMap(h)))).slice(0, e);
          return a.length === e
            ? {
                wids: a,
                cursor: o("WAWebSignalCommonUtils").createSignalAddress(
                  a[e - 1],
                ),
              }
            : { wids: a, cursor: r.length === n ? r[n - 1] : "" };
        })),
        g.apply(this, arguments)
      );
    }
    function h(t) {
      if (!t.endsWith("@lid.0")) return [];
      try {
        return [o("WAWebWidFactory").createDeviceWidOrThrow(t.slice(0, -2))];
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "PQ session upgrade skipped an invalid session address",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("pq-session-upgrade-invalid-address", { sampling: 0.01 }),
          []
        );
      }
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
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
                o(
                  "WAWebApiVerifiedBusinessName",
                ).convertPrivacyModeFromStorageType(a),
              ) === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.E2EE
            );
          });
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.map(function (e) {
              return o("WAWebSignalCommonUtils").createSignalAddress(
                e,
                o("WAWebSessionScope").SessionScope.PQ,
              );
            }),
            n = new Set(
              yield o("WAWebSchemaSession")
                .getTable()
                .anyOfPrimaryKeys(["address"], t),
            );
          return e.filter(function (e, r) {
            return !n.has(t[r]);
          });
        })),
        v.apply(this, arguments)
      );
    }
    l.runPQSessionUpgradeJob = p;
  },
  98,
);
