__d(
  "WAWebMediaMessageGetValidatedProperties",
  [
    "$InternalEnum",
    "WALogger",
    "WALongInt",
    "WAWebHandleMsgError",
    "WAWebMmsMediaTypes",
    "WAWebMsgType",
    "WAWebNewsletterIsNewsletterMsg",
    "WAWebURLUtils",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWid",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = n("$InternalEnum")({
        MISSING_MEDIA_KEY: "missing_media_key",
        INVALID_SHA256: "invalid_sha256",
        INVALID_ENC_SHA256: "invalid_enc_sha256",
        INVALID_URL: "invalid_url",
        INVALID_MIME_TYPE: "invalid_mime_type",
        INVALID_MEDIA_KEY: "invalid_media_key",
        INVALID_FILE_LENGTH: "invalid_file_length",
      }),
      c = (function (e) {
        function t(t, n, r, o) {
          var a,
            i = String(n) + " for " + t + " message";
          return (
            (a = e.call(this, i, r, o) || this),
            (a.name = "MediaMessageValidationError"),
            a
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WAWebHandleMsgError").MessageValidationError),
      d = "video/",
      m = "image/";
    function p(e) {
      return _(e) || e.startsWith(m);
    }
    function _(e) {
      return e.startsWith(d);
    }
    function f(e) {
      var t = r("WAWebURLUtils").hostname(e);
      return t.endsWith(".whatsapp.net") || t === "whatsapp.net";
    }
    var g = function (t) {
      return t.id == null;
    };
    function h(t, n, a, i) {
      var l = t.fileEncSha256,
        d = t.fileLength,
        m = t.fileSha256,
        p = t.mediaKey,
        _ = t.mimetype,
        h = t.url,
        y =
          a === "relay" ||
          a === "outgoing" ||
          (r("justknobx")._("585") &&
            n.from instanceof r("WAWebWid") &&
            n.from.isNewsletter() &&
            a === "history");
      if (!y)
        return {
          mediaKey: p,
          fileSha256: m,
          fileEncSha256: l,
          fileLength: o("WALongInt").numberOrThrowIfTooLarge(d != null ? d : 0),
          url: h,
          mimetype: _,
        };
      if (g(n))
        return {
          mediaKey: p,
          fileSha256: m,
          fileEncSha256: l,
          fileLength: o("WALongInt").numberOrThrowIfTooLarge(d != null ? d : 0),
          url: h,
          mimetype: _,
        };
      if (!r("WAWebNewsletterIsNewsletterMsg")(n)) {
        if (p == null)
          throw new c(
            i,
            u.MISSING_MEDIA_KEY,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_IMAGE_MEDIA_KEY,
          );
        if (p.byteLength !== 32)
          throw new c(
            i,
            u.INVALID_MEDIA_KEY,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_IMAGE_MEDIA_KEY,
          );
        if (l != null && l.byteLength !== 32)
          throw new c(
            i,
            u.INVALID_ENC_SHA256,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_IMAGE_FILE_SHA256,
          );
      }
      if ((m == null ? void 0 : m.byteLength) !== 32)
        throw new c(
          i,
          u.INVALID_SHA256,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
            .INVALID_IMAGE_FILE_SHA256,
        );
      if (h != null && (!r("WAWebURLUtils").isHttps(h) || !f(h)))
        throw new c(
          i,
          u.INVALID_URL,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
            .INVALID_IMAGE_MEDIA_URL,
        );
      if (i === o("WAWebMsgType").MSG_TYPE.STICKER_PACK && _ != null)
        throw new c(
          i,
          u.INVALID_MIME_TYPE,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
            .INVALID_IMAGE_MIME_TYPE,
        );
      if (_ == null && i !== o("WAWebMsgType").MSG_TYPE.STICKER_PACK)
        throw new c(
          i,
          u.INVALID_MIME_TYPE,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
            .INVALID_IMAGE_MIME_TYPE,
        );
      var C = o("WAWebMmsMediaTypes").getValidMimeTypes(i);
      if (_ != null && C != null && !C.has(_))
        throw (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Unexpected ",
                " for ",
                " message",
              ])),
            _,
            i,
          ),
          new c(
            i,
            u.INVALID_MIME_TYPE,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_IMAGE_MIME_TYPE,
          )
        );
      var b,
        v = !1;
      if (
        (i === o("WAWebMsgType").MSG_TYPE.STICKER
          ? d != null
            ? ((b = o("WALongInt").numberOrThrowIfTooLarge(d)), (v = b >= 0))
            : (v = !0)
          : i === o("WAWebMsgType").MSG_TYPE.DOCUMENT
            ? d == null
              ? (v = !1)
              : ((b = o("WALongInt").numberOrThrowIfTooLarge(d)), (v = b >= 0))
            : d == null
              ? (v = !1)
              : ((b = o("WALongInt").numberOrThrowIfTooLarge(d)), (v = b > 0)),
        !v)
      )
        throw (
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Invalid file length ",
                " with a type ",
                " for ",
                " message",
              ])),
            d,
            typeof d,
            i,
          ),
          new c(
            i,
            u.INVALID_FILE_LENGTH,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_IMAGE_FILE_LENGTH,
            { sendLogs: i === o("WAWebMsgType").MSG_TYPE.IMAGE ? 0.01 : !0 },
          )
        );
      return {
        mediaKey: p,
        fileSha256: m,
        fileEncSha256: l,
        fileLength: b,
        url: h,
        mimetype: _,
      };
    }
    ((l.MediaMessageValidationError = c),
      (l.isMediaMimeType = p),
      (l.isVideoMimeType = _),
      (l.isWhatsAppSubdomain = f),
      (l.getValidatedMediaMessageProperties = h));
  },
  98,
);
