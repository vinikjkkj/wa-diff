__d(
  "RpGenaiSctpCaptionsGenAIBotStateCoreSerializers",
  ["RpGenaiSctpCaptionsGenAIBotStateCoreTypes", "ThriftTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return {
        type: o(
          "RpGenaiSctpCaptionsGenAIBotStateCoreTypes",
        ).StandardizedResponseType.cast(0),
        payload: "",
      };
    }
    function u(t, n) {
      if (
        (n.writeStructBegin("StandardizedResponseItem"),
        n.writeFieldBegin({
          fname: "type",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.type != null)
      ) {
        var a;
        n.writeI32((a = t.type) != null ? a : 0);
      } else {
        var i = o(
          "RpGenaiSctpCaptionsGenAIBotStateCoreTypes",
        ).StandardizedResponseType.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "payload", ftype: e.STRING, fid: 2 }),
        t.payload != null)
      )
        n.writeString(t.payload);
      else {
        var l = "";
        n.writeString(l);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function c(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.type = o(
                  "RpGenaiSctpCaptionsGenAIBotStateCoreTypes",
                ).StandardizedResponseType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.payload = t.readString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.type === void 0 &&
          (n.type = o(
            "RpGenaiSctpCaptionsGenAIBotStateCoreTypes",
          ).StandardizedResponseType.cast(0)),
        n.payload === void 0 && (n.payload = ""),
        n
      );
    }
    ((l.StandardizedResponseItem$DefaultConstructor = s),
      (l.serializeStandardizedResponseItem = u),
      (l.deserializeStandardizedResponseItem = c));
  },
  98,
);
