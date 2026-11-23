__d(
  "WAWebHatchAttestationApi",
  [
    "WAWebHatchAttestationChipPin",
    "WAWebHatchAttestationErrors",
    "WAWebHatchAttestationPolicy",
    "WAWebHatchAttestationVerifier",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = e.attestationBundle,
        n = e.clientNonce,
        r = e.expectedChipIds,
        a = e.serverStaticPublicKey,
        i = e.tier,
        l = r == null ? void 0 : r.slice();
      if (l != null && n == null)
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "NonceMissing",
          "chip-pinned attestation requires a handshake challenge",
        );
      var s = new (o("WAWebHatchAttestationVerifier").HatchAttestationVerifier)(
          o("WAWebHatchAttestationPolicy").policyForTier(i),
        ),
        u =
          n == null
            ? await s.verifyWithoutFreshness(t, a)
            : await s.verifyWithNonce(t, a, n);
      return l == null
        ? "accepted"
        : (o("WAWebHatchAttestationChipPin").checkExpectedChipIds(u.chipId, l),
          "accepted_chip_pinned");
    }
    l.verifyHatchCvmAttestation = e;
  },
  98,
);
