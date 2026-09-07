__d(
  "WAWebDebugBizBroadcast",
  [
    "Promise",
    "WATimeUtils",
    "WAWebBizBroadcastCampaignAPI",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBizBroadcastProOnboardingStatus",
    "WAWebBizBroadcastProUpdateCampaignAction",
    "WAWebBizBroadcastSystemMessageManager",
    "WAWebBizBroadcastTos",
    "WAWebChatCollection",
    "WAWebGraphQLConstants",
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
      (o(
        "WAWebBizBroadcastDeviceCapabilityCommon",
      ).saveBizBroadcastProCapabilityToStorage(!0),
        o(
          "WAWebBizBroadcastProOnboardingStatus",
        ).debugSetBizBroadcastProOnboardingStatus(
          o("WAWebBizBroadcastProOnboardingStatus").BBProOnboardingStatus
            .ONBOARDED,
        ));
    }
    ((d.doc =
      "Force BB Pro capability and onboarding status to onboarded (E2E)"),
      (d.paramsToExecute = []));
    var m = null;
    function p() {
      if (m == null) {
        var t = self.fetch.bind(self),
          r = o("WAWebGraphQLConstants").generateFacebookGraphqlEndpoint();
        m = function () {
          Reflect.set(self, "fetch", t);
        };
        var a = 0;
        Reflect.set(self, "fetch", function (o, i) {
          var l = o instanceof Request ? o.url : String(o);
          if (l !== r) return t(o, i);
          var s = "234567890123456" + String(a);
          return (
            (a += 1),
            (e || (e = n("Promise"))).resolve(
              new Response(
                JSON.stringify({
                  data: {
                    create_wa_marketing_messages_custom_audience: {
                      custom_audience_id: s,
                    },
                    viewer: {
                      backing_waba: {
                        id: "1234567890123456",
                        wa_bb_pro_custom_audiences: { edges: [] },
                      },
                    },
                    xfb_whatsapp_bb_pro: {
                      default_subscriber_pool: { id: "1234567890123456" },
                    },
                  },
                }),
                {
                  headers: { "Content-Type": "application/json" },
                  status: 200,
                },
              ),
            )
          );
        });
      }
    }
    ((p.doc = "Mock BB Pro audience GraphQL responses (E2E)"),
      (p.paramsToExecute = []));
    function _() {
      (m == null || m(), (m = null));
    }
    ((_.doc = "Restore GraphQL responses after a BB Pro audience E2E mock"),
      (_.paramsToExecute = []));
    function f() {
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (e == null) throw r("err")("No active chat");
      return o("WAWebWidToJid").widToBroadcastJid(e.id);
    }
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = f(),
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
        h.apply(this, arguments)
      );
    }
    ((g.doc =
      "Create a test PROCESSING campaign for the active broadcast chat (E2E)"),
      (g.paramsToExecute = []));
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = f(),
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
        C.apply(this, arguments)
      );
    }
    ((y.doc =
      "Complete all PROCESSING campaigns for the active broadcast chat (E2E)"),
      (y.paramsToExecute = []));
    function b(e) {
      return o(
        "WAWebBizBroadcastProUpdateCampaignAction",
      ).cancelBizBroadcastProCampaign(e);
    }
    b.doc =
      "Cancel (pause) a BB Pro scheduled campaign by id (server mutation)";
    function v(e, t) {
      return o(
        "WAWebBizBroadcastProUpdateCampaignAction",
      ).rescheduleBizBroadcastProCampaign(e, t);
    }
    v.doc =
      "Reschedule a BB Pro campaign: new start (epoch s); stop auto-set to +5d";
    var S = {
      acceptBizBroadcastTos: u,
      cancelBizBroadcastProCampaign: b,
      completeTestCampaignsForActiveChat: y,
      createTestProcessingCampaignForActiveChat: g,
      mockBizBroadcastProAudienceGraphQLResponses: p,
      rescheduleBizBroadcastProCampaign: v,
      restoreBizBroadcastProAudienceGraphQLResponses: _,
      setBizBroadcastDeviceCapability: s,
      setBizBroadcastProNuxEligible: c,
      setBizBroadcastProOnboarded: d,
    };
    l.default = S;
  },
  98,
);
