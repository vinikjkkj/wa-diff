__d(
  "WAWebHatchAttestationBinding",
  ["WAWebHatchAttestationBytes", "WAWebHatchAttestationErrors"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 32;
    function s(e, t) {
      if (!o("WAWebHatchAttestationBytes").bytesEqual(e.x25519PublicKey, t))
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "PubkeyMismatch",
          "expected public key does not match bundle",
        );
    }
    function u(t, n) {
      if (t.clientNonce.length === 0)
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "NonceMissing",
          "bundle carries no challenge nonce but the policy requires one",
        );
      if (
        n.length !== e ||
        !o("WAWebHatchAttestationBytes").bytesEqual(t.clientNonce, n)
      )
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "NonceMismatch",
          "challenge nonce does not match the one sent in the handshake",
        );
    }
    async function c(e, t) {
      var n = await o("WAWebHatchAttestationBytes").sha256(e);
      if (
        !o("WAWebHatchAttestationBytes").bytesEqual(
          n,
          t.reportData.subarray(0, 32),
        )
      )
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "BindingMismatch",
          "binding hash does not match report_data",
        );
    }
    function d(e) {
      if (
        e.reportData.subarray(32, 64).some(function (e) {
          return e !== 0;
        })
      )
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "ReportDataTrailNotZero",
          "report_data trailing 32 bytes are not zero",
        );
    }
    ((l.checkExpectedPubkey = s),
      (l.checkNonce = u),
      (l.checkBinding = c),
      (l.checkTrailZeros = d));
  },
  98,
);
