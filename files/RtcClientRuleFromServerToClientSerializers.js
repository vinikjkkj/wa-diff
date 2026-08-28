__d(
  "RtcClientRuleFromServerToClientSerializers",
  ["ThriftTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return { conditionals: [], effects: [], id: 0 };
    }
    function u() {
      return { type: 0, ruleOperator: 0, value: 0 };
    }
    function c() {
      return { overlayConfigId: 0, value: 0 };
    }
    function d(t, n) {
      if (
        (n.writeStructBegin("ClientRuleFromServerToClient"),
        n.writeFieldBegin({
          fname: "conditionals",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
        t.conditionals != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.conditionals.length,
        });
        for (var o of t.conditionals) m(o, n);
        n.writeListEnd();
      } else {
        var a = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: a.length,
        });
        for (var i of a) m(i, n);
        n.writeListEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "effects", ftype: e.LIST, fid: 2 }),
        t.effects != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.effects.length,
        });
        for (var l of t.effects) p(l, n);
        n.writeListEnd();
      } else {
        var s = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: s.length,
        });
        for (var u of s) p(u, n);
        n.writeListEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "id", ftype: e.I32, fid: 3 }),
        t.id != null)
      )
        n.writeI32(t.id);
      else {
        var c = 0;
        n.writeI32(c);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function m(t, n) {
      if (
        (n.writeStructBegin("ClientConditionalDeserializationSafe"),
        n.writeFieldBegin({
          fname: "type",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.type != null)
      )
        n.writeI32(t.type);
      else {
        var o = 0;
        n.writeI32(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "ruleOperator", ftype: e.I32, fid: 2 }),
        t.ruleOperator != null)
      )
        n.writeI32(t.ruleOperator);
      else {
        var a = 0;
        n.writeI32(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "value", ftype: e.I32, fid: 3 }),
        t.value != null)
      )
        n.writeI32(t.value);
      else {
        var i = 0;
        n.writeI32(i);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function p(t, n) {
      if (
        (n.writeStructBegin("ClientEffectDeserializationSafe"),
        n.writeFieldBegin({
          fname: "overlayConfigId",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.overlayConfigId != null)
      )
        n.writeI32(t.overlayConfigId);
      else {
        var o = 0;
        n.writeI32(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "value", ftype: e.I32, fid: 2 }),
        t.value != null)
      )
        n.writeI32(t.value);
      else {
        var a = 0;
        n.writeI32(a);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function _(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.conditionals = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = f(t);
                n.conditionals.push(u);
              }
            } else t.skip(a);
            break;
          case 2:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.effects = [];
              for (var c = t.readListBegin(), d = 0; d < c.size; d++) {
                var m = g(t);
                n.effects.push(m);
              }
            } else t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.id = t.readI32())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.conditionals === void 0 && (n.conditionals = []),
        n.effects === void 0 && (n.effects = []),
        n.id === void 0 && (n.id = 0),
        n
      );
    }
    function f(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.type = t.readI32())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.ruleOperator = t.readI32())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.value = t.readI32())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.type === void 0 && (n.type = 0),
        n.ruleOperator === void 0 && (n.ruleOperator = 0),
        n.value === void 0 && (n.value = 0),
        n
      );
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
              ? (n.overlayConfigId = t.readI32())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.value = t.readI32())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.overlayConfigId === void 0 && (n.overlayConfigId = 0),
        n.value === void 0 && (n.value = 0),
        n
      );
    }
    ((l.ClientRuleFromServerToClient$DefaultConstructor = s),
      (l.ClientConditionalDeserializationSafe$DefaultConstructor = u),
      (l.ClientEffectDeserializationSafe$DefaultConstructor = c),
      (l.serializeClientRuleFromServerToClient = d),
      (l.serializeClientConditionalDeserializationSafe = m),
      (l.serializeClientEffectDeserializationSafe = p),
      (l.deserializeClientRuleFromServerToClient = _),
      (l.deserializeClientConditionalDeserializationSafe = f),
      (l.deserializeClientEffectDeserializationSafe = g));
  },
  98,
);
