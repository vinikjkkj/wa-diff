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
      (m(), ue("empty"));
    }
    ((p.doc =
      "Set up an onboarded BB Pro account with no campaigns or audiences (E2E)"),
      (p.paramsToExecute = []));
    function _(e) {
      (e === void 0 && (e = []),
        m(),
        (ne = [].concat(e)),
        (re = new Set()),
        ue("empty", Fe()));
    }
    ((_.doc =
      "Set up an onboarded BB Pro account with in review, active, completed and not approved campaigns (E2E)"),
      (_.paramsToExecute = []));
    function f() {
      (m(), ue("empty", [We()]));
    }
    ((f.doc =
      "Set up an onboarded BB Pro account with one completed campaign: 25 sent, 20 delivered, 10 read, 2 replies (E2E)"),
      (f.paramsToExecute = []));
    function g(e, t) {
      (m(), ue("empty", Oe(0, e), Oe(e, t)));
    }
    g.doc =
      "Set up an onboarded BB Pro account whose completed campaigns, Campaign 1 onwards, span a first page and a next page of the given sizes (E2E)";
    function h(e, t) {
      (m(), ue("empty", [qe(e, new URL(t, self.location.origin).href)]));
    }
    h.doc =
      "Set up an onboarded BB Pro account with one completed campaign whose message has the given text and same-origin header image path (E2E)";
    function y() {
      m();
      var e = o("WATimeUtils").unixTime() - Ue;
      ue("empty", [
        He(
          0,
          "IN_REVIEW",
          babelHelpers.extends({}, Be, {
            ads_amount_spent: null,
            ads_delivered: null,
            first_customer_reply: null,
            read: null,
            read_rate: null,
            reply_rate: null,
            sent: null,
            start_time: e,
          }),
        ),
        He(
          1,
          "ACTIVE",
          babelHelpers.extends({}, Be, { ads_amount_spent: Ve, start_time: e }),
        ),
      ]);
    }
    ((y.doc =
      "Set up an onboarded BB Pro account with an in review campaign and an active campaign that started an hour ago: 25 sent, 20 delivered, 10 read, 2 replies (E2E)"),
      (y.paramsToExecute = []));
    function C(e) {
      (e === void 0 && (e = null),
        m(),
        (K = !0),
        (Q = e),
        (X = 0),
        S(),
        ue("audience_only"));
    }
    ((C.doc =
      "Set up an onboarded BB Pro account with an audience and a payment method whose campaign create succeeds in review, optionally capping the max bid at the given CPM in the smallest currency unit (E2E)"),
      (C.paramsToExecute = []));
    function b() {
      (J == null || J(),
        (Y = new (e || (e = n("Promise")))(function (e) {
          J = e;
        })));
    }
    ((b.doc =
      "Hold funded BB Pro campaign create responses until released, listing one in review campaign per create request (E2E)"),
      (b.paramsToExecute = []));
    function v() {
      J == null || J();
    }
    ((v.doc =
      "Answer held funded BB Pro campaign creates; later creates are answered at once and each still lists a campaign until the next funded setup or restore (E2E)"),
      (v.paramsToExecute = []));
    function S() {
      (J == null || J(), (J = null), (Y = null));
    }
    function R() {
      (r("vulture")("fpJ1xOlNxXxNCK5OpgMcRiWeqpM="), m(), ue("audience_only"));
    }
    ((R.doc =
      "Set up an onboarded BB Pro account with an audience and no campaigns (E2E)"),
      (R.paramsToExecute = []));
    function L() {
      (m(), ue("multi_audience"));
    }
    ((L.doc =
      "Set up an onboarded BB Pro account with three audiences, each with its own recipients, and no campaigns (E2E)"),
      (L.paramsToExecute = []));
    function E(e) {
      (m(), (ie = e), ue("multi_audience"));
    }
    E.doc =
      "Set up the multi-audience BB Pro home plus a Loyal customers audience with the given number of recipients, Customer 01 onwards, served one requested page at a time (E2E)";
    function k(e) {
      (m(), (Z = e), ue("empty"));
    }
    k.doc =
      "Set up an empty onboarded BB Pro account whose Message limits show the given business verification status (E2E)";
    function I(e) {
      (m(), (ee = e), ue("audience_only"));
    }
    I.doc =
      "Set up an onboarded BB Pro account with an audience whose ad account pays with the given ad credits balance label (E2E)";
    function T() {
      (m(), (te = !0), ue("empty"));
    }
    ((T.doc =
      "Set up an empty onboarded BB Pro account whose customer base has 2,100 - 2,500 subscribed recipients (E2E)"),
      (T.paramsToExecute = []));
    function D() {
      (m(),
        ue("empty", [Ke(0, "SENDING_LIMITED", Be), Ke(1, "NOT_SENDING", je)]));
    }
    ((D.doc =
      "Set up an onboarded BB Pro account with a sending limited campaign (25 sent, 20 delivered, 10 read, 2 replies) and a not sending campaign (8 sent, 4 delivered, 3 read, 1 reply), both started more than two days ago (E2E)"),
      (D.paramsToExecute = []));
    function x() {
      (_(), (le = 1));
    }
    ((x.doc =
      "Set up BB Pro campaigns Home whose first campaigns query fails with a network error (E2E)"),
      (x.paramsToExecute = []));
    var $ = "1234567890123456",
      P = "1234567890123457",
      N = "1234567890123458",
      M = "1234567890123459",
      w = "Recording audience",
      A = 25,
      F = "1234567890123460",
      O = "1234567890123461",
      B = "Visa ending in 4242",
      W = 250,
      q = {
        phone_number_status: { waba_display_phone_number: "+1 555-010-0199" },
      },
      U = {
        business_object_name: null,
        is_subscriber_pool_empty: !1,
        name: null,
        subscriber_pool_audience_size: { lower_bound: 2100, upper_bound: 2500 },
      },
      V = 1767182400,
      H = null,
      G = [],
      z = null,
      j = "empty",
      K = !1,
      Q = null,
      X = 0,
      Y = null,
      J = null,
      Z = null,
      ee = null,
      te = !1,
      ne = [],
      re = new Set(),
      oe = null,
      ae = new Map(),
      ie = null,
      le = 0;
    function se() {
      ue("empty");
    }
    function ue(t, a, i) {
      if (
        (a === void 0 && (a = []),
        i === void 0 && (i = null),
        (j = t),
        (G = a),
        (z = i),
        H == null)
      ) {
        var l = self.fetch.bind(self),
          s = o("WAWebGraphQLConstants").generateFacebookGraphqlEndpoint();
        H = function () {
          Reflect.set(self, "fetch", l);
        };
        var u = 0;
        Reflect.set(self, "fetch", function (t, o) {
          var a,
            i = t instanceof Request ? t.url : String(t);
          if (i !== s) return l(t, o);
          if (fe(o == null ? void 0 : o.body))
            return (e || (e = n("Promise"))).reject(
              r("err")("Failed to fetch"),
            );
          var c = Te(o == null ? void 0 : o.body),
            d = (a = ge(o == null ? void 0 : o.body)) != null ? a : De(c);
          if (d != null) return d;
          var m = K ? he(o) : null,
            p = m != null ? Y : null;
          m != null &&
            ((X += 1),
            (G = Fe(
              Array.from({ length: p != null ? X : 1 }, function () {
                return m.status;
              }),
              m.startTimeS,
            )));
          var _ = "234567890123456" + String(u);
          return (
            (u += 1),
            (e || (e = n("Promise")))
              .resolve(
                new Response(
                  JSON.stringify({
                    data: babelHelpers.extends(
                      {},
                      ke(o == null ? void 0 : o.body),
                      me(o == null ? void 0 : o.body),
                      Ie(o == null ? void 0 : o.body),
                      xe(c),
                      m != null
                        ? {
                            create_wa_bb_pro_campaign: {
                              delivery_status_info: { status: m.status[1] },
                              id: ze(0),
                            },
                          }
                        : {},
                      {
                        create_wa_marketing_messages_custom_audience: {
                          custom_audience_id: _,
                        },
                        viewer: {
                          backing_waba: babelHelpers.extends(
                            {},
                            pe(),
                            {
                              id: $,
                              is_custom_param_restricted_for_first_party_paid_messaging:
                                !1,
                              name: "BB Pro test business",
                              owner_business: {
                                id: P,
                                marketing_message_whatsapp_event_sharing_consent:
                                  null,
                              },
                            },
                            te ? q : {},
                            {
                              wa_bb_pro_campaigns: {
                                edges: G,
                                page_info: de(),
                              },
                              wa_bb_pro_custom_audiences: {
                                edges:
                                  j === "audience_only"
                                    ? [
                                        {
                                          node: {
                                            id: M,
                                            name: w,
                                            operation_status: {
                                              status_code: "NO_STATUS",
                                            },
                                            subscriber_size: A,
                                          },
                                        },
                                      ]
                                    : Ee(),
                              },
                            },
                          ),
                        },
                        xfb_whatsapp_bb_pro: babelHelpers.extends(
                          {
                            ad_account: babelHelpers.extends(
                              { id: F },
                              Ce(K, ee),
                              { currency_code_enum: "USD" },
                            ),
                            default_subscriber_pool: babelHelpers.extends(
                              { id: N },
                              te ? U : {},
                            ),
                            sending_restriction: {
                              is_sending_allowed: !0,
                              minimum_scheduled_send_lead_time_seconds: 3600,
                              upsell_business_verification: !1,
                            },
                          },
                          be(Z),
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
                  p == null
                    ? void 0
                    : p.then(function () {
                        return e;
                      })) != null
                  ? t
                  : e;
              })
          );
        });
      }
    }
    ((se.doc = "Mock BB Pro audience GraphQL responses (E2E)"),
      (se.paramsToExecute = []));
    var ce = "bb-pro-campaigns-next-page";
    function de() {
      return z != null
        ? { end_cursor: ce, has_next_page: !0 }
        : { end_cursor: null, has_next_page: !1 };
    }
    function me(e) {
      return z == null ||
        typeof e != "string" ||
        !e.includes('"after":"' + ce + '"')
        ? {}
        : {
            node: {
              __typename: "WhatsAppBusinessAccount",
              id: $,
              wa_bb_pro_campaigns: {
                edges: z,
                page_info: { end_cursor: null, has_next_page: !1 },
              },
            },
          };
    }
    function pe() {
      return Q != null ? { audience_send_max_bid_amount: Q } : {};
    }
    function _e(e) {
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
    function fe(e) {
      if (le === 0 || typeof e != "string") return !1;
      var t;
      try {
        var n;
        t = (n = JSON.parse(e)) == null ? void 0 : n.variables;
      } catch (e) {
        return !1;
      }
      return t == null || !Object.hasOwn(t, "after") ? !1 : ((le -= 1), !0);
    }
    function ge(t) {
      var o;
      if (ne.length === 0 || typeof t != "string") return null;
      var a;
      try {
        var i;
        a = (i = JSON.parse(t)) == null ? void 0 : i.variables;
      } catch (e) {
        return null;
      }
      var l = Pe.findIndex(function (e, t) {
        var n;
        return ze(t) === String((n = a) == null ? void 0 : n.campaign_id);
      });
      if (((o = a) == null ? void 0 : o.status) !== "PAUSED" || l === -1)
        return null;
      var s = ze(l),
        u = ne.shift();
      if (u === "network_error")
        return (e || (e = n("Promise"))).reject(r("err")("Failed to fetch"));
      u === "stopped" && (re.add(s), (G = Fe()));
      var c = Pe[l],
        d = c[0],
        m = c[2],
        p = Ge(l);
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
    function he(e) {
      var t = e == null ? void 0 : e.body;
      if (typeof t != "string" || !ye(e)) return null;
      var n = JSON.parse(t).variables.start_time;
      return typeof n == "number"
        ? { startTimeS: n, status: ["SCHEDULED", "SCHEDULED", !0] }
        : { startTimeS: Ne, status: Pe[0] };
    }
    function ye(e) {
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
    function Ce(e, t) {
      return e
        ? {
            billing_info: {
              payment_section_details: {
                inline_action: null,
                label: B,
                label_ax: B,
                logos: [],
                primary_action: null,
              },
              required_action: null,
            },
            payment_account: {
              __typename: "AdsPaymentAccountRawDoNotUse",
              id: O,
            },
          }
        : { billing_info: _e(t), payment_account: null };
    }
    function be(e) {
      if (e == null) return {};
      var t = e === "NOT_STARTED" || e === "PENDING_SUBMISSION";
      return {
        business_verification: {
          completion_time: e === "VERIFIED" ? V : null,
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
          submitted_time: e === "PENDING_REVIEW" ? V : null,
          verification_status: e,
        },
        messaging_limits: {
          current_daily_limit: W,
          is_business_verified: e === "VERIFIED",
          minimum_daily_limit: W,
          unique_recipients_last_24h: 0,
          upgrade_requirements: [],
        },
      };
    }
    var ve = [
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
      Se = 1767182400,
      Re = "1234567890123473";
    function Le() {
      var e = ie;
      return e == null
        ? ve
        : [].concat(ve, [
            {
              id: Re,
              name: "Loyal customers",
              recipientNames: Array.from({ length: e }, function (e, t) {
                return "Customer " + String(t + 1).padStart(2, "0");
              }),
            },
          ]);
    }
    function Ee() {
      return j !== "multi_audience"
        ? []
        : Le().map(function (e) {
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
    function ke(e) {
      var t = Le().find(function (t) {
        var n = t.id;
        return (
          j === "multi_audience" &&
          typeof e == "string" &&
          e.includes('"audienceId":"' + n + '"')
        );
      });
      if (t == null || typeof e != "string") return {};
      var n = JSON.parse(e).variables,
        r = n.after,
        o = n.first,
        a = r == null ? 0 : Number(r) + 1,
        i = o == null ? t.recipientNames.length : a + Number(o),
        l = i < t.recipientNames.length;
      return {
        node: {
          __typename: "AdCustomAudience",
          creation_time: Se,
          id: t.id,
          name: t.name,
          operation_status: { status_code: "NO_STATUS" },
          subscriber_size: t.recipientNames.length,
        },
        xfb_whatsapp_subscriber_list_members: {
          edges: t.recipientNames
            .map(function (e, n) {
              return {
                cursor: String(n),
                node: {
                  __typename: "XFBWhatsAppSubscriberListMember",
                  full_name: e,
                  phone_number:
                    "1555010" + t.id.slice(-2) + String(n).padStart(2, "0"),
                },
              };
            })
            .slice(a, i),
          page_info: l
            ? { end_cursor: String(i - 1), has_next_page: !0 }
            : { end_cursor: null, has_next_page: !1 },
        },
      };
    }
    function Ie(e) {
      var t = oe;
      if (t == null || typeof e != "string") return {};
      var n = ze(t);
      if (!e.includes('"campaignId":"' + n + '"')) return {};
      var r = Pe[t],
        o = r[0],
        a = r[1],
        i = r[2],
        l = Ge(t);
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
    function Te(e) {
      if (typeof e != "string") return null;
      for (var t of ae) {
        var n = t[0],
          r = t[1];
        if (e.includes('"campaignId":"' + n + '"')) return r;
      }
      return null;
    }
    function De(t) {
      return t === "request_failed"
        ? (e || (e = n("Promise"))).resolve(
            new Response(JSON.stringify({ error: we }), { status: Ae }),
          )
        : null;
    }
    function xe(e) {
      return e === "campaign_missing" ? { node: null } : {};
    }
    function $e() {
      (H == null || H(),
        (H = null),
        (Z = null),
        (ee = null),
        (te = !1),
        (ne = []),
        (re = new Set()),
        (z = null),
        (K = !1),
        (Q = null),
        (oe = null),
        (X = 0),
        S(),
        (ae = new Map()),
        (ie = null),
        (le = 0));
    }
    (($e.doc = "Restore GraphQL responses after a BB Pro audience E2E mock"),
      ($e.paramsToExecute = []));
    var Pe = [
        ["IN_REVIEW", "IN_REVIEW", !0],
        ["ACTIVE", "ACTIVE", !0],
        ["COMPLETED", "COMPLETED", !1],
        ["NOT_APPROVED", "REJECTED", !1],
      ],
      Ne = 1767182400,
      Me = "BBPROCARD",
      we = { code: 2, message: "Service temporarily unavailable" },
      Ae = 500;
    function Fe(e, t) {
      return (
        e === void 0 && (e = Pe),
        t === void 0 && (t = Ne),
        e.map(function (e, n) {
          var r = e[0],
            o = e[1],
            a = e[2];
          return {
            cursor: String(n),
            node: {
              __typename: "XFBWhatsAppBusinessMMLiteCampaign",
              bb_pro_can_stop: a && !Ge(n),
              bb_pro_display_status: Ge(n) ? "STOPPED" : r,
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
              id: ze(n),
            },
          };
        })
      );
    }
    function Oe(e, t) {
      return Fe(
        Array.from({ length: e + t }, function () {
          return ["COMPLETED", "COMPLETED", !1];
        }),
      ).slice(e);
    }
    var Be = {
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
      start_time: Ne,
      template: null,
    };
    function We() {
      return {
        cursor: "0",
        node: {
          __typename: "XFBWhatsAppBusinessMMLiteCampaign",
          bb_pro_can_stop: !1,
          bb_pro_display_status: "COMPLETED",
          broadcast_insights: Be,
          campaign_name: "Insights campaign",
          delivery_status_info: { extra_data: null, status: "COMPLETED" },
          id: "345678901234570",
        },
      };
    }
    function qe(e, t) {
      return {
        cursor: "0",
        node: {
          __typename: "XFBWhatsAppBusinessMMLiteCampaign",
          bb_pro_can_stop: !1,
          bb_pro_display_status: "COMPLETED",
          broadcast_insights: babelHelpers.extends({}, Be, {
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
          id: ze(0),
        },
      };
    }
    var Ue = 3600,
      Ve = 0.5;
    function He(e, t, n) {
      return {
        cursor: String(e),
        node: {
          __typename: "XFBWhatsAppBusinessMMLiteCampaign",
          bb_pro_can_stop: !0,
          bb_pro_display_status: t,
          broadcast_insights: n,
          campaign_name: "Campaign " + String(e + 1),
          delivery_status_info: { extra_data: null, status: t },
          id: ze(e),
        },
      };
    }
    function Ge(e) {
      return re.has(ze(e));
    }
    function ze(e) {
      return "34567890123456" + String(e);
    }
    var je = babelHelpers.extends({}, Be, {
      ads_amount_spent: 0.4,
      ads_delivered: { count: 4 },
      first_customer_reply: { count: 1 },
      read: { count: 3 },
      read_rate: 75,
      reply_rate: 25,
      sent: { count: 8 },
    });
    function Ke(e, t, n) {
      return {
        cursor: String(e),
        node: {
          __typename: "XFBWhatsAppBusinessMMLiteCampaign",
          bb_pro_can_stop: !1,
          bb_pro_display_status: t,
          broadcast_insights: n,
          campaign_name: "Campaign " + String(e + 1),
          delivery_status_info: { extra_data: null, status: "ACTIVE" },
          id: ze(e),
        },
      };
    }
    var Qe = 1e4;
    function Xe(t) {
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
                      Qe +
                      "ms",
                  ),
                ));
            }, Qe),
              o("WAWebChatCollection").ChatCollection.on("add", i));
          });
    }
    function Ye(e, t) {
      return Je.apply(this, arguments);
    }
    function Je() {
      return (
        (Je = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
          return (yield Xe(n), n);
        })),
        Je.apply(this, arguments)
      );
    }
    Ye.doc = "Create a BB audience from a name and phone numbers, no UI (E2E)";
    function Ze() {
      return et.apply(this, arguments);
    }
    function et() {
      return (
        (et = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebBroadcastListAction").createBroadcastListAction(
            { broadcastListName: w, contacts: [], customAudienceFbid: M },
          );
          return (yield Xe(e), e);
        })),
        et.apply(this, arguments)
      );
    }
    ((Ze.doc =
      "Create the local chat of the mocked BB Pro audience, no UI (E2E)"),
      (Ze.paramsToExecute = []));
    function tt(e, t, n, r) {
      return nt.apply(this, arguments);
    }
    function nt() {
      return (
        (nt = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            a === void 0 && (a = "home_status");
            var i = rt(),
              l = ze(e);
            (a === "home_status" ? (oe = e) : ae.set(l, a),
              yield r("WAWebBizBroadcastProLocalCampaignCardAction")({
                broadcastJid: i,
                campaignId: l,
                campaignMessageData: {
                  attachmentData: null,
                  buttonData: { displayText: n, type: "quick_reply" },
                  message: t,
                },
                campaignTimestamp: o("WATimeUtils").unixTime(),
                messageId: "" + Me + l,
              }));
          },
        )),
        nt.apply(this, arguments)
      );
    }
    tt.doc =
      "Seed the active Pro chat with a mocked campaign card with a quick reply (E2E)";
    function rt() {
      r("vulture")("m5aRIlrFKSn_stY9NCRYBRnkr64=");
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (e == null) throw r("err")("No active chat");
      return o("WAWebWidToJid").widToBroadcastJid(e.id);
    }
    function ot() {
      return at.apply(this, arguments);
    }
    function at() {
      return (
        (at = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("9B3P7T0Qee3i5KkBAFG2iMCYBcM=");
          var e = rt(),
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
        at.apply(this, arguments)
      );
    }
    ((ot.doc =
      "Create a test PROCESSING campaign for the active broadcast chat (E2E)"),
      (ot.paramsToExecute = []));
    function it() {
      return lt.apply(this, arguments);
    }
    function lt() {
      return (
        (lt = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("xtFM8UIjKS2O9QInZyOXgIZvjr4=");
          var t = rt(),
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
        lt.apply(this, arguments)
      );
    }
    ((it.doc =
      "Complete all PROCESSING campaigns for the active broadcast chat (E2E)"),
      (it.paramsToExecute = []));
    function st(e, t) {
      return (
        r("vulture")("8rJX9JincJN0bS6ndQL2fJMGQEQ="),
        o(
          "WAWebBizBroadcastProUpdateCampaignAction",
        ).rescheduleBizBroadcastProCampaign(e, t)
      );
    }
    st.doc =
      "Reschedule a BB Pro campaign: new start (epoch s); stop auto-set to +5d";
    var ut = {
      acceptBizBroadcastTos: u,
      completeTestCampaignsForActiveChat: it,
      createBizBroadcastAudience: Ye,
      createBizBroadcastProMockAudienceChat: Ze,
      createBizBroadcastProMockCampaignCardForActiveChat: tt,
      createTestProcessingCampaignForActiveChat: ot,
      holdBizBroadcastProCampaignCreates: b,
      mockBizBroadcastProAudienceGraphQLResponses: se,
      releaseBizBroadcastProCampaignCreates: v,
      rescheduleBizBroadcastProCampaign: st,
      restoreBizBroadcastProAudienceGraphQLResponses: $e,
      setBizBroadcastDeviceCapability: s,
      setBizBroadcastProFirstTimeSetup: d,
      setBizBroadcastProNuxEligible: c,
      setBizBroadcastProOnboarded: m,
      setupBizBroadcastProAdCreditsHome: I,
      setupBizBroadcastProAudienceOnlyHome: R,
      setupBizBroadcastProCampaignsHome: _,
      setupBizBroadcastProCampaignsHomeFailingOnce: x,
      setupBizBroadcastProDeliveryIssuesHome: D,
      setupBizBroadcastProEmptyHome: p,
      setupBizBroadcastProFundedAccount: C,
      setupBizBroadcastProInsightsHome: f,
      setupBizBroadcastProLifecycleInsightsHome: y,
      setupBizBroadcastProMediaCampaignHome: h,
      setupBizBroadcastProMultiAudienceHome: L,
      setupBizBroadcastProPagedAudienceHome: E,
      setupBizBroadcastProPagedCampaignsHome: g,
      setupBizBroadcastProSubscribedRecipientsHome: T,
      setupBizBroadcastProVerificationHome: k,
    };
    l.default = ut;
  },
  98,
);
