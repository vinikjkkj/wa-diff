__d(
  "WAWebContactImportFileTypeValidator",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e,
      l = n("$InternalEnum")({
        AUDIO: "audio",
        CSV: "csv",
        DOC: "doc",
        EXCEL: "excel",
        PDF: "pdf",
        PPTX: "pptx",
        ZIP: "zip",
      }),
      s =
        ((e = {}),
        (e[l.AUDIO] = {
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
        (e[l.CSV] = {
          extensions: [".csv"],
          mimeTypes: ["text/csv", "application/csv"],
        }),
        (e[l.DOC] = {
          extensions: [".doc", ".docx"],
          mimeTypes: [
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          ],
        }),
        (e[l.EXCEL] = {
          extensions: [".xlsx", ".xls"],
          mimeTypes: [
            "application/vnd.ms-excel",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          ],
        }),
        (e[l.PDF] = { extensions: [".pdf"], mimeTypes: ["application/pdf"] }),
        (e[l.PPTX] = {
          extensions: [".ppt", ".pptx"],
          mimeTypes: [
            "application/vnd.ms-powerpoint",
            "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          ],
        }),
        (e[l.ZIP] = { extensions: [".zip"], mimeTypes: ["application/zip"] }),
        e);
    function u(e, t) {
      if (!s[t]) return !1;
      var n = s[t];
      return (
        n.extensions.some(function (t) {
          return e.name.endsWith(t);
        }) || n.mimeTypes.includes(e.type)
      );
    }
    function c(e) {
      e === void 0 && (e = [l.EXCEL, l.CSV]);
      var t = [];
      e.forEach(function (e) {
        s[e] &&
          (t.push.apply(t, s[e].extensions), t.push.apply(t, s[e].mimeTypes));
      });
      var n = Array.from(new Set(t));
      return n.join(",");
    }
    ((i.FileType = l), (i.isFileOfType = u), (i.getAcceptTypesString = c));
  },
  66,
);
