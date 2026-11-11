__d(
  "WAWebDebugBizAiMetaOne",
  [
    "Promise",
    "WATimeUtils",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizAiSmartComposerAiRepliesStatusMutation.graphql",
    "WAWebBizAiSmartComposerCache",
    "WAWebBizAiSmartComposerHandoffLimitCheckQuery.graphql",
    "WAWebBizAiSmartComposerSuggestionFetcherQuery.graphql",
    "WAWebBizAiSuggestedReplyMetaOneEligibilityQuery.graphql",
    "WAWebCTWAConstants",
    "WAWebContactGetters",
    "WAWebDBUpdateChatTable",
    "WAWebDebugUtils",
    "WAWebFetchSubscriptionEntryPoints",
    "WAWebGraphQLPersistedQueries",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebL10N",
    "WAWebMetaOneGating",
    "WAWebMetaOneSubscriptionActions",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsQuickPromotionSurfaces.pb",
    "WAWebSchemaQuickPromotions",
    "WAWebSubscriptionCollection",
    "WAWebSubscriptionSource",
    "WAWebUserPrefsSubscription",
    "WAWebUserUtils",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "err",
    "tryParseJSONMixed",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 604800,
      u = 3600 * 1e3,
      c = "ELIGIBLE_AND_ONBOARDED_TO_BIZ_AI",
      d = "ONBOARDED_WITH_META_ONE_SUBSCRIPTION",
      m = "debug-meta-one",
      p = "debug-meta-one-quota-banner",
      _ =
        "https://wa.me/subscriptions?qp_id=debug-meta-one-quota-banner&deeplink_params=%7B%22product_type%22%3A%22MP4B%22%7D",
      f = new Map(),
      g = null,
      h = new Map();
    function y(e) {
      (e === void 0 && (e = "free-at-limit"),
        o("WAWebBizAiSmartComposerCache").clearCachedSuggestions(),
        k(
          e === "free-at-limit" || e === "web-ineligible"
            ? { subscriptionStatus: c, atLimit: !0 }
            : e === "free-under-limit"
              ? { subscriptionStatus: c, atLimit: !1 }
              : e === "paid-at-limit"
                ? { subscriptionStatus: d, atLimit: !0 }
                : e === "status-unavailable"
                  ? { subscriptionStatus: null, atLimit: !0 }
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          e,
                      );
                    })(),
        ));
      var t = e !== "web-ineligible";
      return (
        o("WAWebUserPrefsSubscription").setSubscriptionsEntryPointEligibility({
          metaVerified: o(
            "WAWebUserPrefsSubscription",
          ).getSubscriptionsEntryPointEligibility().metaVerified,
          metaOne: t,
        }),
        o("WAWebUserPrefsSubscription").setNextFetchSubscriptionEntryPointsTime(
          Date.now() + u,
        ),
        x(e === "paid-at-limit"),
        {
          preset: e,
          flag: o(
            "WAWebMetaOneGating",
          ).isMetaOneBizAiAdditionalEntryPointsEnabled(),
          rollout: o("WAWebMetaOneGating").isMetaOneRolloutEnabled(),
          webEligible: t,
          hasActiveMetaOne: o(
            "WAWebMetaOneSubscriptionActions",
          ).hasActiveMetaOneSubscription(),
        }
      );
    }
    ((y.doc =
      "Meta One: fake the Business AI account state. Presets: 'free-at-limit' (default), 'free-under-limit', 'paid-at-limit', 'web-ineligible', 'status-unavailable'.\nAnswers the subscription status and usage checks; at the limit, suggested replies and AI-on mode changes fail with the quota error. Also overrides Web Meta One eligibility, which is saved until metaOneBizAiRestore() or the next eligibility fetch an hour later.\nReopen the chat after switching presets. Cached suggestions are cleared. Existing subscriptions and rollout flags stay in effect."),
      (y.paramsToExecute = ["free-at-limit"]));
    function C(e) {
      e === void 0 && (e = "SUBSCRIPTION_PLAN_LIMIT_ENDED");
      var t = o("WAWebDebugUtils").getSelectedChat();
      if (!o("WAWebContactGetters").getIsAiHub(t.contact))
        throw r("err")("Open the Business AI chat first");
      var n =
          e === "SUBSCRIPTION_PAID_PLAN_LIMIT_ENDED"
            ? ["Get more usage now", "subscription-topups"]
            : e === "GUIDANCE_SHOW_META_ONE_MENU"
              ? ["View details", "subscription-plans"]
              : ["Try for free", "subscription-plans"],
        a = n[0],
        i = n[1],
        l =
          "whatsapp-smb://biz-agents-monetization/" +
          i +
          "?ai_hub_message_type=" +
          e;
      return (
        t.msgs.add(
          new (o("WAWebMsgModel").Msg)({
            id: new (r("WAWebMsgKey"))({
              fromMe: !1,
              remote: t.id,
              id: "DEBUG_META_ONE_" + Date.now().toString(36),
            }),
            t: o("WATimeUtils").unixTime(),
            from: t.id,
            to: o("WAWebUserUtils").getMeUserOrThrow(),
            type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
            caption: "*Debug AI Hub notice*\n" + e,
            interactiveType: r("WAWebInteractiveMessageType").NATIVE_FLOW,
            nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName").CTA_URL,
            nativeFlowInteractiveMsg: !0,
            interactivePayload: {
              messageVersion: 1,
              buttons: [
                {
                  name: "cta_url",
                  buttonParamsJson: JSON.stringify({ display_text: a, url: l }),
                },
              ],
            },
          }),
        ),
        l
      );
    }
    ((C.doc =
      "Meta One: add a local AI Hub notice with its real button to the open Business AI chat, in memory only. Types (ai_hub_message_type):\nSUBSCRIPTION_USAGE_LIMIT_NOTICE, SUBSCRIPTION_PLAN_LIMIT_APPROACHING, SUBSCRIPTION_PLAN_LIMIT_ENDED (default), SUBSCRIPTION_PAID_PLAN_LIMIT_ENDED (top-up link), GUIDANCE_SHOW_META_ONE_MENU (View details)."),
      (C.paramsToExecute = ["SUBSCRIPTION_PLAN_LIMIT_ENDED"]));
    function b() {
      var e = o("WAWebDebugUtils").getSelectedChat(),
        t = {
          capiThreadControl: e.capiThreadControl,
          isAiHandoff: e.isAiHandoff,
          aiHandoffStartedAt: e.aiHandoffStartedAt,
          aiHandoffRemovalExpiry: e.aiHandoffRemovalExpiry,
          isSmartComposerHandoffCardDismissed:
            e.isSmartComposerHandoffCardDismissed,
        };
      if (
        (e.set({
          capiThreadControl: o("WAWebProtobufsE2E.pb")
            .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
            .CONTROL_PASSED,
          isAiHandoff: !0,
          aiHandoffStartedAt: o("WATimeUtils").unixTime(),
          aiHandoffRemovalExpiry: null,
          isSmartComposerHandoffCardDismissed: !1,
        }),
        o("WAWebBizAiAgentStatusUtils").resolveAiChatStatus(e) !== "handoff")
      )
        throw (
          e.set(t),
          r("err")(
            "Use a customer chat whose last message is from the customer",
          )
        );
      h.has(e) || h.set(e, t);
    }
    ((b.doc =
      "Meta One: mark the open customer chat as handed off by the AI agent so the Smart Composer handoff card shows.\nThe chat's last message must be from the customer. A mode change in that chat saves the fake handoff; run metaOneBizAiRestore() before reloading to put the chat back."),
      (b.paramsToExecute = []));
    function v(e) {
      return (
        e === void 0 && (e = !0),
        e && k({ subscriptionStatus: d, atLimit: !1 }),
        x(e),
        o("WAWebMetaOneSubscriptionActions").hasActiveMetaOneSubscription()
      );
    }
    ((v.doc =
      "Meta One: simulate a purchase syncing. true adds an in-memory Meta One subscription and switches the account mocks to subscribed and under the limit. false only removes the debug subscription; run metaOneBizAiMockAccount() to put a free preset back.\nReloads Quick Promotions so the Chats banner re-checks."),
      (v.paramsToExecute = [!0]));
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WATimeUtils").unixTime(),
            t = new Intl.DateTimeFormat(r("WAWebL10N").getFullLocale(), {
              month: "long",
              day: "numeric",
            }).format(new Date((e + s) * 1e3));
          return (
            yield o("WAWebSchemaQuickPromotions")
              .getQuickPromotionsTable()
              .createOrReplace({
                id: p,
                surfaceId: o("WAWebCTWAConstants").QP_SURFACE_ID_CHAT_LIST_TOP,
                locale: r("WAWebL10N").getLocale(),
                ts: e,
                tracking: {
                  impressions: 0,
                  primaryClicks: 0,
                  secondaryClicks: 0,
                  dismisses: 0,
                },
                data: {
                  id: p,
                  titleElementValue: "Monthly AI usage limit reached",
                  textElementValue:
                    "Subscribe to Meta One or wait until " + t + ".",
                  primaryAction: {
                    text: "Get Meta One",
                    deepLink: _,
                    universalLink: null,
                  },
                  qpConfigFilterRules: {
                    clauseType: o("WAWebProtobufsQuickPromotionSurfaces.pb")
                      .QP$ClauseType.AND,
                    clauses: [],
                    filters: [
                      P("whatsapp_biz_ai_has_onboarded_client", { param: "1" }),
                      P("whatsapp_biz_ai_quota_reached_eligible", {
                        param: "1",
                      }),
                      P("other_promotion_event", {
                        event: "primary_action",
                        event_count: String(s),
                        metric: "seconds_since_greater_than",
                        nux_id:
                          o("WAWebCTWAConstants").QP_SURFACE_ID_CHAT_LIST_TOP,
                        promo_id: p,
                      }),
                    ],
                  },
                  qpConfigPacing: {
                    promotionConfig: {
                      maxImpressions: 7,
                      maxDismisses: 3,
                      maxPrimaryClicks: 9999,
                      maxSecondaryClicks: 0,
                    },
                    userInfo: null,
                  },
                  qpConfigClientSideDryRun: "false",
                  qpConfigDeterministic: "true",
                  qpConfigDismissable: "true",
                  qpConfigEligibilityDurationMs: 43200 * 1e3,
                  qpConfigEndTimeSeconds: e + s,
                  qpConfigExperimentKey: null,
                  qpConfigExposureHoldout: "false",
                  qpConfigExposureStrategy: null,
                  qpConfigForcePass: "false",
                  qpConfigImpressionCooldown: -1,
                  qpConfigInstanceLogData: null,
                  qpConfigLogEligibilityWaterfall: "false",
                  qpConfigMaxImpressions: -1,
                  qpConfigPriority: 0,
                  qpConfigStartTimeSeconds: e,
                  qpConfigSurfaceDelayTimeSeconds: 0,
                  qpConfigTemplateName: "whatsapp_banner",
                  qpConfigTriggersTrigger: [],
                  qpConfigTtlSeconds: 1440 * 60,
                  colors: null,
                  contentAttributes: {
                    attribute: [{ key: "wa_wds_style", value: "warning" }],
                  },
                  header: null,
                  image: null,
                  instanceId: null,
                  secondaryAction: null,
                },
              }),
            $(),
            p
          );
        })),
        R.apply(this, arguments)
      );
    }
    ((S.doc =
      "Meta One: add a local Chats banner (surface 11478) with the live copy and the real Get Meta One link. It shows only if the real Web filters pass, so run metaOneBizAiMockAccount() first.\nThe next Quick Promotions fetch deletes it."),
      (S.paramsToExecute = []));
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (o("WAWebBizAiSmartComposerCache").clearCachedSuggestions(),
            (f = new Map()),
            g != null &&
              self.fetch === g.wrapper &&
              Reflect.set(self, "fetch", g.previous),
            (g = null),
            o(
              "WAWebUserPrefsSubscription",
            ).setSubscriptionsEntryPointEligibility(
              babelHelpers.extends(
                {},
                o(
                  "WAWebUserPrefsSubscription",
                ).getSubscriptionsEntryPointEligibility(),
                { metaOne: null },
              ),
            ),
            o(
              "WAWebUserPrefsSubscription",
            ).setNextFetchSubscriptionEntryPointsTime(0),
            o(
              "WAWebFetchSubscriptionEntryPoints",
            ).fetchSubscriptionEntryPoints());
          var t = Array.from(h);
          (h.clear(),
            yield (e || (e = n("Promise"))).all(
              [
                o("WAWebSchemaQuickPromotions")
                  .getQuickPromotionsTable()
                  .remove(p),
              ].concat(
                t.map(function (e) {
                  var t = e[0],
                    n = e[1];
                  return (
                    t.set(n),
                    o("WAWebDBUpdateChatTable").updateChatTable(t.id, {
                      aiHandoffRemovalExpiry: n.aiHandoffRemovalExpiry,
                      aiHandoffStartedAt: n.aiHandoffStartedAt,
                      capiThreadControl: n.capiThreadControl,
                      isAiHandoff: n.isAiHandoff,
                    })
                  );
                }),
              ),
            ),
            x(!1));
        })),
        E.apply(this, arguments)
      );
    }
    ((L.doc =
      "Meta One: remove the account mocks and the debug subscription, refetch the real Web eligibility, delete the local Chats banner and put fake-handoff chats back.\nA reload clears the AI Hub notice."),
      (L.paramsToExecute = []));
    function k(e) {
      var t = e.atLimit,
        n = e.subscriptionStatus,
        a = function () {
          return {
            meta_ai_biz_agent_wa_subscription_state_v2:
              n == null
                ? { success: !1, subscription_state: null }
                : {
                    success: !0,
                    subscription_state: {
                      subscription_status: n,
                      current_usage: {
                        usage_status: t
                          ? "AT_LIMIT"
                          : "HAS_USAGE_WITHOUT_WARNING",
                        quota_refreshes_at: o("WATimeUtils").unixTime() + s,
                      },
                    },
                  },
          };
        };
      ((f = new Map([
        [T(r("WAWebBizAiSuggestedReplyMetaOneEligibilityQuery.graphql")), a],
        [T(r("WAWebBizAiSmartComposerHandoffLimitCheckQuery.graphql")), a],
      ])),
        t &&
          (f.set(
            T(r("WAWebBizAiSmartComposerSuggestionFetcherQuery.graphql")),
            function () {
              return {
                meta_ai_biz_agent_wa_suggested_reply: {
                  bot_response_id: null,
                  error_code: "SUBSCRIPTION_QUOTA_EXHAUSTED",
                  product: null,
                  text: null,
                  type: null,
                },
              };
            },
          ),
          f.set(
            T(r("WAWebBizAiSmartComposerAiRepliesStatusMutation.graphql")),
            function (e) {
              var t =
                typeof e == "object" && e != null ? e.thread_status : null;
              return t === "UNMUTED" || t === "SUGGESTED_REPLIES"
                ? {
                    xfb_whatsapp_smb_maiba_ai_replies_status_update: {
                      success: !1,
                      error_code: "CONVERSATION_QUOTA_EXHAUSTED",
                      update_timestamp_ms: null,
                      suggested_replies_enabled: null,
                    },
                  }
                : null;
            },
          )),
        I());
    }
    function I() {
      if (!(g != null && self.fetch === g.wrapper)) {
        var t = self.fetch,
          r = self.fetch.bind(self),
          o = function (o, a) {
            var t = D(a == null ? void 0 : a.body);
            return t != null
              ? (e || (e = n("Promise"))).resolve(
                  new Response(JSON.stringify({ data: t }), {
                    headers: { "Content-Type": "application/json" },
                    status: 200,
                  }),
                )
              : r(o, a);
          };
        ((g = { previous: t, wrapper: o }), Reflect.set(self, "fetch", o));
      }
    }
    function T(e) {
      var t,
        n = e.params;
      return (t = o("WAWebGraphQLPersistedQueries").PersistedQueries[n.name]) !=
        null
        ? t
        : n.id;
    }
    function D(e) {
      var t,
        n = typeof e == "string" ? r("tryParseJSONMixed")(e) : null;
      return typeof n != "object" || n == null || typeof n.doc_id != "string"
        ? null
        : (t = f.get(n.doc_id)) == null
          ? void 0
          : t(n.variables);
    }
    function x(e) {
      (e
        ? o("WAWebSubscriptionCollection").SubscriptionCollection.add({
            id: m,
            isDeactivated: !1,
            source: o("WAWebSubscriptionSource").SubscriptionSource.MP4B,
            status: "ACTIVE",
          })
        : o("WAWebSubscriptionCollection").SubscriptionCollection.remove(m),
        $());
    }
    function $() {
      o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
        "loadQuickPromotions",
        { trigger: "prefetch" },
      );
    }
    function P(e, t) {
      return {
        filterName: e,
        parameters: Object.keys(t).map(function (e) {
          return { key: e, value: t[e] };
        }),
        clientNotSupportedConfig: o("WAWebProtobufsQuickPromotionSurfaces.pb")
          .QP$FilterClientNotSupportedConfig.FAIL_BY_DEFAULT,
      };
    }
    var N = {
      metaOneBizAiFakeHandoff: b,
      metaOneBizAiMockAccount: y,
      metaOneBizAiMockSubscription: v,
      metaOneBizAiRestore: L,
      metaOneBizAiShowAiHubMessage: C,
      metaOneBizAiShowChatsBanner: S,
    };
    l.default = N;
  },
  98,
);
