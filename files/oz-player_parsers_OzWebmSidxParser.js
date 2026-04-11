__d(
  "oz-player/parsers/OzWebmSidxParser",
  [
    "oz-player/manifests/OzDataSegment",
    "oz-player/shims/OzDataViewReader",
    "oz-player/shims/ozvariant",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 440786851,
      s = 408125543,
      u = 357149030,
      c = 2807729,
      d = 17545,
      m = 475249515,
      p = 187,
      _ = 179,
      f = 183,
      g = 241,
      h = [
        new Uint8Array([255]),
        new Uint8Array([127, 255]),
        new Uint8Array([63, 255, 255]),
        new Uint8Array([31, 255, 255, 255]),
        new Uint8Array([15, 255, 255, 255, 255]),
        new Uint8Array([7, 255, 255, 255, 255, 255]),
        new Uint8Array([3, 255, 255, 255, 255, 255, 255]),
        new Uint8Array([1, 255, 255, 255, 255, 255, 255, 255]),
      ];
    function y(e, t) {
      if (!e && !t) return !0;
      if (!e || !t || e.length !== t.length) return !1;
      for (var n = 0; n < e.length; ++n) if (e[n] != t[n]) return !1;
      return !0;
    }
    var C = (function () {
        function e(e, t) {
          ((this.id = e), (this.$1 = t));
        }
        var t = e.prototype;
        return (
          (t.getOffset = function () {
            return this.$1.byteOffset;
          }),
          (t.createParser = function () {
            return new b(this.$1);
          }),
          (t.getUint = function () {
            if (this.$1.byteLength > 8) {
              var e = new RangeError(
                "EbmlElement: Unsigned integer has too many bytes.",
              );
              throw (e.stack, e);
            }
            if (this.$1.byteLength == 8 && this.$1.getUint8(0) & 224) {
              var t = new RangeError(
                "EbmlParser: Unsigned integer must be at most 53 bits.",
              );
              throw (t.stack, t);
            }
            for (var n = 0, r = 0; r < this.$1.byteLength; r++) {
              var o = this.$1.getUint8(r);
              n = 256 * n + o;
            }
            return n;
          }),
          (t.getFloat = function () {
            if (this.$1.byteLength == 4) return this.$1.getFloat32(0);
            if (this.$1.byteLength == 8) return this.$1.getFloat64(0);
            var e = new RangeError(
              "EbmlElement: floating point numbers must be 4 or 8 bytes.",
            );
            throw (e.stack, e);
          }),
          e
        );
      })(),
      b = (function () {
        function e(e) {
          ((this.$1 = e),
            (this.$2 = new (r("oz-player/shims/OzDataViewReader"))(this.$1)));
        }
        var t = e.prototype;
        return (
          (t.hasMoreData = function () {
            return this.$2.hasMoreData();
          }),
          (t.parseElement = function () {
            var t = this.$3(),
              n = this.$4(),
              r;
            e.$5(n)
              ? (r = this.$1.byteLength - this.$2.getCursor())
              : (r = e.$6(n));
            var o =
                this.$2.getCursor() + r <= this.$1.byteLength
                  ? r
                  : this.$1.byteLength - this.$2.getCursor(),
              a = new DataView(
                this.$1.buffer,
                this.$1.byteOffset + this.$2.getCursor(),
                o,
              );
            return (this.$2.skip(o), new C(t, a));
          }),
          (t.$3 = function () {
            var e = this.$4();
            if (e.length > 7) {
              var t = new RangeError(
                "EbmlParser: EBML ID must be at most 7 bytes.",
              );
              throw (t.stack, t);
            }
            for (var n = 0, r = 0; r < e.length; r++) n = 256 * n + e[r];
            return n;
          }),
          (t.$4 = function () {
            var e = this.$2.readUint8(),
              t;
            for (t = 1; t <= 8; t++) {
              var n = 1 << (8 - t);
              if (e & n) break;
            }
            if (t > 8) {
              var r = new RangeError(
                "EbmlParser: Variable sized integer must fit within 8 bytes.",
              );
              throw (r.stack, r);
            }
            var o = new Uint8Array(t);
            o[0] = e;
            for (var a = 1; a < t; a++) o[a] = this.$2.readUint8();
            return o;
          }),
          (e.$6 = function (t) {
            if (t.length === 8 && t[1] & 224) {
              var e = new RangeError(
                "EbmlParser: Variable sized integer value must be at most 53 bits.",
              );
              throw (e.stack, e);
            }
            for (
              var n = 1 << (8 - t.length), r = t[0] & (n - 1), o = 1;
              o < t.length;
              o++
            )
              r = 256 * r + t[o];
            return r;
          }),
          (e.$5 = function (t) {
            for (var e = 0; e < h.length; e++) if (y(t, h[e])) return !0;
            return !1;
          }),
          e
        );
      })();
    function v(e) {
      for (var t = e.createParser(), n = 1e6, r = null; t.hasMoreData(); ) {
        var o = t.parseElement();
        o.id == c ? (n = o.getUint()) : o.id == d && (r = o.getFloat());
      }
      if (r == null) return null;
      var a = n / 1e9,
        i = r * a;
      return { timecodeScale: a, duration: i };
    }
    function S(e, t, n, o, a, i) {
      for (
        var l = [], s = t.createParser(), u = -1, c = -1;
        s.hasMoreData();
      ) {
        var d = s.parseElement();
        if (d.id == p) {
          var m = R(d);
          if (m) {
            var _ = o * m.unscaledTime,
              f = n + m.relativeOffset;
            (u >= 0 &&
              (c >= 0 || r("oz-player/shims/ozvariant")(0, 4010),
              l.push(
                new (r("oz-player/manifests/OzDataSegment"))(i, u, _, c, f - 1),
              )),
              (u = _),
              (c = f));
          }
        }
      }
      if (u >= 0) {
        c >= 0 || r("oz-player/shims/ozvariant")(0, 4010);
        var g = a;
        l.push(new (r("oz-player/manifests/OzDataSegment"))(i, u, g, c, null));
      }
      return l;
    }
    function R(e) {
      var t = e.createParser(),
        n = t.parseElement();
      if (n.id != _) return null;
      var r = n.getUint(),
        o = t.parseElement();
      if (o.id != f) return null;
      for (var a = o.createParser(), i = 0; a.hasMoreData(); ) {
        var l = a.parseElement();
        if (l.id == g) {
          i = l.getUint();
          break;
        }
      }
      return { unscaledTime: r, relativeOffset: i };
    }
    function L(e) {
      for (var t = e.createParser(), n = null; t.hasMoreData(); ) {
        var r = t.parseElement();
        if (r.id == u) {
          n = r;
          break;
        }
      }
      return n ? v(n) : null;
    }
    function E(t) {
      var n = new b(t),
        r = n.parseElement();
      if (r.id != e) return null;
      var o = n.parseElement();
      if (o.id != s) return null;
      var a = o.getOffset(),
        i = L(o);
      return i
        ? {
            segmentOffset: a,
            timecodeScale: i.timecodeScale,
            duration: i.duration,
          }
        : null;
    }
    function k(e, t, n, r) {
      var o = new DataView(r.buffer),
        a = new DataView(n.buffer),
        i = E(o);
      if (!i) return [];
      var l = new b(a),
        s = l.parseElement();
      return s.id != m
        ? []
        : S(e, s, i.segmentOffset, i.timecodeScale, i.duration, t);
    }
    l.parse = k;
  },
  98,
);
