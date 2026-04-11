__d(
  "WAWebBizBroadcastsFileTypeValidator",
  ["$InternalEnum", "WAWebMimeTypes"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum")({
        AUDIO: "audio",
        CSV: "csv",
        DOC: "doc",
        EXCEL: "excel",
        PDF: "pdf",
        PPTX: "pptx",
        ZIP: "zip",
      }),
      u =
        ((e = {}),
        (e[s.AUDIO] = {
          extensions: [".aac", ".mp3", ".mp4", ".amr", ".mpeg", ".ogg", ".wav"],
          mimeTypes: [
            "audio/aac",
            "audio/mp4",
            "audio/amr",
            "audio/mpeg",
            "audio/ogg; codecs=opus",
            "audio/wav",
          ],
        }),
        (e[s.CSV] = {
          extensions: [".csv"],
          mimeTypes: ["text/csv", "application/csv"],
        }),
        (e[s.DOC] = {
          extensions: [".doc", ".docx"],
          mimeTypes: [
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          ],
        }),
        (e[s.EXCEL] = {
          extensions: [".xlsx", ".xls"],
          mimeTypes: [
            "application/vnd.ms-excel",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          ],
        }),
        (e[s.PDF] = { extensions: [".pdf"], mimeTypes: ["application/pdf"] }),
        (e[s.PPTX] = {
          extensions: [".ppt", ".pptx"],
          mimeTypes: [
            "application/vnd.ms-powerpoint",
            "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          ],
        }),
        (e[s.ZIP] = { extensions: [".zip"], mimeTypes: ["application/zip"] }),
        e),
      c = [s.CSV, s.DOC, s.EXCEL, s.PDF, s.PPTX, s.ZIP];
    function d(e, t) {
      if (!u[t]) return !1;
      var n = u[t];
      return (
        n.extensions.some(function (t) {
          return e.name.endsWith(t);
        }) || n.mimeTypes.includes(e.type)
      );
    }
    function m(e) {
      e === void 0 && (e = [s.EXCEL, s.CSV]);
      var t = [];
      e.forEach(function (e) {
        u[e] &&
          (t.push.apply(t, u[e].extensions), t.push.apply(t, u[e].mimeTypes));
      });
      var n = Array.from(new Set(t));
      return n.join(",");
    }
    function p() {
      return m(c);
    }
    function _(e) {
      var t = o("WAWebMimeTypes").IMAGE_MIMES.replace("*", ".*"),
        n = new RegExp("^" + t + "$");
      return n.test(e);
    }
    function f(e) {
      return o("WAWebMimeTypes").getVideoMimes().split(",").includes(e);
    }
    ((l.FileType = s),
      (l.isFileOfType = d),
      (l.getAcceptTypesString = m),
      (l.getBBDocumentsAcceptTypesString = p),
      (l.isAttachmentImageMimeType = _),
      (l.isAttachmentVideoMimeType = f));
  },
  98,
);
