__d(
  "WAWebMediaMessageGetValidatedProperties",
  [
    "$InternalEnum",
    "WALogger",
    "WALongInt",
    "WAWebHandleMsgError",
    "WAWebMediaUrlAllowlist",
    "WAWebMmsMediaTypes",
    "WAWebMsgType",
    "WAWebNewsletterIsNewsletterMsg",
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
        function t(t) {
          var n,
            r = t.e2eFailureReason,
            o = t.errorCode,
            a = t.expectedType,
            i = t.options,
            l = String(o) + " for " + a + " message";
          return (
            (n = e.call(this, l, r, i) || this),
            (n.name = "MediaMessageValidationError"),
            n
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
      return e.id == null;
    }
    function g(t, n, a, i) {
      var l = t.fileEncSha256,
        d = t.fileLength,
        m = t.fileSha256,
        p = t.mediaKey,
        _ = t.mimetype,
        g = t.url,
        h =
          a === "relay" ||
          a === "outgoing" ||
          (r("justknobx")._("585") &&
            n.from instanceof r("WAWebWid") &&
            n.from.isNewsletter() &&
            a === "history");
      if (!h)
        return {
          mediaKey: p,
          fileSha256: m,
          fileEncSha256: l,
          fileLength: o("WALongInt").numberOrThrowIfTooLarge(d != null ? d : 0),
          url: g,
          mimetype: _,
        };
      if (f(n))
        return {
          mediaKey: p,
          fileSha256: m,
          fileEncSha256: l,
          fileLength: o("WALongInt").numberOrThrowIfTooLarge(d != null ? d : 0),
          url: g,
          mimetype: _,
        };
      if (!r("WAWebNewsletterIsNewsletterMsg")(n)) {
        if (p == null)
          throw new c({
            e2eFailureReason: o("WAWebWamEnumE2eFailureReason")
              .E2E_FAILURE_REASON.INVALID_IMAGE_MEDIA_KEY,
            errorCode: u.MISSING_MEDIA_KEY,
            expectedType: i,
          });
        if (p.byteLength !== 32)
          throw new c({
            e2eFailureReason: o("WAWebWamEnumE2eFailureReason")
              .E2E_FAILURE_REASON.INVALID_IMAGE_MEDIA_KEY,
            errorCode: u.INVALID_MEDIA_KEY,
            expectedType: i,
          });
        if (l != null && l.byteLength !== 32)
          throw new c({
            e2eFailureReason: o("WAWebWamEnumE2eFailureReason")
              .E2E_FAILURE_REASON.INVALID_IMAGE_FILE_SHA256,
            errorCode: u.INVALID_ENC_SHA256,
            expectedType: i,
          });
      }
      if ((m == null ? void 0 : m.byteLength) !== 32)
        throw new c({
          e2eFailureReason: o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
            .INVALID_IMAGE_FILE_SHA256,
          errorCode: u.INVALID_SHA256,
          expectedType: i,
        });
      if (g != null && !o("WAWebMediaUrlAllowlist").isAllowedMediaUrl(g))
        throw new c({
          e2eFailureReason: o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
            .INVALID_IMAGE_MEDIA_URL,
          errorCode: u.INVALID_URL,
          expectedType: i,
        });
      if (i === o("WAWebMsgType").MSG_TYPE.STICKER_PACK && _ != null)
        throw new c({
          e2eFailureReason: o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
            .INVALID_IMAGE_MIME_TYPE,
          errorCode: u.INVALID_MIME_TYPE,
          expectedType: i,
        });
      if (_ == null && i !== o("WAWebMsgType").MSG_TYPE.STICKER_PACK)
        throw new c({
          e2eFailureReason: o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
            .INVALID_IMAGE_MIME_TYPE,
          errorCode: u.INVALID_MIME_TYPE,
          expectedType: i,
        });
      var y = o("WAWebMmsMediaTypes").getValidMimeTypes(i);
      if (_ != null && y != null && !y.has(_))
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
          new c({
            e2eFailureReason: o("WAWebWamEnumE2eFailureReason")
              .E2E_FAILURE_REASON.INVALID_IMAGE_MIME_TYPE,
            errorCode: u.INVALID_MIME_TYPE,
            expectedType: i,
          })
        );
      var C,
        b = !1;
      if (
        (i === o("WAWebMsgType").MSG_TYPE.STICKER
          ? d != null
            ? ((C = o("WALongInt").numberOrThrowIfTooLarge(d)), (b = C >= 0))
            : (b = !0)
          : i === o("WAWebMsgType").MSG_TYPE.DOCUMENT
            ? d == null
              ? (b = !1)
              : ((C = o("WALongInt").numberOrThrowIfTooLarge(d)), (b = C >= 0))
            : d == null
              ? (b = !1)
              : ((C = o("WALongInt").numberOrThrowIfTooLarge(d)), (b = C > 0)),
        !b)
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
          new c({
            e2eFailureReason: o("WAWebWamEnumE2eFailureReason")
              .E2E_FAILURE_REASON.INVALID_IMAGE_FILE_LENGTH,
            errorCode: u.INVALID_FILE_LENGTH,
            expectedType: i,
            options: {
              sendLogs: i === o("WAWebMsgType").MSG_TYPE.IMAGE ? 0.01 : !0,
            },
          })
        );
      return {
        mediaKey: p,
        fileSha256: m,
        fileEncSha256: l,
        fileLength: C,
        url: g,
        mimetype: _,
      };
    }
    ((l.MediaMessageValidationError = c),
      (l.isMediaMimeType = p),
      (l.isVideoMimeType = _),
      (l.getValidatedMediaMessageProperties = g));
  },
  98,
);
