__d(
  "WAWebAeaConsumerBackfillStatus",
  [
    "WALogger",
    "WAWebAeaConsumerBackfillRunHistory",
    "WAWebAeaConsumerBackfillStatusOds",
    "WAWebAeaRollout",
    "WAWebFalcoCanonicalWebcPhonePlatform",
    "WaAeaConsumerBackfillDailyFalcoEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      var t, n, a;
      if (o("WAWebAeaRollout").isAeaMonitoringEnabled()) {
        var i = o(
            "WAWebAeaConsumerBackfillRunHistory",
          ).readAeaBackfillRunHistory(),
          l = i.attemptCount,
          s = i.lastRun,
          m = d(i);
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[aea][backfill] daily status=",
              " version=",
              " attempts=",
              " last_result=",
              " unconfirmed=",
              " left_unset=",
              "",
            ])),
          m,
          String(
            o("WAWebAeaConsumerBackfillRunHistory")
              .AEA_CONSUMER_BACKFILL_VERSION,
          ),
          String(l),
          (t = s == null ? void 0 : s.result) != null ? t : "none",
          String(
            (n = s == null ? void 0 : s.unconfirmedCount) != null ? n : "none",
          ),
          String(
            (a = s == null ? void 0 : s.leftUnsetCount) != null ? a : "none",
          ),
        ),
          o("WAWebAeaConsumerBackfillStatusOds").incrAeaBackfillStatusOds(m, l),
          r("WaAeaConsumerBackfillDailyFalcoEvent").log(function () {
            return {
              status: c(m),
              last_run_result: s != null ? s.result : null,
              attempt_count: String(l),
              backfill_version: String(
                o("WAWebAeaConsumerBackfillRunHistory")
                  .AEA_CONSUMER_BACKFILL_VERSION,
              ),
              left_unset_count: u(s == null ? void 0 : s.leftUnsetCount),
              unconfirmed_count: u(s == null ? void 0 : s.unconfirmedCount),
              suspected_count: u(s == null ? void 0 : s.suspectedCount),
              account_count: u(s == null ? void 0 : s.accountCount),
              webc_phone_platform: r("WAWebFalcoCanonicalWebcPhonePlatform")(),
            };
          }));
      }
    }
    function u(e) {
      return e != null ? String(e) : null;
    }
    function c(e) {
      return e ===
        o("WAWebAeaConsumerBackfillStatusOds").AeaBackfillStatus.DISABLED
        ? "disabled"
        : e ===
            o("WAWebAeaConsumerBackfillStatusOds").AeaBackfillStatus.NOT_STARTED
          ? "not_started"
          : e ===
              o("WAWebAeaConsumerBackfillStatusOds").AeaBackfillStatus.COMPLETED
            ? "completed"
            : e ===
                o("WAWebAeaConsumerBackfillStatusOds").AeaBackfillStatus
                  .EXHAUSTED
              ? "exhausted"
              : e ===
                    o("WAWebAeaConsumerBackfillStatusOds").AeaBackfillStatus
                      .CONTACTS_NOT_SYNCED ||
                  e ===
                    o("WAWebAeaConsumerBackfillStatusOds").AeaBackfillStatus
                      .PREKEY_FETCH_FAILED ||
                  e ===
                    o("WAWebAeaConsumerBackfillStatusOds").AeaBackfillStatus
                      .ERROR ||
                  e ===
                    o("WAWebAeaConsumerBackfillStatusOds").AeaBackfillStatus
                      .OFFLINE
                ? "in_progress"
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    function d(e) {
      var t;
      return o("WAWebAeaRollout").isAeaBackfillEnabled()
        ? o("WAWebAeaConsumerBackfillRunHistory").isAeaBackfillCompleted()
          ? o(
              "WAWebAeaConsumerBackfillRunHistory",
            ).hasAeaBackfillReachedRunLimit(e)
            ? o("WAWebAeaConsumerBackfillStatusOds").AeaBackfillStatus.EXHAUSTED
            : o("WAWebAeaConsumerBackfillStatusOds").AeaBackfillStatus.COMPLETED
          : (function (e) {
              if (e === void 0)
                return o("WAWebAeaConsumerBackfillStatusOds").AeaBackfillStatus
                  .NOT_STARTED;
              if (
                e ===
                o("WAWebAeaConsumerBackfillRunHistory").AeaBackfillRunResult
                  .COMPLETE
              )
                return o("WAWebAeaConsumerBackfillStatusOds").AeaBackfillStatus
                  .COMPLETED;
              if (
                e ===
                o("WAWebAeaConsumerBackfillRunHistory").AeaBackfillRunResult
                  .CONTACTS_NOT_SYNCED
              )
                return o("WAWebAeaConsumerBackfillStatusOds").AeaBackfillStatus
                  .CONTACTS_NOT_SYNCED;
              if (
                e ===
                o("WAWebAeaConsumerBackfillRunHistory").AeaBackfillRunResult
                  .PREKEY_FETCH_FAILED
              )
                return o("WAWebAeaConsumerBackfillStatusOds").AeaBackfillStatus
                  .PREKEY_FETCH_FAILED;
              if (
                e ===
                o("WAWebAeaConsumerBackfillRunHistory").AeaBackfillRunResult
                  .ERROR
              )
                return o("WAWebAeaConsumerBackfillStatusOds").AeaBackfillStatus
                  .ERROR;
              if (
                e ===
                o("WAWebAeaConsumerBackfillRunHistory").AeaBackfillRunResult
                  .OFFLINE_DELIVERY_NOT_READY
              )
                return o("WAWebAeaConsumerBackfillStatusOds").AeaBackfillStatus
                  .OFFLINE;
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })((t = e.lastRun) == null ? void 0 : t.result)
        : o("WAWebAeaConsumerBackfillStatusOds").AeaBackfillStatus.DISABLED;
    }
    l.reportAeaConsumerBackfillStatus = s;
  },
  98,
);
