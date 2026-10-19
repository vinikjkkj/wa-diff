__d(
  "WAWebBizBroadcastsFileImportLogging",
  [
    "WAWebBizBroadcastsImportLoggingUtils",
    "WAWebBroadcastODS",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebModalManager",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = Date.now(),
        a = null,
        i = !1,
        l = !1;
      function s(l) {
        if (!(t && i)) {
          i = !0;
          var s = babelHelpers.extends(
            {},
            o(
              "WAWebBizBroadcastsImportLoggingUtils",
            ).getImportAudienceLoggingExtraAttributes(n()),
            a == null ? {} : { auto_detection_error_type: a },
            l,
            { latency_ms: Date.now() - r },
          );
          (o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.importAudienceProcessingResult(
            s,
            e,
          ),
            t && c(l.result));
        }
      }
      function u() {
        t &&
          ((a = "no_phone_numbers_detected"),
          o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.importAudienceError(a, e));
      }
      function m(e) {
        t && s(e);
      }
      function p() {
        if (!(!t || !l)) {
          ((l = !1), (i = !1), (r = Date.now()));
          var a = babelHelpers.extends(
            {},
            o(
              "WAWebBizBroadcastsImportLoggingUtils",
            ).getImportAudienceLoggingExtraAttributes(n()),
            {
              auto_detection_error_type: "no_phone_numbers_detected",
              phase: "column_selection",
            },
          );
          (o("WAWebBroadcastODS").logAudienceImport(),
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.importAudienceProcessingStarted(
              a,
              e,
            ));
        }
      }
      var _ = function (n, r) {
        return d(
          t,
          r,
          function () {
            (m({
              error_type: "no_phone_numbers_detected",
              phase: "column_detection",
              result: "failure",
            }),
              (l = !0));
          },
          n,
        );
      };
      return {
        handleProNoPhoneNumbersScreenOpened: _,
        logProcessingResult: s,
        logProNoPhoneNumbersDetected: u,
        logProProcessingResult: m,
        startProManualColumnSelection: p,
      };
    }
    function s(e) {
      return {
        error_type: e,
        phase:
          e === "no_phone_numbers_screen_load_failed"
            ? "column_detection"
            : "column_selection",
        result: "failure",
      };
    }
    function u(e, t, n) {
      n(
        babelHelpers.extends({}, e, t ? { phase: "file_processing" } : {}, {
          result: "success",
        }),
      );
    }
    function c(e) {
      e: {
        if (e === "success") {
          o("WAWebBroadcastODS").logAudienceImportSuccess();
          break e;
        }
        if (e === "failure") {
          o("WAWebBroadcastODS").logAudienceImportError();
          break e;
        }
        return;
      }
    }
    function d(e, t, n, r) {
      if (!e || t.aborted) return function () {};
      n();
      function a() {
        (o("WAWebModalManager").ModalManager.off("close_modal", i),
          o("WAWebModalManager").ModalManager.off("open_modal", i));
      }
      function i() {
        (a(), r());
      }
      return (
        o("WAWebModalManager").ModalManager.on("close_modal", i),
        o("WAWebModalManager").ModalManager.on("open_modal", i),
        a
      );
    }
    ((l.createImportProcessingResultLogger = e),
      (l.getImportScreenLoadFailureAttributes = s),
      (l.logCompletedFileImport = u),
      (l.logFileImportProcessingCount = c));
  },
  98,
);
