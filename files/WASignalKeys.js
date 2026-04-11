__d(
  "WASignalKeys",
  [
    "WACryptoDependencies",
    "WACryptoPrimitives",
    "WASignalLocalStorageProtocol.pb",
    "WASignalOther",
    "decodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 5,
      s = 16777215;
    function u(e, t) {
      return { publicKey: e, privateKey: t };
    }
    function c(e) {
      var t = o("WACryptoPrimitives").keypairFromSecretKey(e),
        n = t.publicKey,
        r = t.secretKey;
      return u(
        o("WASignalOther").ensureSize(n, 32),
        o("WASignalOther").ensureSize(r, 32),
      );
    }
    function d(e, t) {
      return {
        publicKey: o("WASignalOther").toBytes(e, 32),
        privateKey: o("WASignalOther").toBytes(t, 32),
      };
    }
    function m() {
      var e = o("WACryptoPrimitives").keyPair(),
        t = e.publicKey,
        n = e.secretKey;
      return (
        (n[0] &= 248),
        (n[31] = 64 | (n[31] & 63)),
        u(
          o("WASignalOther").ensureSize(t, 32),
          o("WASignalOther").ensureSize(n, 32),
        )
      );
    }
    function p(e, t) {
      return u(o("WASignalOther").sliceBytes(t, 1, 32), e);
    }
    function _(e, t) {
      return { serializedPubKey: t, privateKey: e };
    }
    function f() {
      var e = m();
      return _(e.privateKey, g(e));
    }
    function g(t) {
      var n = o("WASignalOther").makeBytes(33);
      return ((n[0] = e), n.set(t.publicKey, 1), n);
    }
    function h(t) {
      var n = o("WASignalOther").makeBytes(33);
      return ((n[0] = e), n.set(o("WASignalOther").ensureSize(t, 32), 1), n);
    }
    function y(e) {
      return _(e.privateKey, g(e));
    }
    function C(e, t) {
      for (var n = e >= s ? 0 : e - 1, r = [], a = 0; a < t; a++) {
        var i = n + 1 >= s ? 1 : n + 1,
          l = m(),
          u = o("WASignalOther").encodeSignalProto(
            o("WASignalLocalStorageProtocol.pb").PreKeyRecordStructureSpec,
            { id: i, publicKey: g(l), privateKey: l.privateKey },
          );
        (r.push({ plainObject: { id: i, keyPair: l }, record: u }), (n = i));
      }
      return r;
    }
    function b(e) {
      try {
        var t = o("decodeProtobuf").decodeProtobuf(
            o("WASignalLocalStorageProtocol.pb").PreKeyRecordStructureSpec,
            e,
          ),
          n = t.id,
          r = t.privateKey,
          a = t.publicKey;
        return n == null || a == null || r == null
          ? null
          : {
              id: v(n),
              keyPair: p(
                o("WASignalOther").toBytes(r, 32),
                R(new Uint8Array(a)),
              ),
            };
      } catch (e) {
        return null;
      }
    }
    function v(e) {
      return o("WASignalOther").ensureIntInRange(e, 1, s);
    }
    function S(e) {
      return o("WASignalOther").ensureIntInRange(e, 0, s);
    }
    function R(t) {
      if (t.length === 0 || t[0] !== e)
        throw r("err")("Unrecognized public key type");
      return o("WASignalOther").ensureSize(t, 33);
    }
    function L() {
      var e = o("WASignalOther").makeBytes(32);
      return (o("WACryptoDependencies").getCrypto().getRandomValues(e), e);
    }
    function E(e, t) {
      return o("WACryptoPrimitives").scalarMult(e, t.subarray(1)).buffer;
    }
    ((l.KEY_TYPE = e),
      (l.PRE_KEY_NON_INCLUSIVE_UPPER_BORDER = s),
      (l.makeKeyPairFrom = c),
      (l.makeKeyPairFromArrayBuffers = d),
      (l.makeKeyPair = m),
      (l.makeKeyPairFromSerialized = p),
      (l.makeSerializedKeyPairFrom = _),
      (l.makeSerializedKeyPair = f),
      (l.serializePubKey = g),
      (l.serializeIdentity = h),
      (l.toSerializedKeyPair = y),
      (l.makePreKeys = C),
      (l.deserializePreKey = b),
      (l.castToPreKeyId = v),
      (l.castToSignedPreKeyId = S),
      (l.castToSerializedPubKey = R),
      (l.makeRawSenderKey = L),
      (l.ecdh = E));
  },
  98,
);
