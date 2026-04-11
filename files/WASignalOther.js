__d(
  "WASignalOther",
  [
    "WACryptoDependencies",
    "WACryptoHkdf",
    "WACryptoUtils",
    "WAParsableXmlNode",
    "decodeProtobuf",
    "encodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { name: "AES-CBC" },
      s = { name: "HMAC", hash: "SHA-256" };
    function u(e, t) {
      if (e.length !== t)
        throw r("err")("Signal expected " + t + " bytes, given " + e.length);
      return e;
    }
    function c(e, t) {
      return u(new Uint8Array(e), t);
    }
    function d(e) {
      var t = e.buffer,
        n = e.byteOffset,
        r = e.length;
      return n === 0 && r === t.byteLength ? t : t.slice(n, n + r);
    }
    function m(e, t) {
      return e.readByteArrayView(t);
    }
    function p(e) {
      return new Uint8Array(e);
    }
    function _(e, t, n) {
      if (e.length - t < n)
        throw r("err")(
          "Can not split off " +
            n +
            " bytes from index " +
            t +
            " of " +
            e.length +
            " bytes",
        );
      return e.slice(t, t + n);
    }
    function f(e) {
      var t = e === "extendedRange" ? 2147483646 : 16380;
      return o("WACryptoUtils").randomNumberLessThan(t) + 1;
    }
    function g(e) {
      return b(e);
    }
    function h(e) {
      return o("WAParsableXmlNode").convertBytesToUint(e, 4);
    }
    function y() {
      var e = 2147483647;
      return o("WACryptoUtils").randomNumberLessThan(e) + 1;
    }
    function C(e) {
      return b(e);
    }
    function b(e, t, n) {
      if (
        (t === void 0 && (t = 0),
        n === void 0 && (n = 4294967296),
        typeof e == "number" && t <= e && e < n && Math.floor(e) === e)
      )
        return e;
      throw r("err")(
        "Expected integer in range [" + t + ", " + n + "), given " + String(e),
      );
    }
    function v(e, t) {
      return o("encodeProtobuf").encodeProtobuf(e, t).readByteArrayView();
    }
    function S(e, t, n) {
      return n(o("decodeProtobuf").decodeProtobuf(e, t));
    }
    function R(e, t, n, r) {
      return o("WACryptoHkdf")
        .extractWithSaltAndExpand(e, t, n, r)
        .then(function (e) {
          return new Uint8Array(e);
        });
    }
    function L(t, n) {
      var r, a;
      return (
        n === "hmac-sha256"
          ? ((r = s), (a = ["sign"]))
          : ((r = e), (a = ["encrypt", "decrypt"])),
        o("WACryptoDependencies")
          .getCrypto()
          .subtle.importKey("raw", t, r, !1, a)
      );
    }
    function E(e) {
      return e;
    }
    ((l.HMAC_SHA256 = s),
      (l.ensureSize = u),
      (l.toBytes = c),
      (l.toBuffer = d),
      (l.readBytes = m),
      (l.makeBytes = p),
      (l.sliceBytes = _),
      (l.makeRegistrationId = f),
      (l.castRegistrationId = g),
      (l.castRegistrationIdFromBytes = h),
      (l.makeSenderKeyId = y),
      (l.castSenderKeyId = C),
      (l.ensureIntInRange = b),
      (l.encodeSignalProto = v),
      (l.decodeSignalProto = S),
      (l.hkdf = R),
      (l.makeCryptoKey = L),
      (l.castToByteEncoded = E));
  },
  98,
);
