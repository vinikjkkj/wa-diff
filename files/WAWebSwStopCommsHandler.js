__d(
  "WAWebSwStopCommsHandler",
  [
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebMessageProcessorCache",
    "WAWebMessageQueue",
    "WAWebSWBus",
    "WAWebSWBusActions",
    "WAWebSwFeature",
    "WAWebSwInterruptOfflineResume",
    "WAWebSwOfflineResumeState",
    "WAWebWamEnumOfflineProcessInterruptReasons",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("WAWebSWBus").REQUEST_REPLY_WAIT_MS / 2,
      c = (function (e) {
        function t() {
          for (var t, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
            a[i] = arguments[i];
          return (
            (t = e.call.apply(e, [this].concat(a)) || this),
            (t.matchAction = function (e) {
              return e === r("WAWebSWBusActions").STOP_COMMS;
            }),
            (t.onAction = async function (e) {
              var t =
                  o(
                    "WAWebMessageQueue",
                  ).isWorkerOnlineMessageQueueTrackingEnabled(),
                n = o("WAWebSwInterruptOfflineResume").interruptOfflineResume(
                  o("WAWebWamEnumOfflineProcessInterruptReasons")
                    .OFFLINE_PROCESS_INTERRUPT_REASONS.PAGE_OPENED,
                  "Offline resume interrupted by STOP_COMMS",
                );
              (o("WAWebSwOfflineResumeState").cancelOfflineResume(),
                await n,
                t && (await d()));
            }),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WAWebSwFeature").SWFeature);
    async function d() {
      try {
        await o("WAPromiseTimeout").promiseTimeout(
          o(
            "WAWebMessageProcessorCache",
          ).messageProcessorCache.checkpointQueueWait(),
          u,
        );
      } catch (t) {
        if (t instanceof o("WACustomError").TimeoutError) {
          (o("WAWebMessageProcessorCache").messageProcessorCache.stopCommits(),
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[push-notification] STOP_COMMS replies before the checkpoint queue is idle and stops message cache commits",
                ])),
            ));
          return;
        }
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[push-notification] STOP_COMMS checkpoint queue wait failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("sw-stop-comms-checkpoint-wait-failed");
      }
    }
    l.default = c;
  },
  98,
);
