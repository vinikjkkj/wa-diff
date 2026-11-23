__d(
  "WAWebDebugBizBroadcastCore",
  [
    "WATimeUtils",
    "WAWebBizBroadcastCampaignAPI",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBizBroadcastRecipientLimitCommon",
    "WAWebBizBroadcastSystemMessageManager",
    "WAWebBizBroadcastTos",
    "WAWebBroadcastListAction",
    "WAWebDebugBizBroadcastChatUtils",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebSchemaBusinessBroadcastCampaign",
    "WAWebTos",
    "WAWebUserUtils",
    "err",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      (r("vulture")("dNGA_beVGuQq5WS9ViAkNJJnz6g="),
        o(
          "WAWebBizBroadcastDeviceCapabilityCommon",
        ).saveBizBroadcastCapabilityToStorage(e));
    }
    e.doc =
      "Override primary device Business Broadcast capability (true/false)";
    function s() {
      (r("vulture")("UfCFjaN9pGU-nr_TnYvinnGZiIo="),
        o("WAWebTos").TosManager.setState(
          o("WAWebBizBroadcastTos").getBizBroadcastTosId(),
          "ACCEPTED",
          o("WATimeUtils").unixTime(),
        ));
    }
    ((s.doc = "Accept BB TOS locally (skips server RPC, bypasses TOS modal)"),
      (s.paramsToExecute = []));
    async function u(e, t) {
      if (t.length < o("WAWebBizBroadcastRecipientLimitCommon").MIN_RECIPIENTS)
        throw r("err")(
          'createBizBroadcastAudience("' +
            e +
            '") needs at least ' +
            o("WAWebBizBroadcastRecipientLimitCommon").MIN_RECIPIENTS +
            " recipients, got " +
            t.length,
        );
      var n = await o("WAWebBroadcastListAction").createBroadcastListAction({
        broadcastListName: e,
        contacts: t.map(function (e) {
          return { lid: e + "@lid", phone: e };
        }),
      });
      return (
        await o("WAWebDebugBizBroadcastChatUtils").whenBroadcastChatVisible(n),
        n
      );
    }
    u.doc = "Create a BB audience from a name and phone numbers, no UI (E2E)";
    async function c() {
      var e = o("WAWebDebugBizBroadcastChatUtils").getActiveBroadcastJid(),
        t = r("WAWebPonyfillsCryptoRandomUUID")(),
        n = o("WAWebUserUtils").getMeDevicePnOrThrow_DO_NOT_USE().getDeviceId();
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
      r("vulture")("xtFM8UIjKS2O9QInZyOXgIZvjr4=");
      var e = o("WAWebDebugBizBroadcastChatUtils").getActiveBroadcastJid(),
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
      createBizBroadcastAudience: u,
      createTestProcessingCampaignForActiveChat: c,
      setBizBroadcastDeviceCapability: e,
    };
    l.default = m;
  },
  98,
);
