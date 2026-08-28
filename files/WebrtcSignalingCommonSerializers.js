__d(
  "WebrtcSignalingCommonSerializers",
  ["ThriftTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return { topic: "", data: Uint8Array.of() };
    }
    function u(t, n) {
      if (
        (n.writeStructBegin("GenericDataMessage"),
        n.writeFieldBegin({
          fname: "topic",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.topic != null)
      )
        n.writeString(t.topic);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "data", ftype: e.STRING, fid: 2 }),
        t.data != null)
      )
        n.writeBinary(t.data);
      else {
        var a = Uint8Array.of();
        n.writeBinary(a);
      }
      (n.writeFieldEnd(),
        t.e2eEncryptedData != null &&
          (n.writeFieldBegin({
            fname: "e2eEncryptedData",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeBinary(t.e2eEncryptedData),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function c(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.topic = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.data = t.readBinary())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.e2eEncryptedData = t.readBinary())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.topic === void 0 && (n.topic = ""),
        n.data === void 0 && (n.data = Uint8Array.of()),
        n
      );
    }
    ((l.GenericDataMessage$DefaultConstructor = s),
      (l.serializeGenericDataMessage = u),
      (l.deserializeGenericDataMessage = c));
  },
  98,
);
