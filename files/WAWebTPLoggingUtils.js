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
    function S(e) {
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
    function R(e) {
      return e == null || typeof e != "object"
        ? null
        : e instanceof Error || ("stack" in e && "message" in e)
          ? e
          : null;
    }
    function L(e) {
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
    function E(e, t, n, r) {
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
    function k(e, t, n) {
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
      var i = L(e);
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
      var l = R(e);
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
    function I(e, t, n) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
          var a = S(e);
          if (a != null) {
            var i,
              l = v(a);
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
          var s = R(e);
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
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_SHARER_OPEN,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_SHARER,
        webtpSessionId: e,
        webtpFileSize: t,
      }).commit();
    }
    function x(e, t) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_SHARER_CANCEL,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_SHARER,
        webtpSessionId: e,
        webtpTelemetryData: JSON.stringify({ stage: t }),
      }).commit();
    }
    function $(e, t, n, r) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_SHARER_CONTINUE,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_SHARER,
        webtpSessionId: e,
        webtpFileSize: t,
        webtpTelemetryData: N(n, r),
      }).commit();
    }
    function P(e, t, n, r) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_SHARER_SUCCESS,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_SHARER,
        webtpSessionId: e,
        webtpFileSize: t,
        webtpTelemetryData: N(n, r),
      }).commit();
    }
    function N(e, t) {
      if (!(e == null && t == null)) {
        var n = {};
        return (
          e != null && (n.continuationTarget = e),
          t != null && (n.uid = t),
          JSON.stringify(n)
        );
      }
    }
    function M(e, t, n, r, a) {
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
    function w(e) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_RECEIVER_OPEN,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_RECEIVER,
        webtpSessionId: e,
      }).commit();
    }
    function A(e, t) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_RECEIVER_SUCCESS,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_RECEIVER,
        webtpSessionId: e,
        webtpFileSize: t,
      }).commit();
    }
    function F(e, t, n, r) {
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
    function O(e) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_RECEIVER_CANCEL,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_RECEIVER,
        webtpSessionId: e,
      }).commit();
    }
    function B(e, t) {
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
    function W(e) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_RECEIVER_FILE_FORWARDED,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_RECEIVER,
        webtpSessionId: e,
      }).commit();
    }
    function q() {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_SHARER_AUTO_PROCEED_CHECKBOX,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_SHARER,
      }).commit();
    }
    function U(e) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_SHARER_CONTINUE_AUTO_PROCEED,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_SHARER,
        webtpTelemetryData:
          e != null ? JSON.stringify({ continuationTarget: e }) : void 0,
      }).commit();
    }
    function V(e, t) {
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
    function H(e) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_RECEIVER_FILE_FORWARDED,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_RECEIVER,
        webtpSessionId: e,
        webtpTelemetryData: JSON.stringify({ action: "preview_send" }),
      }).commit();
    }
    function G(e) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_RECEIVER_CANCEL,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_RECEIVER,
        webtpSessionId: e,
        webtpTelemetryData: JSON.stringify({ action: "preview_cancel" }),
      }).commit();
    }
    function z(e, t) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .EDIT_MENU_CLICK,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_VIEWER,
        webtpSessionId: e,
        webtpTelemetryData: t,
      }).commit();
    }
    function j(e, t) {
      z(
        t,
        JSON.stringify({
          action: "edit_in_acrobat_click",
          hasUnsavedAnnotations: e,
        }),
      );
    }
    ((l.logDocumentOpenEvent = _),
      (l.logDocumentCloseEvent = g),
      (l.logDownloadDocumentClickEvent = y),
      (l.logAppPerfDataEvent = C),
      (l.logAppTelemetryDataEvent = b),
      (l.convertTelemetryErrorEventToLogEvent = v),
      (l.asTelemetryError = S),
      (l.asError = R),
      (l.logThumbnailTelemetryDataEvent = E),
      (l.logThumbnailRenderErrorEvent = k),
      (l.logRenderErrorEvent = I),
      (l.logPdfSharerOpenEvent = D),
      (l.logPdfSharerCancelEvent = x),
      (l.logPdfSharerContinueEvent = $),
      (l.logPdfSharerSuccessEvent = P),
      (l.logPdfSharerErrorEvent = M),
      (l.logPdfReceiverOpenEvent = w),
      (l.logPdfReceiverSuccessEvent = A),
      (l.logPdfReceiverErrorEvent = F),
      (l.logPdfReceiverCancelEvent = O),
      (l.logPdfReceiverContinueEvent = B),
      (l.logPdfReceiverFileForwardedEvent = W),
      (l.logPdfSharerAutoProceedCheckboxEvent = q),
      (l.logPdfSharerContinueAutoProceedEvent = U),
      (l.logPdfReceiverPreviewOpenEvent = V),
      (l.logPdfReceiverPreviewSendEvent = H),
      (l.logPdfReceiverPreviewCancelEvent = G),
      (l.logEditInAcrobatClickEvent = j));
  },
  98,
);
