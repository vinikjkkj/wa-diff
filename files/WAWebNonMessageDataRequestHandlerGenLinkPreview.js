__d(
  "WAWebNonMessageDataRequestHandlerGenLinkPreview",
  [
    "WAResolvable",
    "WAWebNonMessageDataRequestLoggingUtils",
    "WAWebProtobufsMmsRetry.pb",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Map();
    function s(t) {
      var n = new (o("WAResolvable").Resolvable)();
      return (e.set(t, n), n);
    }
    function u(t) {
      var n, r;
      if (
        (o("WAWebNonMessageDataRequestLoggingUtils").logLinkPreviewResponse(
          t.stanzaId,
          ((n = t.peerDataOperationResult[0]) == null
            ? void 0
            : n.mediaUploadResult) ===
            o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType
              .SUCCESS,
          ((r = t.peerDataOperationResult[0]) == null ||
          (r = r.linkPreviewResponse) == null
            ? void 0
            : r.hqThumbnail) != null,
        ),
        t.stanzaId != null)
      ) {
        var a = t.stanzaId;
        if (e.has(a)) {
          var i = e.get(a);
          (e.delete(a), i == null || i.resolve(t.peerDataOperationResult[0]));
        }
      }
    }
    ((l.registerLinkPreviewHandlerHook = s),
      (l.handleGenerateLinkPreviewOperationRequestResponse = u));
  },
  98,
);
