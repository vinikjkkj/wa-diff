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
      (m(), fe("empty"));
    }
    ((p.doc =
      "Set up an onboarded BB Pro account with no campaigns or audiences (E2E)"),
      (p.paramsToExecute = []));
    function _(e) {
      (e === void 0 && (e = []),
        m(),
        (se = [].concat(e)),
        (ue = new Set()),
        fe("empty", je()));
    }
    ((_.doc =
      "Set up an onboarded BB Pro account with in review, active, completed and not approved campaigns (E2E)"),
      (_.paramsToExecute = []));
    function f() {
      (m(), fe("empty", [Xe()]));
    }
    ((f.doc =
      "Set up an onboarded BB Pro account with one completed campaign: 25 sent, 20 delivered, 10 read, 2 replies (E2E)"),
      (f.paramsToExecute = []));
    function g(e, t) {
      (m(), fe("empty", Ke(0, e), Ke(e, t)));
    }
    g.doc =
      "Set up an onboarded BB Pro account whose completed campaigns, Campaign 1 onwards, span a first page and a next page of the given sizes (E2E)";
    function h(e, t) {
      (m(), fe("empty", [Ye(e, new URL(t, self.location.origin).href)]));
    }
    h.doc =
      "Set up an onboarded BB Pro account with one completed campaign whose message has the given text and same-origin header image path (E2E)";
    function y() {
      m();
      var e = o("WATimeUtils").unixTime() - Je;
      fe("empty", [
        et(
          0,
          "IN_REVIEW",
          babelHelpers.extends({}, Qe, {
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
        et(
          1,
          "ACTIVE",
          babelHelpers.extends({}, Qe, { ads_amount_spent: Ze, start_time: e }),
        ),
      ]);
    }
    ((y.doc =
      "Set up an onboarded BB Pro account with an in review campaign and an active campaign that started an hour ago: 25 sent, 20 delivered, 10 read, 2 replies (E2E)"),
      (y.paramsToExecute = []));
    function C(e) {
      (e === void 0 && (e = null),
        m(),
        (J = !0),
        (Z = e),
        (ee = 0),
        (re = !1),
        R(),
        fe("audience_only"));
    }
    ((C.doc =
      "Set up an onboarded BB Pro account with an audience and a payment method whose campaign create succeeds in review, optionally capping the max bid at the given CPM in the smallest currency unit (E2E)"),
      (C.paramsToExecute = []));
    function b() {
      (ne == null || ne(),
        (te = new (e || (e = n("Promise")))(function (e) {
          ne = e;
        })));
    }
    ((b.doc =
      "Hold funded BB Pro campaign create responses until released, listing one in review campaign per create request (E2E)"),
      (b.paramsToExecute = []));
    function v() {
      ne == null || ne();
    }
    ((v.doc =
      "Answer held funded BB Pro campaign creates; later creates are answered at once and each still lists a campaign until the next funded setup or restore (E2E)"),
      (v.paramsToExecute = []));
    function S() {
      re = !0;
    }
    ((S.doc =
      "Reject the next funded BB Pro campaign create like an offline fetch, listing no campaign for it; later creates succeed (E2E)"),
      (S.paramsToExecute = []));
    function R() {
      (ne == null || ne(), (ne = null), (te = null));
    }
    function L() {
      (r("vulture")("fpJ1xOlNxXxNCK5OpgMcRiWeqpM="), m(), fe("audience_only"));
    }
    ((L.doc =
      "Set up an onboarded BB Pro account with an audience and no campaigns (E2E)"),
      (L.paramsToExecute = []));
    function E() {
      (m(), fe("multi_audience"));
    }
    ((E.doc =
      "Set up an onboarded BB Pro account with three audiences, each with its own recipients, and no campaigns (E2E)"),
      (E.paramsToExecute = []));
    function k(e) {
      (m(), (me = e), fe("multi_audience"));
    }
    k.doc =
      "Set up the multi-audience BB Pro home plus a Loyal customers audience with the given number of recipients, Customer 01 onwards, served one requested page at a time (E2E)";
    function I() {
      (E(), (Y = 1));
    }
    ((I.doc =
      "Set up the multi-audience BB Pro home whose first audience details read is still processing and later reads are settled (E2E)"),
      (I.paramsToExecute = []));
    function T() {
      (m(), fe("deletable_audience"));
    }
    ((T.doc =
      "Set up an onboarded BB Pro account with one audience whose delete succeeds and leaves no audiences, and no campaigns (E2E)"),
      (T.paramsToExecute = []));
    function D(e) {
      (m(), (oe = e), fe("empty"));
    }
    D.doc =
      "Set up an empty onboarded BB Pro account whose Message limits show the given business verification status (E2E)";
    function x(e) {
      (m(), (ae = e), fe("audience_only"));
    }
    x.doc =
      "Set up an onboarded BB Pro account with an audience whose ad account pays with the given ad credits balance label (E2E)";
    function $() {
      (m(), (ie = !0), fe("empty"));
    }
    (($.doc =
      "Set up an empty onboarded BB Pro account whose customer base has 2,100 - 2,500 subscribed recipients (E2E)"),
      ($.paramsToExecute = []));
    function P() {
      (m(),
        fe("empty", [ot(0, "SENDING_LIMITED", Qe), ot(1, "NOT_SENDING", rt)]));
    }
    ((P.doc =
      "Set up an onboarded BB Pro account with a sending limited campaign (25 sent, 20 delivered, 10 read, 2 replies) and a not sending campaign (8 sent, 4 delivered, 3 read, 1 reply), both started more than two days ago (E2E)"),
      (P.paramsToExecute = []));
    function N() {
      (_(), (pe = 1));
    }
    ((N.doc =
      "Set up BB Pro campaigns Home whose first campaigns query fails with a network error (E2E)"),
      (N.paramsToExecute = []));
    var M = "1234567890123456",
      w = "1234567890123457",
      A = "1234567890123458",
      F = "1234567890123459",
      O = "Recording audience",
      B = 25,
      W = "1234567890123460",
      q = "1234567890123461",
      U = "Visa ending in 4242",
      V = 250,
      H = {
        phone_number_status: { waba_display_phone_number: "+1 555-010-0199" },
      },
      G = {
        business_object_name: null,
        is_subscriber_pool_empty: !1,
        name: null,
        subscriber_pool_audience_size: { lower_bound: 2100, upper_bound: 2500 },
      },
      z = 1767182400,
      j = null,
      K = [],
      Q = null,
      X = "empty",
      Y = 0,
      J = !1,
      Z = null,
      ee = 0,
      te = null,
      ne = null,
      re = !1,
      oe = null,
      ae = null,
      ie = !1,
      le = !1,
      se = [],
      ue = new Set(),
      ce = null,
      de = new Map(),
      me = null,
      pe = 0;
    function _e(e) {
      var t = e === void 0 ? {} : e,
        n = t.subscriberPoolEmpty,
        r = n === void 0 ? !1 : n;
      ((le = r), fe("empty"));
    }
    function fe(t, a, i) {
      if (
        (a === void 0 && (a = []),
        i === void 0 && (i = null),
        (X = t),
        (Y = 0),
        (K = a),
        (Q = i),
        j == null)
      ) {
        var l = self.fetch.bind(self),
          s = o("WAWebGraphQLConstants").generateFacebookGraphqlEndpoint();
        j = function () {
          Reflect.set(self, "fetch", l);
        };
        var u = 0;
        Reflect.set(self, "fetch", function (t, o) {
          var a,
            i,
            c = t instanceof Request ? t.url : String(t);
          if (c !== s) return l(t, o);
          if (Se(o == null ? void 0 : o.body))
            return (e || (e = n("Promise"))).reject(
              r("err")("Failed to fetch"),
            );
          var d = Oe(o == null ? void 0 : o.body),
            m =
              (a = (i = Re(o == null ? void 0 : o.body)) != null ? i : Be(d)) !=
              null
                ? a
                : Le(o);
          if (m != null) return m;
          var p = J ? Ee(o) : null,
            _ = p != null ? te : null;
          p != null &&
            ((ee += 1),
            (K = je(
              Array.from({ length: _ != null ? ee : 1 }, function () {
                return p.status;
              }),
              p.startTimeS,
            )));
          var f = "234567890123456" + String(u);
          return (
            (u += 1),
            (e || (e = n("Promise")))
              .resolve(
                new Response(
                  JSON.stringify({
                    data: babelHelpers.extends(
                      {},
                      Me(o == null ? void 0 : o.body),
                      Ae(o == null ? void 0 : o.body),
                      Ce(o == null ? void 0 : o.body),
                      Fe(o == null ? void 0 : o.body),
                      We(d),
                      p != null
                        ? {
                            create_wa_bb_pro_campaign: {
                              delivery_status_info: { status: p.status[1] },
                              id: nt(0),
                            },
                          }
                        : {},
                      {
                        create_wa_marketing_messages_custom_audience: {
                          custom_audience_id: f,
                        },
                        viewer: {
                          backing_waba: babelHelpers.extends(
                            {},
                            be(),
                            {
                              id: M,
                              is_custom_param_restricted_for_first_party_paid_messaging:
                                !1,
                              name: "BB Pro test business",
                              owner_business: {
                                id: w,
                                marketing_message_whatsapp_event_sharing_consent:
                                  null,
                              },
                            },
                            ie ? H : {},
                            {
                              wa_bb_pro_campaigns: {
                                edges: K,
                                page_info: ye(),
                              },
                              wa_bb_pro_custom_audiences: {
                                edges:
                                  X === "audience_only"
                                    ? [
                                        {
                                          node: {
                                            id: F,
                                            name: O,
                                            operation_status: {
                                              status_code: "NO_STATUS",
                                            },
                                            subscriber_size: B,
                                          },
                                        },
                                      ]
                                    : we(),
                              },
                            },
                          ),
                        },
                        xfb_whatsapp_bb_pro: babelHelpers.extends(
                          {
                            ad_account: babelHelpers.extends(
                              { id: W },
                              Ie(J, ae),
                              { currency_code_enum: "USD" },
                            ),
                            default_subscriber_pool: he(),
                            sending_restriction: {
                              is_sending_allowed: !0,
                              minimum_scheduled_send_lead_time_seconds: 3600,
                              upsell_business_verification: !1,
                            },
                          },
                          Te(oe),
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
                  _ == null
                    ? void 0
                    : _.then(function () {
                        return e;
                      })) != null
                  ? t
                  : e;
              })
          );
        });
      }
    }
    ((_e.doc = "Mock BB Pro audience GraphQL responses (E2E)"),
      (_e.paramsToExecute = []));
    var ge = "bb-pro-campaigns-next-page";
    function he() {
      return ie
        ? babelHelpers.extends({ id: A }, G)
        : le
          ? { id: A, is_subscriber_pool_empty: !0 }
          : { id: A };
    }
    function ye() {
      return Q != null
        ? { end_cursor: ge, has_next_page: !0 }
        : { end_cursor: null, has_next_page: !1 };
    }
    function Ce(e) {
      return Q == null ||
        typeof e != "string" ||
        !e.includes('"after":"' + ge + '"')
        ? {}
        : {
            node: {
              __typename: "WhatsAppBusinessAccount",
              id: M,
              wa_bb_pro_campaigns: {
                edges: Q,
                page_info: { end_cursor: null, has_next_page: !1 },
              },
            },
          };
    }
    function be() {
      return Z != null ? { audience_send_max_bid_amount: Z } : {};
    }
    function ve(e) {
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
    function Se(e) {
      if (pe === 0 || typeof e != "string") return !1;
      var t;
      try {
        var n;
        t = (n = JSON.parse(e)) == null ? void 0 : n.variables;
      } catch (e) {
        return !1;
      }
      return t == null || !Object.hasOwn(t, "after") ? !1 : ((pe -= 1), !0);
    }
    function Re(t) {
      var o;
      if (se.length === 0 || typeof t != "string") return null;
      var a;
      try {
        var i;
        a = (i = JSON.parse(t)) == null ? void 0 : i.variables;
      } catch (e) {
        return null;
      }
      var l = Ue.findIndex(function (e, t) {
        var n;
        return nt(t) === String((n = a) == null ? void 0 : n.campaign_id);
      });
      if (((o = a) == null ? void 0 : o.status) !== "PAUSED" || l === -1)
        return null;
      var s = nt(l),
        u = se.shift();
      if (u === "network_error")
        return (e || (e = n("Promise"))).reject(r("err")("Failed to fetch"));
      u === "stopped" && (ue.add(s), (K = je()));
      var c = Ue[l],
        d = c[0],
        m = c[2],
        p = tt(l);
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
    function Le(t) {
      return !J || !re || !ke(t)
        ? null
        : ((re = !1),
          (e || (e = n("Promise"))).reject(r("err")("Failed to fetch")));
    }
    function Ee(e) {
      var t = e == null ? void 0 : e.body;
      if (typeof t != "string" || !ke(e)) return null;
      var n = JSON.parse(t).variables.start_time;
      return typeof n == "number"
        ? { startTimeS: n, status: ["SCHEDULED", "SCHEDULED", !0] }
        : { startTimeS: Ve, status: Ue[0] };
    }
    function ke(e) {
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
    function Ie(e, t) {
      return e
        ? {
            billing_info: {
              payment_section_details: {
                inline_action: null,
                label: U,
                label_ax: U,
                logos: [],
                primary_action: null,
              },
              required_action: null,
            },
            payment_account: {
              __typename: "AdsPaymentAccountRawDoNotUse",
              id: q,
            },
          }
        : { billing_info: ve(t), payment_account: null };
    }
    function Te(e) {
      if (e == null) return {};
      var t = e === "NOT_STARTED" || e === "PENDING_SUBMISSION";
      return {
        business_verification: {
          completion_time: e === "VERIFIED" ? z : null,
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
          submitted_time: e === "PENDING_REVIEW" ? z : null,
          verification_status: e,
        },
        messaging_limits: {
          current_daily_limit: V,
          is_business_verified: e === "VERIFIED",
          minimum_daily_limit: V,
          unique_recipients_last_24h: 0,
          upgrade_requirements: [],
        },
      };
    }
    var De = [
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
      xe = 1767182400,
      $e = "1234567890123473";
    function Pe() {
      var e = me;
      return e == null
        ? De
        : [].concat(De, [
            {
              id: $e,
              name: "Loyal customers",
              recipientNames: Array.from({ length: e }, function (e, t) {
                return "Customer " + String(t + 1).padStart(2, "0");
              }),
            },
          ]);
    }
    function Ne() {
      return X === "multi_audience"
        ? Pe()
        : X === "deletable_audience"
          ? De.slice(0, 1)
          : X === "audience_only" || X === "empty"
            ? []
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    X,
                );
              })();
    }
    function Me(e) {
      var t = De[0];
      return X !== "deletable_audience" ||
        typeof e != "string" ||
        !e.includes('"customAudienceId":"' + t.id + '"')
        ? {}
        : ((X = "empty"),
          { delete_wa_marketing_messages_custom_audience: { success: !0 } });
    }
    function we() {
      return Ne().map(function (e) {
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
    function Ae(e) {
      var t = Ne().find(function (t) {
        var n = t.id;
        return typeof e == "string" && e.includes('"audienceId":"' + n + '"');
      });
      if (t == null || typeof e != "string") return {};
      var n = JSON.parse(e).variables,
        r = n.after,
        o = n.first,
        a = r == null ? 0 : Number(r) + 1,
        i = o == null ? t.recipientNames.length : a + Number(o),
        l = i < t.recipientNames.length,
        s = Y > 0;
      return (
        s && (Y -= 1),
        {
          node: {
            __typename: "AdCustomAudience",
            creation_time: xe,
            id: t.id,
            name: t.name,
            operation_status: { status_code: s ? "UPDATING" : "NO_STATUS" },
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
        }
      );
    }
    function Fe(e) {
      var t = ce;
      if (t == null || typeof e != "string") return {};
      var n = nt(t);
      if (!e.includes('"campaignId":"' + n + '"')) return {};
      var r = Ue[t],
        o = r[0],
        a = r[1],
        i = r[2],
        l = tt(t);
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
    function Oe(e) {
      if (typeof e != "string") return null;
      for (var t of de) {
        var n = t[0],
          r = t[1];
        if (e.includes('"campaignId":"' + n + '"')) return r;
      }
      return null;
    }
    function Be(t) {
      return t === "request_failed"
        ? (e || (e = n("Promise"))).resolve(
            new Response(JSON.stringify({ error: Ge }), { status: ze }),
          )
        : null;
    }
    function We(e) {
      return e === "campaign_missing" ? { node: null } : {};
    }
    function qe() {
      (j == null || j(),
        (j = null),
        (oe = null),
        (ae = null),
        (ie = !1),
        (le = !1),
        (se = []),
        (ue = new Set()),
        (Q = null),
        (J = !1),
        (Z = null),
        (ce = null),
        (Y = 0),
        (ee = 0),
        R(),
        (de = new Map()),
        (me = null),
        (pe = 0));
    }
    ((qe.doc = "Restore GraphQL responses after a BB Pro audience E2E mock"),
      (qe.paramsToExecute = []));
    var Ue = [
        ["IN_REVIEW", "IN_REVIEW", !0],
        ["ACTIVE", "ACTIVE", !0],
        ["COMPLETED", "COMPLETED", !1],
        ["NOT_APPROVED", "REJECTED", !1],
      ],
      Ve = 1767182400,
      He = "BBPROCARD",
      Ge = { code: 2, message: "Service temporarily unavailable" },
      ze = 500;
    function je(e, t) {
      return (
        e === void 0 && (e = Ue),
        t === void 0 && (t = Ve),
        e.map(function (e, n) {
          var r = e[0],
            o = e[1],
            a = e[2];
          return {
            cursor: String(n),
            node: {
              __typename: "XFBWhatsAppBusinessMMLiteCampaign",
              bb_pro_can_stop: a && !tt(n),
              bb_pro_display_status: tt(n) ? "STOPPED" : r,
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
              id: nt(n),
            },
          };
        })
      );
    }
    function Ke(e, t) {
      return je(
        Array.from({ length: e + t }, function () {
          return ["COMPLETED", "COMPLETED", !1];
        }),
      ).slice(e);
    }
    var Qe = {
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
      start_time: Ve,
      template: null,
    };
    function Xe() {
      return {
        cursor: "0",
        node: {
          __typename: "XFBWhatsAppBusinessMMLiteCampaign",
          bb_pro_can_stop: !1,
          bb_pro_display_status: "COMPLETED",
          broadcast_insights: Qe,
          campaign_name: "Insights campaign",
          delivery_status_info: { extra_data: null, status: "COMPLETED" },
          id: "345678901234570",
        },
      };
    }
    function Ye(e, t) {
      return {
        cursor: "0",
        node: {
          __typename: "XFBWhatsAppBusinessMMLiteCampaign",
          bb_pro_can_stop: !1,
          bb_pro_display_status: "COMPLETED",
          broadcast_insights: babelHelpers.extends({}, Qe, {
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
          id: nt(0),
        },
      };
    }
    var Je = 3600,
      Ze = 0.5;
    function et(e, t, n) {
      return {
        cursor: String(e),
        node: {
          __typename: "XFBWhatsAppBusinessMMLiteCampaign",
          bb_pro_can_stop: !0,
          bb_pro_display_status: t,
          broadcast_insights: n,
          campaign_name: "Campaign " + String(e + 1),
          delivery_status_info: { extra_data: null, status: t },
          id: nt(e),
        },
      };
    }
    function tt(e) {
      return ue.has(nt(e));
    }
    function nt(e) {
      return "34567890123456" + String(e);
    }
    var rt = babelHelpers.extends({}, Qe, {
      ads_amount_spent: 0.4,
      ads_delivered: { count: 4 },
      first_customer_reply: { count: 1 },
      read: { count: 3 },
      read_rate: 75,
      reply_rate: 25,
      sent: { count: 8 },
    });
    function ot(e, t, n) {
      return {
        cursor: String(e),
        node: {
          __typename: "XFBWhatsAppBusinessMMLiteCampaign",
          bb_pro_can_stop: !1,
          bb_pro_display_status: t,
          broadcast_insights: n,
          campaign_name: "Campaign " + String(e + 1),
          delivery_status_info: { extra_data: null, status: "ACTIVE" },
          id: nt(e),
        },
      };
    }
    var at = 1e4;
    function it(t) {
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
                      at +
                      "ms",
                  ),
                ));
            }, at),
              o("WAWebChatCollection").ChatCollection.on("add", i));
          });
    }
    function lt(e, t) {
      return st.apply(this, arguments);
    }
    function st() {
      return (
        (st = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
          return (yield it(n), n);
        })),
        st.apply(this, arguments)
      );
    }
    lt.doc = "Create a BB audience from a name and phone numbers, no UI (E2E)";
    function ut() {
      return ct.apply(this, arguments);
    }
    function ct() {
      return (
        (ct = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebBroadcastListAction").createBroadcastListAction(
            { broadcastListName: O, contacts: [], customAudienceFbid: F },
          );
          return (yield it(e), e);
        })),
        ct.apply(this, arguments)
      );
    }
    ((ut.doc =
      "Create the local chat of the mocked BB Pro audience, no UI (E2E)"),
      (ut.paramsToExecute = []));
    function dt(e, t, n, r) {
      return mt.apply(this, arguments);
    }
    function mt() {
      return (
        (mt = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            a === void 0 && (a = "home_status");
            var i = pt(),
              l = nt(e);
            (a === "home_status" ? (ce = e) : de.set(l, a),
              yield r("WAWebBizBroadcastProLocalCampaignCardAction")({
                broadcastJid: i,
                campaignId: l,
                campaignMessageData: {
                  attachmentData: null,
                  buttonData: { displayText: n, type: "quick_reply" },
                  message: t,
                },
                campaignTimestamp: o("WATimeUtils").unixTime(),
                messageId: "" + He + l,
              }));
          },
        )),
        mt.apply(this, arguments)
      );
    }
    dt.doc =
      "Seed the active Pro chat with a mocked campaign card with a quick reply (E2E)";
    function pt() {
      r("vulture")("m5aRIlrFKSn_stY9NCRYBRnkr64=");
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (e == null) throw r("err")("No active chat");
      return o("WAWebWidToJid").widToBroadcastJid(e.id);
    }
    function _t() {
      return ft.apply(this, arguments);
    }
    function ft() {
      return (
        (ft = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("9B3P7T0Qee3i5KkBAFG2iMCYBcM=");
          var e = pt(),
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
        ft.apply(this, arguments)
      );
    }
    ((_t.doc =
      "Create a test PROCESSING campaign for the active broadcast chat (E2E)"),
      (_t.paramsToExecute = []));
    function gt() {
      return ht.apply(this, arguments);
    }
    function ht() {
      return (
        (ht = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("xtFM8UIjKS2O9QInZyOXgIZvjr4=");
          var t = pt(),
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
        ht.apply(this, arguments)
      );
    }
    ((gt.doc =
      "Complete all PROCESSING campaigns for the active broadcast chat (E2E)"),
      (gt.paramsToExecute = []));
    function yt(e, t) {
      return (
        r("vulture")("8rJX9JincJN0bS6ndQL2fJMGQEQ="),
        o(
          "WAWebBizBroadcastProUpdateCampaignAction",
        ).rescheduleBizBroadcastProCampaign(e, t)
      );
    }
    yt.doc =
      "Reschedule a BB Pro campaign: new start (epoch s); stop auto-set to +5d";
    var Ct = {
      acceptBizBroadcastTos: u,
      completeTestCampaignsForActiveChat: gt,
      createBizBroadcastAudience: lt,
      createBizBroadcastProMockAudienceChat: ut,
      createBizBroadcastProMockCampaignCardForActiveChat: dt,
      createTestProcessingCampaignForActiveChat: _t,
      failNextBizBroadcastProCampaignCreate: S,
      holdBizBroadcastProCampaignCreates: b,
      mockBizBroadcastProAudienceGraphQLResponses: _e,
      releaseBizBroadcastProCampaignCreates: v,
      rescheduleBizBroadcastProCampaign: yt,
      restoreBizBroadcastProAudienceGraphQLResponses: qe,
      setBizBroadcastDeviceCapability: s,
      setBizBroadcastProFirstTimeSetup: d,
      setBizBroadcastProNuxEligible: c,
      setBizBroadcastProOnboarded: m,
      setupBizBroadcastProAdCreditsHome: x,
      setupBizBroadcastProAudienceOnlyHome: L,
      setupBizBroadcastProCampaignsHome: _,
      setupBizBroadcastProCampaignsHomeFailingOnce: N,
      setupBizBroadcastProDeletableAudienceHome: T,
      setupBizBroadcastProDeliveryIssuesHome: P,
      setupBizBroadcastProEmptyHome: p,
      setupBizBroadcastProFundedAccount: C,
      setupBizBroadcastProInsightsHome: f,
      setupBizBroadcastProLifecycleInsightsHome: y,
      setupBizBroadcastProMediaCampaignHome: h,
      setupBizBroadcastProMultiAudienceHome: E,
      setupBizBroadcastProPagedAudienceHome: k,
      setupBizBroadcastProPagedCampaignsHome: g,
      setupBizBroadcastProProcessingAudienceHome: I,
      setupBizBroadcastProSubscribedRecipientsHome: $,
      setupBizBroadcastProVerificationHome: D,
    };
    l.default = Ct;
  },
  98,
);
