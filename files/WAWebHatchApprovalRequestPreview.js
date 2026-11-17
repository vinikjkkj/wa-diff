__d(
  "WAWebHatchApprovalRequestPreview",
  ["WATypeUtils", "WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 8,
      s = 32,
      u = 40,
      c = 16 * 1024,
      d = 64,
      m = 80,
      p = 1024,
      _ = 2048,
      f = 255,
      g = Math.pow(2, 30),
      h = ["connector_payload", "network_payload", "device_payload"],
      y = new Set(["{}", "[]", "null", '""']),
      C = new Set(["file", "image", "video"]),
      b = new TextEncoder();
    function v(t) {
      var n = o("WAWebHatchJsonReaders").isObject(t) ? JSON.stringify(t) : null;
      if (n == null || O(n) > c) return null;
      var r = o("WAWebHatchJsonReaders").readInteger(t, "version");
      if (r == null || r < 1 || r > 2) return null;
      var a = w(
        o("WAWebHatchJsonReaders").readArray(t, "blocks"),
        e,
        function (e) {
          return R(e, r);
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
    function S(e) {
      for (var t of h) {
        var n = o("WAWebHatchJsonReaders").trimToNull(
          o("WAWebHatchJsonReaders").readTrimmedString(
            o("WAWebHatchJsonReaders").readObject(e, t),
            "payload_preview",
          ),
        );
        if (n != null && !y.has(n.replace(/\s/g, ""))) return n;
      }
      return null;
    }
    function R(e, t) {
      var n = o("WAWebHatchJsonReaders").readField(e, "type");
      if (n === "fields") {
        var r = w(o("WAWebHatchJsonReaders").readArray(e, "rows"), s, T);
        return r == null ? null : { kind: "fields", rows: r };
      }
      if (!M(e)) return null;
      var a = o("WAWebHatchJsonReaders").readField(e, "label") != null,
        i = a ? N(e) : null;
      return a && i == null
        ? null
        : n === "text"
          ? L(e, i)
          : n === "list"
            ? E(e, i)
            : n === "links"
              ? t === 2
                ? k(e, i)
                : null
              : n === "attachments" && t === 2
                ? I(e, i)
                : null;
    }
    function L(e, t) {
      var n = o("WAWebHatchJsonReaders").trimToNull(
        o("WAWebHatchJsonReaders").readTrimmedString(e, "text"),
      );
      return n == null ? null : { kind: "text", label: t, text: n };
    }
    function E(e, t) {
      var n = w(
        o("WAWebHatchJsonReaders").readArray(e, "items"),
        s,
        function (e) {
          return o("WATypeUtils").isString(e) && A(e) ? e : null;
        },
      );
      return n == null ? null : { items: n, kind: "list", label: t };
    }
    function k(e, t) {
      var n = w(o("WAWebHatchJsonReaders").readArray(e, "items"), s, D);
      return n == null ? null : { kind: "links", label: t, links: n };
    }
    function I(e, t) {
      var n = w(o("WAWebHatchJsonReaders").readArray(e, "items"), u, x);
      return n == null
        ? null
        : { attachments: n, kind: "attachments", label: t };
    }
    function T(e) {
      var t = M(e) ? N(e) : null,
        n = o("WAWebHatchJsonReaders").readField(e, "value");
      return t == null || !o("WATypeUtils").isString(n) || !A(n)
        ? null
        : { label: t, value: n };
    }
    function D(e) {
      var t = N(e),
        n = o("WAWebHatchJsonReaders").readField(e, "url");
      return t == null || !o("WATypeUtils").isString(n) || O(n) > _ || !F(n)
        ? null
        : { label: t, url: n };
    }
    function x(e) {
      var t = o("WAWebHatchJsonReaders").readField(e, "kind"),
        n = o("WAWebHatchJsonReaders").trimToNull(
          o("WAWebHatchJsonReaders").readTrimmedString(e, "file_name"),
        );
      if (
        !o("WATypeUtils").isString(t) ||
        !C.has(t) ||
        n == null ||
        B(n) > f ||
        Array.from(n).some($)
      )
        return null;
      var r = o("WAWebHatchJsonReaders").readField(e, "size_bytes") != null,
        a = o("WAWebHatchJsonReaders").readInteger(e, "size_bytes");
      return r && !P(a)
        ? null
        : {
            fileName: n,
            kind: t === "image" ? "image" : t === "video" ? "video" : "file",
            sizeBytes: a,
          };
    }
    function $(e) {
      var t,
        n = (t = e.codePointAt(0)) != null ? t : 0;
      return e === "/" || e === "\\" || n < 32 || (n >= 127 && n <= 159);
    }
    function P(e) {
      return e != null && e >= 0 && e <= g;
    }
    function N(e) {
      var t = o("WAWebHatchJsonReaders").trimToNull(
        o("WAWebHatchJsonReaders").readTrimmedString(e, "label"),
      );
      return t != null && B(t) <= m ? t : null;
    }
    function M(e) {
      var t = o("WAWebHatchJsonReaders").trimToNull(
        o("WAWebHatchJsonReaders").readTrimmedString(e, "key"),
      );
      return t != null && O(t) <= d;
    }
    function w(e, t, n) {
      if (e == null || e.length < 1 || e.length > t) return null;
      var r = [];
      for (var o of e) {
        var a = n(o);
        if (a == null) return null;
        r.push(a);
      }
      return r;
    }
    function A(e) {
      return B(e) <= p;
    }
    function F(e) {
      try {
        var t = new URL(e);
        return t.protocol === "https:" && t.hostname !== "";
      } catch (e) {
        return !1;
      }
    }
    function O(e) {
      return b.encode(e).length;
    }
    function B(e) {
      return Array.from(e).length;
    }
    ((l.decodeHatchApprovalRequestPreview = v),
      (l.hatchApprovalFlatPreview = S));
  },
  98,
);
