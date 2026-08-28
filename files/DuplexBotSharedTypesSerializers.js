__d(
  "DuplexBotSharedTypesSerializers",
  ["ThriftTypes", "jsbi"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return { useCanonicalNaming: !1 };
    }
    function u() {
      return { queryParams: "", queryOptions: s(), queryIdentifier: m() };
    }
    function c() {
      return {};
    }
    function d() {
      return { latitude: "", longitude: "" };
    }
    function m() {
      return {};
    }
    function p(t, n) {
      if (
        (n.writeStructBegin("GraphQLQueryOptions"),
        n.writeFieldBegin({
          fname: "useCanonicalNaming",
          ftype: (e || (e = r("ThriftTypes"))).BOOL,
          fid: 1,
        }),
        t.useCanonicalNaming != null)
      )
        n.writeBool(t.useCanonicalNaming);
      else {
        var o = !1;
        n.writeBool(o);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function _(t, n) {
      if (
        (n.writeStructBegin("GraphQLQueryContext"),
        n.writeFieldBegin({
          fname: "queryParams",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 2,
        }),
        t.queryParams != null)
      )
        n.writeString(t.queryParams);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "queryOptions", ftype: e.STRUCT, fid: 3 }),
        t.queryOptions != null)
      )
        p(t.queryOptions, n);
      else {
        var a = s();
        p(a, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "queryIdentifier",
          ftype: e.STRUCT,
          fid: 4,
        }),
        t.queryIdentifier != null)
      )
        h(t.queryIdentifier, n);
      else {
        var i = m();
        h(i, n);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function f(t, n) {
      if (
        (n.writeStructBegin("WaveformsSession"),
        t.handshakeRequestJson != null &&
          (n.writeFieldBegin({
            fname: "handshakeRequestJson",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.handshakeRequestJson),
          n.writeFieldEnd()),
        t.cosmosTier != null &&
          (n.writeFieldBegin({
            fname: "cosmosTier",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.cosmosTier),
          n.writeFieldEnd()),
        t.flagOverrides != null)
      ) {
        (n.writeFieldBegin({
          fname: "flagOverrides",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 4,
        }),
          n.writeMapBegin({
            ktype: e.STRING,
            vtype: e.BOOL,
            size: Object.keys(t.flagOverrides).length,
          }));
        for (var o of Object.entries(t.flagOverrides)) {
          var a = o[0],
            i = o[1];
          (n.writeString(a), n.writeBool(i));
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function g(t, n) {
      if (
        (n.writeStructBegin("GpsLocation"),
        n.writeFieldBegin({
          fname: "latitude",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.latitude != null)
      )
        n.writeString(t.latitude);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "longitude", ftype: e.STRING, fid: 2 }),
        t.longitude != null)
      )
        n.writeString(t.longitude);
      else {
        var a = "";
        n.writeString(a);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function h(t, n) {
      if ((n.writeStructBegin("GraphQLQueryIdentifier"), t.docId != null)) {
        (n.writeFieldBegin({
          fname: "docId",
          ftype: (e || (e = r("ThriftTypes"))).I64,
          fid: 1,
        }),
          n.writeI64(r("jsbi").BigInt(t.docId)),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.clientDocId != null) {
        (n.writeFieldBegin({
          fname: "clientDocId",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 2,
        }),
          n.writeString(t.clientDocId),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function y(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.useCanonicalNaming = t.readBool())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.useCanonicalNaming === void 0 && (n.useCanonicalNaming = !1),
        n
      );
    }
    function C(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.queryParams = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.queryOptions = y(t))
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.queryIdentifier = S(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.queryParams === void 0 && (n.queryParams = ""),
        n.queryOptions === void 0 && (n.queryOptions = s()),
        n.queryIdentifier === void 0 && (n.queryIdentifier = m()),
        n
      );
    }
    function b(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.handshakeRequestJson = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.cosmosTier = t.readString())
              : t.skip(a);
            break;
          case 4:
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.flagOverrides = {};
              for (var l = t.readMapBegin(), s = 0; s < l.size; s++) {
                var u = t.readString(),
                  c = t.readBool();
                n.flagOverrides[u] = c;
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
              ? (n.latitude = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.longitude = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.latitude === void 0 && (n.latitude = ""),
        n.longitude === void 0 && (n.longitude = ""),
        n
      );
    }
    function S(t) {
      var n,
        o = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            if (i === (e || (e = r("ThriftTypes"))).I64)
              if (n == null)
                ((o.docId = t.readI64().toString()), (n = "docId"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: GraphQLQueryIdentifier; current field: docId, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 2:
            if (i === (e || (e = r("ThriftTypes"))).STRING)
              if (n == null)
                ((o.clientDocId = t.readString()), (n = "clientDocId"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: GraphQLQueryIdentifier; current field: clientDocId, previous deserialized field: " +
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
    ((l.GraphQLQueryOptions$DefaultConstructor = s),
      (l.GraphQLQueryContext$DefaultConstructor = u),
      (l.WaveformsSession$DefaultConstructor = c),
      (l.GpsLocation$DefaultConstructor = d),
      (l.GraphQLQueryIdentifier$DefaultConstructor = m),
      (l.serializeGraphQLQueryOptions = p),
      (l.serializeGraphQLQueryContext = _),
      (l.serializeWaveformsSession = f),
      (l.serializeGpsLocation = g),
      (l.serializeGraphQLQueryIdentifier = h),
      (l.deserializeGraphQLQueryOptions = y),
      (l.deserializeGraphQLQueryContext = C),
      (l.deserializeWaveformsSession = b),
      (l.deserializeGpsLocation = v),
      (l.deserializeGraphQLQueryIdentifier = S));
  },
  98,
);
