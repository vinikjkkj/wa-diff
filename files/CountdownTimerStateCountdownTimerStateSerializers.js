__d(
  "CountdownTimerStateCountdownTimerStateSerializers",
  ["CountdownTimerStateCountdownTimerStateTypes", "ThriftTypes", "jsbi"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return {
        uuid: "",
        last_action_timestamp: "0",
        total_duration: "0",
        initiator: u(),
        status: o(
          "CountdownTimerStateCountdownTimerStateTypes",
        ).CountdownTimerStatus.cast(0),
        remaining_duration: "0",
      };
    }
    function u() {
      return { uid: "" };
    }
    function c() {
      return {
        uuid: "",
        total_duration: "0",
        initiator: u(),
        action: o(
          "CountdownTimerStateCountdownTimerStateTypes",
        ).CountdownTimerActionEvent.cast(0),
        action_timestamp: "0",
        remaining_duration: "0",
      };
    }
    function d() {
      return {
        timer: s(),
        is_countdown_timer_feature_enabled: !1,
        participant_action_capabilities: new Set(),
      };
    }
    function m() {
      return { current_timer: s() };
    }
    function p() {
      return { current_timer: s(), is_countdown_timer_feature_enabled: !1 };
    }
    function _(t, n) {
      if (
        (n.writeStructBegin("CountdownTimer"),
        n.writeFieldBegin({
          fname: "uuid",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.uuid != null)
      )
        n.writeString(t.uuid);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "last_action_timestamp",
          ftype: e.I64,
          fid: 2,
        }),
        t.last_action_timestamp != null)
      )
        n.writeI64(r("jsbi").BigInt(t.last_action_timestamp));
      else {
        var i = "0";
        n.writeI64(r("jsbi").BigInt(i));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "total_duration", ftype: e.I64, fid: 3 }),
        t.total_duration != null)
      )
        n.writeI64(r("jsbi").BigInt(t.total_duration));
      else {
        var l = "0";
        n.writeI64(r("jsbi").BigInt(l));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "initiator", ftype: e.STRUCT, fid: 4 }),
        t.initiator != null)
      )
        f(t.initiator, n);
      else {
        var s = u();
        f(s, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "status", ftype: e.I32, fid: 5 }),
        t.status != null)
      ) {
        var c;
        n.writeI32((c = t.status) != null ? c : 0);
      } else {
        var d = o(
          "CountdownTimerStateCountdownTimerStateTypes",
        ).CountdownTimerStatus.cast(0);
        n.writeI32(d != null ? d : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "remaining_duration",
          ftype: e.I64,
          fid: 6,
        }),
        t.remaining_duration != null)
      )
        n.writeI64(r("jsbi").BigInt(t.remaining_duration));
      else {
        var m = "0";
        n.writeI64(r("jsbi").BigInt(m));
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function f(t, n) {
      if (
        (n.writeStructBegin("InitiatorInfo"),
        n.writeFieldBegin({
          fname: "uid",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.uid != null)
      )
        n.writeString(t.uid);
      else {
        var o = "";
        n.writeString(o);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function g(t, n) {
      if (
        (n.writeStructBegin("CountdownTimerInputState"),
        n.writeFieldBegin({
          fname: "uuid",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.uuid != null)
      )
        n.writeString(t.uuid);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "total_duration", ftype: e.I64, fid: 2 }),
        t.total_duration != null)
      )
        n.writeI64(r("jsbi").BigInt(t.total_duration));
      else {
        var i = "0";
        n.writeI64(r("jsbi").BigInt(i));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "initiator", ftype: e.STRUCT, fid: 3 }),
        t.initiator != null)
      )
        f(t.initiator, n);
      else {
        var l = u();
        f(l, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "action", ftype: e.I32, fid: 4 }),
        t.action != null)
      ) {
        var s;
        n.writeI32((s = t.action) != null ? s : 0);
      } else {
        var c = o(
          "CountdownTimerStateCountdownTimerStateTypes",
        ).CountdownTimerActionEvent.cast(0);
        n.writeI32(c != null ? c : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "action_timestamp", ftype: e.I64, fid: 5 }),
        t.action_timestamp != null)
      )
        n.writeI64(r("jsbi").BigInt(t.action_timestamp));
      else {
        var d = "0";
        n.writeI64(r("jsbi").BigInt(d));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "remaining_duration",
          ftype: e.I64,
          fid: 6,
        }),
        t.remaining_duration != null)
      )
        n.writeI64(r("jsbi").BigInt(t.remaining_duration));
      else {
        var m = "0";
        n.writeI64(r("jsbi").BigInt(m));
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function h(t, n) {
      if (
        (n.writeStructBegin("CountdownTimerOutputState"),
        n.writeFieldBegin({
          fname: "timer",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 1,
        }),
        t.timer != null)
      )
        _(t.timer, n);
      else {
        var o = s();
        _(o, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "is_countdown_timer_feature_enabled",
          ftype: e.BOOL,
          fid: 2,
        }),
        t.is_countdown_timer_feature_enabled != null)
      )
        n.writeBool(t.is_countdown_timer_feature_enabled);
      else {
        var a = !1;
        n.writeBool(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "participant_action_capabilities",
          ftype: e.SET,
          fid: 3,
        }),
        t.participant_action_capabilities != null)
      ) {
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).I32,
          size: t.participant_action_capabilities.size,
        });
        for (var i of t.participant_action_capabilities)
          n.writeI32(i != null ? i : 0);
        n.writeSetEnd();
      } else {
        var l = new Set();
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).I32,
          size: l.size,
        });
        for (var u of l) n.writeI32(u != null ? u : 0);
        n.writeSetEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function y(t, n) {
      if (
        (n.writeStructBegin("E2EECountdownTimerParticipantPayload"),
        n.writeFieldBegin({
          fname: "current_timer",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 1,
        }),
        t.current_timer != null)
      )
        _(t.current_timer, n);
      else {
        var o = s();
        _(o, n);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function C(t, n) {
      if (
        (n.writeStructBegin("CountdownTimerConferenceOutputState"),
        n.writeFieldBegin({
          fname: "current_timer",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 1,
        }),
        t.current_timer != null)
      )
        _(t.current_timer, n);
      else {
        var o = s();
        _(o, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "is_countdown_timer_feature_enabled",
          ftype: e.BOOL,
          fid: 2,
        }),
        t.is_countdown_timer_feature_enabled != null)
      )
        n.writeBool(t.is_countdown_timer_feature_enabled);
      else {
        var a = !1;
        n.writeBool(a);
      }
      if (
        (n.writeFieldEnd(),
        t.moderator_uids_if_empty_means_everyone_is_moderator != null)
      ) {
        (n.writeFieldBegin({
          fname: "moderator_uids_if_empty_means_everyone_is_moderator",
          ftype: (e || (e = r("ThriftTypes"))).SET,
          fid: 3,
        }),
          n.writeSetBegin({
            etype: e.STRING,
            size: t.moderator_uids_if_empty_means_everyone_is_moderator.size,
          }));
        for (var i of t.moderator_uids_if_empty_means_everyone_is_moderator)
          n.writeString(i);
        (n.writeSetEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
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
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.uuid = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.last_action_timestamp = t.readI64().toString())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.total_duration = t.readI64().toString())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.initiator = v(t))
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.status = o(
                  "CountdownTimerStateCountdownTimerStateTypes",
                ).CountdownTimerStatus.cast(t.readI32()))
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.remaining_duration = t.readI64().toString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.uuid === void 0 && (n.uuid = ""),
        n.last_action_timestamp === void 0 && (n.last_action_timestamp = "0"),
        n.total_duration === void 0 && (n.total_duration = "0"),
        n.initiator === void 0 && (n.initiator = u()),
        n.status === void 0 &&
          (n.status = o(
            "CountdownTimerStateCountdownTimerStateTypes",
          ).CountdownTimerStatus.cast(0)),
        n.remaining_duration === void 0 && (n.remaining_duration = "0"),
        n
      );
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
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.uid = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.uid === void 0 && (n.uid = ""), n);
    }
    function S(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.uuid = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.total_duration = t.readI64().toString())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.initiator = v(t))
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.action = o(
                  "CountdownTimerStateCountdownTimerStateTypes",
                ).CountdownTimerActionEvent.cast(t.readI32()))
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.action_timestamp = t.readI64().toString())
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.remaining_duration = t.readI64().toString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.uuid === void 0 && (n.uuid = ""),
        n.total_duration === void 0 && (n.total_duration = "0"),
        n.initiator === void 0 && (n.initiator = u()),
        n.action === void 0 &&
          (n.action = o(
            "CountdownTimerStateCountdownTimerStateTypes",
          ).CountdownTimerActionEvent.cast(0)),
        n.action_timestamp === void 0 && (n.action_timestamp = "0"),
        n.remaining_duration === void 0 && (n.remaining_duration = "0"),
        n
      );
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
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.timer = b(t))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.is_countdown_timer_feature_enabled = t.readBool())
              : t.skip(i);
            break;
          case 3:
            if (i === (e || (e = r("ThriftTypes"))).SET) {
              n.participant_action_capabilities = new Set();
              for (var u = t.readSetBegin(), c = 0; c < u.size; c++) {
                var d = o(
                  "CountdownTimerStateCountdownTimerStateTypes",
                ).CountdownTimerActionEvent.cast(t.readI32());
                n.participant_action_capabilities.add(d);
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
        n.timer === void 0 && (n.timer = s()),
        n.is_countdown_timer_feature_enabled === void 0 &&
          (n.is_countdown_timer_feature_enabled = !1),
        n.participant_action_capabilities === void 0 &&
          (n.participant_action_capabilities = new Set()),
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
              ? (n.current_timer = b(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.current_timer === void 0 && (n.current_timer = s()),
        n
      );
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
              ? (n.current_timer = b(t))
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.is_countdown_timer_feature_enabled = t.readBool())
              : t.skip(a);
            break;
          case 3:
            if (a === (e || (e = r("ThriftTypes"))).SET) {
              n.moderator_uids_if_empty_means_everyone_is_moderator = new Set();
              for (var l = t.readSetBegin(), u = 0; u < l.size; u++) {
                var c = t.readString();
                n.moderator_uids_if_empty_means_everyone_is_moderator.add(c);
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
        n.current_timer === void 0 && (n.current_timer = s()),
        n.is_countdown_timer_feature_enabled === void 0 &&
          (n.is_countdown_timer_feature_enabled = !1),
        n
      );
    }
    ((l.CountdownTimer$DefaultConstructor = s),
      (l.InitiatorInfo$DefaultConstructor = u),
      (l.CountdownTimerInputState$DefaultConstructor = c),
      (l.CountdownTimerOutputState$DefaultConstructor = d),
      (l.E2EECountdownTimerParticipantPayload$DefaultConstructor = m),
      (l.CountdownTimerConferenceOutputState$DefaultConstructor = p),
      (l.serializeCountdownTimer = _),
      (l.serializeInitiatorInfo = f),
      (l.serializeCountdownTimerInputState = g),
      (l.serializeCountdownTimerOutputState = h),
      (l.serializeE2EECountdownTimerParticipantPayload = y),
      (l.serializeCountdownTimerConferenceOutputState = C),
      (l.deserializeCountdownTimer = b),
      (l.deserializeInitiatorInfo = v),
      (l.deserializeCountdownTimerInputState = S),
      (l.deserializeCountdownTimerOutputState = R),
      (l.deserializeE2EECountdownTimerParticipantPayload = L),
      (l.deserializeCountdownTimerConferenceOutputState = E));
  },
  98,
);
