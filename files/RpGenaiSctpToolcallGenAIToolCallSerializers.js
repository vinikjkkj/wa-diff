__d(
  "RpGenaiSctpToolcallGenAIToolCallSerializers",
  ["RpGenaiSctpToolcallGenAIToolCallTypes", "ThriftTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return { toolCallId: "", toolName: "", argumentsJson: "" };
    }
    function u() {
      return { toolCallId: "" };
    }
    function c() {
      return {
        toolCallId: "",
        status: o(
          "RpGenaiSctpToolcallGenAIToolCallTypes",
        ).ToolCallResultStatus.cast(0),
      };
    }
    function d() {
      return { result: c() };
    }
    function m() {
      return { name: "", terminal: !1 };
    }
    function p() {
      return {
        type: o("RpGenaiSctpToolcallGenAIToolCallTypes").InputType.cast(0),
        description: "",
        properties: {},
        required_properties: [],
      };
    }
    function _() {
      return {};
    }
    function f(t, n) {
      if (
        (n.writeStructBegin("ToolCallRequest"),
        n.writeFieldBegin({
          fname: "toolCallId",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.toolCallId != null)
      )
        n.writeString(t.toolCallId);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "toolName", ftype: e.STRING, fid: 2 }),
        t.toolName != null)
      )
        n.writeString(t.toolName);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "argumentsJson", ftype: e.STRING, fid: 3 }),
        t.argumentsJson != null)
      )
        n.writeString(t.argumentsJson);
      else {
        var i = "";
        n.writeString(i);
      }
      (n.writeFieldEnd(),
        t.timeoutMs != null &&
          (n.writeFieldBegin({
            fname: "timeoutMs",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 4,
          }),
          n.writeI32(t.timeoutMs),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function g(t, n) {
      if (
        (n.writeStructBegin("ToolCallCancel"),
        n.writeFieldBegin({
          fname: "toolCallId",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.toolCallId != null)
      )
        n.writeString(t.toolCallId);
      else {
        var o = "";
        n.writeString(o);
      }
      (n.writeFieldEnd(),
        t.reason != null &&
          (n.writeFieldBegin({
            fname: "reason",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.reason),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function h(t, n) {
      if (
        (n.writeStructBegin("ToolCallResult"),
        n.writeFieldBegin({
          fname: "toolCallId",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.toolCallId != null)
      )
        n.writeString(t.toolCallId);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        t.resultJson != null &&
          (n.writeFieldBegin({
            fname: "resultJson",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.resultJson),
          n.writeFieldEnd()),
        n.writeFieldBegin({ fname: "status", ftype: e.I32, fid: 3 }),
        t.status != null)
      ) {
        var i;
        n.writeI32((i = t.status) != null ? i : 0);
      } else {
        var l = o(
          "RpGenaiSctpToolcallGenAIToolCallTypes",
        ).ToolCallResultStatus.cast(0);
        n.writeI32(l != null ? l : 0);
      }
      (n.writeFieldEnd(),
        t.errorMessage != null &&
          (n.writeFieldBegin({
            fname: "errorMessage",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.errorMessage),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function y(t, n) {
      if (
        (n.writeStructBegin("ToolCallResultMessage"),
        n.writeFieldBegin({
          fname: "result",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 1,
        }),
        t.result != null)
      )
        h(t.result, n);
      else {
        var o = c();
        h(o, n);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function C(t, n) {
      if (
        (n.writeStructBegin("ClientToolDefinition"),
        n.writeFieldBegin({
          fname: "name",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.name != null)
      )
        n.writeString(t.name);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        t.description != null &&
          (n.writeFieldBegin({
            fname: "description",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.description),
          n.writeFieldEnd()),
        t.parameters != null &&
          (n.writeFieldBegin({
            fname: "parameters",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 3,
          }),
          b(t.parameters, n),
          n.writeFieldEnd()),
        n.writeFieldBegin({ fname: "terminal", ftype: e.BOOL, fid: 4 }),
        t.terminal != null)
      )
        n.writeBool(t.terminal);
      else {
        var a = !1;
        n.writeBool(a);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function b(t, n) {
      if (
        (n.writeStructBegin("InputSchema"),
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
        var i = o("RpGenaiSctpToolcallGenAIToolCallTypes").InputType.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "description", ftype: e.STRING, fid: 2 }),
        t.description != null)
      )
        n.writeString(t.description);
      else {
        var l = "";
        n.writeString(l);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "properties", ftype: e.MAP, fid: 3 }),
        t.properties != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRUCT,
          size: Object.keys(t.properties).length,
        });
        for (var s of Object.entries(t.properties)) {
          var u = s[0],
            c = s[1];
          (n.writeString(u), b(c, n));
        }
        n.writeMapEnd();
      } else {
        var d = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRUCT,
          size: Object.keys(d).length,
        });
        for (var m of Object.entries(d)) {
          var p = m[0],
            _ = m[1];
          (n.writeString(p), b(_, n));
        }
        n.writeMapEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "required_properties",
          ftype: e.LIST,
          fid: 4,
        }),
        t.required_properties != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: t.required_properties.length,
        });
        for (var f of t.required_properties) n.writeString(f);
        n.writeListEnd();
      } else {
        var g = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: g.length,
        });
        for (var h of g) n.writeString(h);
        n.writeListEnd();
      }
      if (
        (n.writeFieldEnd(),
        t.items != null &&
          (n.writeFieldBegin({
            fname: "items",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 5,
          }),
          b(t.items, n),
          n.writeFieldEnd()),
        t.enum_values != null)
      ) {
        (n.writeFieldBegin({
          fname: "enum_values",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 6,
        }),
          n.writeListBegin({ etype: e.STRING, size: t.enum_values.length }));
        for (var y of t.enum_values) n.writeString(y);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (t.one_of != null) {
        (n.writeFieldBegin({
          fname: "one_of",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 7,
        }),
          n.writeListBegin({ etype: e.STRUCT, size: t.one_of.length }));
        for (var C of t.one_of) b(C, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (t.default_value != null &&
        (n.writeFieldBegin({
          fname: "default_value",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 8,
        }),
        n.writeString(t.default_value),
        n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function v(t, n) {
      if ((n.writeStructBegin("ToolCallDispatchMessage"), t.request != null)) {
        (n.writeFieldBegin({
          fname: "request",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 1,
        }),
          f(t.request, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.cancel != null) {
        (n.writeFieldBegin({
          fname: "cancel",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 2,
        }),
          g(t.cancel, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      (n.writeFieldStop(), n.writeStructEnd());
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
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.toolCallId = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.toolName = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.argumentsJson = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.timeoutMs = t.readI32())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.toolCallId === void 0 && (n.toolCallId = ""),
        n.toolName === void 0 && (n.toolName = ""),
        n.argumentsJson === void 0 && (n.argumentsJson = ""),
        n
      );
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
              ? (n.toolCallId = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.reason = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.toolCallId === void 0 && (n.toolCallId = ""),
        n
      );
    }
    function L(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.toolCallId = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.resultJson = t.readString())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.status = o(
                  "RpGenaiSctpToolcallGenAIToolCallTypes",
                ).ToolCallResultStatus.cast(t.readI32()))
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.errorMessage = t.readString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.toolCallId === void 0 && (n.toolCallId = ""),
        n.status === void 0 &&
          (n.status = o(
            "RpGenaiSctpToolcallGenAIToolCallTypes",
          ).ToolCallResultStatus.cast(0)),
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
              ? (n.result = L(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.result === void 0 && (n.result = c()), n);
    }
    function k(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.name = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.description = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.parameters = I(t))
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.terminal = t.readBool())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.name === void 0 && (n.name = ""),
        n.terminal === void 0 && (n.terminal = !1),
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
              ? (n.type = o(
                  "RpGenaiSctpToolcallGenAIToolCallTypes",
                ).InputType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.description = t.readString())
              : t.skip(i);
            break;
          case 3:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.properties = {};
              for (var s = t.readMapBegin(), u = 0; u < s.size; u++) {
                var c = t.readString(),
                  d = I(t);
                n.properties[c] = d;
              }
            } else t.skip(i);
            break;
          case 4:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.required_properties = [];
              for (var m = t.readListBegin(), p = 0; p < m.size; p++) {
                var _ = t.readString();
                n.required_properties.push(_);
              }
            } else t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.items = I(t))
              : t.skip(i);
            break;
          case 6:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.enum_values = [];
              for (var f = t.readListBegin(), g = 0; g < f.size; g++) {
                var h = t.readString();
                n.enum_values.push(h);
              }
            } else t.skip(i);
            break;
          case 7:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.one_of = [];
              for (var y = t.readListBegin(), C = 0; C < y.size; C++) {
                var b = I(t);
                n.one_of.push(b);
              }
            } else t.skip(i);
            break;
          case 8:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.default_value = t.readString())
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
          (n.type = o("RpGenaiSctpToolcallGenAIToolCallTypes").InputType.cast(
            0,
          )),
        n.description === void 0 && (n.description = ""),
        n.properties === void 0 && (n.properties = {}),
        n.required_properties === void 0 && (n.required_properties = []),
        n
      );
    }
    function T(t) {
      var n,
        o = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null) ((o.request = S(t)), (n = "request"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: ToolCallDispatchMessage; current field: request, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 2:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null) ((o.cancel = R(t)), (n = "cancel"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: ToolCallDispatchMessage; current field: cancel, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), o);
    }
    ((l.ToolCallRequest$DefaultConstructor = s),
      (l.ToolCallCancel$DefaultConstructor = u),
      (l.ToolCallResult$DefaultConstructor = c),
      (l.ToolCallResultMessage$DefaultConstructor = d),
      (l.ClientToolDefinition$DefaultConstructor = m),
      (l.InputSchema$DefaultConstructor = p),
      (l.ToolCallDispatchMessage$DefaultConstructor = _),
      (l.serializeToolCallRequest = f),
      (l.serializeToolCallCancel = g),
      (l.serializeToolCallResult = h),
      (l.serializeToolCallResultMessage = y),
      (l.serializeClientToolDefinition = C),
      (l.serializeInputSchema = b),
      (l.serializeToolCallDispatchMessage = v),
      (l.deserializeToolCallRequest = S),
      (l.deserializeToolCallCancel = R),
      (l.deserializeToolCallResult = L),
      (l.deserializeToolCallResultMessage = E),
      (l.deserializeClientToolDefinition = k),
      (l.deserializeInputSchema = I),
      (l.deserializeToolCallDispatchMessage = T));
  },
  98,
);
