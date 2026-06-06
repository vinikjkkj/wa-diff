__d(
  "WAWebDebugBizBroadcast",
  [
    "WATimeUtils",
    "WAWebBizBroadcastCampaignAPI",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBizBroadcastSystemMessageManager",
    "WAWebBizBroadcastTos",
    "WAWebChatCollection",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebSchemaBusinessBroadcastCampaign",
    "WAWebTos",
    "WAWebUserPrefsMeUser",
    "WAWebWidToJid",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      o(
        "WAWebBizBroadcastDeviceCapabilityCommon",
      ).saveBizBroadcastCapabilityToStorage(e);
    }
    e.doc =
      "Override primary device Business Broadcast capability (true/false)";
    function s() {
      o("WAWebTos").TosManager.setState(
        o("WAWebBizBroadcastTos").getBizBroadcastTosId(),
        "ACCEPTED",
        o("WATimeUtils").unixTime(),
      );
    }
    ((s.doc = "Accept BB TOS locally (skips server RPC, bypasses TOS modal)"),
      (s.paramsToExecute = []));
    function u() {
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (e == null) throw r("err")("No active chat");
      return o("WAWebWidToJid").widToBroadcastJid(e.id);
    }
    async function c() {
      var e = u(),
        t = r("WAWebPonyfillsCryptoRandomUUID")(),
        n = o("WAWebUserPrefsMeUser")
          .getMeDevicePnOrThrow_DO_NOT_USE()
          .getDeviceId();
      (await o("WAWebBizBroadcastCampaignAPI").createBizBroadcastCampaign({
        adGroupId: "test_adgroup_" + t,
        adId: null,
        broadcastJid: e,
        campaignId: t,
        campaignName: "Test Campaign " + t,
        createdTimestamp: Date.now(),
        deviceId: n,
        msgId: null,
        pendingBroadcastMessageId: null,
        reservedQuota: null,
        scheduledTimestamp: null,
        status: o("WAWebSchemaBusinessBroadcastCampaign")
          .BusinessBroadcastCampaignStatus.PROCESSING,
      }),
        await o(
          "WAWebBizBroadcastSystemMessageManager",
        ).updateBizBroadcastSystemMessage(e));
    }
    ((c.doc =
      "Create a test PROCESSING campaign for the active broadcast chat (E2E)"),
      (c.paramsToExecute = []));
    async function d() {
      var e = u(),
        t = await o(
          "WAWebBizBroadcastCampaignAPI",
        ).getBizBroadcastCampaignsByBroadcastJid(e);
      (await Promise.all(
        t
          .filter(function (e) {
            return (
              e.status ===
              o("WAWebSchemaBusinessBroadcastCampaign")
                .BusinessBroadcastCampaignStatus.PROCESSING
            );
          })
          .map(function (e) {
            return o("WAWebBizBroadcastCampaignAPI").updateBizBroadcastCampaign(
              e.campaignId,
              {
                status: o("WAWebSchemaBusinessBroadcastCampaign")
                  .BusinessBroadcastCampaignStatus.SENT,
              },
            );
          }),
      ),
        await o(
          "WAWebBizBroadcastSystemMessageManager",
        ).updateBizBroadcastSystemMessage(e));
    }
    ((d.doc =
      "Complete all PROCESSING campaigns for the active broadcast chat (E2E)"),
      (d.paramsToExecute = []));
    var m = {
      acceptBizBroadcastTos: s,
      completeTestCampaignsForActiveChat: d,
      createTestProcessingCampaignForActiveChat: c,
      setBizBroadcastDeviceCapability: e,
    };
    l.default = m;
  },
  98,
);
