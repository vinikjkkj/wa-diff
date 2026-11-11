__d(
  "WAWebAeaSendRules",
  [
    "$InternalEnum",
    "WAWebAeaAccountCategory",
    "WAWebAeaAccountState",
    "WAWebApiVerifiedBusinessName",
    "WAWebPrivacyModeSystemMsg",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      MATCH: "match",
      AUTO_UPGRADE: "auto_upgrade",
      AUTO_DOWNGRADE: "auto_downgrade",
      REJECT: "reject",
    });
    function s(e, t, n, r, a) {
      if (
        (r === void 0 && (r = !1),
        a === void 0 && (a = !1),
        o("WAWebAeaAccountCategory").isAeaBotAccount(e))
      )
        return o("WAWebAeaAccountState").AeaAccountState.NON_E2EE;
      var i = t.filter(function (t) {
        return t.isSameAccountAndAddressingMode(e);
      });
      return n === o("WAWebAeaAccountState").AeaAccountState.NON_E2EE
        ? n
        : a ||
            i.some(function (e) {
              return e.isHosted();
            })
          ? o("WAWebAeaAccountState").AeaAccountState.HYBRID_E2EE
          : r && n !== o("WAWebAeaAccountState").AeaAccountState.HYBRID_E2EE
            ? o("WAWebAeaAccountState").AeaAccountState.NON_E2EE
            : n != null
              ? n
              : i.length > 0
                ? o("WAWebAeaAccountState").AeaAccountState.E2EE
                : null;
    }
    function u(e) {
      if (e == null) return !1;
      var t = o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(
        o("WAWebApiVerifiedBusinessName").convertPrivacyModeFromStorageType(e),
      );
      return (
        t === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.BSP ||
        t === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.FB
      );
    }
    function c(t, n, r) {
      return (
        r === void 0 && (r = n),
        t === n ||
        (o("WAWebAeaAccountState").isAeaNonE2eeAccountState(t) &&
          o("WAWebAeaAccountState").isAeaNonE2eeAccountState(n)) ||
        (t === o("WAWebAeaAccountState").AeaAccountState.E2EE &&
          n === o("WAWebAeaAccountState").AeaAccountState.NOT_SET)
          ? e.MATCH
          : o("WAWebAeaAccountState").isAeaNonE2eeAccountState(t)
            ? n === o("WAWebAeaAccountState").AeaAccountState.E2EE
              ? e.AUTO_UPGRADE
              : e.REJECT
            : o("WAWebAeaAccountState").isAeaNonE2eeAccountState(n)
              ? r === o("WAWebAeaAccountState").AeaAccountState.NOT_SET
                ? e.AUTO_DOWNGRADE
                : e.REJECT
              : e.MATCH
      );
    }
    function d(t) {
      return t === o("WAWebAeaAccountState").AeaAccountState.NON_E2EE
        ? e.MATCH
        : e.REJECT;
    }
    ((l.AeaSendDecision = e),
      (l.inferAeaUserThreadStateForSend = s),
      (l.isNonE2eeBusinessPrivacyMode = u),
      (l.decideAeaUserSend = c),
      (l.decideAeaBotSend = d));
  },
  98,
);
