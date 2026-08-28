__d(
  "RtcOverlayConfigServerLayerSerializers",
  ["ThriftTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return { values: {} };
    }
    function u(t, n) {
      if (
        (n.writeStructBegin("OverlayConfigServerLayer"),
        n.writeFieldBegin({
          fname: "values",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 1,
        }),
        t.values != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).I32,
          vtype: e.I32,
          size: Object.keys(t.values).length,
        });
        for (var o of Object.entries(t.values)) {
          var a = o[0],
            i = o[1];
          (n.writeI32(Number(a)), n.writeI32(i));
        }
        n.writeMapEnd();
      } else {
        var l = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).I32,
          vtype: e.I32,
          size: Object.keys(l).length,
        });
        for (var s of Object.entries(l)) {
          var u = s[0],
            c = s[1];
          (n.writeI32(Number(u)), n.writeI32(c));
        }
        n.writeMapEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function c(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.values = {};
              for (var l = t.readMapBegin(), s = 0; s < l.size; s++) {
                var u = t.readI32(),
                  c = t.readI32();
                n.values[u] = c;
              }
            } else t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.values === void 0 && (n.values = {}), n);
    }
    ((l.OverlayConfigServerLayer$DefaultConstructor = s),
      (l.serializeOverlayConfigServerLayer = u),
      (l.deserializeOverlayConfigServerLayer = c));
  },
  98,
);
