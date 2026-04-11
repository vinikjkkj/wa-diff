__d(
  "filesize-8.0.7",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      (function (t, n) {
        typeof e == "object" && typeof l != "undefined"
          ? (l.exports = n())
          : ((t = typeof globalThis != "undefined" ? globalThis : t || self),
            (t.filesize = n()));
      })(this, function () {
        var e = /^(b|B)$/,
          t = {
            iec: {
              bits: [
                "bit",
                "Kibit",
                "Mibit",
                "Gibit",
                "Tibit",
                "Pibit",
                "Eibit",
                "Zibit",
                "Yibit",
              ],
              bytes: [
                "B",
                "KiB",
                "MiB",
                "GiB",
                "TiB",
                "PiB",
                "EiB",
                "ZiB",
                "YiB",
              ],
            },
            jedec: {
              bits: [
                "bit",
                "Kbit",
                "Mbit",
                "Gbit",
                "Tbit",
                "Pbit",
                "Ebit",
                "Zbit",
                "Ybit",
              ],
              bytes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
            },
          },
          n = {
            iec: [
              "",
              "kibi",
              "mebi",
              "gibi",
              "tebi",
              "pebi",
              "exbi",
              "zebi",
              "yobi",
            ],
            jedec: [
              "",
              "kilo",
              "mega",
              "giga",
              "tera",
              "peta",
              "exa",
              "zetta",
              "yotta",
            ],
          },
          r = { floor: Math.floor, ceil: Math.ceil };
        function o(o) {
          var a =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = [],
            l = 0,
            s,
            u,
            c,
            d,
            m,
            p,
            _,
            f,
            g,
            h,
            y,
            C,
            b,
            v,
            S,
            R,
            L,
            E,
            k,
            I,
            T;
          if (isNaN(o)) throw new TypeError("Invalid number");
          if (
            ((c = a.bits === !0),
            (S = a.unix === !0),
            (C = a.pad === !0),
            (u = a.base || 10),
            (b = a.round !== void 0 ? a.round : S ? 1 : 2),
            (_ = a.locale !== void 0 ? a.locale : ""),
            (f = a.localeOptions || {}),
            (R = a.separator !== void 0 ? a.separator : ""),
            (L = a.spacer !== void 0 ? a.spacer : S ? "" : " "),
            (k = a.symbols || {}),
            (E = u === 2 ? a.standard || "iec" : "jedec"),
            (y = a.output || "string"),
            (m = a.fullform === !0),
            (p = a.fullforms instanceof Array ? a.fullforms : []),
            (s = a.exponent !== void 0 ? a.exponent : -1),
            (I = r[a.roundingMethod] || Math.round),
            (h = Number(o)),
            (g = h < 0),
            (d = u > 2 ? 1e3 : 1024),
            (T = isNaN(a.precision) === !1 ? parseInt(a.precision, 10) : 0),
            g && (h = -h),
            (s === -1 || isNaN(s)) &&
              ((s = Math.floor(Math.log(h) / Math.log(d))), s < 0 && (s = 0)),
            s > 8 && (T > 0 && (T += 8 - s), (s = 8)),
            y === "exponent")
          )
            return s;
          if (h === 0)
            ((i[0] = 0), (v = i[1] = S ? "" : t[E][c ? "bits" : "bytes"][s]));
          else {
            ((l = h / (u === 2 ? Math.pow(2, s * 10) : Math.pow(1e3, s))),
              c && ((l = l * 8), l >= d && s < 8 && ((l = l / d), s++)));
            var D = Math.pow(10, s > 0 ? b : 0);
            ((i[0] = I(l * D) / D),
              i[0] === d && s < 8 && a.exponent === void 0 && ((i[0] = 1), s++),
              (v = i[1] =
                u === 10 && s === 1
                  ? c
                    ? "kbit"
                    : "kB"
                  : t[E][c ? "bits" : "bytes"][s]),
              S &&
                ((i[1] = i[1].charAt(0)),
                e.test(i[1]) && ((i[0] = Math.floor(i[0])), (i[1] = ""))));
          }
          if (
            (g && (i[0] = -i[0]),
            T > 0 && (i[0] = i[0].toPrecision(T)),
            (i[1] = k[i[1]] || i[1]),
            _ === !0
              ? (i[0] = i[0].toLocaleString())
              : _.length > 0
                ? (i[0] = i[0].toLocaleString(_, f))
                : R.length > 0 && (i[0] = i[0].toString().replace(".", R)),
            C && Number.isInteger(i[0]) === !1 && b > 0)
          ) {
            var x = R || ".",
              $ = i[0].toString().split(x),
              P = $[1] || "",
              N = P.length,
              M = b - N;
            i[0] = ""
              .concat($[0])
              .concat(x)
              .concat(P.padEnd(N + M, "0"));
          }
          return (
            m &&
              (i[1] = p[s]
                ? p[s]
                : n[E][s] + (c ? "bit" : "byte") + (i[0] === 1 ? "" : "s")),
            y === "array"
              ? i
              : y === "object"
                ? { value: i[0], symbol: i[1], exponent: s, unit: v }
                : i.join(L)
          );
        }
        return (
          (o.partial = function (e) {
            return function (t) {
              return o(t, e);
            };
          }),
          o
        );
      });
    }
    var u = !1;
    function c() {
      return (u || ((u = !0), s()), l.exports);
    }
    function d(e) {
      switch (e) {
        case void 0:
          return c();
      }
    }
    a.exports = d;
  },
  null,
);
