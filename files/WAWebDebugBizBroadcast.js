__d(
  "WAWebDebugBizBroadcast",
  [
    "Promise",
    "WATimeUtils",
    "WAWebBizBroadcastCampaignAPI",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBizBroadcastProLocalCampaignCardAction",
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
      (m(), Y("empty"));
    }
    ((p.doc =
      "Set up an onboarded BB Pro account with no campaigns or audiences (E2E)"),
      (p.paramsToExecute = []));
    function _(e) {
      (e === void 0 && (e = []),
        m(),
        (j = [].concat(e)),
        (K = new Set()),
        Y("empty", he()));
    }
    ((_.doc =
      "Set up an onboarded BB Pro account with in review, active, completed and not approved campaigns (E2E)"),
      (_.paramsToExecute = []));
    function f() {
      (m(), Y("empty", [be()]));
    }
    ((f.doc =
      "Set up an onboarded BB Pro account with one completed campaign: 25 sent, 20 delivered, 10 read, 2 replies (E2E)"),
      (f.paramsToExecute = []));
    function g(e, t) {
      (m(), Y("empty", ye(0, e), ye(e, t)));
    }
    g.doc =
      "Set up an onboarded BB Pro account whose completed campaigns, Campaign 1 onwards, span a first page and a next page of the given sizes (E2E)";
    function h(e, t) {
      (m(), Y("empty", [ve(e, new URL(t, self.location.origin).href)]));
    }
    h.doc =
      "Set up an onboarded BB Pro account with one completed campaign whose message has the given text and same-origin header image path (E2E)";
    function y(e) {
      (e === void 0 && (e = null), m(), (U = !0), (V = e), Y("audience_only"));
    }
    ((y.doc =
      "Set up an onboarded BB Pro account with an audience and a payment method whose campaign create succeeds in review, optionally capping the max bid at the given CPM in the smallest currency unit (E2E)"),
      (y.paramsToExecute = []));
    function C() {
      (r("vulture")("fpJ1xOlNxXxNCK5OpgMcRiWeqpM="), m(), Y("audience_only"));
    }
    ((C.doc =
      "Set up an onboarded BB Pro account with an audience and no campaigns (E2E)"),
      (C.paramsToExecute = []));
    function b() {
      (m(), Y("multi_audience"));
    }
    ((b.doc =
      "Set up an onboarded BB Pro account with three audiences, each with its own recipients, and no campaigns (E2E)"),
      (b.paramsToExecute = []));
    function v(e) {
      (m(), (H = e), Y("empty"));
    }
    v.doc =
      "Set up an empty onboarded BB Pro account whose Message limits show the given business verification status (E2E)";
    function S(e) {
      (m(), (G = e), Y("audience_only"));
    }
    S.doc =
      "Set up an onboarded BB Pro account with an audience whose ad account pays with the given ad credits balance label (E2E)";
    function R() {
      (m(), (z = !0), Y("empty"));
    }
    ((R.doc =
      "Set up an empty onboarded BB Pro account whose customer base has 2,100 - 2,500 subscribed recipients (E2E)"),
      (R.paramsToExecute = []));
    function L() {
      (m(),
        Y("empty", [Ee(0, "SENDING_LIMITED", Ce), Ee(1, "NOT_SENDING", Le)]));
    }
    ((L.doc =
      "Set up an onboarded BB Pro account with a sending limited campaign (25 sent, 20 delivered, 10 read, 2 replies) and a not sending campaign (8 sent, 4 delivered, 3 read, 1 reply), both started more than two days ago (E2E)"),
      (L.paramsToExecute = []));
    var E = "1234567890123456",
      k = "1234567890123457",
      I = "1234567890123458",
      T = "1234567890123459",
      D = "Recording audience",
      x = 25,
      $ = "1234567890123460",
      P = "1234567890123461",
      N = "Visa ending in 4242",
      M = 250,
      w = {
        phone_number_status: { waba_display_phone_number: "+1 555-010-0199" },
      },
      A = {
        business_object_name: null,
        is_subscriber_pool_empty: !1,
        name: null,
        subscriber_pool_audience_size: { lower_bound: 2100, upper_bound: 2500 },
      },
      F = 1767182400,
      O = null,
      B = [],
      W = null,
      q = "empty",
      U = !1,
      V = null,
      H = null,
      G = null,
      z = !1,
      j = [],
      K = new Set(),
      Q = null;
    function X() {
      Y("empty");
    }
    function Y(t, r, a) {
      if (
        (r === void 0 && (r = []),
        a === void 0 && (a = null),
        (q = t),
        (B = r),
        (W = a),
        O == null)
      ) {
        var i = self.fetch.bind(self),
          l = o("WAWebGraphQLConstants").generateFacebookGraphqlEndpoint();
        O = function () {
          Reflect.set(self, "fetch", i);
        };
        var s = 0;
        Reflect.set(self, "fetch", function (t, r) {
          var o = t instanceof Request ? t.url : String(t);
          if (o !== l) return i(t, r);
          var a = re(r == null ? void 0 : r.body);
          if (a != null) return (e || (e = n("Promise"))).resolve(a);
          var u = U ? oe(r) : null;
          u != null && (B = he([u.status], u.startTimeS));
          var c = "234567890123456" + String(s);
          return (
            (s += 1),
            (e || (e = n("Promise"))).resolve(
              new Response(
                JSON.stringify({
                  data: babelHelpers.extends(
                    {},
                    de(r == null ? void 0 : r.body),
                    ee(r == null ? void 0 : r.body),
                    me(r == null ? void 0 : r.body),
                    u != null
                      ? {
                          create_wa_bb_pro_campaign: {
                            delivery_status_info: { status: u.status[1] },
                            id: Re(0),
                          },
                        }
                      : {},
                    {
                      create_wa_marketing_messages_custom_audience: {
                        custom_audience_id: c,
                      },
                      viewer: {
                        backing_waba: babelHelpers.extends(
                          {},
                          te(),
                          {
                            id: E,
                            is_custom_param_restricted_for_first_party_paid_messaging:
                              !1,
                            name: "BB Pro test business",
                            owner_business: {
                              id: k,
                              marketing_message_whatsapp_event_sharing_consent:
                                null,
                            },
                          },
                          z ? w : {},
                          {
                            wa_bb_pro_campaigns: { edges: B, page_info: Z() },
                            wa_bb_pro_custom_audiences: {
                              edges:
                                q === "audience_only"
                                  ? [
                                      {
                                        node: {
                                          id: T,
                                          name: D,
                                          operation_status: {
                                            status_code: "NO_STATUS",
                                          },
                                          subscriber_size: x,
                                        },
                                      },
                                    ]
                                  : ce(),
                            },
                          },
                        ),
                      },
                      xfb_whatsapp_bb_pro: babelHelpers.extends(
                        {
                          ad_account: babelHelpers.extends(
                            { id: $ },
                            ie(U, G),
                            { currency_code_enum: "USD" },
                          ),
                          default_subscriber_pool: babelHelpers.extends(
                            { id: I },
                            z ? A : {},
                          ),
                          sending_restriction: {
                            is_sending_allowed: !0,
                            minimum_scheduled_send_lead_time_seconds: 3600,
                            upsell_business_verification: !1,
                          },
                        },
                        le(H),
                      ),
                    },
                  ),
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
    ((X.doc = "Mock BB Pro audience GraphQL responses (E2E)"),
      (X.paramsToExecute = []));
    var J = "bb-pro-campaigns-next-page";
    function Z() {
      return W != null
        ? { end_cursor: J, has_next_page: !0 }
        : { end_cursor: null, has_next_page: !1 };
    }
    function ee(e) {
      return W == null ||
        typeof e != "string" ||
        !e.includes('"after":"' + J + '"')
        ? {}
        : {
            node: {
              __typename: "WhatsAppBusinessAccount",
              id: E,
              wa_bb_pro_campaigns: {
                edges: W,
                page_info: { end_cursor: null, has_next_page: !1 },
              },
            },
          };
    }
    function te() {
      return V != null ? { audience_send_max_bid_amount: V } : {};
    }
    function ne(e) {
      return e == null
        ? {
            payment_section_details: null,
            required_action: {
              action: {
                label: null,
                wizard_name: "ADD_PM",
                wizard_props_json: "{}",
              },
              message: null,
            },
          }
        : {
            payment_section_details: {
              inline_action: null,
              label: e,
              label_ax: null,
              logos: [],
              primary_action: null,
            },
            required_action: null,
          };
    }
    function re(e) {
      var t;
      if (j.length === 0 || typeof e != "string") return null;
      var n;
      try {
        var r;
        n = (r = JSON.parse(e)) == null ? void 0 : r.variables;
      } catch (e) {
        return null;
      }
      var o = _e.findIndex(function (e, t) {
        var r;
        return Re(t) === String((r = n) == null ? void 0 : r.campaign_id);
      });
      if (((t = n) == null ? void 0 : t.status) !== "PAUSED" || o === -1)
        return null;
      var a = Re(o);
      j.shift() === "stopped" && (K.add(a), (B = he()));
      var i = _e[o],
        l = i[0],
        s = i[2],
        u = Se(o);
      return new Response(
        JSON.stringify({
          data: {
            update_wa_bb_pro_campaign: {
              bb_pro_can_stop: s && !u,
              bb_pro_display_status: u ? "STOPPED" : l,
              id: a,
            },
          },
        }),
        { headers: { "Content-Type": "application/json" }, status: 200 },
      );
    }
    function oe(e) {
      var t = e == null ? void 0 : e.body;
      if (typeof t != "string" || !ae(e)) return null;
      var n = JSON.parse(t).variables.start_time;
      return typeof n == "number"
        ? { startTimeS: n, status: ["SCHEDULED", "SCHEDULED", !0] }
        : { startTimeS: fe, status: _e[0] };
    }
    function ae(e) {
      var t = e == null ? void 0 : e.body;
      if (typeof t != "string") return !1;
      try {
        var n;
        return (
          ((n = JSON.parse(t).variables) == null ? void 0 : n.rate_card) != null
        );
      } catch (e) {
        return !1;
      }
    }
    function ie(e, t) {
      return e
        ? {
            billing_info: {
              payment_section_details: {
                inline_action: null,
                label: N,
                label_ax: N,
                logos: [],
                primary_action: null,
              },
              required_action: null,
            },
            payment_account: {
              __typename: "AdsPaymentAccountRawDoNotUse",
              id: P,
            },
          }
        : { billing_info: ne(t), payment_account: null };
    }
    function le(e) {
      if (e == null) return {};
      var t = e === "NOT_STARTED" || e === "PENDING_SUBMISSION";
      return {
        business_verification: {
          completion_time: e === "VERIFIED" ? F : null,
          status_card: {
            cta_list: t
              ? [
                  {
                    action_parameters: {
                      business_verification_submission_config_type: null,
                      cta_is_disabled: !1,
                      stakeholder_verification_failure_reason: null,
                    },
                    cta: "OPEN_BV_WIZARD",
                    cta_label: "Start verification",
                  },
                ]
              : [],
            first_subtitle_text: null,
            icon_text: null,
          },
          submitted_time: e === "PENDING_REVIEW" ? F : null,
          verification_status: e,
        },
        messaging_limits: {
          current_daily_limit: M,
          is_business_verified: e === "VERIFIED",
          minimum_daily_limit: M,
          unique_recipients_last_24h: 0,
          upgrade_requirements: [],
        },
      };
    }
    var se = [
        {
          id: "1234567890123470",
          name: "Spring sale",
          recipientNames: ["Ana", "Ben", "Cleo", "Dev", "Eli"],
        },
        {
          id: "1234567890123471",
          name: "VIP customers",
          recipientNames: ["Gus", "Hana", "Ivo"],
        },
        {
          id: "1234567890123472",
          name: "Newsletter",
          recipientNames: ["Jo", "Kai", "Lea", "Mo"],
        },
      ],
      ue = 1767182400;
    function ce() {
      return q !== "multi_audience"
        ? []
        : se.map(function (e) {
            var t = e.id,
              n = e.name,
              r = e.recipientNames;
            return {
              node: {
                id: t,
                name: n,
                operation_status: { status_code: "NO_STATUS" },
                subscriber_size: r.length,
              },
            };
          });
    }
    function de(e) {
      var t = se.find(function (t) {
        var n = t.id;
        return (
          q === "multi_audience" &&
          typeof e == "string" &&
          e.includes('"audienceId":"' + n + '"')
        );
      });
      return t == null
        ? {}
        : {
            node: {
              __typename: "AdCustomAudience",
              creation_time: ue,
              id: t.id,
              name: t.name,
              operation_status: { status_code: "NO_STATUS" },
              subscriber_size: t.recipientNames.length,
            },
            xfb_whatsapp_subscriber_list_members: {
              edges: t.recipientNames.map(function (e, n) {
                return {
                  cursor: String(n),
                  node: {
                    __typename: "XFBWhatsAppSubscriberListMember",
                    full_name: e,
                    phone_number: "1555010" + t.id.slice(-2) + "0" + String(n),
                  },
                };
              }),
              page_info: { end_cursor: null, has_next_page: !1 },
            },
          };
    }
    function me(e) {
      var t = Q;
      if (t == null || typeof e != "string") return {};
      var n = Re(t);
      if (!e.includes('"campaignId":"' + n + '"')) return {};
      var r = _e[t],
        o = r[0],
        a = r[1],
        i = r[2],
        l = Se(t);
      return {
        node: {
          __typename: "XFBWhatsAppBusinessMMLiteCampaign",
          bb_pro_can_stop: i && !l,
          bb_pro_display_status: l ? "STOPPED" : o,
          broadcast_insights: { ads_delivered: null },
          delivery_status_info: { status: a },
          id: n,
        },
      };
    }
    function pe() {
      (O == null || O(),
        (O = null),
        (H = null),
        (G = null),
        (z = !1),
        (j = []),
        (K = new Set()),
        (W = null),
        (U = !1),
        (V = null),
        (Q = null));
    }
    ((pe.doc = "Restore GraphQL responses after a BB Pro audience E2E mock"),
      (pe.paramsToExecute = []));
    var _e = [
        ["IN_REVIEW", "IN_REVIEW", !0],
        ["ACTIVE", "ACTIVE", !0],
        ["COMPLETED", "COMPLETED", !1],
        ["NOT_APPROVED", "REJECTED", !1],
      ],
      fe = 1767182400,
      ge = "BBPROCARD";
    function he(e, t) {
      return (
        e === void 0 && (e = _e),
        t === void 0 && (t = fe),
        e.map(function (e, n) {
          var r = e[0],
            o = e[1],
            a = e[2];
          return {
            cursor: String(n),
            node: {
              __typename: "XFBWhatsAppBusinessMMLiteCampaign",
              bb_pro_can_stop: a && !Se(n),
              bb_pro_display_status: Se(n) ? "STOPPED" : r,
              broadcast_insights: {
                ads_amount_spent: null,
                ads_delivered: null,
                bid_amount_long: null,
                cta_url_clicks: null,
                currency: null,
                custom_audience_id: null,
                customer_list_name: null,
                first_customer_reply: null,
                lifetime_budget_long: null,
                quick_reply_clicks: null,
                read: null,
                read_rate: null,
                reply_rate: null,
                sent: null,
                start_time: t,
                template: null,
              },
              campaign_name: "Campaign " + String(n + 1),
              delivery_status_info: { extra_data: null, status: o },
              id: Re(n),
            },
          };
        })
      );
    }
    function ye(e, t) {
      return he(
        Array.from({ length: e + t }, function () {
          return ["COMPLETED", "COMPLETED", !1];
        }),
      ).slice(e);
    }
    var Ce = {
      ads_amount_spent: 1,
      ads_delivered: { count: 20 },
      bid_amount_long: 5e3,
      cta_url_clicks: null,
      currency: "USD",
      custom_audience_id: null,
      customer_list_name: null,
      first_customer_reply: { count: 2 },
      lifetime_budget_long: 200,
      quick_reply_clicks: null,
      read: { count: 10 },
      read_rate: 50,
      reply_rate: 10,
      sent: { count: 25 },
      start_time: fe,
      template: null,
    };
    function be() {
      return {
        cursor: "0",
        node: {
          __typename: "XFBWhatsAppBusinessMMLiteCampaign",
          bb_pro_can_stop: !1,
          bb_pro_display_status: "COMPLETED",
          broadcast_insights: Ce,
          campaign_name: "Insights campaign",
          delivery_status_info: { extra_data: null, status: "COMPLETED" },
          id: "345678901234570",
        },
      };
    }
    function ve(e, t) {
      return {
        cursor: "0",
        node: {
          __typename: "XFBWhatsAppBusinessMMLiteCampaign",
          bb_pro_can_stop: !1,
          bb_pro_display_status: "COMPLETED",
          broadcast_insights: babelHelpers.extends({}, Ce, {
            template: {
              element: null,
              header_type: "IMAGE",
              hsm_components: [
                {
                  buttons: null,
                  example: { header_handle: null, header_url: [t] },
                  text: null,
                  type: "HEADER",
                },
                { buttons: null, example: null, text: e, type: "BODY" },
              ],
            },
          }),
          campaign_name: "Media campaign",
          delivery_status_info: { extra_data: null, status: "COMPLETED" },
          id: Re(0),
        },
      };
    }
    function Se(e) {
      return K.has(Re(e));
    }
    function Re(e) {
      return "34567890123456" + String(e);
    }
    var Le = babelHelpers.extends({}, Ce, {
      ads_amount_spent: 0.4,
      ads_delivered: { count: 4 },
      first_customer_reply: { count: 1 },
      read: { count: 3 },
      read_rate: 75,
      reply_rate: 25,
      sent: { count: 8 },
    });
    function Ee(e, t, n) {
      return {
        cursor: String(e),
        node: {
          __typename: "XFBWhatsAppBusinessMMLiteCampaign",
          bb_pro_can_stop: !1,
          bb_pro_display_status: t,
          broadcast_insights: n,
          campaign_name: "Campaign " + String(e + 1),
          delivery_status_info: { extra_data: null, status: "ACTIVE" },
          id: Re(e),
        },
      };
    }
    var ke = 1e4;
    function Ie(t) {
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
                      ke +
                      "ms",
                  ),
                ));
            }, ke),
              o("WAWebChatCollection").ChatCollection.on("add", i));
          });
    }
    function Te(e, t) {
      return De.apply(this, arguments);
    }
    function De() {
      return (
        (De = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
          return (yield Ie(n), n);
        })),
        De.apply(this, arguments)
      );
    }
    Te.doc = "Create a BB audience from a name and phone numbers, no UI (E2E)";
    function xe() {
      return $e.apply(this, arguments);
    }
    function $e() {
      return (
        ($e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebBroadcastListAction").createBroadcastListAction(
            { broadcastListName: D, contacts: [], customAudienceFbid: T },
          );
          return (yield Ie(e), e);
        })),
        $e.apply(this, arguments)
      );
    }
    ((xe.doc =
      "Create the local chat of the mocked BB Pro audience, no UI (E2E)"),
      (xe.paramsToExecute = []));
    function Pe(e, t, n) {
      return Ne.apply(this, arguments);
    }
    function Ne() {
      return (
        (Ne = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var a = Me(),
              i = Re(e);
            ((Q = e),
              yield r("WAWebBizBroadcastProLocalCampaignCardAction")({
                broadcastJid: a,
                campaignId: i,
                campaignMessageData: {
                  attachmentData: null,
                  buttonData: { displayText: n, type: "quick_reply" },
                  message: t,
                },
                campaignTimestamp: o("WATimeUtils").unixTime(),
                messageId: "" + ge + i,
              }));
          },
        )),
        Ne.apply(this, arguments)
      );
    }
    Pe.doc =
      "Seed the active Pro chat with a mocked campaign card with a quick reply (E2E)";
    function Me() {
      r("vulture")("m5aRIlrFKSn_stY9NCRYBRnkr64=");
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (e == null) throw r("err")("No active chat");
      return o("WAWebWidToJid").widToBroadcastJid(e.id);
    }
    function we() {
      return Ae.apply(this, arguments);
    }
    function Ae() {
      return (
        (Ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("9B3P7T0Qee3i5KkBAFG2iMCYBcM=");
          var e = Me(),
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
        Ae.apply(this, arguments)
      );
    }
    ((we.doc =
      "Create a test PROCESSING campaign for the active broadcast chat (E2E)"),
      (we.paramsToExecute = []));
    function Fe() {
      return Oe.apply(this, arguments);
    }
    function Oe() {
      return (
        (Oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("xtFM8UIjKS2O9QInZyOXgIZvjr4=");
          var t = Me(),
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
        Oe.apply(this, arguments)
      );
    }
    ((Fe.doc =
      "Complete all PROCESSING campaigns for the active broadcast chat (E2E)"),
      (Fe.paramsToExecute = []));
    function Be(e, t) {
      return (
        r("vulture")("8rJX9JincJN0bS6ndQL2fJMGQEQ="),
        o(
          "WAWebBizBroadcastProUpdateCampaignAction",
        ).rescheduleBizBroadcastProCampaign(e, t)
      );
    }
    Be.doc =
      "Reschedule a BB Pro campaign: new start (epoch s); stop auto-set to +5d";
    var We = {
      acceptBizBroadcastTos: u,
      completeTestCampaignsForActiveChat: Fe,
      createBizBroadcastAudience: Te,
      createBizBroadcastProMockAudienceChat: xe,
      createBizBroadcastProMockCampaignCardForActiveChat: Pe,
      createTestProcessingCampaignForActiveChat: we,
      mockBizBroadcastProAudienceGraphQLResponses: X,
      rescheduleBizBroadcastProCampaign: Be,
      restoreBizBroadcastProAudienceGraphQLResponses: pe,
      setBizBroadcastDeviceCapability: s,
      setBizBroadcastProFirstTimeSetup: d,
      setBizBroadcastProNuxEligible: c,
      setBizBroadcastProOnboarded: m,
      setupBizBroadcastProAdCreditsHome: S,
      setupBizBroadcastProAudienceOnlyHome: C,
      setupBizBroadcastProCampaignsHome: _,
      setupBizBroadcastProDeliveryIssuesHome: L,
      setupBizBroadcastProEmptyHome: p,
      setupBizBroadcastProFundedAccount: y,
      setupBizBroadcastProInsightsHome: f,
      setupBizBroadcastProMediaCampaignHome: h,
      setupBizBroadcastProMultiAudienceHome: b,
      setupBizBroadcastProPagedCampaignsHome: g,
      setupBizBroadcastProSubscribedRecipientsHome: R,
      setupBizBroadcastProVerificationHome: v,
    };
    l.default = We;
  },
  98,
);
