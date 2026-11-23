__d(
  "MjvFormatValidator",
  ["MjvKeywords"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      switch (t) {
        case "uri":
          return {
            name: "uri",
            check: function (r) {
              return e.isValidPattern(r, n.URI);
            },
          };
        case "regex":
          return { name: "regex", check: d };
        case "date":
          return { name: "date", check: f };
        case "time":
          return { name: "time", check: g };
        case "date-time":
          return { name: "date-time", check: y };
        case "email":
          return { name: "email", check: C };
        case "hostname":
          return { name: "hostname", check: b };
        case "ipv4":
          return { name: "ipv4", check: v };
        case "ipv6":
          return { name: "ipv6", check: L };
        case "duration":
          return { name: "duration", check: E };
        case "uri-reference":
          return { name: "uri-reference", check: k };
        case "uri-template":
          return { name: "uri-template", check: I };
        case "url":
          return { name: "url", check: T };
        case "uuid":
          return { name: "uuid", check: D };
        case "json-pointer":
          return { name: "json-pointer", check: x };
        case "relative-json-pointer":
          return { name: "relative-json-pointer", check: $ };
        default:
          return null;
      }
    }
    function s(t, n, o, a, i) {
      if (
        typeof n != "object" ||
        typeof n.format != "string" ||
        typeof o != "string"
      )
        return !0;
      var l = e(t, n.format, i);
      return l == null || l.check(o)
        ? !0
        : (t.pushError(
            r("MjvKeywords").FORMAT.ID,
            r("MjvKeywords").FORMAT.message(String(l.name)),
            { format: l.name },
            t.getParamsWithSchemaPath(n, a, r("MjvKeywords").FORMAT.ID),
            { parentSchema: n, schema: l.name, data: o },
          ),
          !1);
    }
    var u = 1e3,
      c = new Map();
    function d(e) {
      var t = c.get(e);
      if (t != null) return t;
      var n;
      try {
        (RegExp(e), (n = !0));
      } catch (e) {
        n = !1;
      }
      return (c.size >= u && c.clear(), c.set(e, n), n);
    }
    var m = /^\d{4}-\d{2}-\d{2}$/;
    function p(e, t, n) {
      for (var r = 0, o = t; o < n; o++) r = r * 10 + e.charCodeAt(o) - 48;
      return r;
    }
    function _(e, t, n) {
      if (e < 100 || t < 1 || t > 12 || n < 1) return !1;
      if (t === 2) {
        var r = (e % 4 === 0 && e % 100 !== 0) || e % 400 === 0;
        return n <= (r ? 29 : 28);
      }
      return n <= (t === 4 || t === 6 || t === 9 || t === 11 ? 30 : 31);
    }
    function f(e) {
      return m.test(e) && _(p(e, 0, 4), p(e, 5, 7), p(e, 8, 10));
    }
    function g(e) {
      var t = /^(\d{2}):(\d{2}):(\d{2})(\.\d+)?(Z|[+-]\d{2}:\d{2})?$/,
        n = e.match(t);
      if (!n) return !1;
      var r = parseInt(n[1], 10),
        o = parseInt(n[2], 10),
        a = parseInt(n[3], 10);
      return r >= 0 && r <= 23 && o >= 0 && o <= 59 && a >= 0 && a <= 59;
    }
    var h = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})?$/;
    function y(e) {
      return (
        h.test(e) &&
        _(p(e, 0, 4), p(e, 5, 7), p(e, 8, 10)) &&
        p(e, 11, 13) <= 23 &&
        p(e, 14, 16) <= 59 &&
        p(e, 17, 19) <= 59
      );
    }
    function C(e) {
      var t =
        /^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      return t.test(e);
    }
    function b(e) {
      if (e.length > 253) return !1;
      var t = new RegExp(
        "^(?!-)([a-zA-Z0-9-]{1,63}(?<!-)\\.)*[a-zA-Z0-9-]{1,63}(?<!-)$",
      );
      return t.test(e);
    }
    function v(e) {
      var t = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/,
        n = e.match(t);
      if (!n) return !1;
      for (var r = 1; r <= 4; r++) {
        var o = parseInt(n[r], 10);
        if (o < 0 || o > 255) return !1;
      }
      return !0;
    }
    var S = /^[0-9a-fA-F:]+$/;
    function R(e, t, n) {
      if (t === n) return 0;
      for (var r = 0, o = t, a = t; a <= n; a++)
        if (a === n || e.charCodeAt(a) === 58) {
          var i = a - o;
          if (i === 0 || i > 4) return -1;
          (r++, (o = a + 1));
        }
      return r;
    }
    function L(e) {
      if (e === "::") return !0;
      if (!S.test(e)) return !1;
      var t = e.indexOf("::");
      if (t === -1) return R(e, 0, e.length) === 8;
      if (e.indexOf("::", t + 1) !== -1) return !1;
      var n = R(e, 0, t),
        r = R(e, t + 2, e.length);
      return n !== -1 && r !== -1 && n + r < 8;
    }
    function E(e) {
      var t =
          /^P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(?:\.\d+)?)S)?)?$/,
        n = e.match(t);
      if (!n) return !1;
      var r = n.slice(1).some(function (e) {
        return e != null;
      });
      return r;
    }
    function k(e) {
      var t =
        /^(?:[a-zA-Z][a-zA-Z0-9+.-]*:)?(?:\/\/[^\s/?#]*)?[^\s?#]*(?:\?[^\s#]*)?(?:#[^\s]*)?$/;
      return t.test(e);
    }
    function I(e) {
      var t = /^[^{}\s]*(?:\{[+#./;?&=,!@|]?[a-zA-Z0-9_,%.*:]+\}[^{}\s]*)*$/;
      return t.test(e);
    }
    function T(e) {
      var t =
        /^https?:\/\/(?:localhost(?::\d+)?|[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?::\d+)?)(?:\/[^\s]*)?$/;
      return t.test(e);
    }
    function D(e) {
      var t =
        /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
      return t.test(e);
    }
    function x(e) {
      return e === "" ? !0 : !(!e.startsWith("/") || /~(?![01])/.test(e));
    }
    function $(e) {
      var t = /^(0|[1-9]\d*)(#|\/.*)?$/,
        n = e.match(t);
      return n ? (n[2] && n[2] !== "#" ? x(n[2]) : !0) : !1;
    }
    ((l.getFormatChecker = e), (l.validateFormat = s));
  },
  98,
);
