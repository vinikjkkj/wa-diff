__d(
  "groupColorLAB",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t) {
        for (var e = 0; e < 3; e++)
          ((t[e] =
            t[e] > 0.04045
              ? Math.pow((t[e] + 0.055) / 1.055, 2.4)
              : t[e] / 12.92),
            (t[e] *= 100));
        var n = t[0] * 0.4124 + t[1] * 0.3576 + t[2] * 0.1805,
          r = t[0] * 0.2126 + t[1] * 0.7152 + t[2] * 0.0722,
          o = t[0] * 0.0193 + t[1] * 0.1192 + t[2] * 0.9505;
        return [n, r, o];
      },
      l = function (t) {
        for (
          var e = [t[0] / 95.047, t[1] / 100, t[2] / 108.883], n = 0;
          n < 3;
          n++
        )
          e[n] =
            e[n] > 0.008856
              ? Math.pow(e[n], 0.3333333333333333)
              : 7.787 * e[n] + 0.13793103448275862;
        var r = 116 * e[1] - 16,
          o = 500 * (e[0] - e[1]),
          a = 200 * (e[1] - e[2]);
        return { a: o, b: a, l: r };
      },
      s = function (t) {
        var e = t.l,
          n = t.a,
          r = t.b,
          o = (e + 16) / 116,
          a = n / 500 + o,
          i = o - r / 200,
          l = Math.pow(a, 3),
          s = l > 0.008856 ? l : (116 * a - 16) / 903.3,
          u = e > 903.3 * 0.008856 ? Math.pow(o, 3) : e / 903.3;
        l = Math.pow(i, 3);
        var c = l > 0.008856 ? l : (116 * i - 16) / 903.3;
        return [s * 95.047, u * 100, c * 108.883];
      },
      u = function (t) {
        var e = t[0],
          n = t[1],
          r = t[2],
          o = (e * 3.2406 + n * -1.5372 + r * -0.4986) / 100,
          a = (e * -0.9689 + n * 1.8758 + r * 0.0415) / 100,
          i = (e * 0.0557 + n * -0.204 + r * 1.057) / 100;
        return (
          (o =
            o > 0.0031308
              ? 1.055 * Math.pow(o, 0.4166666666666667) - 0.055
              : 12.92 * o),
          (a =
            a > 0.0031308
              ? 1.055 * Math.pow(a, 0.4166666666666667) - 0.055
              : 12.92 * a),
          (i =
            i > 0.0031308
              ? 1.055 * Math.pow(i, 0.4166666666666667) - 0.055
              : 12.92 * i),
          [
            c(Math.round(o * 255), 0, 255),
            c(Math.round(a * 255), 0, 255),
            c(Math.round(i * 255), 0, 255),
            1,
          ]
        );
      },
      c = function (t, n, r) {
        return t < n ? n : t > r ? r : t;
      };
    function d(t) {
      var n = e(
          t.map(function (e) {
            return e / 255;
          }),
        ),
        r = l(n);
      return m(r);
    }
    function m(e) {
      var t = { a: e.a, b: e.b, l: e.l },
        n = function () {
          var e = s(t);
          return u(e);
        },
        r = function (n, r) {
          t.l = Math.max(n, Math.min(r, t.l));
        },
        o = function (n) {
          t.l = n;
        },
        a = function (n, r) {
          var e = Math.sqrt(Math.pow(t.a, 2) + Math.pow(t.b, 2)),
            o = 1;
          (e < 0.01
            ? ((t.a = 0), (t.b = 0), (t.l = 0))
            : e < n
              ? (o = n / e)
              : e > r && (o = r / e),
            (t.a *= o),
            (t.b *= o));
        };
      return {
        clampedChroma: a,
        clampedLightness: r,
        lab: t,
        toRGBa: n,
        withLightness: o,
      };
    }
    ((i.groupColorLABFromRGBA = d), (i.groupColorLAB = m));
  },
  66,
);
