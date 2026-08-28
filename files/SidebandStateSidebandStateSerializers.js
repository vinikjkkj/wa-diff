__d(
  "SidebandStateSidebandStateSerializers",
  ["SidebandStateSidebandStateTypes", "ThriftTypes", "jsbi"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return { sender: "", recipient: "" };
    }
    function u() {
      return { id: "", participant_ids: [] };
    }
    function c() {
      return {
        id: "",
        availability: o(
          "SidebandStateSidebandStateTypes",
        ).SidebandUserAvailability.cast(0),
      };
    }
    function d() {
      return {
        sideband_type: o(
          "SidebandStateSidebandStateTypes",
        ).SidebandActionType.cast(0),
      };
    }
    function m() {
      return { sideband_active_conversations: [], waves: [], users_info: [] };
    }
    function p() {
      return { sideband_active_conversations: [], waves: [], users_info: [] };
    }
    function _(t, n) {
      if (
        (n.writeStructBegin("ActiveConversationWave"),
        n.writeFieldBegin({
          fname: "sender",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.sender != null)
      )
        n.writeString(t.sender);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "recipient", ftype: e.STRING, fid: 2 }),
        t.recipient != null)
      )
        n.writeString(t.recipient);
      else {
        var a = "";
        n.writeString(a);
      }
      if ((n.writeFieldEnd(), t.sender_message != null)) {
        var i;
        (n.writeFieldBegin({
          fname: "sender_message",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 3,
        }),
          n.writeI32((i = t.sender_message) != null ? i : 0),
          n.writeFieldEnd());
      }
      if (t.responder_message != null) {
        var l;
        (n.writeFieldBegin({
          fname: "responder_message",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 4,
        }),
          n.writeI32((l = t.responder_message) != null ? l : 0),
          n.writeFieldEnd());
      }
      if (t.status != null) {
        var s;
        (n.writeFieldBegin({
          fname: "status",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 5,
        }),
          n.writeI32((s = t.status) != null ? s : 0),
          n.writeFieldEnd());
      }
      (t.expiration_timestamp_seconds != null &&
        (n.writeFieldBegin({
          fname: "expiration_timestamp_seconds",
          ftype: (e || (e = r("ThriftTypes"))).I64,
          fid: 6,
        }),
        n.writeI64(r("jsbi").BigInt(t.expiration_timestamp_seconds)),
        n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function f(t, n) {
      if (
        (n.writeStructBegin("ActiveConversation"),
        n.writeFieldBegin({
          fname: "id",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.id != null)
      )
        n.writeString(t.id);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "participant_ids", ftype: e.LIST, fid: 2 }),
        t.participant_ids != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: t.participant_ids.length,
        });
        for (var a of t.participant_ids) n.writeString(a);
        n.writeListEnd();
      } else {
        var i = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: i.length,
        });
        for (var l of i) n.writeString(l);
        n.writeListEnd();
      }
      (n.writeFieldEnd(),
        t.conversation_context != null &&
          (n.writeFieldBegin({
            fname: "conversation_context",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.conversation_context),
          n.writeFieldEnd()),
        t.call_conference_name != null &&
          (n.writeFieldBegin({
            fname: "call_conference_name",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.call_conference_name),
          n.writeFieldEnd()),
        t.call_url != null &&
          (n.writeFieldBegin({
            fname: "call_url",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 5,
          }),
          n.writeString(t.call_url),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function g(t, n) {
      if (
        (n.writeStructBegin("SidebandUserInfo"),
        n.writeFieldBegin({
          fname: "id",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.id != null)
      )
        n.writeString(t.id);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "availability", ftype: e.I32, fid: 2 }),
        t.availability != null)
      ) {
        var i;
        n.writeI32((i = t.availability) != null ? i : 0);
      } else {
        var l = o(
          "SidebandStateSidebandStateTypes",
        ).SidebandUserAvailability.cast(0);
        n.writeI32(l != null ? l : 0);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function h(t, n) {
      if (
        (n.writeStructBegin("SidebandInputState"),
        n.writeFieldBegin({
          fname: "sideband_type",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.sideband_type != null)
      ) {
        var a;
        n.writeI32((a = t.sideband_type) != null ? a : 0);
      } else {
        var i = o("SidebandStateSidebandStateTypes").SidebandActionType.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      if ((n.writeFieldEnd(), t.participant_ids != null)) {
        (n.writeFieldBegin({
          fname: "participant_ids",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 2,
        }),
          n.writeListBegin({
            etype: e.STRING,
            size: t.participant_ids.length,
          }));
        for (var l of t.participant_ids) n.writeString(l);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (
        (t.wave != null &&
          (n.writeFieldBegin({
            fname: "wave",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 3,
          }),
          _(t.wave, n),
          n.writeFieldEnd()),
        t.availability != null)
      ) {
        var s;
        (n.writeFieldBegin({
          fname: "availability",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 4,
        }),
          n.writeI32((s = t.availability) != null ? s : 0),
          n.writeFieldEnd());
      }
      (t.active_conversation_id != null &&
        (n.writeFieldBegin({
          fname: "active_conversation_id",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 5,
        }),
        n.writeString(t.active_conversation_id),
        n.writeFieldEnd()),
        t.conversation_context != null &&
          (n.writeFieldBegin({
            fname: "conversation_context",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 6,
          }),
          n.writeString(t.conversation_context),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function y(t, n) {
      if (
        (n.writeStructBegin("SidebandOutputState"),
        n.writeFieldBegin({
          fname: "sideband_active_conversations",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
        t.sideband_active_conversations != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.sideband_active_conversations.length,
        });
        for (var o of t.sideband_active_conversations) f(o, n);
        n.writeListEnd();
      } else {
        var a = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: a.length,
        });
        for (var i of a) f(i, n);
        n.writeListEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "waves", ftype: e.LIST, fid: 2 }),
        t.waves != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.waves.length,
        });
        for (var l of t.waves) _(l, n);
        n.writeListEnd();
      } else {
        var s = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: s.length,
        });
        for (var u of s) _(u, n);
        n.writeListEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "users_info", ftype: e.LIST, fid: 3 }),
        t.users_info != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.users_info.length,
        });
        for (var c of t.users_info) g(c, n);
        n.writeListEnd();
      } else {
        var d = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: d.length,
        });
        for (var m of d) g(m, n);
        n.writeListEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function C(t, n) {
      if (
        (n.writeStructBegin("SidebandConferenceOutputState"),
        n.writeFieldBegin({
          fname: "sideband_active_conversations",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
        t.sideband_active_conversations != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.sideband_active_conversations.length,
        });
        for (var o of t.sideband_active_conversations) f(o, n);
        n.writeListEnd();
      } else {
        var a = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: a.length,
        });
        for (var i of a) f(i, n);
        n.writeListEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "waves", ftype: e.LIST, fid: 2 }),
        t.waves != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.waves.length,
        });
        for (var l of t.waves) _(l, n);
        n.writeListEnd();
      } else {
        var s = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: s.length,
        });
        for (var u of s) _(u, n);
        n.writeListEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "users_info", ftype: e.LIST, fid: 3 }),
        t.users_info != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.users_info.length,
        });
        for (var c of t.users_info) g(c, n);
        n.writeListEnd();
      } else {
        var d = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: d.length,
        });
        for (var m of d) g(m, n);
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
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.sender = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.recipient = t.readString())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.sender_message = o(
                  "SidebandStateSidebandStateTypes",
                ).SidebandWaveSenderMessage.cast(t.readI32()))
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.responder_message = o(
                  "SidebandStateSidebandStateTypes",
                ).SidebandWaveResponderMessage.cast(t.readI32()))
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.status = o(
                  "SidebandStateSidebandStateTypes",
                ).SidebandWaveStatus.cast(t.readI32()))
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.expiration_timestamp_seconds = t.readI64().toString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.sender === void 0 && (n.sender = ""),
        n.recipient === void 0 && (n.recipient = ""),
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
              ? (n.id = t.readString())
              : t.skip(a);
            break;
          case 2:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.participant_ids = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = t.readString();
                n.participant_ids.push(u);
              }
            } else t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.conversation_context = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.call_conference_name = t.readString())
              : t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.call_url = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.id === void 0 && (n.id = ""),
        n.participant_ids === void 0 && (n.participant_ids = []),
        n
      );
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
              ? (n.id = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.availability = o(
                  "SidebandStateSidebandStateTypes",
                ).SidebandUserAvailability.cast(t.readI32()))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.id === void 0 && (n.id = ""),
        n.availability === void 0 &&
          (n.availability = o(
            "SidebandStateSidebandStateTypes",
          ).SidebandUserAvailability.cast(0)),
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
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.sideband_type = o(
                  "SidebandStateSidebandStateTypes",
                ).SidebandActionType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 2:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.participant_ids = [];
              for (var s = t.readListBegin(), u = 0; u < s.size; u++) {
                var c = t.readString();
                n.participant_ids.push(c);
              }
            } else t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.wave = b(t))
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.availability = o(
                  "SidebandStateSidebandStateTypes",
                ).SidebandUserAvailability.cast(t.readI32()))
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.active_conversation_id = t.readString())
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.conversation_context = t.readString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.sideband_type === void 0 &&
          (n.sideband_type = o(
            "SidebandStateSidebandStateTypes",
          ).SidebandActionType.cast(0)),
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
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.sideband_active_conversations = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = v(t);
                n.sideband_active_conversations.push(u);
              }
            } else t.skip(a);
            break;
          case 2:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.waves = [];
              for (var c = t.readListBegin(), d = 0; d < c.size; d++) {
                var m = b(t);
                n.waves.push(m);
              }
            } else t.skip(a);
            break;
          case 3:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.users_info = [];
              for (var p = t.readListBegin(), _ = 0; _ < p.size; _++) {
                var f = S(t);
                n.users_info.push(f);
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
        n.sideband_active_conversations === void 0 &&
          (n.sideband_active_conversations = []),
        n.waves === void 0 && (n.waves = []),
        n.users_info === void 0 && (n.users_info = []),
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
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.sideband_active_conversations = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = v(t);
                n.sideband_active_conversations.push(u);
              }
            } else t.skip(a);
            break;
          case 2:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.waves = [];
              for (var c = t.readListBegin(), d = 0; d < c.size; d++) {
                var m = b(t);
                n.waves.push(m);
              }
            } else t.skip(a);
            break;
          case 3:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.users_info = [];
              for (var p = t.readListBegin(), _ = 0; _ < p.size; _++) {
                var f = S(t);
                n.users_info.push(f);
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
        n.sideband_active_conversations === void 0 &&
          (n.sideband_active_conversations = []),
        n.waves === void 0 && (n.waves = []),
        n.users_info === void 0 && (n.users_info = []),
        n
      );
    }
    ((l.ActiveConversationWave$DefaultConstructor = s),
      (l.ActiveConversation$DefaultConstructor = u),
      (l.SidebandUserInfo$DefaultConstructor = c),
      (l.SidebandInputState$DefaultConstructor = d),
      (l.SidebandOutputState$DefaultConstructor = m),
      (l.SidebandConferenceOutputState$DefaultConstructor = p),
      (l.serializeActiveConversationWave = _),
      (l.serializeActiveConversation = f),
      (l.serializeSidebandUserInfo = g),
      (l.serializeSidebandInputState = h),
      (l.serializeSidebandOutputState = y),
      (l.serializeSidebandConferenceOutputState = C),
      (l.deserializeActiveConversationWave = b),
      (l.deserializeActiveConversation = v),
      (l.deserializeSidebandUserInfo = S),
      (l.deserializeSidebandInputState = R),
      (l.deserializeSidebandOutputState = L),
      (l.deserializeSidebandConferenceOutputState = E));
  },
  98,
);
