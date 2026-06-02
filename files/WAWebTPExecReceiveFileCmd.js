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
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = o("WAWebSchemaWebTPSharedSession").getWebTPSharedSessionTable(),
        n = await t.get(e);
      return n == null
        ? null
        : o("WATimeUtils").unixTime() > n.expiresAt
          ? (await t.remove(e), null)
          : n;
    }
    function s(t) {
      var n = t.sessionId,
        a = t.utmCampaign;
      if (
        n == null ||
        n.length === 0 ||
        !o("WAWebTPPdfViewerGatingUtils").isWebTPPdfEditAndShareEnabled()
      )
        return !1;
      var i = o("WAWebTP3PBridge").WAWebTP3PBridge.getDefaultApp();
      if (i == null) return !1;
      try {
        if (n == null) return !1;
        (o("WAWebTPLoggingUtils").logPdfReceiverFileForwardedEvent(n),
          o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverForwardStart(),
          e(n).then(async function (e) {
            if (e == null || e.fileBuffer == null)
              throw (
                o("WAWebTPLoggingUtils").logPdfReceiverErrorEvent(
                  "forward_session_not_found",
                  "Session not found or file buffer is null",
                  n,
                ),
                r("err")("Session not found or file buffer is null")
              );
            var t = new File([e.fileBuffer], e.fileName, {
              type: "application/pdf",
            });
            (await o(
              "WAWebWebTPSharedSessionUtils",
            ).clearWebTPSharedSessionFileBuffer(n),
              o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverForwardComplete(),
              o("WAWebTPPdfViewerGatingUtils").isPdfPreviewBeforeSendEnabled()
                ? (o("WAWebTPLoggingUtils").logPdfReceiverPreviewOpenEvent(
                    n,
                    a,
                  ),
                  o("WAWebCmd").Cmd.trigger(
                    "open_file_forward_modal_with_preview",
                    t,
                    {
                      showPreview: !0,
                      onSend: function () {
                        o("WAWebTPLoggingUtils").logPdfReceiverPreviewSendEvent(
                          n,
                        );
                      },
                      onCancel: function () {
                        o(
                          "WAWebTPLoggingUtils",
                        ).logPdfReceiverPreviewCancelEvent(n);
                      },
                    },
                  ))
                : o("WAWebCmd").Cmd.trigger("open_file_forward_modal", t));
          }));
      } catch (e) {
        return (
          o("WAWebTPLoggingUtils").logPdfReceiverErrorEvent(
            "forward_failed",
            "Exception during file forward",
            n,
          ),
          o("WAWebWebTPSharedSessionUtils").clearWebTPSharedSessionFileBuffer(
            n,
          ),
          !1
        );
      }
      return !0;
    }
    l.default = s;
  },
  98,
);
