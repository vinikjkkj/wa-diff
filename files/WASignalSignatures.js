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
          p(t, r, e)
        );
      });
    }
    function c(e, t) {
      var n = t[63];
      return n & 96
        ? null
        : o("WACryptoEd25519").runInAllocationScope(function () {
            var r,
              a,
              i = (r = o("WACryptoPrimitives")).lowlevel.A,
              l = r.lowlevel.M,
              s = r.lowlevel.Z,
              u = r.lowlevel.pack25519,
              c = r.lowlevel.unpack25519,
              d = (a = o("WACryptoEd25519")).allocate(Uint8Array, 64);
            (d.set(t), (d[63] = n & 127));
            var m = a.fieldElement(),
              p = a.fieldElement(),
              _ = a.fieldElement(),
              f = a.fieldElement(),
              g = a.fieldElement(),
              h = a.allocate(Uint8Array, 32),
              y = a.fieldElement();
            return (
              (y[0] = 1),
              c(m, e.subarray(1)),
              s(p, m, y),
              i(_, m, y),
              a.inv25519(f, _),
              l(g, p, f),
              u(h, g),
              (h[31] = (h[31] & 127) | (n & 128)),
              { publicKey: new Uint8Array(h), signature: new Uint8Array(d) }
            );
          });
    }
    function d(e, t, n) {
      var r = c(e, n);
      return r == null
        ? !1
        : o("WACryptoPrimitives").signDetachedVerify(
            t,
            r.signature,
            r.publicKey,
          );
    }
    function m(t, r, a) {
      var i = c(t, a);
      return i == null
        ? (e || (e = n("Promise"))).resolve(!1)
        : o("WACryptoPrimitives").signDetachedVerifyAsync(
            r,
            i.signature,
            i.publicKey,
          );
    }
    function p(e, t, n) {
      var r = s(e, t, n),
        a = o("WASignalOther").sliceBytes(r.signedMsg, 0, 64);
      return ((a[63] = (a[63] & 127) | (r.pubKeyNegative ? 128 : 0)), a);
    }
    function _(e, t, n) {
      var a = o("WASignalKeys").makeKeyPair(),
        i = o("WASignalOther").makeBytes(64);
      o("WACryptoDependencies").getCrypto().getRandomValues(i);
      var l = p(n, o("WASignalKeys").serializePubKey(a), i);
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
    function f(e, t) {
      var n = o("WASignalOther").makeBytes(64);
      return (
        o("WACryptoDependencies").getCrypto().getRandomValues(n),
        p(e, t, n)
      );
    }
    function g(e) {
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
    function h(e) {
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
    function y(e) {
      return new Uint8Array(o("WAHex").parseHex(e));
    }
    function C(e) {
      if (e.length === 33) return o("WASignalKeys").castToSerializedPubKey(e);
      if (e.length === 32) return o("WASignalKeys").serializeIdentity(e);
      throw r("err")("verifyCertificate publicKey incorrect length");
    }
    function b(t, r, o) {
      return (e || (e = n("Promise"))).resolve().then(function () {
        var e = _(t, r, o),
          n = g(e);
        return { plainObject: e, record: n };
      });
    }
    ((l.signMsg = u),
      (l.verifyMsgSignalVariant = d),
      (l.verifyMsgSignalVariantAsync = m),
      (l.makeSignature = p),
      (l.makeSignedPreKey = _),
      (l.signSenderKeyMessage = f),
      (l.serializeSignedPreKeyForPrivateStorage = g),
      (l.deserializeSignedPreKey = h),
      (l.convertPublicKeyHexToUint8Array = y),
      (l.convertPublicKeyToSerializedPubKey = C),
      (l.generateSignedPreKey = b));
  },
  98,
);
