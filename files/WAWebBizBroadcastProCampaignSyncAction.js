__d(
  "WAWebBizBroadcastProCampaignSyncAction",
  [
    "WALogger",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBroadcastCampaignSync",
    "WAWebProtobufSyncAction.pb",
    "WAWebSyncdCoreApi",
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = {
        ACTIVE: (u = o("WAWebProtobufSyncAction.pb"))
          .SyncActionValue$BusinessBroadcastCampaignBBProStatus.BB_PRO_ACTIVE,
        COMPLETED:
          u.SyncActionValue$BusinessBroadcastCampaignBBProStatus
            .BB_PRO_COMPLETED,
        IN_DRAFT:
          u.SyncActionValue$BusinessBroadcastCampaignBBProStatus
            .BB_PRO_IN_DRAFT,
        IN_REVIEW:
          u.SyncActionValue$BusinessBroadcastCampaignBBProStatus
            .BB_PRO_IN_REVIEW,
        NOT_SENDING:
          u.SyncActionValue$BusinessBroadcastCampaignBBProStatus
            .BB_PRO_NOT_SENDING,
        OFF: u.SyncActionValue$BusinessBroadcastCampaignBBProStatus.BB_PRO_OFF,
        PROCESSING:
          u.SyncActionValue$BusinessBroadcastCampaignBBProStatus
            .BB_PRO_PROCESSING,
        REJECTED:
          u.SyncActionValue$BusinessBroadcastCampaignBBProStatus
            .BB_PRO_REJECTED,
        SCHEDULED:
          u.SyncActionValue$BusinessBroadcastCampaignBBProStatus
            .BB_PRO_SCHEDULED,
        SENDING_LIMITED:
          u.SyncActionValue$BusinessBroadcastCampaignBBProStatus
            .BB_PRO_SENDING_LIMITED,
      };
    async function d(t) {
      var n = t.broadcastJid,
        a = t.campaignId,
        i = t.campaignName,
        l = t.createTimestamp,
        s = t.customAudienceFbid,
        u = t.deliveryStatus,
        c = t.messageId,
        d = t.scheduledTimestamp;
      if (
        o(
          "WAWebBizBroadcastDeviceCapabilityCommon",
        ).getPrimarySupportsBusinessBroadcastPro()
      ) {
        var p = o("WAWebUserUtils").getMaybeMeDeviceId();
        if (p == null) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Skipping BB Pro campaign SyncD because this device has no device ID",
                ])),
            )
            .sendLogs("bb-pro-campaign-sync-device-id-missing");
          return;
        }
        var _ = m(u),
          f = babelHelpers.extends({}, _ == null ? {} : { bbProStatus: _ }, {
            broadcastJid: n,
            createTimestamp: l,
            customAudienceFbid: s,
            deviceId: p,
            msgId: c,
            name: i,
            scheduledTimestamp: d != null ? d : void 0,
          }),
          g = r("WAWebBroadcastCampaignSync").getCampaignMutation(a, f, l);
        await o("WAWebSyncdCoreApi").lockForSync([], [g], function () {
          return Promise.resolve();
        });
      }
    }
    function m(e) {
      if (e == null) return null;
      var t = String(e),
        n = c[t];
      return n != null
        ? n
        : (o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Encountered missing or unexpected BB Pro delivery status for SyncD",
                ])),
            )
            .tags("biz-broadcast-pro")
            .sendLogs("bb-pro-campaign-sync-status-unexpected"),
          null);
    }
    l.syncBizBroadcastProCampaignCreated = d;
  },
  98,
);
