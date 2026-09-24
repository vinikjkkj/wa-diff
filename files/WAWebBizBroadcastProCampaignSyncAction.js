__d(
  "WAWebBizBroadcastProCampaignSyncAction",
  [
    "Promise",
    "WALogger",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBroadcastCampaignSync",
    "WAWebProtobufSyncAction.pb",
    "WAWebSyncdCoreApi",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = {
        ACTIVE: (c = o("WAWebProtobufSyncAction.pb"))
          .SyncActionValue$BusinessBroadcastCampaignBBProStatus.BB_PRO_ACTIVE,
        COMPLETED:
          c.SyncActionValue$BusinessBroadcastCampaignBBProStatus
            .BB_PRO_COMPLETED,
        IN_DRAFT:
          c.SyncActionValue$BusinessBroadcastCampaignBBProStatus
            .BB_PRO_IN_DRAFT,
        IN_REVIEW:
          c.SyncActionValue$BusinessBroadcastCampaignBBProStatus
            .BB_PRO_IN_REVIEW,
        NOT_SENDING:
          c.SyncActionValue$BusinessBroadcastCampaignBBProStatus
            .BB_PRO_NOT_SENDING,
        OFF: c.SyncActionValue$BusinessBroadcastCampaignBBProStatus.BB_PRO_OFF,
        PROCESSING:
          c.SyncActionValue$BusinessBroadcastCampaignBBProStatus
            .BB_PRO_PROCESSING,
        REJECTED:
          c.SyncActionValue$BusinessBroadcastCampaignBBProStatus
            .BB_PRO_REJECTED,
        SCHEDULED:
          c.SyncActionValue$BusinessBroadcastCampaignBBProStatus
            .BB_PRO_SCHEDULED,
        SENDING_LIMITED:
          c.SyncActionValue$BusinessBroadcastCampaignBBProStatus
            .BB_PRO_SENDING_LIMITED,
      };
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.broadcastJid,
            a = e.campaignId,
            i = e.campaignName,
            l = e.createTimestamp,
            c = e.customAudienceFbid,
            d = e.deliveryStatus,
            m = e.messageId;
          if (
            o(
              "WAWebBizBroadcastDeviceCapabilityCommon",
            ).getPrimarySupportsBusinessBroadcastPro()
          ) {
            var p = o("WAWebUserPrefsMeUser").getMaybeMeDeviceId();
            if (p == null) {
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Skipping BB Pro campaign SyncD because this device has no device ID",
                    ])),
                )
                .sendLogs("bb-pro-campaign-sync-device-id-missing");
              return;
            }
            var f = _(d),
              g = babelHelpers.extends(
                {},
                f == null ? {} : { bbProStatus: f },
                {
                  broadcastJid: t,
                  createTimestamp: l,
                  customAudienceFbid: c,
                  deviceId: p,
                  msgId: m,
                  name: i,
                },
              ),
              h = r("WAWebBroadcastCampaignSync").getCampaignMutation(a, g, l);
            yield o("WAWebSyncdCoreApi").lockForSync([], [h], function () {
              return (u || (u = n("Promise"))).resolve();
            });
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(t) {
      if (t == null) return null;
      var n = String(t),
        r = d[n];
      return r != null
        ? r
        : (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Encountered missing or unexpected BB Pro delivery status for SyncD",
                ])),
            )
            .tags("biz-broadcast-pro")
            .sendLogs("bb-pro-campaign-sync-status-unexpected"),
          null);
    }
    l.syncBizBroadcastProCampaignCreated = m;
  },
  98,
);
