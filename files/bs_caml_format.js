__d(
  "bs_caml_format",
  ["bs_caml", "bs_caml_int64"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e, l;
    function s(e) {
      return e >= 65
        ? e >= 97
          ? e >= 123
            ? -1
            : (e - 87) | 0
          : e >= 91
            ? -1
            : (e - 55) | 0
        : e > 57 || e < 48
          ? -1
          : (e - 48) | 0;
    }
    function u(e) {
      switch (e) {
        case 0:
          return 8;
        case 1:
          return 16;
        case 2:
          return 10;
        case 3:
          return 2;
      }
    }
    function c(e) {
      var t = 1,
        n = 2,
        r = 0,
        o = e.charCodeAt(r);
      switch (o) {
        case 43:
          r = (r + 1) | 0;
          break;
        case 44:
          break;
        case 45:
          ((t = -1), (r = (r + 1) | 0));
          break;
        default:
      }
      if (e[r] === "0") {
        var a = e.charCodeAt((r + 1) | 0);
        if (a >= 89)
          if (a >= 111) {
            if (a < 121)
              switch (a) {
                case 111:
                  ((n = 0), (r = (r + 2) | 0));
                  break;
                case 117:
                  r = (r + 2) | 0;
                  break;
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 118:
                case 119:
                  break;
                case 120:
                  ((n = 1), (r = (r + 2) | 0));
                  break;
              }
          } else a === 98 && ((n = 3), (r = (r + 2) | 0));
        else if (a !== 66) {
          if (a >= 79)
            switch (a) {
              case 79:
                ((n = 0), (r = (r + 2) | 0));
                break;
              case 85:
                r = (r + 2) | 0;
                break;
              case 80:
              case 81:
              case 82:
              case 83:
              case 84:
              case 86:
              case 87:
                break;
              case 88:
                ((n = 1), (r = (r + 2) | 0));
                break;
            }
        } else ((n = 3), (r = (r + 2) | 0));
      }
      return [r, t, n];
    }
    function d(e) {
      var t = c(e),
        n = t[0],
        r = u(t[2]),
        o = 4294967295,
        a = e.length,
        i = n < a ? e.charCodeAt(n) : 0,
        l = s(i);
      if (l < 0 || l >= r)
        throw { RE_EXN_ID: "Failure", _1: "int_of_string", Error: new Error() };
      var d = function (n, i) {
          for (;;) {
            var t = i,
              l = n;
            if (t === a) return l;
            var u = e.charCodeAt(t);
            if (u === 95) {
              i = (t + 1) | 0;
              continue;
            }
            var c = s(u);
            if (c < 0 || c >= r)
              throw {
                RE_EXN_ID: "Failure",
                _1: "int_of_string",
                Error: new Error(),
              };
            var d = r * l + c;
            if (d > o)
              throw {
                RE_EXN_ID: "Failure",
                _1: "int_of_string",
                Error: new Error(),
              };
            ((i = (t + 1) | 0), (n = d));
          }
        },
        m = t[1] * d(l, (n + 1) | 0),
        p = m | 0;
      if (r === 10 && m !== p)
        throw { RE_EXN_ID: "Failure", _1: "int_of_string", Error: new Error() };
      return p;
    }
    function m(t) {
      var r = c(t),
        o = r[2],
        a = r[0],
        i = (e || (e = n("bs_caml_int64"))).of_int32(u(o)),
        d = e.of_int32(r[1]),
        m;
      switch (o) {
        case 0:
          m = [536870911, 4294967295];
          break;
        case 1:
          m = [268435455, 4294967295];
          break;
        case 2:
          m = [429496729, 2576980377];
          break;
        case 3:
          m = (e || (e = n("bs_caml_int64"))).max_int;
          break;
      }
      var p = t.length,
        _ = a < p ? t.charCodeAt(a) : 0,
        f = e.of_int32(s(_));
      if (
        (l || (l = n("bs_caml"))).i64_lt(
          f,
          (e || (e = n("bs_caml_int64"))).zero,
        ) ||
        (l || (l = n("bs_caml"))).i64_ge(f, i)
      )
        throw {
          RE_EXN_ID: "Failure",
          _1: "int64_of_string",
          Error: new Error(),
        };
      var g = function (o, a) {
          for (;;) {
            var r = a,
              u = o;
            if (r === p) return u;
            var c = t.charCodeAt(r);
            if (c === 95) {
              a = (r + 1) | 0;
              continue;
            }
            var d = (e || (e = n("bs_caml_int64"))).of_int32(s(c));
            if (
              (l || (l = n("bs_caml"))).i64_lt(
                d,
                (e || (e = n("bs_caml_int64"))).zero,
              ) ||
              (l || (l = n("bs_caml"))).i64_ge(d, i) ||
              (l || (l = n("bs_caml"))).i64_gt(u, m)
            )
              throw {
                RE_EXN_ID: "Failure",
                _1: "int64_of_string",
                Error: new Error(),
              };
            var _ = e.add(e.mul(i, u), d);
            ((a = (r + 1) | 0), (o = _));
          }
        },
        h = e.mul(d, g(f, (a + 1) | 0)),
        y = e.or_(h, e.zero);
      if (
        (l || (l = n("bs_caml"))).i64_eq(i, [0, 10]) &&
        (l || (l = n("bs_caml"))).i64_neq(h, y)
      )
        throw {
          RE_EXN_ID: "Failure",
          _1: "int64_of_string",
          Error: new Error(),
        };
      return y;
    }
    function p(e) {
      switch (e) {
        case 0:
          return 8;
        case 1:
          return 16;
        case 2:
          return 10;
      }
    }
    function _(e) {
      return (e >= 65 && e <= 90) ||
        (e >= 192 && e <= 214) ||
        (e >= 216 && e <= 222)
        ? (e + 32) | 0
        : e;
    }
    function f(e) {
      var t = e.length;
      if (t > 31)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "format_int: format too long",
          Error: new Error(),
        };
      for (
        var n = {
            justify: "+",
            signstyle: "-",
            filter: " ",
            alternate: !1,
            base: 2,
            signedconv: !1,
            width: 0,
            uppercase: !1,
            sign: 1,
            prec: -1,
            conv: "f",
          },
          r = 0;
        ;
      ) {
        var o = r;
        if (o >= t) return n;
        var a = e.charCodeAt(o),
          i = 0;
        if (a >= 69)
          if (a >= 88)
            if (a >= 121) i = 1;
            else
              switch (a) {
                case 88:
                  ((n.base = 1), (n.uppercase = !0), (r = (o + 1) | 0));
                  continue;
                case 101:
                case 102:
                case 103:
                  i = 5;
                  break;
                case 100:
                case 105:
                  i = 4;
                  break;
                case 111:
                  ((n.base = 0), (r = (o + 1) | 0));
                  continue;
                case 117:
                  ((n.base = 2), (r = (o + 1) | 0));
                  continue;
                case 89:
                case 90:
                case 91:
                case 92:
                case 93:
                case 94:
                case 95:
                case 96:
                case 97:
                case 98:
                case 99:
                case 104:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 118:
                case 119:
                  i = 1;
                  break;
                case 120:
                  ((n.base = 1), (r = (o + 1) | 0));
                  continue;
              }
          else if (a >= 72) i = 1;
          else {
            ((n.signedconv = !0),
              (n.uppercase = !0),
              (n.conv = String.fromCharCode(_(a))),
              (r = (o + 1) | 0));
            continue;
          }
        else
          switch (a) {
            case 35:
              ((n.alternate = !0), (r = (o + 1) | 0));
              continue;
            case 32:
            case 43:
              i = 2;
              break;
            case 45:
              ((n.justify = "-"), (r = (o + 1) | 0));
              continue;
            case 46:
              n.prec = 0;
              for (
                var l = (o + 1) | 0;
                (function (t) {
                  return function () {
                    var n = (e.charCodeAt(t) - 48) | 0;
                    return n >= 0 && n <= 9;
                  };
                })(l)();
              )
                ((n.prec =
                  (((Math.imul(n.prec, 10) + e.charCodeAt(l)) | 0) - 48) | 0),
                  (l = (l + 1) | 0));
              r = l;
              continue;
            case 33:
            case 34:
            case 36:
            case 37:
            case 38:
            case 39:
            case 40:
            case 41:
            case 42:
            case 44:
            case 47:
              i = 1;
              break;
            case 48:
              ((n.filter = "0"), (r = (o + 1) | 0));
              continue;
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
              i = 3;
              break;
            default:
              i = 1;
          }
        switch (i) {
          case 1:
            r = (o + 1) | 0;
            continue;
          case 2:
            ((n.signstyle = String.fromCharCode(a)), (r = (o + 1) | 0));
            continue;
          case 3:
            n.width = 0;
            for (
              var s = o;
              (function (t) {
                return function () {
                  var n = (e.charCodeAt(t) - 48) | 0;
                  return n >= 0 && n <= 9;
                };
              })(s)();
            )
              ((n.width =
                (((Math.imul(n.width, 10) + e.charCodeAt(s)) | 0) - 48) | 0),
                (s = (s + 1) | 0));
            r = s;
            continue;
          case 4:
            ((n.signedconv = !0), (n.base = 2), (r = (o + 1) | 0));
            continue;
          case 5:
            ((n.signedconv = !0),
              (n.conv = String.fromCharCode(a)),
              (r = (o + 1) | 0));
            continue;
        }
      }
    }
    function g(e, t) {
      var n = e.justify,
        r = e.signstyle,
        o = e.filter,
        a = e.alternate,
        i = e.base,
        l = e.signedconv,
        s = e.width,
        u = e.uppercase,
        c = e.sign,
        d = t.length;
      (l && (c < 0 || r !== "-") && (d = (d + 1) | 0),
        a && (i === 0 ? (d = (d + 1) | 0) : i === 1 && (d = (d + 2) | 0)));
      var m = "";
      if (n === "+" && o === " ") for (var p = d; p < s; ++p) m = m + o;
      if (
        (l && (c < 0 ? (m = m + "-") : r !== "-" && (m = m + r)),
        a && i === 0 && (m = m + "0"),
        a && i === 1 && (m = m + "0x"),
        n === "+" && o === "0")
      )
        for (var _ = d; _ < s; ++_) m = m + o;
      if (((m = u ? m + t.toUpperCase() : m + t), n === "-"))
        for (var f = d; f < s; ++f) m = m + " ";
      return m;
    }
    function h(e, t) {
      if (e === "%d") return String(t);
      var n = f(e),
        r = t < 0 ? (n.signedconv ? ((n.sign = -1), -t >>> 0) : t >>> 0) : t,
        o = r.toString(p(n.base));
      if (n.prec >= 0) {
        n.filter = " ";
        var a = (n.prec - o.length) | 0;
        a > 0 && (o = "0".repeat(a) + o);
      }
      return g(n, o);
    }
    function y(t) {
      if (
        !(l || (l = n("bs_caml"))).i64_lt(
          t,
          (e || (e = n("bs_caml_int64"))).zero,
        )
      )
        return (e || (e = n("bs_caml_int64"))).to_string(t);
      var r = [0, 10],
        o = (e || (e = n("bs_caml_int64"))).discard_sign(t),
        a = e.div_mod(o, r),
        i = e.div_mod(e.add([0, 8], a[1]), r),
        s = e.add(e.add([214748364, 3435973836], a[0]), i[0]);
      return e.to_string(s) + "0123456789"[e.to_int32(i[1])];
    }
    function C(t) {
      var r = "",
        o = [0, 8],
        a = "01234567";
      if (
        (l || (l = n("bs_caml"))).i64_lt(
          t,
          (e || (e = n("bs_caml_int64"))).zero,
        )
      ) {
        var i = (e || (e = n("bs_caml_int64"))).discard_sign(t),
          s = e.div_mod(i, o),
          u = e.add([268435456, 0], s[0]),
          c = s[1];
        for (
          r = a[e.to_int32(c)] + r;
          (l || (l = n("bs_caml"))).i64_neq(
            u,
            (e || (e = n("bs_caml_int64"))).zero,
          );
        ) {
          var d = (e || (e = n("bs_caml_int64"))).div_mod(u, o);
          ((u = d[0]), (c = d[1]), (r = a[e.to_int32(c)] + r));
        }
      } else {
        var m = (e || (e = n("bs_caml_int64"))).div_mod(t, o),
          p = m[0],
          _ = m[1];
        for (
          r = a[e.to_int32(_)] + r;
          (l || (l = n("bs_caml"))).i64_neq(
            p,
            (e || (e = n("bs_caml_int64"))).zero,
          );
        ) {
          var f = (e || (e = n("bs_caml_int64"))).div_mod(p, o);
          ((p = f[0]), (_ = f[1]), (r = a[e.to_int32(_)] + r));
        }
      }
      return r;
    }
    function b(t, r) {
      if (t === "%d") return (e || (e = n("bs_caml_int64"))).to_string(r);
      var o = f(t),
        a =
          o.signedconv &&
          (l || (l = n("bs_caml"))).i64_lt(
            r,
            (e || (e = n("bs_caml_int64"))).zero,
          )
            ? ((o.sign = -1), (e || (e = n("bs_caml_int64"))).neg(r))
            : r,
        i = o.base,
        s;
      switch (i) {
        case 0:
          s = C(a);
          break;
        case 1:
          s = (e || (e = n("bs_caml_int64"))).to_hex(a);
          break;
        case 2:
          s = y(a);
          break;
      }
      var u;
      if (o.prec >= 0) {
        o.filter = " ";
        var c = (o.prec - s.length) | 0;
        u = c > 0 ? "0".repeat(c) + s : s;
      } else u = s;
      return g(o, u);
    }
    function v(e, t) {
      var n = f(e),
        r = n.prec < 0 ? 6 : n.prec,
        o = t < 0 ? ((n.sign = -1), -t) : t,
        a = "";
      if (isNaN(o)) ((a = "nan"), (n.filter = " "));
      else if (isFinite(o)) {
        var i = n.conv;
        switch (i) {
          case "e":
            a = o.toExponential(r);
            var l = a.length;
            a[(l - 3) | 0] === "e" &&
              (a = a.slice(0, (l - 1) | 0) + ("0" + a.slice((l - 1) | 0)));
            break;
          case "f":
            a = o.toFixed(r);
            break;
          case "g":
            var s = r !== 0 ? r : 1;
            a = o.toExponential((s - 1) | 0);
            var u = a.indexOf("e"),
              c = Number(a.slice((u + 1) | 0)) | 0;
            if (c < -4 || o >= 1e21 || o.toFixed().length > s) {
              for (var d = (u - 1) | 0; a[d] === "0"; ) d = (d - 1) | 0;
              (a[d] === "." && (d = (d - 1) | 0),
                (a = a.slice(0, (d + 1) | 0) + a.slice(u)));
              var m = a.length;
              a[(m - 3) | 0] === "e" &&
                (a = a.slice(0, (m - 1) | 0) + ("0" + a.slice((m - 1) | 0)));
            } else {
              var p = s;
              if (c < 0) ((p = (p - ((c + 1) | 0)) | 0), (a = o.toFixed(p)));
              else
                for (
                  ;
                  (function () {
                    return ((a = o.toFixed(p)), a.length > ((s + 1) | 0));
                  })();
                )
                  p = (p - 1) | 0;
              if (p !== 0) {
                for (var _ = (a.length - 1) | 0; a[_] === "0"; )
                  _ = (_ - 1) | 0;
                (a[_] === "." && (_ = (_ - 1) | 0),
                  (a = a.slice(0, (_ + 1) | 0)));
              }
            }
            break;
          default:
        }
      } else ((a = "inf"), (n.filter = " "));
      return g(n, a);
    }
    var S = function (t, n, r) {
        if (!isFinite(t))
          return isNaN(t) ? "nan" : t > 0 ? "infinity" : "-infinity";
        var e = t == 0 && 1 / t == -1 / 0 ? 1 : t >= 0 ? 0 : 1;
        e && (t = -t);
        var o = 0;
        if (t != 0)
          if (t < 1) for (; t < 1 && o > -1022; ) ((t *= 2), o--);
          else for (; t >= 2; ) ((t /= 2), o++);
        var a = o < 0 ? "" : "+",
          i = "";
        if (e) i = "-";
        else
          switch (r) {
            case 43:
              i = "+";
              break;
            case 32:
              i = " ";
              break;
            default:
              break;
          }
        if (n >= 0 && n < 13) {
          var l = Math.pow(2, n * 4);
          t = Math.round(t * l) / l;
        }
        var s = t.toString(16);
        if (n >= 0) {
          var u = s.indexOf(".");
          if (u < 0) s += "." + "0".repeat(n);
          else {
            var c = u + 1 + n;
            s.length < c
              ? (s += "0".repeat(c - s.length))
              : (s = s.substr(0, c));
          }
        }
        return i + "0x" + s + "p" + a + o.toString(10);
      },
      R = function (t, n) {
        var e = +t;
        if (
          (t.length > 0 && e === e) ||
          ((t = t.replace(/_/g, "")),
          (e = +t),
          (t.length > 0 && e === e) || /^[+-]?nan$/i.test(t))
        )
          return e;
        var r = /^ *([+-]?)0x([0-9a-f]+)\.?([0-9a-f]*)p([+-]?[0-9]+)/i.exec(t);
        if (r) {
          var o = r[3].replace(/0+$/, ""),
            a = parseInt(r[1] + r[2] + o, 16),
            i = (r[4] | 0) - 4 * o.length;
          return ((e = a * Math.pow(2, i)), e);
        }
        if (/^\+?inf(inity)?$/i.test(t)) return 1 / 0;
        if (/^-inf(inity)?$/i.test(t)) return -1 / 0;
        throw n;
      };
    function L(e) {
      return R(e, { RE_EXN_ID: "Failure", _1: "float_of_string" });
    }
    var E = h,
      k = h,
      I = d,
      T = d;
    ((i.caml_format_float = v),
      (i.caml_hexstring_of_float = S),
      (i.caml_format_int = h),
      (i.caml_nativeint_format = E),
      (i.caml_int32_format = k),
      (i.caml_float_of_string = L),
      (i.caml_int64_format = b),
      (i.caml_int_of_string = d),
      (i.caml_int32_of_string = I),
      (i.caml_int64_of_string = m),
      (i.caml_nativeint_of_string = T));
  },
  null,
);
