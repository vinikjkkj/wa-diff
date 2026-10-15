__d(
  "WAWebMediaEditorUtilsColor",
  ["WAWebMediaEditorEnumsColors"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e, t, n, r, o) {
        if ((r === void 0 && (r = 1), e < 0 || e > 255)) {
          var a = new RangeError(
            "red (" + e + " given) should be >= 0 and <= 255",
          );
          throw (a.stack, a);
        }
        if (t < 0 || t > 255) {
          var i = new RangeError(
            "green (" + t + " given) should be >= 0 and <= 255",
          );
          throw (i.stack, i);
        }
        if (n < 0 || n > 255) {
          var l = new RangeError(
            "blue (" + n + " given) should be >= 0 and <= 255",
          );
          throw (l.stack, l);
        }
        if (r < 0 || r > 1) {
          var s = new RangeError(
            "alpha (" + r + " given) should be >= 0 and <= 1",
          );
          throw (s.stack, s);
        }
        ((this.$1 = e),
          (this.$2 = t),
          (this.$3 = n),
          (this.$4 = r),
          (this.colorType = o));
      }
      ((e.fromHex = function (n, r) {
        var t = n.trim().toLowerCase();
        if (
          (t.length && t[0] === "#" && (t = t.substr(1)),
          t.length !== 3 && t.length !== 6)
        ) {
          var o = new RangeError("hex " + n + " does not have 3 or 6 digits");
          throw (o.stack, o);
        }
        t.length === 3 && (t = "" + t[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
        var a = parseInt(t.substr(0, 2), 16),
          i = parseInt(t.substr(2, 2), 16),
          l = parseInt(t.substr(4, 2), 16);
        if (isNaN(a) || isNaN(i) || isNaN(l)) {
          var s = new RangeError("hex " + n + " is invalid");
          throw (s.stack, s);
        }
        var u = 1;
        return new e(a, i, l, u, r);
      }),
        (e.$5 = function (n) {
          var t = n.hue,
            r = n.lightness,
            o = n.saturation,
            a,
            i,
            l;
          if (o === 0 || r === 0) a = i = l = r;
          else {
            var u = r < 0.5 ? r * (1 + o) : r + o - r * o,
              c = 2 * r - u;
            ((a = s({ hue: t + 0.3333333333333333, m1: c, m2: u })),
              (i = s({ hue: t, m1: c, m2: u })),
              (l = s({ hue: t - 0.3333333333333333, m1: c, m2: u })));
          }
          return new e(
            Math.round(a * 255),
            Math.round(i * 255),
            Math.round(l * 255),
          );
        }));
      var t = e.prototype;
      return (
        (t.toRgb = function () {
          return { red: this.$1, green: this.$2, blue: this.$3 };
        }),
        (t.toRgba = function () {
          return {
            red: this.$1,
            green: this.$2,
            blue: this.$3,
            alpha: this.$4,
          };
        }),
        (t.toRgbString = function () {
          return "rgb(" + this.$1 + ", " + this.$2 + ", " + this.$3 + ")";
        }),
        (t.toRgbaString = function () {
          return (
            "rgba(" +
            this.$1 +
            ", " +
            this.$2 +
            ", " +
            this.$3 +
            ", " +
            this.$4 +
            ")"
          );
        }),
        (t.toHex = function () {
          var e = u(this.$1.toString(16), 2),
            t = u(this.$2.toString(16), 2),
            n = u(this.$3.toString(16), 2);
          return ("#" + e + t + n).toUpperCase();
        }),
        (t.toHsl = function () {
          var e = this.$1 / 255,
            t = this.$2 / 255,
            n = this.$3 / 255,
            r = Math.max(e, t, n),
            o = Math.min(e, t, n),
            a = (r + o) / 2,
            i = (r + o) / 2,
            l = (r + o) / 2;
          if (r === o) a = i = 0;
          else {
            var s = r - o;
            switch (((i = l > 0.5 ? s / (2 - r - o) : s / (r + o)), r)) {
              case e:
                a = (t - n) / s + (t < n ? 6 : 0);
                break;
              case t:
                a = (n - e) / s + 2;
                break;
              case n:
                a = (e - t) / s + 4;
                break;
            }
            a /= 6;
          }
          return { hue: a, saturation: i, lightness: l };
        }),
        (t.getBackgroundAndTintColors = function () {
          var t = this.toHsl(),
            n = t.hue,
            r = t.lightness,
            a = t.saturation,
            i,
            l;
          if (r < 0.55 && a > 0.1) {
            var s = n;
            (n > 0.08 &&
              n < 0.22 &&
              (s = n < 0.22000000000000003 ? 0.08 : 0.22),
              (i = e.$5({
                hue: s,
                lightness: Math.min(r, 0.25),
                saturation: a < 0.01 ? 0 : Math.max(a, 0.75),
              })),
              (l = new e(
                255,
                255,
                255,
                1,
                o("WAWebMediaEditorEnumsColors").ColorType.WHITE,
              )));
          } else
            ((i = e.$5({
              hue: n,
              lightness: Math.max(r, 0.9),
              saturation: Math.min(a, 0.33),
            })),
              (l = e.$5({
                hue: n,
                lightness: 0.2,
                saturation: a === 0 ? 0 : 0.4,
              })));
          return { backgroundColor: i, tintColor: l };
        }),
        (t.withAlpha = function (n) {
          return new e(this.$1, this.$2, this.$3, n, this.colorType);
        }),
        (t.isLight = function () {
          return this.$1 * 0.299 + this.$2 * 0.587 + this.$3 * 0.114 > 190;
        }),
        (t.isWhite = function () {
          var e = this.toHsl(),
            t = e.lightness;
          return t >= 0.996;
        }),
        (t.equals = function (t) {
          return (
            this.$1 === t.$1 &&
            this.$2 === t.$2 &&
            this.$3 === t.$3 &&
            this.$4 === t.$4
          );
        }),
        (t.clone = function () {
          return new e(this.$1, this.$2, this.$3, this.$4, this.colorType);
        }),
        (t.toString = function () {
          return (
            "(" +
            this.$1 +
            ", " +
            this.$2 +
            ", " +
            this.$3 +
            ", " +
            this.$4 +
            ")"
          );
        }),
        (t.getAlpha = function () {
          return this.$4;
        }),
        e
      );
    })();
    ((e.Black = new e(
      0,
      0,
      0,
      1,
      o("WAWebMediaEditorEnumsColors").ColorType.BLACK,
    )),
      (e.White = new e(
        255,
        255,
        255,
        1,
        o("WAWebMediaEditorEnumsColors").ColorType.WHITE,
      )));
    function s(e) {
      var t = e.hue,
        n = e.m1,
        r = e.m2,
        o = t;
      return (
        o < 0 && (o += 1),
        o > 1 && (o -= 1),
        o < 1 / 6
          ? n + (r - n) * 6 * o
          : o < 1 / 2
            ? r
            : o < 2 / 3
              ? n + (r - n) * (2 / 3 - o) * 6
              : n
      );
    }
    function u(e, t) {
      return e.length >= t ? e : "0".repeat(t - e.length) + e;
    }
    l.Color = e;
  },
  98,
);
