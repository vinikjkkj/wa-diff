__d(
  "WAWebHatchSecureMediaDecoder",
  ["WAWebAIHatchIdentityStore", "WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return u(o("WAWebHatchJsonReaders").readField(e, t));
    }
    function s(e, t) {
      t === void 0 && (t = u);
      var n = new Map();
      if (e == null || typeof e != "object") return n;
      for (var r of Object.keys(e))
        o("WAWebHatchJsonReaders").isBlankText(r) ||
          n.set(r, t(o("WAWebHatchJsonReaders").readField(e, r)));
      return n;
    }
    function u(e) {
      var t = c(o("WAWebHatchJsonReaders").readString(e, "media_type")),
        n = d(e, "direct_path"),
        r = d(e, "media_key_b64"),
        a = d(e, "file_enc_sha256_b64"),
        i = d(e, "file_sha256_b64");
      return t == null || n == null || r == null || a == null || i == null
        ? null
        : {
            directPath: n,
            mediaKey: r,
            encFilehash: a,
            filehash: i,
            mediaType: t,
            mimeType: o("WAWebHatchJsonReaders").readString(e, "mime_type"),
            sidecarB64: o("WAWebHatchJsonReaders").readString(e, "sidecar_b64"),
            fileLength: o("WAWebHatchJsonReaders").readNumber(e, "file_length"),
            staticUrl: o("WAWebAIHatchIdentityStore").validateWhatsAppNetUrl(
              o("WAWebHatchJsonReaders").readString(e, "url"),
              "secure media",
            ),
          };
    }
    function c(e) {
      return e === "image" || e === "video" ? e : null;
    }
    function d(e, t) {
      var n = o("WAWebHatchJsonReaders").readString(e, t);
      return n != null && n !== "" ? n : null;
    }
    ((l.readSecureMediaField = e),
      (l.decodeSecureMediaMap = s),
      (l.decodeHatchSecureMedia = u));
  },
  98,
);
