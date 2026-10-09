__d(
  "WAWebHatchSpacesDecoder",
  [
    "WALogger",
    "WAWebAIHatchIdentityStore",
    "WAWebHatchJsonReaders",
    "WAWebHatchSecureMediaDecoder",
    "WAWebHatchSpaceRowDecoder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = "mmg",
      d = "navigation.items.snapshot",
      m = "navigation.items.updated",
      p = "navigation.items.removed";
    function _(e, t, n) {
      return e === d ? f(t, n) : e === m ? h(t, n) : e === p ? y(t, n) : null;
    }
    function f(t, n) {
      var r = g(t);
      if (r == null) return null;
      var a = o("WAWebHatchJsonReaders").readArray(t, "items");
      return a == null
        ? (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-spaces: dropping snapshot chunk without items",
                ])),
            )
            .sendLogs("hatch-spaces-chunk-without-items"),
          null)
        : {
            kind: "snapshot_chunk",
            chunkNumber: r.chunkNumber,
            chunkCount: r.chunkCount,
            spaces: C(a),
            icons: b(t).icons,
            tsMs: n,
          };
    }
    function g(e) {
      var t = R(e, "chunk_number");
      if (t !== R(e, "chunk_count"))
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-spaces: dropping snapshot chunk with half a position",
                ])),
            )
            .sendLogs("hatch-spaces-chunk-half-position"),
          null
        );
      var n = t ? L(e, "chunk_number") : 1,
        r = t ? L(e, "chunk_count") : 1;
      return n == null || r == null || r < 1 || n < 1 || n > r
        ? (o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-spaces: dropping snapshot chunk with a position out of range",
                ])),
            )
            .sendLogs("hatch-spaces-chunk-out-of-range"),
          null)
        : { chunkCount: r, chunkNumber: n };
    }
    function h(e, t) {
      var n = o("WAWebHatchSpaceRowDecoder").decodeHatchSpaceRow(
        o("WAWebHatchJsonReaders").readField(e, "item"),
      );
      if (n == null) return null;
      var r = b(e),
        a = r.icons,
        i = r.invalidIconUrls;
      return {
        kind: "updated",
        space: n,
        icons: a,
        invalidIconUrls: i,
        tsMs: t,
      };
    }
    function y(e, t) {
      var n = o("WAWebHatchJsonReaders").readTrimmedString(e, "item_key");
      return o("WAWebHatchJsonReaders").readTrimmedString(e, "source") ===
        o("WAWebHatchSpaceRowDecoder").HATCH_SPACE_SOURCE && n !== ""
        ? { kind: "removed", itemKey: n, tsMs: t }
        : null;
    }
    function C(e) {
      var t = [];
      for (var n of e) {
        var r = o("WAWebHatchSpaceRowDecoder").decodeHatchSpaceRow(n);
        r != null && t.push(r);
      }
      return t;
    }
    function b(e) {
      var t = new Map(),
        n = new Set();
      for (var r of o("WAWebHatchSecureMediaDecoder").decodeSecureMediaMap(
        o("WAWebHatchJsonReaders").readField(e, "secure_media"),
        v,
      )) {
        var a = r[0],
          i = r[1];
        i != null ? t.set(a, i) : n.add(a);
      }
      return { icons: t, invalidIconUrls: n };
    }
    function v(e) {
      if (o("WAWebHatchJsonReaders").readString(e, "media_transport") !== c)
        return null;
      var t = S(e, "direct_path"),
        n = S(e, "media_key_b64"),
        r = S(e, "file_enc_sha256_b64"),
        a = S(e, "file_sha256_b64");
      return t == null || n == null || r == null || a == null
        ? null
        : {
            directPath: t,
            mediaKey: n,
            encFilehash: r,
            filehash: a,
            mediaType: "image",
            mimeType: o("WAWebHatchJsonReaders").readString(e, "mime_type"),
            sidecarB64: o("WAWebHatchJsonReaders").readString(e, "sidecar_b64"),
            fileLength: o("WAWebHatchJsonReaders").readNumber(e, "file_length"),
            staticUrl: o("WAWebAIHatchIdentityStore").validateWhatsAppNetUrl(
              o("WAWebHatchJsonReaders").readString(e, "url"),
              "space icon",
            ),
          };
    }
    function S(e, t) {
      var n = o("WAWebHatchJsonReaders").readString(e, t);
      return n != null && n !== "" ? n : null;
    }
    function R(e, t) {
      return o("WAWebHatchJsonReaders").readField(e, t) !== void 0;
    }
    function L(e, t) {
      var n = o("WAWebHatchJsonReaders").readNumber(e, t);
      return n != null && Number.isInteger(n) ? n : null;
    }
    ((l.HATCH_SPACES_SNAPSHOT_OP_KEY = d),
      (l.HATCH_SPACES_UPDATED_OP_KEY = m),
      (l.HATCH_SPACES_REMOVED_OP_KEY = p),
      (l.decodeHatchSpacesEvent = _));
  },
  98,
);
