__d(
  "AdsGetStandardTemplateDefaultJSONHelperForWhatsAppAutofillMessage",
  [
    "fbt",
    "AdsAIGenIcebreakersValidationUtils",
    "AdsAiGenIcebreakersCTWAUtils",
    "AdsGetDefaultGreetingText",
    "AdsMessengerJSONMediaFormatType",
    "AdsMessengerJSONTemplateType",
    "AdsMessengerVisualEditorCustomerActionType",
    "AdsMessengerVisualEditorLandingScreenType",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n) {
      var a,
        i,
        l,
        u,
        c,
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
        v = t == null ? void 0 : t.icebreakers,
        S =
          (a = t == null ? void 0 : t.welcomeMessage) != null
            ? a
            : o("AdsGetDefaultGreetingText").getDefaultGreetingText(
                e,
                "WHATSAPP",
              ),
        R = [
          ((i = {}),
          (i.title = s._(/*BTDS*/ "I'd like to learn more").toString()),
          (i.content_type = "text"),
          (i.response_type = null),
          i),
        ],
        L =
          n === !0
            ? o(
                "AdsAiGenIcebreakersCTWAUtils",
              ).getAutofillMessageFromGenAIIcebreakers(
                v == null ? void 0 : v.icebreakers,
              )
            : o(
                "AdsAiGenIcebreakersCTWAUtils",
              ).getAutofillMessageFromGenAIIcebreakers(null),
        E = L;
      return (
        (b = {}),
        (b.type = "VISUAL_EDITOR"),
        (b.version = 2),
        (b.landing_screen_type = r(
          "AdsMessengerVisualEditorLandingScreenType",
        ).WELCOME_MESSAGE),
        (b.media_type = r("AdsMessengerJSONMediaFormatType").TEXT),
        (b.text_format =
          ((u = {}),
          (u.customer_action_type = r(
            "AdsMessengerVisualEditorCustomerActionType",
          ).AUTOFILL_MESSAGE),
          (u.message = ((l = {}), (l.autofill_message = E), (l.text = S), l)),
          u)),
        (b.image_format =
          ((_ = {}),
          (_.customer_action_type = r(
            "AdsMessengerVisualEditorCustomerActionType",
          ).QUICK_REPLIES),
          (_.message =
            ((p = {}),
            (p.attachment =
              ((m = {}),
              (m.type = "template"),
              (m.payload =
                ((d = {}),
                (d.template_type = r("AdsMessengerJSONTemplateType").GENERIC),
                (d.elements = [
                  ((c = {}),
                  (c.title = ""),
                  (c.buttons = []),
                  (c.image_hash = ""),
                  c),
                ]),
                d)),
              m)),
            (p.quick_replies = R),
            (p.text = S),
            p)),
          _)),
        (b.video_format =
          ((y = {}),
          (y.customer_action_type = r(
            "AdsMessengerVisualEditorCustomerActionType",
          ).QUICK_REPLIES),
          (y.message =
            ((h = {}),
            (h.attachment =
              ((g = {}),
              (g.type = r("AdsMessengerJSONMediaFormatType").VIDEO),
              (g.payload = ((f = {}), (f.attachment_id = ""), f)),
              g)),
            (h.quick_replies = R),
            (h.text = S),
            h)),
          y)),
        (b.ai_generated_icebreaker_toggle_enabled = r("isTruthy")(n)
          ? !o(
              "AdsAIGenIcebreakersValidationUtils",
            ).didIcebreakersFetchFailOrNotEligible(
              v == null ? void 0 : v.icebreakers,
            )
          : null),
        (b.ai_gen_conversation_model_version =
          v == null || (C = v.modelVersion) == null ? void 0 : C.valueOf()),
        (b.user_edit = !1),
        (b.surface = "visual_editor_new"),
        b
      );
    }
    l.default = e;
  },
  226,
);
