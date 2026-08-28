__d(
  "bs_caml_obj",
  ["bs_caml"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = function (t, n) {
        for (var e in t) n(e);
      },
      s = function (t) {
        if (Array.isArray(t)) {
          for (var e = t.length, n = new Array(e), r = 0; r < e; ++r)
            n[r] = t[r];
          return (t.TAG !== void 0 && (n.TAG = t.TAG), n);
        }
        return Object.assign({}, t);
      },
      u = function (t, n) {
        var e;
        if (Array.isArray(n)) {
          for (e = 0; e < n.length; ++e) t[e] = n[e];
          n.TAG !== void 0 && (t.TAG = n.TAG);
        } else for (var e in n) t[e] = n[e];
      };
    function c(t, r) {
      if (t === r) return 0;
      var o = typeof t,
        a = typeof r;
      switch (o) {
        case "boolean":
          if (a === "boolean")
            return (e || (e = n("bs_caml"))).caml_bool_compare(t, r);
          break;
        case "function":
          if (a === "function")
            throw {
              RE_EXN_ID: "Invalid_argument",
              _1: "compare: functional value",
              Error: new Error(),
            };
          break;
        case "number":
          if (a === "number")
            return (e || (e = n("bs_caml"))).caml_int_compare(t, r);
          break;
        case "string":
          return a === "string"
            ? (e || (e = n("bs_caml"))).caml_string_compare(t, r)
            : 1;
        case "undefined":
          return -1;
        default:
      }
      switch (a) {
        case "string":
          return -1;
        case "undefined":
          return 1;
        default:
          if (o === "boolean") return 1;
          if (a === "boolean") return -1;
          if (o === "function") return 1;
          if (a === "function") return -1;
          if (o === "number")
            return r === null || r.BS_PRIVATE_NESTED_SOME_NONE !== void 0
              ? 1
              : -1;
          if (a === "number")
            return t === null || t.BS_PRIVATE_NESTED_SOME_NONE !== void 0
              ? -1
              : 1;
          if (t === null)
            return r.BS_PRIVATE_NESTED_SOME_NONE !== void 0 ? 1 : -1;
          if (r === null)
            return t.BS_PRIVATE_NESTED_SOME_NONE !== void 0 ? -1 : 1;
          if (t.BS_PRIVATE_NESTED_SOME_NONE !== void 0)
            return r.BS_PRIVATE_NESTED_SOME_NONE !== void 0 ? d(t, r) : -1;
          var i = t.TAG | 0,
            l = r.TAG | 0;
          if (i === 248)
            return (e || (e = n("bs_caml"))).caml_int_compare(t[1], r[1]);
          if (i === 251)
            throw {
              RE_EXN_ID: "Invalid_argument",
              _1: "equal: abstract value",
              Error: new Error(),
            };
          if (i !== l) return i < l ? -1 : 1;
          var s = t.length | 0,
            u = r.length | 0;
          if (s === u)
            if (Array.isArray(t))
              for (var m = 0; ; ) {
                var p = m;
                if (p === s) return 0;
                var _ = c(t[p], r[p]);
                if (_ !== 0) return _;
                m = (p + 1) | 0;
              }
            else
              return t instanceof Date && r instanceof Date ? t - r : d(t, r);
          else if (s < u)
            for (var f = 0; ; ) {
              var g = f;
              if (g === s) return -1;
              var h = c(t[g], r[g]);
              if (h !== 0) return h;
              f = (g + 1) | 0;
            }
          else
            for (var y = 0; ; ) {
              var C = y;
              if (C === u) return 1;
              var b = c(t[C], r[C]);
              if (b !== 0) return b;
              y = (C + 1) | 0;
            }
      }
    }
    function d(t, r) {
      var o = { contents: void 0 },
        a = { contents: void 0 },
        i = function (t, n) {
          var e = t[2],
            r = t[1];
          if (
            !Object.prototype.hasOwnProperty.call(r, n) ||
            c(t[0][n], r[n]) > 0
          ) {
            var o = e.contents;
            if (!(o !== void 0 && n >= o)) {
              e.contents = n;
              return;
            }
          }
        },
        s = [t, r, a],
        u = function (t) {
          return i(s, t);
        },
        d = [r, t, o],
        m = function (t) {
          return i(d, t);
        };
      (l(t, u), l(r, m));
      var p = o.contents,
        _ = a.contents;
      return p !== void 0
        ? _ !== void 0
          ? (e || (e = n("bs_caml"))).caml_string_compare(p, _)
          : -1
        : _ !== void 0
          ? 1
          : 0;
    }
    function m(e, t) {
      if (e === t) return !0;
      var n = typeof e;
      if (
        n === "string" ||
        n === "number" ||
        n === "boolean" ||
        n === "undefined" ||
        e === null
      )
        return !1;
      var r = typeof t;
      if (n === "function" || r === "function")
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "equal: functional value",
          Error: new Error(),
        };
      if (r === "number" || r === "undefined" || t === null) return !1;
      var o = e.TAG | 0,
        a = t.TAG | 0;
      if (o === 248) return e[1] === t[1];
      if (o === 251)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "equal: abstract value",
          Error: new Error(),
        };
      if (o !== a) return !1;
      var i = e.length | 0,
        s = t.length | 0;
      if (i === s)
        if (Array.isArray(e))
          for (var u = 0; ; ) {
            var c = u;
            if (c === i) return !0;
            if (!m(e[c], t[c])) return !1;
            u = (c + 1) | 0;
          }
        else {
          if (e instanceof Date && t instanceof Date) return !(e > t || e < t);
          var d = { contents: !0 },
            p = function (n) {
              if (!Object.prototype.hasOwnProperty.call(t, n)) {
                d.contents = !1;
                return;
              }
            },
            _ = function (r) {
              if (
                !Object.prototype.hasOwnProperty.call(e, r) ||
                !m(t[r], e[r])
              ) {
                d.contents = !1;
                return;
              }
            };
          return (l(e, p), d.contents && l(t, _), d.contents);
        }
      else return !1;
    }
    function p(e, t) {
      return t !== null ? m(e, t) : e === t;
    }
    function _(e, t) {
      return t !== void 0 ? m(e, t) : e === t;
    }
    function f(e, t) {
      return t == null ? e === t : m(e, t);
    }
    function g(e, t) {
      return !m(e, t);
    }
    function h(e, t) {
      return c(e, t) >= 0;
    }
    function y(e, t) {
      return c(e, t) > 0;
    }
    function C(e, t) {
      return c(e, t) <= 0;
    }
    function b(e, t) {
      return c(e, t) < 0;
    }
    function v(e, t) {
      return c(e, t) <= 0 ? e : t;
    }
    function S(e, t) {
      return c(e, t) >= 0 ? e : t;
    }
    ((i.caml_obj_dup = s),
      (i.update_dummy = u),
      (i.caml_compare = c),
      (i.caml_equal = m),
      (i.caml_equal_null = p),
      (i.caml_equal_undefined = _),
      (i.caml_equal_nullable = f),
      (i.caml_notequal = g),
      (i.caml_greaterequal = h),
      (i.caml_greaterthan = y),
      (i.caml_lessthan = b),
      (i.caml_lessequal = C),
      (i.caml_min = v),
      (i.caml_max = S));
  },
  null,
);
