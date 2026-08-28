__d(
  "SimpleStateSimpleStateSerializers",
  ["ThriftTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return { number: 0 };
    }
    function u() {
      return { max: 0 };
    }
    function c(t, n) {
      if (
        (n.writeStructBegin("SimpleInputState"),
        n.writeFieldBegin({
          fname: "number",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.number != null)
      )
        n.writeI32(t.number);
      else {
        var o = 0;
        n.writeI32(o);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function d(t, n) {
      if (
        (n.writeStructBegin("SimpleOutputState"),
        n.writeFieldBegin({
          fname: "max",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.max != null)
      )
        n.writeI32(t.max);
      else {
        var o = 0;
        n.writeI32(o);
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
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.number = t.readI32())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.number === void 0 && (n.number = 0), n);
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
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.max = t.readI32())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.max === void 0 && (n.max = 0), n);
    }
    ((l.SimpleInputState$DefaultConstructor = s),
      (l.SimpleOutputState$DefaultConstructor = u),
      (l.serializeSimpleInputState = c),
      (l.serializeSimpleOutputState = d),
      (l.deserializeSimpleInputState = m),
      (l.deserializeSimpleOutputState = p));
  },
  98,
);
