__d(
  "WAWebBizBroadcastCampaignCleanup",
  [
    "WALogger",
    "WAWebBizBroadcastCampaignAPI",
    "WAWebBizBroadcastCampaignStorageUtils",
    "WAWebSchemaBusinessBroadcastCampaign",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s() {
      var t = o("WAWebUserPrefsMeUser")
          .getMeDevicePnOrThrow_DO_NOT_USE()
          .getDeviceId(),
        n = await o(
          "WAWebBizBroadcastCampaignAPI",
        ).getBizBroadcastCampaignsByStatuses([
          o("WAWebSchemaBusinessBroadcastCampaign")
            .BusinessBroadcastCampaignStatus.PROCESSING,
        ]),
        r = n.filter(function (e) {
          return (
            e.deviceId === t &&
            e.pendingBroadcastMessageId == null &&
            e.msgId == null
          );
        }),
        a = [],
        i = 0;
      (await Promise.all(
        r.map(async function (e) {
          (await o(
            "WAWebBizBroadcastCampaignStorageUtils",
          ).updateCampaignStatusWithSync(e.campaignId, {
            status: o("WAWebSchemaBusinessBroadcastCampaign")
              .BusinessBroadcastCampaignStatus.FAILED,
          }),
            await o(
              "WAWebBizBroadcastCampaignStorageUtils",
            ).cleanupPendingCampaignData(e.campaignId),
            i++,
            a.length < 3 && a.push(e.campaignId));
        }),
      ),
        i > 0 &&
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[cleanupStaleCampaigns] ",
                " stuck->FAILED ids=",
                "",
              ])),
            i,
            a,
          ));
    }
    l.cleanupStaleCampaigns = s;
  },
  98,
);
