__d(
  "WAWebAeaConsumerBackfillTask",
  [
    "WALogger",
    "WATaskScheduler",
    "WATimeUtils",
    "WAWebAeaConsumerBackfill",
    "WAWebAeaConsumerBackfillRunHistory",
    "WAWebAeaTelemetry",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 3 * o("WATimeUtils").MINUTE_SECONDS,
      m = 5 * o("WATimeUtils").MINUTE_SECONDS;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n;
          if (o("WAWebAeaConsumerBackfillRunHistory").isAeaBackfillCompleted())
            return o("WATaskScheduler").DO_NOT_RESCHEDULE;
          if (
            ((n = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
              o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
                .AEA_CONSUMER_BACKFILL_SCHEDULED_VERSION,
            )) != null
              ? n
              : 0) <
            o("WAWebAeaConsumerBackfillRunHistory")
              .AEA_CONSUMER_BACKFILL_VERSION
          )
            return (
              yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
                  .AEA_CONSUMER_BACKFILL_SCHEDULED_VERSION,
                o("WAWebAeaConsumerBackfillRunHistory")
                  .AEA_CONSUMER_BACKFILL_VERSION,
              ),
              h()
            );
          var r = yield y();
          if (r.status === "complete")
            return (
              yield f(),
              o("WAWebAeaTelemetry").reportAeaBackfillComplete(),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea][backfill] recorded completion version=",
                    "",
                  ])),
                String(
                  o("WAWebAeaConsumerBackfillRunHistory")
                    .AEA_CONSUMER_BACKFILL_VERSION,
                ),
              ),
              o("WATaskScheduler").DO_NOT_RESCHEDULE
            );
          var a = o(
            "WAWebAeaConsumerBackfillRunHistory",
          ).readAeaBackfillRunHistory();
          if (
            r.status === "incomplete" &&
            o(
              "WAWebAeaConsumerBackfillRunHistory",
            ).hasAeaBackfillReachedRunLimit(a)
          ) {
            var i = r.incompleteReason,
              l = r.leftUnsetCount,
              u = r.unconfirmedCount;
            return (
              yield f(),
              o("WAWebAeaTelemetry").reportAeaBackfillExhausted(
                i != null
                  ? i
                  : o("WAWebAeaConsumerBackfillRunHistory").AeaBackfillRunResult
                      .ERROR,
                u,
                l,
              ),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea][backfill] stopped after runs=",
                    " incomplete_runs=",
                    " version=",
                    " unconfirmed=",
                    " left_unset=",
                    "",
                  ])),
                String(a.attemptCount),
                String(a.decisiveIncompleteCount),
                String(
                  o("WAWebAeaConsumerBackfillRunHistory")
                    .AEA_CONSUMER_BACKFILL_VERSION,
                ),
                String(u != null ? u : "none"),
                String(l != null ? l : "none"),
              ),
              o("WATaskScheduler").DO_NOT_RESCHEDULE
            );
          }
          return o("WATimeUtils").DAY_SECONDS;
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
              .AEA_CONSUMER_BACKFILL_COMPLETED_VERSION,
            o("WAWebAeaConsumerBackfillRunHistory")
              .AEA_CONSUMER_BACKFILL_VERSION,
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h() {
      var e = o("WAWebUserPrefsMultiDevice").getPairingTimestamp();
      if (
        e != null &&
        o("WATimeUtils").unixTime() - e < o("WATimeUtils").HOUR_SECONDS
      )
        return m;
      var t = self.crypto.getRandomValues(new Uint32Array(1))[0];
      return d + (t % (o("WATimeUtils").DAY_SECONDS - d + 1));
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          try {
            e = yield o("WAWebAeaConsumerBackfill").runAeaConsumerBackfill();
          } catch (t) {
            (o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea][backfill] run failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("aea-consumer-backfill-failed"),
              (e = {
                status: "incomplete",
                incompleteReason: o("WAWebAeaConsumerBackfillRunHistory")
                  .AeaBackfillRunResult.ERROR,
              }));
          }
          return (e.status !== "disabled" && (yield b(e)), e);
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
          var t = e.accountCount,
            n = e.incompleteReason,
            a = e.leftUnsetCount,
            i = e.status,
            l = e.suspectedCount,
            s = e.unconfirmedCount;
          try {
            yield o("WAWebAeaConsumerBackfillRunHistory").recordAeaBackfillRun({
              result:
                i === "complete"
                  ? o("WAWebAeaConsumerBackfillRunHistory").AeaBackfillRunResult
                      .COMPLETE
                  : n != null
                    ? n
                    : o("WAWebAeaConsumerBackfillRunHistory")
                        .AeaBackfillRunResult.ERROR,
              unconfirmedCount: s,
              leftUnsetCount: a,
              suspectedCount: l,
              accountCount: t,
            });
          } catch (e) {
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea][backfill] failed to record the run",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("aea-consumer-backfill-run-record-failed");
          }
        })),
        v.apply(this, arguments)
      );
    }
    l.runAeaConsumerBackfillTask = p;
  },
  98,
);
