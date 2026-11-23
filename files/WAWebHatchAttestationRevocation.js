__d(
  "WAWebHatchAttestationRevocation",
  [
    "WAWebHatchAttestationBytes",
    "WAWebHatchAttestationCloudflare",
    "WAWebHatchAttestationErrors",
    "WAWebHatchAttestationRevocationList",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 32768,
      s = 1440 * 60 * 1e3,
      u = 300 * 1e3,
      c = 255,
      d = "prod.pc.revocation_list",
      m = "pc.revocation_list",
      p = 32;
    function _() {
      return {
        trust: o("WAWebHatchAttestationCloudflare").productionCloudflareTrust(),
        trustedNamespaces: [d],
        maxAgeMs: s,
        maxFutureSkewMs: u,
      };
    }
    function f() {
      return babelHelpers.extends({}, _(), {
        trust: o("WAWebHatchAttestationCloudflare").stagingCloudflareTrust(),
        trustedNamespaces: [d, m],
      });
    }
    function g() {
      return babelHelpers.extends({}, f(), {
        trust: o("WAWebHatchAttestationCloudflare").debugCloudflareTrust(),
      });
    }
    async function h(e, t, n, r) {
      var a;
      if (t.case !== "cloudflare")
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "RevocationPolicyInvalid",
          "revocation requires an authenticated image manifest",
        );
      var i = t.value,
        l = await y({ evidence: e, policy: n, verificationTimeUnixMs: r }),
        s = l.list,
        u = l.verified,
        c = ((a = s.get(i.namespace)) != null ? a : []).some(function (e) {
          return o("WAWebHatchAttestationBytes").bytesEqual(e.digest, i.digest);
        });
      if (c)
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "ArtifactRevoked",
          "namespace=" +
            i.namespace +
            ", digest=" +
            o("WAWebHatchAttestationBytes").bytesToHex(i.digest),
        );
      return u;
    }
    async function y(t) {
      var n,
        r = t.evidence,
        a = t.policy,
        i = t.verificationTimeUnixMs;
      if (r.encodedLength > e)
        throw v("revocation evidence exceeds 32768 bytes");
      var l = (n = r.transparencyProof) == null ? void 0 : n.proof;
      if ((l == null ? void 0 : l.case) !== "cloudflare")
        throw v("missing Cloudflare revocation proof");
      var s = await o("WAWebHatchAttestationCloudflare").verifyCloudflare(
        r.serializedRl,
        l.value,
        {
          trust: a.trust,
          trustedNamespaces: a.trustedNamespaces,
          maxAgeMs: a.maxAgeMs,
        },
        i,
      );
      if (s.timestampUnixMs - i > a.maxFutureSkewMs)
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "RevocationProofFromFuture",
          "revocation proof timestamp is too far in the future",
        );
      var u;
      try {
        u = o("WAWebHatchAttestationRevocationList").decodeRevocationList(
          r.serializedRl,
        );
      } catch (e) {
        throw v(
          "invalid revocation list protobuf: " +
            o("WAWebHatchAttestationErrors").errorMessage(e),
        );
      }
      return (
        C(u),
        {
          list: u,
          verified: {
            namespace: s.namespace,
            epoch: s.epoch,
            timestampUnixMs: s.timestampUnixMs,
          },
        }
      );
    }
    function C(e) {
      e.forEach(function (e, t) {
        if (!b(t)) throw v("invalid revocation namespace");
        for (var n of e)
          if (n.namespaceName !== t || n.digest.length !== p)
            throw v("revoked artifact namespace or digest is invalid");
      });
    }
    function b(e) {
      var t = new TextEncoder().encode(e).length;
      return t > 0 && t <= c;
    }
    function v(e) {
      return new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
        "RevocationEvidenceMalformed",
        e,
      );
    }
    ((l.MAX_REVOCATION_EVIDENCE_BYTES = e),
      (l.productionRevocationPolicy = _),
      (l.stagingRevocationPolicy = f),
      (l.debugRevocationPolicy = g),
      (l.verifyImage = h));
  },
  98,
);
