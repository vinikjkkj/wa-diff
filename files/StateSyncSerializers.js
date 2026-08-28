__d(
  "StateSyncSerializers",
  ["ThriftTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return { version: 0 };
    }
    function u() {
      return { stateStore: {} };
    }
    function c(t, n) {
      if (
        (n.writeStructBegin("State"),
        n.writeFieldBegin({
          fname: "version",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.version != null)
      )
        n.writeI32(t.version);
      else {
        var o = 0;
        n.writeI32(o);
      }
      (n.writeFieldEnd(),
        t.data != null &&
          (n.writeFieldBegin({
            fname: "data",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeBinary(t.data),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function d(t, n) {
      if (
        (n.writeStructBegin("Snapshot"),
        n.writeFieldBegin({
          fname: "stateStore",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 1,
        }),
        t.stateStore != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRUCT,
          size: Object.keys(t.stateStore).length,
        });
        for (var o of Object.entries(t.stateStore)) {
          var a = o[0],
            i = o[1];
          (n.writeString(a), c(i, n));
        }
        n.writeMapEnd();
      } else {
        var l = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRUCT,
          size: Object.keys(l).length,
        });
        for (var s of Object.entries(l)) {
          var u = s[0],
            d = s[1];
          (n.writeString(u), c(d, n));
        }
        n.writeMapEnd();
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
              ? (n.version = t.readI32())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.data = t.readBinary())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.version === void 0 && (n.version = 0), n);
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
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.stateStore = {};
              for (var l = t.readMapBegin(), s = 0; s < l.size; s++) {
                var u = t.readString(),
                  c = m(t);
                n.stateStore[u] = c;
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
        n.stateStore === void 0 && (n.stateStore = {}),
        n
      );
    }
    ((l.State$DefaultConstructor = s),
      (l.Snapshot$DefaultConstructor = u),
      (l.serializeState = c),
      (l.serializeSnapshot = d),
      (l.deserializeState = m),
      (l.deserializeSnapshot = p));
  },
  98,
);
