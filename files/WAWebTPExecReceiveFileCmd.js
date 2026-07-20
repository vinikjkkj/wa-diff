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
      var t = e.sessionId,
        a = e.utmCampaign;
      if (
        t == null ||
        t.length === 0 ||
        !o("WAWebTPPdfViewerGatingUtils").isWebTPPdfEditAndShareEnabled()
      )
        return !1;
      var i = o("WAWebTP3PBridge").WAWebTP3PBridge.getDefaultApp();
      if (i == null) return !1;
      try {
        if (t == null) return !1;
        (o("WAWebTPLoggingUtils").logPdfReceiverFileForwardedEvent(t),
          o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverForwardStart(),
          s(t).then(
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  if (e == null || e.fileBuffer == null)
                    throw (
                      o("WAWebTPLoggingUtils").logPdfReceiverErrorEvent(
                        "forward_session_not_found",
                        "Session not found or file buffer is null",
                        t,
                      ),
                      r("err")("Session not found or file buffer is null")
                    );
                  var n = new File([e.fileBuffer], e.fileName, {
                    type: "application/pdf",
                  });
                  (yield o(
                    "WAWebWebTPSharedSessionUtils",
                  ).clearWebTPSharedSessionFileBuffer(t),
                    o(
                      "WAWebTPPdfViewerQpl",
                    ).pdfViewerQpl.receiverForwardComplete(),
                    o(
                      "WAWebTPPdfViewerGatingUtils",
                    ).isPdfPreviewBeforeSendEnabled()
                      ? (o(
                          "WAWebTPLoggingUtils",
                        ).logPdfReceiverPreviewOpenEvent(t, a),
                        o("WAWebCmd").Cmd.trigger(
                          "open_file_forward_modal_with_preview",
                          n,
                          {
                            showPreview: !0,
                            onSend: function () {
                              o(
                                "WAWebTPLoggingUtils",
                              ).logPdfReceiverPreviewSendEvent(t);
                            },
                            onCancel: function () {
                              o(
                                "WAWebTPLoggingUtils",
                              ).logPdfReceiverPreviewCancelEvent(t);
                            },
                          },
                        ))
                      : o("WAWebCmd").Cmd.trigger(
                          "open_file_forward_modal",
                          n,
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
            t,
          ),
          o("WAWebWebTPSharedSessionUtils").clearWebTPSharedSessionFileBuffer(
            t,
          ),
          !1
        );
      }
      return !0;
    }
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        u.apply(this, arguments)
      );
    }
    l.default = e;
  },
  98,
);
