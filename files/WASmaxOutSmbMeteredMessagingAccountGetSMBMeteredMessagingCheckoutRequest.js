__d(
  "WASmaxOutSmbMeteredMessagingAccountGetSMBMeteredMessagingCheckoutRequest",
  [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxOutSmbMeteredMessagingAccountHackBaseIQGetRequestMixin",
    "WASmaxOutSmbMeteredMessagingAccountToUserMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxOutSmbMeteredMessagingAccountToUserMixin",
      ).mergeToUserMixin(o("WASmaxJsx").smax("to", null), e);
      return t;
    }
    function s() {
      var e = o("WASmaxJsx").smax("use_ad_account", null);
      return e;
    }
    function u() {
      var e = o("WASmaxJsx").smax("skip_dedupe", null);
      return e;
    }
    function c(e) {
      var t = e.offerId,
        n = o("WASmaxJsx").smax("offer", { id: o("WAWap").CUSTOM_STRING(t) });
      return n;
    }
    function d(e) {
      var t = e.campaignFreeReservedMsgs,
        n = e.campaignSendTimestamp,
        r = o("WASmaxJsx").smax("campaign", {
          free_reserved_msgs: o("WAWap").INT(t),
          send_timestamp: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, n),
        });
      return r;
    }
    function m(e) {
      var t = e.campaignArgs,
        n = o("WASmaxJsx").smax(
          "pending_campaigns",
          null,
          o("WASmaxChildren").REPEATED_CHILD(d, t, 0, 200),
        );
      return n;
    }
    function p(t) {
      var n,
        r = t.toArgs,
        a = t.hasUseAdAccount,
        i = t.hasSkipDedupe,
        l = t.offerArgs,
        d = t.pendingCampaignsArgs,
        p = o(
          "WASmaxOutSmbMeteredMessagingAccountHackBaseIQGetRequestMixin",
        ).mergeHackBaseIQGetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            { xmlns: "w:biz", smax_id: o("WAWap").INT(120) },
            o("WASmaxJsx").smax(
              "participants",
              null,
              (n = o("WASmaxChildren")).REPEATED_CHILD(e, r, 1, 2e3),
            ),
            n.HAS_OPTIONAL_CHILD(s, a),
            n.HAS_OPTIONAL_CHILD(u, i),
            n.OPTIONAL_CHILD(c, l),
            n.OPTIONAL_CHILD(m, d),
          ),
          t,
        );
      return p;
    }
    ((l.makeGetSMBMeteredMessagingCheckoutRequestParticipantsTo = e),
      (l.makeGetSMBMeteredMessagingCheckoutRequestUseAdAccount = s),
      (l.makeGetSMBMeteredMessagingCheckoutRequestSkipDedupe = u),
      (l.makeGetSMBMeteredMessagingCheckoutRequestOffer = c),
      (l.makeGetSMBMeteredMessagingCheckoutRequestPendingCampaignsCampaign = d),
      (l.makeGetSMBMeteredMessagingCheckoutRequestPendingCampaigns = m),
      (l.makeGetSMBMeteredMessagingCheckoutRequest = p));
  },
  98,
);
