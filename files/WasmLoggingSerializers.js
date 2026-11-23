__d(
  "WasmLoggingSerializers",
  ["ThriftTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return { error: 0, warning: 0, info: 0 };
    }
    function u(t, n) {
      if (
        (n.writeStructBegin("ConsoleLogLevelDefinition"),
        n.writeFieldBegin({
          fname: "error",
          ftype: (e || (e = r("ThriftTypes"))).BYTE,
          fid: 1,
        }),
        t.error != null)
      )
        n.writeByte(t.error);
      else {
        var o = 0;
        n.writeByte(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "warning", ftype: e.BYTE, fid: 2 }),
        t.warning != null)
      )
        n.writeByte(t.warning);
      else {
        var a = 0;
        n.writeByte(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "info", ftype: e.BYTE, fid: 3 }),
        t.info != null)
      )
        n.writeByte(t.info);
      else {
        var i = 0;
        n.writeByte(i);
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
            a === (e || (e = r("ThriftTypes"))).BYTE
              ? (n.error = t.readByte())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).BYTE
              ? (n.warning = t.readByte())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).BYTE
              ? (n.info = t.readByte())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.error === void 0 && (n.error = 0),
        n.warning === void 0 && (n.warning = 0),
        n.info === void 0 && (n.info = 0),
        n
      );
    }
    ((l.ConsoleLogLevelDefinition$DefaultConstructor = s),
      (l.serializeConsoleLogLevelDefinition = u),
      (l.deserializeConsoleLogLevelDefinition = c));
  },
  98,
);
