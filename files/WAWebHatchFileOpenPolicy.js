__d(
  "WAWebHatchFileOpenPolicy",
  ["WAWebFileSaverTypes", "WAWebFilenameManager", "fbs"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "application/octet-stream",
      u = new Map([
        [
          "3gp",
          m((e = o("WAWebFileSaverTypes")).AllowedFileExtensions.THREE_GP),
        ],
        ["csv", m(e.AllowedFileExtensions.CSV)],
        ["doc", m(e.AllowedFileExtensions.DOC)],
        [
          "docx",
          m(
            e.AllowedFileExtensions.DOCX,
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          ),
        ],
        ["json", m(e.AllowedFileExtensions.JSON)],
        ["m4a", m(e.AllowedFileExtensions.M4A)],
        ["md", m(e.AllowedFileExtensions.MD)],
        ["mp3", m(e.AllowedFileExtensions.MP3)],
        ["ogg", m(e.AllowedFileExtensions.OGG)],
        ["pdf", m(e.AllowedFileExtensions.PDF, "application/pdf")],
        ["ppt", m(e.AllowedFileExtensions.PPT)],
        [
          "pptx",
          m(
            e.AllowedFileExtensions.PPTX,
            "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          ),
        ],
        ["tif", m(e.AllowedFileExtensions.TIF)],
        ["tiff", m(e.AllowedFileExtensions.TIFF)],
        ["toml", m(e.AllowedFileExtensions.TOML)],
        ["tsv", m(e.AllowedFileExtensions.TSV)],
        ["txt", m(e.AllowedFileExtensions.TXT)],
        ["wav", m(e.AllowedFileExtensions.WAV)],
        ["xls", m(e.AllowedFileExtensions.XLS)],
        [
          "xlsx",
          m(
            e.AllowedFileExtensions.XLSX,
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          ),
        ],
        ["yaml", m(e.AllowedFileExtensions.YAML)],
        ["yml", m(e.AllowedFileExtensions.YML)],
      ]);
    function c(e, t) {
      var n = e.toLowerCase();
      if (n === "pdf" && t) return { kind: "pdf" };
      var r = u.get(n);
      return r == null
        ? { kind: "none" }
        : babelHelpers.extends({ kind: "download" }, r);
    }
    function d(e, t) {
      var n = t.toLowerCase(),
        a = e.split(/[\\/]/),
        i = o("WAWebFilenameManager")
          .sanitizeFileName(a[a.length - 1])
          .trim();
      t === o("WAWebFileSaverTypes").AllowedFileExtensions.JPG &&
        (i = i.replace(/\.jpeg$/i, n));
      var l = i.length - n.length;
      return (
        l >= 0 && i.slice(l).toLowerCase() === n && (i = i.slice(0, l).trim()),
        (i = i
          .slice(0, o("WAWebFilenameManager").MAX_FILENAME_LENGTH - n.length)
          .replace(/[\uD800-\uDBFF]$/, "")),
        i === "" ? r("fbs")._(/*BTDS*/ "Untitled").toString() : i
      );
    }
    function m(e, t) {
      return (t === void 0 && (t = s), { extension: e, scanMimetype: t });
    }
    ((l.getHatchFileOpenAction = c), (l.hatchFileDownloadName = d));
  },
  226,
);
