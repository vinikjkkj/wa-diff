__d(
  "ServerCaptionsStateServerCaptionsStateSerializers",
  ["ThriftTypes", "jsbi"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return { enabled: !1 };
    }
    function u() {
      return { enabled: !1, othersEnabled: !1 };
    }
    function c(t, n) {
      if (
        (n.writeStructBegin("ServerCaptionsParticipantInputState"),
        n.writeFieldBegin({
          fname: "enabled",
          ftype: (e || (e = r("ThriftTypes"))).BOOL,
          fid: 1,
        }),
        t.enabled != null)
      )
        n.writeBool(t.enabled);
      else {
        var o = !1;
        n.writeBool(o);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function d(t, n) {
      if (
        (n.writeStructBegin("ServerCaptionsParticipantOutputState"),
        n.writeFieldBegin({
          fname: "enabled",
          ftype: (e || (e = r("ThriftTypes"))).BOOL,
          fid: 1,
        }),
        t.enabled != null)
      )
        n.writeBool(t.enabled);
      else {
        var o = !1;
        n.writeBool(o);
      }
      if (
        (n.writeFieldEnd(),
        t.dataChannelNodeId != null &&
          (n.writeFieldBegin({
            fname: "dataChannelNodeId",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 2,
          }),
          n.writeI64(r("jsbi").BigInt(t.dataChannelNodeId)),
          n.writeFieldEnd()),
        n.writeFieldBegin({ fname: "othersEnabled", ftype: e.BOOL, fid: 3 }),
        t.othersEnabled != null)
      )
        n.writeBool(t.othersEnabled);
      else {
        var a = !1;
        n.writeBool(a);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function m(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.enabled = t.readBool())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.enabled === void 0 && (n.enabled = !1), n);
    }
    function p(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.enabled = t.readBool())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.dataChannelNodeId = t.readI64().toString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.othersEnabled = t.readBool())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.enabled === void 0 && (n.enabled = !1),
        n.othersEnabled === void 0 && (n.othersEnabled = !1),
        n
      );
    }
    ((l.ServerCaptionsParticipantInputState$DefaultConstructor = s),
      (l.ServerCaptionsParticipantOutputState$DefaultConstructor = u),
      (l.serializeServerCaptionsParticipantInputState = c),
      (l.serializeServerCaptionsParticipantOutputState = d),
      (l.deserializeServerCaptionsParticipantInputState = m),
      (l.deserializeServerCaptionsParticipantOutputState = p));
  },
  98,
);
