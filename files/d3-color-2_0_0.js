__d(
  "d3-color-2.0.0",
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
            : ((t = t || self), n((t.d3 = t.d3 || {})));
      })(this, function (e) {
        function t(e, t, n) {
          ((e.prototype = t.prototype = n), (n.constructor = e));
        }
        function n(e, t) {
          var n = Object.create(e.prototype);
          for (var r in t) n[r] = t[r];
          return n;
        }
        function r() {}
        var o = 0.7,
          a = 1 / o,
          i = "\\s*([+-]?\\d+)\\s*",
          l = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
          s = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
          u = /^#([0-9a-f]{3,8})$/,
          c = new RegExp("^rgb\\(" + [i, i, i] + "\\)$"),
          d = new RegExp("^rgb\\(" + [s, s, s] + "\\)$"),
          m = new RegExp("^rgba\\(" + [i, i, i, l] + "\\)$"),
          p = new RegExp("^rgba\\(" + [s, s, s, l] + "\\)$"),
          _ = new RegExp("^hsl\\(" + [l, s, s] + "\\)$"),
          f = new RegExp("^hsla\\(" + [l, s, s, l] + "\\)$"),
          g = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074,
          };
        t(r, b, {
          copy: function (t) {
            return Object.assign(new this.constructor(), this, t);
          },
          displayable: function () {
            return this.rgb().displayable();
          },
          hex: h,
          formatHex: h,
          formatHsl: y,
          formatRgb: C,
          toString: C,
        });
        function h() {
          return this.rgb().formatHex();
        }
        function y() {
          return x(this).formatHsl();
        }
        function C() {
          return this.rgb().formatRgb();
        }
        function b(e) {
          var t, n;
          return (
            (e = (e + "").trim().toLowerCase()),
            (t = u.exec(e))
              ? ((n = t[1].length),
                (t = parseInt(t[1], 16)),
                n === 6
                  ? v(t)
                  : n === 3
                    ? new E(
                        ((t >> 8) & 15) | ((t >> 4) & 240),
                        ((t >> 4) & 15) | (t & 240),
                        ((t & 15) << 4) | (t & 15),
                        1,
                      )
                    : n === 8
                      ? S(
                          (t >> 24) & 255,
                          (t >> 16) & 255,
                          (t >> 8) & 255,
                          (t & 255) / 255,
                        )
                      : n === 4
                        ? S(
                            ((t >> 12) & 15) | ((t >> 8) & 240),
                            ((t >> 8) & 15) | ((t >> 4) & 240),
                            ((t >> 4) & 15) | (t & 240),
                            (((t & 15) << 4) | (t & 15)) / 255,
                          )
                        : null)
              : (t = c.exec(e))
                ? new E(t[1], t[2], t[3], 1)
                : (t = d.exec(e))
                  ? new E(
                      (t[1] * 255) / 100,
                      (t[2] * 255) / 100,
                      (t[3] * 255) / 100,
                      1,
                    )
                  : (t = m.exec(e))
                    ? S(t[1], t[2], t[3], t[4])
                    : (t = p.exec(e))
                      ? S(
                          (t[1] * 255) / 100,
                          (t[2] * 255) / 100,
                          (t[3] * 255) / 100,
                          t[4],
                        )
                      : (t = _.exec(e))
                        ? D(t[1], t[2] / 100, t[3] / 100, 1)
                        : (t = f.exec(e))
                          ? D(t[1], t[2] / 100, t[3] / 100, t[4])
                          : Object.prototype.hasOwnProperty.call(g, e)
                            ? v(g[e])
                            : e === "transparent"
                              ? new E(NaN, NaN, NaN, 0)
                              : null
          );
        }
        function v(e) {
          return new E((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
        }
        function S(e, t, n, r) {
          return (r <= 0 && (e = t = n = NaN), new E(e, t, n, r));
        }
        function R(e) {
          return (
            e instanceof r || (e = b(e)),
            e ? ((e = e.rgb()), new E(e.r, e.g, e.b, e.opacity)) : new E()
          );
        }
        function L(e, t, n, r) {
          return arguments.length === 1
            ? R(e)
            : new E(e, t, n, r == null ? 1 : r);
        }
        function E(e, t, n, r) {
          ((this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r));
        }
        t(
          E,
          L,
          n(r, {
            brighter: function (t) {
              return (
                (t = t == null ? a : Math.pow(a, t)),
                new E(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            darker: function (t) {
              return (
                (t = t == null ? o : Math.pow(o, t)),
                new E(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            rgb: function () {
              return this;
            },
            displayable: function () {
              return (
                -0.5 <= this.r &&
                this.r < 255.5 &&
                -0.5 <= this.g &&
                this.g < 255.5 &&
                -0.5 <= this.b &&
                this.b < 255.5 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            hex: k,
            formatHex: k,
            formatRgb: I,
            toString: I,
          }),
        );
        function k() {
          return "#" + T(this.r) + T(this.g) + T(this.b);
        }
        function I() {
          var e = this.opacity;
          return (
            (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e))),
            (e === 1 ? "rgb(" : "rgba(") +
              Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
              ", " +
              Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
              ", " +
              Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
              (e === 1 ? ")" : ", " + e + ")")
          );
        }
        function T(e) {
          return (
            (e = Math.max(0, Math.min(255, Math.round(e) || 0))),
            (e < 16 ? "0" : "") + e.toString(16)
          );
        }
        function D(e, t, n, r) {
          return (
            r <= 0
              ? (e = t = n = NaN)
              : n <= 0 || n >= 1
                ? (e = t = NaN)
                : t <= 0 && (e = NaN),
            new P(e, t, n, r)
          );
        }
        function x(e) {
          if (e instanceof P) return new P(e.h, e.s, e.l, e.opacity);
          if ((e instanceof r || (e = b(e)), !e)) return new P();
          if (e instanceof P) return e;
          e = e.rgb();
          var t = e.r / 255,
            n = e.g / 255,
            o = e.b / 255,
            a = Math.min(t, n, o),
            i = Math.max(t, n, o),
            l = NaN,
            s = i - a,
            u = (i + a) / 2;
          return (
            s
              ? (t === i
                  ? (l = (n - o) / s + (n < o) * 6)
                  : n === i
                    ? (l = (o - t) / s + 2)
                    : (l = (t - n) / s + 4),
                (s /= u < 0.5 ? i + a : 2 - i - a),
                (l *= 60))
              : (s = u > 0 && u < 1 ? 0 : l),
            new P(l, s, u, e.opacity)
          );
        }
        function $(e, t, n, r) {
          return arguments.length === 1
            ? x(e)
            : new P(e, t, n, r == null ? 1 : r);
        }
        function P(e, t, n, r) {
          ((this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r));
        }
        t(
          P,
          $,
          n(r, {
            brighter: function (t) {
              return (
                (t = t == null ? a : Math.pow(a, t)),
                new P(this.h, this.s, this.l * t, this.opacity)
              );
            },
            darker: function (t) {
              return (
                (t = t == null ? o : Math.pow(o, t)),
                new P(this.h, this.s, this.l * t, this.opacity)
              );
            },
            rgb: function () {
              var e = (this.h % 360) + (this.h < 0) * 360,
                t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
                n = this.l,
                r = n + (n < 0.5 ? n : 1 - n) * t,
                o = 2 * n - r;
              return new E(
                N(e >= 240 ? e - 240 : e + 120, o, r),
                N(e, o, r),
                N(e < 120 ? e + 240 : e - 120, o, r),
                this.opacity,
              );
            },
            displayable: function () {
              return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            formatHsl: function () {
              var e = this.opacity;
              return (
                (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e))),
                (e === 1 ? "hsl(" : "hsla(") +
                  (this.h || 0) +
                  ", " +
                  (this.s || 0) * 100 +
                  "%, " +
                  (this.l || 0) * 100 +
                  "%" +
                  (e === 1 ? ")" : ", " + e + ")")
              );
            },
          }),
        );
        function N(e, t, n) {
          return (
            (e < 60
              ? t + ((n - t) * e) / 60
              : e < 180
                ? n
                : e < 240
                  ? t + ((n - t) * (240 - e)) / 60
                  : t) * 255
          );
        }
        var M = Math.PI / 180,
          w = 180 / Math.PI,
          A = 18,
          F = 0.96422,
          O = 1,
          B = 0.82521,
          W = 4 / 29,
          q = 6 / 29,
          U = 3 * q * q,
          V = q * q * q;
        function H(e) {
          if (e instanceof j) return new j(e.l, e.a, e.b, e.opacity);
          if (e instanceof te) return ne(e);
          e instanceof E || (e = R(e));
          var t = Y(e.r),
            n = Y(e.g),
            r = Y(e.b),
            o = K((0.2225045 * t + 0.7168786 * n + 0.0606169 * r) / O),
            a,
            i;
          return (
            t === n && n === r
              ? (a = i = o)
              : ((a = K((0.4360747 * t + 0.3850649 * n + 0.1430804 * r) / F)),
                (i = K((0.0139322 * t + 0.0971045 * n + 0.7141733 * r) / B))),
            new j(116 * o - 16, 500 * (a - o), 200 * (o - i), e.opacity)
          );
        }
        function G(e, t) {
          return new j(e, 0, 0, t == null ? 1 : t);
        }
        function z(e, t, n, r) {
          return arguments.length === 1
            ? H(e)
            : new j(e, t, n, r == null ? 1 : r);
        }
        function j(e, t, n, r) {
          ((this.l = +e), (this.a = +t), (this.b = +n), (this.opacity = +r));
        }
        t(
          j,
          z,
          n(r, {
            brighter: function (t) {
              return new j(
                this.l + A * (t == null ? 1 : t),
                this.a,
                this.b,
                this.opacity,
              );
            },
            darker: function (t) {
              return new j(
                this.l - A * (t == null ? 1 : t),
                this.a,
                this.b,
                this.opacity,
              );
            },
            rgb: function () {
              var e = (this.l + 16) / 116,
                t = isNaN(this.a) ? e : e + this.a / 500,
                n = isNaN(this.b) ? e : e - this.b / 200;
              return (
                (t = F * Q(t)),
                (e = O * Q(e)),
                (n = B * Q(n)),
                new E(
                  X(3.1338561 * t - 1.6168667 * e - 0.4906146 * n),
                  X(-0.9787684 * t + 1.9161415 * e + 0.033454 * n),
                  X(0.0719453 * t - 0.2289914 * e + 1.4052427 * n),
                  this.opacity,
                )
              );
            },
          }),
        );
        function K(e) {
          return e > V ? Math.pow(e, 1 / 3) : e / U + W;
        }
        function Q(e) {
          return e > q ? e * e * e : U * (e - W);
        }
        function X(e) {
          return (
            255 *
            (e <= 0.0031308 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - 0.055)
          );
        }
        function Y(e) {
          return (e /= 255) <= 0.04045
            ? e / 12.92
            : Math.pow((e + 0.055) / 1.055, 2.4);
        }
        function J(e) {
          if (e instanceof te) return new te(e.h, e.c, e.l, e.opacity);
          if ((e instanceof j || (e = H(e)), e.a === 0 && e.b === 0))
            return new te(NaN, 0 < e.l && e.l < 100 ? 0 : NaN, e.l, e.opacity);
          var t = Math.atan2(e.b, e.a) * w;
          return new te(
            t < 0 ? t + 360 : t,
            Math.sqrt(e.a * e.a + e.b * e.b),
            e.l,
            e.opacity,
          );
        }
        function Z(e, t, n, r) {
          return arguments.length === 1
            ? J(e)
            : new te(n, t, e, r == null ? 1 : r);
        }
        function ee(e, t, n, r) {
          return arguments.length === 1
            ? J(e)
            : new te(e, t, n, r == null ? 1 : r);
        }
        function te(e, t, n, r) {
          ((this.h = +e), (this.c = +t), (this.l = +n), (this.opacity = +r));
        }
        function ne(e) {
          if (isNaN(e.h)) return new j(e.l, 0, 0, e.opacity);
          var t = e.h * M;
          return new j(e.l, Math.cos(t) * e.c, Math.sin(t) * e.c, e.opacity);
        }
        t(
          te,
          ee,
          n(r, {
            brighter: function (t) {
              return new te(
                this.h,
                this.c,
                this.l + A * (t == null ? 1 : t),
                this.opacity,
              );
            },
            darker: function (t) {
              return new te(
                this.h,
                this.c,
                this.l - A * (t == null ? 1 : t),
                this.opacity,
              );
            },
            rgb: function () {
              return ne(this).rgb();
            },
          }),
        );
        var re = -0.14861,
          oe = 1.78277,
          ae = -0.29227,
          ie = -0.90649,
          le = 1.97294,
          se = le * ie,
          ue = le * oe,
          ce = oe * ae - ie * re;
        function de(e) {
          if (e instanceof pe) return new pe(e.h, e.s, e.l, e.opacity);
          e instanceof E || (e = R(e));
          var t = e.r / 255,
            n = e.g / 255,
            r = e.b / 255,
            o = (ce * r + se * t - ue * n) / (ce + se - ue),
            a = r - o,
            i = (le * (n - o) - ae * a) / ie,
            l = Math.sqrt(i * i + a * a) / (le * o * (1 - o)),
            s = l ? Math.atan2(i, a) * w - 120 : NaN;
          return new pe(s < 0 ? s + 360 : s, l, o, e.opacity);
        }
        function me(e, t, n, r) {
          return arguments.length === 1
            ? de(e)
            : new pe(e, t, n, r == null ? 1 : r);
        }
        function pe(e, t, n, r) {
          ((this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r));
        }
        (t(
          pe,
          me,
          n(r, {
            brighter: function (t) {
              return (
                (t = t == null ? a : Math.pow(a, t)),
                new pe(this.h, this.s, this.l * t, this.opacity)
              );
            },
            darker: function (t) {
              return (
                (t = t == null ? o : Math.pow(o, t)),
                new pe(this.h, this.s, this.l * t, this.opacity)
              );
            },
            rgb: function () {
              var e = isNaN(this.h) ? 0 : (this.h + 120) * M,
                t = +this.l,
                n = isNaN(this.s) ? 0 : this.s * t * (1 - t),
                r = Math.cos(e),
                o = Math.sin(e);
              return new E(
                255 * (t + n * (re * r + oe * o)),
                255 * (t + n * (ae * r + ie * o)),
                255 * (t + n * (le * r)),
                this.opacity,
              );
            },
          }),
        ),
          (e.color = b),
          (e.cubehelix = me),
          (e.gray = G),
          (e.hcl = ee),
          (e.hsl = $),
          (e.lab = z),
          (e.lch = Z),
          (e.rgb = L),
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
