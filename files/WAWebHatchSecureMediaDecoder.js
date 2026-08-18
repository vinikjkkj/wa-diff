__d(
  "WAWebHatchSecureMediaDecoder",
  ["WAWebAIHatchIdentityStore", "WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return s(o("WAWebHatchJsonReaders").readField(e, t));
    }
    function s(e) {
      var t = u(o("WAWebHatchJsonReaders").readString(e, "media_type")),
        n = c(e, "direct_path"),
        r = c(e, "media_key_b64"),
        a = c(e, "file_enc_sha256_b64"),
        i = c(e, "file_sha256_b64");
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
    function u(e) {
      return e === "image" || e === "video" ? e : null;
    }
    function c(e, t) {
      var n = o("WAWebHatchJsonReaders").readString(e, t);
      return n != null && n !== "" ? n : null;
    }
    ((l.readSecureMediaField = e), (l.decodeHatchSecureMedia = s));
  },
  98,
);
