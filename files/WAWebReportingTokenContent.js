__d(
  "WAWebReportingTokenContent",
  [
    "WABinary",
    "WAProtoConst",
    "WAWebReportingTokenConfig",
    "WAWebReportingTokenConstants",
    "WAWebReportingTokenProtobufUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Map([[35, new Set([1, 2, 3, 4, 6])]]),
      s = new Map([
        [o("WAWebReportingTokenConstants").REPORTING_TOKEN_VERSION.V3, e],
      ]),
      u = Math.max.apply(Math, Array.from(s.keys())),
      c = function (t) {
        this.value = t;
        var e = o("WAWebReportingTokenProtobufUtils").convertToVarInt(t);
        this.size = e.length;
      },
      d = (function () {
        function e(e, t) {
          this.valLengthSize = 0;
          var n = new (o("WABinary").Binary)(e);
          n.advance(t);
          var a = n.readVarInt(o("WABinary").parseInt64OrThrow);
          if (a < 0 || a >= 4294967296)
            throw r("err")("Invalid tag value, out of bound: " + a);
          var i = o("WAWebReportingTokenProtobufUtils").getWireTypeFromTag(a);
          this.tag = new c(a);
          var l = 0,
            s = new (o("WABinary").Binary)();
          switch ((s.writeVarInt(a), i)) {
            case o("WAProtoConst").ENC.VARINT: {
              var u = n.readVarInt(o("WABinary").parseUint64OrThrow);
              s.writeVarInt(u);
              break;
            }
            case o("WAProtoConst").ENC.BINARY: {
              var d = n.readVarInt(o("WABinary").parseUint64OrThrow),
                m = n.readByteArrayView(d);
              ((l += o("WAWebReportingTokenProtobufUtils").convertToVarInt(
                d,
              ).length),
                s.writeVarInt(d),
                s.writeByteArray(m),
                (this.valLengthSize = l));
              break;
            }
            case o("WAProtoConst").ENC.BIT64: {
              var p = n.readByteArrayView(8);
              s.writeByteArray(p);
              break;
            }
            case o("WAProtoConst").ENC.BIT32: {
              var _ = n.readByteArrayView(4);
              s.writeByteArray(_);
              break;
            }
            default:
              throw r("err")("Unsupported wire type " + i);
          }
          ((this.bytes = s.readByteArrayView()),
            (this.start = t),
            (this.end = t + this.bytes.length));
        }
        var t = e.prototype;
        return (
          (t.getFieldNumber = function () {
            return o("WAWebReportingTokenProtobufUtils").getFieldNumberFromTag(
              this.tag.value,
            );
          }),
          (t.getWireType = function () {
            return o("WAWebReportingTokenProtobufUtils").getWireTypeFromTag(
              this.tag.value,
            );
          }),
          (t.getTotalSize = function () {
            return this.bytes.length;
          }),
          (t.getValueStartIdx = function () {
            return this.start + this.tag.size + this.valLengthSize;
          }),
          (t.getValueEndIdx = function () {
            return this.end;
          }),
          (t.getBytes = function () {
            return this.bytes;
          }),
          e
        );
      })(),
      m = (function () {
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
      p = (function () {
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
      _ = (function () {
        function e(e, t) {
          ((this.protobufMessage = e), (this.messageConfig = t));
        }
        var t = e.prototype;
        return (
          (t.extractProtobufParts = function (t) {
            var e = t.config,
              n = t.end,
              r = t.pos,
              a = t.protobufMessage,
              i = new p();
            if (e == null) return i;
            for (var l = r; l < n; ) {
              var s = new d(a, l),
                u = e.getConfigForField(s.getFieldNumber());
              if (((l += s.getTotalSize()), u != null))
                if (u.isMessage === !0 || !u.isExtractWholeField()) {
                  if (s.getWireType() === o("WAProtoConst").ENC.BINARY) {
                    var c = this.extractProtobufParts({
                      config:
                        u.isMessage === !0 ? this.messageConfig : u.subfields,
                      end: s.getValueEndIdx(),
                      pos: s.getValueStartIdx(),
                      protobufMessage: a,
                    });
                    c.fields.length > 0 &&
                      i.add(new m(s.tag, c.getTotalSize(), c));
                  }
                } else i.add(s);
            }
            return (
              i.fields.sort(function (e, t) {
                return e.getFieldNumber() - t.getFieldNumber();
              }),
              i
            );
          }),
          (t.getReportingTokenContent = function () {
            var e = this.extractProtobufParts({
                config: this.messageConfig,
                end: this.protobufMessage.length,
                pos: 0,
                protobufMessage: this.protobufMessage,
              }),
              t = e.fields,
              n = new (o("WABinary").Binary)();
            for (var r of t) n.writeByteArray(r.getBytes());
            return n.readByteArrayView();
          }),
          (t.getReportingTokenContentByExclusion = function (t) {
            for (var e = [], n = 0, r = this.protobufMessage.length; n < r; ) {
              var a = o(
                "WAWebReportingTokenProtobufUtils",
              ).parseRawProtobufField(this.protobufMessage, n, r);
              if (((n = a.end), !t.has(a.fieldNumber))) {
                e.push(a.bytes);
                continue;
              }
              var i = t.get(a.fieldNumber);
              if (i != null) {
                if (a.wireType !== o("WAProtoConst").ENC.BINARY) {
                  e.push(a.bytes);
                  continue;
                }
                for (
                  var l = [], s = 0, u = !1, c = a.valueStart;
                  c < a.valueEnd;
                ) {
                  var d = o(
                    "WAWebReportingTokenProtobufUtils",
                  ).parseRawProtobufField(this.protobufMessage, c, a.valueEnd);
                  ((c = d.end),
                    i.has(d.fieldNumber)
                      ? (u = !0)
                      : (l.push(d.bytes), (s += d.bytes.length)));
                }
                if (!u) {
                  e.push(a.bytes);
                  continue;
                }
                var m = new (o("WABinary").Binary)();
                (m.writeByteArray(a.tagBytes), m.writeVarInt(s));
                for (var p of l) m.writeByteArray(p);
                e.push(m.readByteArrayView());
              }
            }
            var _ = new (o("WABinary").Binary)();
            for (var f of e) _.writeByteArray(f);
            return _.readByteArrayView();
          }),
          e
        );
      })();
    function f(e, t) {
      var n = new _(
          e,
          o("WAWebReportingTokenConfig").getReportingTokenConfig(t),
        ),
        r = h(t);
      return r != null
        ? n.getReportingTokenContentByExclusion(r)
        : n.getReportingTokenContent();
    }
    function g() {
      return u;
    }
    function h(e) {
      var t = null,
        n = null;
      for (var r of s) {
        var o = r[0],
          a = r[1];
        o <= e && (t == null || o > t) && ((t = o), (n = a));
      }
      return n;
    }
    ((l.ReportingTokenContentCalculator = _),
      (l.calculateReportingTokenContent = f),
      (l.getLatestReportingTokenExclusionVersion = g));
  },
  98,
);
