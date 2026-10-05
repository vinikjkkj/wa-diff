__d(
  "WAWebCommonAdsTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = n("$InternalEnum").Mirrored(["WEAK", "STRONG"]),
      l = {
        ACTIVE: "ACTIVE",
        COMPLETED: "COMPLETED",
        CREATING: "CREATING",
        EXTENDABLE: "EXTENDABLE",
        FINISHED: "FINISHED",
        LIMITED_DELIVERY: "LIMITED_DELIVERY",
        NOT_DELIVERING: "NOT_DELIVERING",
        PAUSED: "PAUSED",
        PAUSING: "PAUSING",
        PAYMENT_PENDING: "PAYMENT_PENDING",
        PENDING: "PENDING",
        RECOMMENDATION: "RECOMMENDATION",
        REJECTED: "REJECTED",
        RESUMING: "RESUMING",
        SCHEDULED: "SCHEDULED",
        UNABLE_TO_CREATE: "ERROR",
        UNKNOWN: "UNKNOWN",
      };
    function s(t) {
      var n = t.bp_id,
        r = t.token,
        o = t.tokenStrength,
        a = o === void 0 ? e.STRONG : o,
        i = t.type,
        l = i === void 0 ? "WAA" : i;
      return l === "FB"
        ? { bp_id: n, token: r, type: l }
        : { bp_id: n, token: r, tokenStrength: a, type: l };
    }
    ((i.WAAIdentityTokenStrengthEnum = e),
      (i.BoostingStatus = l),
      (i.asAdAccountToken = s));
  },
  66,
);
