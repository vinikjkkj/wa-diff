__d(
  "TCompactProtocolPolyfill",
  ["StringToUtf8", "ThriftTypes", "Utf8ToString", "jsbi"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = Object.freeze({
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
      c = Object.freeze({
        NONE: -1,
        CT_BOOLEAN_TRUE: u.CT_BOOLEAN_TRUE,
        CT_BOOLEAN_FALSE: u.CT_BOOLEAN_FALSE,
      }),
      d = [
        u.CT_STOP,
        0,
        u.CT_BOOLEAN_TRUE,
        u.CT_BYTE,
        u.CT_DOUBLE,
        0,
        u.CT_I16,
        0,
        u.CT_I32,
        0,
        u.CT_I64,
        u.CT_BINARY,
        u.CT_STRUCT,
        u.CT_MAP,
        u.CT_SET,
        u.CT_LIST,
        0,
        0,
        0,
        u.CT_FLOAT,
      ],
      m = Math.pow(2, 7) - 1,
      p = -1 * Math.pow(2, 7),
      _ = Math.pow(2, 15) - 1,
      f = -1 * Math.pow(2, 15),
      g = Math.pow(2, 31) - 1,
      h = -1 * Math.pow(2, 31),
      y = Math.pow(2, 32) - 1,
      C = (s = r("jsbi")).BigInt("9223372036854775807"),
      b = s.BigInt("-9223372036854775808"),
      v = s.BigInt("18446744073709551615"),
      S = s.BigInt(63),
      R = s.BigInt(1),
      L = s.BigInt(0),
      E = s.BigInt(7),
      k = s.BigInt(70),
      I = s.BigInt(127),
      T = s.BigInt(128),
      D = Math.pow(2, 4),
      x = (function () {
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
              : this.$7(n, c.NONE);
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
            else
              throw new Error(
                "received invalid map info: " + JSON.stringify(t),
              );
            return e;
          }),
          (n.writeMapEnd = function () {
            return 0;
          }),
          (n.$7 = function (t, n) {
            var e = 0,
              r = n === c.NONE ? this.$9(t.ftype) : n;
            return (
              t.fid > this.$3 && t.fid - this.$3 <= D - 1
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
              t.size <= D - 2
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
              (n === u.CT_BOOLEAN_TRUE || n === u.CT_BOOLEAN_FALSE) &&
                (this.$5 = n === u.CT_BOOLEAN_TRUE),
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
            if (t < 0 || t > 13)
              throw new Error(n + " read invalid compact type: " + t);
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
            if (t < p || t > m)
              throw new Error("byte to write is out of range: " + t);
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
              default:
                throw new Error(
                  "encoutered unknow thrift type: " + n + " in skip",
                );
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
            if (t < f || t > _)
              throw new Error("trying to write i16 out of range: " + t);
            return this.writeVarint32(this.i32ToZigzag(t));
          }),
          (n.readI16 = function () {
            var e = this.zigzagToI32(this.readVarint32());
            if (e < f || e > _) throw new Error("read invalid i16: " + e);
            return e;
          }),
          (n.writeI32 = function (t) {
            if (t < h || t > g) throw new Error("i32 out of range: " + t);
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
                : (e = this.$1.readByte() === u.CT_BOOLEAN_TRUE),
              e
            );
          }),
          (n.writeBool = function (t) {
            var e = 0;
            return (
              this.$4 != null
                ? ((e += this.$7(
                    this.$4,
                    t ? c.CT_BOOLEAN_TRUE : c.CT_BOOLEAN_FALSE,
                  )),
                  (this.$4 = null))
                : (e += this.$1.writeByte(
                    t ? u.CT_BOOLEAN_TRUE : u.CT_BOOLEAN_FALSE,
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
            if (t < h || t > g)
              throw new Error("number: " + t + " is out of range of i32");
            return ((t << 1) ^ (t < 0 ? 4294967295 : 0)) >>> 0;
          }),
          (n.zigzagToI32 = function (t) {
            if (t < 0 || t > y)
              throw new Error("number: " + t + " is out of range of uint32");
            return (t >>> 1) ^ (-1 * (t & 1));
          }),
          (n.i64ToZigzag = function (t) {
            if (r("jsbi").greaterThan(t, C) || r("jsbi").lessThan(t, b))
              throw new Error("i64 out of range: " + t.toString());
            return r("jsbi").bitwiseXor(
              r("jsbi").signedRightShift(t, S),
              r("jsbi").leftShift(t, R),
            );
          }),
          (n.zigzagToI64 = function (t) {
            if (r("jsbi").lessThan(t, 0) || r("jsbi").greaterThan(t, v))
              throw new Error("invalid uint64: " + t.toString());
            return r("jsbi").equal(r("jsbi").bitwiseAnd(t, R), R)
              ? r("jsbi").bitwiseNot(r("jsbi").signedRightShift(t, R))
              : r("jsbi").signedRightShift(t, R);
          }),
          (n.writeVarint32 = function (t) {
            if (t < 0 || t > y)
              throw new Error(
                "writeVarint32 received out of range uint32: " + t,
              );
            for (var e = t, n = 0; ; )
              if (e >>> 7)
                (this.$1.writeByte((e & 127) | 128), n++, (e >>>= 7));
              else {
                (this.$1.writeByte(e), n++);
                break;
              }
            return n;
          }),
          (n.readVarint32 = function () {
            for (var e = 0, t = 0, n; ; ) {
              if (
                ((n = this.$1.readByte()),
                (e = (e | ((n & 127) << t)) >>> 0),
                (t += 7),
                (n & 128) == 0)
              ) {
                if (t === 35 && (n & 240) != 0)
                  throw new Error("result exceeded 32 bit limit");
                break;
              }
              if (t > 28) throw new Error("result exceeded 32 bit limit");
            }
            return e;
          }),
          (n.writeVarint64 = function (t) {
            if (r("jsbi").lessThan(t, L) || r("jsbi").greaterThan(t, v))
              throw new Error("invalid uint64: " + t.toString());
            for (var e = t, n = 0; ; )
              if (r("jsbi").equal(r("jsbi").signedRightShift(e, E), L)) {
                (this.$1.writeByte(r("jsbi").toNumber(e)), n++);
                break;
              } else {
                var o,
                  a = (o = r("jsbi")).toNumber(
                    o.bitwiseOr(o.bitwiseAnd(e, I), T),
                  );
                (this.$1.writeByte(a), n++, (e = o.signedRightShift(e, E)));
              }
            return n;
          }),
          (n.readVarint64 = function () {
            for (var e = L, t = L, n; ; ) {
              var o;
              if (
                ((n = (o = r("jsbi")).BigInt(this.$1.readByte())),
                (e = o.bitwiseOr(e, o.leftShift(o.bitwiseAnd(n, I), t))),
                (t = o.add(t, E)),
                r("jsbi").equal(r("jsbi").bitwiseAnd(n, T), L))
              ) {
                if (r("jsbi").equal(t, k) && r("jsbi").notEqual(n, R))
                  throw new Error("result exceeded 64 bit limit");
                break;
              }
              if (r("jsbi").greaterThan(t, S))
                throw new Error("result exceeded 64 bit limit");
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
            return d[t];
          }),
          (n.$10 = function (n) {
            switch (n) {
              case u.CT_STOP:
                return (e || (e = r("ThriftTypes"))).STOP;
              case u.CT_BOOLEAN_FALSE:
              case u.CT_BOOLEAN_TRUE:
                return (e || (e = r("ThriftTypes"))).BOOL;
              case u.CT_BYTE:
                return (e || (e = r("ThriftTypes"))).BYTE;
              case u.CT_I16:
                return (e || (e = r("ThriftTypes"))).I16;
              case u.CT_I32:
                return (e || (e = r("ThriftTypes"))).I32;
              case u.CT_I64:
                return (e || (e = r("ThriftTypes"))).I64;
              case u.CT_DOUBLE:
                return (e || (e = r("ThriftTypes"))).DOUBLE;
              case u.CT_FLOAT:
                return (e || (e = r("ThriftTypes"))).FLOAT;
              case u.CT_BINARY:
                return (e || (e = r("ThriftTypes"))).STRING;
              case u.CT_LIST:
                return (e || (e = r("ThriftTypes"))).LIST;
              case u.CT_SET:
                return (e || (e = r("ThriftTypes"))).SET;
              case u.CT_MAP:
                return (e || (e = r("ThriftTypes"))).MAP;
              case u.CT_STRUCT:
                return (e || (e = r("ThriftTypes"))).STRUCT;
              default:
                throw new Error("don't know what type");
            }
          }),
          t
        );
      })();
    l.default = x;
  },
  98,
);
