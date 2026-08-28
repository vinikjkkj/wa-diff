__d(
  "MqttThriftHeaderSerializers",
  ["ThriftTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return {};
    }
    function u(t, n) {
      (n.writeStructBegin("MqttThriftHeader"),
        t.traceInfo != null &&
          (n.writeFieldBegin({
            fname: "traceInfo",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.traceInfo),
          n.writeFieldEnd()),
        t.coreContextRequestId != null &&
          (n.writeFieldBegin({
            fname: "coreContextRequestId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.coreContextRequestId),
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
              ? (n.traceInfo = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.coreContextRequestId = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    ((l.MqttThriftHeader$DefaultConstructor = s),
      (l.serializeMqttThriftHeader = u),
      (l.deserializeMqttThriftHeader = c));
  },
  98,
);
