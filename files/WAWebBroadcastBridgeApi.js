__d(
  "WAWebBroadcastBridgeApi",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WAWebBizBroadcastCampaignAPI",
    "WAWebBizBroadcastCampaignCollection",
    "WAWebBizBroadcastCampaignInsightsCollection",
    "WAWebBizBroadcastInsightsContactListHandler",
    "WAWebBizBroadcastSystemMessageManager",
    "WAWebBroadcastConsts",
    "WAWebBroadcastMetadataCollection",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebContactCollection",
    "asyncToGeneratorRuntime",
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
      _ = {
        loadedBizBroadcastCampaignInsights: function (t) {
          var e = t.rows;
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
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
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
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
        refreshBroadcastCampaignState: function (t) {
          var e = t.broadcastJids;
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
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
            a = t.upsertedCampaignIds;
          for (var i of e) r("WAWebBizBroadcastCampaignCollection").remove(i);
          a.length > 0 &&
            (p || (p = n("Promise"))).all(
              a.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      try {
                        var t = yield o(
                          "WAWebBizBroadcastCampaignAPI",
                        ).getBizBroadcastCampaignByKey(e);
                        if (t == null) return;
                        var n = t.campaignId,
                          a = babelHelpers.objectWithoutPropertiesLoose(t, s);
                        r("WAWebBizBroadcastCampaignCollection").add(
                          babelHelpers.extends({ id: n }, a),
                          { merge: !0 },
                        );
                      } catch (t) {
                        o("WALogger")
                          .ERROR(
                            m ||
                              (m = babelHelpers.taggedTemplateLiteralLoose([
                                "[BroadcastBridgeApi] sync campaign ",
                                " failed",
                              ])),
                            e,
                          )
                          .catching(r("getErrorSafe")(t))
                          .sendLogs("bb-sync-campaign-collection-failure");
                      }
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            );
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
                {
                  audienceExpression: e.audienceExpression,
                  recipients: e.recipients,
                },
                { merge: !0 },
              ));
        },
      };
    l.BroadcastBridgeApi = _;
  },
  98,
);
