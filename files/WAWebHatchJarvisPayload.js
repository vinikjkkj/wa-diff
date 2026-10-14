__d(
  "WAWebHatchJarvisPayload",
  ["WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "XMSGGenAIJarvisPayload",
      s = "1",
      u = "delta.presentation",
      c = "citation";
    function d(t) {
      var n = t.passthrough_payload;
      return n == null || n.__typename !== e || n.envelope_schema_version !== s
        ? null
        : m(n.jarvis_envelope);
    }
    function m(e) {
      var t, n, r;
      try {
        r = JSON.parse(e);
      } catch (e) {
        return null;
      }
      var a = o("WAWebHatchJsonReaders").readObject(r, "stream_event_row");
      if (a == null) return null;
      var i =
          o("WAWebHatchJsonReaders").readString(a, "event_name") === u
            ? o("WAWebHatchJsonReaders").readObject(a, "payload")
            : null,
        l = p(i),
        s =
          (t = [
            o("WAWebHatchJsonReaders").readString(i, "fallback_text"),
            o("WAWebHatchJsonReaders").readString(a, "display_text"),
            o("WAWebHatchJsonReaders").readString(i, "display_text"),
          ].find(function (e) {
            return e != null && e !== "";
          })) != null
            ? t
            : "";
      if (s === "" && l == null) return null;
      var c =
        (n = o("WAWebHatchJsonReaders").readBool(a, "display_text_ready")) !=
        null
          ? n
          : !0;
      return {
        citations: f(o("WAWebHatchJsonReaders").readArray(a, "resources")),
        displayText: s,
        displayTextReady: c,
        fileMetadata: g(
          o("WAWebHatchJsonReaders").readObject(r, "file_metadata"),
        ),
        inlineWidgets:
          l == null && c
            ? _(o("WAWebHatchJsonReaders").readArray(r, "inline_widgets"))
            : [],
        messageId: o("WAWebHatchJsonReaders").readString(a, "message_id"),
        presentation: l,
      };
    }
    function p(e) {
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
    function _(e) {
      if (e == null) return [];
      var t = [];
      for (var n of e) {
        var r = o("WAWebHatchJsonReaders").isObject(n) ? p(n) : null;
        r != null && t.push(r);
      }
      return t;
    }
    function f(e) {
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
          var i = y(o("WAWebHatchJsonReaders").readString(n, "metadata"));
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
    function g(e) {
      var t = new Map();
      if (e == null || typeof e != "object") return t;
      for (var n of Object.keys(e)) {
        var r = o("WAWebHatchJsonReaders").readObject(e, n),
          a = o("WAWebHatchJsonReaders").readNonEmptyString(r, "url");
        a != null &&
          t.set(n, {
            encryptedMedia: h(
              o("WAWebHatchJsonReaders").readObject(r, "encrypted_media"),
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
      return t;
    }
    function h(e) {
      var t,
        n = (t = o("WAWebHatchJsonReaders")).readNonEmptyString(e, "mime_type"),
        r = t.readNonEmptyString(e, "media_transport"),
        a = t.readNonEmptyString(e, "direct_path"),
        i = t.readNonEmptyString(e, "media_type"),
        l = t.readInteger(e, "file_length"),
        s = t.readNonEmptyString(e, "media_key_b64"),
        u = t.readNonEmptyString(e, "file_sha256_b64"),
        c = t.readNonEmptyString(e, "file_enc_sha256_b64"),
        d = t.readInteger(e, "media_key_timestamp_ms");
      return n == null ||
        r == null ||
        a == null ||
        i == null ||
        l == null ||
        s == null ||
        u == null ||
        c == null ||
        d == null
        ? null
        : {
            directPath: a,
            fileEncSha256B64: c,
            fileLength: l,
            fileSha256B64: u,
            height: o("WAWebHatchJsonReaders").readInteger(e, "height"),
            mediaKeyB64: s,
            mediaKeyTimestampMs: d,
            mediaTransport: r,
            mediaType: i,
            mimeType: n,
            seconds: o("WAWebHatchJsonReaders").readInteger(e, "seconds"),
            width: o("WAWebHatchJsonReaders").readInteger(e, "width"),
          };
    }
    function y(e) {
      if (e == null) return null;
      try {
        var t = JSON.parse(e);
        return o("WAWebHatchJsonReaders").isObject(t) ? t : null;
      } catch (e) {
        return null;
      }
    }
    l.parseHatchJarvisPayload = d;
  },
  98,
);
