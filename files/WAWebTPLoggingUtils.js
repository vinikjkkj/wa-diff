__d(
  "WAWebTPLoggingUtils",
  [
    "WAAbortError",
    "WACustomError",
    "WAHashStringToNumber",
    "WAWebWamEnumWebtpEventType",
    "WAWebWamEnumWebtpSourceType",
    "WAWebWebcWebtpPdfViewerWamEvent",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (e = r("justknobx")._("3702")) != null ? e : 100,
      c = (s = r("justknobx")._("5236")) != null ? s : 10,
      d = /https?:\/\/[^\s\'\"()]+?(?=:\d+:\d+|[\s\'\"()]|$)/g;
    function m(e) {
      return e == null ? void 0 : e.replace(d, "<url>");
    }
    function p(e, t) {
      return (
        t === void 0 && (t = u),
        e == null || e === ""
          ? !0
          : o("WAHashStringToNumber").hashStringToNumber(e) % t === 0
      );
    }
    function _(e) {
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
    function f(e) {
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
    function g(e) {
      return e == null || typeof e != "object"
        ? null
        : e instanceof Error || ("stack" in e && "message" in e)
          ? e
          : null;
    }
    function h(e) {
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
    function y(e, t) {
      p(e, c) &&
        new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
          webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.OPEN,
          webtpSessionId: e,
          webtpFileSize: t,
          webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
            .THUMBNAIL,
          webtpTelemetryData: JSON.stringify({ sampleRate: c }),
        }).commit();
    }
    function C(e, t, n, r) {
      p(t, u) &&
        new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
          webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
            .TELEMETRY,
          webtpSessionId: t,
          webtpFileSize: n,
          webtpTelemetryData: JSON.stringify(
            babelHelpers.extends({}, e, { sampleRate: u }),
          ),
          webtpSdkVersion: r,
          webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
            .THUMBNAIL,
        }).commit();
    }
    function b(e, t, n) {
      if (e instanceof o("WAAbortError").AbortError) {
        var r;
        new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
          webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.ERROR,
          webtpErrorType: "abort",
          webtpErrorCode: "ABORT",
          webtpErrorMessage: m(e.message),
          webtpErrorStack: m((r = e.stack) != null ? r : ""),
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
          webtpErrorMessage: m(e.message),
          webtpErrorStack: m((a = e.stack) != null ? a : ""),
          webtpSessionId: t,
          webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
            .THUMBNAIL,
          webtpFileSize: n,
        }).commit();
        return;
      }
      var i = f(e);
      if (i != null) {
        var l,
          s = _(i);
        new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
          webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.ERROR,
          webtpErrorType: s.errorType,
          webtpErrorMessage: m(s.errorMessage),
          webtpErrorStack: m(s.errorStack),
          webtpErrorCode: s.errorCode,
          webtpTelemetryData: (l = s.telemetryData) != null ? l : "",
          webtpSessionId: t,
          webtpFileSize: n,
          webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
            .THUMBNAIL,
        }).commit();
        return;
      }
      var u = h(e);
      if (u != null) {
        new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
          webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.ERROR,
          webtpErrorType: u.type,
          webtpErrorCode: u.type,
          webtpErrorMessage: m(u.message),
          webtpErrorStack: m(u.stack),
          webtpSessionId: t,
          webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
            .THUMBNAIL,
          webtpFileSize: n,
          webtpSdkVersion: u.sdkVersion,
        }).commit();
        return;
      }
      var c = g(e);
      if (c != null) {
        var d;
        new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
          webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.ERROR,
          webtpErrorType: "error",
          webtpErrorCode: S(c),
          webtpErrorMessage: m(c.message),
          webtpErrorStack: m((d = c.stack) != null ? d : ""),
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
        webtpErrorMessage: m(String(e)),
        webtpSessionId: t,
        webtpFileSize: n,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .THUMBNAIL,
      }).commit();
    }
    var v = ["webassembly", "wasm", "out of memory", "aborted(", "unreachable"];
    function S(e) {
      var t = typeof e.message == "string" ? e.message.toLowerCase() : "";
      if (
        v.some(function (e) {
          return t.includes(e);
        })
      )
        return "WASM_ERROR";
      var n = e.name;
      return n == null || n === "" ? "ERROR" : n;
    }
    ((l.SESSION_SAMPLE_RATE = u),
      (l.redactUrls = m),
      (l.shouldLogSession = p),
      (l.convertTelemetryErrorEventToLogEvent = _),
      (l.asTelemetryError = f),
      (l.asError = g),
      (l.logThumbnailRenderAttemptEvent = y),
      (l.logThumbnailTelemetryDataEvent = C),
      (l.logThumbnailRenderErrorEvent = b),
      (l.getThumbnailNativeErrorCode = S));
  },
  98,
);
