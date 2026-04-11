__d(
  "WAWebReportingTokenContent",
  ["WABinary", "WAProtoConst", "WAWebReportingTokenProtobufUtils", "err"],
  function (t, n, r, o, a, i, l) {
    var e = function (t) {
        this.value = t;
        var e = o("WAWebReportingTokenProtobufUtils").convertToVarInt(t);
        this.size = e.length;
      },
      s = (function () {
        function t(t, n) {
          this.valLengthSize = 0;
          var a = new (o("WABinary").Binary)(t);
          a.advance(n);
          var i = a.readVarInt(o("WABinary").parseInt64OrThrow);
          if (i < 0 || i >= 4294967296)
            throw r("err")("Invalid tag value, out of bound: " + i);
          var l = o("WAWebReportingTokenProtobufUtils").getWireTypeFromTag(i);
          this.tag = new e(i);
          var s = 0,
            u = new (o("WABinary").Binary)();
          switch ((u.writeVarInt(i), l)) {
            case o("WAProtoConst").ENC.VARINT: {
              var c = a.readVarInt(o("WABinary").parseUint64OrThrow);
              u.writeVarInt(c);
              break;
            }
            case o("WAProtoConst").ENC.BINARY: {
              var d = a.readVarInt(o("WABinary").parseUint64OrThrow),
                m = a.readByteArrayView(d);
              ((s += o("WAWebReportingTokenProtobufUtils").convertToVarInt(
                d,
              ).length),
                u.writeVarInt(d),
                u.writeByteArray(m),
                (this.valLengthSize = s));
              break;
            }
            case o("WAProtoConst").ENC.BIT64: {
              var p = a.readByteArrayView(8);
              u.writeByteArray(p);
              break;
            }
            case o("WAProtoConst").ENC.BIT32: {
              var _ = a.readByteArrayView(4);
              u.writeByteArray(_);
              break;
            }
            default:
              throw r("err")("Unsupported wire type " + l);
          }
          ((this.bytes = u.readByteArrayView()),
            (this.start = n),
            (this.end = n + this.bytes.length));
        }
        var n = t.prototype;
        return (
          (n.getFieldNumber = function () {
            return o("WAWebReportingTokenProtobufUtils").getFieldNumberFromTag(
              this.tag.value,
            );
          }),
          (n.getWireType = function () {
            return o("WAWebReportingTokenProtobufUtils").getWireTypeFromTag(
              this.tag.value,
            );
          }),
          (n.getTotalSize = function () {
            return this.bytes.length;
          }),
          (n.getValueStartIdx = function () {
            return this.start + this.tag.size + this.valLengthSize;
          }),
          (n.getValueEndIdx = function () {
            return this.end;
          }),
          (n.getBytes = function () {
            return this.bytes;
          }),
          t
        );
      })(),
      u = (function () {
        function e(e, t, n) {
          ((this.tag = e),
            (this.partsLength = t),
            (this.parts = n),
            (this.partsLengthInBytes = o(
              "WAWebReportingTokenProtobufUtils",
            ).convertToVarInt(this.partsLength)));
        }
        var t = e.prototype;
        return (
          (t.getFieldNumber = function () {
            return o("WAWebReportingTokenProtobufUtils").getFieldNumberFromTag(
              this.tag.value,
            );
          }),
          (t.getTotalSize = function () {
            return (
              this.tag.size +
              this.partsLengthInBytes.length +
              this.parts.getTotalSize()
            );
          }),
          (t.getBytes = function () {
            var e = new (o("WABinary").Binary)();
            (e.writeVarInt(this.tag.value), e.writeVarInt(this.partsLength));
            for (var t of this.parts.fields) e.writeByteArray(t.getBytes());
            return e.readByteArrayView();
          }),
          e
        );
      })(),
      c = (function () {
        function e() {
          ((this.fields = []), (this.totalSize = 0));
        }
        var t = e.prototype;
        return (
          (t.add = function (t) {
            (this.fields.push(t), (this.totalSize += t.getTotalSize()));
          }),
          (t.getTotalSize = function () {
            return this.totalSize;
          }),
          e
        );
      })(),
      d = (function () {
        function e(e, t) {
          ((this.protobufMessage = e), (this.messageConfig = t));
        }
        var t = e.prototype;
        return (
          (t.extractProtobufParts = function (t, n, r, a) {
            var e = new c();
            if (a == null) return e;
            for (var i = n; i < r; ) {
              var l = new s(t, i),
                d = a.getConfigForField(l.getFieldNumber());
              if (((i += l.getTotalSize()), d != null))
                if (d.isMessage === !0 || !d.isExtractWholeField()) {
                  if (l.getWireType() === o("WAProtoConst").ENC.BINARY) {
                    var m = this.extractProtobufParts(
                      t,
                      l.getValueStartIdx(),
                      l.getValueEndIdx(),
                      d.isMessage === !0 ? this.messageConfig : d.subfields,
                    );
                    m.fields.length > 0 &&
                      e.add(new u(l.tag, m.getTotalSize(), m));
                  }
                } else e.add(l);
            }
            return (
              e.fields.sort(function (e, t) {
                return e.getFieldNumber() - t.getFieldNumber();
              }),
              e
            );
          }),
          (t.getReportingTokenContent = function () {
            var e = this.extractProtobufParts(
                this.protobufMessage,
                0,
                this.protobufMessage.length,
                this.messageConfig,
              ),
              t = e.fields,
              n = new (o("WABinary").Binary)();
            for (var r of t) n.writeByteArray(r.getBytes());
            return n.readByteArrayView();
          }),
          e
        );
      })();
    l.ReportingTokenContentCalculator = d;
  },
  98,
);
