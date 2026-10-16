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
      c = "navigation.items.snapshot",
      d = "navigation.items.updated",
      m = "navigation.items.removed";
    function p(e, t, n) {
      return e === c ? _(t, n) : e === d ? g(t, n) : e === m ? h(t, n) : null;
    }
    function _(t, n) {
      var r = f(t);
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
            spaces: y(a),
            icons: C(t).icons,
            tsMs: n,
          };
    }
    function f(e) {
      var t = v(e, "chunk_number");
      if (t !== v(e, "chunk_count"))
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
      var n = t ? o("WAWebHatchJsonReaders").readInteger(e, "chunk_number") : 1,
        r = t ? o("WAWebHatchJsonReaders").readInteger(e, "chunk_count") : 1;
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
    function g(e, t) {
      var n = o("WAWebHatchSpaceRowDecoder").decodeHatchSpaceRow(
        o("WAWebHatchJsonReaders").readField(e, "item"),
      );
      if (n == null) return null;
      var r = C(e),
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
    function h(e, t) {
      var n = o("WAWebHatchJsonReaders").readTrimmedString(e, "item_key");
      return o("WAWebHatchJsonReaders").readTrimmedString(e, "source") ===
        o("WAWebHatchSpaceRowDecoder").HATCH_SPACE_SOURCE && n !== ""
        ? { kind: "removed", itemKey: n, tsMs: t }
        : null;
    }
    function y(e) {
      var t = [];
      for (var n of e) {
        var r = o("WAWebHatchSpaceRowDecoder").decodeHatchSpaceRow(n);
        r != null && t.push(r);
      }
      return t;
    }
    function C(e) {
      var t = new Map(),
        n = new Set();
      for (var r of o("WAWebHatchSecureMediaDecoder").decodeSecureMediaMap(
        o("WAWebHatchJsonReaders").readField(e, "secure_media"),
        b,
      )) {
        var a = r[0],
          i = r[1];
        i != null ? t.set(a, i) : n.add(a);
      }
      return { icons: t, invalidIconUrls: n };
    }
    function b(e) {
      var t = o("WAWebHatchSecureMediaDecoder").hasMmgTransport(e)
        ? o("WAWebHatchSecureMediaDecoder").decodeMmgMediaKeys(e)
        : null;
      return t == null
        ? null
        : babelHelpers.extends({}, t, {
            mediaType: "image",
            mimeType: o("WAWebHatchJsonReaders").readString(e, "mime_type"),
            sidecarB64: o("WAWebHatchJsonReaders").readString(e, "sidecar_b64"),
            fileLength: o("WAWebHatchJsonReaders").readNumber(e, "file_length"),
            staticUrl: o("WAWebAIHatchIdentityStore").validateWhatsAppNetUrl(
              o("WAWebHatchJsonReaders").readString(e, "url"),
              "space icon",
            ),
          });
    }
    function v(e, t) {
      return o("WAWebHatchJsonReaders").readField(e, t) !== void 0;
    }
    ((l.HATCH_SPACES_SNAPSHOT_OP_KEY = c),
      (l.HATCH_SPACES_UPDATED_OP_KEY = d),
      (l.HATCH_SPACES_REMOVED_OP_KEY = m),
      (l.decodeHatchSpacesEvent = p));
  },
  98,
);
