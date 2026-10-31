__d(
  "WAWebDebugBizAiMetaOne",
  [
    "Promise",
    "WATimeUtils",
    "WAWebBizAiSmartComposerCache",
    "WAWebBizAiSmartComposerSuggestionFetcherQuery.graphql",
    "WAWebBizAiSuggestedReplyMetaOneEligibilityQuery.graphql",
    "WAWebContactGetters",
    "WAWebDebugUtils",
    "WAWebFetchSubscriptionEntryPoints",
    "WAWebGraphQLPersistedQueries",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMetaOneGating",
    "WAWebMetaOneSubscriptionActions",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebSubscriptionCollection",
    "WAWebSubscriptionSource",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsSubscription",
    "asyncToGeneratorRuntime",
    "err",
    "tryParseJSONMixed",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 36e5,
      u = "ELIGIBLE_AND_ONBOARDED_TO_BIZ_AI",
      c = "ONBOARDED_WITH_META_ONE_SUBSCRIPTION",
      d = "debug-meta-one",
      m = new Map(),
      p = null;
    function _(e) {
      (e === void 0 && (e = "free-at-limit"),
        o("WAWebBizAiSmartComposerCache").clearCachedSuggestions(),
        C(
          e === "free-at-limit" || e === "web-ineligible"
            ? { subscriptionStatus: u, atLimit: !0 }
            : e === "free-under-limit"
              ? { subscriptionStatus: u, atLimit: !1 }
              : e === "paid-at-limit"
                ? { subscriptionStatus: c, atLimit: !0 }
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
          Date.now() + s,
        ),
        R(e === "paid-at-limit"),
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
    ((_.doc =
      "Meta One: fake the Business AI account state. Presets: 'free-at-limit' (default), 'free-under-limit', 'paid-at-limit', 'web-ineligible', 'status-unavailable'.\nAnswers the subscription status check; at the limit, suggested replies fail with the quota error. Also overrides Web Meta One eligibility, which is saved until metaOneBizAiRestore() or the next eligibility fetch an hour later.\nReopen the chat after switching presets. Existing subscriptions and rollout flags stay in effect."),
      (_.paramsToExecute = ["free-at-limit"]));
    function f(e) {
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
            to: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
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
    ((f.doc =
      "Meta One: add a local AI Hub notice with its real button to the open Business AI chat, in memory only. Types (ai_hub_message_type):\nSUBSCRIPTION_USAGE_LIMIT_NOTICE, SUBSCRIPTION_PLAN_LIMIT_APPROACHING, SUBSCRIPTION_PLAN_LIMIT_ENDED (default), SUBSCRIPTION_PAID_PLAN_LIMIT_ENDED (top-up link), GUIDANCE_SHOW_META_ONE_MENU (View details)."),
      (f.paramsToExecute = ["SUBSCRIPTION_PLAN_LIMIT_ENDED"]));
    function g(e) {
      return (
        e === void 0 && (e = !0),
        e && C({ subscriptionStatus: c, atLimit: !1 }),
        R(e),
        o("WAWebMetaOneSubscriptionActions").hasActiveMetaOneSubscription()
      );
    }
    ((g.doc =
      "Meta One: simulate a purchase syncing. true adds an in-memory Meta One subscription and switches the account mocks to subscribed and under the limit. false only removes the debug subscription; run metaOneBizAiMockAccount() to put a free preset back."),
      (g.paramsToExecute = [!0]));
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (o("WAWebBizAiSmartComposerCache").clearCachedSuggestions(),
            (m = new Map()),
            p != null &&
              self.fetch === p.wrapper &&
              Reflect.set(self, "fetch", p.previous),
            (p = null),
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
            ).fetchSubscriptionEntryPoints(),
            R(!1));
        })),
        y.apply(this, arguments)
      );
    }
    ((h.doc =
      "Meta One: remove the account mocks and the debug subscription, and refetch the real Web eligibility.\nA reload clears the AI Hub notice."),
      (h.paramsToExecute = []));
    function C(e) {
      var t = e.atLimit,
        n = e.subscriptionStatus,
        o = function () {
          return {
            meta_ai_biz_agent_wa_subscription_state_v2:
              n == null
                ? { success: !1, subscription_state: null }
                : {
                    success: !0,
                    subscription_state: { subscription_status: n },
                  },
          };
        };
      ((m = new Map([
        [v(r("WAWebBizAiSuggestedReplyMetaOneEligibilityQuery.graphql")), o],
      ])),
        t &&
          m.set(
            v(r("WAWebBizAiSmartComposerSuggestionFetcherQuery.graphql")),
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
        b());
    }
    function b() {
      if (!(p != null && self.fetch === p.wrapper)) {
        var t = self.fetch,
          r = self.fetch.bind(self),
          o = function (o, a) {
            var t = S(a == null ? void 0 : a.body);
            return t != null
              ? (e || (e = n("Promise"))).resolve(
                  new Response(JSON.stringify({ data: t }), {
                    headers: { "Content-Type": "application/json" },
                    status: 200,
                  }),
                )
              : r(o, a);
          };
        ((p = { previous: t, wrapper: o }), Reflect.set(self, "fetch", o));
      }
    }
    function v(e) {
      var t,
        n = e.params;
      return (t = o("WAWebGraphQLPersistedQueries").PersistedQueries[n.name]) !=
        null
        ? t
        : n.id;
    }
    function S(e) {
      var t,
        n = typeof e == "string" ? r("tryParseJSONMixed")(e) : null;
      return typeof n != "object" || n == null || typeof n.doc_id != "string"
        ? null
        : (t = m.get(n.doc_id)) == null
          ? void 0
          : t(n.variables);
    }
    function R(e) {
      e
        ? o("WAWebSubscriptionCollection").SubscriptionCollection.add({
            id: d,
            isDeactivated: !1,
            source: o("WAWebSubscriptionSource").SubscriptionSource.MP4B,
            status: "ACTIVE",
          })
        : o("WAWebSubscriptionCollection").SubscriptionCollection.remove(d);
    }
    var L = {
      metaOneBizAiMockAccount: _,
      metaOneBizAiMockSubscription: g,
      metaOneBizAiRestore: h,
      metaOneBizAiShowAiHubMessage: f,
    };
    l.default = L;
  },
  98,
);
