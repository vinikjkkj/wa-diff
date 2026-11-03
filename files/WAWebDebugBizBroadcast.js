__d(
  "WAWebDebugBizBroadcast",
  [
    "WATimeUtils",
    "WAWebBizBroadcastCampaignAPI",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBizBroadcastProOnboardingStatus",
    "WAWebBizBroadcastProUpdateCampaignAction",
    "WAWebBizBroadcastRecipientLimitCommon",
    "WAWebBizBroadcastSystemMessageManager",
    "WAWebBizBroadcastTos",
    "WAWebBroadcastListAction",
    "WAWebChatCollection",
    "WAWebGraphQLConstants",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebSchemaBusinessBroadcastCampaign",
    "WAWebTos",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "WAWebWidToJid",
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
    function u() {
      (o(
        "WAWebBizBroadcastDeviceCapabilityCommon",
      ).saveBizBroadcastProCapabilityToStorage(!0),
        o(
          "WAWebBizBroadcastProOnboardingStatus",
        ).debugSetBizBroadcastProOnboardingStatus(
          o("WAWebBizBroadcastProOnboardingStatus").BBProOnboardingStatus
            .ELIGIBLE_TO_ONBOARD,
        ),
        o(
          "WAWebBizBroadcastProOnboardingStatus",
        ).debugSetBizBroadcastProOnboardingHistory(!0));
    }
    ((u.doc =
      "Force BB Pro capability and a disconnected eligible_to_onboard status (E2E)"),
      (u.paramsToExecute = []));
    function c() {
      (o(
        "WAWebBizBroadcastDeviceCapabilityCommon",
      ).saveBizBroadcastProCapabilityToStorage(!0),
        o(
          "WAWebBizBroadcastProOnboardingStatus",
        ).debugSetBizBroadcastProOnboardingStatus(
          o("WAWebBizBroadcastProOnboardingStatus").BBProOnboardingStatus
            .ELIGIBLE_TO_ONBOARD,
        ),
        o(
          "WAWebBizBroadcastProOnboardingStatus",
        ).debugSetBizBroadcastProOnboardingHistory(!1));
    }
    ((c.doc =
      "Force BB Pro capability and a first-time eligible_to_onboard status (E2E)"),
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
    function m() {
      (d(), S("empty"));
    }
    ((m.doc =
      "Set up an onboarded BB Pro account with no campaigns or audiences (E2E)"),
      (m.paramsToExecute = []));
    function p() {
      (r("vulture")("fpJ1xOlNxXxNCK5OpgMcRiWeqpM="), d(), S("audience_only"));
    }
    ((p.doc =
      "Set up an onboarded BB Pro account with an audience and no campaigns (E2E)"),
      (p.paramsToExecute = []));
    var _ = "1234567890123456",
      f = "1234567890123457",
      g = "1234567890123458",
      h = "1234567890123459",
      y = 25,
      C = null,
      b = "empty";
    function v() {
      S("empty");
    }
    function S(e) {
      if (((b = e), C == null)) {
        var t = self.fetch.bind(self),
          n = o("WAWebGraphQLConstants").generateFacebookGraphqlEndpoint();
        C = function () {
          Reflect.set(self, "fetch", t);
        };
        var r = 0;
        Reflect.set(self, "fetch", function (e, o) {
          var a = e instanceof Request ? e.url : String(e);
          if (a !== n) return t(e, o);
          var i = "234567890123456" + String(r);
          return (
            (r += 1),
            Promise.resolve(
              new Response(
                JSON.stringify({
                  data: {
                    create_wa_marketing_messages_custom_audience: {
                      custom_audience_id: i,
                    },
                    viewer: {
                      backing_waba: {
                        id: _,
                        is_custom_param_restricted_for_first_party_paid_messaging:
                          !1,
                        name: "BB Pro test business",
                        owner_business: {
                          id: f,
                          marketing_message_whatsapp_event_sharing_consent:
                            null,
                        },
                        wa_bb_pro_campaigns: {
                          edges: [],
                          page_info: { end_cursor: null, has_next_page: !1 },
                        },
                        wa_bb_pro_custom_audiences: {
                          edges:
                            b === "audience_only"
                              ? [
                                  {
                                    node: {
                                      id: h,
                                      name: "Recording audience",
                                      operation_status: {
                                        status_code: "NO_STATUS",
                                      },
                                      subscriber_size: y,
                                    },
                                  },
                                ]
                              : [],
                        },
                      },
                    },
                    xfb_whatsapp_bb_pro: { default_subscriber_pool: { id: g } },
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
    ((v.doc = "Mock BB Pro audience GraphQL responses (E2E)"),
      (v.paramsToExecute = []));
    function R() {
      (C == null || C(), (C = null));
    }
    ((R.doc = "Restore GraphQL responses after a BB Pro audience E2E mock"),
      (R.paramsToExecute = []));
    var L = 1e4;
    function E(e) {
      r("vulture")("VVQyakP4bPA0f7HAOE-jfQtmisk=");
      var t = o("WAWebWidFactory").createWid(e);
      return o("WAWebChatCollection").ChatCollection.get(t) != null
        ? Promise.resolve()
        : new Promise(function (n, a) {
            r("vulture")("JqxbMlWj_srp6IcVuPtAC-Dsm6U=");
            var i = function () {
              (r("vulture")("PVHPzAME7NouhtN72x8FavJEv-A="),
                o("WAWebChatCollection").ChatCollection.get(t) != null &&
                  (o("WAWebChatCollection").ChatCollection.off("add", i), n()));
            };
            (window.setTimeout(function () {
              (r("vulture")("wZ3pguQsSguRlrRXCyupc1NnB9A="),
                o("WAWebChatCollection").ChatCollection.off("add", i),
                a(
                  r("err")(
                    "Broadcast chat " +
                      e +
                      " never reached ChatCollection within " +
                      L +
                      "ms",
                  ),
                ));
            }, L),
              o("WAWebChatCollection").ChatCollection.on("add", i));
          });
    }
    async function k(e, t) {
      if (
        (r("vulture")("Pm80KYD8Tje3BxBe7HyF3oLFpZs="),
        t.length < o("WAWebBizBroadcastRecipientLimitCommon").MIN_RECIPIENTS)
      )
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
      return (await E(n), n);
    }
    k.doc = "Create a BB audience from a name and phone numbers, no UI (E2E)";
    function I() {
      r("vulture")("m5aRIlrFKSn_stY9NCRYBRnkr64=");
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (e == null) throw r("err")("No active chat");
      return o("WAWebWidToJid").widToBroadcastJid(e.id);
    }
    async function T() {
      r("vulture")("9B3P7T0Qee3i5KkBAFG2iMCYBcM=");
      var e = I(),
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
    ((T.doc =
      "Create a test PROCESSING campaign for the active broadcast chat (E2E)"),
      (T.paramsToExecute = []));
    async function D() {
      r("vulture")("xtFM8UIjKS2O9QInZyOXgIZvjr4=");
      var e = I(),
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
    ((D.doc =
      "Complete all PROCESSING campaigns for the active broadcast chat (E2E)"),
      (D.paramsToExecute = []));
    function x(e, t) {
      return (
        r("vulture")("8rJX9JincJN0bS6ndQL2fJMGQEQ="),
        o(
          "WAWebBizBroadcastProUpdateCampaignAction",
        ).rescheduleBizBroadcastProCampaign(e, t)
      );
    }
    x.doc =
      "Reschedule a BB Pro campaign: new start (epoch s); stop auto-set to +5d";
    var $ = {
      acceptBizBroadcastTos: s,
      completeTestCampaignsForActiveChat: D,
      createBizBroadcastAudience: k,
      createTestProcessingCampaignForActiveChat: T,
      mockBizBroadcastProAudienceGraphQLResponses: v,
      rescheduleBizBroadcastProCampaign: x,
      restoreBizBroadcastProAudienceGraphQLResponses: R,
      setBizBroadcastDeviceCapability: e,
      setBizBroadcastProFirstTimeSetup: c,
      setBizBroadcastProNuxEligible: u,
      setBizBroadcastProOnboarded: d,
      setupBizBroadcastProAudienceOnlyHome: p,
      setupBizBroadcastProEmptyHome: m,
    };
    l.default = $;
  },
  98,
);
