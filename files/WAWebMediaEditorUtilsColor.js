__d(
  "WAWebMediaEditorUtilsColor",
  ["WAWebMediaEditorEnumsColors"],
  function (t, n, r, o, a, i, l) {
    var e = /^[0-9A-F]{3}$/i,
      s = /^[0-9A-F]{6}$/i,
      u = (function () {
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
          ((this._red = e),
            (this._green = t),
            (this._blue = n),
            (this._alpha = r),
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
          (e._fromHsl = function (n, r, o) {
            var t, a, i;
            if (r === 0 || o === 0) t = a = i = o;
            else {
              var l = o < 0.5 ? o * (1 + r) : o + r - o * r,
                s = 2 * o - l;
              ((t = c(s, l, n + 0.3333333333333333)),
                (a = c(s, l, n)),
                (i = c(s, l, n - 0.3333333333333333)));
            }
            return new e(
              Math.round(t * 255),
              Math.round(a * 255),
              Math.round(i * 255),
            );
          }));
        var t = e.prototype;
        return (
          (t.toRgb = function () {
            return { red: this._red, green: this._green, blue: this._blue };
          }),
          (t.toRgba = function () {
            return {
              red: this._red,
              green: this._green,
              blue: this._blue,
              alpha: this._alpha,
            };
          }),
          (t.toRgbString = function () {
            return (
              "rgb(" + this._red + ", " + this._green + ", " + this._blue + ")"
            );
          }),
          (t.toRgbaString = function () {
            return (
              "rgba(" +
              this._red +
              ", " +
              this._green +
              ", " +
              this._blue +
              ", " +
              this._alpha +
              ")"
            );
          }),
          (t.toHex = function () {
            var e = d(this._red.toString(16), 2),
              t = d(this._green.toString(16), 2),
              n = d(this._blue.toString(16), 2);
            return ("#" + e + t + n).toUpperCase();
          }),
          (t.toHsl = function () {
            var e = this._red / 255,
              t = this._green / 255,
              n = this._blue / 255,
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
                (i = e._fromHsl(
                  s,
                  a < 0.01 ? 0 : Math.max(a, 0.75),
                  Math.min(r, 0.25),
                )),
                (l = new e(
                  255,
                  255,
                  255,
                  1,
                  o("WAWebMediaEditorEnumsColors").ColorType.WHITE,
                )));
            } else
              ((i = e._fromHsl(n, Math.min(a, 0.33), Math.max(r, 0.9))),
                (l = e._fromHsl(n, a === 0 ? 0 : 0.4, 0.2)));
            return { backgroundColor: i, tintColor: l };
          }),
          (t.withAlpha = function (n) {
            return new e(this._red, this._green, this._blue, n, this.colorType);
          }),
          (t.isLight = function () {
            return (
              this._red * 0.299 + this._green * 0.587 + this._blue * 0.114 > 190
            );
          }),
          (t.isWhite = function () {
            var e = this.toHsl(),
              t = e.lightness;
            return t >= 0.996;
          }),
          (t.equals = function (t) {
            return (
              this._red === t._red &&
              this._green === t._green &&
              this._blue === t._blue &&
              this._alpha === t._alpha
            );
          }),
          (t.clone = function () {
            return new e(
              this._red,
              this._green,
              this._blue,
              this._alpha,
              this.colorType,
            );
          }),
          (t.toString = function () {
            return (
              "(" +
              this._red +
              ", " +
              this._green +
              ", " +
              this._blue +
              ", " +
              this._alpha +
              ")"
            );
          }),
          (t.getAlpha = function () {
            return this._alpha;
          }),
          e
        );
      })();
    ((u.Black = new u(
      0,
      0,
      0,
      1,
      o("WAWebMediaEditorEnumsColors").ColorType.BLACK,
    )),
      (u.White = new u(
        255,
        255,
        255,
        1,
        o("WAWebMediaEditorEnumsColors").ColorType.WHITE,
      )));
    function c(e, t, n) {
      var r = n;
      return (
        r < 0 && (r += 1),
        r > 1 && (r -= 1),
        r < 1 / 6
          ? e + (t - e) * 6 * r
          : r < 1 / 2
            ? t
            : r < 2 / 3
              ? e + (t - e) * (2 / 3 - r) * 6
              : e
      );
    }
    function d(e, t) {
      return e.length >= t ? e : "0".repeat(t - e.length) + e;
    }
    function m(e) {
      var t = e.trim();
      return (
        t.substring(0, 1) === "#" && (t = t.substring(1).toLowerCase()),
        t
      );
    }
    function p(t) {
      if (!t) return !1;
      var n = m(t);
      return n.length === 3 ? e.test(n) : n.length === 6 ? s.test(n) : !1;
    }
    function _(e, t) {
      if (!e || !t) return !1;
      var n = m(e),
        r = m(t);
      if (n === r) return !0;
      for (var o = 0, a = 0; o < e.length; ) {
        if (n[o] !== r[a] || n[o] !== r[a + 1]) return !1;
        ((o += 1), (a += 2));
      }
      return !0;
    }
    ((l.Color = u), (l.cleanHex = m), (l.isValidHex = p), (l.compareHex = _));
  },
  98,
);
