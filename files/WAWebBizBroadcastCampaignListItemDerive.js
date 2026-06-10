__d(
  "WAWebBizBroadcastCampaignListItemDerive",
  [
    "WALogger",
    "WAWebBizBroadcastRateUtils",
    "WAWebBroadcastHomeTypes",
    "WAWebChatCollection",
    "WAWebChatGroupUtils",
    "WAWebSchemaBusinessBroadcastCampaign",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var n,
        r,
        a,
        i,
        l,
        s,
        c,
        d = t.insights,
        m = (n = d == null ? void 0 : d.deliveredCount) != null ? n : 0,
        p = (r = d == null ? void 0 : d.readCount) != null ? r : 0,
        _ = (a = d == null ? void 0 : d.recipientCount) != null ? a : 0,
        f =
          ((i = d == null ? void 0 : d.repliedCount) != null ? i : 0) +
          ((l = d == null ? void 0 : d.quickReplyCount) != null ? l : 0),
        g = o("WAWebBizBroadcastRateUtils").computeCampaignRates({
          deliveredCount: m,
          readCount: p,
          recipientCount: _,
          repliedCount: f,
        }),
        h = g.readRate,
        y = g.replyRate,
        C = null;
      try {
        var b = o("WAWebWidFactory").createWid(t.broadcastJid),
          v = o("WAWebChatCollection").ChatCollection.get(b);
        v != null && (C = o("WAWebChatGroupUtils").getBroadcastChatTitle(v));
      } catch (n) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[bb:derive-list-item] audience name resolve failed ",
              "",
            ])),
          t.id,
        );
      }
      var S = t.campaignName,
        R = S != null ? S : "";
      return {
        attachmentData: null,
        audienceName: C,
        broadcastJid: t.broadcastJid,
        campaignId: t.id,
        campaignModelForLazyMedia: t,
        campaignName: R,
        createdTimestamp: t.createdTimestamp,
        ctaButtonData: null,
        deliveredCount: m,
        lastUpdatedTimestampMs:
          (s = d == null ? void 0 : d.lastUpdatedTimestampMs) != null
            ? s
            : null,
        messageBody: R,
        msgType: null,
        readRate: h,
        recipientCount: _,
        replyRate: y,
        scheduledTimestamp: t.scheduledTimestamp,
        sentAt: (c = t.scheduledTimestamp) != null ? c : t.createdTimestamp,
        status: u(t),
      };
    }
    function u(e) {
      var t = e.status,
        n = e.scheduledTimestamp,
        r = n != null && n > Date.now();
      return t ===
        o("WAWebSchemaBusinessBroadcastCampaign")
          .BusinessBroadcastCampaignStatus.SENT
        ? o("WAWebBroadcastHomeTypes").BroadcastCampaignStatusValue.SENT
        : t ===
            o("WAWebSchemaBusinessBroadcastCampaign")
              .BusinessBroadcastCampaignStatus.FAILED
          ? o("WAWebBroadcastHomeTypes").BroadcastCampaignStatusValue.FAILED
          : t ===
              o("WAWebSchemaBusinessBroadcastCampaign")
                .BusinessBroadcastCampaignStatus.SCHEDULED
            ? o("WAWebBroadcastHomeTypes").BroadcastCampaignStatusValue
                .SCHEDULED
            : t ===
                o("WAWebSchemaBusinessBroadcastCampaign")
                  .BusinessBroadcastCampaignStatus.DRAFT
              ? o("WAWebBroadcastHomeTypes").BroadcastCampaignStatusValue.DRAFT
              : r
                ? o("WAWebBroadcastHomeTypes").BroadcastCampaignStatusValue
                    .SCHEDULED
                : o("WAWebBroadcastHomeTypes").BroadcastCampaignStatusValue
                    .PROCESSING;
    }
    ((l.deriveListItemFromModel = s), (l.deriveDisplayStatus = u));
  },
  98,
);
