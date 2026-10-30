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
      function u(t) {
        if (!i) {
          i = !0;
          var l = {};
          t.result === "failure" && (l.error_category = s(t.error_type));
          var u = babelHelpers.extends(
            {},
            o(
              "WAWebBizBroadcastsImportLoggingUtils",
            ).getImportAudienceLoggingExtraAttributes(n()),
            a == null ? {} : { auto_detection_error_type: a },
            t,
            l,
            { latency_ms: Date.now() - r },
          );
          (o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.importAudienceProcessingResult(
            u,
            e,
          ),
            d(t.result, l.error_category));
        }
      }
      function c() {
        t &&
          ((a = "no_phone_numbers_detected"),
          o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.importAudienceError(a, e));
      }
      function p(e) {
        t && u(e);
      }
      function _() {
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
      var f = function (n, r) {
        return m(
          t,
          r,
          function () {
            (p({
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
        handleProNoPhoneNumbersScreenOpened: f,
        logProcessingResult: u,
        logProNoPhoneNumbersDetected: c,
        logProProcessingResult: p,
        startProManualColumnSelection: _,
      };
    }
    function s(e) {
      return e === "TYPE" ||
        e === "FORMAT" ||
        e === "TOO_MANY_ITEMS" ||
        e === "TOO_MANY_ERRORS" ||
        e === "TOO_SMALL" ||
        e === "TEMPLATE_MISMATCH" ||
        e === "no_phone_numbers_detected"
        ? "account"
        : "unknown";
    }
    function u(e) {
      return {
        error_type: e,
        phase:
          e === "no_phone_numbers_screen_load_failed"
            ? "column_detection"
            : "column_selection",
        result: "failure",
      };
    }
    function c(e, t, n) {
      n(
        babelHelpers.extends({}, e, t ? { phase: "file_processing" } : {}, {
          result: "success",
        }),
      );
    }
    function d(e, t) {
      e: {
        if (e === "success") {
          o("WAWebBroadcastODS").logAudienceImportSuccess();
          break e;
        }
        if (e === "failure") {
          o("WAWebBroadcastODS").logAudienceImportError(t);
          break e;
        }
        return;
      }
    }
    function m(e, t, n, r) {
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
      (l.getImportScreenLoadFailureAttributes = u),
      (l.logCompletedFileImport = c),
      (l.logFileImportProcessingCount = d));
  },
  98,
);
