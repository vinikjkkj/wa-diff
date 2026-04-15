__d(
  "WAWebBroadcastBridgeApi",
  [
    "WAJids",
    "WALogger",
    "WAWebBizBroadcastInsightsContactListHandler",
    "WAWebBizBroadcastSystemMessageManager",
    "WAWebBroadcastConsts",
    "WAWebBroadcastMetadataCollection",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebContactCollection",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        refreshBroadcastCampaignState: function (n) {
          var t = n.broadcastJids;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[BroadcastBridgeApi] refresh campaign ",
                "",
              ])),
            t.length,
          );
          for (var r of t) {
            var a = o("WAJids").validateBroadcastJid(r);
            a != null &&
              o(
                "WAWebBizBroadcastSystemMessageManager",
              ).updateBizBroadcastSystemMessage(a);
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
    l.BroadcastBridgeApi = s;
  },
  98,
);
