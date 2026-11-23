__d(
  "AdsGetStandardTemplateDefaultJSONNudgeHelper",
  [
    "fbt",
    "AdsAIGenIcebreakersValidationUtils",
    "AdsGetDefaultGreetingText",
    "AdsGetDefaultIceBreakers",
    "AdsMessengerConstants",
    "AdsMessengerJSONMediaFormatType",
    "AdsMessengerJSONTemplateType",
    "AdsMessengerVisualEditorCustomerActionType",
    "AdsMessengerVisualEditorLandingScreenType",
    "ClickToMessageCTMPerformanceFeatureGating",
    "WTMNudgeConstants",
    "isFalsey",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n, a, i, l, u, c) {
      var d,
        m,
        p,
        _,
        f,
        g,
        h,
        y,
        C,
        b,
        v,
        S,
        R,
        L,
        E,
        k,
        I,
        T,
        D,
        x = a == null ? void 0 : a.icebreakers,
        $ =
          (d = a == null ? void 0 : a.welcomeMessage) != null
            ? d
            : o("AdsGetDefaultGreetingText").getDefaultGreetingText(e, t),
        P =
          (m = x == null ? void 0 : x.icebreakers) != null
            ? m
            : o("AdsGetDefaultIceBreakers")
                .getDefaultIceBreakers(e, t, void 0, u, n)
                .map(function (e) {
                  return {
                    title: String(e.title),
                    response: e.response != null ? String(e.response) : null,
                  };
                }),
        N = r("isFalsey")(x) && r("isTruthy")(l),
        M =
          r("isFalsey")(x) &&
          o(
            "ClickToMessageCTMPerformanceFeatureGating",
          ).isEligibleForLeveragingInboxFAQsInAM(t, e, u, n),
        w = [
          {
            title: s._(/*BTDS*/ "").toString(),
            content_type: "text",
            response_type: "text",
          },
        ],
        A = [
          {
            title: s._(/*BTDS*/ "").toString(),
            content_type: "text",
            response_type: "text",
          },
          {
            title: s._(/*BTDS*/ "").toString(),
            content_type: "text",
            response_type: "text",
          },
          {
            title: s._(/*BTDS*/ "").toString(),
            content_type: "text",
            response_type: "text",
          },
        ],
        F =
          c === !0
            ? String(o("WTMNudgeConstants").DEFAULT_WTM_NUDGE_MESSAGE)
            : (p = a == null ? void 0 : a.nudgeMessage) != null
              ? p
              : String(
                  o("AdsMessengerConstants").DEFAULT_INITIAL_NUDGE_MESSAGE,
                ),
        O = (_ = a == null ? void 0 : a.nudgeModelVersion) != null ? _ : null;
      return babelHelpers.extends(
        {},
        o(
          "ClickToMessageCTMPerformanceFeatureGating",
        ).enableCTMPersonalizedIcebreakers(t)
          ? { personalized_icebreakers_enabled: !0 }
          : {},
        ((D = {}),
        (D.auto_follow_up = ((f = {}), (f.text = F), f)),
        (D.auto_follow_up_disabled = !1),
        (D.reengagement = {
          text: String(
            o("AdsMessengerConstants").DEFAULT_INITIAL_NUDGE_MESSAGE,
          ),
          include_products: !1,
        }),
        (D.reengagement_disabled = !1),
        (D.type = "VISUAL_EDITOR"),
        (D.version = 2),
        (D.landing_screen_type = r(
          "AdsMessengerVisualEditorLandingScreenType",
        ).WELCOME_MESSAGE),
        (D.media_type = r("AdsMessengerJSONMediaFormatType").TEXT),
        (D.text_format =
          ((h = {}),
          (h.customer_action_type = r("isTruthy")(N)
            ? r("AdsMessengerVisualEditorCustomerActionType").INBOX_FAQS
            : r("AdsMessengerVisualEditorCustomerActionType").ICE_BREAKERS),
          (h.message =
            ((g = {}),
            (g.ice_breakers = P),
            (g.quick_replies = []),
            (g.text = $),
            g)),
          h)),
        (D.image_format =
          ((S = {}),
          (S.customer_action_type = r(
            "AdsMessengerVisualEditorCustomerActionType",
          ).QUICK_REPLIES),
          (S.message =
            ((v = {}),
            (v.attachment =
              ((b = {}),
              (b.type = "template"),
              (b.payload =
                ((C = {}),
                (C.template_type = r("AdsMessengerJSONTemplateType").GENERIC),
                (C.elements = [
                  ((y = {}),
                  (y.title = ""),
                  (y.buttons = []),
                  (y.image_hash = ""),
                  y),
                ]),
                C)),
              b)),
            (v.quick_replies = w),
            (v.text = $),
            v)),
          S)),
        (D.video_format =
          ((k = {}),
          (k.customer_action_type = r(
            "AdsMessengerVisualEditorCustomerActionType",
          ).QUICK_REPLIES),
          (k.message =
            ((E = {}),
            (E.attachment =
              ((L = {}),
              (L.type = r("AdsMessengerJSONMediaFormatType").VIDEO),
              (L.payload = ((R = {}), (R.attachment_id = ""), R)),
              L)),
            (E.quick_replies = w),
            (E.text = $),
            E)),
          k)),
        (D.user_edit = !1),
        (D.surface = "visual_editor_new"),
        (D.ai_generated_icebreaker_toggle_enabled = r("isTruthy")(i)
          ? !o(
              "AdsAIGenIcebreakersValidationUtils",
            ).didIcebreakersFetchFailOrNotEligible(
              x == null ? void 0 : x.icebreakers,
            )
          : null),
        (D.ai_gen_conversation_model_version =
          x == null || (I = x.modelVersion) == null ? void 0 : I.valueOf()),
        (D.ai_gen_welcome_message_model_version =
          (T = a == null ? void 0 : a.welcomeMessageModelVersion) != null
            ? T
            : null),
        (D.ai_gen_nudge_model_version = O),
        (D.nudge_was_ai_generated =
          O != null &&
          O !==
            o("AdsMessengerConstants").AI_GEN_NUDGE_MODEL_VERSION_UNDEFINED),
        (D.is_eligible_for_customized_greeting = !1),
        (D.is_user_editing = !1),
        (D.is_eligible_for_leveraging_inbox_faqs = M),
        D),
      );
    }
    l.default = e;
  },
  226,
);
