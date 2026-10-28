__d(
  "WAWebHatchApprovalRequestPreview",
  ["WATypeUtils", "WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 8,
      s = 32,
      u = 4096,
      c = 64,
      d = 80,
      m = 1024,
      p = 2048,
      _ = 255,
      f = Math.pow(2, 30),
      g = ["connector_payload", "network_payload", "device_payload"],
      h = new Set(["{}", "[]", "null", '""']),
      y = new Set(["file", "image", "video"]),
      C = new TextEncoder();
    function b(t) {
      var n = o("WAWebHatchJsonReaders").isObject(t) ? JSON.stringify(t) : null;
      if (n == null || F(n) > u) return null;
      var r = o("WAWebHatchJsonReaders").readInteger(t, "version");
      if (r == null || r < 1 || r > 2) return null;
      var a = M(
        o("WAWebHatchJsonReaders").readArray(t, "blocks"),
        e,
        function (e) {
          return S(e, r);
        },
      );
      return a == null
        ? null
        : {
            blocks: a,
            truncated:
              o("WAWebHatchJsonReaders").readBool(t, "truncated") === !0,
          };
    }
    function v(e) {
      for (var t of g) {
        var n = o("WAWebHatchJsonReaders").trimToNull(
          o("WAWebHatchJsonReaders").readTrimmedString(
            o("WAWebHatchJsonReaders").readObject(e, t),
            "payload_preview",
          ),
        );
        if (n != null && !h.has(n.replace(/\s/g, ""))) return n;
      }
      return null;
    }
    function S(e, t) {
      var n = o("WAWebHatchJsonReaders").readField(e, "type");
      if (n === "fields") {
        var r = M(o("WAWebHatchJsonReaders").readArray(e, "rows"), s, I);
        return r == null ? null : { kind: "fields", rows: r };
      }
      if (!N(e)) return null;
      var a = o("WAWebHatchJsonReaders").readField(e, "label") != null,
        i = a ? P(e) : null;
      return a && i == null
        ? null
        : n === "text"
          ? R(e, i)
          : n === "list"
            ? L(e, i)
            : n === "links"
              ? t === 2
                ? E(e, i)
                : null
              : n === "attachments" && t === 2
                ? k(e, i)
                : null;
    }
    function R(e, t) {
      var n = o("WAWebHatchJsonReaders").trimToNull(
        o("WAWebHatchJsonReaders").readTrimmedString(e, "text"),
      );
      return n == null ? null : { kind: "text", label: t, text: n };
    }
    function L(e, t) {
      var n = M(
        o("WAWebHatchJsonReaders").readArray(e, "items"),
        s,
        function (e) {
          return o("WATypeUtils").isString(e) && w(e) ? e : null;
        },
      );
      return n == null ? null : { items: n, kind: "list", label: t };
    }
    function E(e, t) {
      var n = M(o("WAWebHatchJsonReaders").readArray(e, "items"), s, T);
      return n == null ? null : { kind: "links", label: t, links: n };
    }
    function k(e, t) {
      var n = M(o("WAWebHatchJsonReaders").readArray(e, "items"), s, D);
      return n == null
        ? null
        : { attachments: n, kind: "attachments", label: t };
    }
    function I(e) {
      var t = N(e) ? P(e) : null,
        n = o("WAWebHatchJsonReaders").readField(e, "value");
      return t == null || !o("WATypeUtils").isString(n) || !w(n)
        ? null
        : { label: t, value: n };
    }
    function T(e) {
      var t = P(e),
        n = o("WAWebHatchJsonReaders").readField(e, "url");
      return t == null || !o("WATypeUtils").isString(n) || F(n) > p || !A(n)
        ? null
        : { label: t, url: n };
    }
    function D(e) {
      var t = o("WAWebHatchJsonReaders").readField(e, "kind"),
        n = o("WAWebHatchJsonReaders").trimToNull(
          o("WAWebHatchJsonReaders").readTrimmedString(e, "file_name"),
        );
      if (
        !o("WATypeUtils").isString(t) ||
        !y.has(t) ||
        n == null ||
        O(n) > _ ||
        Array.from(n).some(x)
      )
        return null;
      var r = o("WAWebHatchJsonReaders").readField(e, "size_bytes") != null,
        a = o("WAWebHatchJsonReaders").readInteger(e, "size_bytes");
      return r && !$(a)
        ? null
        : {
            fileName: n,
            kind: t === "image" ? "image" : t === "video" ? "video" : "file",
            sizeBytes: a,
          };
    }
    function x(e) {
      var t,
        n = (t = e.codePointAt(0)) != null ? t : 0;
      return e === "/" || e === "\\" || n < 32 || (n >= 127 && n <= 159);
    }
    function $(e) {
      return e != null && e >= 0 && e <= f;
    }
    function P(e) {
      var t = o("WAWebHatchJsonReaders").trimToNull(
        o("WAWebHatchJsonReaders").readTrimmedString(e, "label"),
      );
      return t != null && O(t) <= d ? t : null;
    }
    function N(e) {
      var t = o("WAWebHatchJsonReaders").trimToNull(
        o("WAWebHatchJsonReaders").readTrimmedString(e, "key"),
      );
      return t != null && F(t) <= c;
    }
    function M(e, t, n) {
      if (e == null || e.length < 1 || e.length > t) return null;
      var r = [];
      for (var o of e) {
        var a = n(o);
        if (a == null) return null;
        r.push(a);
      }
      return r;
    }
    function w(e) {
      return O(e) <= m;
    }
    function A(e) {
      try {
        var t = new URL(e);
        return t.protocol === "https:" && t.hostname !== "";
      } catch (e) {
        return !1;
      }
    }
    function F(e) {
      return C.encode(e).length;
    }
    function O(e) {
      return Array.from(e).length;
    }
    ((l.decodeHatchApprovalRequestPreview = b),
      (l.hatchApprovalFlatPreview = v));
  },
  98,
);
