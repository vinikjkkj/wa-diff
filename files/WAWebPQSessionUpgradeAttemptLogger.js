__d(
  "WAWebPQSessionUpgradeAttemptLogger",
  [
    "WAWebBackendErrors",
    "WAWebFalcoCanonicalAppVersion",
    "WAWebFalcoCanonicalMdId",
    "WAWebPostPrekeysDepletionMetric",
    "WAWebWamEnumPrekeysFetchContext",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("requireDeferred")("PqSessionUpgradeAttemptFalcoEvent").__setRef(
      "WAWebPQSessionUpgradeAttemptLogger",
    );
    function s(e, t) {
      (c({
        devicesRequested: e,
        devicesWithPqPrekey: e - t.unavailableWids.length,
        sessionsUpgraded: t.upgradedWids.length,
        prekeysFetchErrorCode: null,
      }),
        o("WAWebPostPrekeysDepletionMetric").maybePostPrekeysDepletionMetric({
          count: t.depletedPrekeyCount,
          prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext")
            .PREKEYS_FETCH_CONTEXT.PQ_SESSION_UPGRADE,
          messageType: null,
          deviceSizeBucket: null,
        }));
    }
    function u(e, t) {
      t instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
        c({
          devicesRequested: e,
          devicesWithPqPrekey: 0,
          sessionsUpgraded: 0,
          prekeysFetchErrorCode: t.statusCode,
        });
    }
    function c(t) {
      var n = t.devicesRequested,
        o = t.devicesWithPqPrekey,
        a = t.prekeysFetchErrorCode,
        i = t.sessionsUpgraded;
      e.onReady(function (e) {
        e.log(function () {
          return {
            app_version: r("WAWebFalcoCanonicalAppVersion")(),
            devices_requested: d(n),
            devices_with_pq_prekey: d(o),
            md_id: m(r("WAWebFalcoCanonicalMdId")()),
            sessions_upgraded: d(i),
            prekeys_fetch_error_code: m(a),
          };
        });
      });
    }
    function d(e) {
      return String(e);
    }
    function m(e) {
      return e == null ? void 0 : d(e);
    }
    ((l.logPQSessionUpgradeAttempt = s), (l.logPQSessionUpgradeFailure = u));
  },
  98,
);
