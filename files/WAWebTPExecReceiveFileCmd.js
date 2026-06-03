__d(
  "WAWebTPExecReceiveFileCmd",
  [
    "WATimeUtils",
    "WAWebCmd",
    "WAWebSchemaWebTPSharedSession",
    "WAWebTP3PBridge",
    "WAWebTPLoggingUtils",
    "WAWebTPPdfViewerGatingUtils",
    "WAWebTPPdfViewerQpl",
    "WAWebWebTPSharedSessionUtils",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
              "WAWebSchemaWebTPSharedSession",
            ).getWebTPSharedSessionTable(),
            n = yield t.get(e);
          return n == null
            ? null
            : o("WATimeUtils").unixTime() > n.expiresAt
              ? (yield t.remove(e), null)
              : n;
        })),
        s.apply(this, arguments)
      );
    }
    function u(t) {
      var a = t.sessionId,
        i = t.utmCampaign;
      if (
        a == null ||
        a.length === 0 ||
        !o("WAWebTPPdfViewerGatingUtils").isWebTPPdfEditAndShareEnabled()
      )
        return !1;
      var l = o("WAWebTP3PBridge").WAWebTP3PBridge.getDefaultApp();
      if (l == null) return !1;
      try {
        if (a == null) return !1;
        (o("WAWebTPLoggingUtils").logPdfReceiverFileForwardedEvent(a),
          o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverForwardStart(),
          e(a).then(
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  if (e == null || e.fileBuffer == null)
                    throw (
                      o("WAWebTPLoggingUtils").logPdfReceiverErrorEvent(
                        "forward_session_not_found",
                        "Session not found or file buffer is null",
                        a,
                      ),
                      r("err")("Session not found or file buffer is null")
                    );
                  var t = new File([e.fileBuffer], e.fileName, {
                    type: "application/pdf",
                  });
                  (yield o(
                    "WAWebWebTPSharedSessionUtils",
                  ).clearWebTPSharedSessionFileBuffer(a),
                    o(
                      "WAWebTPPdfViewerQpl",
                    ).pdfViewerQpl.receiverForwardComplete(),
                    o(
                      "WAWebTPPdfViewerGatingUtils",
                    ).isPdfPreviewBeforeSendEnabled()
                      ? (o(
                          "WAWebTPLoggingUtils",
                        ).logPdfReceiverPreviewOpenEvent(a, i),
                        o("WAWebCmd").Cmd.trigger(
                          "open_file_forward_modal_with_preview",
                          t,
                          {
                            showPreview: !0,
                            onSend: function () {
                              o(
                                "WAWebTPLoggingUtils",
                              ).logPdfReceiverPreviewSendEvent(a);
                            },
                            onCancel: function () {
                              o(
                                "WAWebTPLoggingUtils",
                              ).logPdfReceiverPreviewCancelEvent(a);
                            },
                          },
                        ))
                      : o("WAWebCmd").Cmd.trigger(
                          "open_file_forward_modal",
                          t,
                        ));
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          ));
      } catch (e) {
        return (
          o("WAWebTPLoggingUtils").logPdfReceiverErrorEvent(
            "forward_failed",
            "Exception during file forward",
            a,
          ),
          o("WAWebWebTPSharedSessionUtils").clearWebTPSharedSessionFileBuffer(
            a,
          ),
          !1
        );
      }
      return !0;
    }
    l.default = u;
  },
  98,
);
