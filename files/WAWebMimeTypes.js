__d(
  "WAWebMimeTypes",
  [
    "WATypedArraysEqual",
    "WAWebABProps",
    "WAWebMimeTypesBuildExtToMime",
    "WAWebMiscErrors",
    "file-type",
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 262,
      s = new Uint8Array([208, 207, 17, 224, 161, 177, 26, 225]),
      u = "application/x-cfb";
    function c(e) {
      return r("WATypedArraysEqual")(e, s);
    }
    var d = {
        "text/plain": {
          ext: "TXT",
          msgType: "document",
          icon: "icon-doc-txt",
          canSend: !0,
        },
        "text/rtf": {
          ext: "RTF",
          msgType: "document",
          icon: "icon-doc-doc",
          canSend: !0,
          signatureMimetype: "application/rtf",
        },
        "text/html": {
          ext: "HTML",
          msgType: "document",
          icon: "icon-doc-txt",
          canSend: !1,
          previewType: "html",
        },
        "text/vcard": { ext: "VCF", msgType: "vcard" },
        "application/zip": {
          ext: "ZIP",
          icon: "icon-doc-generic",
          msgType: "document",
        },
        "application/pdf": {
          ext: "PDF",
          msgType: "document",
          icon: "icon-doc-pdf",
          canSend: !0,
          signatureMimetype: "application/pdf",
          previewType: "pdf",
        },
        "application/msword": {
          ext: "DOC",
          msgType: "document",
          icon: "icon-doc-doc",
          canSend: !0,
          signatureMimetype: "application/x-msi",
          previewType: "msoffice",
        },
        "application/vnd.ms-excel": {
          ext: "XLS",
          msgType: "document",
          icon: "icon-doc-xls",
          canSend: !0,
          signatureMimetype: "application/x-msi",
          previewType: "msoffice",
        },
        "application/vnd.ms-powerpoint": {
          ext: "PPT",
          msgType: "document",
          icon: "icon-doc-ppt",
          canSend: !0,
          signatureMimetype: "application/x-msi",
          previewType: "msoffice",
        },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
          {
            ext: "DOCX",
            msgType: "document",
            icon: "icon-doc-doc",
            canSend: !0,
            signatureMimetype: "application/zip",
            previewType: "msoffice",
          },
        "application/vnd.openxmlformats-officedocument.presentationml.presentation":
          {
            ext: "PPTX",
            msgType: "document",
            icon: "icon-doc-ppt",
            canSend: !0,
            signatureMimetype: "application/zip",
            previewType: "msoffice",
          },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
          ext: "XLSX",
          msgType: "document",
          icon: "icon-doc-xls",
          canSend: !0,
          signatureMimetype: "application/zip",
          previewType: "msoffice",
        },
        "audio/aac": { msgType: "audio", ext: "AAC" },
        "audio/mp4": { msgType: "audio" },
        "audio/amr": { msgType: "audio" },
        "audio/mpeg": { msgType: "audio" },
        "audio/ogg; codecs=opus": { msgType: "audio", ext: "OGG" },
        "audio/wav": { msgType: "audio", ext: "wav" },
        "video/mp4": { msgType: "video", ext: "MP4" },
        "video/3gpp": { msgType: "video" },
        "image/jpeg": { msgType: "image" },
        "image/png": { msgType: "image" },
      },
      m = d,
      p = r("lodash").pickBy(m, function (e) {
        return (e == null ? void 0 : e.msgType) === "document";
      }),
      _ = "*",
      f = "image/*",
      g = "video/mp4,video/3gpp,video/quicktime",
      h = "video/mp4,video/3gpp,video/quicktime,video/webm,video/x-matroska";
    function y() {
      return o("WAWebABProps").getABPropConfigValue(
        "transcode_and_repair_videos",
      ) === !0
        ? h
        : g;
    }
    var C = g,
      b = "audio/wav,audio/mp3,audio/ogg,audio/aac,audio/mpeg",
      v = r("WAWebMimeTypesBuildExtToMime")(),
      S = r("lodash").pickBy(d, function (e) {
        return (
          (e == null ? void 0 : e.msgType) === "document" &&
          e.canSend === !0 &&
          e.ext != null
        );
      });
    function R(e, t, n) {
      n === void 0 && (n = !1);
      for (var r in S) {
        var o = d[r];
        if (o != null) {
          var a = o.ext,
            i = o.signatureMimetype,
            l = n ? i : r;
          if (
            l === e &&
            a != null &&
            t != null &&
            t.toLowerCase().endsWith(a.toLowerCase())
          )
            return r;
        }
      }
      return n || e != null ? e : "application/octet-stream";
    }
    function L(e) {
      var t,
        n = d[e];
      return n
        ? "." + ((t = n.ext) != null ? t : e.split("/")[1]).toLowerCase()
        : "";
    }
    function E(e) {
      var t = d[e];
      return t == null ? void 0 : t.previewType;
    }
    function k(t, n) {
      var a = n.subarray(0, e),
        i = r("file-type")(a);
      if (i) return i.mime;
      if (t === "image") return "image/jpeg";
      if (t === "group-history") return "application/protobuf";
      throw new (o("WAWebMiscErrors").MediaEncryptionError)(
        "unknown mime decrypt error for type:" + t,
      );
    }
    var I = "audio/ogg";
    function T(e) {
      return e == null ? !1 : e.includes(I);
    }
    function D(e) {
      return E(e) === "pdf";
    }
    function x(e) {
      return E(e) === "html";
    }
    ((l.MIMETYPE_DETERMINING_LENGTH = e),
      (l.MSCFB_HEADER = s),
      (l.MSCFB_MIME = u),
      (l.isMsCompoundFileBinaryFormat = c),
      (l.MIMETYPES = m),
      (l.DOCUMENT_MIMETYPES = p),
      (l.DOC_MIMES = _),
      (l.IMAGE_MIMES = f),
      (l.getVideoMimes = y),
      (l.VIDEO_MIMES = C),
      (l.AUDIO_MIMES = b),
      (l.EXT_TO_MIME = v),
      (l.isAllowedDocumentMimetype = R),
      (l.getExtension = L),
      (l.previewType = E),
      (l.getMediaMimeType = k),
      (l.isOpus = T),
      (l.isPdfDocument = D),
      (l.isHtmlDocument = x));
  },
  98,
);
