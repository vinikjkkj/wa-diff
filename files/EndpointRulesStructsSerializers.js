__d(
  "EndpointRulesStructsSerializers",
  ["EndpointRulesStructsTypes", "ExtensionsSharedTypesTypes", "ThriftTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return {};
    }
    function u() {
      return { sessionConditions: s(), value: 0 };
    }
    function c(t, n) {
      if ((n.writeStructBegin("SessionConditions"), t.mediaPath != null)) {
        var o;
        (n.writeFieldBegin({
          fname: "mediaPath",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
          n.writeI32((o = t.mediaPath) != null ? o : 0),
          n.writeFieldEnd());
      }
      if (t.extensionProductUsecase != null) {
        var a;
        (n.writeFieldBegin({
          fname: "extensionProductUsecase",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 2,
        }),
          n.writeI32((a = t.extensionProductUsecase) != null ? a : 0),
          n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function d(t, n) {
      if (
        (n.writeStructBegin("EndpointRule"),
        n.writeFieldBegin({
          fname: "sessionConditions",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 1,
        }),
        t.sessionConditions != null)
      )
        c(t.sessionConditions, n);
      else {
        var o = s();
        c(o, n);
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
    function m(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.mediaPath = o("EndpointRulesStructsTypes").MediaPath.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.extensionProductUsecase = o(
                  "ExtensionsSharedTypesTypes",
                ).ExtensionProductUsecase.cast(t.readI32()))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
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
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.sessionConditions = m(t))
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
        n.sessionConditions === void 0 && (n.sessionConditions = s()),
        n.value === void 0 && (n.value = 0),
        n
      );
    }
    ((l.SessionConditions$DefaultConstructor = s),
      (l.EndpointRule$DefaultConstructor = u),
      (l.serializeSessionConditions = c),
      (l.serializeEndpointRule = d),
      (l.deserializeSessionConditions = m),
      (l.deserializeEndpointRule = p));
  },
  98,
);
