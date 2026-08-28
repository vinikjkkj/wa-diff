__d(
  "SctpNegotiationStateSctpNegotiationStateSerializers",
  ["SctpNegotiationStateSctpNegotiationStateTypes", "ThriftTypes", "jsbi"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return {
        sdp: c(),
        msgType: o(
          "SctpNegotiationStateSctpNegotiationStateTypes",
        ).SctpMessageTypeEnum.cast(0),
        mediaPath: o(
          "SctpNegotiationStateSctpNegotiationStateTypes",
        ).SctpMediaPath.cast(0),
      };
    }
    function u() {
      return {
        sdp: c(),
        msgType: o(
          "SctpNegotiationStateSctpNegotiationStateTypes",
        ).SctpMessageTypeEnum.cast(0),
        mediaPath: o(
          "SctpNegotiationStateSctpNegotiationStateTypes",
        ).SctpMediaPath.cast(0),
      };
    }
    function c() {
      return {};
    }
    function d() {
      return { outputOffer: u(), senderUserId: "" };
    }
    function m() {
      return {};
    }
    function p(t, n) {
      if (
        (n.writeStructBegin("SCTPNegotiationParticipantInputState"),
        n.writeFieldBegin({
          fname: "sdp",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 1,
        }),
        t.sdp != null)
      )
        f(t.sdp, n);
      else {
        var a = c();
        f(a, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "msgType", ftype: e.I32, fid: 2 }),
        t.msgType != null)
      ) {
        var i;
        n.writeI32((i = t.msgType) != null ? i : 0);
      } else {
        var l = o(
          "SctpNegotiationStateSctpNegotiationStateTypes",
        ).SctpMessageTypeEnum.cast(0);
        n.writeI32(l != null ? l : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "mediaPath", ftype: e.I32, fid: 3 }),
        t.mediaPath != null)
      ) {
        var s;
        n.writeI32((s = t.mediaPath) != null ? s : 0);
      } else {
        var u = o(
          "SctpNegotiationStateSctpNegotiationStateTypes",
        ).SctpMediaPath.cast(0);
        n.writeI32(u != null ? u : 0);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function _(t, n) {
      if (
        (n.writeStructBegin("SCTPNegotiationParticipantOutputState"),
        n.writeFieldBegin({
          fname: "sdp",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 1,
        }),
        t.sdp != null)
      )
        f(t.sdp, n);
      else {
        var a = c();
        f(a, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "msgType", ftype: e.I32, fid: 2 }),
        t.msgType != null)
      ) {
        var i;
        n.writeI32((i = t.msgType) != null ? i : 0);
      } else {
        var l = o(
          "SctpNegotiationStateSctpNegotiationStateTypes",
        ).SctpMessageTypeEnum.cast(0);
        n.writeI32(l != null ? l : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "mediaPath", ftype: e.I32, fid: 3 }),
        t.mediaPath != null)
      ) {
        var s;
        n.writeI32((s = t.mediaPath) != null ? s : 0);
      } else {
        var u = o(
          "SctpNegotiationStateSctpNegotiationStateTypes",
        ).SctpMediaPath.cast(0);
        n.writeI32(u != null ? u : 0);
      }
      if ((n.writeFieldEnd(), t.userIdToNodeIdMap != null)) {
        (n.writeFieldBegin({
          fname: "userIdToNodeIdMap",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 4,
        }),
          n.writeMapBegin({
            ktype: e.STRING,
            vtype: e.I64,
            size: t.userIdToNodeIdMap.size,
          }));
        for (var d of t.userIdToNodeIdMap.entries()) {
          var m = d[0],
            p = d[1];
          (n.writeString(m), n.writeI64(r("jsbi").BigInt(p)));
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function f(t, n) {
      (n.writeStructBegin("SctpSessionDescription"),
        t.sdpString != null &&
          (n.writeFieldBegin({
            fname: "sdpString",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.sdpString),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function g(t, n) {
      if (
        (n.writeStructBegin("PendingSdpOffer"),
        n.writeFieldBegin({
          fname: "outputOffer",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 1,
        }),
        t.outputOffer != null)
      )
        _(t.outputOffer, n);
      else {
        var o = u();
        _(o, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "senderUserId", ftype: e.STRING, fid: 2 }),
        t.senderUserId != null)
      )
        n.writeString(t.senderUserId);
      else {
        var a = "";
        n.writeString(a);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function h(t, n) {
      if (
        (n.writeStructBegin("SCTPNegotiationConferenceOutputState"),
        t.pendingSdpOffer != null &&
          (n.writeFieldBegin({
            fname: "pendingSdpOffer",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 2,
          }),
          g(t.pendingSdpOffer, n),
          n.writeFieldEnd()),
        t.userIdToNodeIdMap != null)
      ) {
        (n.writeFieldBegin({
          fname: "userIdToNodeIdMap",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 3,
        }),
          n.writeMapBegin({
            ktype: e.STRING,
            vtype: e.I64,
            size: t.userIdToNodeIdMap.size,
          }));
        for (var o of t.userIdToNodeIdMap.entries()) {
          var a = o[0],
            i = o[1];
          (n.writeString(a), n.writeI64(r("jsbi").BigInt(i)));
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function y(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.sdp = b(t))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.msgType = o(
                  "SctpNegotiationStateSctpNegotiationStateTypes",
                ).SctpMessageTypeEnum.cast(t.readI32()))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.mediaPath = o(
                  "SctpNegotiationStateSctpNegotiationStateTypes",
                ).SctpMediaPath.cast(t.readI32()))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.sdp === void 0 && (n.sdp = c()),
        n.msgType === void 0 &&
          (n.msgType = o(
            "SctpNegotiationStateSctpNegotiationStateTypes",
          ).SctpMessageTypeEnum.cast(0)),
        n.mediaPath === void 0 &&
          (n.mediaPath = o(
            "SctpNegotiationStateSctpNegotiationStateTypes",
          ).SctpMediaPath.cast(0)),
        n
      );
    }
    function C(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.sdp = b(t))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.msgType = o(
                  "SctpNegotiationStateSctpNegotiationStateTypes",
                ).SctpMessageTypeEnum.cast(t.readI32()))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.mediaPath = o(
                  "SctpNegotiationStateSctpNegotiationStateTypes",
                ).SctpMediaPath.cast(t.readI32()))
              : t.skip(i);
            break;
          case 4:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.userIdToNodeIdMap = new Map();
              for (var s = t.readMapBegin(), u = 0; u < s.size; u++) {
                var d = t.readString(),
                  m = Number(t.readI64());
                n.userIdToNodeIdMap.set(d, m);
              }
            } else t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.sdp === void 0 && (n.sdp = c()),
        n.msgType === void 0 &&
          (n.msgType = o(
            "SctpNegotiationStateSctpNegotiationStateTypes",
          ).SctpMessageTypeEnum.cast(0)),
        n.mediaPath === void 0 &&
          (n.mediaPath = o(
            "SctpNegotiationStateSctpNegotiationStateTypes",
          ).SctpMediaPath.cast(0)),
        n
      );
    }
    function b(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.sdpString = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function v(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.outputOffer = C(t))
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.senderUserId = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.outputOffer === void 0 && (n.outputOffer = u()),
        n.senderUserId === void 0 && (n.senderUserId = ""),
        n
      );
    }
    function S(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.pendingSdpOffer = v(t))
              : t.skip(a);
            break;
          case 3:
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.userIdToNodeIdMap = new Map();
              for (var l = t.readMapBegin(), s = 0; s < l.size; s++) {
                var u = t.readString(),
                  c = Number(t.readI64());
                n.userIdToNodeIdMap.set(u, c);
              }
            } else t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    ((l.SCTPNegotiationParticipantInputState$DefaultConstructor = s),
      (l.SCTPNegotiationParticipantOutputState$DefaultConstructor = u),
      (l.SctpSessionDescription$DefaultConstructor = c),
      (l.PendingSdpOffer$DefaultConstructor = d),
      (l.SCTPNegotiationConferenceOutputState$DefaultConstructor = m),
      (l.serializeSCTPNegotiationParticipantInputState = p),
      (l.serializeSCTPNegotiationParticipantOutputState = _),
      (l.serializeSctpSessionDescription = f),
      (l.serializePendingSdpOffer = g),
      (l.serializeSCTPNegotiationConferenceOutputState = h),
      (l.deserializeSCTPNegotiationParticipantInputState = y),
      (l.deserializeSCTPNegotiationParticipantOutputState = C),
      (l.deserializeSctpSessionDescription = b),
      (l.deserializePendingSdpOffer = v),
      (l.deserializeSCTPNegotiationConferenceOutputState = S));
  },
  98,
);
