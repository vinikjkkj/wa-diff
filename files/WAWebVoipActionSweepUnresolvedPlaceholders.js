__d(
  "WAWebVoipActionSweepUnresolvedPlaceholders",
  [
    "WALogger",
    "WAPromiseDelays",
    "WAPromiseTimeout",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebMsgKey",
    "WAWebNoop",
    "WAWebRegionReadinessSignals",
    "WAWebSchemaMessage",
    "WAWebViewMode.flow",
    "WAWebVoipActionUncountUnresolvedPlaceholder",
    "WAWebVoipCallLogPlaceholderTracker",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 200,
      c = !1;
    function d() {
      c ||
        ((c = !0),
        m()
          .then(function () {
            return o("WAPromiseDelays").delayMs(
              o("WAWebVoipActionUncountUnresolvedPlaceholder")
                .UNRESOLVED_PLACEHOLDER_GRACE_MS,
            );
          })
          .then(p)
          .catch(function (t) {
            o(
              "WAWebVoipActionUncountUnresolvedPlaceholder",
            ).isSessionEndingDbError(t) ||
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[voip] unresolved placeholder sweep failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("voip-placeholder-sweep-fail");
          }));
    }
    function m() {
      var e = new AbortController();
      return o("WAPromiseTimeout")
        .promiseTimeout(
          o("WAWebRegionReadinessSignals")
            .waitForOfflineDeliveryEnd(e.signal)
            .catch(r("WAWebNoop")),
          o("WAWebEventsWaitForOfflineDeliveryEnd").OFFLINE_RESUME_WAIT_TIMEOUT,
        )
        .catch(function () {
          return e.abort();
        });
    }
    async function p() {
      var e = await o("WAWebSchemaMessage")
          .getMessageTable()
          .all({
            index: ["isCallLogMsg"],
            reverse: !0,
            limit: u,
            shouldDecrypt: !1,
          }),
        t = e.filter(_).map(function (e) {
          return r("WAWebMsgKey").fromString(e.id);
        });
      t.length === 0 ||
        !o(
          "WAWebVoipCallLogPlaceholderTracker",
        ).isOfflineCallLogOrderingEnabled() ||
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] sweeping ",
              " unresolved placeholders",
            ])),
          t.length,
        ),
        await o(
          "WAWebVoipActionUncountUnresolvedPlaceholder",
        ).checkUnresolvedPlaceholdersNow(t));
    }
    function _(e) {
      return (
        e.viewMode ===
          o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME &&
        e.pendingReadReceipt != null &&
        !o("WAWebVoipCallLogPlaceholderTracker").isPlaceholderPending(
          r("WAWebMsgKey").fromString(e.id).id,
        )
      );
    }
    ((l.scheduleUnresolvedPlaceholderSweep = d),
      (l.sweepUnresolvedPlaceholders = p));
  },
  98,
);
