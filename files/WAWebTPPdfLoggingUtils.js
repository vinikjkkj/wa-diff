__d(
  "WAWebTPPdfLoggingUtils",
  [
    "WACustomError",
    "WAWebTPLoggingUtils",
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
      u = (e = r("justknobx")._("4883")) != null ? e : 1,
      c = (s = r("justknobx")._("4885")) != null ? s : 1;
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WAWebTPLoggingUtils").shouldLogSession(e, u) &&
            new (o(
              "WAWebWebcWebtpPdfViewerWamEvent",
            ).WebcWebtpPdfViewerWamEvent)({
              webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE.OPEN,
              webtpSessionId: e,
              webtpFileSize: t,
              webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
                .PDF_VIEWER,
              webtpTelemetryData: JSON.stringify({ sampleRate: u }),
            }).commit();
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n, r, o) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            o("WAWebTPLoggingUtils").shouldLogSession(
              e,
              o("WAWebTPLoggingUtils").SESSION_SAMPLE_RATE,
            ) &&
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
                  sampleRate: o("WAWebTPLoggingUtils").SESSION_SAMPLE_RATE,
                }),
              }).commit();
          },
        )),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n) {
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
    function g(e) {
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
    function h(e, t, n, r) {
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
    function y(e) {
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
    function C(e, t, n) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
          var a = o("WAWebTPLoggingUtils").asTelemetryError(e);
          if (a != null) {
            var i,
              l = o("WAWebTPLoggingUtils").convertTelemetryErrorEventToLogEvent(
                a,
              );
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
          var s = o("WAWebTPLoggingUtils").asError(e);
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
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_SHARER_OPEN,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_SHARER,
        webtpSessionId: e,
        webtpFileSize: t,
      }).commit();
    }
    function S(e, t) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_SHARER_CANCEL,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_SHARER,
        webtpSessionId: e,
        webtpTelemetryData: JSON.stringify({ stage: t }),
      }).commit();
    }
    function R(e, t, n, r) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_SHARER_CONTINUE,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_SHARER,
        webtpSessionId: e,
        webtpFileSize: t,
        webtpTelemetryData: E(n, r),
      }).commit();
    }
    function L(e, t, n, r) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_SHARER_SUCCESS,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_SHARER,
        webtpSessionId: e,
        webtpFileSize: t,
        webtpTelemetryData: E(n, r),
      }).commit();
    }
    function E(e, t) {
      if (!(e == null && t == null)) {
        var n = {};
        return (
          e != null && (n.continuationTarget = e),
          t != null && (n.uid = t),
          JSON.stringify(n)
        );
      }
    }
    function k(e, t, n, r, a) {
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
    function I(e) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_RECEIVER_OPEN,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_RECEIVER,
        webtpSessionId: e,
      }).commit();
    }
    function T(e, t) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_RECEIVER_SUCCESS,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_RECEIVER,
        webtpSessionId: e,
        webtpFileSize: t,
      }).commit();
    }
    function D(e, t, n, r) {
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
    function x(e) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_RECEIVER_CANCEL,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_RECEIVER,
        webtpSessionId: e,
      }).commit();
    }
    function $(e, t) {
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
    function P(e) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_RECEIVER_FILE_FORWARDED,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_RECEIVER,
        webtpSessionId: e,
      }).commit();
    }
    function N() {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_SHARER_AUTO_PROCEED_CHECKBOX,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_SHARER,
      }).commit();
    }
    function M(e) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_SHARER_CONTINUE_AUTO_PROCEED,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_SHARER,
        webtpTelemetryData:
          e != null ? JSON.stringify({ continuationTarget: e }) : void 0,
      }).commit();
    }
    function w(e, t) {
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
    function A(e) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_RECEIVER_FILE_FORWARDED,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_RECEIVER,
        webtpSessionId: e,
        webtpTelemetryData: JSON.stringify({ action: "preview_send" }),
      }).commit();
    }
    function F(e) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .PDF_RECEIVER_CANCEL,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_RECEIVER,
        webtpSessionId: e,
        webtpTelemetryData: JSON.stringify({ action: "preview_cancel" }),
      }).commit();
    }
    function O(e, t) {
      new (o("WAWebWebcWebtpPdfViewerWamEvent").WebcWebtpPdfViewerWamEvent)({
        webtpEvent: o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE
          .EDIT_MENU_CLICK,
        webtpSource: o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE
          .PDF_VIEWER,
        webtpSessionId: e,
        webtpTelemetryData: t,
      }).commit();
    }
    function B(e, t, n) {
      O(
        n,
        JSON.stringify({
          action: "edit_in_acrobat_click",
          hasUnsavedAnnotations: e,
          source: t,
        }),
      );
    }
    function W(e) {
      var t = e.filehash,
        n = e.hasSkipConfirmationPref;
      O(
        t,
        JSON.stringify({
          action: "edit_pdf_click",
          hasSkipConfirmationPref: n,
        }),
      );
    }
    function q(e, t) {
      return e === t ? "select" : t === "shape" ? "draw" : t;
    }
    function U(e) {
      O(e, JSON.stringify({ action: "edit_mode_enter" }));
    }
    function V(e, t) {
      O(t, JSON.stringify({ action: "tool_select", tool: e }));
    }
    function H(e, t, n) {
      O(
        n,
        JSON.stringify({ action: "annotation_applied", tool: e, source: t }),
      );
    }
    function G(e, t) {
      O(t, JSON.stringify({ action: "style_change", kind: e }));
    }
    function z(e, t, n) {
      O(
        t,
        JSON.stringify(
          n != null
            ? { action: "edit_action", op: e, method: n }
            : { action: "edit_action", op: e },
        ),
      );
    }
    function j(e, t) {
      O(t, JSON.stringify({ action: "annotated_send", hadAnnotations: e }));
    }
    function K(e, t) {
      O(t, JSON.stringify({ action: "annotated_download", hadAnnotations: e }));
    }
    function Q(e, t) {
      O(t, JSON.stringify({ action: "annotated_discard", hadAnnotations: e }));
    }
    function X(e, t) {
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
          H(o, r, t);
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.action === "style_change" &&
          "kind" in n
        ) {
          var a = n.kind;
          G(a, t);
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.action === "edit_action" &&
          "op" in n
        ) {
          var i = n.op;
          z(i, t, e.method);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            n,
        );
      }
    }
    ((l.logDocumentOpenEvent = d),
      (l.logDocumentCloseEvent = p),
      (l.logDownloadDocumentClickEvent = f),
      (l.logAppPerfDataEvent = g),
      (l.logAppTelemetryDataEvent = h),
      (l.logViewerRenderTimeEvent = y),
      (l.logRenderErrorEvent = C),
      (l.logPdfSharerOpenEvent = v),
      (l.logPdfSharerCancelEvent = S),
      (l.logPdfSharerContinueEvent = R),
      (l.logPdfSharerSuccessEvent = L),
      (l.logPdfSharerErrorEvent = k),
      (l.logPdfReceiverOpenEvent = I),
      (l.logPdfReceiverSuccessEvent = T),
      (l.logPdfReceiverErrorEvent = D),
      (l.logPdfReceiverCancelEvent = x),
      (l.logPdfReceiverContinueEvent = $),
      (l.logPdfReceiverFileForwardedEvent = P),
      (l.logPdfSharerAutoProceedCheckboxEvent = N),
      (l.logPdfSharerContinueAutoProceedEvent = M),
      (l.logPdfReceiverPreviewOpenEvent = w),
      (l.logPdfReceiverPreviewSendEvent = A),
      (l.logPdfReceiverPreviewCancelEvent = F),
      (l.logEditInAcrobatClickEvent = B),
      (l.logEditPdfClickEvent = W),
      (l.toolSelectForToolClick = q),
      (l.logAnnotationEditModeEnterEvent = U),
      (l.logAnnotationToolSelectEvent = V),
      (l.logAnnotationAppliedEvent = H),
      (l.logAnnotationStyleChangeEvent = G),
      (l.logAnnotationEditActionEvent = z),
      (l.logAnnotatedSendEvent = j),
      (l.logAnnotatedDownloadEvent = K),
      (l.logAnnotatedDiscardEvent = Q),
      (l.logAnnotationInteractionFromBridge = X));
  },
  98,
);
