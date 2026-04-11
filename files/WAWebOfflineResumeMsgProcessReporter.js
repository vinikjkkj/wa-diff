__d(
  "WAWebOfflineResumeMsgProcessReporter",
  [
    "WALogger",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebWebcMessageProcessingPerfWamEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = { ACTIVE: !1, CACHE: [] };
    function c() {
      var e = {
        dbStoringT: 0,
        decryptionT: 0,
        lidProcessingT: 0,
        parsingT: 0,
        postProcessingT: 0,
        preProcessingT: 0,
        processingT: 0,
        reportTokenValidationT: 0,
      };
      return (
        u.CACHE.forEach(function (t) {
          var n = t[0],
            r = t[1];
          e: {
            if (
              n ===
              o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                .MsgProcessStage.DBStoring
            ) {
              e.dbStoringT += r;
              break e;
            }
            if (
              n ===
              o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                .MsgProcessStage.Decryption
            ) {
              e.decryptionT += r;
              break e;
            }
            if (
              n ===
              o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                .MsgProcessStage.ProcessReportingTokenInfo
            ) {
              e.reportTokenValidationT += r;
              break e;
            }
            if (
              n ===
              o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                .MsgProcessStage.Parsing
            ) {
              e.parsingT += r;
              break e;
            }
            if (
              n ===
              o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                .MsgProcessStage.PostProcessing
            ) {
              e.postProcessingT += r;
              break e;
            }
            if (
              n ===
              o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                .MsgProcessStage.PreProcessing
            ) {
              e.preProcessingT += r;
              break e;
            }
            if (
              n ===
              o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                .MsgProcessStage.Processing
            ) {
              e.processingT += r;
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                n,
            );
          }
        }),
        Object.entries(e).forEach(function (t) {
          var n = t[0],
            r = t[1];
          typeof r == "number" && (e[n] = Math.round(r));
        }),
        e
      );
    }
    function d(e) {
      if (u.ACTIVE) {
        var n = t.performance.now();
        return function () {
          var r = t.performance.now();
          u.CACHE.push([e, r - n]);
        };
      }
    }
    function m() {
      u.ACTIVE = !0;
      var t = !1;
      o("WAWebEventsWaitForOfflineDeliveryEnd")
        .waitForOfflineDeliveryEnd()
        .then(function () {
          if (t)
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Reporter is already triggered",
                  ])),
              )
              .sendLogs("msg_process_reporter_already_triggered");
          else {
            if (!u.ACTIVE) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Reporter must be active to commit",
                    ])),
                )
                .sendLogs("msg_process_reporter_not_active");
              return;
            }
            ((t = !0),
              new (o(
                "WAWebWebcMessageProcessingPerfWamEvent",
              ).WebcMessageProcessingPerfWamEvent)(
                babelHelpers.extends({}, c(), { isOffline: !0 }),
              ).commit(),
              (u = { ACTIVE: !1, CACHE: [] }));
          }
        });
    }
    function p(e) {
      o("WAWebRuntimeEnvironmentUtils").isWorker() ||
        (e.message > 5, !(e.message <= 100) && m());
    }
    var _ = { startMarker: d, activate: p };
    l.msgProcessReporter = _;
  },
  98,
);
