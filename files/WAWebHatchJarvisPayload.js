__d(
  "WAWebHatchJarvisPayload",
  ["WAWebHatchJsonReaders", "WAWebHatchSecureMediaDecoder"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "XMSGGenAIJarvisPayload",
      s = "1",
      u = "delta.presentation",
      c = "citation";
    function d(e) {
      return (function (e) {
        return (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.__typename === "XMSGGenAIJarvisPayload"
        );
      })(e == null ? void 0 : e.passthrough_payload);
    }
    function m(e) {
      if (e == null || !d(e)) return !1;
      var t = f(e);
      return t == null || t.declaresFiles;
    }
    function p(t) {
      var n = t.passthrough_payload;
      return n == null || n.__typename !== e || n.envelope_schema_version !== s
        ? null
        : g(n.jarvis_envelope);
    }
    var _ = new WeakMap();
    function f(e) {
      if (_.has(e)) return _.get(e);
      var t = p(e);
      return (_.set(e, t), t);
    }
    function g(e) {
      var t, n, r;
      try {
        r = JSON.parse(e);
      } catch (e) {
        return null;
      }
      var a = o("WAWebHatchJsonReaders").readObject(r, "stream_event_row");
      if (a == null) return null;
      var i = o("WAWebHatchJsonReaders").readString(a, "event_name") === u,
        l = i ? o("WAWebHatchJsonReaders").readObject(a, "payload") : null,
        s = h(l),
        c =
          (t = [
            o("WAWebHatchJsonReaders").readString(l, "fallback_text"),
            o("WAWebHatchJsonReaders").readString(a, "display_text"),
            o("WAWebHatchJsonReaders").readString(l, "display_text"),
          ].find(function (e) {
            return e != null && e !== "";
          })) != null
            ? t
            : "";
      if (c === "" && s == null) return null;
      var d =
          (n = o("WAWebHatchJsonReaders").readBool(a, "display_text_ready")) !=
          null
            ? n
            : !0,
        m = o("WAWebHatchJsonReaders").readObject(r, "file_metadata"),
        p = o("WAWebHatchJsonReaders").readArray(r, "inline_widgets");
      return {
        citations: C(o("WAWebHatchJsonReaders").readArray(a, "resources")),
        declaresFiles: b(m),
        displayText: c,
        displayTextReady: d,
        fileMetadata: v(m),
        hasInlineWidgets: L(p),
        inlineWidgets: s == null && d ? y(p) : [],
        isPresentationRow: i,
        messageId: o("WAWebHatchJsonReaders").readString(a, "message_id"),
        presentation: s,
      };
    }
    function h(e) {
      var t,
        n = o("WAWebHatchJsonReaders").readNonEmptyString(e, "kind");
      return n == null
        ? null
        : {
            data:
              (t = o("WAWebHatchJsonReaders").readObject(e, "data")) != null
                ? t
                : {},
            id: o("WAWebHatchJsonReaders").readNonEmptyString(e, "id"),
            kind: n,
          };
    }
    function y(e) {
      if (e == null) return [];
      var t = [];
      for (var n of e) {
        var r = o("WAWebHatchJsonReaders").isObject(n) ? h(n) : null;
        r != null && t.push(r);
      }
      return t;
    }
    function C(e) {
      if (e == null) return [];
      var t = [];
      for (var n of e) {
        var r = o("WAWebHatchJsonReaders").readString(n, "label"),
          a = o("WAWebHatchJsonReaders").readString(n, "uri");
        if (
          !(
            o("WAWebHatchJsonReaders").readString(n, "kind") !== c ||
            r == null ||
            a == null
          )
        ) {
          var i = R(o("WAWebHatchJsonReaders").readString(n, "metadata"));
          t.push({
            domain: o("WAWebHatchJsonReaders").readString(i, "domain"),
            faviconUrl: o("WAWebHatchJsonReaders").readString(i, "favicon_url"),
            label: r,
            uri: a,
          });
        }
      }
      return t;
    }
    function b(e) {
      return e != null && typeof e == "object" && Object.keys(e).length > 0;
    }
    function v(e) {
      var t = new Map();
      if (e == null || typeof e != "object") return t;
      for (var n of Object.keys(e)) {
        var r = o("WAWebHatchJsonReaders").readObject(e, n),
          a = o("WAWebHatchJsonReaders").readNonEmptyString(r, "url");
        if (a != null) {
          var i = o("WAWebHatchJsonReaders").readObject(r, "encrypted_media");
          t.set(n, {
            encryptedMedia: S(i),
            envelopeFilehash: o("WAWebHatchJsonReaders").readNonEmptyString(
              i,
              "file_sha256_b64",
            ),
            filename: o("WAWebHatchJsonReaders").readNonEmptyString(
              r,
              "filename",
            ),
            mimeType: o("WAWebHatchJsonReaders").readNonEmptyString(
              r,
              "mime_type",
            ),
            sizeBytes: o("WAWebHatchJsonReaders").readInteger(r, "size_bytes"),
            thumbnailJpegB64: o("WAWebHatchJsonReaders").readNonEmptyString(
              r,
              "thumbnail_jpeg_b64",
            ),
            url: a,
          });
        }
      }
      return t;
    }
    function S(e) {
      var t = o("WAWebHatchSecureMediaDecoder").hasMmgTransport(e)
          ? o("WAWebHatchSecureMediaDecoder").decodeMmgMediaKeys(e)
          : null,
        n = o("WAWebHatchJsonReaders").readNonEmptyString(e, "mime_type"),
        r = o("WAWebHatchJsonReaders").readNonEmptyString(e, "media_type"),
        a = o("WAWebHatchJsonReaders").readInteger(e, "file_length"),
        i = o("WAWebHatchJsonReaders").readInteger(e, "media_key_timestamp_ms");
      return t == null || n == null || r == null || a == null || i == null
        ? null
        : babelHelpers.extends({}, t, {
            fileLength: a,
            height: o("WAWebHatchJsonReaders").readInteger(e, "height"),
            mediaKeyTimestampMs: i,
            mediaType: r,
            mimeType: n,
            seconds: o("WAWebHatchJsonReaders").readInteger(e, "seconds"),
            width: o("WAWebHatchJsonReaders").readInteger(e, "width"),
          });
    }
    function R(e) {
      if (e == null) return null;
      try {
        var t = JSON.parse(e);
        return o("WAWebHatchJsonReaders").isObject(t) ? t : null;
      } catch (e) {
        return null;
      }
    }
    function L(e) {
      return e != null && e.length > 0;
    }
    ((l.hasHatchJarvisPayload = d),
      (l.hatchJarvisPayloadMayCarryMedia = m),
      (l.parseHatchJarvisPayload = p),
      (l.getHatchJarvisPayload = f));
  },
  98,
);
