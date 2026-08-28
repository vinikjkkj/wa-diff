__d(
  "d3-format-2.0.0",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e },
      s;
    function u() {
      (function (t, n) {
        typeof e == "object" && typeof l != "undefined"
          ? n(e)
          : typeof s == "function" && s.amd
            ? s(["exports"], n)
            : ((t = typeof globalThis != "undefined" ? globalThis : t || self),
              n((t.d3 = t.d3 || {})));
      })(this, function (e) {
        function t(e) {
          return Math.abs((e = Math.round(e))) >= 1e21
            ? e.toLocaleString("en").replace(/,/g, "")
            : e.toString(10);
        }
        function n(e, t) {
          if (
            (n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf(
              "e",
            )) < 0
          )
            return null;
          var n,
            r = e.slice(0, n);
          return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
        }
        function r(e) {
          return ((e = n(Math.abs(e))), e ? e[1] : NaN);
        }
        function o(e, t) {
          return function (n, r) {
            for (
              var o = n.length, a = [], i = 0, l = e[0], s = 0;
              o > 0 &&
              l > 0 &&
              (s + l + 1 > r && (l = Math.max(1, r - s)),
              a.push(n.substring((o -= l), o + l)),
              !((s += l + 1) > r));
            )
              l = e[(i = (i + 1) % e.length)];
            return a.reverse().join(t);
          };
        }
        function a(e) {
          return function (t) {
            return t.replace(/[0-9]/g, function (t) {
              return e[+t];
            });
          };
        }
        var i =
          /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
        function l(e) {
          if (!(t = i.exec(e))) throw new Error("invalid format: " + e);
          var t;
          return new s({
            fill: t[1],
            align: t[2],
            sign: t[3],
            symbol: t[4],
            zero: t[5],
            width: t[6],
            comma: t[7],
            precision: t[8] && t[8].slice(1),
            trim: t[9],
            type: t[10],
          });
        }
        l.prototype = s.prototype;
        function s(e) {
          ((this.fill = e.fill === void 0 ? " " : e.fill + ""),
            (this.align = e.align === void 0 ? ">" : e.align + ""),
            (this.sign = e.sign === void 0 ? "-" : e.sign + ""),
            (this.symbol = e.symbol === void 0 ? "" : e.symbol + ""),
            (this.zero = !!e.zero),
            (this.width = e.width === void 0 ? void 0 : +e.width),
            (this.comma = !!e.comma),
            (this.precision = e.precision === void 0 ? void 0 : +e.precision),
            (this.trim = !!e.trim),
            (this.type = e.type === void 0 ? "" : e.type + ""));
        }
        s.prototype.toString = function () {
          return (
            this.fill +
            this.align +
            this.sign +
            this.symbol +
            (this.zero ? "0" : "") +
            (this.width === void 0 ? "" : Math.max(1, this.width | 0)) +
            (this.comma ? "," : "") +
            (this.precision === void 0
              ? ""
              : "." + Math.max(0, this.precision | 0)) +
            (this.trim ? "~" : "") +
            this.type
          );
        };
        function u(e) {
          e: for (var t = e.length, n = 1, r = -1, o; n < t; ++n)
            switch (e[n]) {
              case ".":
                r = o = n;
                break;
              case "0":
                (r === 0 && (r = n), (o = n));
                break;
              default:
                if (!+e[n]) break e;
                r > 0 && (r = 0);
                break;
            }
          return r > 0 ? e.slice(0, r) + e.slice(o + 1) : e;
        }
        var c;
        function d(e, t) {
          var r = n(e, t);
          if (!r) return e + "";
          var o = r[0],
            a = r[1],
            i = a - (c = Math.max(-8, Math.min(8, Math.floor(a / 3))) * 3) + 1,
            l = o.length;
          return i === l
            ? o
            : i > l
              ? o + new Array(i - l + 1).join("0")
              : i > 0
                ? o.slice(0, i) + "." + o.slice(i)
                : "0." +
                  new Array(1 - i).join("0") +
                  n(e, Math.max(0, t + i - 1))[0];
        }
        function m(e, t) {
          var r = n(e, t);
          if (!r) return e + "";
          var o = r[0],
            a = r[1];
          return a < 0
            ? "0." + new Array(-a).join("0") + o
            : o.length > a + 1
              ? o.slice(0, a + 1) + "." + o.slice(a + 1)
              : o + new Array(a - o.length + 2).join("0");
        }
        var p = {
          "%": function (t, n) {
            return (t * 100).toFixed(n);
          },
          b: function (t) {
            return Math.round(t).toString(2);
          },
          c: function (t) {
            return t + "";
          },
          d: t,
          e: function (t, n) {
            return t.toExponential(n);
          },
          f: function (t, n) {
            return t.toFixed(n);
          },
          g: function (t, n) {
            return t.toPrecision(n);
          },
          o: function (t) {
            return Math.round(t).toString(8);
          },
          p: function (t, n) {
            return m(t * 100, n);
          },
          r: m,
          s: d,
          X: function (t) {
            return Math.round(t).toString(16).toUpperCase();
          },
          x: function (t) {
            return Math.round(t).toString(16);
          },
        };
        function _(e) {
          return e;
        }
        var f = Array.prototype.map,
          g = [
            "y",
            "z",
            "a",
            "f",
            "p",
            "n",
            "\xB5",
            "m",
            "",
            "k",
            "M",
            "G",
            "T",
            "P",
            "E",
            "Z",
            "Y",
          ];
        function h(e) {
          var t =
              e.grouping === void 0 || e.thousands === void 0
                ? _
                : o(f.call(e.grouping, Number), e.thousands + ""),
            n = e.currency === void 0 ? "" : e.currency[0] + "",
            i = e.currency === void 0 ? "" : e.currency[1] + "",
            s = e.decimal === void 0 ? "." : e.decimal + "",
            d = e.numerals === void 0 ? _ : a(f.call(e.numerals, String)),
            m = e.percent === void 0 ? "%" : e.percent + "",
            h = e.minus === void 0 ? "\u2212" : e.minus + "",
            y = e.nan === void 0 ? "NaN" : e.nan + "";
          function C(e) {
            e = l(e);
            var r = e.fill,
              o = e.align,
              a = e.sign,
              _ = e.symbol,
              f = e.zero,
              C = e.width,
              b = e.comma,
              v = e.precision,
              S = e.trim,
              R = e.type;
            (R === "n"
              ? ((b = !0), (R = "g"))
              : p[R] || (v === void 0 && (v = 12), (S = !0), (R = "g")),
              (f || (r === "0" && o === "=")) &&
                ((f = !0), (r = "0"), (o = "=")));
            var L =
                _ === "$"
                  ? n
                  : _ === "#" && /[boxX]/.test(R)
                    ? "0" + R.toLowerCase()
                    : "",
              E = _ === "$" ? i : /[%p]/.test(R) ? m : "",
              k = p[R],
              I = /[defgprs%]/.test(R);
            v =
              v === void 0
                ? 6
                : /[gprs]/.test(R)
                  ? Math.max(1, Math.min(21, v))
                  : Math.max(0, Math.min(20, v));
            function T(e) {
              var n = L,
                i = E,
                l,
                m,
                p;
              if (R === "c") ((i = k(e) + i), (e = ""));
              else {
                e = +e;
                var _ = e < 0 || 1 / e < 0;
                if (
                  ((e = isNaN(e) ? y : k(Math.abs(e), v)),
                  S && (e = u(e)),
                  _ && +e == 0 && a !== "+" && (_ = !1),
                  (n =
                    (_
                      ? a === "("
                        ? a
                        : h
                      : a === "-" || a === "("
                        ? ""
                        : a) + n),
                  (i =
                    (R === "s" ? g[8 + c / 3] : "") +
                    i +
                    (_ && a === "(" ? ")" : "")),
                  I)
                ) {
                  for (l = -1, m = e.length; ++l < m; )
                    if (((p = e.charCodeAt(l)), 48 > p || p > 57)) {
                      ((i = (p === 46 ? s + e.slice(l + 1) : e.slice(l)) + i),
                        (e = e.slice(0, l)));
                      break;
                    }
                }
              }
              b && !f && (e = t(e, 1 / 0));
              var T = n.length + e.length + i.length,
                D = T < C ? new Array(C - T + 1).join(r) : "";
              switch (
                (b &&
                  f &&
                  ((e = t(D + e, D.length ? C - i.length : 1 / 0)), (D = "")),
                o)
              ) {
                case "<":
                  e = n + e + i + D;
                  break;
                case "=":
                  e = n + D + e + i;
                  break;
                case "^":
                  e = D.slice(0, (T = D.length >> 1)) + n + e + i + D.slice(T);
                  break;
                default:
                  e = D + n + e + i;
                  break;
              }
              return d(e);
            }
            return (
              (T.toString = function () {
                return e + "";
              }),
              T
            );
          }
          function b(e, t) {
            var n = C(((e = l(e)), (e.type = "f"), e)),
              o = Math.max(-8, Math.min(8, Math.floor(r(t) / 3))) * 3,
              a = Math.pow(10, -o),
              i = g[8 + o / 3];
            return function (e) {
              return n(a * e) + i;
            };
          }
          return { format: C, formatPrefix: b };
        }
        var y;
        C({ thousands: ",", grouping: [3], currency: ["$", ""] });
        function C(t) {
          return (
            (y = h(t)),
            (e.format = y.format),
            (e.formatPrefix = y.formatPrefix),
            y
          );
        }
        function b(e) {
          return Math.max(0, -r(Math.abs(e)));
        }
        function v(e, t) {
          return Math.max(
            0,
            Math.max(-8, Math.min(8, Math.floor(r(t) / 3))) * 3 -
              r(Math.abs(e)),
          );
        }
        function S(e, t) {
          return (
            (e = Math.abs(e)),
            (t = Math.abs(t) - e),
            Math.max(0, r(t) - r(e)) + 1
          );
        }
        ((e.FormatSpecifier = s),
          (e.formatDefaultLocale = C),
          (e.formatLocale = h),
          (e.formatSpecifier = l),
          (e.precisionFixed = b),
          (e.precisionPrefix = v),
          (e.precisionRound = S),
          Object.defineProperty(e, "__esModule", { value: !0 }));
      });
    }
    var c = !1;
    function d() {
      return (c || ((c = !0), u()), l.exports);
    }
    function m(e) {
      switch (e) {
        case void 0:
          return d();
      }
    }
    a.exports = m;
  },
  null,
);
