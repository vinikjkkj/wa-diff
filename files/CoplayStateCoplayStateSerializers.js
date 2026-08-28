__d(
  "CoplayStateCoplayStateSerializers",
  ["CoplayStateCoplayStateTypes", "ThriftTypes", "jsbi"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return {};
    }
    function u() {
      return {
        matchId: "0",
        event: o("CoplayStateCoplayStateTypes").CoplayConferenceInputEvent.cast(
          0,
        ),
      };
    }
    function c() {
      return { userId: "0" };
    }
    function d() {
      return {
        matchId: "0",
        appId: "0",
        matchStatus: o("CoplayStateCoplayStateTypes").CoplayMatchStatus.cast(0),
        participants: [],
        creatorId: "0",
      };
    }
    function m() {
      return {};
    }
    function p() {
      return { previousMatchIds: [] };
    }
    function _(t, n) {
      if (
        (n.writeStructBegin("CoplayMatchInputState"),
        t.matchId != null &&
          (n.writeFieldBegin({
            fname: "matchId",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 1,
          }),
          n.writeI64(r("jsbi").BigInt(t.matchId)),
          n.writeFieldEnd()),
        t.event != null)
      ) {
        var o;
        (n.writeFieldBegin({
          fname: "event",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 2,
        }),
          n.writeI32((o = t.event) != null ? o : 0),
          n.writeFieldEnd());
      }
      if (
        (t.isEligible != null &&
          (n.writeFieldBegin({
            fname: "isEligible",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 3,
          }),
          n.writeBool(t.isEligible),
          n.writeFieldEnd()),
        t.gameId != null &&
          (n.writeFieldBegin({
            fname: "gameId",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 4,
          }),
          n.writeI64(r("jsbi").BigInt(t.gameId)),
          n.writeFieldEnd()),
        t.creatorId != null &&
          (n.writeFieldBegin({
            fname: "creatorId",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 5,
          }),
          n.writeI64(r("jsbi").BigInt(t.creatorId)),
          n.writeFieldEnd()),
        t.matchStatus != null)
      ) {
        var a;
        (n.writeFieldBegin({
          fname: "matchStatus",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 6,
        }),
          n.writeI32((a = t.matchStatus) != null ? a : 0),
          n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function f(t, n) {
      if (
        (n.writeStructBegin("CoplayConferenceInputState"),
        n.writeFieldBegin({
          fname: "matchId",
          ftype: (e || (e = r("ThriftTypes"))).I64,
          fid: 1,
        }),
        t.matchId != null)
      )
        n.writeI64(r("jsbi").BigInt(t.matchId));
      else {
        var a = "0";
        n.writeI64(r("jsbi").BigInt(a));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "event", ftype: e.I32, fid: 2 }),
        t.event != null)
      ) {
        var i;
        n.writeI32((i = t.event) != null ? i : 0);
      } else {
        var l = o(
          "CoplayStateCoplayStateTypes",
        ).CoplayConferenceInputEvent.cast(0);
        n.writeI32(l != null ? l : 0);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function g(t, n) {
      if (
        (n.writeStructBegin("CoplayParticipantInfo"),
        n.writeFieldBegin({
          fname: "userId",
          ftype: (e || (e = r("ThriftTypes"))).I64,
          fid: 1,
        }),
        t.userId != null)
      )
        n.writeI64(r("jsbi").BigInt(t.userId));
      else {
        var o = "0";
        n.writeI64(r("jsbi").BigInt(o));
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function h(t, n) {
      if (
        (n.writeStructBegin("CoplayMatchState"),
        n.writeFieldBegin({
          fname: "matchId",
          ftype: (e || (e = r("ThriftTypes"))).I64,
          fid: 1,
        }),
        t.matchId != null)
      )
        n.writeI64(r("jsbi").BigInt(t.matchId));
      else {
        var a = "0";
        n.writeI64(r("jsbi").BigInt(a));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "appId", ftype: e.I64, fid: 2 }),
        t.appId != null)
      )
        n.writeI64(r("jsbi").BigInt(t.appId));
      else {
        var i = "0";
        n.writeI64(r("jsbi").BigInt(i));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "matchStatus", ftype: e.I32, fid: 3 }),
        t.matchStatus != null)
      ) {
        var l;
        n.writeI32((l = t.matchStatus) != null ? l : 0);
      } else {
        var s = o("CoplayStateCoplayStateTypes").CoplayMatchStatus.cast(0);
        n.writeI32(s != null ? s : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "participants", ftype: e.LIST, fid: 4 }),
        t.participants != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.participants.length,
        });
        for (var u of t.participants) g(u, n);
        n.writeListEnd();
      } else {
        var c = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: c.length,
        });
        for (var d of c) g(d, n);
        n.writeListEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "creatorId", ftype: e.I64, fid: 5 }),
        t.creatorId != null)
      )
        n.writeI64(r("jsbi").BigInt(t.creatorId));
      else {
        var m = "0";
        n.writeI64(r("jsbi").BigInt(m));
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function y(t, n) {
      if (
        (n.writeStructBegin("CoplayOutputState"),
        t.matchState != null &&
          (n.writeFieldBegin({
            fname: "matchState",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          h(t.matchState, n),
          n.writeFieldEnd()),
        t.eligibleParticipants != null)
      ) {
        (n.writeFieldBegin({
          fname: "eligibleParticipants",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 2,
        }),
          n.writeListBegin({
            etype: e.STRING,
            size: t.eligibleParticipants.length,
          }));
        for (var o of t.eligibleParticipants) n.writeString(o);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function C(t, n) {
      if (
        (n.writeStructBegin("CoplayConferenceOutputState"),
        t.matchState != null &&
          (n.writeFieldBegin({
            fname: "matchState",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          h(t.matchState, n),
          n.writeFieldEnd()),
        n.writeFieldBegin({
          fname: "previousMatchIds",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 2,
        }),
        t.previousMatchIds != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).I64,
          size: t.previousMatchIds.length,
        });
        for (var o of t.previousMatchIds) n.writeI64(r("jsbi").BigInt(o));
        n.writeListEnd();
      } else {
        var a = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).I64,
          size: a.length,
        });
        for (var i of a) n.writeI64(r("jsbi").BigInt(i));
        n.writeListEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function b(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.matchId = t.readI64().toString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.event = o(
                  "CoplayStateCoplayStateTypes",
                ).CoplayMatchEvent.cast(t.readI32()))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.isEligible = t.readBool())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.gameId = t.readI64().toString())
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.creatorId = t.readI64().toString())
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.matchStatus = o(
                  "CoplayStateCoplayStateTypes",
                ).CoplayMatchStatus.cast(t.readI32()))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function v(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.matchId = t.readI64().toString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.event = o(
                  "CoplayStateCoplayStateTypes",
                ).CoplayConferenceInputEvent.cast(t.readI32()))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.matchId === void 0 && (n.matchId = "0"),
        n.event === void 0 &&
          (n.event = o(
            "CoplayStateCoplayStateTypes",
          ).CoplayConferenceInputEvent.cast(0)),
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
          case 1:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.userId = t.readI64().toString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.userId === void 0 && (n.userId = "0"), n);
    }
    function R(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.matchId = t.readI64().toString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.appId = t.readI64().toString())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.matchStatus = o(
                  "CoplayStateCoplayStateTypes",
                ).CoplayMatchStatus.cast(t.readI32()))
              : t.skip(i);
            break;
          case 4:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.participants = [];
              for (var s = t.readListBegin(), u = 0; u < s.size; u++) {
                var c = S(t);
                n.participants.push(c);
              }
            } else t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.creatorId = t.readI64().toString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.matchId === void 0 && (n.matchId = "0"),
        n.appId === void 0 && (n.appId = "0"),
        n.matchStatus === void 0 &&
          (n.matchStatus = o(
            "CoplayStateCoplayStateTypes",
          ).CoplayMatchStatus.cast(0)),
        n.participants === void 0 && (n.participants = []),
        n.creatorId === void 0 && (n.creatorId = "0"),
        n
      );
    }
    function L(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.matchState = R(t))
              : t.skip(a);
            break;
          case 2:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.eligibleParticipants = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = t.readString();
                n.eligibleParticipants.push(u);
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
    function E(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.matchState = R(t))
              : t.skip(a);
            break;
          case 2:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.previousMatchIds = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = t.readI64().toString();
                n.previousMatchIds.push(u);
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
        n.previousMatchIds === void 0 && (n.previousMatchIds = []),
        n
      );
    }
    ((l.CoplayMatchInputState$DefaultConstructor = s),
      (l.CoplayConferenceInputState$DefaultConstructor = u),
      (l.CoplayParticipantInfo$DefaultConstructor = c),
      (l.CoplayMatchState$DefaultConstructor = d),
      (l.CoplayOutputState$DefaultConstructor = m),
      (l.CoplayConferenceOutputState$DefaultConstructor = p),
      (l.serializeCoplayMatchInputState = _),
      (l.serializeCoplayConferenceInputState = f),
      (l.serializeCoplayParticipantInfo = g),
      (l.serializeCoplayMatchState = h),
      (l.serializeCoplayOutputState = y),
      (l.serializeCoplayConferenceOutputState = C),
      (l.deserializeCoplayMatchInputState = b),
      (l.deserializeCoplayConferenceInputState = v),
      (l.deserializeCoplayParticipantInfo = S),
      (l.deserializeCoplayMatchState = R),
      (l.deserializeCoplayOutputState = L),
      (l.deserializeCoplayConferenceOutputState = E));
  },
  98,
);
