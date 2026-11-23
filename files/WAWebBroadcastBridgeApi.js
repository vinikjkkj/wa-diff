__d(
  "WAWebBroadcastBridgeApi",
  [
    "JSResourceForInteraction",
    "WAJids",
    "WALogger",
    "WAWebBizBroadcastCampaignAPI",
    "WAWebBizBroadcastCampaignCollection",
    "WAWebBizBroadcastCampaignInsightsCollection",
    "WAWebBizBroadcastInsightsContactListHandler",
    "WAWebBizBroadcastProEligibilityEvent",
    "WAWebBizBroadcastSystemMessageManager",
    "WAWebBroadcastConsts",
    "WAWebBroadcastMetadataCollection",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebContactCollection",
    "WAWebUserUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["campaignId"],
      s = ["campaignId"],
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = r("JSResourceForInteraction")(
        "WAWebBizBroadcastProLocalCampaignCardAction",
      ).__setRef("WAWebBroadcastBridgeApi"),
      h = r("JSResourceForInteraction")(
        "WAWebBizBroadcastProCampaignStatusCollection",
      ).__setRef("WAWebBroadcastBridgeApi"),
      y = {
        createBizBroadcastProLocalCampaignCards: async function (t) {
          var e = t.campaigns;
          await Promise.all(e.map(C));
        },
        invalidateBizBroadcastProCampaign: function (t) {
          var e,
            n = t.campaignId;
          try {
            o("WAWebCmd").Cmd.trigger(
              "biz_broadcast_pro_campaign_invalidated",
              n,
            );
          } catch (e) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to invalidate BB Pro campaign",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("bb-pro-campaign-invalidation-listener-error");
          }
          (e = h.getModuleIfRequired()) == null ||
            (e = e.get(n)) == null ||
            e.markStale();
        },
        loadedBizBroadcastCampaignInsights: function (t) {
          var e = t.rows;
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
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
            r(
              "WAWebBizBroadcastCampaignInsightsCollection",
            ).markBootstrapped());
        },
        loadedBizBroadcastCampaigns: function (n) {
          var t = n.rows;
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
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
            r("WAWebBizBroadcastCampaignCollection").markBootstrapped());
        },
        refreshBizBroadcastProEligibility: function () {
          o(
            "WAWebBizBroadcastProEligibilityEvent",
          ).bizBroadcastProEligibilityEmitter.trigger("change");
        },
        refreshBroadcastCampaignState: function (t) {
          var e = t.broadcastJids;
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
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
        syncBroadcastCampaignsToCollection: function (t) {
          var e = t.removedCampaignIds,
            n = t.upsertedCampaignIds;
          for (var a of e) r("WAWebBizBroadcastCampaignCollection").remove(a);
          if (n.length > 0) {
            var i = o("WAWebUserUtils")
              .getMeDevicePnOrThrow_DO_NOT_USE()
              .getDeviceId();
            Promise.all(
              n.map(async function (e) {
                try {
                  var t = await o(
                    "WAWebBizBroadcastCampaignAPI",
                  ).getBizBroadcastCampaignByKey(e);
                  if (t == null) return;
                  var n = o(
                      "WAWebBizBroadcastCampaignAPI",
                    ).filterCampaignsByDevice([t], i),
                    a = n[0];
                  if (a == null) {
                    r("WAWebBizBroadcastCampaignCollection").remove(e);
                    return;
                  }
                  var l = a.campaignId,
                    u = babelHelpers.objectWithoutPropertiesLoose(a, s);
                  r("WAWebBizBroadcastCampaignCollection").add(
                    babelHelpers.extends({ id: l }, u),
                    { merge: !0 },
                  );
                } catch (t) {
                  o("WALogger")
                    .ERROR(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "[BroadcastBridgeApi] sync campaign ",
                          " failed",
                        ])),
                      e,
                    )
                    .catching(r("getErrorSafe")(t))
                    .sendLogs("bb-sync-campaign-collection-failure");
                }
              }),
            );
          }
        },
        syncBroadcastInsightsToCollection: function (t) {
          var e = t.removedCampaignIds,
            n = t.upserts;
          for (var o of e)
            r("WAWebBizBroadcastCampaignInsightsCollection").remove(o);
          for (var a of n) {
            var i, l, s, u, c;
            r("WAWebBizBroadcastCampaignInsightsCollection").add(
              {
                deliveredCount: (i = a.deliveredCount) != null ? i : 0,
                id: a.campaignId,
                lastUpdatedTimestampMs: a.lastUpdatedTimestampMs,
                quickReplyCount: (l = a.quickReplyCount) != null ? l : 0,
                readCount: (s = a.readCount) != null ? s : 0,
                recipientCount: (u = a.recipientCount) != null ? u : 0,
                repliedCount: (c = a.repliedCount) != null ? c : 0,
              },
              { merge: !0 },
            );
          }
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
                babelHelpers.extends(
                  { audienceExpression: e.audienceExpression },
                  e.customAudienceFbid != null
                    ? { customAudienceFbid: e.customAudienceFbid }
                    : {},
                  { recipients: e.recipients },
                ),
                { merge: !0 },
              ));
        },
      };
    async function C(e) {
      var t = e.broadcastJid,
        n = e.campaignId,
        a = e.campaignTimestamp,
        i = e.messageId,
        l = o("WAJids").validateBroadcastJid(t);
      if (l == null) {
        o("WALogger").ERROR(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "[bb-pro-local-card] invalid broadcast JID",
            ])),
        );
        return;
      }
      try {
        var s = await g.load();
        await s({
          broadcastJid: l,
          campaignId: n,
          campaignTimestamp: a,
          messageId: i,
        });
      } catch (e) {
        o("WALogger")
          .ERROR(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "BB Pro local campaign card creation failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("bb-pro-local-campaign-card-creation-failed");
      }
    }
    l.BroadcastBridgeApi = y;
  },
  98,
);
