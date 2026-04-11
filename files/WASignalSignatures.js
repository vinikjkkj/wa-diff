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
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n) {
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
    function u(t, r) {
      return (e || (e = n("Promise"))).resolve().then(function () {
        var e = o("WASignalOther").makeBytes(64);
        return (
          o("WACryptoDependencies").getCrypto().getRandomValues(e),
          d(t, r, e)
        );
      });
    }
    function c(e, t, n) {
      var r = n[63];
      return r & 96
        ? !1
        : o("WACryptoEd25519").runInAllocationScope(function () {
            var a,
              i,
              l = (a = o("WACryptoPrimitives")).lowlevel.A,
              s = a.lowlevel.M,
              u = a.lowlevel.Z,
              c = a.lowlevel.pack25519,
              d = a.lowlevel.unpack25519,
              m = (i = o("WACryptoEd25519")).allocate(Uint8Array, 64);
            (m.set(n), (m[63] = r & 127));
            var p = i.fieldElement(),
              _ = i.fieldElement(),
              f = i.fieldElement(),
              g = i.fieldElement(),
              h = i.fieldElement(),
              y = i.allocate(Uint8Array, 32),
              C = i.fieldElement();
            return (
              (C[0] = 1),
              d(p, e.subarray(1)),
              u(_, p, C),
              l(f, p, C),
              i.inv25519(g, f),
              s(h, _, g),
              c(y, h),
              (y[31] = (y[31] & 127) | (r & 128)),
              a.signDetachedVerify(t, m, y)
            );
          });
    }
    function d(e, t, n) {
      var r = s(e, t, n),
        a = o("WASignalOther").sliceBytes(r.signedMsg, 0, 64);
      return ((a[63] = (a[63] & 127) | (r.pubKeyNegative ? 128 : 0)), a);
    }
    function m(e, t, n) {
      var a = o("WASignalKeys").makeKeyPair(),
        i = o("WASignalOther").makeBytes(64);
      o("WACryptoDependencies").getCrypto().getRandomValues(i);
      var l = d(n, o("WASignalKeys").serializePubKey(a), i);
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
    function p(e, t) {
      var n = o("WASignalOther").makeBytes(64);
      return (
        o("WACryptoDependencies").getCrypto().getRandomValues(n),
        d(e, t, n)
      );
    }
    function _(e) {
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
    function f(e) {
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
    function g(e) {
      return new Uint8Array(o("WAHex").parseHex(e));
    }
    function h(e) {
      if (e.length === 33) return o("WASignalKeys").castToSerializedPubKey(e);
      if (e.length === 32) return o("WASignalKeys").serializeIdentity(e);
      throw r("err")("verifyCertificate publicKey incorrect length");
    }
    function y(t, r, o) {
      return (e || (e = n("Promise"))).resolve().then(function () {
        var e = m(t, r, o),
          n = _(e);
        return { plainObject: e, record: n };
      });
    }
    ((l.signMsg = u),
      (l.verifyMsgSignalVariant = c),
      (l.makeSignature = d),
      (l.makeSignedPreKey = m),
      (l.signSenderKeyMessage = p),
      (l.serializeSignedPreKeyForPrivateStorage = _),
      (l.deserializeSignedPreKey = f),
      (l.convertPublicKeyHexToUint8Array = g),
      (l.convertPublicKeyToSerializedPubKey = h),
      (l.generateSignedPreKey = y));
  },
  98,
);
