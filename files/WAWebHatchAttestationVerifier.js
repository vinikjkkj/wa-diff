__d(
  "WAWebHatchAttestationVerifier",
  [
    "WAWebHatchAttestationBinding",
    "WAWebHatchAttestationBundle",
    "WAWebHatchAttestationCloudflare",
    "WAWebHatchAttestationErrors",
    "WAWebHatchAttestationHardwarePolicy",
    "WAWebHatchAttestationManifest",
    "WAWebHatchAttestationRevocation",
    "WAWebHatchAttestationSnpChain",
    "WAWebHatchAttestationSnpCrl",
    "WAWebHatchAttestationSnpReport",
    "WAWebHatchAttestationVcekCrossCheck",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.verifyWithNonce = function (t, n, r) {
          return this.verifyAtWithNonce(t, n, r, Date.now());
        }),
        (t.verifyAtWithNonce = function (t, n, r, o) {
          return this.$2({
            bundleBytes: t,
            expectedNonce: r.slice(),
            expectedPubkey: n,
            verificationTimeUnixMs: o,
          });
        }),
        (t.verifyWithoutFreshness = function (t, n) {
          return this.verifyAtWithoutFreshness(t, n, Date.now());
        }),
        (t.verifyAtWithoutFreshness = function (t, n, r) {
          return this.$2({
            bundleBytes: t,
            expectedNonce: null,
            expectedPubkey: n,
            verificationTimeUnixMs: r,
          });
        }),
        (t.$2 = async function (t) {
          var e,
            n,
            r = t.bundleBytes,
            a = t.expectedNonce,
            i = t.expectedPubkey,
            l = t.verificationTimeUnixMs,
            d = o("WAWebHatchAttestationBundle").decodeBundle(r);
          if (
            d.platform !== o("WAWebHatchAttestationBundle").PLATFORM_AMD_SEV_SNP
          )
            throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
              "PlatformMismatch",
              "expected AMD_SEV_SNP, actual platform=" + Number(d.platform),
            );
          var m = o("WAWebHatchAttestationBundle").decodeReportDataInput(
            d.reportDataInput,
          );
          o("WAWebHatchAttestationBinding").checkExpectedPubkey(m, i);
          var p = o("WAWebHatchAttestationBundle").extractSnpReport(d),
            _ = p.certs,
            f = p.report,
            g = o("WAWebHatchAttestationSnpReport").parseReport(f);
          (await o("WAWebHatchAttestationBinding").checkBinding(
            d.reportDataInput,
            g,
          ),
            o("WAWebHatchAttestationBinding").checkTrailZeros(g),
            await o("WAWebHatchAttestationSnpChain").verifyChain(
              g,
              _.vcekPem,
              _.askPem,
              l,
            ),
            c(l),
            await o("WAWebHatchAttestationSnpCrl").verifyCrlAt(
              _.askPem,
              _.crl,
              l,
            ),
            await o("WAWebHatchAttestationVcekCrossCheck").crossCheckVcekReport(
              _.vcekPem,
              g,
            ),
            a != null && o("WAWebHatchAttestationBinding").checkNonce(m, a),
            o("WAWebHatchAttestationHardwarePolicy").checkPolicy(
              g,
              this.$1.hardware,
            ));
          var h = o("WAWebHatchAttestationManifest").parseAndCheckManifest(
              d.imageManifest,
              g,
            ),
            y = await s(
              d.imageManifest,
              (e = (n = d.transparencyProof) == null ? void 0 : n.proof) != null
                ? e
                : null,
              this.$1.transparency,
              l,
            );
          if (d.revocationEvidence == null)
            throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
              "RevocationEvidenceMissing",
              "revocation evidence is required but missing",
            );
          var C = await o("WAWebHatchAttestationRevocation").verifyImage(
            d.revocationEvidence,
            y,
            this.$1.revocation,
            l,
          );
          return {
            platform: d.platform,
            boundPubkey: u(m),
            boundNonce: m.clientNonce.slice(),
            measurement: g.measurement,
            imageManifest: h,
            chipId: g.chipId,
            transparency: y,
            revocation: C,
          };
        }),
        e
      );
    })();
    async function s(e, t, n, r) {
      if (n.case === "disabled") return { case: "disabled" };
      if (t == null)
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "TransparencyProofInvalid",
          "policy requires a transparency proof",
        );
      if (t.case === "sigstore")
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "TransparencyProofInvalid",
          "policy does not accept Sigstore transparency proofs",
        );
      return {
        case: "cloudflare",
        value: await o("WAWebHatchAttestationCloudflare").verifyCloudflare(
          e,
          t.value,
          n.policy,
          r,
        ),
      };
    }
    function u(e) {
      if (
        e.x25519PublicKey.length !==
        o("WAWebHatchAttestationBundle").X25519_PUBLIC_KEY_LEN
      )
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "InvalidProto",
          "x25519_public_key is " +
            e.x25519PublicKey.length +
            " bytes, expected " +
            o("WAWebHatchAttestationBundle").X25519_PUBLIC_KEY_LEN,
        );
      return e.x25519PublicKey.slice();
    }
    function c(e) {
      if (!Number.isSafeInteger(e) || e < 0)
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "SnpCrlInvalid",
          "verification time must be a non-negative safe-integer Unix millisecond value",
        );
    }
    l.HatchAttestationVerifier = e;
  },
  98,
);
