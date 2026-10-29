__d(
  "WAWebHatchAttestationProtobufReader",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      throw new TypeError('"' + e + '" is read-only');
    }
    var s = 0,
      u = 1,
      c = 2,
      d = 3,
      m = 4,
      p = 5,
      _ = 128,
      f = 128,
      g = 16,
      h = 10,
      y = 5,
      C = 7,
      b = 8,
      v = 4,
      S = 8,
      R = Math.pow(2, 31),
      L = Math.pow(2, 32),
      E = (function () {
        function e(e) {
          ((this.pos = 0), (this.$1 = e), (this.len = e.length));
        }
        var t = e.prototype;
        return (
          (t.tag = function () {
            var e = this.pos,
              t = this.uint32(),
              n = this.pos - e;
            if (n > y || (n === y && this.$2(this.pos - 1) >= g))
              throw r("err")("illegal tag: varint overflows uint32");
            var o = Math.floor(t / b),
              a = t % b;
            if (o <= 0 || a > p)
              throw r("err")("illegal tag: field no " + o + " wire type " + a);
            return { fieldNo: o, wireType: a };
          }),
          (t.uint32 = function () {
            for (var e = 0, t = 1, n = 1; n <= y; n++) {
              var r = this.$3(),
                o = n === y ? r % g : r % f;
              if (((e += o * t), r < _)) return e;
              t *= Math.pow(2, C);
            }
            return (this.$4(y), e);
          }),
          (t.int32 = function () {
            var e = this.uint32();
            return e >= R ? e - L : e;
          }),
          (t.skipUint64 = function () {
            this.$4(0);
          }),
          (t.bytes = function () {
            var e = this.uint32(),
              t = this.pos;
            return ((this.pos += e), this.$5(), this.$1.slice(t, t + e));
          }),
          (t.string = function () {
            return new TextDecoder().decode(this.bytes());
          }),
          (t.skip = function (t, n) {
            var e = this.pos;
            if (t === s) for (; this.$3() >= _; );
            else if (t === u) this.pos += S;
            else if (t === p) this.pos += v;
            else if (t === c) {
              var o = this.uint32();
              this.pos += o;
            } else if (t === d) this.$6(n);
            else throw r("err")("cant skip wire type " + t);
            return (this.$5(), this.pos - e);
          }),
          (t.$6 = function (t) {
            for (;;) {
              var e = this.tag();
              if (e.wireType === m) {
                if (e.fieldNo !== t) throw r("err")("invalid end group tag");
                return;
              }
              this.skip(e.wireType, e.fieldNo);
            }
          }),
          (t.$4 = function (t) {
            for (var e = t; e < h; e++) if (this.$3() < _) return;
            throw r("err")("invalid varint");
          }),
          (t.$3 = function () {
            var e = this.$2(this.pos);
            return (this.pos++, e);
          }),
          (t.$2 = function (t) {
            var e;
            if (t >= this.len) throw r("err")("premature EOF");
            return (e = this.$1[t]) != null ? e : 0;
          }),
          (t.$5 = function () {
            if (this.pos > this.len) throw r("err")("premature EOF");
          }),
          e
        );
      })();
    function k(e, t, n) {
      for (var r = 0; e.pos < t; ) {
        var o = e.tag(),
          a = o.fieldNo,
          i = o.wireType;
        n(a) || (r += T(a * b + i) + e.skip(i, a));
      }
      return r;
    }
    function I(e) {
      var t = e.uint32();
      return e.pos + t;
    }
    function T(e) {
      for (var t = 1, n = e; n >= _; ) ((n = Math.floor(n / _)), t++);
      return t;
    }
    function D(e) {
      return 1 + T(e) + e;
    }
    ((l.WIRE_VARINT = s),
      (l.WIRE_BIT64 = u),
      (l.WIRE_LENGTH_DELIMITED = c),
      (l.WIRE_START_GROUP = d),
      (l.WIRE_END_GROUP = m),
      (l.WIRE_BIT32 = p),
      (l.HatchAttestationProtobufReader = E),
      (l.readFields = k),
      (l.embeddedMessageEnd = I),
      (l.varintLength = T),
      (l.lengthDelimitedFieldLength = D));
  },
  98,
);
