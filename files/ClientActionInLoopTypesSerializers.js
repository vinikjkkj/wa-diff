__d(
  "ClientActionInLoopTypesSerializers",
  ["ClientActionInLoopTypesTypes", "ThriftTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return {
        instruction_type: o(
          "ClientActionInLoopTypesTypes",
        ).ClientInstructionType.cast(0),
      };
    }
    function u() {
      return {
        instruction_type: o(
          "ClientActionInLoopTypesTypes",
        ).ClientInstructionType.cast(0),
      };
    }
    function c() {
      return {};
    }
    function d() {
      return {
        threadName: "",
        senderName: "",
        messageText: "",
        timestampMs: "0",
      };
    }
    function m() {
      return {};
    }
    function p() {
      return {};
    }
    function _(t, n) {
      if (
        (n.writeStructBegin("ClientInstruction"),
        n.writeFieldBegin({
          fname: "instruction_type",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.instruction_type != null)
      ) {
        var a;
        n.writeI32((a = t.instruction_type) != null ? a : 0);
      } else {
        var i = o("ClientActionInLoopTypesTypes").ClientInstructionType.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      (n.writeFieldEnd(),
        t.request_id != null &&
          (n.writeFieldBegin({
            fname: "request_id",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.request_id),
          n.writeFieldEnd()),
        t.turn_id != null &&
          (n.writeFieldBegin({
            fname: "turn_id",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.turn_id),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function f(t, n) {
      if (
        (n.writeStructBegin("ClientInstructionResponse"),
        n.writeFieldBegin({
          fname: "instruction_type",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.instruction_type != null)
      ) {
        var a;
        n.writeI32((a = t.instruction_type) != null ? a : 0);
      } else {
        var i = o("ClientActionInLoopTypesTypes").ClientInstructionType.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      (n.writeFieldEnd(),
        t.unread_messages != null &&
          (n.writeFieldBegin({
            fname: "unread_messages",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 2,
          }),
          g(t.unread_messages, n),
          n.writeFieldEnd()),
        t.request_id != null &&
          (n.writeFieldBegin({
            fname: "request_id",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.request_id),
          n.writeFieldEnd()),
        t.turn_id != null &&
          (n.writeFieldBegin({
            fname: "turn_id",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.turn_id),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function g(t, n) {
      if ((n.writeStructBegin("UnreadMessages"), t.messages != null)) {
        (n.writeFieldBegin({
          fname: "messages",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
          n.writeListBegin({ etype: e.STRUCT, size: t.messages.length }));
        for (var o of t.messages) h(o, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function h(t, n) {
      if (
        (n.writeStructBegin("Message"),
        n.writeFieldBegin({
          fname: "threadName",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.threadName != null)
      )
        n.writeString(t.threadName);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "senderName", ftype: e.STRING, fid: 2 }),
        t.senderName != null)
      )
        n.writeString(t.senderName);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "messageText", ftype: e.STRING, fid: 3 }),
        t.messageText != null)
      )
        n.writeString(t.messageText);
      else {
        var i = "";
        n.writeString(i);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "timestampMs", ftype: e.I64, fid: 4 }),
        t.timestampMs != null)
      )
        n.writeI64(BigInt(t.timestampMs));
      else {
        var l = "0";
        n.writeI64(BigInt(l));
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function y(t, n) {
      (n.writeStructBegin("ToolResponseContent"),
        t.tool_name != null &&
          (n.writeFieldBegin({
            fname: "tool_name",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.tool_name),
          n.writeFieldEnd()),
        t.tool_response != null &&
          (n.writeFieldBegin({
            fname: "tool_response",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.tool_response),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function C(t, n) {
      (n.writeStructBegin("AgentStep"),
        t.tool_response_content != null &&
          (n.writeFieldBegin({
            fname: "tool_response_content",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          y(t.tool_response_content, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
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
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.instruction_type = o(
                  "ClientActionInLoopTypesTypes",
                ).ClientInstructionType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.request_id = t.readString())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.turn_id = t.readString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.instruction_type === void 0 &&
          (n.instruction_type = o(
            "ClientActionInLoopTypesTypes",
          ).ClientInstructionType.cast(0)),
        n
      );
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
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.instruction_type = o(
                  "ClientActionInLoopTypesTypes",
                ).ClientInstructionType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.unread_messages = S(t))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.request_id = t.readString())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.turn_id = t.readString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.instruction_type === void 0 &&
          (n.instruction_type = o(
            "ClientActionInLoopTypesTypes",
          ).ClientInstructionType.cast(0)),
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
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.messages = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = R(t);
                n.messages.push(u);
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
    function R(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.threadName = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.senderName = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.messageText = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.timestampMs = t.readI64().toString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.threadName === void 0 && (n.threadName = ""),
        n.senderName === void 0 && (n.senderName = ""),
        n.messageText === void 0 && (n.messageText = ""),
        n.timestampMs === void 0 && (n.timestampMs = "0"),
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
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.tool_name = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.tool_response = t.readString())
              : t.skip(a);
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
              ? (n.tool_response_content = L(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    ((l.ClientInstruction$DefaultConstructor = s),
      (l.ClientInstructionResponse$DefaultConstructor = u),
      (l.UnreadMessages$DefaultConstructor = c),
      (l.Message$DefaultConstructor = d),
      (l.ToolResponseContent$DefaultConstructor = m),
      (l.AgentStep$DefaultConstructor = p),
      (l.serializeClientInstruction = _),
      (l.serializeClientInstructionResponse = f),
      (l.serializeUnreadMessages = g),
      (l.serializeMessage = h),
      (l.serializeToolResponseContent = y),
      (l.serializeAgentStep = C),
      (l.deserializeClientInstruction = b),
      (l.deserializeClientInstructionResponse = v),
      (l.deserializeUnreadMessages = S),
      (l.deserializeMessage = R),
      (l.deserializeToolResponseContent = L),
      (l.deserializeAgentStep = E));
  },
  98,
);
