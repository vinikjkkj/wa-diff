__d(
  "WAWebHatchAttestationPolicy",
  [
    "WAWebHatchAttestationCloudflare",
    "WAWebHatchAttestationProductionHardwarePolicy",
    "WAWebHatchAttestationRevocation",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return { case: "disabled" };
    }
    function s(e) {
      return { case: "cloudflare", policy: e };
    }
    function u() {
      return s(
        o("WAWebHatchAttestationCloudflare").productionCloudflarePolicy(),
      );
    }
    function c() {
      return s(o("WAWebHatchAttestationCloudflare").stagingCloudflarePolicy());
    }
    function d() {
      return s(o("WAWebHatchAttestationCloudflare").debugCloudflarePolicy());
    }
    function m() {
      return {
        hardware: o(
          "WAWebHatchAttestationProductionHardwarePolicy",
        ).productionHardwarePolicy(),
        transparency: u(),
        revocation: o(
          "WAWebHatchAttestationRevocation",
        ).productionRevocationPolicy(),
      };
    }
    function p() {
      return {
        hardware: o(
          "WAWebHatchAttestationProductionHardwarePolicy",
        ).stagingHardwarePolicy(),
        transparency: c(),
        revocation: o(
          "WAWebHatchAttestationRevocation",
        ).stagingRevocationPolicy(),
      };
    }
    function _() {
      return {
        hardware: o(
          "WAWebHatchAttestationProductionHardwarePolicy",
        ).productionHardwarePolicy(),
        transparency: d(),
        revocation: o(
          "WAWebHatchAttestationRevocation",
        ).debugRevocationPolicy(),
      };
    }
    function f(e) {
      return e === "prod"
        ? m()
        : e === "staging"
          ? p()
          : e === "debug"
            ? _()
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    ((l.disabledTransparencyPolicy = e),
      (l.cloudflareTransparencyPolicy = s),
      (l.productionTransparencyPolicy = u),
      (l.stagingTransparencyPolicy = c),
      (l.debugTransparencyPolicy = d),
      (l.productionPolicy = m),
      (l.stagingPolicy = p),
      (l.debugPolicy = _),
      (l.policyForTier = f));
  },
  98,
);
