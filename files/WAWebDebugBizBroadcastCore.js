__d(
  "WAWebDebugBizBroadcastCore",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "err",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      (r("vulture")("dNGA_beVGuQq5WS9ViAkNJJnz6g="),
        o(
          "WAWebBizBroadcastDeviceCapabilityCommon",
        ).saveBizBroadcastCapabilityToStorage(e));
    }
    s.doc =
      "Override primary device Business Broadcast capability (true/false)";
    function u() {
      (r("vulture")("UfCFjaN9pGU-nr_TnYvinnGZiIo="),
        o("WAWebTos").TosManager.setState(
          o("WAWebBizBroadcastTos").getBizBroadcastTosId(),
          "ACCEPTED",
          o("WATimeUtils").unixTime(),
        ));
    }
    ((u.doc = "Accept BB TOS locally (skips server RPC, bypasses TOS modal)"),
      (u.paramsToExecute = []));
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            (r("vulture")("Pm80KYD8Tje3BxBe7HyF3oLFpZs="),
            t.length <
              o("WAWebBizBroadcastRecipientLimitCommon").MIN_RECIPIENTS)
          )
            throw r("err")(
              'createBizBroadcastAudience("' +
                e +
                '") needs at least ' +
                o("WAWebBizBroadcastRecipientLimitCommon").MIN_RECIPIENTS +
                " recipients, got " +
                t.length,
            );
          var n = yield o("WAWebBroadcastListAction").createBroadcastListAction(
            {
              broadcastListName: e,
              contacts: t.map(function (e) {
                return { lid: e + "@lid", phone: e };
              }),
            },
          );
          return (
            yield o("WAWebDebugBizBroadcastChatUtils").whenBroadcastChatVisible(
              n,
            ),
            n
          );
        })),
        d.apply(this, arguments)
      );
    }
    c.doc = "Create a BB audience from a name and phone numbers, no UI (E2E)";
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("9B3P7T0Qee3i5KkBAFG2iMCYBcM=");
          var e = o("WAWebDebugBizBroadcastChatUtils").getActiveBroadcastJid(),
            t = r("WAWebPonyfillsCryptoRandomUUID")(),
            n = o("WAWebUserUtils")
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
          r("vulture")("xtFM8UIjKS2O9QInZyOXgIZvjr4=");
          var t = o("WAWebDebugBizBroadcastChatUtils").getActiveBroadcastJid(),
            a = yield o(
              "WAWebBizBroadcastCampaignAPI",
            ).getBizBroadcastCampaignsByBroadcastJid(t);
          (yield (e || (e = n("Promise"))).all(
            a
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
      createBizBroadcastAudience: c,
      createTestProcessingCampaignForActiveChat: m,
      setBizBroadcastDeviceCapability: s,
    };
    l.default = g;
  },
  98,
);
