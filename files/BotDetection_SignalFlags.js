__d(
  "BotDetection_SignalFlags",
  [],
  function (t, n, r, o, a, i) {
    var e = Object.freeze({
      ACTIVE: 1,
      DYNAMIC: 2,
      BIOMETRIC: 4,
      DEPRECATED: 8,
      WEB: 16,
      IOS_NATIVE: 32,
      ANDROID_NATIVE: 64,
      EQUAL_BY_VALUE: 128,
      EQUAL_BY_CONTEXT: 256,
      EQUAL_BY_TIMESTAMP: 512,
      SUSPICIOUS_TIER: 1024,
      PARANOID_TIER: 2048,
      RANDOM_SAMPLE_TIER_DEPRECATED: 4096,
      BENIGN_TIER: 262144,
      EMPLOYEES_TIER: 524288,
      BUNDLE: 8192,
      ONSITE: 16384,
      OFFSITE: 32768,
      OFFSITE_SENSITIVE: 65536,
      SENSITIVE: 131072,
    });
    i.default = e;
  },
  66,
);
