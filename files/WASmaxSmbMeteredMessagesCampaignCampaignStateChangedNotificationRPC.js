__d(
  "WASmaxSmbMeteredMessagesCampaignCampaignStateChangedNotificationRPC",
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
            "CampaignStateChangedNotification",
            { Request: t },
          ),
        );
      return { parsedRequest: t.value };
    }
    function s(e) {
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
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "business",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        n.value,
        "ad_id",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        n.value,
        "ad_group_id",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        n.value,
        "ad_creative_id",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "status",
        o("WASmaxInSmbMeteredMessagesCampaignEnums")
          .ENUM_INTEGRITYNOTCLEARED_OK,
      );
      if (!u.success) return u;
      var c = o(
        "WASmaxInSmbMeteredMessagesCampaignServerNotificationMixin",
      ).parseServerNotificationMixin(e);
      return c.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                from: r.value,
                type: a.value,
                mmCampaignAdId: i.value,
                mmCampaignAdGroupId: l.value,
                mmCampaignAdCreativeId: s.value,
                mmCampaignStatus: u.value,
              },
              c.value,
            ),
          )
        : c;
    }
    ((l.receiveCampaignStateChangedNotificationRPC = e),
      (l.parseCampaignStateChangedNotificationRequest = s));
  },
  98,
);
