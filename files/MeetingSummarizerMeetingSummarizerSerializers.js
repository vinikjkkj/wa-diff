__d(
  "MeetingSummarizerMeetingSummarizerSerializers",
  ["ThriftTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return { enabled: !1 };
    }
    function u() {
      return { enabled: !1, dataChannelNodeId: "0" };
    }
    function c(t, n) {
      if (
        (n.writeStructBegin("MeetingSummarizerParticipantInputState"),
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
        (n.writeStructBegin("MeetingSummarizerParticipantOutputState"),
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
        n.writeFieldBegin({ fname: "dataChannelNodeId", ftype: e.I64, fid: 2 }),
        t.dataChannelNodeId != null)
      )
        n.writeI64(BigInt(t.dataChannelNodeId));
      else {
        var a = "0";
        n.writeI64(BigInt(a));
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
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.enabled === void 0 && (n.enabled = !1),
        n.dataChannelNodeId === void 0 && (n.dataChannelNodeId = "0"),
        n
      );
    }
    ((l.MeetingSummarizerParticipantInputState$DefaultConstructor = s),
      (l.MeetingSummarizerParticipantOutputState$DefaultConstructor = u),
      (l.serializeMeetingSummarizerParticipantInputState = c),
      (l.serializeMeetingSummarizerParticipantOutputState = d),
      (l.deserializeMeetingSummarizerParticipantInputState = m),
      (l.deserializeMeetingSummarizerParticipantOutputState = p));
  },
  98,
);
