__d(
  "WAWebBroadcastBridgeApi",
  [
    "WAJids",
    "WALogger",
    "WAWebBizBroadcastCampaignCollection",
    "WAWebBizBroadcastCampaignInsightsCollection",
    "WAWebBizBroadcastInsightsContactListHandler",
    "WAWebBizBroadcastSystemMessageManager",
    "WAWebBroadcastConsts",
    "WAWebBroadcastMetadataCollection",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebContactCollection",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["campaignId"],
      s,
      u,
      c,
      d = {
        loadedBizBroadcastCampaignInsights: function (t) {
          var e = t.rows;
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[BroadcastBridgeApi] loadedBizBroadcastCampaignInsights ",
                "",
              ])),
            e.length,
          );
          var n = e.map(function (e) {
            return {
              deliveredCount: e.deliveredCount,
              id: e.campaignId,
              lastUpdatedTimestampMs: e.lastUpdatedTimestampMs,
              quickReplyCount: e.quickReplyCount,
              readCount: e.readCount,
              recipientCount: e.recipientCount,
              repliedCount: e.repliedCount,
            };
          });
          (r("WAWebBizBroadcastCampaignInsightsCollection").add(n, {
            merge: !0,
          }),
            (r("WAWebBizBroadcastCampaignInsightsCollection").bootstrapped =
              !0));
        },
        loadedBizBroadcastCampaigns: function (n) {
          var t = n.rows;
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[BroadcastBridgeApi] loadedBizBroadcastCampaigns ",
                "",
              ])),
            t.length,
          );
          var a = t.map(function (t) {
            var n = t.campaignId,
              r = babelHelpers.objectWithoutPropertiesLoose(t, e);
            return babelHelpers.extends({ id: n }, r);
          });
          (r("WAWebBizBroadcastCampaignCollection").add(a, { merge: !0 }),
            (r("WAWebBizBroadcastCampaignCollection").bootstrapped = !0));
        },
        refreshBroadcastCampaignState: function (t) {
          var e = t.broadcastJids;
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[BroadcastBridgeApi] refresh campaign ",
                "",
              ])),
            e.length,
          );
          for (var n of e) {
            var r = o("WAJids").validateBroadcastJid(n);
            r != null &&
              o(
                "WAWebBizBroadcastSystemMessageManager",
              ).updateBizBroadcastSystemMessage(r);
          }
          o("WAWebCmd").Cmd.trigger(
            o("WAWebBroadcastConsts").BIZ_BROADCAST_CAMPAIGN_UPDATED_EVENT,
          );
        },
        removeBroadcastList: function (t) {
          var e = t.id;
          (o("WAWebChatCollection").ChatCollection.remove(e),
            r("WAWebBroadcastMetadataCollection").remove(e));
        },
        triggerBizBroadcastInsightsContactListFromBridge: function (t) {
          o("WAWebCmd").Cmd.trigger(
            o("WAWebBizBroadcastInsightsContactListHandler")
              .BIZ_BROADCAST_INSIGHTS_CONTACT_LIST_RECEIVED,
            t,
          );
        },
        updateBroadcastList: function (t) {
          var e = t.broadcastMetadata,
            n = t.chat,
            a = t.contact;
          (o("WAWebChatCollection").ChatCollection.gadd(
            babelHelpers.extends({}, n),
          ),
            o("WAWebContactCollection").ContactCollection.gadd({
              id: a.id,
              name: a.name,
            }),
            r("WAWebBroadcastMetadataCollection")
              .gadd({ id: e.id })
              .set(
                {
                  audienceExpression: e.audienceExpression,
                  recipients: e.recipients,
                },
                { merge: !0 },
              ));
        },
      };
    l.BroadcastBridgeApi = d;
  },
  98,
);
