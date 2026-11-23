__d(
  "WAWebDebugBizBroadcastPro",
  [
    "WATimeUtils",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBizBroadcastProLocalCampaignCardAction",
    "WAWebBizBroadcastProOnboardingStatus",
    "WAWebBizBroadcastProUpdateCampaignAction",
    "WAWebBroadcastListAction",
    "WAWebDebugBizBroadcastChatUtils",
    "WAWebGraphQLConstants",
    "err",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
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
    ((e.doc =
      "Force BB Pro capability and a disconnected eligible_to_onboard status (E2E)"),
      (e.paramsToExecute = []));
    function s() {
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
    ((s.doc =
      "Force BB Pro capability and a first-time eligible_to_onboard status (E2E)"),
      (s.paramsToExecute = []));
    function u() {
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
    ((u.doc =
      "Force BB Pro capability and onboarding status to onboarded (E2E)"),
      (u.paramsToExecute = []));
    function c() {
      (u(), fe("empty"));
    }
    ((c.doc =
      "Set up an onboarded BB Pro account with no campaigns or audiences (E2E)"),
      (c.paramsToExecute = []));
    function d(e) {
      (e === void 0 && (e = []),
        u(),
        (ie = [].concat(e)),
        (le = new Set()),
        fe("empty", Je()));
    }
    ((d.doc =
      "Set up an onboarded BB Pro account with in review, active, completed and not approved campaigns (E2E)"),
      (d.paramsToExecute = []));
    function m() {
      (u(), fe("empty", [tt()]));
    }
    ((m.doc =
      "Set up an onboarded BB Pro account with one completed campaign: 25 sent, 20 delivered, 10 read, 2 replies (E2E)"),
      (m.paramsToExecute = []));
    function p(e, t) {
      (u(), fe("empty", Ze(0, e), Ze(e, t)));
    }
    p.doc =
      "Set up an onboarded BB Pro account whose completed campaigns, Campaign 1 onwards, span a first page and a next page of the given sizes (E2E)";
    function _(e, t, n) {
      n === void 0 && (n = !1);
      var r = babelHelpers.extends(
        {},
        rt(e, new URL(t, self.location.origin).href),
        n ? { bid_amount_long: nt } : {},
      );
      (u(), fe("empty", [ot(r)]), (me = n ? r : null));
    }
    _.doc =
      "Set up an onboarded BB Pro account with one completed campaign whose message has the given text and same-origin header image path, optionally also serving that campaign as a Duplicate source (E2E)";
    function f() {
      u();
      var e = o("WATimeUtils").unixTime() - it;
      fe("empty", [
        st(
          0,
          "IN_REVIEW",
          babelHelpers.extends({}, et, {
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
        st(
          1,
          "ACTIVE",
          babelHelpers.extends({}, et, { ads_amount_spent: lt, start_time: e }),
        ),
      ]);
    }
    ((f.doc =
      "Set up an onboarded BB Pro account with an in review campaign and an active campaign that started an hour ago: 25 sent, 20 delivered, 10 read, 2 replies (E2E)"),
      (f.paramsToExecute = []));
    function g(e) {
      (e === void 0 && (e = null),
        u(),
        (X = !0),
        (Y = e),
        (J = 0),
        (te = !1),
        b(),
        fe("audience_only"));
    }
    ((g.doc =
      "Set up an onboarded BB Pro account with an audience and a payment method whose campaign create succeeds in review, optionally capping the max bid at the given CPM in the smallest currency unit (E2E)"),
      (g.paramsToExecute = []));
    function h() {
      (ee == null || ee(),
        (Z = new Promise(function (e) {
          ee = e;
        })));
    }
    ((h.doc =
      "Hold funded BB Pro campaign create responses until released, listing one in review campaign per create request (E2E)"),
      (h.paramsToExecute = []));
    function y() {
      ee == null || ee();
    }
    ((y.doc =
      "Answer held funded BB Pro campaign creates; later creates are answered at once and each still lists a campaign until the next funded setup or restore (E2E)"),
      (y.paramsToExecute = []));
    function C() {
      te = !0;
    }
    ((C.doc =
      "Reject the next funded BB Pro campaign create like an offline fetch, listing no campaign for it; later creates succeed (E2E)"),
      (C.paramsToExecute = []));
    function b() {
      (ee == null || ee(), (ee = null), (Z = null));
    }
    function v() {
      (r("vulture")("fpJ1xOlNxXxNCK5OpgMcRiWeqpM="), u(), fe("audience_only"));
    }
    ((v.doc =
      "Set up an onboarded BB Pro account with an audience and no campaigns (E2E)"),
      (v.paramsToExecute = []));
    function S() {
      (u(), fe("multi_audience"));
    }
    ((S.doc =
      "Set up an onboarded BB Pro account with three audiences, each with its own recipients, and no campaigns (E2E)"),
      (S.paramsToExecute = []));
    function R(e) {
      (u(), (ce = e), fe("multi_audience"));
    }
    R.doc =
      "Set up the multi-audience BB Pro home plus a Loyal customers audience with the given number of recipients, Customer 01 onwards, served one requested page at a time (E2E)";
    function L() {
      (S(), (Q = 1));
    }
    ((L.doc =
      "Set up the multi-audience BB Pro home whose first audience details read is still processing and later reads are settled (E2E)"),
      (L.paramsToExecute = []));
    function E() {
      (S(), (pe = new Map()));
    }
    ((E.doc =
      "Set up the multi-audience BB Pro home whose audience edits add and remove recipients until the next setup or restore (E2E)"),
      (E.paramsToExecute = []));
    function k() {
      (u(), fe("deletable_audience"));
    }
    ((k.doc =
      "Set up an onboarded BB Pro account with one audience whose delete succeeds and leaves no audiences, and no campaigns (E2E)"),
      (k.paramsToExecute = []));
    function I(e) {
      (u(), (ne = e), fe("empty"));
    }
    I.doc =
      "Set up an empty onboarded BB Pro account whose Message limits show the given business verification status (E2E)";
    function T(e) {
      (u(), (re = e), fe("audience_only"));
    }
    T.doc =
      "Set up an onboarded BB Pro account with an audience whose ad account pays with the given ad credits balance label (E2E)";
    function D() {
      (u(), (oe = !0), fe("empty"));
    }
    ((D.doc =
      "Set up an empty onboarded BB Pro account whose customer base has 2,100 - 2,500 subscribed recipients (E2E)"),
      (D.paramsToExecute = []));
    function x() {
      (u(),
        fe("empty", [mt(0, "SENDING_LIMITED", et), mt(1, "NOT_SENDING", dt)]));
    }
    ((x.doc =
      "Set up an onboarded BB Pro account with a sending limited campaign (25 sent, 20 delivered, 10 read, 2 replies) and a not sending campaign (8 sent, 4 delivered, 3 read, 1 reply), both started more than two days ago (E2E)"),
      (x.paramsToExecute = []));
    function $() {
      (d(), (de = 1));
    }
    (($.doc =
      "Set up BB Pro campaigns Home whose first campaigns query fails with a network error (E2E)"),
      ($.paramsToExecute = []));
    var P = "1234567890123456",
      N = "1234567890123457",
      M = "1234567890123458",
      w = "1234567890123459",
      A = "Recording audience",
      F = 25,
      O = "1234567890123460",
      B = "1234567890123461",
      W = "Visa ending in 4242",
      q = 250,
      U = {
        phone_number_status: { waba_display_phone_number: "+1 555-010-0199" },
      },
      V = {
        business_object_name: null,
        is_subscriber_pool_empty: !1,
        name: null,
        subscriber_pool_audience_size: { lower_bound: 2100, upper_bound: 2500 },
      },
      H = 1767182400,
      G = null,
      z = [],
      j = null,
      K = "empty",
      Q = 0,
      X = !1,
      Y = null,
      J = 0,
      Z = null,
      ee = null,
      te = !1,
      ne = null,
      re = null,
      oe = !1,
      ae = !1,
      ie = [],
      le = new Set(),
      se = null,
      ue = new Map(),
      ce = null,
      de = 0,
      me = null,
      pe = null;
    function _e(e) {
      var t = e === void 0 ? {} : e,
        n = t.subscriberPoolEmpty,
        r = n === void 0 ? !1 : n;
      ((ae = r), fe("empty"));
    }
    function fe(e, t, n) {
      if (
        (t === void 0 && (t = []),
        n === void 0 && (n = null),
        (K = e),
        (Q = 0),
        (z = t),
        (j = n),
        (me = null),
        (pe = null),
        G == null)
      ) {
        var a = self.fetch.bind(self),
          i = o("WAWebGraphQLConstants").generateFacebookGraphqlEndpoint();
        G = function () {
          Reflect.set(self, "fetch", a);
        };
        var l = 0;
        Reflect.set(self, "fetch", function (e, t) {
          var n,
            o,
            s = e instanceof Request ? e.url : String(e);
          if (s !== i) return a(e, t);
          var u = t == null ? void 0 : t.body;
          if (Ee(u)) return Promise.reject(r("err")("Failed to fetch"));
          var c = (n = (o = ke(u)) != null ? o : He(u)) != null ? n : Ie(u);
          if (c != null) return c;
          var d = De(u) ? Z : null,
            m = "234567890123456" + String(l);
          return (
            (l += 1),
            Ce({
              data: babelHelpers.extends(
                {},
                he.reduce(function (e, t) {
                  return babelHelpers.extends({}, e, t(u));
                }, {}),
                {
                  create_wa_marketing_messages_custom_audience: {
                    custom_audience_id: m,
                  },
                },
              ),
            }).then(function (e) {
              var t;
              return (t =
                d == null
                  ? void 0
                  : d.then(function () {
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
    var ge = "bb-pro-campaigns-next-page",
      he = [Fe, Oe, qe, Se, at, Ue, Ge, Te, ye];
    function ye() {
      return {
        viewer: {
          backing_waba: babelHelpers.extends(
            {},
            Re(),
            {
              id: P,
              is_custom_param_restricted_for_first_party_paid_messaging: !1,
              name: "BB Pro test business",
              owner_business: {
                id: N,
                marketing_message_whatsapp_event_sharing_consent: null,
              },
            },
            oe ? U : {},
            {
              wa_bb_pro_campaigns: { edges: z, page_info: ve() },
              wa_bb_pro_custom_audiences: {
                edges:
                  K === "audience_only"
                    ? [
                        {
                          node: {
                            id: w,
                            name: A,
                            operation_status: { status_code: "NO_STATUS" },
                            subscriber_size: F,
                          },
                        },
                      ]
                    : We(),
              },
            },
          ),
        },
        xfb_whatsapp_bb_pro: babelHelpers.extends(
          {
            ad_account: babelHelpers.extends({ id: O }, xe(X, re), {
              currency_code_enum: "USD",
            }),
            default_subscriber_pool: be(),
            sending_restriction: {
              is_sending_allowed: !0,
              minimum_scheduled_send_lead_time_seconds: 3600,
              upsell_business_verification: !1,
            },
          },
          $e(ne),
        ),
      };
    }
    function Ce(e) {
      return Promise.resolve(
        new Response(JSON.stringify(e), {
          headers: { "Content-Type": "application/json" },
          status: 200,
        }),
      );
    }
    function be() {
      return oe
        ? babelHelpers.extends({ id: M }, V)
        : ae
          ? { id: M, is_subscriber_pool_empty: !0 }
          : { id: M };
    }
    function ve() {
      return j != null
        ? { end_cursor: ge, has_next_page: !0 }
        : { end_cursor: null, has_next_page: !1 };
    }
    function Se(e) {
      return j == null ||
        typeof e != "string" ||
        !e.includes('"after":"' + ge + '"')
        ? {}
        : {
            node: {
              __typename: "WhatsAppBusinessAccount",
              id: P,
              wa_bb_pro_campaigns: {
                edges: j,
                page_info: { end_cursor: null, has_next_page: !1 },
              },
            },
          };
    }
    function Re() {
      return Y != null ? { audience_send_max_bid_amount: Y } : {};
    }
    function Le(e) {
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
    function Ee(e) {
      if (de === 0 || typeof e != "string") return !1;
      var t;
      try {
        var n;
        t = (n = JSON.parse(e)) == null ? void 0 : n.variables;
      } catch (e) {
        return !1;
      }
      return t == null || !Object.hasOwn(t, "after") ? !1 : ((de -= 1), !0);
    }
    function ke(e) {
      var t;
      if (ie.length === 0 || typeof e != "string") return null;
      var n;
      try {
        var o;
        n = (o = JSON.parse(e)) == null ? void 0 : o.variables;
      } catch (e) {
        return null;
      }
      var a = je.findIndex(function (e, t) {
        var r;
        return ct(t) === String((r = n) == null ? void 0 : r.campaign_id);
      });
      if (((t = n) == null ? void 0 : t.status) !== "PAUSED" || a === -1)
        return null;
      var i = ct(a),
        l = ie.shift();
      if (l === "network_error")
        return Promise.reject(r("err")("Failed to fetch"));
      l === "stopped" && (le.add(i), (z = Je()));
      var s = je[a],
        u = s[0],
        c = s[2],
        d = ut(a);
      return Ce({
        data: {
          update_wa_bb_pro_campaign: {
            bb_pro_can_stop: c && !d,
            bb_pro_display_status: d ? "STOPPED" : u,
            id: i,
          },
        },
      });
    }
    function Ie(e) {
      return !te || !De(e)
        ? null
        : ((te = !1), Promise.reject(r("err")("Failed to fetch")));
    }
    function Te(e) {
      if (typeof e != "string" || !De(e)) return {};
      var t = JSON.parse(e).variables.start_time,
        n = typeof t == "number" ? ["SCHEDULED", "SCHEDULED", !0] : je[0];
      return (
        (J += 1),
        (z = Je(
          new Array(Z != null ? J : 1).fill(n),
          typeof t == "number" ? t : Ke,
        )),
        {
          create_wa_bb_pro_campaign: {
            delivery_status_info: { status: n[1] },
            id: ct(0),
          },
        }
      );
    }
    function De(e) {
      if (!X || typeof e != "string") return !1;
      try {
        var t;
        return (
          ((t = JSON.parse(e).variables) == null ? void 0 : t.rate_card) != null
        );
      } catch (e) {
        return !1;
      }
    }
    function xe(e, t) {
      return e
        ? {
            billing_info: {
              payment_section_details: {
                inline_action: null,
                label: W,
                label_ax: W,
                logos: [],
                primary_action: null,
              },
              required_action: null,
            },
            payment_account: {
              __typename: "AdsPaymentAccountRawDoNotUse",
              id: B,
            },
          }
        : { billing_info: Le(t), payment_account: null };
    }
    function $e(e) {
      if (e == null) return {};
      var t = e === "NOT_STARTED" || e === "PENDING_SUBMISSION";
      return {
        business_verification: {
          completion_time: e === "VERIFIED" ? H : null,
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
          submitted_time: e === "PENDING_REVIEW" ? H : null,
          verification_status: e,
        },
        messaging_limits: {
          current_daily_limit: q,
          is_business_verified: e === "VERIFIED",
          minimum_daily_limit: q,
          unique_recipients_last_24h: 0,
          upgrade_requirements: [],
        },
      };
    }
    var Pe = [
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
      Ne = 1767182400,
      Me = "1234567890123473";
    function we() {
      var e = ce;
      return e == null
        ? Pe
        : [].concat(Pe, [
            {
              id: Me,
              name: "Loyal customers",
              recipientNames: Array.from({ length: e }, function (e, t) {
                return "Customer " + String(t + 1).padStart(2, "0");
              }),
            },
          ]);
    }
    function Ae() {
      return K === "multi_audience"
        ? we()
        : K === "deletable_audience"
          ? Pe.slice(0, 1)
          : K === "audience_only" || K === "empty"
            ? []
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    K,
                );
              })();
    }
    function Fe(e) {
      var t = Pe[0];
      return K !== "deletable_audience" ||
        typeof e != "string" ||
        !e.includes('"customAudienceId":"' + t.id + '"')
        ? {}
        : ((K = "empty"),
          { delete_wa_marketing_messages_custom_audience: { success: !0 } });
    }
    function Oe(e) {
      var t,
        n,
        r = pe;
      if (
        r == null ||
        typeof e != "string" ||
        !e.includes('"custom_audience_id"')
      )
        return {};
      var o = JSON.parse(e).variables.input,
        a = Ae().find(function (e) {
          var t = e.id;
          return t === String(o == null ? void 0 : o.custom_audience_id);
        });
      if (a == null || o.name != null) return {};
      var i = new Set((t = o.phone_numbers_removed) != null ? t : []);
      return (
        r.set(
          a.id,
          [].concat(
            Be(a).filter(function (e) {
              var t = e.phone_number;
              return !i.has(t);
            }),
            ((n = o.recipients_added) != null ? n : []).map(function (e) {
              var t = e.first_name,
                n = e.last_name,
                r = e.phone;
              return {
                full_name: [t, n].filter(Boolean).join(" "),
                phone_number: r,
              };
            }),
          ),
        ),
        {
          edit_wa_marketing_messages_custom_audience: {
            custom_audience_id: a.id,
            failed_operations: [],
          },
        }
      );
    }
    function Be(e) {
      var t, n;
      return (t = (n = pe) == null ? void 0 : n.get(e.id)) != null
        ? t
        : e.recipientNames.map(function (t, n) {
            return {
              full_name: t,
              phone_number:
                "1555010" + e.id.slice(-2) + String(n).padStart(2, "0"),
            };
          });
    }
    function We() {
      return Ae().map(function (e) {
        return {
          node: {
            id: e.id,
            name: e.name,
            operation_status: { status_code: "NO_STATUS" },
            subscriber_size: Be(e).length,
          },
        };
      });
    }
    function qe(e) {
      var t = Ae().find(function (t) {
        var n = t.id;
        return typeof e == "string" && e.includes('"audienceId":"' + n + '"');
      });
      if (t == null || typeof e != "string") return {};
      var n = Be(t),
        r = JSON.parse(e).variables,
        o = r.after,
        a = r.first,
        i = o == null ? 0 : Number(o) + 1,
        l = a == null ? n.length : i + Number(a),
        s = l < n.length,
        u = Q > 0;
      return (
        u && (Q -= 1),
        {
          node: {
            __typename: "AdCustomAudience",
            creation_time: Ne,
            id: t.id,
            name: t.name,
            operation_status: { status_code: u ? "UPDATING" : "NO_STATUS" },
            subscriber_size: n.length,
          },
          xfb_whatsapp_subscriber_list_members: {
            edges: n
              .map(function (e, t) {
                return {
                  cursor: String(t),
                  node: babelHelpers.extends(
                    { __typename: "XFBWhatsAppSubscriberListMember" },
                    e,
                  ),
                };
              })
              .slice(i, l),
            page_info: s
              ? { end_cursor: String(l - 1), has_next_page: !0 }
              : { end_cursor: null, has_next_page: !1 },
          },
        }
      );
    }
    function Ue(e) {
      var t = se;
      if (t == null || typeof e != "string") return {};
      var n = ct(t);
      if (!e.includes('"campaignId":"' + n + '"')) return {};
      var r = je[t],
        o = r[0],
        a = r[1],
        i = r[2],
        l = ut(t);
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
    function Ve(e) {
      if (typeof e != "string") return null;
      for (var t of ue) {
        var n = t[0],
          r = t[1];
        if (e.includes('"campaignId":"' + n + '"')) return r;
      }
      return null;
    }
    function He(e) {
      return Ve(e) === "request_failed"
        ? Promise.resolve(
            new Response(JSON.stringify({ error: Xe }), { status: Ye }),
          )
        : null;
    }
    function Ge(e) {
      return Ve(e) === "campaign_missing" ? { node: null } : {};
    }
    function ze() {
      (G == null || G(),
        (G = null),
        (ne = null),
        (re = null),
        (oe = !1),
        (ae = !1),
        (ie = []),
        (le = new Set()),
        (j = null),
        (X = !1),
        (Y = null),
        (se = null),
        (Q = 0),
        (J = 0),
        b(),
        (ue = new Map()),
        (ce = null),
        (de = 0),
        (me = null),
        (pe = null));
    }
    ((ze.doc = "Restore GraphQL responses after a BB Pro audience E2E mock"),
      (ze.paramsToExecute = []));
    var je = [
        ["IN_REVIEW", "IN_REVIEW", !0],
        ["ACTIVE", "ACTIVE", !0],
        ["COMPLETED", "COMPLETED", !1],
        ["NOT_APPROVED", "REJECTED", !1],
      ],
      Ke = 1767182400,
      Qe = "BBPROCARD",
      Xe = { code: 2, message: "Service temporarily unavailable" },
      Ye = 500;
    function Je(e, t) {
      return (
        e === void 0 && (e = je),
        t === void 0 && (t = Ke),
        e.map(function (e, n) {
          var r = e[0],
            o = e[1],
            a = e[2];
          return {
            cursor: String(n),
            node: {
              __typename: "XFBWhatsAppBusinessMMLiteCampaign",
              bb_pro_can_stop: a && !ut(n),
              bb_pro_display_status: ut(n) ? "STOPPED" : r,
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
              id: ct(n),
            },
          };
        })
      );
    }
    function Ze(e, t) {
      return Je(
        Array.from({ length: e + t }, function () {
          return ["COMPLETED", "COMPLETED", !1];
        }),
      ).slice(e);
    }
    var et = {
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
      start_time: Ke,
      template: null,
    };
    function tt() {
      return {
        cursor: "0",
        node: {
          __typename: "XFBWhatsAppBusinessMMLiteCampaign",
          bb_pro_can_stop: !1,
          bb_pro_display_status: "COMPLETED",
          broadcast_insights: et,
          campaign_name: "Insights campaign",
          delivery_status_info: { extra_data: null, status: "COMPLETED" },
          id: "345678901234570",
        },
      };
    }
    var nt = 7500;
    function rt(e, t) {
      return babelHelpers.extends({}, et, {
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
      });
    }
    function ot(e) {
      return {
        cursor: "0",
        node: {
          __typename: "XFBWhatsAppBusinessMMLiteCampaign",
          bb_pro_can_stop: !1,
          bb_pro_display_status: "COMPLETED",
          broadcast_insights: e,
          campaign_name: "Media campaign",
          delivery_status_info: { extra_data: null, status: "COMPLETED" },
          id: ct(0),
        },
      };
    }
    function at(e) {
      var t = me,
        n = ct(0);
      return t == null ||
        typeof e != "string" ||
        !e.includes('"campaignId":"' + n + '"')
        ? {}
        : {
            node: {
              __typename: "XFBWhatsAppBusinessMMLiteCampaign",
              broadcast_insights: babelHelpers.extends({}, t, {
                template: babelHelpers.extends({}, t.template, {
                  cta_url_link_tracking_opted_out: null,
                }),
              }),
              campaignType: "XFBWhatsAppBusinessMMLiteCampaign",
              id: n,
            },
          };
    }
    var it = 3600,
      lt = 0.5;
    function st(e, t, n) {
      return {
        cursor: String(e),
        node: {
          __typename: "XFBWhatsAppBusinessMMLiteCampaign",
          bb_pro_can_stop: !0,
          bb_pro_display_status: t,
          broadcast_insights: n,
          campaign_name: "Campaign " + String(e + 1),
          delivery_status_info: { extra_data: null, status: t },
          id: ct(e),
        },
      };
    }
    function ut(e) {
      return le.has(ct(e));
    }
    function ct(e) {
      return "34567890123456" + String(e);
    }
    var dt = babelHelpers.extends({}, et, {
      ads_amount_spent: 0.4,
      ads_delivered: { count: 4 },
      first_customer_reply: { count: 1 },
      read: { count: 3 },
      read_rate: 75,
      reply_rate: 25,
      sent: { count: 8 },
    });
    function mt(e, t, n) {
      return {
        cursor: String(e),
        node: {
          __typename: "XFBWhatsAppBusinessMMLiteCampaign",
          bb_pro_can_stop: !1,
          bb_pro_display_status: t,
          broadcast_insights: n,
          campaign_name: "Campaign " + String(e + 1),
          delivery_status_info: { extra_data: null, status: "ACTIVE" },
          id: ct(e),
        },
      };
    }
    async function pt() {
      var e = await o("WAWebBroadcastListAction").createBroadcastListAction({
        broadcastListName: A,
        contacts: [],
        customAudienceFbid: w,
      });
      return (
        await o("WAWebDebugBizBroadcastChatUtils").whenBroadcastChatVisible(e),
        e
      );
    }
    ((pt.doc =
      "Create the local chat of the mocked BB Pro audience, no UI (E2E)"),
      (pt.paramsToExecute = []));
    async function _t(e, t, n, a) {
      a === void 0 && (a = "home_status");
      var i = o("WAWebDebugBizBroadcastChatUtils").getActiveBroadcastJid(),
        l = ct(e);
      (a === "home_status" ? (se = e) : ue.set(l, a),
        await r("WAWebBizBroadcastProLocalCampaignCardAction")({
          broadcastJid: i,
          campaignId: l,
          campaignMessageData: {
            attachmentData: null,
            buttonData: { displayText: n, type: "quick_reply" },
            message: t,
          },
          campaignTimestamp: o("WATimeUtils").unixTime(),
          messageId: "" + Qe + l,
        }));
    }
    _t.doc =
      "Seed the active Pro chat with a mocked campaign card with a quick reply (E2E)";
    function ft(e, t) {
      return (
        r("vulture")("8rJX9JincJN0bS6ndQL2fJMGQEQ="),
        o(
          "WAWebBizBroadcastProUpdateCampaignAction",
        ).rescheduleBizBroadcastProCampaign(e, t)
      );
    }
    ft.doc =
      "Reschedule a BB Pro campaign: new start (epoch s); stop auto-set to +5d";
    var gt = {
      createBizBroadcastProMockAudienceChat: pt,
      createBizBroadcastProMockCampaignCardForActiveChat: _t,
      failNextBizBroadcastProCampaignCreate: C,
      holdBizBroadcastProCampaignCreates: h,
      mockBizBroadcastProAudienceGraphQLResponses: _e,
      releaseBizBroadcastProCampaignCreates: y,
      rescheduleBizBroadcastProCampaign: ft,
      restoreBizBroadcastProAudienceGraphQLResponses: ze,
      setBizBroadcastProFirstTimeSetup: s,
      setBizBroadcastProNuxEligible: e,
      setBizBroadcastProOnboarded: u,
      setupBizBroadcastProAdCreditsHome: T,
      setupBizBroadcastProAudienceOnlyHome: v,
      setupBizBroadcastProCampaignsHome: d,
      setupBizBroadcastProCampaignsHomeFailingOnce: $,
      setupBizBroadcastProDeletableAudienceHome: k,
      setupBizBroadcastProDeliveryIssuesHome: x,
      setupBizBroadcastProEditableAudienceHome: E,
      setupBizBroadcastProEmptyHome: c,
      setupBizBroadcastProFundedAccount: g,
      setupBizBroadcastProInsightsHome: m,
      setupBizBroadcastProLifecycleInsightsHome: f,
      setupBizBroadcastProMediaCampaignHome: _,
      setupBizBroadcastProMultiAudienceHome: S,
      setupBizBroadcastProPagedAudienceHome: R,
      setupBizBroadcastProPagedCampaignsHome: p,
      setupBizBroadcastProProcessingAudienceHome: L,
      setupBizBroadcastProSubscribedRecipientsHome: D,
      setupBizBroadcastProVerificationHome: I,
    };
    l.default = gt;
  },
  98,
);
