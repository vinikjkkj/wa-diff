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
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
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
      (o(
        "WAWebBizBroadcastDeviceCapabilityCommon",
      ).saveBizBroadcastProCapabilityToStorage(!0),
        o(
          "WAWebBizBroadcastProOnboardingStatus",
        ).debugSetBizBroadcastProOnboardingStatus(
          o("WAWebBizBroadcastProOnboardingStatus").BBProOnboardingStatus
            .ELIGIBLE_TO_ONBOARD,
        ));
    }
    ((c.doc =
      "Force BB Pro capability and onboarding status to eligible_to_onboard (E2E)"),
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
      (d(), S("audience_only"));
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
    function S(t) {
      if (((b = t), C == null)) {
        var r = self.fetch.bind(self),
          a = o("WAWebGraphQLConstants").generateFacebookGraphqlEndpoint();
        C = function () {
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
    function E(t) {
      var a = o("WAWebWidFactory").createWid(t);
      return o("WAWebChatCollection").ChatCollection.get(a) != null
        ? (e || (e = n("Promise"))).resolve()
        : new (e || (e = n("Promise")))(function (e, n) {
            var i = function () {
              o("WAWebChatCollection").ChatCollection.get(a) != null &&
                (o("WAWebChatCollection").ChatCollection.off("add", i), e());
            };
            (window.setTimeout(function () {
              (o("WAWebChatCollection").ChatCollection.off("add", i),
                n(
                  r("err")(
                    "Broadcast chat " +
                      t +
                      " never reached ChatCollection within " +
                      L +
                      "ms",
                  ),
                ));
            }, L),
              o("WAWebChatCollection").ChatCollection.on("add", i));
          });
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            t.length < o("WAWebBizBroadcastRecipientLimitCommon").MIN_RECIPIENTS
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
          return (yield E(n), n);
        })),
        I.apply(this, arguments)
      );
    }
    k.doc = "Create a BB audience from a name and phone numbers, no UI (E2E)";
    function T() {
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (e == null) throw r("err")("No active chat");
      return o("WAWebWidToJid").widToBroadcastJid(e.id);
    }
    function D() {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = T(),
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
        x.apply(this, arguments)
      );
    }
    ((D.doc =
      "Create a test PROCESSING campaign for the active broadcast chat (E2E)"),
      (D.paramsToExecute = []));
    function $() {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = T(),
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
        P.apply(this, arguments)
      );
    }
    (($.doc =
      "Complete all PROCESSING campaigns for the active broadcast chat (E2E)"),
      ($.paramsToExecute = []));
    function N(e, t) {
      return o(
        "WAWebBizBroadcastProUpdateCampaignAction",
      ).rescheduleBizBroadcastProCampaign(e, t);
    }
    N.doc =
      "Reschedule a BB Pro campaign: new start (epoch s); stop auto-set to +5d";
    var M = {
      acceptBizBroadcastTos: u,
      completeTestCampaignsForActiveChat: $,
      createBizBroadcastAudience: k,
      createTestProcessingCampaignForActiveChat: D,
      mockBizBroadcastProAudienceGraphQLResponses: v,
      rescheduleBizBroadcastProCampaign: N,
      restoreBizBroadcastProAudienceGraphQLResponses: R,
      setBizBroadcastDeviceCapability: s,
      setBizBroadcastProNuxEligible: c,
      setBizBroadcastProOnboarded: d,
      setupBizBroadcastProAudienceOnlyHome: p,
      setupBizBroadcastProEmptyHome: m,
    };
    l.default = M;
  },
  98,
);
