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
        COMPLETED: "COMPLETED",
        EXTENDABLE: "EXTENDABLE",
        PENDING: "PENDING",
        ACTIVE: "ACTIVE",
        SCHEDULED: "SCHEDULED",
        REJECTED: "REJECTED",
        FINISHED: "FINISHED",
        PAUSED: "PAUSED",
        NOT_DELIVERING: "NOT_DELIVERING",
        UNABLE_TO_CREATE: "ERROR",
        PAYMENT_PENDING: "PAYMENT_PENDING",
        CREATING: "CREATING",
        PAUSING: "PAUSING",
        RESUMING: "RESUMING",
        RECOMMENDATION: "RECOMMENDATION",
        LIMITED_DELIVERY: "LIMITED_DELIVERY",
        UNKNOWN: "UNKNOWN",
      };
    function u(e) {
      return e;
    }
    function c(e) {
      return e;
    }
    function d(t, n, r, o) {
      return (
        r === void 0 && (r = "WAA"),
        o === void 0 && (o = e.STRONG),
        r === "FB"
          ? { type: r, token: t, bp_id: n }
          : { type: r, token: t, bp_id: n, tokenStrength: o }
      );
    }
    ((i.WAAIdentityTokenStrengthEnum = e),
      (i.BoostingStatusEnum = l),
      (i.BoostingStatus = s),
      (i.asAdId = u),
      (i.asAdCampaignGroupId = c),
      (i.asAdAccountToken = d));
  },
  66,
);
