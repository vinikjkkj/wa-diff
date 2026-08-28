__d(
  "flatbuffers",
  [],
  function (t, n, r, o, a, i) {
    var e = {};
    (e.Offset,
      e.Table,
      (e.SIZEOF_SHORT = 2),
      (e.SIZEOF_INT = 4),
      (e.FILE_IDENTIFIER_LENGTH = 4),
      (e.Encoding = { UTF8_BYTES: 1, UTF16_STRING: 2 }),
      (e.int32 = new Int32Array(2)),
      (e.float32 = new Float32Array(e.int32.buffer)),
      (e.float64 = new Float64Array(e.int32.buffer)),
      (e.isLittleEndian =
        new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1),
      (e.Long = function (e, t) {
        ((this.low = e | 0), (this.high = t | 0));
      }),
      (e.Long.create = function (t, n) {
        return t == 0 && n == 0 ? e.Long.ZERO : new e.Long(t, n);
      }),
      (e.Long.prototype.toFloat64 = function () {
        return (this.low >>> 0) + this.high * 4294967296;
      }),
      (e.Long.prototype.equals = function (e) {
        return this.low == e.low && this.high == e.high;
      }),
      (e.Long.ZERO = new e.Long(0, 0)),
      (e.Builder = function (t) {
        if (t) var n = t;
        else var n = 1024;
        ((this.bb = e.ByteBuffer.allocate(n)),
          (this.space = n),
          (this.minalign = 1),
          (this.vtable = null),
          (this.vtable_in_use = 0),
          (this.isNested = !1),
          (this.object_start = 0),
          (this.vtables = []),
          (this.vector_num_elems = 0),
          (this.force_defaults = !1));
      }),
      (e.Builder.prototype.forceDefaults = function (e) {
        this.force_defaults = e;
      }),
      (e.Builder.prototype.dataBuffer = function () {
        return this.bb;
      }),
      (e.Builder.prototype.asUint8Array = function () {
        return this.bb
          .bytes()
          .subarray(this.bb.position(), this.bb.position() + this.offset());
      }),
      (e.Builder.prototype.prep = function (t, n) {
        t > this.minalign && (this.minalign = t);
        for (
          var r = (~(this.bb.capacity() - this.space + n) + 1) & (t - 1);
          this.space < r + t + n;
        ) {
          var o = this.bb.capacity();
          ((this.bb = e.Builder.growByteBuffer(this.bb)),
            (this.space += this.bb.capacity() - o));
        }
        this.pad(r);
      }),
      (e.Builder.prototype.pad = function (e) {
        for (var t = 0; t < e; t++) this.bb.writeInt8(--this.space, 0);
      }),
      (e.Builder.prototype.writeInt8 = function (e) {
        this.bb.writeInt8((this.space -= 1), e);
      }),
      (e.Builder.prototype.writeInt16 = function (e) {
        this.bb.writeInt16((this.space -= 2), e);
      }),
      (e.Builder.prototype.writeInt32 = function (e) {
        this.bb.writeInt32((this.space -= 4), e);
      }),
      (e.Builder.prototype.writeInt64 = function (e) {
        this.bb.writeInt64((this.space -= 8), e);
      }),
      (e.Builder.prototype.writeFloat32 = function (e) {
        this.bb.writeFloat32((this.space -= 4), e);
      }),
      (e.Builder.prototype.writeFloat64 = function (e) {
        this.bb.writeFloat64((this.space -= 8), e);
      }),
      (e.Builder.prototype.addInt8 = function (e) {
        (this.prep(1, 0), this.writeInt8(e));
      }),
      (e.Builder.prototype.addInt16 = function (e) {
        (this.prep(2, 0), this.writeInt16(e));
      }),
      (e.Builder.prototype.addInt32 = function (e) {
        (this.prep(4, 0), this.writeInt32(e));
      }),
      (e.Builder.prototype.addInt64 = function (e) {
        (this.prep(8, 0), this.writeInt64(e));
      }),
      (e.Builder.prototype.addFloat32 = function (e) {
        (this.prep(4, 0), this.writeFloat32(e));
      }),
      (e.Builder.prototype.addFloat64 = function (e) {
        (this.prep(8, 0), this.writeFloat64(e));
      }),
      (e.Builder.prototype.addFieldInt8 = function (e, t, n) {
        (this.force_defaults || t != n) && (this.addInt8(t), this.slot(e));
      }),
      (e.Builder.prototype.addFieldInt16 = function (e, t, n) {
        (this.force_defaults || t != n) && (this.addInt16(t), this.slot(e));
      }),
      (e.Builder.prototype.addFieldInt32 = function (e, t, n) {
        (this.force_defaults || t != n) && (this.addInt32(t), this.slot(e));
      }),
      (e.Builder.prototype.addFieldInt64 = function (e, t, n) {
        (this.force_defaults || !t.equals(n)) &&
          (this.addInt64(t), this.slot(e));
      }),
      (e.Builder.prototype.addFieldFloat32 = function (e, t, n) {
        (this.force_defaults || t != n) && (this.addFloat32(t), this.slot(e));
      }),
      (e.Builder.prototype.addFieldFloat64 = function (e, t, n) {
        (this.force_defaults || t != n) && (this.addFloat64(t), this.slot(e));
      }),
      (e.Builder.prototype.addFieldOffset = function (e, t, n) {
        (this.force_defaults || t != n) && (this.addOffset(t), this.slot(e));
      }),
      (e.Builder.prototype.addFieldStruct = function (e, t, n) {
        t != n && (this.nested(t), this.slot(e));
      }),
      (e.Builder.prototype.nested = function (e) {
        if (e != this.offset())
          throw new Error("FlatBuffers: struct must be serialized inline.");
      }),
      (e.Builder.prototype.notNested = function () {
        if (this.isNested)
          throw new Error(
            "FlatBuffers: object serialization must not be nested.",
          );
      }),
      (e.Builder.prototype.slot = function (e) {
        this.vtable[e] = this.offset();
      }),
      (e.Builder.prototype.offset = function () {
        return this.bb.capacity() - this.space;
      }),
      (e.Builder.growByteBuffer = function (t) {
        var n = t.capacity();
        if (n & 3221225472)
          throw new Error(
            "FlatBuffers: cannot grow buffer beyond 2 gigabytes.",
          );
        var r = n << 1,
          o = e.ByteBuffer.allocate(r);
        return (o.setPosition(r - n), o.bytes().set(t.bytes(), r - n), o);
      }),
      (e.Builder.prototype.addOffset = function (t) {
        (this.prep(e.SIZEOF_INT, 0),
          this.writeInt32(this.offset() - t + e.SIZEOF_INT));
      }),
      (e.Builder.prototype.startObject = function (e) {
        (this.notNested(),
          this.vtable == null && (this.vtable = []),
          (this.vtable_in_use = e));
        for (var t = 0; t < e; t++) this.vtable[t] = 0;
        ((this.isNested = !0), (this.object_start = this.offset()));
      }),
      (e.Builder.prototype.endObject = function () {
        if (this.vtable == null || !this.isNested)
          throw new Error("FlatBuffers: endObject called without startObject");
        this.addInt32(0);
        for (var t = this.offset(), n = this.vtable_in_use - 1; n >= 0; n--)
          this.addInt16(this.vtable[n] != 0 ? t - this.vtable[n] : 0);
        var r = 2;
        (this.addInt16(t - this.object_start),
          this.addInt16((this.vtable_in_use + r) * e.SIZEOF_SHORT));
        var o = 0;
        e: for (var n = 0; n < this.vtables.length; n++) {
          var a = this.bb.capacity() - this.vtables[n],
            i = this.space,
            l = this.bb.readInt16(a);
          if (l == this.bb.readInt16(i)) {
            for (var s = e.SIZEOF_SHORT; s < l; s += e.SIZEOF_SHORT)
              if (this.bb.readInt16(a + s) != this.bb.readInt16(i + s))
                continue e;
            o = this.vtables[n];
            break;
          }
        }
        return (
          o
            ? ((this.space = this.bb.capacity() - t),
              this.bb.writeInt32(this.space, o - t))
            : (this.vtables.push(this.offset()),
              this.bb.writeInt32(this.bb.capacity() - t, this.offset() - t)),
          (this.isNested = !1),
          t
        );
      }),
      (e.Builder.prototype.finish = function (t, n) {
        if (n) {
          var r = n;
          if (
            (this.prep(this.minalign, e.SIZEOF_INT + e.FILE_IDENTIFIER_LENGTH),
            r.length != e.FILE_IDENTIFIER_LENGTH)
          )
            throw new Error(
              "FlatBuffers: file identifier must be length " +
                e.FILE_IDENTIFIER_LENGTH,
            );
          for (var o = e.FILE_IDENTIFIER_LENGTH - 1; o >= 0; o--)
            this.writeInt8(r.charCodeAt(o));
        }
        (this.prep(this.minalign, e.SIZEOF_INT),
          this.addOffset(t),
          this.bb.setPosition(this.space));
      }),
      (e.Builder.prototype.requiredField = function (e, t) {
        var n = this.bb.capacity() - e,
          r = n - this.bb.readInt32(n),
          o = this.bb.readInt16(r + t) != 0;
        if (!o) throw new Error("FlatBuffers: field " + t + " must be set");
      }),
      (e.Builder.prototype.startVector = function (t, n, r) {
        (this.notNested(),
          (this.vector_num_elems = n),
          this.prep(e.SIZEOF_INT, t * n),
          this.prep(r, t * n));
      }),
      (e.Builder.prototype.endVector = function () {
        return (this.writeInt32(this.vector_num_elems), this.offset());
      }),
      (e.Builder.prototype.createString = function (e) {
        if (e instanceof Uint8Array) var t = e;
        else
          for (var t = [], n = 0; n < e.length; ) {
            var r,
              o = e.charCodeAt(n++);
            if (o < 55296 || o >= 56320) r = o;
            else {
              var a = e.charCodeAt(n++);
              r = (o << 10) + a + -56613888;
            }
            r < 128
              ? t.push(r)
              : (r < 2048
                  ? t.push(((r >> 6) & 31) | 192)
                  : (r < 65536
                      ? t.push(((r >> 12) & 15) | 224)
                      : t.push(((r >> 18) & 7) | 240, ((r >> 12) & 63) | 128),
                    t.push(((r >> 6) & 63) | 128)),
                t.push((r & 63) | 128));
          }
        (this.addInt8(0),
          this.startVector(1, t.length, 1),
          this.bb.setPosition((this.space -= t.length)));
        for (var n = 0, i = this.space, l = this.bb.bytes(); n < t.length; n++)
          l[i++] = t[n];
        return this.endVector();
      }),
      (e.Builder.prototype.createLong = function (t, n) {
        return e.Long.create(t, n);
      }),
      (e.ByteBuffer = function (e) {
        ((this.bytes_ = e), (this.position_ = 0));
      }),
      (e.ByteBuffer.allocate = function (t) {
        return new e.ByteBuffer(new Uint8Array(t));
      }),
      (e.ByteBuffer.prototype.bytes = function () {
        return this.bytes_;
      }),
      (e.ByteBuffer.prototype.position = function () {
        return this.position_;
      }),
      (e.ByteBuffer.prototype.setPosition = function (e) {
        this.position_ = e;
      }),
      (e.ByteBuffer.prototype.capacity = function () {
        return this.bytes_.length;
      }),
      (e.ByteBuffer.prototype.readInt8 = function (e) {
        return (this.readUint8(e) << 24) >> 24;
      }),
      (e.ByteBuffer.prototype.readUint8 = function (e) {
        return this.bytes_[e];
      }),
      (e.ByteBuffer.prototype.readInt16 = function (e) {
        return (this.readUint16(e) << 16) >> 16;
      }),
      (e.ByteBuffer.prototype.readUint16 = function (e) {
        return this.bytes_[e] | (this.bytes_[e + 1] << 8);
      }),
      (e.ByteBuffer.prototype.readInt32 = function (e) {
        return (
          this.bytes_[e] |
          (this.bytes_[e + 1] << 8) |
          (this.bytes_[e + 2] << 16) |
          (this.bytes_[e + 3] << 24)
        );
      }),
      (e.ByteBuffer.prototype.readUint32 = function (e) {
        return this.readInt32(e) >>> 0;
      }),
      (e.ByteBuffer.prototype.readInt64 = function (t) {
        return new e.Long(this.readInt32(t), this.readInt32(t + 4));
      }),
      (e.ByteBuffer.prototype.readUint64 = function (t) {
        return new e.Long(this.readUint32(t), this.readUint32(t + 4));
      }),
      (e.ByteBuffer.prototype.readFloat32 = function (t) {
        return ((e.int32[0] = this.readInt32(t)), e.float32[0]);
      }),
      (e.ByteBuffer.prototype.readFloat64 = function (t) {
        return (
          (e.int32[e.isLittleEndian ? 0 : 1] = this.readInt32(t)),
          (e.int32[e.isLittleEndian ? 1 : 0] = this.readInt32(t + 4)),
          e.float64[0]
        );
      }),
      (e.ByteBuffer.prototype.writeInt8 = function (e, t) {
        this.bytes_[e] = t;
      }),
      (e.ByteBuffer.prototype.writeUint8 = function (e, t) {
        this.bytes_[e] = t;
      }),
      (e.ByteBuffer.prototype.writeInt16 = function (e, t) {
        ((this.bytes_[e] = t), (this.bytes_[e + 1] = t >> 8));
      }),
      (e.ByteBuffer.prototype.writeUint16 = function (e, t) {
        ((this.bytes_[e] = t), (this.bytes_[e + 1] = t >> 8));
      }),
      (e.ByteBuffer.prototype.writeInt32 = function (e, t) {
        ((this.bytes_[e] = t),
          (this.bytes_[e + 1] = t >> 8),
          (this.bytes_[e + 2] = t >> 16),
          (this.bytes_[e + 3] = t >> 24));
      }),
      (e.ByteBuffer.prototype.writeUint32 = function (e, t) {
        ((this.bytes_[e] = t),
          (this.bytes_[e + 1] = t >> 8),
          (this.bytes_[e + 2] = t >> 16),
          (this.bytes_[e + 3] = t >> 24));
      }),
      (e.ByteBuffer.prototype.writeInt64 = function (e, t) {
        (this.writeInt32(e, t.low), this.writeInt32(e + 4, t.high));
      }),
      (e.ByteBuffer.prototype.writeUint64 = function (e, t) {
        (this.writeUint32(e, t.low), this.writeUint32(e + 4, t.high));
      }),
      (e.ByteBuffer.prototype.writeFloat32 = function (t, n) {
        ((e.float32[0] = n), this.writeInt32(t, e.int32[0]));
      }),
      (e.ByteBuffer.prototype.writeFloat64 = function (t, n) {
        ((e.float64[0] = n),
          this.writeInt32(t, e.int32[e.isLittleEndian ? 0 : 1]),
          this.writeInt32(t + 4, e.int32[e.isLittleEndian ? 1 : 0]));
      }),
      (e.ByteBuffer.prototype.__offset = function (e, t) {
        var n = e - this.readInt32(e);
        return t < this.readInt16(n) ? this.readInt16(n + t) : 0;
      }),
      (e.ByteBuffer.prototype.__union = function (e, t) {
        return ((e.bb_pos = t + this.readInt32(t)), (e.bb = this), e);
      }),
      (e.ByteBuffer.prototype.__string = function (t, n) {
        t += this.readInt32(t);
        var r = this.readInt32(t),
          o = "",
          a = 0;
        if (((t += e.SIZEOF_INT), n === e.Encoding.UTF8_BYTES))
          return this.bytes_.subarray(t, t + r);
        for (; a < r; ) {
          var i,
            l = this.readUint8(t + a++);
          if (l < 192) i = l;
          else {
            var s = this.readUint8(t + a++);
            if (l < 224) i = ((l & 31) << 6) | (s & 63);
            else {
              var u = this.readUint8(t + a++);
              if (l < 240) i = ((l & 15) << 12) | ((s & 63) << 6) | (u & 63);
              else {
                var c = this.readUint8(t + a++);
                i =
                  ((l & 7) << 18) |
                  ((s & 63) << 12) |
                  ((u & 63) << 6) |
                  (c & 63);
              }
            }
          }
          i < 65536
            ? (o += String.fromCharCode(i))
            : ((i -= 65536),
              (o += String.fromCharCode(
                (i >> 10) + 55296,
                (i & 1023) + 56320,
              )));
        }
        return o;
      }),
      (e.ByteBuffer.prototype.__indirect = function (e) {
        return e + this.readInt32(e);
      }),
      (e.ByteBuffer.prototype.__vector = function (t) {
        return t + this.readInt32(t) + e.SIZEOF_INT;
      }),
      (e.ByteBuffer.prototype.__vector_len = function (e) {
        return this.readInt32(e + this.readInt32(e));
      }),
      (e.ByteBuffer.prototype.__has_identifier = function (t) {
        if (t.length != e.FILE_IDENTIFIER_LENGTH)
          throw new Error(
            "FlatBuffers: file identifier must be length " +
              e.FILE_IDENTIFIER_LENGTH,
          );
        for (var n = 0; n < e.FILE_IDENTIFIER_LENGTH; n++)
          if (
            t.charCodeAt(n) != this.readInt8(this.position_ + e.SIZEOF_INT + n)
          )
            return !1;
        return !0;
      }),
      (e.ByteBuffer.prototype.createLong = function (t, n) {
        return e.Long.create(t, n);
      }),
      (a.exports = e));
  },
  null,
);
