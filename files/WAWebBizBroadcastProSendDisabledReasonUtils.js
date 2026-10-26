__d(
  "WAWebBizBroadcastProSendDisabledReasonUtils",
  [
    "WAWebBizBroadcastProAudienceStrings",
    "WAWebBizBroadcastProBudgetStrings",
    "WAWebBizBroadcastProCreationStrings",
    "WAWebBizBroadcastProCurrencyUtils",
    "WAWebBizBroadcastProRestrictionStrings",
    "WAWebBizBroadcastsCreationStrings",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t, n, r, o;
      return e.isCreatingCampaign
        ? null
        : (t =
              (n = (r = (o = s(e)) != null ? o : u(e)) != null ? r : c(e)) !=
              null
                ? n
                : d(e)) != null
          ? t
          : m(e);
    }
    function s(e) {
      var t = e.hasRequiredAction,
        n = e.isRestricted,
        r = e.upsellBusinessVerification;
      return n
        ? o("WAWebBizBroadcastProRestrictionStrings").getRestrictionBannerBody(
            r,
          )
        : t
          ? o(
              "WAWebBizBroadcastsCreationStrings",
            ).getPaymentPendingDisabledReason()
          : null;
    }
    function u(e) {
      var t = e.hasInvalidAudience,
        n = e.isAudienceBelowFloor,
        r = e.minAudienceRecipients;
      return t
        ? o(
            "WAWebBizBroadcastsCreationStrings",
          ).getChooseAudienceDisabledReason()
        : n
          ? o(
              "WAWebBizBroadcastProAudienceStrings",
            ).getAudienceBelowFloorBannerBody(r)
          : null;
    }
    function c(e) {
      var t = e.hasNoContent,
        n = e.hasUnsupportedAttachment;
      return n
        ? o(
            "WAWebBizBroadcastProCreationStrings",
          ).getUnsupportedAttachmentDisabledReason()
        : t
          ? o(
              "WAWebBizBroadcastsCreationStrings",
            ).getMessageEmptyDisabledReason()
          : null;
    }
    function d(e) {
      var t = e.currency,
        n = e.isMaxBidValid,
        r = e.maxBid;
      return r == null
        ? o("WAWebBizBroadcastProBudgetStrings").getMaxBidRequiredError()
        : r <= 0
          ? o("WAWebBizBroadcastProBudgetStrings").getMaxBidMustBeAboveError(
              o("WAWebBizBroadcastProCurrencyUtils").formatCurrencyAmount(0, t),
            )
          : n
            ? null
            : o(
                "WAWebBizBroadcastProCreationStrings",
              ).getInvalidMaxBidDisabledReason();
    }
    function m(e) {
      var t = e.currency,
        n = e.hasNoBudget;
      return n
        ? o("WAWebBizBroadcastProBudgetStrings").getBudgetMustBeAboveError(
            o("WAWebBizBroadcastProCurrencyUtils").formatCurrencyAmount(0, t),
          )
        : null;
    }
    l.getSendDisabledReason = e;
  },
  98,
);
