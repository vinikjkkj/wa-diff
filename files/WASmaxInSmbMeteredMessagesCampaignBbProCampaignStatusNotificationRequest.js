__d(
  "WASmaxInSmbMeteredMessagesCampaignBbProCampaignStatusNotificationRequest",
  [
    "WAResultOrError",
    "WASmaxInSmbMeteredMessagesCampaignEnums",
    "WASmaxInSmbMeteredMessagesCampaignServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
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
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "to",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "business",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrString(n.value, "campaign_id");
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "status",
        o("WASmaxInSmbMeteredMessagesCampaignEnums")
          .ENUM_ACTIVE_COMPLETED_INREVIEW_NOTSENDING_OFF_PROCESSING_REJECTED_SCHEDULED_SENDINGLIMITED,
      );
      if (!s.success) return s;
      var u = o(
        "WASmaxInSmbMeteredMessagesCampaignServerNotificationMixin",
      ).parseServerNotificationMixin(e);
      return u.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                from: r.value,
                to: a.value,
                type: i.value,
                bbProCampaignCampaignId: l.value,
                bbProCampaignStatus: s.value,
              },
              u.value,
            ),
          )
        : u;
    }
    l.parseBbProCampaignStatusNotificationRequest = e;
  },
  98,
);
