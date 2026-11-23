__d(
  "MAIBAMediaAttachmentHelper",
  ["MAIBAMediaAttachmentConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { "application/pdf": "PDF" };
    function s(t) {
      return t != null && e[t] != null ? e[t] : "Document";
    }
    function u(e) {
      var t = e.toUpperCase();
      return t === "BASE64_IMAGE" ||
        t === "IMAGE_EVERSTORE_HANDLE" ||
        t === "MAIBA_INTERNAL"
        ? "image"
        : t === "URL"
          ? "document"
          : null;
    }
    function c(e) {
      var t =
        e != null
          ? o("MAIBAMediaAttachmentConstants").MaibaInternalAttachmentKind.cast(
              e,
            )
          : null;
      return (
        t ===
          o("MAIBAMediaAttachmentConstants").MaibaInternalAttachmentKind
            .VIDEO_ID ||
        t ===
          o("MAIBAMediaAttachmentConstants").MaibaInternalAttachmentKind
            .UPLOADED_VIDEO_ID
      );
    }
    function d(e) {
      return e != null && e.startsWith("blob:");
    }
    function m(e) {
      var t = e.media_url;
      t != null && d(t) && URL.revokeObjectURL(t);
    }
    ((l.getDocumentTypeLabel = s),
      (l.getMediaCategory = u),
      (l.isVideoAttachment = c),
      (l.isLocalPreviewURL = d),
      (l.revokeLocalPreviewURL = m));
  },
  98,
);
