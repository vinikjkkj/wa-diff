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
            l = e.customAudienceFbid,
            c = e.deliveryStatus;
          if (
            o(
              "WAWebBizBroadcastDeviceCapabilityCommon",
            ).getPrimarySupportsBusinessBroadcastPro()
          ) {
            var d = o("WAWebUserPrefsMeUser").getMaybeMeDeviceId();
            if (d == null) {
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
            var m = Date.now(),
              p = _(c),
              f = babelHelpers.extends(
                {},
                p == null ? {} : { bbProStatus: p },
                {
                  broadcastJid: t,
                  createTimestamp: m,
                  customAudienceFbid: l,
                  deviceId: d,
                  name: i,
                },
              ),
              g = r("WAWebBroadcastCampaignSync").getCampaignMutation(a, f, m);
            yield o("WAWebSyncdCoreApi").lockForSync([], [g], function () {
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
