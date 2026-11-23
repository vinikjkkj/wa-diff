__d(
  "WAWebSwInterruptOfflineResume",
  [
    "WAComms",
    "WALogger",
    "WAWebMessageProcessorCache",
    "WAWebStorageCmd",
    "WAWebSwOfflineResumeState",
    "WAWebWamEnumOfflineProcessInterruptReasons",
    "WAWebWamWorkerOfflineProcessReporter",
    "WAWebWorkerResumeManager",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c() {
      o("WAWebStorageCmd").StorageCmd.on("idb_version_change", function (t) {
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[push-notification] ",
              " version change, stop offline resume",
            ])),
          t,
        ),
          m(
            o("WAWebWamEnumOfflineProcessInterruptReasons")
              .OFFLINE_PROCESS_INTERRUPT_REASONS.DATABASE_VERSION_CHANGE,
            "Offline resume interrupted by " + t + " version change",
          ));
      });
    }
    function d() {
      o("WAWebMessageProcessorCache").messageProcessorCache.onFailClosed(
        function (e) {
          var t = e.reason;
          t === "checkpoint_hold_expired" &&
            m(
              o("WAWebWamEnumOfflineProcessInterruptReasons")
                .OFFLINE_PROCESS_INTERRUPT_REASONS.CHECKPOINT_HOLD_EXPIRED,
              "Offline resume interrupted by an expired checkpoint hold",
            );
        },
      );
    }
    function m(e, t) {
      (p(e, t).catch(function (e) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[push-notification] failed to interrupt offline resume",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("offline-resume-interrupt-failed");
      }),
        o("WAWebSwOfflineResumeState").blockOfflineResume());
    }
    async function p(e, t) {
      o(
        "WAWebWamWorkerOfflineProcessReporter",
      ).WorkerOfflineResumeReporter.getCurrentStage() != null &&
        (o(
          "WAWebWamWorkerOfflineProcessReporter",
        ).WorkerOfflineResumeReporter.logProcessInterrupted(e),
        o("WAWebWorkerResumeManager").interruptActiveOfflineWorkerResume(
          new (o(
            "WAWebWorkerResumeManager",
          ).OfflineWorkerResumeInterruptedError)(t),
        ),
        o("WAComms").getComms() &&
          (await o("WAComms").stopComms(),
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "Successfully stopped Comms in service worker",
              ])),
          )));
    }
    ((l.listenForDatabaseVersionChanges = c),
      (l.listenForMessageCacheFailure = d),
      (l.interruptOfflineResume = p));
  },
  98,
);
