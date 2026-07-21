__d(
  "WAWebDebugBizBroadcast",
  [
    "Promise",
    "WATimeUtils",
    "WAWebBizBroadcastCampaignAPI",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBizBroadcastProOnboardingStatus",
    "WAWebBizBroadcastSystemMessageManager",
    "WAWebBizBroadcastTos",
    "WAWebChatCollection",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebSchemaBusinessBroadcastCampaign",
    "WAWebTos",
    "WAWebUserPrefsMeUser",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      o(
        "WAWebBizBroadcastDeviceCapabilityCommon",
      ).saveBizBroadcastCapabilityToStorage(e);
    }
    s.doc =
      "Override primary device Business Broadcast capability (true/false)";
    function u() {
      o("WAWebTos").TosManager.setState(
        o("WAWebBizBroadcastTos").getBizBroadcastTosId(),
        "ACCEPTED",
        o("WATimeUtils").unixTime(),
      );
    }
    ((u.doc = "Accept BB TOS locally (skips server RPC, bypasses TOS modal)"),
      (u.paramsToExecute = []));
    function c() {
      o(
        "WAWebBizBroadcastProOnboardingStatus",
      ).debugSetBizBroadcastProOnboardingStatus(
        o("WAWebBizBroadcastProOnboardingStatus").BBProOnboardingStatus
          .ELIGIBLE_TO_ONBOARD,
      );
    }
    ((c.doc = "Force BB Pro onboarding status to eligible_to_onboard (E2E)"),
      (c.paramsToExecute = []));
    function d() {
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (e == null) throw r("err")("No active chat");
      return o("WAWebWidToJid").widToBroadcastJid(e.id);
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = d(),
            t = r("WAWebPonyfillsCryptoRandomUUID")(),
            n = o("WAWebUserPrefsMeUser")
              .getMeDevicePnOrThrow_DO_NOT_USE()
              .getDeviceId();
          (yield o("WAWebBizBroadcastCampaignAPI").createBizBroadcastCampaign({
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
            yield o(
              "WAWebBizBroadcastSystemMessageManager",
            ).updateBizBroadcastSystemMessage(e));
        })),
        p.apply(this, arguments)
      );
    }
    ((m.doc =
      "Create a test PROCESSING campaign for the active broadcast chat (E2E)"),
      (m.paramsToExecute = []));
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = d(),
            r = yield o(
              "WAWebBizBroadcastCampaignAPI",
            ).getBizBroadcastCampaignsByBroadcastJid(t);
          (yield (e || (e = n("Promise"))).all(
            r
              .filter(function (e) {
                return (
                  e.status ===
                  o("WAWebSchemaBusinessBroadcastCampaign")
                    .BusinessBroadcastCampaignStatus.PROCESSING
                );
              })
              .map(function (e) {
                return o(
                  "WAWebBizBroadcastCampaignAPI",
                ).updateBizBroadcastCampaign(e.campaignId, {
                  status: o("WAWebSchemaBusinessBroadcastCampaign")
                    .BusinessBroadcastCampaignStatus.SENT,
                });
              }),
          ),
            yield o(
              "WAWebBizBroadcastSystemMessageManager",
            ).updateBizBroadcastSystemMessage(t));
        })),
        f.apply(this, arguments)
      );
    }
    ((_.doc =
      "Complete all PROCESSING campaigns for the active broadcast chat (E2E)"),
      (_.paramsToExecute = []));
    var g = {
      acceptBizBroadcastTos: u,
      completeTestCampaignsForActiveChat: _,
      createTestProcessingCampaignForActiveChat: m,
      setBizBroadcastDeviceCapability: s,
      setBizBroadcastProNuxEligible: c,
    };
    l.default = g;
  },
  98,
);
