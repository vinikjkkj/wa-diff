__d(
  "WAWebDebugBizBroadcast",
  [
    "Promise",
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
    "WAWebUserUtils",
    "WAWebWidFactory",
    "WAWebWidToJid",
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
        ).debugSetBizBroadcastProOnboardingHistory(!0));
    }
    ((c.doc =
      "Force BB Pro capability and a disconnected eligible_to_onboard status (E2E)"),
      (c.paramsToExecute = []));
    function d() {
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
    ((d.doc =
      "Force BB Pro capability and a first-time eligible_to_onboard status (E2E)"),
      (d.paramsToExecute = []));
    function m() {
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
    ((m.doc =
      "Force BB Pro capability and onboarding status to onboarded (E2E)"),
      (m.paramsToExecute = []));
    function p() {
      (m(), L("empty"));
    }
    ((p.doc =
      "Set up an onboarded BB Pro account with no campaigns or audiences (E2E)"),
      (p.paramsToExecute = []));
    function _() {
      (r("vulture")("fpJ1xOlNxXxNCK5OpgMcRiWeqpM="), m(), L("audience_only"));
    }
    ((_.doc =
      "Set up an onboarded BB Pro account with an audience and no campaigns (E2E)"),
      (_.paramsToExecute = []));
    var f = "1234567890123456",
      g = "1234567890123457",
      h = "1234567890123458",
      y = "1234567890123459",
      C = 25,
      b = "1234567890123460",
      v = null,
      S = "empty";
    function R() {
      L("empty");
    }
    function L(t) {
      if (((S = t), v == null)) {
        var r = self.fetch.bind(self),
          a = o("WAWebGraphQLConstants").generateFacebookGraphqlEndpoint();
        v = function () {
          Reflect.set(self, "fetch", r);
        };
        var i = 0;
        Reflect.set(self, "fetch", function (t, o) {
          var l = t instanceof Request ? t.url : String(t);
          if (l !== a) return r(t, o);
          var s = "234567890123456" + String(i);
          return (
            (i += 1),
            (e || (e = n("Promise"))).resolve(
              new Response(
                JSON.stringify({
                  data: {
                    create_wa_marketing_messages_custom_audience: {
                      custom_audience_id: s,
                    },
                    viewer: {
                      backing_waba: {
                        id: f,
                        is_custom_param_restricted_for_first_party_paid_messaging:
                          !1,
                        name: "BB Pro test business",
                        owner_business: {
                          id: g,
                          marketing_message_whatsapp_event_sharing_consent:
                            null,
                        },
                        wa_bb_pro_campaigns: {
                          edges: [],
                          page_info: { end_cursor: null, has_next_page: !1 },
                        },
                        wa_bb_pro_custom_audiences: {
                          edges:
                            S === "audience_only"
                              ? [
                                  {
                                    node: {
                                      id: y,
                                      name: "Recording audience",
                                      operation_status: {
                                        status_code: "NO_STATUS",
                                      },
                                      subscriber_size: C,
                                    },
                                  },
                                ]
                              : [],
                        },
                      },
                    },
                    xfb_whatsapp_bb_pro: {
                      ad_account: {
                        id: b,
                        billing_info: {
                          payment_section_details: null,
                          required_action: {
                            action: {
                              label: null,
                              wizard_name: "ADD_PM",
                              wizard_props_json: "{}",
                            },
                            message: null,
                          },
                        },
                        currency_code_enum: "USD",
                        payment_account: null,
                      },
                      default_subscriber_pool: { id: h },
                      sending_restriction: {
                        is_sending_allowed: !0,
                        minimum_scheduled_send_lead_time_seconds: 3600,
                        upsell_business_verification: !1,
                      },
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
    ((R.doc = "Mock BB Pro audience GraphQL responses (E2E)"),
      (R.paramsToExecute = []));
    function E() {
      (v == null || v(), (v = null));
    }
    ((E.doc = "Restore GraphQL responses after a BB Pro audience E2E mock"),
      (E.paramsToExecute = []));
    var k = 1e4;
    function I(t) {
      r("vulture")("VVQyakP4bPA0f7HAOE-jfQtmisk=");
      var a = o("WAWebWidFactory").createWid(t);
      return o("WAWebChatCollection").ChatCollection.get(a) != null
        ? (e || (e = n("Promise"))).resolve()
        : new (e || (e = n("Promise")))(function (e, n) {
            r("vulture")("JqxbMlWj_srp6IcVuPtAC-Dsm6U=");
            var i = function () {
              (r("vulture")("PVHPzAME7NouhtN72x8FavJEv-A="),
                o("WAWebChatCollection").ChatCollection.get(a) != null &&
                  (o("WAWebChatCollection").ChatCollection.off("add", i), e()));
            };
            (window.setTimeout(function () {
              (r("vulture")("wZ3pguQsSguRlrRXCyupc1NnB9A="),
                o("WAWebChatCollection").ChatCollection.off("add", i),
                n(
                  r("err")(
                    "Broadcast chat " +
                      t +
                      " never reached ChatCollection within " +
                      k +
                      "ms",
                  ),
                ));
            }, k),
              o("WAWebChatCollection").ChatCollection.on("add", i));
          });
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
          return (yield I(n), n);
        })),
        D.apply(this, arguments)
      );
    }
    T.doc = "Create a BB audience from a name and phone numbers, no UI (E2E)";
    function x() {
      r("vulture")("m5aRIlrFKSn_stY9NCRYBRnkr64=");
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (e == null) throw r("err")("No active chat");
      return o("WAWebWidToJid").widToBroadcastJid(e.id);
    }
    function $() {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("9B3P7T0Qee3i5KkBAFG2iMCYBcM=");
          var e = x(),
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
        P.apply(this, arguments)
      );
    }
    (($.doc =
      "Create a test PROCESSING campaign for the active broadcast chat (E2E)"),
      ($.paramsToExecute = []));
    function N() {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("xtFM8UIjKS2O9QInZyOXgIZvjr4=");
          var t = x(),
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
        M.apply(this, arguments)
      );
    }
    ((N.doc =
      "Complete all PROCESSING campaigns for the active broadcast chat (E2E)"),
      (N.paramsToExecute = []));
    function w(e, t) {
      return (
        r("vulture")("8rJX9JincJN0bS6ndQL2fJMGQEQ="),
        o(
          "WAWebBizBroadcastProUpdateCampaignAction",
        ).rescheduleBizBroadcastProCampaign(e, t)
      );
    }
    w.doc =
      "Reschedule a BB Pro campaign: new start (epoch s); stop auto-set to +5d";
    var A = {
      acceptBizBroadcastTos: u,
      completeTestCampaignsForActiveChat: N,
      createBizBroadcastAudience: T,
      createTestProcessingCampaignForActiveChat: $,
      mockBizBroadcastProAudienceGraphQLResponses: R,
      rescheduleBizBroadcastProCampaign: w,
      restoreBizBroadcastProAudienceGraphQLResponses: E,
      setBizBroadcastDeviceCapability: s,
      setBizBroadcastProFirstTimeSetup: d,
      setBizBroadcastProNuxEligible: c,
      setBizBroadcastProOnboarded: m,
      setupBizBroadcastProAudienceOnlyHome: _,
      setupBizBroadcastProEmptyHome: p,
    };
    l.default = A;
  },
  98,
);
