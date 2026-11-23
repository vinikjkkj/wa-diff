__d(
  "WAWebLogHistorySyncStatusAfterPairingJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebUserPrefsHistorySync",
    "WAWebWamEnumActiveTimeAfterPairing",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = r("requireDeferred")("WAWebCommitHistorySyncStatusData").__setRef(
        "WAWebLogHistorySyncStatusAfterPairingJob",
      );
    function g(t, n) {
      var r = (o("WATimeUtils").unixTime() - t) / 60;
      return r < 5
        ? (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] skip status log: too soon after pairing",
              ])),
          ),
          Promise.resolve())
        : o("WAWebOrchestratorNonPersistedJob")
            .createNonPersistedJob(
              "logHistorySyncStatusAfterPairing",
              function (e) {
                return h(e.timeAfterPairingMins, e.loggingCount);
              },
              { priority: o("WAJobOrchestratorTypes").JobPriority.LOW },
            )
            .waitUntilCompleted({ timeAfterPairingMins: r, loggingCount: n });
    }
    async function h(e, t) {
      if (t >= 5) {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] skip status log: logged 5+ times",
            ])),
        );
        return;
      }
      if (e >= 60) {
        (o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] log status for 60 minutes after pairing",
            ])),
        ),
          await y(
            o("WAWebWamEnumActiveTimeAfterPairing").ACTIVE_TIME_AFTER_PAIRING
              .MINS_60,
          ),
          o(
            "WAWebUserPrefsHistorySync",
          ).setHistorySyncStatusAfterPairingLoggingCount(5));
        return;
      }
      if (t < 4 && e >= 40) {
        (o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] log status for 40 minutes after pairing",
            ])),
        ),
          await y(
            o("WAWebWamEnumActiveTimeAfterPairing").ACTIVE_TIME_AFTER_PAIRING
              .MINS_40,
          ),
          o(
            "WAWebUserPrefsHistorySync",
          ).setHistorySyncStatusAfterPairingLoggingCount(4));
        return;
      }
      if (t < 3 && e >= 20) {
        (o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] log status for 20 minutes after pairing",
            ])),
        ),
          await y(
            o("WAWebWamEnumActiveTimeAfterPairing").ACTIVE_TIME_AFTER_PAIRING
              .MINS_20,
          ),
          o(
            "WAWebUserPrefsHistorySync",
          ).setHistorySyncStatusAfterPairingLoggingCount(3));
        return;
      }
      if (t < 2 && e >= 10) {
        (o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] log status for 10 minutes after pairing",
            ])),
        ),
          await y(
            o("WAWebWamEnumActiveTimeAfterPairing").ACTIVE_TIME_AFTER_PAIRING
              .MINS_10,
          ),
          o(
            "WAWebUserPrefsHistorySync",
          ).setHistorySyncStatusAfterPairingLoggingCount(2));
        return;
      }
      if (t < 1 && e >= 5) {
        (o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] log status for 5 minutes after pairing",
            ])),
        ),
          await y(
            o("WAWebWamEnumActiveTimeAfterPairing").ACTIVE_TIME_AFTER_PAIRING
              .MINS_5,
          ),
          o(
            "WAWebUserPrefsHistorySync",
          ).setHistorySyncStatusAfterPairingLoggingCount(1));
        return;
      }
      o("WALogger").LOG(
        _ ||
          (_ = babelHelpers.taggedTemplateLiteralLoose([
            "[history sync] do not log status as no requirment meets",
          ])),
      );
    }
    async function y(e) {
      var t = await f.load(),
        n = t.commitHistorySyncStatusData;
      return n(e);
    }
    ((l.logHistorySyncStatusAfterPairingJob = g),
      (l.logHistorySyncStatusAfterPairing = h),
      (l.commitHistorySyncStatusData = y));
  },
  98,
);
