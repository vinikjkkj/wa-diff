__d(
  "SctpSctpDatagramSerializers",
  ["ThriftTypes", "jsbi"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return { sender: 0, receivers: new Set(), payload: Uint8Array.of() };
    }
    function u(t, n) {
      if (
        (n.writeStructBegin("Datagram"),
        n.writeFieldBegin({
          fname: "sender",
          ftype: (e || (e = r("ThriftTypes"))).I64,
          fid: 1,
        }),
        t.sender != null)
      )
        n.writeI64(r("jsbi").BigInt(t.sender));
      else {
        var o = 0;
        n.writeI64(r("jsbi").BigInt(o));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "receivers", ftype: e.SET, fid: 2 }),
        t.receivers != null)
      ) {
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).I64,
          size: t.receivers.size,
        });
        for (var a of t.receivers) n.writeI64(r("jsbi").BigInt(a));
        n.writeSetEnd();
      } else {
        var i = new Set();
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).I64,
          size: i.size,
        });
        for (var l of i) n.writeI64(r("jsbi").BigInt(l));
        n.writeSetEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "payload", ftype: e.STRING, fid: 3 }),
        t.payload != null)
      )
        n.writeBinary(t.payload);
      else {
        var s = Uint8Array.of();
        n.writeBinary(s);
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
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.sender = Number(t.readI64()))
              : t.skip(a);
            break;
          case 2:
            if (a === (e || (e = r("ThriftTypes"))).SET) {
              n.receivers = new Set();
              for (var l = t.readSetBegin(), s = 0; s < l.size; s++) {
                var u = Number(t.readI64());
                n.receivers.add(u);
              }
            } else t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.payload = t.readBinary())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.sender === void 0 && (n.sender = 0),
        n.receivers === void 0 && (n.receivers = new Set()),
        n.payload === void 0 && (n.payload = Uint8Array.of()),
        n
      );
    }
    ((l.Datagram$DefaultConstructor = s),
      (l.serializeDatagram = u),
      (l.deserializeDatagram = c));
  },
  98,
);
