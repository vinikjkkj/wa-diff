__d(
  "WAWebAeaGossipRules",
  ["$InternalEnum", "WAWebAeaAccountState"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      UNCHANGED: "unchanged",
      STORE: "store",
      REFRESH: "refresh",
    });
    function s(e) {
      var t,
        n =
          (t = e.accountEncryptionAttestation) == null ? void 0 : t.accountType;
      return {
        fromIcdc: c(e),
        fromAttestation:
          n == null
            ? null
            : o("WAWebAeaAccountState").aeaAccountStateFromAttestation(n),
      };
    }
    function u(t, n, r) {
      return (
        r === void 0 && (r = !1),
        r && n !== o("WAWebAeaAccountState").AeaAccountState.NON_E2EE
          ? e.REFRESH
          : t === n
            ? e.UNCHANGED
            : t === o("WAWebAeaAccountState").AeaAccountState.NOT_SET ||
                (t === o("WAWebAeaAccountState").AeaAccountState.E2EE &&
                  o("WAWebAeaAccountState").isAeaNonE2eeAccountState(n))
              ? e.STORE
              : e.REFRESH
      );
    }
    function c(e) {
      var t = e.deviceListMetadata;
      return t == null
        ? null
        : t.senderAccountType == null
          ? o("WAWebAeaAccountState").AeaAccountState.E2EE
          : o("WAWebAeaAccountState").aeaAccountStateFromAdv(
              t.senderAccountType,
            );
    }
    ((l.AeaGossipDecision = e),
      (l.readAeaGossipClaims = s),
      (l.decideAeaGossip = u));
  },
  98,
);
