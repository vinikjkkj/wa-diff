__d(
  "WAWebTPPdfLoggingUtils",
  [
    "WACustomError",
    "WAWebTPLoggingUtils",
    "WAWebWamEnumWebtpEventType",
    "WAWebWamEnumWebtpSourceType",
    "WAWebWebcWebtpPdfViewerWamEvent",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (e = r("justknobx")._("4883")) != null ? e : 1,
      c = (s = r("justknobx")._("4885")) != null ? s : 1;
    async function d(e, t) {
      o("WAWebTPLoggingUtils").shouldLogSession(e, u) &&
        new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
          webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.OPEN,
          webtpSessionId: e,
          webtpFileSize: t,
          webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
            .PDF_VIEWER,
          webtpTelemetryData: JSON.stringify({ sampleRate: u }),
        }).commit();
    }
    async function m(e, t, n, r, a) {
      o("WAWebTPLoggingUtils").shouldLogSession(
        e,
        o("WAWebTPLoggingUtils").SESSION_SAMPLE_RATE,
      ) &&
        new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
          webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.CLOSE,
          webtpSessionId: e,
          webtpFileSize: t,
          webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
            .PDF_VIEWER,
          webtpTelemetryData: JSON.stringify({
            anrCount: n,
            longAnimationFrameCount: r.count,
            longAnimationFrameEntries: r.entries,
            browserMetrics: a,
            sampleRate: o("WAWebTPLoggingUtils").SESSION_SAMPLE_RATE,
          }),
        }).commit();
    }
    function p(e, t, n) {
      if (o("WAWebTPLoggingUtils").shouldLogSession(t, c)) {
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
          webtpTelemetryData: JSON.stringify({ sampleRate: c }),
        }).commit();
      }
    }
    function _(e) {
      var t = e.appPerfData,
        n = e.filehash,
        r = e.sdkVersion,
        a = e.size;
      o("WAWebTPLoggingUtils").shouldLogSession(
        n,
        o("WAWebTPLoggingUtils").SESSION_SAMPLE_RATE,
      ) &&
        new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
          webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
            .APP_PERF_DATA,
          webtpSessionId: n,
          webtpFileSize: a,
          webtpTelemetryData: JSON.stringify(
            babelHelpers.extends({}, t, {
              sampleRate: o("WAWebTPLoggingUtils").SESSION_SAMPLE_RATE,
            }),
          ),
          webtpSdkVersion: r,
          webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
            .PDF_VIEWER,
        }).commit();
    }
    function f(e, t, n, r) {
      o("WAWebTPLoggingUtils").shouldLogSession(
        t,
        o("WAWebTPLoggingUtils").SESSION_SAMPLE_RATE,
      ) &&
        new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
          webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
            .TELEMETRY,
          webtpSessionId: t,
          webtpFileSize: n,
          webtpTelemetryData: JSON.stringify(
            babelHelpers.extends({}, e, {
              sampleRate: o("WAWebTPLoggingUtils").SESSION_SAMPLE_RATE,
            }),
          ),
          webtpSdkVersion: r,
          webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
            .PDF_VIEWER,
        }).commit();
    }
    function g(e) {
      var t = e.filehash,
        n = e.sdkVersion,
        r = e.size,
        a = e.telemetryEvent,
        i = a.firstPageAjsTotalTime,
        l = a.firstPageRenderTime,
        s = a.timeTillFirstPage;
      s != null &&
        o("WAWebTPLoggingUtils").shouldLogSession(
          t,
          o("WAWebTPLoggingUtils").SESSION_SAMPLE_RATE,
        ) &&
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
            sampleRate: o("WAWebTPLoggingUtils").SESSION_SAMPLE_RATE,
          }),
        }).commit();
    }
    async function h(e, t, n) {
      if (e instanceof o("WACustomError").TimeoutError) {
        var r;
        new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
          webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.ERROR,
          webtpErrorType: "timeout",
          webtpErrorMessage: o("WAWebTPLoggingUtils").redactUrls(e.message),
          webtpErrorStack: o("WAWebTPLoggingUtils").redactUrls(
            (r = e.stack) != null ? r : "",
          ),
          webtpSessionId: t,
          webtpFileSize: n,
          webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
            .PDF_VIEWER,
        }).commit();
        return;
      }
      var a = o("WAWebTPLoggingUtils").asTelemetryError(e);
      if (a != null) {
        var i,
          l = o("WAWebTPLoggingUtils").convertTelemetryErrorEventToLogEvent(a);
        new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
          webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.ERROR,
          webtpErrorType: l.errorType,
          webtpErrorMessage: o("WAWebTPLoggingUtils").redactUrls(
            l.errorMessage,
          ),
          webtpErrorStack: o("WAWebTPLoggingUtils").redactUrls(l.errorStack),
          webtpErrorCode: l.errorCode,
          webtpTelemetryData: (i = l.telemetryData) != null ? i : "",
          webtpSessionId: t,
          webtpFileSize: n,
          webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
            .PDF_VIEWER,
        }).commit();
        return;
      }
      var s = o("WAWebTPLoggingUtils").asError(e);
      if (s != null) {
        var u;
        new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
          webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.ERROR,
          webtpErrorType: "error",
          webtpErrorMessage: o("WAWebTPLoggingUtils").redactUrls(s.message),
          webtpErrorStack: o("WAWebTPLoggingUtils").redactUrls(
            (u = s.stack) != null ? u : "",
          ),
          webtpSessionId: t,
          webtpFileSize: n,
          webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
            .PDF_VIEWER,
        }).commit();
        return;
      }
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.ERROR,
        webtpErrorType: "other",
        webtpErrorMessage: o("WAWebTPLoggingUtils").redactUrls(String(e)),
        webtpSessionId: t,
        webtpFileSize: n,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_VIEWER,
      }).commit();
    }
    function y(e, t) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_SHARER_OPEN,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_SHARER,
        webtpSessionId: e,
        webtpFileSize: t,
      }).commit();
    }
    function C(e, t) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_SHARER_CANCEL,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_SHARER,
        webtpSessionId: e,
        webtpTelemetryData: JSON.stringify({ stage: t }),
      }).commit();
    }
    function b(e, t, n, r) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_SHARER_CONTINUE,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_SHARER,
        webtpSessionId: e,
        webtpFileSize: t,
        webtpTelemetryData: S(n, r),
      }).commit();
    }
    function v(e, t, n, r) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_SHARER_SUCCESS,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_SHARER,
        webtpSessionId: e,
        webtpFileSize: t,
        webtpTelemetryData: S(n, r),
      }).commit();
    }
    function S(e, t) {
      if (!(e == null && t == null)) {
        var n = {};
        return (
          e != null && (n.continuationTarget = e),
          t != null && (n.uid = t),
          JSON.stringify(n)
        );
      }
    }
    function R(e, t, n, r, a) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_SHARER_ERROR,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_SHARER,
        webtpErrorType: e,
        webtpErrorMessage: o("WAWebTPLoggingUtils").redactUrls(t),
        webtpErrorStack: o("WAWebTPLoggingUtils").redactUrls(a),
        webtpSessionId: n,
        webtpTelemetryData:
          r != null ? JSON.stringify({ continuationTarget: r }) : void 0,
      }).commit();
    }
    function L(e) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_RECEIVER_OPEN,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_RECEIVER,
        webtpSessionId: e,
      }).commit();
    }
    function E(e, t) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_RECEIVER_SUCCESS,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_RECEIVER,
        webtpSessionId: e,
        webtpFileSize: t,
      }).commit();
    }
    function k(e, t, n, r) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_RECEIVER_ERROR,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_RECEIVER,
        webtpErrorType: e,
        webtpErrorMessage: o("WAWebTPLoggingUtils").redactUrls(t),
        webtpErrorStack: o("WAWebTPLoggingUtils").redactUrls(r),
        webtpSessionId: n,
      }).commit();
    }
    function I(e) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_RECEIVER_CANCEL,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_RECEIVER,
        webtpSessionId: e,
      }).commit();
    }
    function T(e, t) {
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
    function D(e) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_RECEIVER_FILE_FORWARDED,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_RECEIVER,
        webtpSessionId: e,
      }).commit();
    }
    function x() {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_SHARER_AUTO_PROCEED_CHECKBOX,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_SHARER,
      }).commit();
    }
    function $(e) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_SHARER_CONTINUE_AUTO_PROCEED,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_SHARER,
        webtpTelemetryData:
          e != null ? JSON.stringify({ continuationTarget: e }) : void 0,
      }).commit();
    }
    function P(e, t) {
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
    function N(e) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_RECEIVER_FILE_FORWARDED,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_RECEIVER,
        webtpSessionId: e,
        webtpTelemetryData: JSON.stringify({ action: "preview_send" }),
      }).commit();
    }
    function M(e) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_RECEIVER_CANCEL,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_RECEIVER,
        webtpSessionId: e,
        webtpTelemetryData: JSON.stringify({ action: "preview_cancel" }),
      }).commit();
    }
    function w(e, t) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .EDIT_MENU_CLICK,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_VIEWER,
        webtpSessionId: e,
        webtpTelemetryData: t,
      }).commit();
    }
    function A(e, t, n) {
      w(
        n,
        JSON.stringify({
          action: "edit_in_acrobat_click",
          hasUnsavedAnnotations: e,
          source: t,
        }),
      );
    }
    function F(e) {
      var t = e.filehash,
        n = e.hasSkipConfirmationPref;
      w(
        t,
        JSON.stringify({
          action: "edit_pdf_click",
          hasSkipConfirmationPref: n,
        }),
      );
    }
    function O(e, t) {
      return e === t ? "select" : t === "shape" ? "draw" : t;
    }
    function B(e) {
      w(e, JSON.stringify({ action: "edit_mode_enter" }));
    }
    function W(e, t) {
      w(t, JSON.stringify({ action: "tool_select", tool: e }));
    }
    function q(e, t, n) {
      w(
        n,
        JSON.stringify({ action: "annotation_applied", tool: e, source: t }),
      );
    }
    function U(e, t) {
      w(t, JSON.stringify({ action: "style_change", kind: e }));
    }
    function V(e, t, n) {
      w(
        t,
        JSON.stringify(
          n != null
            ? { action: "edit_action", op: e, method: n }
            : { action: "edit_action", op: e },
        ),
      );
    }
    function H(e, t) {
      w(t, JSON.stringify({ action: "annotated_send", hadAnnotations: e }));
    }
    function G(e, t) {
      w(t, JSON.stringify({ action: "annotated_download", hadAnnotations: e }));
    }
    function z(e, t) {
      w(t, JSON.stringify({ action: "annotated_discard", hadAnnotations: e }));
    }
    function j(e, t) {
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
          q(o, r, t);
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.action === "style_change" &&
          "kind" in n
        ) {
          var a = n.kind;
          U(a, t);
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.action === "edit_action" &&
          "op" in n
        ) {
          var i = n.op;
          V(i, t, e.method);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            n,
        );
      }
    }
    ((l.logDocumentOpenEvent = d),
      (l.logDocumentCloseEvent = m),
      (l.logDownloadDocumentClickEvent = p),
      (l.logAppPerfDataEvent = _),
      (l.logAppTelemetryDataEvent = f),
      (l.logViewerRenderTimeEvent = g),
      (l.logRenderErrorEvent = h),
      (l.logPdfSharerOpenEvent = y),
      (l.logPdfSharerCancelEvent = C),
      (l.logPdfSharerContinueEvent = b),
      (l.logPdfSharerSuccessEvent = v),
      (l.logPdfSharerErrorEvent = R),
      (l.logPdfReceiverOpenEvent = L),
      (l.logPdfReceiverSuccessEvent = E),
      (l.logPdfReceiverErrorEvent = k),
      (l.logPdfReceiverCancelEvent = I),
      (l.logPdfReceiverContinueEvent = T),
      (l.logPdfReceiverFileForwardedEvent = D),
      (l.logPdfSharerAutoProceedCheckboxEvent = x),
      (l.logPdfSharerContinueAutoProceedEvent = $),
      (l.logPdfReceiverPreviewOpenEvent = P),
      (l.logPdfReceiverPreviewSendEvent = N),
      (l.logPdfReceiverPreviewCancelEvent = M),
      (l.logEditInAcrobatClickEvent = A),
      (l.logEditPdfClickEvent = F),
      (l.toolSelectForToolClick = O),
      (l.logAnnotationEditModeEnterEvent = B),
      (l.logAnnotationToolSelectEvent = W),
      (l.logAnnotationAppliedEvent = q),
      (l.logAnnotationStyleChangeEvent = U),
      (l.logAnnotationEditActionEvent = V),
      (l.logAnnotatedSendEvent = H),
      (l.logAnnotatedDownloadEvent = G),
      (l.logAnnotatedDiscardEvent = z),
      (l.logAnnotationInteractionFromBridge = j));
  },
  98,
);
