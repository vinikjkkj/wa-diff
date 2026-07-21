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
      c = (e = r("justknobx")._("3702")) != null ? e : 100,
      d = (s = r("justknobx")._("4883")) != null ? s : 1,
      m = (u = r("justknobx")._("4885")) != null ? u : 1;
    function p(e, t) {
      return (
        t === void 0 && (t = c),
        e == null || e === ""
          ? !0
          : o("WAHashStringToNumber").hashStringToNumber(e) % t === 0
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          p(e, d) &&
            new (o(
              "WAWebWebcWebtpPdfViewerWamEvent",
            ).WebcWebtpPdfViewerWamEvent)({
              webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.OPEN,
              webtpSessionId: e,
              webtpFileSize: t,
              webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
                .PDF_VIEWER,
              webtpTelemetryData: JSON.stringify({ sampleRate: d }),
            }).commit();
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n, r, o) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            p(e, c) &&
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
                  sampleRate: c,
                }),
              }).commit();
          },
        )),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n) {
      if (p(t, m)) {
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
          webtpTelemetryData: JSON.stringify({ sampleRate: m }),
        }).commit();
      }
    }
    function C(e) {
      var t = e.appPerfData,
        n = e.filehash,
        r = e.sdkVersion,
        a = e.size;
      p(n, c) &&
        new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
          webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
            .APP_PERF_DATA,
          webtpSessionId: n,
          webtpFileSize: a,
          webtpTelemetryData: JSON.stringify(
            babelHelpers.extends({}, t, { sampleRate: c }),
          ),
          webtpSdkVersion: r,
          webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
            .PDF_VIEWER,
        }).commit();
    }
    function b(e, t, n, r) {
      p(t, c) &&
        new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
          webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
            .TELEMETRY,
          webtpSessionId: t,
          webtpFileSize: n,
          webtpTelemetryData: JSON.stringify(
            babelHelpers.extends({}, e, { sampleRate: c }),
          ),
          webtpSdkVersion: r,
          webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
            .PDF_VIEWER,
        }).commit();
    }
    function v(e) {
      var t = e.filehash,
        n = e.sdkVersion,
        r = e.size,
        a = e.telemetryEvent,
        i = a.firstPageAjsTotalTime,
        l = a.firstPageRenderTime,
        s = a.timeTillFirstPage;
      s != null &&
        p(t, c) &&
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
            sampleRate: c,
          }),
        }).commit();
    }
    function S(e) {
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
            errorMessage: n + ", currEvent: " + (a != null ? a : ""),
            errorStack: r != null ? r : "",
            errorCode: o != null ? o : "",
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
    function R(e) {
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
    function L(e) {
      return e == null || typeof e != "object"
        ? null
        : e instanceof Error || ("stack" in e && "message" in e)
          ? e
          : null;
    }
    function E(e) {
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
    function k(e, t, n, r) {
      p(t, c) &&
        new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
          webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
            .TELEMETRY,
          webtpSessionId: t,
          webtpFileSize: n,
          webtpTelemetryData: JSON.stringify(
            babelHelpers.extends({}, e, { sampleRate: c }),
          ),
          webtpSdkVersion: r,
          webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
            .THUMBNAIL,
        }).commit();
    }
    function I(e, t, n) {
      if (e instanceof o("WAAbortError").AbortError) {
        var r;
        new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
          webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.ERROR,
          webtpErrorType: "abort",
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
        new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
          webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.ERROR,
          webtpErrorType: i.type,
          webtpErrorMessage: i.message,
          webtpErrorStack: i.stack,
          webtpSessionId: t,
          webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
            .THUMBNAIL,
          webtpFileSize: n,
          webtpSdkVersion: i.sdkVersion,
        }).commit();
        return;
      }
      var l = L(e);
      if (l != null) {
        var s;
        new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
          webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.ERROR,
          webtpErrorType: "error",
          webtpErrorMessage: l.message,
          webtpErrorStack: (s = l.stack) != null ? s : "",
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
    function T(e, t, n) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
          var a = R(e);
          if (a != null) {
            var i,
              l = S(a);
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
          var s = L(e);
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
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_SHARER_OPEN,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_SHARER,
        webtpSessionId: e,
        webtpFileSize: t,
      }).commit();
    }
    function $(e, t) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_SHARER_CANCEL,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_SHARER,
        webtpSessionId: e,
        webtpTelemetryData: JSON.stringify({ stage: t }),
      }).commit();
    }
    function P(e, t, n, r) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_SHARER_CONTINUE,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_SHARER,
        webtpSessionId: e,
        webtpFileSize: t,
        webtpTelemetryData: M(n, r),
      }).commit();
    }
    function N(e, t, n, r) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_SHARER_SUCCESS,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_SHARER,
        webtpSessionId: e,
        webtpFileSize: t,
        webtpTelemetryData: M(n, r),
      }).commit();
    }
    function M(e, t) {
      if (!(e == null && t == null)) {
        var n = {};
        return (
          e != null && (n.continuationTarget = e),
          t != null && (n.uid = t),
          JSON.stringify(n)
        );
      }
    }
    function w(e, t, n, r, a) {
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
    function A(e) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_RECEIVER_OPEN,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_RECEIVER,
        webtpSessionId: e,
      }).commit();
    }
    function F(e, t) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_RECEIVER_SUCCESS,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_RECEIVER,
        webtpSessionId: e,
        webtpFileSize: t,
      }).commit();
    }
    function O(e, t, n, r) {
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
    function B(e) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_RECEIVER_CANCEL,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_RECEIVER,
        webtpSessionId: e,
      }).commit();
    }
    function W(e, t) {
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
    function q(e) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_RECEIVER_FILE_FORWARDED,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_RECEIVER,
        webtpSessionId: e,
      }).commit();
    }
    function U() {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_SHARER_AUTO_PROCEED_CHECKBOX,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_SHARER,
      }).commit();
    }
    function V(e) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_SHARER_CONTINUE_AUTO_PROCEED,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_SHARER,
        webtpTelemetryData:
          e != null ? JSON.stringify({ continuationTarget: e }) : void 0,
      }).commit();
    }
    function H(e, t) {
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
    function G(e) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_RECEIVER_FILE_FORWARDED,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_RECEIVER,
        webtpSessionId: e,
        webtpTelemetryData: JSON.stringify({ action: "preview_send" }),
      }).commit();
    }
    function z(e) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_RECEIVER_CANCEL,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_RECEIVER,
        webtpSessionId: e,
        webtpTelemetryData: JSON.stringify({ action: "preview_cancel" }),
      }).commit();
    }
    function j(e, t) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .EDIT_MENU_CLICK,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_VIEWER,
        webtpSessionId: e,
        webtpTelemetryData: t,
      }).commit();
    }
    function K(e, t, n) {
      j(
        n,
        JSON.stringify({
          action: "edit_in_acrobat_click",
          hasUnsavedAnnotations: e,
          source: t,
        }),
      );
    }
    function Q(e) {
      j(e, JSON.stringify({ action: "edit_pdf_click" }));
    }
    function X(e, t) {
      return e === t ? "select" : t === "shape" ? "draw" : t;
    }
    function Y(e) {
      j(e, JSON.stringify({ action: "edit_mode_enter" }));
    }
    function J(e, t) {
      j(t, JSON.stringify({ action: "tool_select", tool: e }));
    }
    function Z(e, t, n) {
      j(
        n,
        JSON.stringify({ action: "annotation_applied", tool: e, source: t }),
      );
    }
    function ee(e, t) {
      j(t, JSON.stringify({ action: "style_change", kind: e }));
    }
    function te(e, t, n) {
      j(
        t,
        JSON.stringify(
          n != null
            ? { action: "edit_action", op: e, method: n }
            : { action: "edit_action", op: e },
        ),
      );
    }
    function ne(e, t) {
      j(t, JSON.stringify({ action: "annotated_send", hadAnnotations: e }));
    }
    function re(e, t) {
      j(t, JSON.stringify({ action: "annotated_download", hadAnnotations: e }));
    }
    function oe(e, t) {
      j(t, JSON.stringify({ action: "annotated_discard", hadAnnotations: e }));
    }
    function ae(e, t) {
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
          Z(o, r, t);
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.action === "style_change" &&
          "kind" in n
        ) {
          var a = n.kind;
          ee(a, t);
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.action === "edit_action" &&
          "op" in n
        ) {
          var i = n.op;
          te(i, t, e.method);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            n,
        );
      }
    }
    ((l.logDocumentOpenEvent = _),
      (l.logDocumentCloseEvent = g),
      (l.logDownloadDocumentClickEvent = y),
      (l.logAppPerfDataEvent = C),
      (l.logAppTelemetryDataEvent = b),
      (l.logViewerRenderTimeEvent = v),
      (l.convertTelemetryErrorEventToLogEvent = S),
      (l.asTelemetryError = R),
      (l.asError = L),
      (l.logThumbnailTelemetryDataEvent = k),
      (l.logThumbnailRenderErrorEvent = I),
      (l.logRenderErrorEvent = T),
      (l.logPdfSharerOpenEvent = x),
      (l.logPdfSharerCancelEvent = $),
      (l.logPdfSharerContinueEvent = P),
      (l.logPdfSharerSuccessEvent = N),
      (l.logPdfSharerErrorEvent = w),
      (l.logPdfReceiverOpenEvent = A),
      (l.logPdfReceiverSuccessEvent = F),
      (l.logPdfReceiverErrorEvent = O),
      (l.logPdfReceiverCancelEvent = B),
      (l.logPdfReceiverContinueEvent = W),
      (l.logPdfReceiverFileForwardedEvent = q),
      (l.logPdfSharerAutoProceedCheckboxEvent = U),
      (l.logPdfSharerContinueAutoProceedEvent = V),
      (l.logPdfReceiverPreviewOpenEvent = H),
      (l.logPdfReceiverPreviewSendEvent = G),
      (l.logPdfReceiverPreviewCancelEvent = z),
      (l.logEditInAcrobatClickEvent = K),
      (l.logEditPdfClickEvent = Q),
      (l.toolSelectForToolClick = X),
      (l.logAnnotationEditModeEnterEvent = Y),
      (l.logAnnotationToolSelectEvent = J),
      (l.logAnnotationAppliedEvent = Z),
      (l.logAnnotationStyleChangeEvent = ee),
      (l.logAnnotationEditActionEvent = te),
      (l.logAnnotatedSendEvent = ne),
      (l.logAnnotatedDownloadEvent = re),
      (l.logAnnotatedDiscardEvent = oe),
      (l.logAnnotationInteractionFromBridge = ae));
  },
  98,
);
