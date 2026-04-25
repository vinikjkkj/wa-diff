__d(
  "WAWebBizBroadcastsFileTypeValidator",
  ["WAWebContactImportFileTypeValidator", "WAWebMimeTypes"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = [
        (e = o("WAWebContactImportFileTypeValidator")).FileType.CSV,
        e.FileType.DOC,
        e.FileType.EXCEL,
        e.FileType.PDF,
        e.FileType.PPTX,
        e.FileType.ZIP,
      ];
    function u() {
      return o("WAWebContactImportFileTypeValidator").getAcceptTypesString(s);
    }
    function c(e) {
      var t = o("WAWebMimeTypes").IMAGE_MIMES.replace("*", ".*"),
        n = new RegExp("^" + t + "$");
      return n.test(e);
    }
    function d(e) {
      return o("WAWebMimeTypes").getVideoMimes().split(",").includes(e);
    }
    ((l.getBBDocumentsAcceptTypesString = u),
      (l.isAttachmentImageMimeType = c),
      (l.isAttachmentVideoMimeType = d));
  },
  98,
);
