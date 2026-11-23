__d(
  "WAWebHatchAttestationCloudflare",
  [
    "WAWebHatchAttestationBytes",
    "WAWebHatchAttestationCloudflareProof",
    "WAWebHatchAttestationCrypto",
    "WAWebHatchAttestationErrors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "staging.hatch_image",
      s = "prod.hatch_image",
      u = 2592e6,
      c = [
        "2bbfbb39997fdb95feee40ef9f8827de0256732be06f64ed6408cc7e97c7f4d4",
        "0c7c1f082320fb44c7e042b439f3388dbdef34655fea73bab249aca54e8b31bb",
      ],
      d = [
        "1b08e1456cee360c0ef7aa15f58f7e4b92754c6758255386dc3a0646f85dccb1",
        "d2de1763b91e40260abd0ab90d2ed30cb8e274f4668665ddc75ee0cb488d1ece",
      ].concat(c),
      m = "e5e76bcf43baf915430e9d5f430af0065b0a44aec5e5de42f8a9dbca871524ff";
    function p() {
      return { keys: S(c) };
    }
    function _() {
      return { keys: S(d) };
    }
    function f() {
      return { keys: S([m].concat(d)) };
    }
    function g() {
      return { trust: p(), trustedNamespaces: [s], maxAgeMs: u };
    }
    function h() {
      return { trust: _(), trustedNamespaces: [s, e], maxAgeMs: u };
    }
    function y() {
      return babelHelpers.extends({}, h(), { trust: f() });
    }
    async function C(e, t, n, r) {
      var a = o("WAWebHatchAttestationCloudflareProof").parseCloudflareProof(t);
      if (!n.trustedNamespaces.includes(a.namespace))
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "PolicyViolation",
          "Cloudflare namespace " +
            a.namespace +
            " is not trusted for the image manifest",
        );
      var i = await o("WAWebHatchAttestationBytes").sha256(e);
      if (!o("WAWebHatchAttestationBytes").bytesEqual(a.digest, i))
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "TransparencyDigestMismatch",
          "artifact=" +
            o("WAWebHatchAttestationBytes").bytesToHex(i) +
            ", signed=" +
            o("WAWebHatchAttestationBytes").bytesToHex(a.digest),
        );
      if (n.trust.keys.length === 0)
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "TransparencyTrustUnavailable",
          "no pinned Cloudflare keys",
        );
      if (!(await b(a, n.trust)))
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "TransparencySignatureInvalid",
          "Cloudflare Plexi signature does not verify with any pinned key",
        );
      return (
        v(a.timestampUnixMs, r, n),
        {
          namespace: a.namespace,
          digest: i,
          epoch: a.epoch,
          timestampUnixMs: a.timestampUnixMs,
        }
      );
    }
    async function b(e, t) {
      var n = o(
          "WAWebHatchAttestationCloudflareProof",
        ).encodeCloudflareSignatureMessage(e),
        r = await Promise.all(
          t.keys.map(function (t) {
            return o("WAWebHatchAttestationCrypto").verifyEd25519Raw(
              t,
              n,
              e.signature,
            );
          }),
        );
      return r.includes(!0);
    }
    function v(e, t, n) {
      if (!Number.isSafeInteger(t) || t < 0)
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "TransparencyTrustUnavailable",
          "verification time must be a non-negative safe-integer Unix millisecond value",
        );
      if (!Number.isSafeInteger(n.maxAgeMs) || n.maxAgeMs <= 0)
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "TransparencyTrustUnavailable",
          "Cloudflare maxAgeMs must be a positive safe integer",
        );
      if (e > Number.MAX_SAFE_INTEGER - n.maxAgeMs)
        throw R(
          "Cloudflare proof expiration exceeds JavaScript's safe integer range",
        );
      var r = e + n.maxAgeMs;
      if (t > r)
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "PolicyViolation",
          "Cloudflare proof expired at " + r + ", verification time is " + t,
        );
    }
    function S(e) {
      return e.map(function (e) {
        var t = o("WAWebHatchAttestationBytes").hexToBytesOrNull(e);
        if (t == null) throw R("Cloudflare public key is not valid hex");
        return t;
      });
    }
    function R(e) {
      return new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
        "TransparencyBundleMalformed",
        e,
      );
    }
    ((l.productionCloudflareTrust = p),
      (l.stagingCloudflareTrust = _),
      (l.debugCloudflareTrust = f),
      (l.productionCloudflarePolicy = g),
      (l.stagingCloudflarePolicy = h),
      (l.debugCloudflarePolicy = y),
      (l.verifyCloudflare = C));
  },
  98,
);
