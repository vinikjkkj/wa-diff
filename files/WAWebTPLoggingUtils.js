__d(
  "WAWebTPLoggingUtils",
  [
    "WAAbortError",
    "WACustomError",
    "WAHashStringToNumber",
    "WAWebWamEnumWebtpEventType",
    "WAWebWamEnumWebtpSourceType",
    "WAWebWebcWebtpPdfViewerWamEvent",
    "asyncToGeneratorRuntime",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = (e = r("justknobx")._("3702")) != null ? e : 100,
      m = (s = r("justknobx")._("4883")) != null ? s : 1,
      p = (u = r("justknobx")._("4885")) != null ? u : 1,
      _ = (c = r("justknobx")._("5236")) != null ? c : 10;
    function f(e, t) {
      return (
        t === void 0 && (t = d),
        e == null || e === ""
          ? !0
          : o("WAHashStringToNumber").hashStringToNumber(e) % t === 0
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          f(e, m) &&
            new (o(
              "WAWebWebcWebtpPdfViewerWamEvent",
            ).WebcWebtpPdfViewerWamEvent)({
              webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.OPEN,
              webtpSessionId: e,
              webtpFileSize: t,
              webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
                .PDF_VIEWER,
              webtpTelemetryData: JSON.stringify({ sampleRate: m }),
            }).commit();
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n, r, o) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            f(e, d) &&
              new (o(
                "WAWebWebcWebtpPdfViewerWamEvent",
              ).WebcWebtpPdfViewerWamEvent)({
                webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
                  .CLOSE,
                webtpSessionId: e,
                webtpFileSize: t,
                webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
                  .PDF_VIEWER,
                webtpTelemetryData: JSON.stringify({
                  anrCount: n,
                  longAnimationFrameCount: r.count,
                  longAnimationFrameEntries: r.entries,
                  browserMetrics: a,
                  sampleRate: d,
                }),
              }).commit();
          },
        )),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n) {
      if (f(t, p)) {
        var r =
          e === "media_viewer_header"
            ? o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
                .MEDIA_VIEWER_HEADER
            : e === "message_bubble"
              ? o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
                  .MESSAGE_BUBBLE
              : e === "pdf_viewer_error_screen"
                ? o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
                    .PDF_VIEWER_ERROR_SCREEN
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
        new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
          webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
            .DOWNLOAD_DOCUMENT_CLICK,
          webtpSource: r,
          webtpSessionId: t,
          webtpFileSize: n,
          webtpTelemetryData: JSON.stringify({ sampleRate: p }),
        }).commit();
      }
    }
    function v(e) {
      var t = e.appPerfData,
        n = e.filehash,
        r = e.sdkVersion,
        a = e.size;
      f(n, d) &&
        new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
          webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
            .APP_PERF_DATA,
          webtpSessionId: n,
          webtpFileSize: a,
          webtpTelemetryData: JSON.stringify(
            babelHelpers.extends({}, t, { sampleRate: d }),
          ),
          webtpSdkVersion: r,
          webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
            .PDF_VIEWER,
        }).commit();
    }
    function S(e, t, n, r) {
      f(t, d) &&
        new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
          webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
            .TELEMETRY,
          webtpSessionId: t,
          webtpFileSize: n,
          webtpTelemetryData: JSON.stringify(
            babelHelpers.extends({}, e, { sampleRate: d }),
          ),
          webtpSdkVersion: r,
          webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
            .PDF_VIEWER,
        }).commit();
    }
    function R(e) {
      var t = e.filehash,
        n = e.sdkVersion,
        r = e.size,
        a = e.telemetryEvent,
        i = a.firstPageAjsTotalTime,
        l = a.firstPageRenderTime,
        s = a.timeTillFirstPage;
      s != null &&
        f(t, d) &&
        new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
          webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
            .TELEMETRY,
          webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
            .PDF_VIEWER,
          webtpSessionId: t,
          webtpFileSize: r,
          webtpSdkVersion: n,
          webtpTelemetryData: JSON.stringify({
            action: "viewer_render_time",
            timeTillFirstPage: s,
            firstPageAjsTotalTime: i,
            firstPageRenderTime: l,
            sampleRate: d,
          }),
        }).commit();
    }
    function L(e) {
      return (function (t) {
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.message === "ajsError" &&
          "type" in t &&
          "stackTrace" in t &&
          "errorCode" in t &&
          "currEvent" in t &&
          "memInfo" in t
        ) {
          var n = t.type,
            r = t.stackTrace,
            o = t.errorCode,
            a = t.currEvent,
            i = t.memInfo;
          return {
            errorType: "ajsError",
            errorMessage:
              "" +
              (o != null ? o : "") +
              (a != null ? ", currEvent: " + a : ""),
            errorStack: r != null ? r : "",
            errorCode: n != null ? n : "",
            telemetryData: JSON.stringify({ memInfo: i }),
          };
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.message === "ajsError" &&
          "type" in t &&
          "errorMessage" in t
        ) {
          var l = t.type,
            s = t.errorMessage;
          return {
            errorType: "ajsError",
            errorMessage: s != null ? s : "",
            errorStack: "",
            errorCode: l != null ? l : "",
          };
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.message === "getContentDataFailed" &&
          "error" in t &&
          "size" in t
        ) {
          var u = t.error,
            c = t.size;
          return {
            errorType: "getContentDataFailed",
            errorMessage: u,
            errorStack: "",
            errorCode: "",
            telemetryData: JSON.stringify({ size: c }),
          };
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.message === "ajsInitFailed"
        )
          return {
            errorType: "ajsInitFailed",
            errorMessage: "",
            errorStack: "",
            errorCode: "",
          };
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.message === "externalInitFailed" &&
          "error" in t &&
          "code" in t
        ) {
          var d = t.error,
            m = t.code;
          return {
            errorType: "externalInitFailed",
            errorMessage: d,
            errorStack: "",
            errorCode: m,
          };
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.message === "unknownCommand" &&
          "apiName" in t
        ) {
          var p = t.apiName;
          return {
            errorType: "unknownCommand",
            errorMessage: "apiName: " + p,
            errorStack: "",
            errorCode: "",
          };
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.message === "getContentBufferFailed" &&
          "error" in t
        ) {
          var _ = t.error;
          return {
            errorType: "getContentBufferFailed",
            errorMessage: _,
            errorStack: "",
            errorCode: "",
          };
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.message === "fileHandleNotFound" &&
          "apiName" in t
        ) {
          var f = t.apiName;
          return {
            errorType: "fileHandleNotFound",
            errorMessage: "apiName: " + f,
            errorStack: "",
            errorCode: "",
          };
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.message === "unexpectedAjsCommand" &&
          "apiName" in t
        ) {
          var g = t.apiName;
          return {
            errorType: "unexpectedAjsCommand",
            errorMessage: "apiName: " + g,
            errorStack: "",
            errorCode: "",
          };
        }
        return {
          errorType: "unknown",
          errorMessage: JSON.stringify(e),
          errorStack: "",
          errorCode: "",
        };
      })(e);
    }
    function E(e) {
      if (
        e == null ||
        typeof e != "object" ||
        e instanceof o("WACustomError").TimeoutError ||
        !("level" in e) ||
        !("message" in e) ||
        e.level !== "error"
      )
        return null;
      var t = e.message;
      return t === "ajsError" ||
        t === "getContentDataFailed" ||
        t === "ajsInitFailed" ||
        t === "externalInitFailed" ||
        t === "unknownCommand" ||
        t === "getContentBufferFailed" ||
        t === "fileHandleNotFound" ||
        t === "unexpectedAjsCommand"
        ? e
        : null;
    }
    function k(e) {
      return e == null || typeof e != "object"
        ? null
        : e instanceof Error || ("stack" in e && "message" in e)
          ? e
          : null;
    }
    function I(e) {
      return e == null ||
        typeof e != "object" ||
        e instanceof o("WACustomError").TimeoutError
        ? null
        : "type" in e &&
            "message" in e &&
            "stack" in e &&
            "sdkVersion" in e &&
            typeof e.type == "string" &&
            typeof e.message == "string" &&
            typeof e.stack == "string" &&
            typeof e.sdkVersion == "string"
          ? {
              type: e.type,
              message: e.message,
              stack: e.stack,
              sdkVersion: e.sdkVersion,
            }
          : null;
    }
    function T(e, t) {
      f(e, _) &&
        new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
          webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.OPEN,
          webtpSessionId: e,
          webtpFileSize: t,
          webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
            .THUMBNAIL,
          webtpTelemetryData: JSON.stringify({ sampleRate: _ }),
        }).commit();
    }
    function D(e, t, n, r) {
      f(t, d) &&
        new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
          webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
            .TELEMETRY,
          webtpSessionId: t,
          webtpFileSize: n,
          webtpTelemetryData: JSON.stringify(
            babelHelpers.extends({}, e, { sampleRate: d }),
          ),
          webtpSdkVersion: r,
          webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
            .THUMBNAIL,
        }).commit();
    }
    function x(e, t, n) {
      if (e instanceof o("WAAbortError").AbortError) {
        var r;
        new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
          webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.ERROR,
          webtpErrorType: "abort",
          webtpErrorCode: "ABORT",
          webtpErrorMessage: e.message,
          webtpErrorStack: (r = e.stack) != null ? r : "",
          webtpSessionId: t,
          webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
            .THUMBNAIL,
          webtpFileSize: n,
        }).commit();
        return;
      }
      if (e instanceof o("WACustomError").TimeoutError) {
        var a;
        new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
          webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.ERROR,
          webtpErrorType: "timeout",
          webtpErrorCode: "TIMEOUT",
          webtpErrorMessage: e.message,
          webtpErrorStack: (a = e.stack) != null ? a : "",
          webtpSessionId: t,
          webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
            .THUMBNAIL,
          webtpFileSize: n,
        }).commit();
        return;
      }
      var i = E(e);
      if (i != null) {
        var l,
          s = L(i);
        new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
          webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.ERROR,
          webtpErrorType: s.errorType,
          webtpErrorMessage: s.errorMessage,
          webtpErrorStack: s.errorStack,
          webtpErrorCode: s.errorCode,
          webtpTelemetryData: (l = s.telemetryData) != null ? l : "",
          webtpSessionId: t,
          webtpFileSize: n,
          webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
            .THUMBNAIL,
        }).commit();
        return;
      }
      var u = I(e);
      if (u != null) {
        new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
          webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.ERROR,
          webtpErrorType: u.type,
          webtpErrorCode: u.type,
          webtpErrorMessage: u.message,
          webtpErrorStack: u.stack,
          webtpSessionId: t,
          webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
            .THUMBNAIL,
          webtpFileSize: n,
          webtpSdkVersion: u.sdkVersion,
        }).commit();
        return;
      }
      var c = k(e);
      if (c != null) {
        var d;
        new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
          webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.ERROR,
          webtpErrorType: "error",
          webtpErrorCode: P(c),
          webtpErrorMessage: c.message,
          webtpErrorStack: (d = c.stack) != null ? d : "",
          webtpSessionId: t,
          webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
            .THUMBNAIL,
          webtpFileSize: n,
        }).commit();
        return;
      }
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.ERROR,
        webtpErrorType: "other",
        webtpErrorMessage: String(e),
        webtpSessionId: t,
        webtpFileSize: n,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .THUMBNAIL,
      }).commit();
    }
    var $ = ["webassembly", "wasm", "out of memory", "aborted(", "unreachable"];
    function P(e) {
      var t = typeof e.message == "string" ? e.message.toLowerCase() : "";
      if (
        $.some(function (e) {
          return t.includes(e);
        })
      )
        return "WASM_ERROR";
      var n = e.name;
      return n == null || n === "" ? "ERROR" : n;
    }
    function N(e, t, n) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (e instanceof o("WACustomError").TimeoutError) {
            var r;
            new (o(
              "WAWebWebcWebtpPdfViewerWamEvent",
            ).WebcWebtpPdfViewerWamEvent)({
              webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
                .ERROR,
              webtpErrorType: "timeout",
              webtpErrorMessage: e.message,
              webtpErrorStack: (r = e.stack) != null ? r : "",
              webtpSessionId: t,
              webtpFileSize: n,
              webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
                .PDF_VIEWER,
            }).commit();
            return;
          }
          var a = E(e);
          if (a != null) {
            var i,
              l = L(a);
            new (o(
              "WAWebWebcWebtpPdfViewerWamEvent",
            ).WebcWebtpPdfViewerWamEvent)({
              webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
                .ERROR,
              webtpErrorType: l.errorType,
              webtpErrorMessage: l.errorMessage,
              webtpErrorStack: l.errorStack,
              webtpErrorCode: l.errorCode,
              webtpTelemetryData: (i = l.telemetryData) != null ? i : "",
              webtpSessionId: t,
              webtpFileSize: n,
              webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
                .PDF_VIEWER,
            }).commit();
            return;
          }
          var s = k(e);
          if (s != null) {
            var u;
            new (o(
              "WAWebWebcWebtpPdfViewerWamEvent",
            ).WebcWebtpPdfViewerWamEvent)({
              webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
                .ERROR,
              webtpErrorType: "error",
              webtpErrorMessage: s.message,
              webtpErrorStack: (u = s.stack) != null ? u : "",
              webtpSessionId: t,
              webtpFileSize: n,
              webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
                .PDF_VIEWER,
            }).commit();
            return;
          }
          new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)(
            {
              webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
                .ERROR,
              webtpErrorType: "other",
              webtpErrorMessage: String(e),
              webtpSessionId: t,
              webtpFileSize: n,
              webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
                .PDF_VIEWER,
            },
          ).commit();
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_SHARER_OPEN,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_SHARER,
        webtpSessionId: e,
        webtpFileSize: t,
      }).commit();
    }
    function A(e, t) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_SHARER_CANCEL,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_SHARER,
        webtpSessionId: e,
        webtpTelemetryData: JSON.stringify({ stage: t }),
      }).commit();
    }
    function F(e, t, n, r) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_SHARER_CONTINUE,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_SHARER,
        webtpSessionId: e,
        webtpFileSize: t,
        webtpTelemetryData: B(n, r),
      }).commit();
    }
    function O(e, t, n, r) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_SHARER_SUCCESS,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_SHARER,
        webtpSessionId: e,
        webtpFileSize: t,
        webtpTelemetryData: B(n, r),
      }).commit();
    }
    function B(e, t) {
      if (!(e == null && t == null)) {
        var n = {};
        return (
          e != null && (n.continuationTarget = e),
          t != null && (n.uid = t),
          JSON.stringify(n)
        );
      }
    }
    function W(e, t, n, r, a) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_SHARER_ERROR,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_SHARER,
        webtpErrorType: e,
        webtpErrorMessage: t,
        webtpErrorStack: a,
        webtpSessionId: n,
        webtpTelemetryData:
          r != null ? JSON.stringify({ continuationTarget: r }) : void 0,
      }).commit();
    }
    function q(e) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_RECEIVER_OPEN,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_RECEIVER,
        webtpSessionId: e,
      }).commit();
    }
    function U(e, t) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_RECEIVER_SUCCESS,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_RECEIVER,
        webtpSessionId: e,
        webtpFileSize: t,
      }).commit();
    }
    function V(e, t, n, r) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_RECEIVER_ERROR,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_RECEIVER,
        webtpErrorType: e,
        webtpErrorMessage: t,
        webtpErrorStack: r,
        webtpSessionId: n,
      }).commit();
    }
    function H(e) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_RECEIVER_CANCEL,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_RECEIVER,
        webtpSessionId: e,
      }).commit();
    }
    function G(e, t) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_RECEIVER_CONTINUE,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_RECEIVER,
        webtpSessionId: e,
        webtpTelemetryData:
          t != null ? JSON.stringify({ utmCampaign: t }) : void 0,
      }).commit();
    }
    function z(e) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_RECEIVER_FILE_FORWARDED,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_RECEIVER,
        webtpSessionId: e,
      }).commit();
    }
    function j() {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_SHARER_AUTO_PROCEED_CHECKBOX,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_SHARER,
      }).commit();
    }
    function K(e) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_SHARER_CONTINUE_AUTO_PROCEED,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_SHARER,
        webtpTelemetryData:
          e != null ? JSON.stringify({ continuationTarget: e }) : void 0,
      }).commit();
    }
    function Q(e, t) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_RECEIVER_CONTINUE,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_RECEIVER,
        webtpSessionId: e,
        webtpTelemetryData: JSON.stringify(
          babelHelpers.extends(
            { action: "preview_open" },
            t != null ? { utmCampaign: t } : void 0,
          ),
        ),
      }).commit();
    }
    function X(e) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_RECEIVER_FILE_FORWARDED,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_RECEIVER,
        webtpSessionId: e,
        webtpTelemetryData: JSON.stringify({ action: "preview_send" }),
      }).commit();
    }
    function Y(e) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_RECEIVER_CANCEL,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_RECEIVER,
        webtpSessionId: e,
        webtpTelemetryData: JSON.stringify({ action: "preview_cancel" }),
      }).commit();
    }
    function J(e, t) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .EDIT_MENU_CLICK,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_VIEWER,
        webtpSessionId: e,
        webtpTelemetryData: t,
      }).commit();
    }
    function Z(e, t, n) {
      J(
        n,
        JSON.stringify({
          action: "edit_in_acrobat_click",
          hasUnsavedAnnotations: e,
          source: t,
        }),
      );
    }
    function ee(e) {
      var t = e.filehash,
        n = e.hasSkipConfirmationPref;
      J(
        t,
        JSON.stringify({
          action: "edit_pdf_click",
          hasSkipConfirmationPref: n,
        }),
      );
    }
    function te(e, t) {
      return e === t ? "select" : t === "shape" ? "draw" : t;
    }
    function ne(e) {
      J(e, JSON.stringify({ action: "edit_mode_enter" }));
    }
    function re(e, t) {
      J(t, JSON.stringify({ action: "tool_select", tool: e }));
    }
    function oe(e, t, n) {
      J(
        n,
        JSON.stringify({ action: "annotation_applied", tool: e, source: t }),
      );
    }
    function ae(e, t) {
      J(t, JSON.stringify({ action: "style_change", kind: e }));
    }
    function ie(e, t, n) {
      J(
        t,
        JSON.stringify(
          n != null
            ? { action: "edit_action", op: e, method: n }
            : { action: "edit_action", op: e },
        ),
      );
    }
    function le(e, t) {
      J(t, JSON.stringify({ action: "annotated_send", hadAnnotations: e }));
    }
    function se(e, t) {
      J(t, JSON.stringify({ action: "annotated_download", hadAnnotations: e }));
    }
    function ue(e, t) {
      J(t, JSON.stringify({ action: "annotated_discard", hadAnnotations: e }));
    }
    function ce(e, t) {
      e: {
        var n = e;
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.action === "annotation_applied" &&
          "source" in n &&
          "tool" in n
        ) {
          var r = n.source,
            o = n.tool;
          oe(o, r, t);
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.action === "style_change" &&
          "kind" in n
        ) {
          var a = n.kind;
          ae(a, t);
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.action === "edit_action" &&
          "op" in n
        ) {
          var i = n.op;
          ie(i, t, e.method);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            n,
        );
      }
    }
    ((l.logDocumentOpenEvent = g),
      (l.logDocumentCloseEvent = y),
      (l.logDownloadDocumentClickEvent = b),
      (l.logAppPerfDataEvent = v),
      (l.logAppTelemetryDataEvent = S),
      (l.logViewerRenderTimeEvent = R),
      (l.convertTelemetryErrorEventToLogEvent = L),
      (l.asTelemetryError = E),
      (l.asError = k),
      (l.logThumbnailRenderAttemptEvent = T),
      (l.logThumbnailTelemetryDataEvent = D),
      (l.logThumbnailRenderErrorEvent = x),
      (l.getThumbnailNativeErrorCode = P),
      (l.logRenderErrorEvent = N),
      (l.logPdfSharerOpenEvent = w),
      (l.logPdfSharerCancelEvent = A),
      (l.logPdfSharerContinueEvent = F),
      (l.logPdfSharerSuccessEvent = O),
      (l.logPdfSharerErrorEvent = W),
      (l.logPdfReceiverOpenEvent = q),
      (l.logPdfReceiverSuccessEvent = U),
      (l.logPdfReceiverErrorEvent = V),
      (l.logPdfReceiverCancelEvent = H),
      (l.logPdfReceiverContinueEvent = G),
      (l.logPdfReceiverFileForwardedEvent = z),
      (l.logPdfSharerAutoProceedCheckboxEvent = j),
      (l.logPdfSharerContinueAutoProceedEvent = K),
      (l.logPdfReceiverPreviewOpenEvent = Q),
      (l.logPdfReceiverPreviewSendEvent = X),
      (l.logPdfReceiverPreviewCancelEvent = Y),
      (l.logEditInAcrobatClickEvent = Z),
      (l.logEditPdfClickEvent = ee),
      (l.toolSelectForToolClick = te),
      (l.logAnnotationEditModeEnterEvent = ne),
      (l.logAnnotationToolSelectEvent = re),
      (l.logAnnotationAppliedEvent = oe),
      (l.logAnnotationStyleChangeEvent = ae),
      (l.logAnnotationEditActionEvent = ie),
      (l.logAnnotatedSendEvent = le),
      (l.logAnnotatedDownloadEvent = se),
      (l.logAnnotatedDiscardEvent = ue),
      (l.logAnnotationInteractionFromBridge = ce));
  },
  98,
);
