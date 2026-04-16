__d(
  "WAWebBotMultiModalUtils",
  [
    "WAWebBotGating",
    "WAWebBotMultiModalToasts",
    "WAWebFileUtils",
    "WAWebMediaGatingUtils",
  ],
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
    function d(e, t) {
      var n = new Set();
      (o("WAWebBotGating").isMetaAiImageInputEnabled() &&
        n.add(o("WAWebFileUtils").FILETYPE.IMAGE),
        o("WAWebBotGating").isMetaAiDocUploadEnabled() &&
          n.add(o("WAWebFileUtils").FILETYPE.DOCUMENT));
      var r = new Set(),
        a = e.filter(function (e) {
          var t = o("WAWebFileUtils").typeFromMimetype(e.file.type);
          return n.has(t) ? !0 : (r.add(t), !1);
        });
      return (
        r.size > 0 &&
          t.push({ type: "unsupported_mime_types", fileTypes: Array.from(r) }),
        a
      );
    }
    function m(e) {
      return e.filter(function (e) {
        var t = o("WAWebFileUtils").typeFromMimetype(e.file.type);
        return t !== o("WAWebFileUtils").FILETYPE.DOCUMENT ? !0 : u(e.file);
      });
    }
    function p(e, t) {
      var n = [],
        r = d(e, n);
      if (r.length === 0) return { validAttachments: [], errors: n };
      if (
        c(
          r.map(function (e) {
            return e.file;
          }),
        )
      )
        return (
          n.push({ type: "mixed_media" }),
          { validAttachments: [], errors: n }
        );
      var o = m(r);
      if (
        (o.length < r.length &&
          (o.length > 0
            ? n.push({ type: "some_items_failed", count: r.length - o.length })
            : n.push({ type: "unsupported_file_format" })),
        o.length === 0)
      )
        return { validAttachments: [], errors: n };
      var a = _(o, t, n);
      return { validAttachments: a, errors: n };
    }
    function _(e, t, n) {
      var r = o("WAWebFileUtils").typeFromMimetype(e[0].file.type),
        a = o("WAWebMediaGatingUtils").getMaxNumberSelectableMedia(
          e.length,
          t,
          r,
        );
      return e.length <= a
        ? e
        : (r === o("WAWebFileUtils").FILETYPE.IMAGE
            ? n.push({ type: "image_limit_exceeded", limit: a })
            : r === o("WAWebFileUtils").FILETYPE.DOCUMENT &&
              n.push({ type: "document_limit_exceeded", limit: a }),
          e.slice(0, a));
    }
    function f(e) {
      for (var t of e)
        e: {
          var n = t;
          if (
            ((typeof n == "object" && n !== null) || typeof n == "function") &&
            n.type === "mixed_media"
          ) {
            o("WAWebBotMultiModalToasts").showMixedMediaTypeToast();
            break e;
          }
          if (
            ((typeof n == "object" && n !== null) || typeof n == "function") &&
            n.type === "unsupported_mime_types" &&
            "fileTypes" in n
          ) {
            var r = n.fileTypes;
            o("WAWebBotMultiModalToasts").showUnsupportedMimeTypesToast(r);
            break e;
          }
          if (
            ((typeof n == "object" && n !== null) || typeof n == "function") &&
            n.type === "unsupported_file_format"
          ) {
            o("WAWebBotMultiModalToasts").showUnsupportedFileFormatToast();
            break e;
          }
          if (
            ((typeof n == "object" && n !== null) || typeof n == "function") &&
            n.type === "some_items_failed" &&
            "count" in n
          ) {
            var a = n.count;
            o("WAWebBotMultiModalToasts").showSendMediaFailedItemToast(a);
            break e;
          }
          if (
            ((typeof n == "object" && n !== null) || typeof n == "function") &&
            n.type === "image_limit_exceeded" &&
            "limit" in n
          ) {
            var i = n.limit;
            o("WAWebBotMultiModalToasts").showImageSendLimitExceededToast(i);
            break e;
          }
          if (
            ((typeof n == "object" && n !== null) || typeof n == "function") &&
            n.type === "document_limit_exceeded" &&
            "limit" in n
          ) {
            var l = n.limit;
            o("WAWebBotMultiModalToasts").showDocumentUploadLimitExceededToast(
              l,
            );
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              n,
          );
        }
    }
    function g(e, t) {
      e !== t &&
        (e > 0
          ? o("WAWebBotMultiModalToasts").showSendMediaFailedItemToast(t - e)
          : o("WAWebBotMultiModalToasts").showUnsupportedFileFormatToast());
    }
    ((l.getMetaAiFilePickerAcceptOverride = e),
      (l.getMetaAiSupportedFileTypesList = s),
      (l.isFileTypeSupportedForMetaAi = u),
      (l.hasMetaAiMixedMediaTypes = c),
      (l.getSupportedMetaAiAttachments = m),
      (l.validateMetaAiAttachments = p),
      (l.showMetaAiAttachmentErrors = f),
      (l.maybeShowUnsupportedFileToast = g));
  },
  98,
);
