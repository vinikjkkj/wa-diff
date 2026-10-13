__d(
  "WASignalSignatures",
  [
    "Promise",
    "WACryptoDependencies",
    "WACryptoEd25519",
    "WACryptoPrimitives",
    "WAHex",
    "WALongInt",
    "WASignalKeys",
    "WASignalLocalStorageProtocol.pb",
    "WASignalOther",
    "decodeProtobuf",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 256,
      u = new Map();
    function c(e, t, n) {
      return o("WACryptoEd25519").runInAllocationScope(function () {
        var r,
          a = t.length,
          i = e.privateKey,
          l = new Uint8Array(32);
        (r = o("WACryptoEd25519")).scalarmultBase(l, i);
        var s = l[31] & 128,
          u = new Uint8Array(a + 128);
        ((u[0] = 254),
          u.fill(255, 1, 32),
          u.set(i, 32),
          u.set(t, 64),
          u.set(n, a + 64));
        var c = r.allocate(Uint8Array, 64);
        (r.hashSha512(c, u, a + 128), u.set(l, 32));
        var d = r.allocate(Float64Array, 64);
        (r.reduce(c, d), r.scalarmultBase(u, c));
        var m = r.allocate(Uint8Array, 64);
        (r.hashSha512(m, u, a + 64), r.reduce(m, d));
        var p, _;
        for (p = 0; p < 32; ++p) d[p] = c[p];
        for (p = 0; p < 32; ++p)
          for (_ = 0; _ < 32; ++_) d[p + _] += m[p] * i[_];
        return (
          r.modL(u.subarray(32, 64), d),
          { pubKeyNegative: s !== 0, signedMsg: u }
        );
      });
    }
    function d(t, r) {
      return (e || (e = n("Promise"))).resolve().then(function () {
        var e = o("WASignalOther").makeBytes(64);
        return (
          o("WACryptoDependencies").getCrypto().getRandomValues(e),
          h(t, r, e)
        );
      });
    }
    function m(e, t) {
      var n = t[63];
      if (n & 96) return null;
      var r = new Uint8Array(t);
      r[63] = n & 127;
      var o = new Uint8Array(p(e));
      return (
        (o[31] = (o[31] & 127) | (n & 128)),
        { publicKey: o, signature: r }
      );
    }
    function p(e) {
      if (!r("gkx")("27245")) return _(e);
      var t = o("WAHex").toHex(e),
        n = u.get(t);
      if (n != null) return (u.delete(t), u.set(t, n), n);
      var a = _(e);
      if ((u.set(t, a), u.size > s)) {
        var i = u.keys().next().value;
        i != null && u.delete(i);
      }
      return a;
    }
    function _(e) {
      return o("WACryptoEd25519").runInAllocationScope(function () {
        var t,
          n,
          r = (t = o("WACryptoPrimitives")).lowlevel.A,
          a = t.lowlevel.M,
          i = t.lowlevel.Z,
          l = t.lowlevel.pack25519,
          s = t.lowlevel.unpack25519,
          u = (n = o("WACryptoEd25519")).fieldElement(),
          c = n.fieldElement(),
          d = n.fieldElement(),
          m = n.fieldElement(),
          p = n.fieldElement(),
          _ = n.allocate(Uint8Array, 32),
          f = n.fieldElement();
        return (
          (f[0] = 1),
          s(u, e.subarray(1)),
          i(c, u, f),
          r(d, u, f),
          n.inv25519(m, d),
          a(p, c, m),
          l(_, p),
          new Uint8Array(_)
        );
      });
    }
    function f(e, t, n) {
      var r = m(e, n);
      return r == null
        ? !1
        : o("WACryptoPrimitives").signDetachedVerify(
            t,
            r.signature,
            r.publicKey,
          );
    }
    function g(t, r, a) {
      var i = m(t, a);
      return i == null
        ? (e || (e = n("Promise"))).resolve(!1)
        : o("WACryptoPrimitives").signDetachedVerifyAsync(
            r,
            i.signature,
            i.publicKey,
          );
    }
    function h(e, t, n) {
      var r = c(e, t, n),
        a = o("WASignalOther").sliceBytes(r.signedMsg, 0, 64);
      return ((a[63] = (a[63] & 127) | (r.pubKeyNegative ? 128 : 0)), a);
    }
    function y(e, t, n) {
      var a = o("WASignalKeys").makeKeyPair(),
        i = o("WASignalOther").makeBytes(64);
      o("WACryptoDependencies").getCrypto().getRandomValues(i);
      var l = h(n, o("WASignalKeys").serializePubKey(a), i);
      if (!Number.isSafeInteger(t))
        throw r("err")(
          "Expected timestamp to be a safe integer, given " + String(t),
        );
      return {
        id: o("WASignalKeys").castToPreKeyId(e),
        ts: t,
        keyPair: a,
        signature: l,
      };
    }
    function C(e, t) {
      var n = o("WASignalOther").makeBytes(64);
      return (
        o("WACryptoDependencies").getCrypto().getRandomValues(n),
        h(e, t, n)
      );
    }
    function b(e) {
      var t = e.id,
        n = e.keyPair;
      return o("WASignalOther").encodeSignalProto(
        o("WASignalLocalStorageProtocol.pb").SignedPreKeyRecordStructureSpec,
        {
          id: t,
          publicKey: o("WASignalKeys").serializePubKey(n),
          privateKey: n.privateKey,
          signature: e.signature,
          timestamp: e.ts,
        },
      );
    }
    function v(e) {
      try {
        var t = o("decodeProtobuf").decodeProtobuf(
            o("WASignalLocalStorageProtocol.pb")
              .SignedPreKeyRecordStructureSpec,
            e,
          ),
          n = t.id,
          r = t.privateKey,
          a = t.publicKey,
          i = t.signature,
          l = t.timestamp;
        return n == null || a == null || r == null || i == null || l == null
          ? null
          : {
              id: o("WASignalKeys").castToSignedPreKeyId(n),
              ts: o("WALongInt").numberOrThrowIfTooLarge(l),
              keyPair: o("WASignalKeys").makeKeyPairFromSerialized(
                o("WASignalOther").toBytes(r, 32),
                o("WASignalKeys").castToSerializedPubKey(new Uint8Array(a)),
              ),
              signature: o("WASignalOther").toBytes(i, 64),
            };
      } catch (e) {
        return null;
      }
    }
    function S(e) {
      return new Uint8Array(o("WAHex").parseHex(e));
    }
    function R(e) {
      if (e.length === 33) return o("WASignalKeys").castToSerializedPubKey(e);
      if (e.length === 32) return o("WASignalKeys").serializeIdentity(e);
      throw r("err")("verifyCertificate publicKey incorrect length");
    }
    function L(t, r, o) {
      return (e || (e = n("Promise"))).resolve().then(function () {
        var e = y(t, r, o),
          n = b(e);
        return { plainObject: e, record: n };
      });
    }
    ((l.signMsg = d),
      (l.verifyMsgSignalVariant = f),
      (l.verifyMsgSignalVariantAsync = g),
      (l.makeSignature = h),
      (l.makeSignedPreKey = y),
      (l.signSenderKeyMessage = C),
      (l.serializeSignedPreKeyForPrivateStorage = b),
      (l.deserializeSignedPreKey = v),
      (l.convertPublicKeyHexToUint8Array = S),
      (l.convertPublicKeyToSerializedPubKey = R),
      (l.generateSignedPreKey = L));
  },
  98,
);
