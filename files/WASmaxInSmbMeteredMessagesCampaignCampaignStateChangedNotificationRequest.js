__d(
  "WASmaxInSmbMeteredMessagesCampaignCampaignStateChangedNotificationRequest",
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
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "mm_campaign");
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
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        n.value,
        "ad_id",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        n.value,
        "ad_group_id",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        n.value,
        "ad_creative_id",
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "status",
        o("WASmaxInSmbMeteredMessagesCampaignEnums")
          .ENUM_INTEGRITYNOTCLEARED_OK,
      );
      if (!c.success) return c;
      var d = o(
        "WASmaxInSmbMeteredMessagesCampaignServerNotificationMixin",
      ).parseServerNotificationMixin(e);
      return d.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                from: r.value,
                to: a.value,
                type: i.value,
                mmCampaignAdId: l.value,
                mmCampaignAdGroupId: s.value,
                mmCampaignAdCreativeId: u.value,
                mmCampaignStatus: c.value,
              },
              d.value,
            ),
          )
        : d;
    }
    l.parseCampaignStateChangedNotificationRequest = e;
  },
  98,
);
