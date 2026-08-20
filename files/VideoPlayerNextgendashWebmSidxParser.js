__d(
  "VideoPlayerNextgendashWebmSidxParser",
  ["DataViewReader", "nextgendasherr"],
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
        function e(e, t, n) {
          ((this.$1 = e), (this.id = t), (this.$2 = n));
        }
        var t = e.prototype;
        return (
          (t.getOffset = function () {
            return this.$2.byteOffset;
          }),
          (t.createParser = function () {
            return new b(this.$1, this.$2);
          }),
          (t.getUint = function () {
            if (this.$2.byteLength > 8)
              throw o("nextgendasherr").nextgendasherr(
                this.$1,
                "VideoPlayerNextgendashWebmSidxParserError",
                "EbmlElement: Unsigned integer has too many bytes.",
              );
            if (this.$2.byteLength == 8 && this.$2.getUint8(0) & 224)
              throw o("nextgendasherr").nextgendasherr(
                this.$1,
                "VideoPlayerNextgendashWebmSidxParserError",
                "EbmlParser: Unsigned integer must be at most 53 bits.",
              );
            for (var e = 0, t = 0; t < this.$2.byteLength; t++) {
              var n = this.$2.getUint8(t);
              e = 256 * e + n;
            }
            return e;
          }),
          (t.getFloat = function () {
            if (this.$2.byteLength == 4) return this.$2.getFloat32(0);
            if (this.$2.byteLength == 8) return this.$2.getFloat64(0);
            throw o("nextgendasherr").nextgendasherr(
              this.$1,
              "VideoPlayerNextgendashWebmSidxParserError",
              "EbmlElement: floating point numbers must be 4 or 8 bytes.",
            );
          }),
          e
        );
      })(),
      b = (function () {
        function e(e, t) {
          ((this.$1 = e),
            (this.$2 = t),
            (this.$3 = new (r("DataViewReader"))(this.$2)));
        }
        var t = e.prototype;
        return (
          (t.hasMoreData = function () {
            return this.$3.hasMoreData();
          }),
          (t.parseElement = function () {
            var t = this.$4(),
              n = this.$5(),
              r;
            e.$6(n)
              ? (r = this.$2.byteLength - this.$3.getCursor())
              : (r = e.$7(this.$1, n));
            var o =
                this.$3.getCursor() + r <= this.$2.byteLength
                  ? r
                  : this.$2.byteLength - this.$3.getCursor(),
              a = new DataView(
                this.$2.buffer,
                this.$2.byteOffset + this.$3.getCursor(),
                o,
              );
            return (this.$3.skip(o), new C(this.$1, t, a));
          }),
          (t.$4 = function () {
            var e = this.$5();
            if (e.length > 7)
              throw o("nextgendasherr").nextgendasherr(
                this.$1,
                "VideoPlayerNextgendashWebmSidxParserError",
                "EbmlParser: EBML ID must be at most 7 bytes.",
              );
            for (var t = 0, n = 0; n < e.length; n++) t = 256 * t + e[n];
            return t;
          }),
          (t.$5 = function () {
            var e = this.$3.readUint8(),
              t;
            for (t = 1; t <= 8; t++) {
              var n = 1 << (8 - t);
              if (e & n) break;
            }
            if (t > 8)
              throw o("nextgendasherr").nextgendasherr(
                this.$1,
                "VideoPlayerNextgendashWebmSidxParserError",
                "EbmlParser: Variable sized integer must fit within 8 bytes.",
              );
            var r = new Uint8Array(t);
            r[0] = e;
            for (var a = 1; a < t; a++) r[a] = this.$3.readUint8();
            return r;
          }),
          (e.$7 = function (t, n) {
            if (n.length === 8 && n[1] & 224)
              throw o("nextgendasherr").nextgendasherr(
                t,
                "VideoPlayerNextgendashWebmSidxParserError",
                "EbmlParser: Variable sized integer value must be at most 53 bits.",
              );
            for (
              var e = 1 << (8 - n.length), r = n[0] & (e - 1), a = 1;
              a < n.length;
              a++
            )
              r = 256 * r + n[a];
            return r;
          }),
          (e.$6 = function (t) {
            for (var e = 0; e < h.length; e++) if (y(t, h[e])) return !0;
            return !1;
          }),
          e
        );
      })();
    function v(e, t) {
      for (var n = t.createParser(), r = 1e6, a = null; n.hasMoreData(); ) {
        var i = n.parseElement();
        i.id == c ? (r = i.getUint()) : i.id == d && (a = i.getFloat());
      }
      if (a == null)
        return (
          e.logging.log(e, {
            error: o("nextgendasherr").nextgendasherr(
              e,
              "VideoPlayerNextgendashWebmSidxParserError",
              "Duration does not exist",
            ),
            type: "generic_error_as_warning",
          }),
          null
        );
      var l = r / 1e9,
        s = a * l;
      return { duration: s, timecodeScale: l };
    }
    function S(e, t, n, r, a) {
      for (
        var i = [], l = t.createParser(), s = -1, u = -1;
        l.hasMoreData();
      ) {
        var c = l.parseElement();
        if (c.id == p) {
          var d = R(e, c);
          if (d) {
            var m = r * d.unscaledTime,
              _ = n + d.relativeOffset;
            if (s >= 0) {
              if (!(u >= 0))
                throw o("nextgendasherr").nextgendasherr(
                  e,
                  "VideoPlayerNextgendashWebmSidxParserError",
                  "Offset must be non-negative given a valid timestamp.",
                );
              i.push({
                mediaFileByteRange: { byteLength: _ - u, byteOffset: u },
                mediaTimeRange: [s, m],
              });
            }
            ((s = m), (u = _));
          }
        }
      }
      if (s >= 0) {
        if (!(u >= 0))
          throw o("nextgendasherr").nextgendasherr(
            e,
            "VideoPlayerNextgendashWebmSidxParserError",
            "Offset must be non-negative given a valid timestamp.",
          );
        var f = a;
        i.push({
          mediaFileByteRange: { byteLength: null, byteOffset: u },
          mediaTimeRange: [s, f],
        });
      }
      return i;
    }
    function R(e, t) {
      var n = t.createParser(),
        r = n.parseElement();
      if (r.id != _)
        return (
          e.logging.log(e, {
            error: o("nextgendasherr").nextgendasherr(
              e,
              "VideoPlayerNextgendashWebmSidxParserError",
              "CueTime element does not exist.",
            ),
            type: "generic_error_as_warning",
          }),
          null
        );
      var a = r.getUint(),
        i = n.parseElement();
      if (i.id != f)
        return (
          e.logging.log(e, {
            error: o("nextgendasherr").nextgendasherr(
              e,
              "VideoPlayerNextgendashWebmSidxParserError",
              "CueTrackPositions element does not exist.",
            ),
            type: "generic_error_as_warning",
          }),
          null
        );
      for (var l = i.createParser(), s = 0; l.hasMoreData(); ) {
        var u = l.parseElement();
        if (u.id == g) {
          s = u.getUint();
          break;
        }
      }
      return { relativeOffset: s, unscaledTime: a };
    }
    function L(e, t) {
      for (var n = t.createParser(), r = null; n.hasMoreData(); ) {
        var a = n.parseElement();
        if (a.id == u) {
          r = a;
          break;
        }
      }
      return r
        ? v(e, r)
        : (e.logging.log(e, {
            error: o("nextgendasherr").nextgendasherr(
              e,
              "VideoPlayerNextgendashWebmSidxParserError",
              "Info element does not exist.",
            ),
            type: "generic_error_as_warning",
          }),
          null);
    }
    function E(t, n) {
      var r = new b(t, n),
        a = r.parseElement();
      if (a.id != e)
        return (
          t.logging.log(t, {
            error: o("nextgendasherr").nextgendasherr(
              t,
              "VideoPlayerNextgendashWebmSidxParserError",
              "EBML element does not exist.",
            ),
            type: "generic_error_as_warning",
          }),
          null
        );
      var i = r.parseElement();
      if (i.id != s)
        return (
          t.logging.log(t, {
            error: o("nextgendasherr").nextgendasherr(
              t,
              "VideoPlayerNextgendashWebmSidxParserError",
              "Segment element does not exist.",
            ),
            type: "generic_error_as_warning",
          }),
          null
        );
      var l = i.getOffset(),
        u = L(t, i);
      return u
        ? {
            duration: u.duration,
            segmentOffset: l,
            timecodeScale: u.timecodeScale,
          }
        : null;
    }
    function k(e, t, n) {
      var r = new DataView(n.buffer, n.byteOffset, n.byteLength),
        a = new DataView(t.buffer, t.byteOffset, t.byteLength),
        i = E(e, r);
      if (!i) return [];
      var l = new b(e, a),
        s = l.parseElement();
      return s.id != m
        ? (e.logging.log(e, {
            error: o("nextgendasherr").nextgendasherr(
              e,
              "VideoPlayerNextgendashWebmSidxParserError",
              "CuesElement does not exist.",
            ),
            type: "generic_error_as_warning",
          }),
          [])
        : S(e, s, i.segmentOffset, i.timecodeScale, i.duration);
    }
    l.parseWebmSidx = k;
  },
  98,
);
