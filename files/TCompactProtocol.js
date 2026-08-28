__d(
  "TCompactProtocol",
  ["StringToUtf8", "ThriftTypes", "Utf8ToString"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = Object.freeze({
        CT_STOP: 0,
        CT_BOOLEAN_TRUE: 1,
        CT_BOOLEAN_FALSE: 2,
        CT_BYTE: 3,
        CT_I16: 4,
        CT_I32: 5,
        CT_I64: 6,
        CT_DOUBLE: 7,
        CT_BINARY: 8,
        CT_LIST: 9,
        CT_SET: 10,
        CT_MAP: 11,
        CT_STRUCT: 12,
        CT_FLOAT: 13,
      }),
      u = Object.freeze({
        NONE: -1,
        CT_BOOLEAN_TRUE: s.CT_BOOLEAN_TRUE,
        CT_BOOLEAN_FALSE: s.CT_BOOLEAN_FALSE,
      }),
      c = [
        s.CT_STOP,
        0,
        s.CT_BOOLEAN_TRUE,
        s.CT_BYTE,
        s.CT_DOUBLE,
        0,
        s.CT_I16,
        0,
        s.CT_I32,
        0,
        s.CT_I64,
        s.CT_BINARY,
        s.CT_STRUCT,
        s.CT_MAP,
        s.CT_SET,
        s.CT_LIST,
        0,
        0,
        0,
        s.CT_FLOAT,
      ],
      d = Math.pow(2, 7) - 1,
      m = -1 * Math.pow(2, 7),
      p = Math.pow(2, 15) - 1,
      _ = -1 * Math.pow(2, 15),
      f = Math.pow(2, 31) - 1,
      g = -1 * Math.pow(2, 31),
      h = Math.pow(2, 32) - 1,
      y = BigInt("9223372036854775807"),
      C = BigInt("-9223372036854775808"),
      b = BigInt("18446744073709551615"),
      v = BigInt(63),
      S = BigInt(1),
      R = BigInt(7),
      L = BigInt("0x7f"),
      E = BigInt("0x80"),
      k = Math.pow(2, 4),
      I = (function () {
        function t(e) {
          ((this.$4 = null),
            (this.$5 = null),
            (this.$1 = e),
            (this.$2 = []),
            (this.$3 = 0),
            (this.$6 = new DataView(new ArrayBuffer(1))));
        }
        var n = t.prototype;
        return (
          (n.readStructBegin = function () {
            (this.$2.push(this.$3), (this.$3 = 0));
          }),
          (n.readStructEnd = function () {
            return ((this.$3 = this.$2.pop()), 0);
          }),
          (n.writeStructBegin = function (t) {
            return (this.$2.push(this.$3), (this.$3 = 0), 0);
          }),
          (n.writeStructEnd = function () {
            return ((this.$3 = this.$2.pop()), 0);
          }),
          (n.writeFieldBegin = function (n) {
            return n.ftype === (e || (e = r("ThriftTypes"))).BOOL
              ? ((this.$4 = { fid: n.fid, fname: n.fname, ftype: n.ftype }), 0)
              : this.$7(n, u.NONE);
          }),
          (n.writeListBegin = function (t) {
            return this.$8(t);
          }),
          (n.writeListEnd = function () {
            return 0;
          }),
          (n.writeSetBegin = function (t) {
            return this.$8(t);
          }),
          (n.writeSetEnd = function () {
            return 0;
          }),
          (n.writeMapBegin = function (t) {
            var e = 0;
            if (t.size === 0) e += this.$1.writeByte(0);
            else if (
              ((e += this.writeVarint32(t.size)),
              t.ktype != null && t.vtype != null)
            )
              e += this.$1.writeByte(
                (this.$9(t.ktype) << 4) | this.$9(t.vtype),
              );
            else {
              var n = new Error(
                "received invalid map info: " + JSON.stringify(t),
              );
              throw (n.stack, n);
            }
            return e;
          }),
          (n.writeMapEnd = function () {
            return 0;
          }),
          (n.$7 = function (t, n) {
            var e = 0,
              r = n === u.NONE ? this.$9(t.ftype) : n;
            return (
              t.fid > this.$3 && t.fid - this.$3 <= k - 1
                ? (e += this.$1.writeByte(((t.fid - this.$3) << 4) | r))
                : ((e += this.$1.writeByte(r)), (e += this.writeI16(t.fid))),
              (this.$3 = t.fid),
              e
            );
          }),
          (n.$8 = function (t) {
            var e = 0,
              n = this.$9(t.etype);
            return (
              t.size <= k - 2
                ? (e += this.$1.writeByte((t.size << 4) | n))
                : ((e += this.$1.writeByte(240 | n)),
                  (e += this.writeVarint32(t.size))),
              e
            );
          }),
          (n.readFieldBegin = function () {
            var t = this.$1.readByte(),
              n = t & 15;
            if (n === (e || (e = r("ThriftTypes"))).STOP)
              return { ftype: (e || (e = r("ThriftTypes"))).STOP, fid: 0 };
            var o = (t & 240) >>> 4,
              a;
            o === 0 ? (a = this.readI16()) : (a = this.$3 + o);
            var i = this.$10(n);
            return (
              (n === s.CT_BOOLEAN_TRUE || n === s.CT_BOOLEAN_FALSE) &&
                (this.$5 = n === s.CT_BOOLEAN_TRUE),
              (this.$3 = a),
              { ftype: i, fid: a }
            );
          }),
          (n.readListBegin = function () {
            return this.$11();
          }),
          (n.readListEnd = function () {
            return 0;
          }),
          (n.readSetBegin = function () {
            return this.$11();
          }),
          (n.readSetEnd = function () {
            return 0;
          }),
          (n.readMapBegin = function () {
            var e = this.readVarint32();
            if (e > 0) {
              var t = this.$1.readByte(),
                n = this.$12(t >> 4, "readMapBegin:key"),
                r = this.$12(t & 15, "readMapBegin:value");
              return { ktype: this.$10(n), vtype: this.$10(r), size: e };
            }
            return { size: e };
          }),
          (n.readMapEnd = function () {
            return 0;
          }),
          (n.$12 = function (t, n) {
            if (t < 0 || t > 13) {
              var e = new Error(n + " read invalid compact type: " + t);
              throw (e.stack, e);
            }
            return t;
          }),
          (n.$11 = function () {
            var e = this.$1.readByte(),
              t = this.$12(e & 15, "_readListOrSetBegin"),
              n = this.$10(t),
              r = (e >> 4) & 15;
            return (
              r === 15 && (r = this.readVarint32()),
              { etype: n, size: r }
            );
          }),
          (n.readFieldEnd = function () {
            return 0;
          }),
          (n.readByte = function () {
            return (
              this.$6.setUint8(0, this.$1.readByte()),
              this.$6.getInt8(0)
            );
          }),
          (n.writeByte = function (t) {
            if (t < m || t > d) {
              var e = new Error("byte to write is out of range: " + t);
              throw (e.stack, e);
            }
            return (
              this.$6.setInt8(0, t),
              this.$1.writeByte(this.$6.getUint8(0))
            );
          }),
          (n.readFloat = function () {
            return this.$1.readFloatBE();
          }),
          (n.writeFloat = function (t) {
            return this.$1.writeFloatBE(t);
          }),
          (n.readDouble = function () {
            return this.$1.readDoubleBE();
          }),
          (n.writeDouble = function (t) {
            return this.$1.writeDoubleBE(t);
          }),
          (n.writeString = function (t) {
            return this.writeBinary(o("StringToUtf8").StringToUtf8(t));
          }),
          (n.skip = function (n) {
            switch (n) {
              case (e || (e = r("ThriftTypes"))).STOP:
                return;
              case (e || (e = r("ThriftTypes"))).BOOL:
                this.readBool();
                break;
              case (e || (e = r("ThriftTypes"))).BYTE:
                this.readByte();
                break;
              case (e || (e = r("ThriftTypes"))).DOUBLE:
                this.readDouble();
                break;
              case (e || (e = r("ThriftTypes"))).I16:
                this.readI16();
                break;
              case (e || (e = r("ThriftTypes"))).I32:
                this.readI32();
                break;
              case (e || (e = r("ThriftTypes"))).I64:
                this.readI64();
                break;
              case (e || (e = r("ThriftTypes"))).STRING:
                this.readString();
                break;
              case (e || (e = r("ThriftTypes"))).STRUCT: {
                this.readStructBegin();
                for (
                  var t;
                  (t = this.readFieldBegin()),
                    t.ftype !== (e || (e = r("ThriftTypes"))).STOP;
                )
                  this.skip(t.ftype);
                this.readStructEnd();
                break;
              }
              case (e || (e = r("ThriftTypes"))).MAP: {
                var o = this.readMapBegin();
                if (o.size > 0 && o.ktype != null && o.vtype != null)
                  for (var a = o.ktype, i = o.vtype, l = 0; l < o.size; l++)
                    (this.skip(a), this.skip(i));
                break;
              }
              case (e || (e = r("ThriftTypes"))).SET:
              case (e || (e = r("ThriftTypes"))).LIST: {
                for (var s = this.$11(), u = 0; u < s.size; u++)
                  this.skip(s.etype);
                break;
              }
              case (e || (e = r("ThriftTypes"))).FLOAT:
                this.readFloat();
                break;
              default: {
                var c = new Error(
                  "encoutered unknow thrift type: " + n + " in skip",
                );
                throw (c.stack, c);
              }
            }
          }),
          (n.toByteArray = function () {
            return this.$1.toByteArray();
          }),
          (n.writeFieldEnd = function () {
            return 0;
          }),
          (n.writeFieldStop = function () {
            return this.$1.writeByte((e || (e = r("ThriftTypes"))).STOP);
          }),
          (n.writeI16 = function (t) {
            if (t < _ || t > p) {
              var e = new Error("trying to write i16 out of range: " + t);
              throw (e.stack, e);
            }
            return this.writeVarint32(this.i32ToZigzag(t));
          }),
          (n.readI16 = function () {
            var e = this.zigzagToI32(this.readVarint32());
            if (e < _ || e > p) {
              var t = new Error("read invalid i16: " + e);
              throw (t.stack, t);
            }
            return e;
          }),
          (n.writeI32 = function (t) {
            if (t < g || t > f) {
              var e = new Error("i32 out of range: " + t);
              throw (e.stack, e);
            }
            return this.writeVarint32(this.i32ToZigzag(t));
          }),
          (n.readI32 = function () {
            return this.zigzagToI32(this.readVarint32());
          }),
          (n.writeI64 = function (t) {
            return this.writeVarint64(this.i64ToZigzag(t));
          }),
          (n.readI64 = function () {
            return this.zigzagToI64(this.readVarint64());
          }),
          (n.readBool = function () {
            var e;
            return (
              this.$5 != null
                ? ((e = this.$5), (this.$5 = null))
                : (e = this.$1.readByte() === s.CT_BOOLEAN_TRUE),
              e
            );
          }),
          (n.writeBool = function (t) {
            var e = 0;
            return (
              this.$4 != null
                ? ((e += this.$7(
                    this.$4,
                    t ? u.CT_BOOLEAN_TRUE : u.CT_BOOLEAN_FALSE,
                  )),
                  (this.$4 = null))
                : (e += this.$1.writeByte(
                    t ? s.CT_BOOLEAN_TRUE : s.CT_BOOLEAN_FALSE,
                  )),
              e
            );
          }),
          (n.readBinary = function () {
            var e = this.readVarint32();
            return e === 0 ? new Uint8Array(0) : this.$1.readBytes(e);
          }),
          (n.writeBinary = function (t) {
            var e = 0;
            return (
              (e += this.writeVarint32(t.length)),
              (e += this.$1.write(t)),
              e
            );
          }),
          (n.i32ToZigzag = function (t) {
            if (t < g || t > f) {
              var e = new Error("number: " + t + " is out of range of i32");
              throw (e.stack, e);
            }
            return ((t << 1) ^ (t < 0 ? 4294967295 : 0)) >>> 0;
          }),
          (n.zigzagToI32 = function (t) {
            if (t < 0 || t > h) {
              var e = new Error("number: " + t + " is out of range of uint32");
              throw (e.stack, e);
            }
            return (t >>> 1) ^ (-1 * (t & 1));
          }),
          (n.i64ToZigzag = function (t) {
            if (t > y || t < C) {
              var e = new Error("i64 out of range: " + t.toString());
              throw (e.stack, e);
            }
            return (t >> v) ^ (t << S);
          }),
          (n.zigzagToI64 = function (t) {
            if (t < 0 || t > b) {
              var e = new Error("invalid uint64: " + t.toString());
              throw (e.stack, e);
            }
            return (t & S) === S ? ~(t >> S) : t >> S;
          }),
          (n.writeVarint32 = function (t) {
            if (t < 0 || t > h) {
              var e = new Error(
                "writeVarint32 received out of range uint32: " + t,
              );
              throw (e.stack, e);
            }
            for (var n = t, r = 0; ; )
              if (n >>> 7)
                (this.$1.writeByte((n & 127) | 128), r++, (n >>>= 7));
              else {
                (this.$1.writeByte(n), r++);
                break;
              }
            return r;
          }),
          (n.readVarint32 = function () {
            for (var e = 0, t = 0, n; ; ) {
              if (
                ((n = this.$1.readByte()),
                (e = (e | ((n & 127) << t)) >>> 0),
                (t += 7),
                (n & 128) == 0)
              ) {
                if (t === 35 && (n & 240) != 0) {
                  var r = new Error("result exceeded 32 bit limit");
                  throw (r.stack, r);
                }
                break;
              }
              if (t > 28) {
                var o = new Error("result exceeded 32 bit limit");
                throw (o.stack, o);
              }
            }
            return e;
          }),
          (n.writeVarint64 = function (t) {
            if (t < 0 || t > b) {
              var e = new Error("invalid uint64: " + t.toString());
              throw (e.stack, e);
            }
            for (var n = t, r = 0; ; )
              if (n >> R == 0) {
                (this.$1.writeByte(Number(n)), r++);
                break;
              } else (this.$1.writeByte(Number((n & L) | E)), r++, (n >>= R));
            return r;
          }),
          (n.readVarint64 = function () {
            for (var e = BigInt(0), t = BigInt(0), n; ; ) {
              if (
                ((n = BigInt(this.$1.readByte())),
                (e |= (n & L) << t),
                (t += R),
                (n & E) == 0)
              ) {
                if (t == 70 && n !== S) {
                  var r = new Error("result exceeded 64 bit limit");
                  throw (r.stack, r);
                }
                break;
              }
              if (t > 63) {
                var o = new Error("result exceeded 64 bit limit");
                throw (o.stack, o);
              }
            }
            return e;
          }),
          (n.readString = function () {
            return o("Utf8ToString").Utf8ToString(this.readBinary());
          }),
          (n.getLastFieldId = function () {
            return this.$3;
          }),
          (n.getLastField = function () {
            return this.$2;
          }),
          (n.getBooleanFieldInfo = function () {
            return this.$4;
          }),
          (n.getBooleanValue = function () {
            return this.$5;
          }),
          (n.$9 = function (t) {
            return c[t];
          }),
          (n.$10 = function (n) {
            switch (n) {
              case s.CT_STOP:
                return (e || (e = r("ThriftTypes"))).STOP;
              case s.CT_BOOLEAN_FALSE:
              case s.CT_BOOLEAN_TRUE:
                return (e || (e = r("ThriftTypes"))).BOOL;
              case s.CT_BYTE:
                return (e || (e = r("ThriftTypes"))).BYTE;
              case s.CT_I16:
                return (e || (e = r("ThriftTypes"))).I16;
              case s.CT_I32:
                return (e || (e = r("ThriftTypes"))).I32;
              case s.CT_I64:
                return (e || (e = r("ThriftTypes"))).I64;
              case s.CT_DOUBLE:
                return (e || (e = r("ThriftTypes"))).DOUBLE;
              case s.CT_FLOAT:
                return (e || (e = r("ThriftTypes"))).FLOAT;
              case s.CT_BINARY:
                return (e || (e = r("ThriftTypes"))).STRING;
              case s.CT_LIST:
                return (e || (e = r("ThriftTypes"))).LIST;
              case s.CT_SET:
                return (e || (e = r("ThriftTypes"))).SET;
              case s.CT_MAP:
                return (e || (e = r("ThriftTypes"))).MAP;
              case s.CT_STRUCT:
                return (e || (e = r("ThriftTypes"))).STRUCT;
              default: {
                var t = new Error("don't know what type");
                throw (t.stack, t);
              }
            }
          }),
          t
        );
      })();
    l.default = I;
  },
  98,
);
