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
    "isFalsey",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n, a, i, l, u) {
      var c,
        d,
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
        D = a == null ? void 0 : a.icebreakers,
        x =
          (c = a == null ? void 0 : a.welcomeMessage) != null
            ? c
            : o("AdsGetDefaultGreetingText").getDefaultGreetingText(e, t),
        $ =
          (d = D == null ? void 0 : D.icebreakers) != null
            ? d
            : o("AdsGetDefaultIceBreakers")
                .getDefaultIceBreakers(e, t, void 0, u, n)
                .map(function (e) {
                  return {
                    title: String(e.title),
                    response: e.response != null ? String(e.response) : null,
                  };
                }),
        P = r("isFalsey")(D) && r("isTruthy")(l),
        N =
          r("isFalsey")(D) &&
          o(
            "ClickToMessageCTMPerformanceFeatureGating",
          ).isEligibleForLeveragingInboxFAQsInAM(t, e, u, n),
        M = [
          {
            title: s._(/*BTDS*/ "I'd like to learn more").toString(),
            content_type: "text",
            response_type: "text",
          },
        ],
        w = [
          {
            title: s._(/*BTDS*/ "I'd like to learn more").toString(),
            content_type: "text",
            response_type: "text",
          },
          {
            title: s._(/*BTDS*/ "Contact me later").toString(),
            content_type: "text",
            response_type: "text",
          },
          {
            title: s._(/*BTDS*/ "Not interested").toString(),
            content_type: "text",
            response_type: "text",
          },
        ],
        A =
          (m = a == null ? void 0 : a.nudgeMessage) != null
            ? m
            : String(o("AdsMessengerConstants").DEFAULT_INITIAL_NUDGE_MESSAGE),
        F = (p = a == null ? void 0 : a.nudgeModelVersion) != null ? p : null;
      return (
        (T = {}),
        (T.auto_follow_up = ((_ = {}), (_.text = A), _)),
        (T.auto_follow_up_disabled = !1),
        (T.reengagement = {
          text: String(
            o("AdsMessengerConstants").DEFAULT_INITIAL_NUDGE_MESSAGE,
          ),
          include_products: !1,
        }),
        (T.reengagement_disabled = !1),
        (T.type = "VISUAL_EDITOR"),
        (T.version = 2),
        (T.landing_screen_type = r(
          "AdsMessengerVisualEditorLandingScreenType",
        ).WELCOME_MESSAGE),
        (T.media_type = r("AdsMessengerJSONMediaFormatType").TEXT),
        (T.text_format =
          ((g = {}),
          (g.customer_action_type = r("isTruthy")(P)
            ? r("AdsMessengerVisualEditorCustomerActionType").INBOX_FAQS
            : r("AdsMessengerVisualEditorCustomerActionType").ICE_BREAKERS),
          (g.message =
            ((f = {}),
            (f.ice_breakers = $),
            (f.quick_replies = []),
            (f.text = x),
            f)),
          g)),
        (T.image_format =
          ((v = {}),
          (v.customer_action_type = r(
            "AdsMessengerVisualEditorCustomerActionType",
          ).QUICK_REPLIES),
          (v.message =
            ((b = {}),
            (b.attachment =
              ((C = {}),
              (C.type = "template"),
              (C.payload =
                ((y = {}),
                (y.template_type = r("AdsMessengerJSONTemplateType").GENERIC),
                (y.elements = [
                  ((h = {}),
                  (h.title = ""),
                  (h.buttons = []),
                  (h.image_hash = ""),
                  h),
                ]),
                y)),
              C)),
            (b.quick_replies = M),
            (b.text = x),
            b)),
          v)),
        (T.video_format =
          ((E = {}),
          (E.customer_action_type = r(
            "AdsMessengerVisualEditorCustomerActionType",
          ).QUICK_REPLIES),
          (E.message =
            ((L = {}),
            (L.attachment =
              ((R = {}),
              (R.type = r("AdsMessengerJSONMediaFormatType").VIDEO),
              (R.payload = ((S = {}), (S.attachment_id = ""), S)),
              R)),
            (L.quick_replies = M),
            (L.text = x),
            L)),
          E)),
        (T.user_edit = !1),
        (T.surface = "visual_editor_new"),
        (T.ai_generated_icebreaker_toggle_enabled = r("isTruthy")(i)
          ? !o(
              "AdsAIGenIcebreakersValidationUtils",
            ).didIcebreakersFetchFailOrNotEligible(
              D == null ? void 0 : D.icebreakers,
            )
          : null),
        (T.ai_gen_conversation_model_version =
          D == null || (k = D.modelVersion) == null ? void 0 : k.valueOf()),
        (T.ai_gen_welcome_message_model_version =
          (I = a == null ? void 0 : a.welcomeMessageModelVersion) != null
            ? I
            : null),
        (T.ai_gen_nudge_model_version = F),
        (T.nudge_was_ai_generated =
          F != null &&
          F !==
            o("AdsMessengerConstants").AI_GEN_NUDGE_MODEL_VERSION_UNDEFINED),
        (T.is_eligible_for_customized_greeting = !1),
        (T.is_user_editing = !1),
        (T.is_eligible_for_leveraging_inbox_faqs = N),
        T
      );
    }
    l.default = e;
  },
  226,
);
