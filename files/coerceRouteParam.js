__d(
  "coerceRouteParam",
  ["EnumType", "FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (e == null && t !== "EXISTS") return { valid: !0, value: null };
      switch (t) {
        case "BOOL":
          return { valid: !0, value: s(e) };
        case "STRING":
          return { valid: !0, value: m(e) };
        case "FBID": {
          var o = p(e);
          return o !== null ? { valid: !0, value: o } : { valid: !1 };
        }
        case "FBID_VECTOR":
          return _(p, e, !0);
        case "FLOAT": {
          var a = c(e);
          return a !== null ? { valid: !0, value: a } : { valid: !1 };
        }
        case "INT": {
          var i = d(e);
          return i !== null ? { valid: !0, value: i } : { valid: !1 };
        }
        case "INT_VECTOR":
          return _(d, e, !0);
        case "STRING_VECTOR":
          return _(m, e);
        case "FLOAT_VECTOR":
          return _(c, e, !0);
        case "STRING_SET":
          return f(m, e);
        case "EXISTS":
          return { valid: !0, value: u(e) };
        case "STRING_TO_INT_MAP":
          return g(m, d, e);
        case "STRING_TO_FLOAT_MAP":
          return g(m, c, e);
        case "STRING_TO_BOOL_MAP":
          return g(m, s, e);
        case "STRING_TO_STRING_MAP":
          return g(m, m, e);
        case "INT_TO_FLOAT_MAP":
          return g(d, c, e);
        case "INT_TO_INT_MAP":
          return g(d, d, e);
        case "INT_TO_BOOL_MAP":
          return g(d, s, e);
        case "INT_TO_STRING_MAP":
          return g(d, m, e);
        case "ENUM": {
          var l = r("EnumType").cast(n);
          if (l != null)
            switch (l) {
              case 0: {
                var y = h(d, e);
                return y !== null ? { valid: !0, value: y } : { valid: !1 };
              }
              case 1: {
                var C = h(m, e);
                return C !== null ? { valid: !0, value: C } : { valid: !1 };
              }
              default:
                return (
                  r("FBLogger")("url_param_validators_codegen").warn(
                    "Enum Type is not handled for coercing",
                  ),
                  { valid: !0, value: e }
                );
            }
        }
      }
      return { valid: !0, value: e };
    }
    function s(e) {
      if (typeof e == "boolean") return e;
      var t = String(e).toLowerCase();
      return t === "0" || t === "false" ? !1 : !!e;
    }
    function u(e) {
      return typeof e == "boolean" ? e : e !== void 0;
    }
    function c(e) {
      if (e === "") return null;
      var t = Number(e);
      return isNaN(t) ? null : t;
    }
    function d(e) {
      if (e === "") return null;
      var t = Number(e);
      return Number.isInteger(t) ? (Number.isSafeInteger(t) ? t : m(e)) : null;
    }
    function m(e) {
      return String(e);
    }
    function p(e) {
      var t = d(e);
      return t !== null ? m(e) : null;
    }
    function _(e, t, n) {
      if ((n === void 0 && (n = !1), Array.isArray(t))) {
        var r = t.map(function (t) {
          return e(t);
        });
        return r.includes(null) ? { valid: !1 } : { valid: !0, value: r };
      } else if (n === !0) {
        var o = String(t),
          a = o.split(",");
        return _(e, a);
      }
      return { valid: !1 };
    }
    function f(e, t, n) {
      if ((n === void 0 && (n = !1), Array.isArray(t))) {
        var r = new Set();
        t.forEach(function (t) {
          r.add(e(t));
        });
        var o = Array.from(r);
        return o.includes(null) ? { valid: !1 } : { valid: !0, value: o };
      } else if (n) {
        var a = String(t),
          i = a.split(",");
        return f(e, i);
      }
      return { valid: !1 };
    }
    function g(e, t, n) {
      if (typeof n == "object" || Array.isArray(n)) {
        var r = {};
        for (var o of Object.entries(n != null ? n : {})) {
          var a = o[0],
            i = o[1];
          if (i !== null) {
            var l = e(a),
              s = t(i);
            if (l === null || s === null) return { valid: !1 };
            r[l] = s;
          }
        }
        return { valid: !0, value: r };
      }
      return { valid: !1 };
    }
    function h(e, t) {
      return e(t);
    }
    l.default = e;
  },
  98,
);
