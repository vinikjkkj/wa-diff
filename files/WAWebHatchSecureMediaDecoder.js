__d(
  "WAWebHatchSecureMediaDecoder",
  ["WAWebAIHatchIdentityStore", "WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "mmg";
    function s(e, t) {
      return m(o("WAWebHatchJsonReaders").readField(e, t));
    }
    function u(e, t) {
      t === void 0 && (t = m);
      var n = new Map();
      if (e == null || typeof e != "object") return n;
      for (var r of Object.keys(e))
        o("WAWebHatchJsonReaders").isBlankText(r) ||
          n.set(r, t(o("WAWebHatchJsonReaders").readField(e, r)));
      return n;
    }
    function c(e) {
      var t,
        n = (t = o("WAWebHatchJsonReaders")).readNonEmptyString(
          e,
          "direct_path",
        ),
        r = t.readNonEmptyString(e, "media_key_b64"),
        a = t.readNonEmptyString(e, "file_enc_sha256_b64"),
        i = t.readNonEmptyString(e, "file_sha256_b64");
      return n == null || r == null || a == null || i == null
        ? null
        : { directPath: n, mediaKey: r, encFilehash: a, filehash: i };
    }
    function d(t) {
      return o("WAWebHatchJsonReaders").readString(t, "media_transport") === e;
    }
    function m(e) {
      var t = p(o("WAWebHatchJsonReaders").readString(e, "media_type")),
        n = c(e);
      return t == null || n == null
        ? null
        : babelHelpers.extends({}, n, {
            mediaType: t,
            mimeType: o("WAWebHatchJsonReaders").readString(e, "mime_type"),
            sidecarB64: o("WAWebHatchJsonReaders").readString(e, "sidecar_b64"),
            fileLength: o("WAWebHatchJsonReaders").readNumber(e, "file_length"),
            staticUrl: o("WAWebAIHatchIdentityStore").validateWhatsAppNetUrl(
              o("WAWebHatchJsonReaders").readString(e, "url"),
              "secure media",
            ),
          });
    }
    function p(e) {
      return e === "image" || e === "video" ? e : null;
    }
    ((l.readSecureMediaField = s),
      (l.decodeSecureMediaMap = u),
      (l.decodeMmgMediaKeys = c),
      (l.hasMmgTransport = d));
  },
  98,
);
