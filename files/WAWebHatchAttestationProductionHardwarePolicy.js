__d(
  "WAWebHatchAttestationProductionHardwarePolicy",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      return {
        allowDebug: !1,
        requiredVmpl: 0,
        tcbFloors: [
          {
            stepping: { famId: 25, modId: 17, step: 1 },
            floor: {
              bootloader: 12,
              tee: 0,
              snp: 28,
              microcode: 88,
              fmc: null,
            },
          },
          {
            stepping: { famId: 25, modId: 160, step: 2 },
            floor: {
              bootloader: 12,
              tee: 0,
              snp: 28,
              microcode: 28,
              fmc: null,
            },
          },
          {
            stepping: { famId: 26, modId: 17, step: 0 },
            floor: { bootloader: 3, tee: 2, snp: 5, microcode: 84, fmc: 1 },
          },
        ],
        allowMigration: !1,
        denyGuestSmt: !0,
        denyPlatformSmt: !0,
        requirePageSwapDisable: !0,
        requireAliasCheck: !0,
      };
    }
    function l() {
      return e();
    }
    ((i.productionHardwarePolicy = e), (i.stagingHardwarePolicy = l));
  },
  66,
);
