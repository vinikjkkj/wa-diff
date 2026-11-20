__d(
  "WAWebDebugBizBroadcastPro",
  [
    "Promise",
    "WATimeUtils",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBizBroadcastProLocalCampaignCardAction",
    "WAWebBizBroadcastProOnboardingStatus",
    "WAWebBizBroadcastProUpdateCampaignAction",
    "WAWebBroadcastListAction",
    "WAWebDebugBizBroadcastChatUtils",
    "WAWebGraphQLConstants",
    "asyncToGeneratorRuntime",
    "err",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
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
        ).debugSetBizBroadcastProOnboardingHistory(!0));
    }
    ((s.doc =
      "Force BB Pro capability and a disconnected eligible_to_onboard status (E2E)"),
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
        ).debugSetBizBroadcastProOnboardingHistory(!1));
    }
    ((u.doc =
      "Force BB Pro capability and a first-time eligible_to_onboard status (E2E)"),
      (u.paramsToExecute = []));
    function c() {
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
    ((c.doc =
      "Force BB Pro capability and onboarding status to onboarded (E2E)"),
      (c.paramsToExecute = []));
    function d() {
      (c(), ge("empty"));
    }
    ((d.doc =
      "Set up an onboarded BB Pro account with no campaigns or audiences (E2E)"),
      (d.paramsToExecute = []));
    function m(e) {
      (e === void 0 && (e = []),
        c(),
        (le = [].concat(e)),
        (se = new Set()),
        ge("empty", Ze()));
    }
    ((m.doc =
      "Set up an onboarded BB Pro account with in review, active, completed and not approved campaigns (E2E)"),
      (m.paramsToExecute = []));
    function p() {
      (c(), ge("empty", [nt()]));
    }
    ((p.doc =
      "Set up an onboarded BB Pro account with one completed campaign: 25 sent, 20 delivered, 10 read, 2 replies (E2E)"),
      (p.paramsToExecute = []));
    function _(e, t) {
      (c(), ge("empty", et(0, e), et(e, t)));
    }
    _.doc =
      "Set up an onboarded BB Pro account whose completed campaigns, Campaign 1 onwards, span a first page and a next page of the given sizes (E2E)";
    function f(e, t, n) {
      n === void 0 && (n = !1);
      var r = babelHelpers.extends(
        {},
        ot(e, new URL(t, self.location.origin).href),
        n ? { bid_amount_long: rt } : {},
      );
      (c(), ge("empty", [at(r)]), (pe = n ? r : null));
    }
    f.doc =
      "Set up an onboarded BB Pro account with one completed campaign whose message has the given text and same-origin header image path, optionally also serving that campaign as a Duplicate source (E2E)";
    function g() {
      c();
      var e = o("WATimeUtils").unixTime() - lt;
      ge("empty", [
        ut(
          0,
          "IN_REVIEW",
          babelHelpers.extends({}, tt, {
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
        ut(
          1,
          "ACTIVE",
          babelHelpers.extends({}, tt, { ads_amount_spent: st, start_time: e }),
        ),
      ]);
    }
    ((g.doc =
      "Set up an onboarded BB Pro account with an in review campaign and an active campaign that started an hour ago: 25 sent, 20 delivered, 10 read, 2 replies (E2E)"),
      (g.paramsToExecute = []));
    function h(e) {
      (e === void 0 && (e = null),
        c(),
        (Y = !0),
        (J = e),
        (Z = 0),
        (ne = !1),
        v(),
        ge("audience_only"));
    }
    ((h.doc =
      "Set up an onboarded BB Pro account with an audience and a payment method whose campaign create succeeds in review, optionally capping the max bid at the given CPM in the smallest currency unit (E2E)"),
      (h.paramsToExecute = []));
    function y() {
      (te == null || te(),
        (ee = new (e || (e = n("Promise")))(function (e) {
          te = e;
        })));
    }
    ((y.doc =
      "Hold funded BB Pro campaign create responses until released, listing one in review campaign per create request (E2E)"),
      (y.paramsToExecute = []));
    function C() {
      te == null || te();
    }
    ((C.doc =
      "Answer held funded BB Pro campaign creates; later creates are answered at once and each still lists a campaign until the next funded setup or restore (E2E)"),
      (C.paramsToExecute = []));
    function b() {
      ne = !0;
    }
    ((b.doc =
      "Reject the next funded BB Pro campaign create like an offline fetch, listing no campaign for it; later creates succeed (E2E)"),
      (b.paramsToExecute = []));
    function v() {
      (te == null || te(), (te = null), (ee = null));
    }
    function S() {
      (r("vulture")("fpJ1xOlNxXxNCK5OpgMcRiWeqpM="), c(), ge("audience_only"));
    }
    ((S.doc =
      "Set up an onboarded BB Pro account with an audience and no campaigns (E2E)"),
      (S.paramsToExecute = []));
    function R() {
      (c(), ge("multi_audience"));
    }
    ((R.doc =
      "Set up an onboarded BB Pro account with three audiences, each with its own recipients, and no campaigns (E2E)"),
      (R.paramsToExecute = []));
    function L(e) {
      (c(), (de = e), ge("multi_audience"));
    }
    L.doc =
      "Set up the multi-audience BB Pro home plus a Loyal customers audience with the given number of recipients, Customer 01 onwards, served one requested page at a time (E2E)";
    function E() {
      (R(), (X = 1));
    }
    ((E.doc =
      "Set up the multi-audience BB Pro home whose first audience details read is still processing and later reads are settled (E2E)"),
      (E.paramsToExecute = []));
    function k() {
      (R(), (_e = new Map()));
    }
    ((k.doc =
      "Set up the multi-audience BB Pro home whose audience edits add and remove recipients until the next setup or restore (E2E)"),
      (k.paramsToExecute = []));
    function I() {
      (c(), ge("deletable_audience"));
    }
    ((I.doc =
      "Set up an onboarded BB Pro account with one audience whose delete succeeds and leaves no audiences, and no campaigns (E2E)"),
      (I.paramsToExecute = []));
    function T(e) {
      (c(), (re = e), ge("empty"));
    }
    T.doc =
      "Set up an empty onboarded BB Pro account whose Message limits show the given business verification status (E2E)";
    function D(e) {
      (c(), (oe = e), ge("audience_only"));
    }
    D.doc =
      "Set up an onboarded BB Pro account with an audience whose ad account pays with the given ad credits balance label (E2E)";
    function x() {
      (c(), (ae = !0), ge("empty"));
    }
    ((x.doc =
      "Set up an empty onboarded BB Pro account whose customer base has 2,100 - 2,500 subscribed recipients (E2E)"),
      (x.paramsToExecute = []));
    function $() {
      (c(),
        ge("empty", [pt(0, "SENDING_LIMITED", tt), pt(1, "NOT_SENDING", mt)]));
    }
    (($.doc =
      "Set up an onboarded BB Pro account with a sending limited campaign (25 sent, 20 delivered, 10 read, 2 replies) and a not sending campaign (8 sent, 4 delivered, 3 read, 1 reply), both started more than two days ago (E2E)"),
      ($.paramsToExecute = []));
    function P() {
      (m(), (me = 1));
    }
    ((P.doc =
      "Set up BB Pro campaigns Home whose first campaigns query fails with a network error (E2E)"),
      (P.paramsToExecute = []));
    var N = "1234567890123456",
      M = "1234567890123457",
      w = "1234567890123458",
      A = "1234567890123459",
      F = "Recording audience",
      O = 25,
      B = "1234567890123460",
      W = "1234567890123461",
      q = "Visa ending in 4242",
      U = 250,
      V = {
        phone_number_status: { waba_display_phone_number: "+1 555-010-0199" },
      },
      H = {
        business_object_name: null,
        is_subscriber_pool_empty: !1,
        name: null,
        subscriber_pool_audience_size: { lower_bound: 2100, upper_bound: 2500 },
      },
      G = 1767182400,
      z = null,
      j = [],
      K = null,
      Q = "empty",
      X = 0,
      Y = !1,
      J = null,
      Z = 0,
      ee = null,
      te = null,
      ne = !1,
      re = null,
      oe = null,
      ae = !1,
      ie = !1,
      le = [],
      se = new Set(),
      ue = null,
      ce = new Map(),
      de = null,
      me = 0,
      pe = null,
      _e = null;
    function fe(e) {
      var t = e === void 0 ? {} : e,
        n = t.subscriberPoolEmpty,
        r = n === void 0 ? !1 : n;
      ((ie = r), ge("empty"));
    }
    function ge(t, a, i) {
      if (
        (a === void 0 && (a = []),
        i === void 0 && (i = null),
        (Q = t),
        (X = 0),
        (j = a),
        (K = i),
        (pe = null),
        (_e = null),
        z == null)
      ) {
        var l = self.fetch.bind(self),
          s = o("WAWebGraphQLConstants").generateFacebookGraphqlEndpoint();
        z = function () {
          Reflect.set(self, "fetch", l);
        };
        var u = 0;
        Reflect.set(self, "fetch", function (t, o) {
          var a,
            i,
            c = t instanceof Request ? t.url : String(t);
          if (c !== s) return l(t, o);
          var d = o == null ? void 0 : o.body;
          if (ke(d))
            return (e || (e = n("Promise"))).reject(
              r("err")("Failed to fetch"),
            );
          var m = (a = (i = Ie(d)) != null ? i : Ge(d)) != null ? a : Te(d);
          if (m != null) return m;
          var p = xe(d) ? ee : null,
            _ = "234567890123456" + String(u);
          return (
            (u += 1),
            be({
              data: babelHelpers.extends(
                {},
                ye.reduce(function (e, t) {
                  return babelHelpers.extends({}, e, t(d));
                }, {}),
                {
                  create_wa_marketing_messages_custom_audience: {
                    custom_audience_id: _,
                  },
                },
              ),
            }).then(function (e) {
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
    ((fe.doc = "Mock BB Pro audience GraphQL responses (E2E)"),
      (fe.paramsToExecute = []));
    var he = "bb-pro-campaigns-next-page",
      ye = [Oe, Be, Ue, Re, it, Ve, ze, De, Ce];
    function Ce() {
      return {
        viewer: {
          backing_waba: babelHelpers.extends(
            {},
            Le(),
            {
              id: N,
              is_custom_param_restricted_for_first_party_paid_messaging: !1,
              name: "BB Pro test business",
              owner_business: {
                id: M,
                marketing_message_whatsapp_event_sharing_consent: null,
              },
            },
            ae ? V : {},
            {
              wa_bb_pro_campaigns: { edges: j, page_info: Se() },
              wa_bb_pro_custom_audiences: {
                edges:
                  Q === "audience_only"
                    ? [
                        {
                          node: {
                            id: A,
                            name: F,
                            operation_status: { status_code: "NO_STATUS" },
                            subscriber_size: O,
                          },
                        },
                      ]
                    : qe(),
              },
            },
          ),
        },
        xfb_whatsapp_bb_pro: babelHelpers.extends(
          {
            ad_account: babelHelpers.extends({ id: B }, $e(Y, oe), {
              currency_code_enum: "USD",
            }),
            default_subscriber_pool: ve(),
            sending_restriction: {
              is_sending_allowed: !0,
              minimum_scheduled_send_lead_time_seconds: 3600,
              upsell_business_verification: !1,
            },
          },
          Pe(re),
        ),
      };
    }
    function be(t) {
      return (e || (e = n("Promise"))).resolve(
        new Response(JSON.stringify(t), {
          headers: { "Content-Type": "application/json" },
          status: 200,
        }),
      );
    }
    function ve() {
      return ae
        ? babelHelpers.extends({ id: w }, H)
        : ie
          ? { id: w, is_subscriber_pool_empty: !0 }
          : { id: w };
    }
    function Se() {
      return K != null
        ? { end_cursor: he, has_next_page: !0 }
        : { end_cursor: null, has_next_page: !1 };
    }
    function Re(e) {
      return K == null ||
        typeof e != "string" ||
        !e.includes('"after":"' + he + '"')
        ? {}
        : {
            node: {
              __typename: "WhatsAppBusinessAccount",
              id: N,
              wa_bb_pro_campaigns: {
                edges: K,
                page_info: { end_cursor: null, has_next_page: !1 },
              },
            },
          };
    }
    function Le() {
      return J != null ? { audience_send_max_bid_amount: J } : {};
    }
    function Ee(e) {
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
    function ke(e) {
      if (me === 0 || typeof e != "string") return !1;
      var t;
      try {
        var n;
        t = (n = JSON.parse(e)) == null ? void 0 : n.variables;
      } catch (e) {
        return !1;
      }
      return t == null || !Object.hasOwn(t, "after") ? !1 : ((me -= 1), !0);
    }
    function Ie(t) {
      var o;
      if (le.length === 0 || typeof t != "string") return null;
      var a;
      try {
        var i;
        a = (i = JSON.parse(t)) == null ? void 0 : i.variables;
      } catch (e) {
        return null;
      }
      var l = Ke.findIndex(function (e, t) {
        var n;
        return dt(t) === String((n = a) == null ? void 0 : n.campaign_id);
      });
      if (((o = a) == null ? void 0 : o.status) !== "PAUSED" || l === -1)
        return null;
      var s = dt(l),
        u = le.shift();
      if (u === "network_error")
        return (e || (e = n("Promise"))).reject(r("err")("Failed to fetch"));
      u === "stopped" && (se.add(s), (j = Ze()));
      var c = Ke[l],
        d = c[0],
        m = c[2],
        p = ct(l);
      return be({
        data: {
          update_wa_bb_pro_campaign: {
            bb_pro_can_stop: m && !p,
            bb_pro_display_status: p ? "STOPPED" : d,
            id: s,
          },
        },
      });
    }
    function Te(t) {
      return !ne || !xe(t)
        ? null
        : ((ne = !1),
          (e || (e = n("Promise"))).reject(r("err")("Failed to fetch")));
    }
    function De(e) {
      if (typeof e != "string" || !xe(e)) return {};
      var t = JSON.parse(e).variables.start_time,
        n = typeof t == "number" ? ["SCHEDULED", "SCHEDULED", !0] : Ke[0];
      return (
        (Z += 1),
        (j = Ze(
          new Array(ee != null ? Z : 1).fill(n),
          typeof t == "number" ? t : Qe,
        )),
        {
          create_wa_bb_pro_campaign: {
            delivery_status_info: { status: n[1] },
            id: dt(0),
          },
        }
      );
    }
    function xe(e) {
      if (!Y || typeof e != "string") return !1;
      try {
        var t;
        return (
          ((t = JSON.parse(e).variables) == null ? void 0 : t.rate_card) != null
        );
      } catch (e) {
        return !1;
      }
    }
    function $e(e, t) {
      return e
        ? {
            billing_info: {
              payment_section_details: {
                inline_action: null,
                label: q,
                label_ax: q,
                logos: [],
                primary_action: null,
              },
              required_action: null,
            },
            payment_account: {
              __typename: "AdsPaymentAccountRawDoNotUse",
              id: W,
            },
          }
        : { billing_info: Ee(t), payment_account: null };
    }
    function Pe(e) {
      if (e == null) return {};
      var t = e === "NOT_STARTED" || e === "PENDING_SUBMISSION";
      return {
        business_verification: {
          completion_time: e === "VERIFIED" ? G : null,
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
          submitted_time: e === "PENDING_REVIEW" ? G : null,
          verification_status: e,
        },
        messaging_limits: {
          current_daily_limit: U,
          is_business_verified: e === "VERIFIED",
          minimum_daily_limit: U,
          unique_recipients_last_24h: 0,
          upgrade_requirements: [],
        },
      };
    }
    var Ne = [
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
      Me = 1767182400,
      we = "1234567890123473";
    function Ae() {
      var e = de;
      return e == null
        ? Ne
        : [].concat(Ne, [
            {
              id: we,
              name: "Loyal customers",
              recipientNames: Array.from({ length: e }, function (e, t) {
                return "Customer " + String(t + 1).padStart(2, "0");
              }),
            },
          ]);
    }
    function Fe() {
      return Q === "multi_audience"
        ? Ae()
        : Q === "deletable_audience"
          ? Ne.slice(0, 1)
          : Q === "audience_only" || Q === "empty"
            ? []
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    Q,
                );
              })();
    }
    function Oe(e) {
      var t = Ne[0];
      return Q !== "deletable_audience" ||
        typeof e != "string" ||
        !e.includes('"customAudienceId":"' + t.id + '"')
        ? {}
        : ((Q = "empty"),
          { delete_wa_marketing_messages_custom_audience: { success: !0 } });
    }
    function Be(e) {
      var t,
        n,
        r = _e;
      if (
        r == null ||
        typeof e != "string" ||
        !e.includes('"custom_audience_id"')
      )
        return {};
      var o = JSON.parse(e).variables.input,
        a = Fe().find(function (e) {
          var t = e.id;
          return t === String(o == null ? void 0 : o.custom_audience_id);
        });
      if (a == null || o.name != null) return {};
      var i = new Set((t = o.phone_numbers_removed) != null ? t : []);
      return (
        r.set(
          a.id,
          [].concat(
            We(a).filter(function (e) {
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
    function We(e) {
      var t, n;
      return (t = (n = _e) == null ? void 0 : n.get(e.id)) != null
        ? t
        : e.recipientNames.map(function (t, n) {
            return {
              full_name: t,
              phone_number:
                "1555010" + e.id.slice(-2) + String(n).padStart(2, "0"),
            };
          });
    }
    function qe() {
      return Fe().map(function (e) {
        return {
          node: {
            id: e.id,
            name: e.name,
            operation_status: { status_code: "NO_STATUS" },
            subscriber_size: We(e).length,
          },
        };
      });
    }
    function Ue(e) {
      var t = Fe().find(function (t) {
        var n = t.id;
        return typeof e == "string" && e.includes('"audienceId":"' + n + '"');
      });
      if (t == null || typeof e != "string") return {};
      var n = We(t),
        r = JSON.parse(e).variables,
        o = r.after,
        a = r.first,
        i = o == null ? 0 : Number(o) + 1,
        l = a == null ? n.length : i + Number(a),
        s = l < n.length,
        u = X > 0;
      return (
        u && (X -= 1),
        {
          node: {
            __typename: "AdCustomAudience",
            creation_time: Me,
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
    function Ve(e) {
      var t = ue;
      if (t == null || typeof e != "string") return {};
      var n = dt(t);
      if (!e.includes('"campaignId":"' + n + '"')) return {};
      var r = Ke[t],
        o = r[0],
        a = r[1],
        i = r[2],
        l = ct(t);
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
    function He(e) {
      if (typeof e != "string") return null;
      for (var t of ce) {
        var n = t[0],
          r = t[1];
        if (e.includes('"campaignId":"' + n + '"')) return r;
      }
      return null;
    }
    function Ge(t) {
      return He(t) === "request_failed"
        ? (e || (e = n("Promise"))).resolve(
            new Response(JSON.stringify({ error: Ye }), { status: Je }),
          )
        : null;
    }
    function ze(e) {
      return He(e) === "campaign_missing" ? { node: null } : {};
    }
    function je() {
      (z == null || z(),
        (z = null),
        (re = null),
        (oe = null),
        (ae = !1),
        (ie = !1),
        (le = []),
        (se = new Set()),
        (K = null),
        (Y = !1),
        (J = null),
        (ue = null),
        (X = 0),
        (Z = 0),
        v(),
        (ce = new Map()),
        (de = null),
        (me = 0),
        (pe = null),
        (_e = null));
    }
    ((je.doc = "Restore GraphQL responses after a BB Pro audience E2E mock"),
      (je.paramsToExecute = []));
    var Ke = [
        ["IN_REVIEW", "IN_REVIEW", !0],
        ["ACTIVE", "ACTIVE", !0],
        ["COMPLETED", "COMPLETED", !1],
        ["NOT_APPROVED", "REJECTED", !1],
      ],
      Qe = 1767182400,
      Xe = "BBPROCARD",
      Ye = { code: 2, message: "Service temporarily unavailable" },
      Je = 500;
    function Ze(e, t) {
      return (
        e === void 0 && (e = Ke),
        t === void 0 && (t = Qe),
        e.map(function (e, n) {
          var r = e[0],
            o = e[1],
            a = e[2];
          return {
            cursor: String(n),
            node: {
              __typename: "XFBWhatsAppBusinessMMLiteCampaign",
              bb_pro_can_stop: a && !ct(n),
              bb_pro_display_status: ct(n) ? "STOPPED" : r,
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
              id: dt(n),
            },
          };
        })
      );
    }
    function et(e, t) {
      return Ze(
        Array.from({ length: e + t }, function () {
          return ["COMPLETED", "COMPLETED", !1];
        }),
      ).slice(e);
    }
    var tt = {
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
      start_time: Qe,
      template: null,
    };
    function nt() {
      return {
        cursor: "0",
        node: {
          __typename: "XFBWhatsAppBusinessMMLiteCampaign",
          bb_pro_can_stop: !1,
          bb_pro_display_status: "COMPLETED",
          broadcast_insights: tt,
          campaign_name: "Insights campaign",
          delivery_status_info: { extra_data: null, status: "COMPLETED" },
          id: "345678901234570",
        },
      };
    }
    var rt = 7500;
    function ot(e, t) {
      return babelHelpers.extends({}, tt, {
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
    function at(e) {
      return {
        cursor: "0",
        node: {
          __typename: "XFBWhatsAppBusinessMMLiteCampaign",
          bb_pro_can_stop: !1,
          bb_pro_display_status: "COMPLETED",
          broadcast_insights: e,
          campaign_name: "Media campaign",
          delivery_status_info: { extra_data: null, status: "COMPLETED" },
          id: dt(0),
        },
      };
    }
    function it(e) {
      var t = pe,
        n = dt(0);
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
    var lt = 3600,
      st = 0.5;
    function ut(e, t, n) {
      return {
        cursor: String(e),
        node: {
          __typename: "XFBWhatsAppBusinessMMLiteCampaign",
          bb_pro_can_stop: !0,
          bb_pro_display_status: t,
          broadcast_insights: n,
          campaign_name: "Campaign " + String(e + 1),
          delivery_status_info: { extra_data: null, status: t },
          id: dt(e),
        },
      };
    }
    function ct(e) {
      return se.has(dt(e));
    }
    function dt(e) {
      return "34567890123456" + String(e);
    }
    var mt = babelHelpers.extends({}, tt, {
      ads_amount_spent: 0.4,
      ads_delivered: { count: 4 },
      first_customer_reply: { count: 1 },
      read: { count: 3 },
      read_rate: 75,
      reply_rate: 25,
      sent: { count: 8 },
    });
    function pt(e, t, n) {
      return {
        cursor: String(e),
        node: {
          __typename: "XFBWhatsAppBusinessMMLiteCampaign",
          bb_pro_can_stop: !1,
          bb_pro_display_status: t,
          broadcast_insights: n,
          campaign_name: "Campaign " + String(e + 1),
          delivery_status_info: { extra_data: null, status: "ACTIVE" },
          id: dt(e),
        },
      };
    }
    function _t() {
      return ft.apply(this, arguments);
    }
    function ft() {
      return (
        (ft = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebBroadcastListAction").createBroadcastListAction(
            { broadcastListName: F, contacts: [], customAudienceFbid: A },
          );
          return (
            yield o("WAWebDebugBizBroadcastChatUtils").whenBroadcastChatVisible(
              e,
            ),
            e
          );
        })),
        ft.apply(this, arguments)
      );
    }
    ((_t.doc =
      "Create the local chat of the mocked BB Pro audience, no UI (E2E)"),
      (_t.paramsToExecute = []));
    function gt(e, t, n, r) {
      return ht.apply(this, arguments);
    }
    function ht() {
      return (
        (ht = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            a === void 0 && (a = "home_status");
            var i = o(
                "WAWebDebugBizBroadcastChatUtils",
              ).getActiveBroadcastJid(),
              l = dt(e);
            (a === "home_status" ? (ue = e) : ce.set(l, a),
              yield r("WAWebBizBroadcastProLocalCampaignCardAction")({
                broadcastJid: i,
                campaignId: l,
                campaignMessageData: {
                  attachmentData: null,
                  buttonData: { displayText: n, type: "quick_reply" },
                  message: t,
                },
                campaignTimestamp: o("WATimeUtils").unixTime(),
                messageId: "" + Xe + l,
              }));
          },
        )),
        ht.apply(this, arguments)
      );
    }
    gt.doc =
      "Seed the active Pro chat with a mocked campaign card with a quick reply (E2E)";
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
      createBizBroadcastProMockAudienceChat: _t,
      createBizBroadcastProMockCampaignCardForActiveChat: gt,
      failNextBizBroadcastProCampaignCreate: b,
      holdBizBroadcastProCampaignCreates: y,
      mockBizBroadcastProAudienceGraphQLResponses: fe,
      releaseBizBroadcastProCampaignCreates: C,
      rescheduleBizBroadcastProCampaign: yt,
      restoreBizBroadcastProAudienceGraphQLResponses: je,
      setBizBroadcastProFirstTimeSetup: u,
      setBizBroadcastProNuxEligible: s,
      setBizBroadcastProOnboarded: c,
      setupBizBroadcastProAdCreditsHome: D,
      setupBizBroadcastProAudienceOnlyHome: S,
      setupBizBroadcastProCampaignsHome: m,
      setupBizBroadcastProCampaignsHomeFailingOnce: P,
      setupBizBroadcastProDeletableAudienceHome: I,
      setupBizBroadcastProDeliveryIssuesHome: $,
      setupBizBroadcastProEditableAudienceHome: k,
      setupBizBroadcastProEmptyHome: d,
      setupBizBroadcastProFundedAccount: h,
      setupBizBroadcastProInsightsHome: p,
      setupBizBroadcastProLifecycleInsightsHome: g,
      setupBizBroadcastProMediaCampaignHome: f,
      setupBizBroadcastProMultiAudienceHome: R,
      setupBizBroadcastProPagedAudienceHome: L,
      setupBizBroadcastProPagedCampaignsHome: _,
      setupBizBroadcastProProcessingAudienceHome: E,
      setupBizBroadcastProSubscribedRecipientsHome: x,
      setupBizBroadcastProVerificationHome: T,
    };
    l.default = Ct;
  },
  98,
);
