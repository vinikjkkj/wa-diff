__d(
  "DecryptedE2eeDataSerializers",
  ["ThriftTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return { senderId: "", data: Uint8Array.of() };
    }
    function u(t, n) {
      if (
        (n.writeStructBegin("DecryptedE2eeData"),
        n.writeFieldBegin({
          fname: "senderId",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.senderId != null)
      )
        n.writeString(t.senderId);
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
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
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
              ? (n.senderId = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.data = t.readBinary())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.senderId === void 0 && (n.senderId = ""),
        n.data === void 0 && (n.data = Uint8Array.of()),
        n
      );
    }
    ((l.DecryptedE2eeData$DefaultConstructor = s),
      (l.serializeDecryptedE2eeData = u),
      (l.deserializeDecryptedE2eeData = c));
  },
  98,
);
