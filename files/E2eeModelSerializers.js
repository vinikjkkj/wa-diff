__d(
  "E2eeModelSerializers",
  ["ThriftTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return {
        peerId: "0",
        publicIdentityKey: [],
        isIdentityKeyNew: !1,
        deviceId: 0,
      };
    }
    function u() {
      return { isE2eeMandated: !1, sFramesEnabled: !1, participants: {} };
    }
    function c(t, n) {
      if (
        (n.writeStructBegin("PeerIdentityInfo"),
        n.writeFieldBegin({
          fname: "peerId",
          ftype: (e || (e = r("ThriftTypes"))).I64,
          fid: 1,
        }),
        t.peerId != null)
      )
        n.writeI64(BigInt(t.peerId));
      else {
        var o = "0";
        n.writeI64(BigInt(o));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "publicIdentityKey",
          ftype: e.LIST,
          fid: 2,
        }),
        t.publicIdentityKey != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).BYTE,
          size: t.publicIdentityKey.length,
        });
        for (var a of t.publicIdentityKey) n.writeByte(a);
        n.writeListEnd();
      } else {
        var i = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).BYTE,
          size: i.length,
        });
        for (var l of i) n.writeByte(l);
        n.writeListEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "isIdentityKeyNew", ftype: e.BOOL, fid: 3 }),
        t.isIdentityKeyNew != null)
      )
        n.writeBool(t.isIdentityKeyNew);
      else {
        var s = !1;
        n.writeBool(s);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "deviceId", ftype: e.I32, fid: 4 }),
        t.deviceId != null)
      )
        n.writeI32(t.deviceId);
      else {
        var u = 0;
        n.writeI32(u);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function d(t, n) {
      if (
        (n.writeStructBegin("E2eeModel"),
        n.writeFieldBegin({
          fname: "isE2eeMandated",
          ftype: (e || (e = r("ThriftTypes"))).BOOL,
          fid: 1,
        }),
        t.isE2eeMandated != null)
      )
        n.writeBool(t.isE2eeMandated);
      else {
        var o = !1;
        n.writeBool(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "sFramesEnabled", ftype: e.BOOL, fid: 2 }),
        t.sFramesEnabled != null)
      )
        n.writeBool(t.sFramesEnabled);
      else {
        var a = !1;
        n.writeBool(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "participants", ftype: e.MAP, fid: 3 }),
        t.participants != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).I64,
          vtype: e.LIST,
          size: Object.keys(t.participants).length,
        });
        for (var i of Object.entries(t.participants)) {
          var l = i[0],
            s = i[1];
          (n.writeI64(BigInt(l)),
            n.writeListBegin({
              etype: (e || (e = r("ThriftTypes"))).STRUCT,
              size: s.length,
            }));
          for (var u of s) c(u, n);
          n.writeListEnd();
        }
        n.writeMapEnd();
      } else {
        var d = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).I64,
          vtype: e.LIST,
          size: Object.keys(d).length,
        });
        for (var m of Object.entries(d)) {
          var p = m[0],
            _ = m[1];
          (n.writeI64(BigInt(p)),
            n.writeListBegin({
              etype: (e || (e = r("ThriftTypes"))).STRUCT,
              size: _.length,
            }));
          for (var f of _) c(f, n);
          n.writeListEnd();
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
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.peerId = t.readI64().toString())
              : t.skip(a);
            break;
          case 2:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.publicIdentityKey = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = t.readByte();
                n.publicIdentityKey.push(u);
              }
            } else t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.isIdentityKeyNew = t.readBool())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.deviceId = t.readI32())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.peerId === void 0 && (n.peerId = "0"),
        n.publicIdentityKey === void 0 && (n.publicIdentityKey = []),
        n.isIdentityKeyNew === void 0 && (n.isIdentityKeyNew = !1),
        n.deviceId === void 0 && (n.deviceId = 0),
        n
      );
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
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.isE2eeMandated = t.readBool())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.sFramesEnabled = t.readBool())
              : t.skip(a);
            break;
          case 3:
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.participants = {};
              for (var l = t.readMapBegin(), s = 0; s < l.size; s++) {
                for (
                  var u = t.readI64().toString(),
                    c = [],
                    d = t.readListBegin(),
                    p = 0;
                  p < d.size;
                  p++
                ) {
                  var _ = m(t);
                  c.push(_);
                }
                n.participants[u] = c;
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
        n.isE2eeMandated === void 0 && (n.isE2eeMandated = !1),
        n.sFramesEnabled === void 0 && (n.sFramesEnabled = !1),
        n.participants === void 0 && (n.participants = {}),
        n
      );
    }
    ((l.PeerIdentityInfo$DefaultConstructor = s),
      (l.E2eeModel$DefaultConstructor = u),
      (l.serializePeerIdentityInfo = c),
      (l.serializeE2eeModel = d),
      (l.deserializePeerIdentityInfo = m),
      (l.deserializeE2eeModel = p));
  },
  98,
);
