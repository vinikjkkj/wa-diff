__d(
  "WAWebAeaAccountState",
  ["$InternalEnum", "WAWebProtobufsAdv.pb", "WAWebProtobufsAea.pb"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      NOT_SET: "not_set",
      E2EE: "e2ee",
      HYBRID_E2EE: "hybrid_e2ee",
      NON_E2EE: "non_e2ee",
    });
    function s(t) {
      return t === e.HYBRID_E2EE || t === e.NON_E2EE;
    }
    function u(t) {
      var n = e.cast(t);
      return n != null && s(n);
    }
    function c(t) {
      return t ===
        o("WAWebProtobufsAea.pb").NonE2EEAttestation$AccountType.HYBRID_E2EE
        ? e.HYBRID_E2EE
        : t ===
            o("WAWebProtobufsAea.pb").NonE2EEAttestation$AccountType.NON_E2EE
          ? e.NON_E2EE
          : null;
    }
    function d(t) {
      if (t == null) return null;
      var n = o("WAWebProtobufsAdv.pb").ADVEncryptionType.cast(t);
      return n == null
        ? null
        : n === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED
          ? e.HYBRID_E2EE
          : n === o("WAWebProtobufsAdv.pb").ADVEncryptionType.NON_E2EE
            ? e.NON_E2EE
            : n === o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE
              ? e.E2EE
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      n,
                  );
                })();
    }
    ((l.AeaAccountState = e),
      (l.isAeaNonE2eeAccountState = s),
      (l.isAeaNonE2eeThreadState = u),
      (l.aeaAccountStateFromAttestation = c),
      (l.aeaAccountStateFromAdv = d));
  },
  98,
);
