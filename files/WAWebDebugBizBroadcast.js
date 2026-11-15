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
      (m(), oe("empty"));
    }
    ((p.doc =
      "Set up an onboarded BB Pro account with no campaigns or audiences (E2E)"),
      (p.paramsToExecute = []));
    function _(e) {
      (e === void 0 && (e = []),
        m(),
        (Z = [].concat(e)),
        (ee = new Set()),
        oe("empty", De()));
    }
    ((_.doc =
      "Set up an onboarded BB Pro account with in review, active, completed and not approved campaigns (E2E)"),
      (_.paramsToExecute = []));
    function f() {
      (m(), oe("empty", [Pe()]));
    }
    ((f.doc =
      "Set up an onboarded BB Pro account with one completed campaign: 25 sent, 20 delivered, 10 read, 2 replies (E2E)"),
      (f.paramsToExecute = []));
    function g(e, t) {
      (m(), oe("empty", xe(0, e), xe(e, t)));
    }
    g.doc =
      "Set up an onboarded BB Pro account whose completed campaigns, Campaign 1 onwards, span a first page and a next page of the given sizes (E2E)";
    function h(e, t) {
      (m(), oe("empty", [Ne(e, new URL(t, self.location.origin).href)]));
    }
    h.doc =
      "Set up an onboarded BB Pro account with one completed campaign whose message has the given text and same-origin header image path (E2E)";
    function y(e) {
      (e === void 0 && (e = null),
        m(),
        (G = !0),
        (z = e),
        (j = 0),
        v(),
        oe("audience_only"));
    }
    ((y.doc =
      "Set up an onboarded BB Pro account with an audience and a payment method whose campaign create succeeds in review, optionally capping the max bid at the given CPM in the smallest currency unit (E2E)"),
      (y.paramsToExecute = []));
    function C() {
      (Q == null || Q(),
        (K = new (e || (e = n("Promise")))(function (e) {
          Q = e;
        })));
    }
    ((C.doc =
      "Hold funded BB Pro campaign create responses until released, listing one in review campaign per create request (E2E)"),
      (C.paramsToExecute = []));
    function b() {
      Q == null || Q();
    }
    ((b.doc =
      "Answer held funded BB Pro campaign creates; later creates are answered at once and each still lists a campaign until the next funded setup or restore (E2E)"),
      (b.paramsToExecute = []));
    function v() {
      (Q == null || Q(), (Q = null), (K = null));
    }
    function S() {
      (r("vulture")("fpJ1xOlNxXxNCK5OpgMcRiWeqpM="), m(), oe("audience_only"));
    }
    ((S.doc =
      "Set up an onboarded BB Pro account with an audience and no campaigns (E2E)"),
      (S.paramsToExecute = []));
    function R() {
      (m(), oe("multi_audience"));
    }
    ((R.doc =
      "Set up an onboarded BB Pro account with three audiences, each with its own recipients, and no campaigns (E2E)"),
      (R.paramsToExecute = []));
    function L(e) {
      (m(), (X = e), oe("empty"));
    }
    L.doc =
      "Set up an empty onboarded BB Pro account whose Message limits show the given business verification status (E2E)";
    function E(e) {
      (m(), (Y = e), oe("audience_only"));
    }
    E.doc =
      "Set up an onboarded BB Pro account with an audience whose ad account pays with the given ad credits balance label (E2E)";
    function k() {
      (m(), (J = !0), oe("empty"));
    }
    ((k.doc =
      "Set up an empty onboarded BB Pro account whose customer base has 2,100 - 2,500 subscribed recipients (E2E)"),
      (k.paramsToExecute = []));
    function I() {
      (m(),
        oe("empty", [Fe(0, "SENDING_LIMITED", $e), Fe(1, "NOT_SENDING", Ae)]));
    }
    ((I.doc =
      "Set up an onboarded BB Pro account with a sending limited campaign (25 sent, 20 delivered, 10 read, 2 replies) and a not sending campaign (8 sent, 4 delivered, 3 read, 1 reply), both started more than two days ago (E2E)"),
      (I.paramsToExecute = []));
    var T = "1234567890123456",
      D = "1234567890123457",
      x = "1234567890123458",
      $ = "1234567890123459",
      P = "Recording audience",
      N = 25,
      M = "1234567890123460",
      w = "1234567890123461",
      A = "Visa ending in 4242",
      F = 250,
      O = {
        phone_number_status: { waba_display_phone_number: "+1 555-010-0199" },
      },
      B = {
        business_object_name: null,
        is_subscriber_pool_empty: !1,
        name: null,
        subscriber_pool_audience_size: { lower_bound: 2100, upper_bound: 2500 },
      },
      W = 1767182400,
      q = null,
      U = [],
      V = null,
      H = "empty",
      G = !1,
      z = null,
      j = 0,
      K = null,
      Q = null,
      X = null,
      Y = null,
      J = !1,
      Z = [],
      ee = new Set(),
      te = null,
      ne = new Map();
    function re() {
      oe("empty");
    }
    function oe(t, r, a) {
      if (
        (r === void 0 && (r = []),
        a === void 0 && (a = null),
        (H = t),
        (U = r),
        (V = a),
        q == null)
      ) {
        var i = self.fetch.bind(self),
          l = o("WAWebGraphQLConstants").generateFacebookGraphqlEndpoint();
        q = function () {
          Reflect.set(self, "fetch", i);
        };
        var s = 0;
        Reflect.set(self, "fetch", function (t, r) {
          var o,
            a = t instanceof Request ? t.url : String(t);
          if (a !== l) return i(t, r);
          var u = be(r == null ? void 0 : r.body),
            c = (o = ce(r == null ? void 0 : r.body)) != null ? o : ve(u);
          if (c != null) return c;
          var d = G ? de(r) : null,
            m = d != null ? K : null;
          d != null &&
            ((j += 1),
            (U = De(
              Array.from({ length: m != null ? j : 1 }, function () {
                return d.status;
              }),
              d.startTimeS,
            )));
          var p = "234567890123456" + String(s);
          return (
            (s += 1),
            (e || (e = n("Promise")))
              .resolve(
                new Response(
                  JSON.stringify({
                    data: babelHelpers.extends(
                      {},
                      ye(r == null ? void 0 : r.body),
                      le(r == null ? void 0 : r.body),
                      Ce(r == null ? void 0 : r.body),
                      Se(u),
                      d != null
                        ? {
                            create_wa_bb_pro_campaign: {
                              delivery_status_info: { status: d.status[1] },
                              id: we(0),
                            },
                          }
                        : {},
                      {
                        create_wa_marketing_messages_custom_audience: {
                          custom_audience_id: p,
                        },
                        viewer: {
                          backing_waba: babelHelpers.extends(
                            {},
                            se(),
                            {
                              id: T,
                              is_custom_param_restricted_for_first_party_paid_messaging:
                                !1,
                              name: "BB Pro test business",
                              owner_business: {
                                id: D,
                                marketing_message_whatsapp_event_sharing_consent:
                                  null,
                              },
                            },
                            J ? O : {},
                            {
                              wa_bb_pro_campaigns: {
                                edges: U,
                                page_info: ie(),
                              },
                              wa_bb_pro_custom_audiences: {
                                edges:
                                  H === "audience_only"
                                    ? [
                                        {
                                          node: {
                                            id: $,
                                            name: P,
                                            operation_status: {
                                              status_code: "NO_STATUS",
                                            },
                                            subscriber_size: N,
                                          },
                                        },
                                      ]
                                    : he(),
                              },
                            },
                          ),
                        },
                        xfb_whatsapp_bb_pro: babelHelpers.extends(
                          {
                            ad_account: babelHelpers.extends(
                              { id: M },
                              pe(G, Y),
                              { currency_code_enum: "USD" },
                            ),
                            default_subscriber_pool: babelHelpers.extends(
                              { id: x },
                              J ? B : {},
                            ),
                            sending_restriction: {
                              is_sending_allowed: !0,
                              minimum_scheduled_send_lead_time_seconds: 3600,
                              upsell_business_verification: !1,
                            },
                          },
                          _e(X),
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
              .then(function (e) {
                var t;
                return (t =
                  m == null
                    ? void 0
                    : m.then(function () {
                        return e;
                      })) != null
                  ? t
                  : e;
              })
          );
        });
      }
    }
    ((re.doc = "Mock BB Pro audience GraphQL responses (E2E)"),
      (re.paramsToExecute = []));
    var ae = "bb-pro-campaigns-next-page";
    function ie() {
      return V != null
        ? { end_cursor: ae, has_next_page: !0 }
        : { end_cursor: null, has_next_page: !1 };
    }
    function le(e) {
      return V == null ||
        typeof e != "string" ||
        !e.includes('"after":"' + ae + '"')
        ? {}
        : {
            node: {
              __typename: "WhatsAppBusinessAccount",
              id: T,
              wa_bb_pro_campaigns: {
                edges: V,
                page_info: { end_cursor: null, has_next_page: !1 },
              },
            },
          };
    }
    function se() {
      return z != null ? { audience_send_max_bid_amount: z } : {};
    }
    function ue(e) {
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
    function ce(t) {
      var o;
      if (Z.length === 0 || typeof t != "string") return null;
      var a;
      try {
        var i;
        a = (i = JSON.parse(t)) == null ? void 0 : i.variables;
      } catch (e) {
        return null;
      }
      var l = Le.findIndex(function (e, t) {
        var n;
        return we(t) === String((n = a) == null ? void 0 : n.campaign_id);
      });
      if (((o = a) == null ? void 0 : o.status) !== "PAUSED" || l === -1)
        return null;
      var s = we(l),
        u = Z.shift();
      if (u === "network_error")
        return (e || (e = n("Promise"))).reject(r("err")("Failed to fetch"));
      u === "stopped" && (ee.add(s), (U = De()));
      var c = Le[l],
        d = c[0],
        m = c[2],
        p = Me(l);
      return (e || (e = n("Promise"))).resolve(
        new Response(
          JSON.stringify({
            data: {
              update_wa_bb_pro_campaign: {
                bb_pro_can_stop: m && !p,
                bb_pro_display_status: p ? "STOPPED" : d,
                id: s,
              },
            },
          }),
          { headers: { "Content-Type": "application/json" }, status: 200 },
        ),
      );
    }
    function de(e) {
      var t = e == null ? void 0 : e.body;
      if (typeof t != "string" || !me(e)) return null;
      var n = JSON.parse(t).variables.start_time;
      return typeof n == "number"
        ? { startTimeS: n, status: ["SCHEDULED", "SCHEDULED", !0] }
        : { startTimeS: Ee, status: Le[0] };
    }
    function me(e) {
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
    function pe(e, t) {
      return e
        ? {
            billing_info: {
              payment_section_details: {
                inline_action: null,
                label: A,
                label_ax: A,
                logos: [],
                primary_action: null,
              },
              required_action: null,
            },
            payment_account: {
              __typename: "AdsPaymentAccountRawDoNotUse",
              id: w,
            },
          }
        : { billing_info: ue(t), payment_account: null };
    }
    function _e(e) {
      if (e == null) return {};
      var t = e === "NOT_STARTED" || e === "PENDING_SUBMISSION";
      return {
        business_verification: {
          completion_time: e === "VERIFIED" ? W : null,
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
          submitted_time: e === "PENDING_REVIEW" ? W : null,
          verification_status: e,
        },
        messaging_limits: {
          current_daily_limit: F,
          is_business_verified: e === "VERIFIED",
          minimum_daily_limit: F,
          unique_recipients_last_24h: 0,
          upgrade_requirements: [],
        },
      };
    }
    var fe = [
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
      ge = 1767182400;
    function he() {
      return H !== "multi_audience"
        ? []
        : fe.map(function (e) {
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
    function ye(e) {
      var t = fe.find(function (t) {
        var n = t.id;
        return (
          H === "multi_audience" &&
          typeof e == "string" &&
          e.includes('"audienceId":"' + n + '"')
        );
      });
      return t == null
        ? {}
        : {
            node: {
              __typename: "AdCustomAudience",
              creation_time: ge,
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
    function Ce(e) {
      var t = te;
      if (t == null || typeof e != "string") return {};
      var n = we(t);
      if (!e.includes('"campaignId":"' + n + '"')) return {};
      var r = Le[t],
        o = r[0],
        a = r[1],
        i = r[2],
        l = Me(t);
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
    function be(e) {
      if (typeof e != "string") return null;
      for (var t of ne) {
        var n = t[0],
          r = t[1];
        if (e.includes('"campaignId":"' + n + '"')) return r;
      }
      return null;
    }
    function ve(t) {
      return t === "request_failed"
        ? (e || (e = n("Promise"))).resolve(
            new Response(JSON.stringify({ error: Ie }), { status: Te }),
          )
        : null;
    }
    function Se(e) {
      return e === "campaign_missing" ? { node: null } : {};
    }
    function Re() {
      (q == null || q(),
        (q = null),
        (X = null),
        (Y = null),
        (J = !1),
        (Z = []),
        (ee = new Set()),
        (V = null),
        (G = !1),
        (z = null),
        (te = null),
        (j = 0),
        v(),
        (ne = new Map()));
    }
    ((Re.doc = "Restore GraphQL responses after a BB Pro audience E2E mock"),
      (Re.paramsToExecute = []));
    var Le = [
        ["IN_REVIEW", "IN_REVIEW", !0],
        ["ACTIVE", "ACTIVE", !0],
        ["COMPLETED", "COMPLETED", !1],
        ["NOT_APPROVED", "REJECTED", !1],
      ],
      Ee = 1767182400,
      ke = "BBPROCARD",
      Ie = { code: 2, message: "Service temporarily unavailable" },
      Te = 500;
    function De(e, t) {
      return (
        e === void 0 && (e = Le),
        t === void 0 && (t = Ee),
        e.map(function (e, n) {
          var r = e[0],
            o = e[1],
            a = e[2];
          return {
            cursor: String(n),
            node: {
              __typename: "XFBWhatsAppBusinessMMLiteCampaign",
              bb_pro_can_stop: a && !Me(n),
              bb_pro_display_status: Me(n) ? "STOPPED" : r,
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
              id: we(n),
            },
          };
        })
      );
    }
    function xe(e, t) {
      return De(
        Array.from({ length: e + t }, function () {
          return ["COMPLETED", "COMPLETED", !1];
        }),
      ).slice(e);
    }
    var $e = {
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
      start_time: Ee,
      template: null,
    };
    function Pe() {
      return {
        cursor: "0",
        node: {
          __typename: "XFBWhatsAppBusinessMMLiteCampaign",
          bb_pro_can_stop: !1,
          bb_pro_display_status: "COMPLETED",
          broadcast_insights: $e,
          campaign_name: "Insights campaign",
          delivery_status_info: { extra_data: null, status: "COMPLETED" },
          id: "345678901234570",
        },
      };
    }
    function Ne(e, t) {
      return {
        cursor: "0",
        node: {
          __typename: "XFBWhatsAppBusinessMMLiteCampaign",
          bb_pro_can_stop: !1,
          bb_pro_display_status: "COMPLETED",
          broadcast_insights: babelHelpers.extends({}, $e, {
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
          id: we(0),
        },
      };
    }
    function Me(e) {
      return ee.has(we(e));
    }
    function we(e) {
      return "34567890123456" + String(e);
    }
    var Ae = babelHelpers.extends({}, $e, {
      ads_amount_spent: 0.4,
      ads_delivered: { count: 4 },
      first_customer_reply: { count: 1 },
      read: { count: 3 },
      read_rate: 75,
      reply_rate: 25,
      sent: { count: 8 },
    });
    function Fe(e, t, n) {
      return {
        cursor: String(e),
        node: {
          __typename: "XFBWhatsAppBusinessMMLiteCampaign",
          bb_pro_can_stop: !1,
          bb_pro_display_status: t,
          broadcast_insights: n,
          campaign_name: "Campaign " + String(e + 1),
          delivery_status_info: { extra_data: null, status: "ACTIVE" },
          id: we(e),
        },
      };
    }
    var Oe = 1e4;
    function Be(t) {
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
                      Oe +
                      "ms",
                  ),
                ));
            }, Oe),
              o("WAWebChatCollection").ChatCollection.on("add", i));
          });
    }
    function We(e, t) {
      return qe.apply(this, arguments);
    }
    function qe() {
      return (
        (qe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
          return (yield Be(n), n);
        })),
        qe.apply(this, arguments)
      );
    }
    We.doc = "Create a BB audience from a name and phone numbers, no UI (E2E)";
    function Ue() {
      return Ve.apply(this, arguments);
    }
    function Ve() {
      return (
        (Ve = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebBroadcastListAction").createBroadcastListAction(
            { broadcastListName: P, contacts: [], customAudienceFbid: $ },
          );
          return (yield Be(e), e);
        })),
        Ve.apply(this, arguments)
      );
    }
    ((Ue.doc =
      "Create the local chat of the mocked BB Pro audience, no UI (E2E)"),
      (Ue.paramsToExecute = []));
    function He(e, t, n, r) {
      return Ge.apply(this, arguments);
    }
    function Ge() {
      return (
        (Ge = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            a === void 0 && (a = "home_status");
            var i = ze(),
              l = we(e);
            (a === "home_status" ? (te = e) : ne.set(l, a),
              yield r("WAWebBizBroadcastProLocalCampaignCardAction")({
                broadcastJid: i,
                campaignId: l,
                campaignMessageData: {
                  attachmentData: null,
                  buttonData: { displayText: n, type: "quick_reply" },
                  message: t,
                },
                campaignTimestamp: o("WATimeUtils").unixTime(),
                messageId: "" + ke + l,
              }));
          },
        )),
        Ge.apply(this, arguments)
      );
    }
    He.doc =
      "Seed the active Pro chat with a mocked campaign card with a quick reply (E2E)";
    function ze() {
      r("vulture")("m5aRIlrFKSn_stY9NCRYBRnkr64=");
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (e == null) throw r("err")("No active chat");
      return o("WAWebWidToJid").widToBroadcastJid(e.id);
    }
    function je() {
      return Ke.apply(this, arguments);
    }
    function Ke() {
      return (
        (Ke = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("9B3P7T0Qee3i5KkBAFG2iMCYBcM=");
          var e = ze(),
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
        Ke.apply(this, arguments)
      );
    }
    ((je.doc =
      "Create a test PROCESSING campaign for the active broadcast chat (E2E)"),
      (je.paramsToExecute = []));
    function Qe() {
      return Xe.apply(this, arguments);
    }
    function Xe() {
      return (
        (Xe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("xtFM8UIjKS2O9QInZyOXgIZvjr4=");
          var t = ze(),
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
        Xe.apply(this, arguments)
      );
    }
    ((Qe.doc =
      "Complete all PROCESSING campaigns for the active broadcast chat (E2E)"),
      (Qe.paramsToExecute = []));
    function Ye(e, t) {
      return (
        r("vulture")("8rJX9JincJN0bS6ndQL2fJMGQEQ="),
        o(
          "WAWebBizBroadcastProUpdateCampaignAction",
        ).rescheduleBizBroadcastProCampaign(e, t)
      );
    }
    Ye.doc =
      "Reschedule a BB Pro campaign: new start (epoch s); stop auto-set to +5d";
    var Je = {
      acceptBizBroadcastTos: u,
      completeTestCampaignsForActiveChat: Qe,
      createBizBroadcastAudience: We,
      createBizBroadcastProMockAudienceChat: Ue,
      createBizBroadcastProMockCampaignCardForActiveChat: He,
      createTestProcessingCampaignForActiveChat: je,
      holdBizBroadcastProCampaignCreates: C,
      mockBizBroadcastProAudienceGraphQLResponses: re,
      releaseBizBroadcastProCampaignCreates: b,
      rescheduleBizBroadcastProCampaign: Ye,
      restoreBizBroadcastProAudienceGraphQLResponses: Re,
      setBizBroadcastDeviceCapability: s,
      setBizBroadcastProFirstTimeSetup: d,
      setBizBroadcastProNuxEligible: c,
      setBizBroadcastProOnboarded: m,
      setupBizBroadcastProAdCreditsHome: E,
      setupBizBroadcastProAudienceOnlyHome: S,
      setupBizBroadcastProCampaignsHome: _,
      setupBizBroadcastProDeliveryIssuesHome: I,
      setupBizBroadcastProEmptyHome: p,
      setupBizBroadcastProFundedAccount: y,
      setupBizBroadcastProInsightsHome: f,
      setupBizBroadcastProMediaCampaignHome: h,
      setupBizBroadcastProMultiAudienceHome: R,
      setupBizBroadcastProPagedCampaignsHome: g,
      setupBizBroadcastProSubscribedRecipientsHome: k,
      setupBizBroadcastProVerificationHome: L,
    };
    l.default = Je;
  },
  98,
);
