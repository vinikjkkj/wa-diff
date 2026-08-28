__d(
  "RaisedHandsQueueStateRaisedHandsQueueStateSerializers",
  ["RaisedHandsQueueStateRaisedHandsQueueStateTypes", "ThriftTypes", "jsbi"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return {
        actor_uuid: "",
        request_type: o(
          "RaisedHandsQueueStateRaisedHandsQueueStateTypes",
        ).RaisedHandsQueueParticipantRequestType.cast(0),
      };
    }
    function u() {
      return {
        state: o(
          "RaisedHandsQueueStateRaisedHandsQueueStateTypes",
        ).RaisedHandsQueuerState.cast(0),
        start_time: "0",
        is_new_state: !1,
      };
    }
    function c() {
      return { uid: "", state_info_history: [] };
    }
    function d() {
      return {
        request_type: o(
          "RaisedHandsQueueStateRaisedHandsQueueStateTypes",
        ).RaisedHandsQueueParticipantRequestType.cast(0),
      };
    }
    function m() {
      return { operational_raised_hands_queue: [] };
    }
    function p() {
      return {
        request_type: o(
          "RaisedHandsQueueStateRaisedHandsQueueStateTypes",
        ).RaisedHandsQueueParticipantRequestType.cast(0),
        request_id: "",
      };
    }
    function _() {
      return {
        queue: [],
        is_raise_hand_feature_enabled: !1,
        processed_action_uuids: new Set(),
      };
    }
    function f() {
      return {
        queue: [],
        is_raise_hand_feature_enabled: !1,
        participant_id_to_processed_action_uuids: {},
      };
    }
    function g() {
      return { queue: [], is_raise_hand_feature_enabled: !1 };
    }
    function h(t, n) {
      if (
        (n.writeStructBegin("RaisedHandsActionInfo"),
        n.writeFieldBegin({
          fname: "actor_uuid",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.actor_uuid != null)
      )
        n.writeString(t.actor_uuid);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "request_type", ftype: e.I32, fid: 2 }),
        t.request_type != null)
      ) {
        var i;
        n.writeI32((i = t.request_type) != null ? i : 0);
      } else {
        var l = o(
          "RaisedHandsQueueStateRaisedHandsQueueStateTypes",
        ).RaisedHandsQueueParticipantRequestType.cast(0);
        n.writeI32(l != null ? l : 0);
      }
      if (
        (n.writeFieldEnd(),
        t.action_uuid != null &&
          (n.writeFieldBegin({
            fname: "action_uuid",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.action_uuid),
          n.writeFieldEnd()),
        t.participant_uuids != null)
      ) {
        (n.writeFieldBegin({
          fname: "participant_uuids",
          ftype: (e || (e = r("ThriftTypes"))).SET,
          fid: 4,
        }),
          n.writeSetBegin({ etype: e.STRING, size: t.participant_uuids.size }));
        for (var s of t.participant_uuids) n.writeString(s);
        (n.writeSetEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function y(t, n) {
      if (
        (n.writeStructBegin("RaisedHandsQueuerStateInfo"),
        n.writeFieldBegin({
          fname: "state",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.state != null)
      ) {
        var a;
        n.writeI32((a = t.state) != null ? a : 0);
      } else {
        var i = o(
          "RaisedHandsQueueStateRaisedHandsQueueStateTypes",
        ).RaisedHandsQueuerState.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "start_time", ftype: e.I64, fid: 2 }),
        t.start_time != null)
      )
        n.writeI64(r("jsbi").BigInt(t.start_time));
      else {
        var l = "0";
        n.writeI64(r("jsbi").BigInt(l));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "is_new_state", ftype: e.BOOL, fid: 3 }),
        t.is_new_state != null)
      )
        n.writeBool(t.is_new_state);
      else {
        var s = !1;
        n.writeBool(s);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function C(t, n) {
      if (
        (n.writeStructBegin("RaisedHandsQueuer"),
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
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "state_info_history",
          ftype: e.LIST,
          fid: 3,
        }),
        t.state_info_history != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.state_info_history.length,
        });
        for (var a of t.state_info_history) y(a, n);
        n.writeListEnd();
      } else {
        var i = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: i.length,
        });
        for (var l of i) y(l, n);
        n.writeListEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function b(t, n) {
      if (
        (n.writeStructBegin("RaisedHandsQueueParticipantInputState"),
        n.writeFieldBegin({
          fname: "request_type",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.request_type != null)
      ) {
        var a;
        n.writeI32((a = t.request_type) != null ? a : 0);
      } else {
        var i = o(
          "RaisedHandsQueueStateRaisedHandsQueueStateTypes",
        ).RaisedHandsQueueParticipantRequestType.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      if (
        (n.writeFieldEnd(),
        t.action_uuid != null &&
          (n.writeFieldBegin({
            fname: "action_uuid",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.action_uuid),
          n.writeFieldEnd()),
        t.raise_hands_queue_for_switch != null)
      ) {
        (n.writeFieldBegin({
          fname: "raise_hands_queue_for_switch",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 4,
        }),
          n.writeListBegin({
            etype: e.STRUCT,
            size: t.raise_hands_queue_for_switch.length,
          }));
        for (var l of t.raise_hands_queue_for_switch) C(l, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function v(t, n) {
      if (
        (n.writeStructBegin("E2EERaisedHandsQueueStateCloneRequestParams"),
        n.writeFieldBegin({
          fname: "operational_raised_hands_queue",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
        t.operational_raised_hands_queue != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.operational_raised_hands_queue.length,
        });
        for (var o of t.operational_raised_hands_queue) C(o, n);
        n.writeListEnd();
      } else {
        var a = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: a.length,
        });
        for (var i of a) C(i, n);
        n.writeListEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function S(t, n) {
      if (
        (n.writeStructBegin("E2EERaisedHandsQueueParticipantPayload"),
        n.writeFieldBegin({
          fname: "request_type",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.request_type != null)
      ) {
        var a;
        n.writeI32((a = t.request_type) != null ? a : 0);
      } else {
        var i = o(
          "RaisedHandsQueueStateRaisedHandsQueueStateTypes",
        ).RaisedHandsQueueParticipantRequestType.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "request_id", ftype: e.STRING, fid: 2 }),
        t.request_id != null)
      )
        n.writeString(t.request_id);
      else {
        var l = "";
        n.writeString(l);
      }
      (n.writeFieldEnd(),
        t.state_clone_request_params != null &&
          (n.writeFieldBegin({
            fname: "state_clone_request_params",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 3,
          }),
          v(t.state_clone_request_params, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function R(t, n) {
      if (
        (n.writeStructBegin("RaisedHandsQueueParticipantOutputState"),
        n.writeFieldBegin({
          fname: "queue",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
        t.queue != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.queue.length,
        });
        for (var o of t.queue) C(o, n);
        n.writeListEnd();
      } else {
        var a = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: a.length,
        });
        for (var i of a) C(i, n);
        n.writeListEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "is_raise_hand_feature_enabled",
          ftype: e.BOOL,
          fid: 2,
        }),
        t.is_raise_hand_feature_enabled != null)
      )
        n.writeBool(t.is_raise_hand_feature_enabled);
      else {
        var l = !1;
        n.writeBool(l);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "processed_action_uuids",
          ftype: e.SET,
          fid: 4,
        }),
        t.processed_action_uuids != null)
      ) {
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: t.processed_action_uuids.size,
        });
        for (var s of t.processed_action_uuids) n.writeString(s);
        n.writeSetEnd();
      } else {
        var u = new Set();
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: u.size,
        });
        for (var c of u) n.writeString(c);
        n.writeSetEnd();
      }
      (n.writeFieldEnd(),
        t.use_rtss != null &&
          (n.writeFieldBegin({
            fname: "use_rtss",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 6,
          }),
          n.writeBool(t.use_rtss),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function L(t, n) {
      if (
        (n.writeStructBegin("RaisedHandsQueueConferenceOutputState"),
        n.writeFieldBegin({
          fname: "queue",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
        t.queue != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.queue.length,
        });
        for (var o of t.queue) C(o, n);
        n.writeListEnd();
      } else {
        var a = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: a.length,
        });
        for (var i of a) C(i, n);
        n.writeListEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "is_raise_hand_feature_enabled",
          ftype: e.BOOL,
          fid: 2,
        }),
        t.is_raise_hand_feature_enabled != null)
      )
        n.writeBool(t.is_raise_hand_feature_enabled);
      else {
        var l = !1;
        n.writeBool(l);
      }
      if (
        (n.writeFieldEnd(),
        t.moderator_uids_if_empty_means_everyone_is_moderator != null)
      ) {
        (n.writeFieldBegin({
          fname: "moderator_uids_if_empty_means_everyone_is_moderator",
          ftype: (e || (e = r("ThriftTypes"))).SET,
          fid: 4,
        }),
          n.writeSetBegin({
            etype: e.STRING,
            size: t.moderator_uids_if_empty_means_everyone_is_moderator.size,
          }));
        for (var s of t.moderator_uids_if_empty_means_everyone_is_moderator)
          n.writeString(s);
        (n.writeSetEnd(), n.writeFieldEnd());
      }
      if (t.call_type != null) {
        var u;
        (n.writeFieldBegin({
          fname: "call_type",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 5,
        }),
          n.writeI32((u = t.call_type) != null ? u : 0),
          n.writeFieldEnd());
      }
      if (
        (n.writeFieldBegin({
          fname: "participant_id_to_processed_action_uuids",
          ftype: e.MAP,
          fid: 6,
        }),
        t.participant_id_to_processed_action_uuids != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.SET,
          size: Object.keys(t.participant_id_to_processed_action_uuids).length,
        });
        for (var c of Object.entries(
          t.participant_id_to_processed_action_uuids,
        )) {
          var d = c[0],
            m = c[1];
          (n.writeString(d),
            n.writeSetBegin({
              etype: (e || (e = r("ThriftTypes"))).STRING,
              size: m.size,
            }));
          for (var p of m) n.writeString(p);
          n.writeSetEnd();
        }
        n.writeMapEnd();
      } else {
        var _ = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.SET,
          size: Object.keys(_).length,
        });
        for (var f of Object.entries(_)) {
          var g = f[0],
            h = f[1];
          (n.writeString(g),
            n.writeSetBegin({
              etype: (e || (e = r("ThriftTypes"))).STRING,
              size: h.size,
            }));
          for (var y of h) n.writeString(y);
          n.writeSetEnd();
        }
        n.writeMapEnd();
      }
      (n.writeFieldEnd(),
        t.use_rtss != null &&
          (n.writeFieldBegin({
            fname: "use_rtss",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 7,
          }),
          n.writeBool(t.use_rtss),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function E(t, n) {
      if (
        (n.writeStructBegin("RaisedHandsQueueExtensionOutputState"),
        n.writeFieldBegin({
          fname: "queue",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
        t.queue != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.queue.length,
        });
        for (var o of t.queue) C(o, n);
        n.writeListEnd();
      } else {
        var a = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: a.length,
        });
        for (var i of a) C(i, n);
        n.writeListEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "is_raise_hand_feature_enabled",
          ftype: e.BOOL,
          fid: 2,
        }),
        t.is_raise_hand_feature_enabled != null)
      )
        n.writeBool(t.is_raise_hand_feature_enabled);
      else {
        var l = !1;
        n.writeBool(l);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function k(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.actor_uuid = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.request_type = o(
                  "RaisedHandsQueueStateRaisedHandsQueueStateTypes",
                ).RaisedHandsQueueParticipantRequestType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.action_uuid = t.readString())
              : t.skip(i);
            break;
          case 4:
            if (i === (e || (e = r("ThriftTypes"))).SET) {
              n.participant_uuids = new Set();
              for (var s = t.readSetBegin(), u = 0; u < s.size; u++) {
                var c = t.readString();
                n.participant_uuids.add(c);
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
        n.actor_uuid === void 0 && (n.actor_uuid = ""),
        n.request_type === void 0 &&
          (n.request_type = o(
            "RaisedHandsQueueStateRaisedHandsQueueStateTypes",
          ).RaisedHandsQueueParticipantRequestType.cast(0)),
        n
      );
    }
    function I(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.state = o(
                  "RaisedHandsQueueStateRaisedHandsQueueStateTypes",
                ).RaisedHandsQueuerState.cast(t.readI32()))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.start_time = t.readI64().toString())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.is_new_state = t.readBool())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.state === void 0 &&
          (n.state = o(
            "RaisedHandsQueueStateRaisedHandsQueueStateTypes",
          ).RaisedHandsQueuerState.cast(0)),
        n.start_time === void 0 && (n.start_time = "0"),
        n.is_new_state === void 0 && (n.is_new_state = !1),
        n
      );
    }
    function T(t) {
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
          case 3:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.state_info_history = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = I(t);
                n.state_info_history.push(u);
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
        n.uid === void 0 && (n.uid = ""),
        n.state_info_history === void 0 && (n.state_info_history = []),
        n
      );
    }
    function D(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.request_type = o(
                  "RaisedHandsQueueStateRaisedHandsQueueStateTypes",
                ).RaisedHandsQueueParticipantRequestType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.action_uuid = t.readString())
              : t.skip(i);
            break;
          case 4:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.raise_hands_queue_for_switch = [];
              for (var s = t.readListBegin(), u = 0; u < s.size; u++) {
                var c = T(t);
                n.raise_hands_queue_for_switch.push(c);
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
        n.request_type === void 0 &&
          (n.request_type = o(
            "RaisedHandsQueueStateRaisedHandsQueueStateTypes",
          ).RaisedHandsQueueParticipantRequestType.cast(0)),
        n
      );
    }
    function x(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.operational_raised_hands_queue = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = T(t);
                n.operational_raised_hands_queue.push(u);
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
        n.operational_raised_hands_queue === void 0 &&
          (n.operational_raised_hands_queue = []),
        n
      );
    }
    function $(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.request_type = o(
                  "RaisedHandsQueueStateRaisedHandsQueueStateTypes",
                ).RaisedHandsQueueParticipantRequestType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.request_id = t.readString())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.state_clone_request_params = x(t))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.request_type === void 0 &&
          (n.request_type = o(
            "RaisedHandsQueueStateRaisedHandsQueueStateTypes",
          ).RaisedHandsQueueParticipantRequestType.cast(0)),
        n.request_id === void 0 && (n.request_id = ""),
        n
      );
    }
    function P(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.queue = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = T(t);
                n.queue.push(u);
              }
            } else t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.is_raise_hand_feature_enabled = t.readBool())
              : t.skip(a);
            break;
          case 4:
            if (a === (e || (e = r("ThriftTypes"))).SET) {
              n.processed_action_uuids = new Set();
              for (var c = t.readSetBegin(), d = 0; d < c.size; d++) {
                var m = t.readString();
                n.processed_action_uuids.add(m);
              }
            } else t.skip(a);
            break;
          case 6:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.use_rtss = t.readBool())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.queue === void 0 && (n.queue = []),
        n.is_raise_hand_feature_enabled === void 0 &&
          (n.is_raise_hand_feature_enabled = !1),
        n.processed_action_uuids === void 0 &&
          (n.processed_action_uuids = new Set()),
        n
      );
    }
    function N(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.queue = [];
              for (var s = t.readListBegin(), u = 0; u < s.size; u++) {
                var c = T(t);
                n.queue.push(c);
              }
            } else t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.is_raise_hand_feature_enabled = t.readBool())
              : t.skip(i);
            break;
          case 4:
            if (i === (e || (e = r("ThriftTypes"))).SET) {
              n.moderator_uids_if_empty_means_everyone_is_moderator = new Set();
              for (var d = t.readSetBegin(), m = 0; m < d.size; m++) {
                var p = t.readString();
                n.moderator_uids_if_empty_means_everyone_is_moderator.add(p);
              }
            } else t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.call_type = o(
                  "RaisedHandsQueueStateRaisedHandsQueueStateTypes",
                ).CallType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 6:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.participant_id_to_processed_action_uuids = {};
              for (var _ = t.readMapBegin(), f = 0; f < _.size; f++) {
                for (
                  var g = t.readString(),
                    h = new Set(),
                    y = t.readSetBegin(),
                    C = 0;
                  C < y.size;
                  C++
                ) {
                  var b = t.readString();
                  h.add(b);
                }
                n.participant_id_to_processed_action_uuids[g] = h;
              }
            } else t.skip(i);
            break;
          case 7:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.use_rtss = t.readBool())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.queue === void 0 && (n.queue = []),
        n.is_raise_hand_feature_enabled === void 0 &&
          (n.is_raise_hand_feature_enabled = !1),
        n.participant_id_to_processed_action_uuids === void 0 &&
          (n.participant_id_to_processed_action_uuids = {}),
        n
      );
    }
    function M(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.queue = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = T(t);
                n.queue.push(u);
              }
            } else t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.is_raise_hand_feature_enabled = t.readBool())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.queue === void 0 && (n.queue = []),
        n.is_raise_hand_feature_enabled === void 0 &&
          (n.is_raise_hand_feature_enabled = !1),
        n
      );
    }
    ((l.RaisedHandsActionInfo$DefaultConstructor = s),
      (l.RaisedHandsQueuerStateInfo$DefaultConstructor = u),
      (l.RaisedHandsQueuer$DefaultConstructor = c),
      (l.RaisedHandsQueueParticipantInputState$DefaultConstructor = d),
      (l.E2EERaisedHandsQueueStateCloneRequestParams$DefaultConstructor = m),
      (l.E2EERaisedHandsQueueParticipantPayload$DefaultConstructor = p),
      (l.RaisedHandsQueueParticipantOutputState$DefaultConstructor = _),
      (l.RaisedHandsQueueConferenceOutputState$DefaultConstructor = f),
      (l.RaisedHandsQueueExtensionOutputState$DefaultConstructor = g),
      (l.serializeRaisedHandsActionInfo = h),
      (l.serializeRaisedHandsQueuerStateInfo = y),
      (l.serializeRaisedHandsQueuer = C),
      (l.serializeRaisedHandsQueueParticipantInputState = b),
      (l.serializeE2EERaisedHandsQueueStateCloneRequestParams = v),
      (l.serializeE2EERaisedHandsQueueParticipantPayload = S),
      (l.serializeRaisedHandsQueueParticipantOutputState = R),
      (l.serializeRaisedHandsQueueConferenceOutputState = L),
      (l.serializeRaisedHandsQueueExtensionOutputState = E),
      (l.deserializeRaisedHandsActionInfo = k),
      (l.deserializeRaisedHandsQueuerStateInfo = I),
      (l.deserializeRaisedHandsQueuer = T),
      (l.deserializeRaisedHandsQueueParticipantInputState = D),
      (l.deserializeE2EERaisedHandsQueueStateCloneRequestParams = x),
      (l.deserializeE2EERaisedHandsQueueParticipantPayload = $),
      (l.deserializeRaisedHandsQueueParticipantOutputState = P),
      (l.deserializeRaisedHandsQueueConferenceOutputState = N),
      (l.deserializeRaisedHandsQueueExtensionOutputState = M));
  },
  98,
);
