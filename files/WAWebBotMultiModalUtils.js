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
      return Array.from(s(), function (e) {
        return "." + e;
      }).join(",");
    }
    function s() {
      return new Set(
        o("WAWebBotGating")
          .getMetaAiSupportedFileTypes()
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
      var t = s(),
        n = o("WAWebFileUtils").getFileExtension(e.name);
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
    function p(e, t, n) {
      var r = [],
        o = d(e, r);
      if (o.length === 0) return { validAttachments: [], errors: r };
      if (
        c(
          o.map(function (e) {
            return e.file;
          }),
        )
      )
        return (
          r.push({ type: "mixed_media" }),
          { validAttachments: [], errors: r }
        );
      if (n != null && n.size > 0 && !_(o, n))
        return (
          r.push({ type: "mixed_media" }),
          { validAttachments: [], errors: r }
        );
      var a = m(o);
      if (
        (a.length < o.length &&
          (a.length > 0
            ? r.push({ type: "some_items_failed", count: o.length - a.length })
            : r.push({ type: "unsupported_file_format" })),
        a.length === 0)
      )
        return { validAttachments: [], errors: r };
      var i = f(a, t, r);
      return { validAttachments: i, errors: r };
    }
    function _(e, t) {
      if (t.size !== 1) return !1;
      var n = o("WAWebFileUtils").typeFromMimetype(e[0].file.type);
      return t.has(n);
    }
    function f(e, t, n) {
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
    function g(e) {
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
    function h(e, t) {
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
      (l.showMetaAiAttachmentErrors = g),
      (l.maybeShowUnsupportedFileToast = h));
  },
  98,
);
