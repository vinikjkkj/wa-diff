__d(
  "CathodeExtensionStateCathodeExtensionStateSerializers",
  ["ThriftTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return { useCase: 0, useCaseParticipantInputState: Uint8Array.of() };
    }
    function u() {
      return { useCaseParticipantOutputStateMap: {} };
    }
    function c() {
      return {
        enablerUserId: "",
        capabilitySessionId: "",
        dataChannelNodeId: "0",
      };
    }
    function d() {
      return { smcTier: "", conferenceOutputStateMap: {} };
    }
    function m(t, n) {
      if (
        (n.writeStructBegin("CathodeExtensionParticipantInputState"),
        n.writeFieldBegin({
          fname: "useCase",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.useCase != null)
      )
        n.writeI32(t.useCase);
      else {
        var o = 0;
        n.writeI32(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "useCaseParticipantInputState",
          ftype: e.STRING,
          fid: 2,
        }),
        t.useCaseParticipantInputState != null)
      )
        n.writeBinary(t.useCaseParticipantInputState);
      else {
        var a = Uint8Array.of();
        n.writeBinary(a);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function p(t, n) {
      if (
        (n.writeStructBegin("CathodeExtensionParticipantOutputState"),
        n.writeFieldBegin({
          fname: "useCaseParticipantOutputStateMap",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 1,
        }),
        t.useCaseParticipantOutputStateMap != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).I32,
          vtype: e.STRING,
          size: Object.keys(t.useCaseParticipantOutputStateMap).length,
        });
        for (var o of Object.entries(t.useCaseParticipantOutputStateMap)) {
          var a = o[0],
            i = o[1];
          (n.writeI32(Number(a)), n.writeBinary(i));
        }
        n.writeMapEnd();
      } else {
        var l = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).I32,
          vtype: e.STRING,
          size: Object.keys(l).length,
        });
        for (var s of Object.entries(l)) {
          var u = s[0],
            c = s[1];
          (n.writeI32(Number(u)), n.writeBinary(c));
        }
        n.writeMapEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function _(t, n) {
      if (
        (n.writeStructBegin("UseCaseConferenceOutputState"),
        n.writeFieldBegin({
          fname: "enablerUserId",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.enablerUserId != null)
      )
        n.writeString(t.enablerUserId);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "capabilitySessionId",
          ftype: e.STRING,
          fid: 2,
        }),
        t.capabilitySessionId != null)
      )
        n.writeString(t.capabilitySessionId);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "dataChannelNodeId", ftype: e.I64, fid: 3 }),
        t.dataChannelNodeId != null)
      )
        n.writeI64(BigInt(t.dataChannelNodeId));
      else {
        var i = "0";
        n.writeI64(BigInt(i));
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function f(t, n) {
      if (
        (n.writeStructBegin("ConferenceOutputState"),
        n.writeFieldBegin({
          fname: "smcTier",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.smcTier != null)
      )
        n.writeString(t.smcTier);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "conferenceOutputStateMap",
          ftype: e.MAP,
          fid: 2,
        }),
        t.conferenceOutputStateMap != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).I32,
          vtype: e.STRUCT,
          size: Object.keys(t.conferenceOutputStateMap).length,
        });
        for (var a of Object.entries(t.conferenceOutputStateMap)) {
          var i = a[0],
            l = a[1];
          (n.writeI32(Number(i)), _(l, n));
        }
        n.writeMapEnd();
      } else {
        var s = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).I32,
          vtype: e.STRUCT,
          size: Object.keys(s).length,
        });
        for (var u of Object.entries(s)) {
          var c = u[0],
            d = u[1];
          (n.writeI32(Number(c)), _(d, n));
        }
        n.writeMapEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function g(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.useCase = t.readI32())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.useCaseParticipantInputState = t.readBinary())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.useCase === void 0 && (n.useCase = 0),
        n.useCaseParticipantInputState === void 0 &&
          (n.useCaseParticipantInputState = Uint8Array.of()),
        n
      );
    }
    function h(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.useCaseParticipantOutputStateMap = {};
              for (var l = t.readMapBegin(), s = 0; s < l.size; s++) {
                var u = t.readI32(),
                  c = t.readBinary();
                n.useCaseParticipantOutputStateMap[u] = c;
              }
            } else t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.useCaseParticipantOutputStateMap === void 0 &&
          (n.useCaseParticipantOutputStateMap = {}),
        n
      );
    }
    function y(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.enablerUserId = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.capabilitySessionId = t.readString())
              : t.skip(a);
            break;
          case 3:
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
        n.enablerUserId === void 0 && (n.enablerUserId = ""),
        n.capabilitySessionId === void 0 && (n.capabilitySessionId = ""),
        n.dataChannelNodeId === void 0 && (n.dataChannelNodeId = "0"),
        n
      );
    }
    function C(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.smcTier = t.readString())
              : t.skip(a);
            break;
          case 2:
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.conferenceOutputStateMap = {};
              for (var l = t.readMapBegin(), s = 0; s < l.size; s++) {
                var u = t.readI32(),
                  c = y(t);
                n.conferenceOutputStateMap[u] = c;
              }
            } else t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.smcTier === void 0 && (n.smcTier = ""),
        n.conferenceOutputStateMap === void 0 &&
          (n.conferenceOutputStateMap = {}),
        n
      );
    }
    ((l.CathodeExtensionParticipantInputState$DefaultConstructor = s),
      (l.CathodeExtensionParticipantOutputState$DefaultConstructor = u),
      (l.UseCaseConferenceOutputState$DefaultConstructor = c),
      (l.ConferenceOutputState$DefaultConstructor = d),
      (l.serializeCathodeExtensionParticipantInputState = m),
      (l.serializeCathodeExtensionParticipantOutputState = p),
      (l.serializeUseCaseConferenceOutputState = _),
      (l.serializeConferenceOutputState = f),
      (l.deserializeCathodeExtensionParticipantInputState = g),
      (l.deserializeCathodeExtensionParticipantOutputState = h),
      (l.deserializeUseCaseConferenceOutputState = y),
      (l.deserializeConferenceOutputState = C));
  },
  98,
);
