__d(
  "WAWebCommonAdsTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = n("$InternalEnum").Mirrored(["WEAK", "STRONG"]),
      l = n("$InternalEnum").Mirrored([
        "ACTIVE",
        "CREATING",
        "EXTENDABLE",
        "FINISHED",
        "LIMITED_DELIVERY",
        "NOT_DELIVERING",
        "PAUSED",
        "PENDING",
        "REJECTED",
        "SCHEDULED",
        "ERROR",
        "UNKNOWN",
      ]),
      s = {
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
    function u(t, n, r, o) {
      return (
        r === void 0 && (r = "WAA"),
        o === void 0 && (o = e.STRONG),
        r === "FB"
          ? { bp_id: n, token: t, type: r }
          : { bp_id: n, token: t, tokenStrength: o, type: r }
      );
    }
    ((i.WAAIdentityTokenStrengthEnum = e),
      (i.BoostingStatusEnum = l),
      (i.BoostingStatus = s),
      (i.asAdAccountToken = u));
  },
  66,
);
