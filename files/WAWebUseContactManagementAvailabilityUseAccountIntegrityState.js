__d(
  "WAWebUseContactManagementAvailabilityUseAccountIntegrityState",
  [
    "$InternalEnum",
    "WAWebPrimaryFeaturesGetters",
    "react-compiler-runtime",
    "useWAWebPrimaryFeaturesValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored(["PENDING", "TIMELOCK", "PASS"]);
    function s() {
      var t = o("react-compiler-runtime").c(1),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = [
            o("WAWebPrimaryFeaturesGetters").getIsAccountIntegrityStatePending,
            o("WAWebPrimaryFeaturesGetters").getIsAccountIntegrityStateTimelock,
          ]),
          (t[0] = n))
        : (n = t[0]);
      var r = o("useWAWebPrimaryFeaturesValues").usePrimaryFeaturesValues(n),
        a = r[0],
        i = r[1];
      return i ? e.TIMELOCK : a ? e.PENDING : e.PASS;
    }
    ((l.AccountIntegrityState = e), (l.useAccountIntegrityState = s));
  },
  98,
);
