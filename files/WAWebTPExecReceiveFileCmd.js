__d(
  "WAWebTPExecReceiveFileCmd",
  [
    "WATimeUtils",
    "WAWebCmd",
    "WAWebSchemaWebTPSharedSession",
    "WAWebTP3PBridge",
    "WAWebTPPdfLoggingUtils",
    "WAWebTPPdfViewerGatingUtils",
    "WAWebTPPdfViewerQpl",
    "WAWebWebTPSharedSessionUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.sessionId,
        n = e.utmCampaign;
      if (
        t == null ||
        t.length === 0 ||
        !o("WAWebTPPdfViewerGatingUtils").isWebTPPdfEditAndShareEnabled()
      )
        return !1;
      var a = o("WAWebTP3PBridge").WAWebTP3PBridge.getDefaultApp();
      if (a == null) return !1;
      try {
        if (t == null) return !1;
        (o("WAWebTPPdfLoggingUtils").logPdfReceiverFileForwardedEvent(t),
          o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverForwardStart(),
          s(t).then(async function (e) {
            if (e == null || e.fileBuffer == null)
              throw (
                o("WAWebTPPdfLoggingUtils").logPdfReceiverErrorEvent(
                  "forward_session_not_found",
                  "Session not found or file buffer is null",
                  t,
                ),
                r("err")("Session not found or file buffer is null")
              );
            var a = new File([e.fileBuffer], e.fileName, {
              type: "application/pdf",
            });
            (await o(
              "WAWebWebTPSharedSessionUtils",
            ).clearWebTPSharedSessionFileBuffer(t),
              o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverForwardComplete(),
              o("WAWebTPPdfViewerGatingUtils").isPdfPreviewBeforeSendEnabled()
                ? (o("WAWebTPPdfLoggingUtils").logPdfReceiverPreviewOpenEvent(
                    t,
                    n,
                  ),
                  o("WAWebCmd").Cmd.trigger(
                    "open_file_forward_modal_with_preview",
                    a,
                    {
                      showPreview: !0,
                      onSend: function () {
                        o(
                          "WAWebTPPdfLoggingUtils",
                        ).logPdfReceiverPreviewSendEvent(t);
                      },
                      onCancel: function () {
                        o(
                          "WAWebTPPdfLoggingUtils",
                        ).logPdfReceiverPreviewCancelEvent(t);
                      },
                    },
                  ))
                : o("WAWebCmd").Cmd.trigger("open_file_forward_modal", a));
          }));
      } catch (e) {
        return (
          o("WAWebTPPdfLoggingUtils").logPdfReceiverErrorEvent(
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
    async function s(e) {
      var t = o("WAWebSchemaWebTPSharedSession").getWebTPSharedSessionTable(),
        n = await t.get(e);
      return n == null
        ? null
        : o("WATimeUtils").unixTime() > n.expiresAt
          ? (await t.remove(e), null)
          : n;
    }
    l.default = e;
  },
  98,
);
