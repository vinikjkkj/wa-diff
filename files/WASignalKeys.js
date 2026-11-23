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
    async function p() {
      var e = await o("WACryptoPrimitives").keyPairAsync(),
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
    function _(e, t) {
      return u(o("WASignalOther").sliceBytes(t, 1, 32), e);
    }
    function f(e, t) {
      return { serializedPubKey: t, privateKey: e };
    }
    function g() {
      var e = m();
      return f(e.privateKey, y(e));
    }
    async function h() {
      var e = await p();
      return f(e.privateKey, y(e));
    }
    function y(t) {
      var n = o("WASignalOther").makeBytes(33);
      return ((n[0] = e), n.set(t.publicKey, 1), n);
    }
    function C(t) {
      var n = o("WASignalOther").makeBytes(33);
      return ((n[0] = e), n.set(o("WASignalOther").ensureSize(t, 32), 1), n);
    }
    function b(e) {
      return f(e.privateKey, y(e));
    }
    function v(e, t) {
      for (var n = e >= s ? 0 : e - 1, r = [], a = 0; a < t; a++) {
        var i = n + 1 >= s ? 1 : n + 1,
          l = m(),
          u = o("WASignalOther").encodeSignalProto(
            o("WASignalLocalStorageProtocol.pb").PreKeyRecordStructureSpec,
            { id: i, publicKey: y(l), privateKey: l.privateKey },
          );
        (r.push({ plainObject: { id: i, keyPair: l }, record: u }), (n = i));
      }
      return r;
    }
    function S(e) {
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
              id: R(n),
              keyPair: _(
                o("WASignalOther").toBytes(r, 32),
                E(new Uint8Array(a)),
              ),
            };
      } catch (e) {
        return null;
      }
    }
    function R(e) {
      return o("WASignalOther").ensureIntInRange(e, 1, s);
    }
    function L(e) {
      return o("WASignalOther").ensureIntInRange(e, 0, s);
    }
    function E(t) {
      if (t.length === 0 || t[0] !== e)
        throw r("err")("Unrecognized public key type");
      return o("WASignalOther").ensureSize(t, 33);
    }
    function k() {
      var e = o("WASignalOther").makeBytes(32);
      return (o("WACryptoDependencies").getCrypto().getRandomValues(e), e);
    }
    function I(e, t) {
      return o("WACryptoPrimitives").scalarMult(e, t.subarray(1)).buffer;
    }
    function T(e, t) {
      return o("WACryptoPrimitives").scalarMultAsync(e, t.subarray(1));
    }
    ((l.KEY_TYPE = e),
      (l.PRE_KEY_NON_INCLUSIVE_UPPER_BORDER = s),
      (l.makeKeyPairFrom = c),
      (l.makeKeyPairFromArrayBuffers = d),
      (l.makeKeyPair = m),
      (l.makeKeyPairAsync = p),
      (l.makeKeyPairFromSerialized = _),
      (l.makeSerializedKeyPairFrom = f),
      (l.makeSerializedKeyPair = g),
      (l.makeSerializedKeyPairAsync = h),
      (l.serializePubKey = y),
      (l.serializeIdentity = C),
      (l.toSerializedKeyPair = b),
      (l.makePreKeys = v),
      (l.deserializePreKey = S),
      (l.castToPreKeyId = R),
      (l.castToSignedPreKeyId = L),
      (l.castToSerializedPubKey = E),
      (l.makeRawSenderKey = k),
      (l.ecdh = I),
      (l.ecdhAsync = T));
  },
  98,
);
