__d(
  "WAWebBotMultiModalUtils",
  ["WAWebBotGating", "WAWebBotMultiModalToasts", "WAWebFileUtils"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebBotGating").getMetaAiSupportedFileTypes();
      return e === ""
        ? ""
        : e
            .split(",")
            .map(function (e) {
              return "." + e.trim();
            })
            .join(",");
    }
    function s() {
      var e = o("WAWebBotGating").getMetaAiSupportedFileTypes();
      return e === ""
        ? new Set()
        : new Set(
            e
              .split(",")
              .map(function (e) {
                return e.trim().toLowerCase();
              })
              .filter(function (e) {
                return e !== "";
              }),
          );
    }
    function u(e) {
      var t = s();
      if (t.size === 0) return !0;
      var n = o("WAWebFileUtils").getFileExtension(e.name);
      return n != null && t.has(n);
    }
    function c(e) {
      var t = new Set(
        e.map(function (e) {
          return o("WAWebFileUtils").typeFromMimetype(e.type);
        }),
      );
      return t.size > 1;
    }
    function d(e) {
      return e.filter(function (e) {
        var t = o("WAWebFileUtils").typeFromMimetype(e.file.type);
        return t !== o("WAWebFileUtils").FILETYPE.DOCUMENT ? !0 : u(e.file);
      });
    }
    function m(e, t) {
      e !== t &&
        (e > 0
          ? o("WAWebBotMultiModalToasts").showSendMediaFailedItemToast(t - e)
          : o("WAWebBotMultiModalToasts").showUnsupportedFileFormatToast());
    }
    ((l.getMetaAiFilePickerAcceptOverride = e),
      (l.getMetaAiSupportedFileTypesList = s),
      (l.isFileTypeSupportedForMetaAi = u),
      (l.hasMetaAiMixedMediaTypes = c),
      (l.getSupportedMetaAiAttachments = d),
      (l.maybeShowUnsupportedFileToast = m));
  },
  98,
);
