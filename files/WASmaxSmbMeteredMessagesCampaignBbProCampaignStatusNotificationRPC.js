__d(
  "WASmaxSmbMeteredMessagesCampaignBbProCampaignStatusNotificationRPC",
  [
    "WAResultOrError",
    "WASmaxInSmbMeteredMessagesCampaignEnums",
    "WASmaxInSmbMeteredMessagesCampaignServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = s(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing(
            "BbProCampaignStatusNotification",
            { Request: t },
          ),
        );
      return { parsedRequest: t.value };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "bb_pro_campaign");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "s.whatsapp.net",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "business",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrString(n.value, "campaign_id");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "status",
        o("WASmaxInSmbMeteredMessagesCampaignEnums")
          .ENUM_ACTIVE_COMPLETED_INREVIEW_NOTSENDING_OFF_PROCESSING_REJECTED_SCHEDULED_SENDINGLIMITED,
      );
      if (!l.success) return l;
      var s = o(
        "WASmaxInSmbMeteredMessagesCampaignServerNotificationMixin",
      ).parseServerNotificationMixin(e);
      return s.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                from: r.value,
                type: a.value,
                bbProCampaignCampaignId: i.value,
                bbProCampaignStatus: l.value,
              },
              s.value,
            ),
          )
        : s;
    }
    ((l.receiveBbProCampaignStatusNotificationRPC = e),
      (l.parseBbProCampaignStatusNotificationRequest = s));
  },
  98,
);
